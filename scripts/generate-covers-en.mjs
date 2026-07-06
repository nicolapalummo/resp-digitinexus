// Generate English-titled blog covers (overlay only, no API).
// Reuses the cached raw illustrations (public/blog/covers/_raw/<base>.png) and
// re-applies the logo + title band with the ENGLISH article title, writing
// <base>-en.webp and <base>-en-600.webp. Run: node scripts/generate-covers-en.mjs

import { build } from 'esbuild';
import sharp from 'sharp';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve, basename } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUT_DIR = join(ROOT, 'public/blog/covers');
const RAW_DIR = join(OUT_DIR, '_raw');
const COVER_W = 1200, COVER_H = 630, RESPONSIVE_W = 600, WEBP_QUALITY = 82;
const LOGO_PATH = join(ROOT, 'public/logoDN.webp');
const FONT_PATH = join(ROOT, 'assets/fonts/Manrope-SemiBold.ttf');

function pangoEsc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

async function renderTitle(title) {
  const opts = {
    text: `<span foreground="#FFFFFF">${pangoEsc(title)}</span>`,
    font: 'Manrope SemiBold 30',
    width: COVER_W - 112,
    rgba: true,
    align: 'centre',
    spacing: 8,
  };
  if (existsSync(FONT_PATH)) opts.fontfile = FONT_PATH;
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

async function makeTitled(base, title) {
  const rawPath = join(RAW_DIR, `${base}.png`);
  if (!existsSync(rawPath)) { console.warn(`  [skip] raw mancante: ${base}.png`); return false; }
  const baseBuf = await sharp(readFileSync(rawPath)).resize(COVER_W, COVER_H, { fit: 'cover', position: 'centre' }).png().toBuffer();

  const logoComp = [];
  if (existsSync(LOGO_PATH)) {
    const logo = await sharp(readFileSync(LOGO_PATH)).resize({ height: 44 }).png().toBuffer();
    logoComp.push({ input: logo, top: 30, left: 48 });
  }

  const t = await renderTitle(title);
  const padV = 28;
  const bandH = Math.min(t.h + padV * 2, COVER_H - 80);
  const bandY = COVER_H - bandH;
  const textLeft = Math.max(0, Math.round((COVER_W - t.w) / 2));
  const titleComp = [{ input: bandSvg(bandY, bandH), top: 0, left: 0 }, { input: t.buf, top: bandY + padV, left: textLeft }];

  const main = await sharp(baseBuf).composite([...titleComp, ...logoComp]).webp({ quality: WEBP_QUALITY }).toBuffer();
  writeFileSync(join(OUT_DIR, `${base}-en.webp`), main);
  const small = await sharp(main).resize({ width: RESPONSIVE_W }).webp({ quality: WEBP_QUALITY }).toBuffer();
  writeFileSync(join(OUT_DIR, `${base}-en-600.webp`), small);
  return true;
}

// Load EN articles (locale === 'en') via esbuild bundle of lib/blog.
const tmp = join(ROOT, 'dist', '.covers-en-data.mjs');
mkdirSync(dirname(tmp), { recursive: true });
await build({
  stdin: { contents: `export { getAllArticles } from '../lib/blog';`, resolveDir: join(ROOT, 'scripts'), loader: 'ts' },
  bundle: true, format: 'esm', platform: 'node', outfile: tmp, logLevel: 'error',
});
const mod = await import(pathToFileURL(tmp).href);
const all = mod.getAllArticles();
const en = all.filter((a) => a.locale === 'en');

let ok = 0;
for (const a of en) {
  // cover.src EN è <slug-it>-en.webp ma il raw in _raw/ ha il nome IT: togli il suffisso
  const base = basename(a.cover.src).replace(/\.webp$/, '').replace(/-en$/, '');
  if (existsSync(join(OUT_DIR, `${base}-en.webp`))) { continue; } // già generata
  if (await makeTitled(base, a.title)) { ok++; }
}
console.log(`[covers-en] generate-covers-en: ${ok}/${en.length} cover EN titolate scritte (<base>-en.webp + -600).`);
