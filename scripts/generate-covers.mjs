// Blog cover pipeline: generate AI illustrations (OpenAI Images) + post-process
// (crop 1200x630, overlay real DigitiNexus logo + article title via SVG/Manrope)
// → WebP covers in public/blog/covers/<slug>.webp (+ 600w responsive variant).
//
// The MAIN STYLE PROMPT is ALWAYS prepended to each scene (content/blog/covers.ts).
// The AI never draws text or logo — those are code overlays only.
//
// Usage:
//   node scripts/generate-covers.mjs                # all (skips existing)
//   node scripts/generate-covers.mjs --only <slug>  # one slug
//   node scripts/generate-covers.mjs --force        # regenerate existing
//   node scripts/generate-covers.mjs --dry-run      # estimate, no API call
//   node scripts/generate-covers.mjs --reprocess    # re-run overlays from cached raw (no API)
//
// Secrets: OPENAI_API_KEY must be set in the environment (never hardcode/log it).

import { build } from 'esbuild';
import sharp from 'sharp';
import { readFileSync, writeFileSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUT_DIR = join(ROOT, 'public/blog/covers');
const RAW_DIR = join(OUT_DIR, '_raw');

// ── Config ──────────────────────────────────────────────────────────────────
const MODEL = 'gpt-image-2';
const GEN_SIZE = '1536x1024';
const QUALITY = 'medium';
const COST_PER_IMAGE = 0.04; // ~$ at quality medium (estimate, for reporting only)
const COVER_W = 1200, COVER_H = 630; // final cover / OG size
const RESPONSIVE_W = 600;
const WEBP_QUALITY = 82;

// Real DigitiNexus logo (from public/). Change here if you prefer another file.
const LOGO_PATH = join(ROOT, 'public/logoDN.webp');
// Manrope font for the SVG title (embedded so it renders identically in sharp).
const FONT_PATH = join(ROOT, 'assets/fonts/Manrope-SemiBold.ttf');

// ── Args ────────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const FORCE = args.includes('--force');
const DRY_RUN = args.includes('--dry-run');
const REPROCESS = args.includes('--reprocess');
const onlyIdx = args.indexOf('--only');
const ONLY = onlyIdx >= 0 ? args[onlyIdx + 1] : null;

// ── Load env (OPENAI_API_KEY from a gitignored .env.local or .env) ───────────
function loadEnv() {
  for (const name of ['.env.local', '.env']) { // .env.local wins (Vite convention)
    const p = join(ROOT, name);
    if (!existsSync(p)) continue;
    for (const line of readFileSync(p, 'utf8').split('\n')) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  }
}
loadEnv();

// ── Load covers + article titles (esbuild-bundle the TS, like prerender) ─────
async function loadData() {
  const tmp = join(ROOT, 'dist', '.covers-data.mjs');
  mkdirSync(dirname(tmp), { recursive: true });
  await build({
    stdin: {
      contents: `export { covers, buildPrompt } from '../content/blog/covers';\nexport { getAllArticles } from '../lib/blog';`,
      resolveDir: join(ROOT, 'scripts'),
      loader: 'ts',
    },
    bundle: true, format: 'esm', platform: 'node', outfile: tmp, logLevel: 'error',
  });
  const mod = await import(pathToFileURL(tmp).href);
  rmSync(tmp, { force: true });
  const titles = new Map(mod.getAllArticles().map((a) => [a.slug, a.title]));
  return { covers: mod.covers, buildPrompt: mod.buildPrompt, titles };
}

// ── OpenAI image generation (native fetch, b64_json → Buffer, with retry) ─────
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function generateRaw(finalPrompt) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) throw new Error('OPENAI_API_KEY non impostata nell\'ambiente.');
  let lastErr;
  for (let attempt = 1; attempt <= 4; attempt++) {
    const res = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: MODEL, prompt: finalPrompt, size: GEN_SIZE,
        quality: QUALITY, n: 1, background: 'opaque',
      }),
    });
    if (res.ok) {
      const json = await res.json();
      const b64 = json?.data?.[0]?.b64_json;
      if (!b64) throw new Error('Risposta senza b64_json.');
      return Buffer.from(b64, 'base64');
    }
    const txt = await res.text();
    lastErr = new Error(`OpenAI ${res.status}: ${txt.slice(0, 200)}`);
    if (res.status === 429 || res.status >= 500) { // retryable: backoff
      await sleep(attempt * 6000);
      continue;
    }
    throw lastErr; // non-retryable (auth, bad request, content policy)
  }
  throw lastErr;
}

// ── Title rendering: sharp native text with Manrope fontfile (reliable) ──────
function pangoEsc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

async function renderTitle(title) {
  const opts = {
    text: `<span foreground="#FFFFFF">${pangoEsc(title)}</span>`,
    font: 'Manrope SemiBold 30',
    width: COVER_W - 112, // wrap width (56px margins each side)
    rgba: true,
    align: 'centre', // centered title
    spacing: 8,
  };
  if (existsSync(FONT_PATH)) opts.fontfile = FONT_PATH;
  else console.warn(`  [warn] font Manrope non trovato in ${FONT_PATH} → font di sistema`);
  const buf = await sharp({ text: opts }).png().toBuffer();
  const meta = await sharp(buf).metadata();
  return { buf, h: meta.height || 60, w: meta.width || (COVER_W - 112) };
}

function bandSvg(bandY, bandH) {
  return Buffer.from(
    `<svg width="${COVER_W}" height="${COVER_H}" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="${bandY}" width="${COVER_W}" height="${bandH}" fill="#0a0a0a" fill-opacity="0.9"/>
      <rect x="0" y="${bandY}" width="${COVER_W}" height="4" fill="#F97316"/>
    </svg>`
  );
}

// ── Post-process: crop + logo + title → webp (+ 600w) ───────────────────────
async function postProcess(rawBuf, slug, title) {
  mkdirSync(OUT_DIR, { recursive: true });
  const baseBuf = await sharp(rawBuf).resize(COVER_W, COVER_H, { fit: 'cover', position: 'centre' }).png().toBuffer();

  // logo overlay (shared by both variants)
  const logoComp = [];
  if (existsSync(LOGO_PATH)) {
    const logo = await sharp(readFileSync(LOGO_PATH)).resize({ height: 44 }).png().toBuffer();
    logoComp.push({ input: logo, top: 30, left: 48 });
  } else {
    console.warn(`  [warn] logo non trovato in ${LOGO_PATH}`);
  }

  // title band + text (only for the titled variant)
  let titleComp = [];
  if (title) {
    const t = await renderTitle(title);
    const padV = 28;
    const bandH = Math.min(t.h + padV * 2, COVER_H - 80);
    const bandY = COVER_H - bandH;
    const textLeft = Math.max(0, Math.round((COVER_W - t.w) / 2));
    titleComp = [{ input: bandSvg(bandY, bandH), top: 0, left: 0 }, { input: t.buf, top: bandY + padV, left: textLeft }];
  }

  // PLAIN — illustration + logo, NO title band → used INSIDE the article
  const plain = await sharp(baseBuf).composite(logoComp).webp({ quality: WEBP_QUALITY }).toBuffer();
  writeFileSync(join(OUT_DIR, `${slug}-plain.webp`), plain);

  // TITLED — logo + title band → used for /blog cards + OG/social previews
  const main = await sharp(baseBuf).composite([...titleComp, ...logoComp]).webp({ quality: WEBP_QUALITY }).toBuffer();
  writeFileSync(join(OUT_DIR, `${slug}.webp`), main);

  // responsive variant (titled, for cards)
  const small = await sharp(main).resize({ width: RESPONSIVE_W }).webp({ quality: WEBP_QUALITY }).toBuffer();
  writeFileSync(join(OUT_DIR, `${slug}-600.webp`), small);
  return { main: main.length, small: small.length, plain: plain.length };
}

// ── Main ────────────────────────────────────────────────────────────────────
const { covers, buildPrompt, titles } = await loadData();
let list = covers;
if (ONLY) list = covers.filter((c) => c.slug === ONLY);
if (ONLY && list.length === 0) { console.error(`Slug non trovato: ${ONLY}`); process.exit(1); }

let generated = 0, skipped = 0, reprocessed = 0, failed = 0;
console.log(`[covers] ${list.length} cover da elaborare${DRY_RUN ? ' (DRY RUN)' : ''}\n`);

for (const c of list) {
  const out = join(OUT_DIR, `${c.slug}.webp`);
  const raw = join(RAW_DIR, `${c.slug}.png`);
  const title = titles.get(c.slug) || null;
  if (!title) console.warn(`  [warn] nessun titolo per ${c.slug} (articolo non ancora creato) → cover senza titolo`);

  if (existsSync(out) && !FORCE && !REPROCESS) { console.log(`  skip   ${c.slug} (esiste)`); skipped++; continue; }

  if (DRY_RUN) { console.log(`  would  ${c.slug}  (~$${COST_PER_IMAGE.toFixed(2)})`); generated++; continue; }

  try {
    let rawBuf;
    if (REPROCESS && existsSync(raw)) {
      rawBuf = readFileSync(raw);
      reprocessed++;
    } else {
      const finalPrompt = buildPrompt(c.scene);
      rawBuf = await generateRaw(finalPrompt);
      mkdirSync(RAW_DIR, { recursive: true });
      writeFileSync(raw, rawBuf); // cache raw for cheap re-overlay
      generated++;
      await sleep(1200); // gentle pacing between API calls
    }
    const sizes = await postProcess(rawBuf, c.slug, title);
    console.log(`  ok     ${c.slug}  (${(sizes.main / 1024).toFixed(0)}KB / ${(sizes.small / 1024).toFixed(0)}KB)`);
  } catch (e) {
    console.error(`  FAIL   ${c.slug}: ${e.message}`);
    failed++;
  }
}

const apiCalls = DRY_RUN ? generated : generated;
console.log(`\n[covers] generate=${generated} reprocess=${reprocessed} skip=${skipped} fail=${failed}`);
console.log(`[covers] costo stimato API: ~$${(apiCalls * COST_PER_IMAGE).toFixed(2)} (${apiCalls} immagini × $${COST_PER_IMAGE})`);
