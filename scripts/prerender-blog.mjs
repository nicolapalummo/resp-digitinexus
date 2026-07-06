// Post-build prerender for the DigitiNexus blog.
// Emits SEO-complete static HTML for /blog, every published /blog/<slug> and
// every /blog/categoria/<cluster>, plus sitemap.xml, rss.xml and robots.txt.
//
// Build-time date gating: articles with a future publishDate are excluded, so
// scheduled posts go live only when a (re)build runs on/after their date.
//
// Zero new dependencies: uses esbuild (already installed via Vite) to bundle the
// React-free lib/blog.ts, then renders blocks to HTML with a small templater here.

import { build } from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DIST = join(ROOT, 'dist');

// ── 1. Bundle lib/blog.ts (data + schema, no React) ─────────────────────────
const tmp = join(DIST, '.blog-data.mjs');
await build({
  entryPoints: [join(ROOT, 'lib/blog.ts')],
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile: tmp,
  logLevel: 'error',
});
const blog = await import(pathToFileURL(tmp).href);
rmSync(tmp, { force: true });

const {
  getVisibleArticles, getArticlesByCluster, getRelatedArticles,
  buildArticleSchema, buildBlogIndexSchema,
  SITE, CLUSTERS, CLUSTER_LIST,
  articleUrl, absoluteArticleUrl, categoryUrl, blogBasePath,
  formatDate, readingMinutes, slugifyHeading,
  clusterFor, clusterListFor, articleByline, blogUI, articleAlternates,
  getAuthor, authorProfileUrl, coverInArticleSrc,
} = blog;

const LOCALES = ['it', 'en'];
const articles = getVisibleArticles('it'); // IT set drives logs/legacy references
console.log(`[prerender] ${articles.length} articoli visibili IT (esclusi i futuri).`);

// ── 2. HTML helpers ─────────────────────────────────────────────────────────
const esc = (s = '') => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

function inlineToHtml(text) {
  // **bold**, *italic*, [label](href)
  let out = '';
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  let last = 0, m;
  while ((m = re.exec(text))) {
    out += esc(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith('**')) out += `<strong>${esc(tok.slice(2, -2))}</strong>`;
    else if (tok.startsWith('*')) out += `<em>${esc(tok.slice(1, -1))}</em>`;
    else {
      const lm = tok.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      const href = lm[2];
      const label = lm[1];
      const ext = href.startsWith('http');
      if (!ext && !blog.isInternalArticleLinkActive(href)) {
        // Scheduling-aware: link to a not-yet-published article → bold plain text.
        out += `<strong>${esc(label)}</strong>`;
      } else {
        out += `<a href="${esc(href)}"${ext ? ' target="_blank" rel="noopener noreferrer"' : ''}>${esc(label)}</a>`;
      }
    }
    last = m.index + tok.length;
  }
  out += esc(text.slice(last));
  return out;
}

function blockToHtml(b) {
  switch (b.type) {
    case 'capsule':
      return `<div class="blog-capsule"><span class="blog-kicker">In breve</span><p>${inlineToHtml(b.text)}</p></div>`;
    case 'h2': return `<h2 id="${b.id || slugifyHeading(b.text)}">${esc(b.text)}</h2>`;
    case 'h3': return `<h3 id="${b.id || slugifyHeading(b.text)}">${esc(b.text)}</h3>`;
    case 'p': return `<p${b.lead ? ' class="lead"' : ''}>${inlineToHtml(b.text)}</p>`;
    case 'list':
      return b.ordered
        ? `<ol>${b.items.map((i) => `<li>${inlineToHtml(i)}</li>`).join('')}</ol>`
        : `<ul>${b.items.map((i) => `<li>${inlineToHtml(i)}</li>`).join('')}</ul>`;
    case 'table':
      return `<figure class="blog-table"><table><thead><tr>${
        b.headers.map((h) => `<th>${inlineToHtml(h)}</th>`).join('')
      }</tr></thead><tbody>${
        b.rows.map((r) => `<tr>${r.map((c) => `<td>${inlineToHtml(c)}</td>`).join('')}</tr>`).join('')
      }</tbody></table>${b.caption ? `<figcaption>${inlineToHtml(b.caption)}</figcaption>` : ''}</figure>`;
    case 'callout':
      return `<div class="blog-callout blog-callout-${b.variant}"><p>${inlineToHtml(b.text)}</p></div>`;
    case 'quote':
      return `<blockquote>${inlineToHtml(b.text)}${b.cite ? `<cite>— ${esc(b.cite)}</cite>` : ''}</blockquote>`;
    case 'cta':
      return `<div class="blog-cta"><p>${inlineToHtml(b.text)}</p><a class="blog-btn" href="${esc(b.href)}"${b.href.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : ''}>${esc(b.label)}</a></div>`;
    case 'calculator':
      // Client-only interactive widget; the article's static price/time table carries the SEO content.
      return '';
    default: return '';
  }
}

const STATIC_HEADER = `
<header class="blog-static-header">
  <a href="/" class="blog-brand">DigitiNexus</a>
  <nav><a href="/#work">Lavori</a><a href="/#how-it-works">Processo</a><a href="/#reviews">Recensioni</a><a href="/#services">Servizi</a><a href="/blog">Blog</a><a href="/risorse-gratuite">Risorse</a></nav>
</header>`;

const STATIC_FOOTER = `
<footer class="blog-static-footer">
  <p>© ${new Date().getFullYear()} DigitiNexus LLC — Siti web su misura, consegnati in 1–4 settimane.</p>
  <p><a href="/blog">Blog</a> · <a href="/">Home</a> · <a href="/Privacy%20Policy%20DigitiNexus%20LLC.pdf" target="_blank" rel="noopener noreferrer">Privacy Policy</a> · <a href="/Terms%20&amp;%20Conditions%20DigitiNexus%20LLC.pdf" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a></p>
</footer>`;

// Minimal inline CSS so the no-JS / pre-hydration view is readable even if the
// Tailwind CDN script hasn't run yet. The SPA replaces #root once JS loads.
const PRERENDER_CSS = `
<style id="blog-prerender-css">
  #root{max-width:100%}
  .blog-prerender{max-width:760px;margin:0 auto;padding:120px 24px 80px;font-family:Manrope,Arial,sans-serif;color:#e5e5e5;line-height:1.7}
  .blog-prerender h1{color:#fff;font-size:2.4rem;line-height:1.15;margin:.3em 0}
  .blog-prerender h2{color:#fff;font-size:1.7rem;margin:2em 0 .5em}
  .blog-prerender h3{color:#fff;font-size:1.3rem;margin:1.6em 0 .4em}
  .blog-prerender a{color:#fb923c}
  .blog-prerender .lead{color:#fff;font-weight:500}
  .blog-capsule{border:1px solid rgba(249,115,22,.25);background:rgba(249,115,22,.06);border-radius:16px;padding:20px 24px;margin:24px 0}
  .blog-capsule p{font-size:1.2rem;color:#fff;margin:.3em 0 0}
  .blog-cover{margin:24px 0}.blog-cover img{width:100%;border-radius:16px;border:1px solid rgba(255,255,255,.1);display:block}
  .blog-kicker{font:11px/1 monospace;letter-spacing:.2em;text-transform:uppercase;color:#fb923c}
  .blog-table{overflow-x:auto;border:1px solid rgba(255,255,255,.1);border-radius:16px;margin:28px 0}
  .blog-table table{width:100%;border-collapse:collapse}
  .blog-table th,.blog-table td{padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08);text-align:left;vertical-align:top}
  .blog-table th{color:#fff;background:rgba(255,255,255,.04)}
  .blog-table figcaption{padding:10px 16px;color:#737373;font-size:.8rem}
  .blog-callout{border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:16px 20px;margin:22px 0}
  .blog-callout-placeholder{border-color:rgba(239,68,68,.35);background:rgba(239,68,68,.06)}
  .blog-cta{border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:24px;margin:32px 0}
  .blog-btn{display:inline-block;background:#fff;color:#000;border-radius:14px;padding:12px 20px;text-decoration:none;font-weight:600;margin-top:8px}
  .blog-meta{color:#737373;font-size:.9rem;margin:16px 0 0}
  .blog-breadcrumb{color:#737373;font-size:.8rem}
  .blog-breadcrumb a{color:#a3a3a3}
  blockquote{border-left:2px solid rgba(249,115,22,.5);padding-left:18px;margin:24px 0;color:#fff;font-style:italic}
  .blog-static-header{display:flex;gap:20px;align-items:center;justify-content:center;padding:18px;border-bottom:1px solid rgba(255,255,255,.06);flex-wrap:wrap}
  .blog-static-header a{color:#cfcfcf;text-decoration:none}.blog-static-header .blog-brand{font-weight:600;color:#fff}
  .blog-static-footer{text-align:center;padding:40px 20px;color:#737373;border-top:1px solid rgba(255,255,255,.06)}
  .blog-static-footer a{color:#a3a3a3}
  .blog-grid{display:grid;gap:20px;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));max-width:1100px;margin:0 auto;padding:0 24px 60px}
  .blog-card{border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:22px;text-decoration:none;color:inherit;display:block}
  .blog-card h3{color:#fff;margin:.4em 0}
  .blog-faq dt{color:#fff;font-weight:600;margin-top:18px}
  .blog-sources a{color:#a3a3a3}
  .blog-author{display:flex;gap:16px;align-items:flex-start;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.02);border-radius:16px;padding:22px;margin:28px 0}
  .blog-byline-logo{width:56px;height:56px;border-radius:14px;object-fit:cover;background:rgba(255,255,255,.1);flex-shrink:0}
  .blog-byline-cta{display:inline-block;border:1px solid rgba(255,255,255,.25);border-radius:14px;padding:8px 16px;text-decoration:none;color:#fff;font-weight:500;margin-top:6px}
  .blog-byline-writer{font-style:italic;color:#737373;font-size:.9rem;margin:2px 0 0}
  .blog-byline-writer a{color:#fb923c;font-style:normal}
</style>`;

// ── 3. Head transform (reuse built dist/index.html shell) ───────────────────
const baseHtml = readFileSync(join(DIST, 'index.html'), 'utf8');

function renderPage({ title, description, canonical, ogImage, ogType, body, jsonLd, published, modified, alternates, htmlLang }) {
  let html = baseHtml;
  // Strip the homepage JSON-LD (and its comment) from the base template so blog pages carry only their own schema.
  html = html.replace(/\s*<!-- Structured data:[\s\S]*?-->/g, '');
  html = html.replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '');
  // html lang
  if (htmlLang) html = html.replace(/<html lang="[^"]*"/, `<html lang="${esc(htmlLang)}"`);
  // title
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`);
  // description
  html = html.replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(description)}" />`);
  // canonical
  html = html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${esc(canonical)}" />`);
  // drop the homepage hreflang alternates, then add this page's own (if translated)
  html = html.replace(/\s*<link rel="alternate"[^>]*>/g, '');
  if (alternates && alternates.length) {
    const links = alternates.map((a) => `<link rel="alternate" hreflang="${esc(a.hreflang)}" href="${esc(a.href)}" />`).join('\n    ');
    html = html.replace('</head>', `    ${links}\n  </head>`);
  }
  // OG / Twitter
  const ogMap = {
    'og:title': title, 'og:description': description, 'og:type': ogType,
    'og:url': canonical, 'og:image': ogImage, 'og:locale': htmlLang === 'en' ? 'en_US' : 'it_IT',
    'twitter:title': title, 'twitter:description': description, 'twitter:image': ogImage,
  };
  for (const [k, v] of Object.entries(ogMap)) {
    const attr = k.startsWith('og:') ? 'property' : 'name';
    const re = new RegExp(`<meta ${attr}="${k}"[^>]*>`);
    const tag = `<meta ${attr}="${k}" content="${esc(v)}" />`;
    html = re.test(html) ? html.replace(re, tag) : html.replace('</head>', `    ${tag}\n  </head>`);
  }
  // article time + JSON-LD + prerender CSS
  const extra = [];
  if (published) extra.push(`<meta property="article:published_time" content="${esc(published)}" />`);
  if (modified) extra.push(`<meta property="article:modified_time" content="${esc(modified)}" />`);
  extra.push(`<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`);
  extra.push(PRERENDER_CSS.trim());
  html = html.replace('</head>', `    ${extra.join('\n    ')}\n  </head>`);
  // body into #root
  html = html.replace(/<div id="root">\s*<\/div>/, `<div id="root">${body}</div>`);
  return html;
}

function writePage(routePath, html) {
  const outDir = join(DIST, routePath);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html, 'utf8');
}

// Reciprocal hreflang for listing pages (blog index + categories). Articles get
// theirs from articleAlternates(); listing URLs are derivable from the locale maps.
function listingAlternates(pathIt, pathEn) {
  return [
    { hreflang: 'it', href: `${SITE.baseUrl}${pathIt}` },
    { hreflang: 'en', href: `${SITE.baseUrl}${pathEn}` },
    { hreflang: 'x-default', href: `${SITE.baseUrl}${pathIt}` },
  ];
}

// ── 4-6. Per-locale: article pages, blog index, category pages ──────────────
function emitLocale(locale) {
  const ui = blogUI(locale);
  const byline = articleByline(locale);
  const homeHref = locale === 'en' ? '/en' : '/';
  const blogHref = blogBasePath(locale); // /blog or /en/blog
  const routeBase = blogHref.slice(1);   // blog or en/blog
  const localeArticles = getVisibleArticles(locale);
  if (localeArticles.length === 0) return 0;

  // Article pages
  for (const a of localeArticles) {
    const cluster = clusterFor(a.cluster, locale);
    const related = getRelatedArticles(a);
    const au = getAuthor(a.authorId);
    const u = authorProfileUrl(a.authorId);
    const name = u ? `<a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(au.name)}</a>` : esc(au.name);
    const inBreve = locale === 'en' ? 'In short' : 'In breve';
    const body = `
${STATIC_HEADER}
<main class="blog-prerender">
  <nav class="blog-breadcrumb"><a href="${homeHref}">${esc(ui.homeCrumb)}</a> › <a href="${blogHref}">${esc(ui.blogCrumb)}</a> › <a href="${categoryUrl(cluster.slug, locale)}">${esc(cluster.label)}</a></nav>
  <p class="blog-kicker">${a.isPillar ? esc(ui.pillar) : ''}${esc(cluster.label)}</p>
  <h1>${esc(a.title)}</h1>
  <p class="blog-meta">${esc(ui.by)} ${name} · ${esc(formatDate(a.publishDate, locale))} · ${readingMinutes(a)} ${esc(ui.minRead)}</p>
  <div class="blog-capsule"><span class="blog-kicker">${esc(inBreve)}</span><p>${inlineToHtml(a.capsule)}</p></div>
  <figure class="blog-cover"><img src="${esc(coverInArticleSrc(a.cover.src))}" alt="${esc(a.cover.alt)}" loading="lazy" /></figure>
  ${a.body.map(blockToHtml).join('\n  ')}
  ${a.faq.length ? `<section class="blog-faq"><h2>${esc(ui.faqTitle)}</h2><dl>${a.faq.map((f) => `<dt>${esc(f.q)}</dt><dd>${esc(f.a)}</dd>`).join('')}</dl></section>` : ''}
  ${a.sources.length ? `<section class="blog-sources"><h2>${esc(ui.sources)}</h2><ul>${a.sources.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.label)}</a></li>`).join('')}</ul></section>` : ''}
  <section class="blog-author"><img src="${esc(byline.logo)}" alt="DigitiNexus" class="blog-byline-logo" /><div><div class="blog-kicker">${esc(byline.kicker)}</div><p><strong>${esc(byline.name)}</strong></p><p>${esc(byline.description)}</p><p class="blog-byline-writer">(${esc(ui.writtenBy)} ${name} - ${esc(ui.cofounder)})</p><p><a class="blog-byline-cta" href="${esc(byline.ctaHref)}" target="_blank" rel="noopener noreferrer">${esc(byline.ctaLabel)}</a></p></div></section>
  ${related.length ? `<section><h2>${esc(ui.related)}</h2><div class="blog-grid">${related.map((r) => `<a class="blog-card" href="${articleUrl(r.slug, locale)}"><h3>${esc(r.title)}</h3></a>`).join('')}</div></section>` : ''}
</main>
${STATIC_FOOTER}`;
    const html = renderPage({
      title: a.metaTitle,
      description: a.metaDescription,
      canonical: absoluteArticleUrl(a.slug, locale),
      ogImage: a.cover.src.startsWith('http') ? a.cover.src : `${SITE.baseUrl}${a.cover.src}`,
      ogType: 'article',
      body,
      jsonLd: buildArticleSchema(a),
      published: a.publishDate,
      modified: a.updatedDate,
      alternates: articleAlternates(a),
      htmlLang: locale,
    });
    writePage(`${routeBase}/${a.slug}`, html);
  }

  // Blog index
  {
    const cards = localeArticles.map((a) => `<a class="blog-card" href="${articleUrl(a.slug, locale)}"><p class="blog-kicker">${esc(clusterFor(a.cluster, locale).label)}</p><h3>${esc(a.title)}</h3><p>${esc(a.metaDescription)}</p></a>`).join('');
    const body = `
${STATIC_HEADER}
<main class="blog-prerender">
  <p class="blog-kicker">${esc(ui.indexKicker)}</p>
  <h1>${esc(ui.indexTitle)}</h1>
  <p class="lead">${esc(ui.indexSubtitle)}</p>
  <nav class="blog-breadcrumb">${clusterListFor(locale).map((c) => `<a href="${categoryUrl(c.slug, locale)}">${esc(c.label)}</a>`).join(' · ')}</nav>
</main>
<div class="blog-grid">${cards}</div>
${STATIC_FOOTER}`;
    const html = renderPage({
      title: ui.indexMetaTitle,
      description: ui.indexMetaDescription,
      canonical: `${SITE.baseUrl}${blogHref}`,
      ogImage: SITE.defaultOgImage,
      ogType: 'website',
      body,
      jsonLd: buildBlogIndexSchema(localeArticles, locale),
      alternates: getVisibleArticles('it').length && getVisibleArticles('en').length
        ? listingAlternates(blogBasePath('it'), blogBasePath('en'))
        : undefined,
      htmlLang: locale,
    });
    writePage(routeBase, html);
  }

  // Category pages
  for (const c of clusterListFor(locale)) {
    const inCluster = getArticlesByCluster(c.id, locale);
    if (inCluster.length === 0) continue;
    const cards = inCluster.map((a) => `<a class="blog-card" href="${articleUrl(a.slug, locale)}"><h3>${esc(a.title)}</h3><p>${esc(a.metaDescription)}</p></a>`).join('');
    const catSeg = locale === 'en' ? 'category' : 'categoria';
    const body = `
${STATIC_HEADER}
<main class="blog-prerender">
  <nav class="blog-breadcrumb"><a href="${homeHref}">${esc(ui.homeCrumb)}</a> › <a href="${blogHref}">${esc(ui.blogCrumb)}</a> › ${esc(c.label)}</nav>
  <h1>${esc(c.label)}</h1>
  <p class="lead">${esc(c.description)}</p>
</main>
<div class="blog-grid">${cards}</div>
${STATIC_FOOTER}`;
    const html = renderPage({
      title: `${c.label} | ${ui.indexMetaTitle}`,
      description: c.description,
      canonical: `${SITE.baseUrl}${categoryUrl(c.slug, locale)}`,
      ogImage: SITE.defaultOgImage,
      ogType: 'website',
      body,
      jsonLd: buildBlogIndexSchema(inCluster, locale),
      alternates: getArticlesByCluster(c.id, 'it').length && getArticlesByCluster(c.id, 'en').length
        ? listingAlternates(
            categoryUrl(clusterFor(c.id, 'it').slug, 'it'),
            categoryUrl(clusterFor(c.id, 'en').slug, 'en'),
          )
        : undefined,
      htmlLang: locale,
    });
    writePage(`${routeBase}/${catSeg}/${c.slug}`, html);
  }
  return localeArticles.length;
}

for (const loc of LOCALES) {
  const n = emitLocale(loc);
  console.log(`[prerender] ${loc}: ${n} articoli + index + categorie.`);
}
console.log('[prerender] HTML statico generato in dist/blog.');

// ── 7. sitemap.xml ──────────────────────────────────────────────────────────
const nonEmptyClusters = CLUSTER_LIST.filter((c) => getArticlesByCluster(c.id).length > 0);
const sitemapUrls = [
  { loc: `${SITE.baseUrl}/`, lastmod: null, priority: '1.0' },
  { loc: `${SITE.baseUrl}/en`, lastmod: null, priority: '0.9' },
  { loc: `${SITE.baseUrl}/risorse-gratuite`, lastmod: null, priority: '0.6' },
  { loc: `${SITE.baseUrl}/en/risorse-gratuite`, lastmod: null, priority: '0.5' },
  { loc: `${SITE.baseUrl}${SITE.blogBase}`, lastmod: articles[0]?.updatedDate, priority: '0.8' },
  ...nonEmptyClusters.map((c) => ({ loc: `${SITE.baseUrl}${categoryUrl(c.slug)}`, lastmod: null, priority: '0.6' })),
  ...articles.map((a) => ({ loc: absoluteArticleUrl(a.slug), lastmod: a.updatedDate, priority: '0.7' })),
  // English blog
  ...(getVisibleArticles('en').length ? [{ loc: `${SITE.baseUrl}/en/blog`, lastmod: getVisibleArticles('en')[0]?.updatedDate, priority: '0.8' }] : []),
  ...clusterListFor('en').filter((c) => getArticlesByCluster(c.id, 'en').length > 0).map((c) => ({ loc: `${SITE.baseUrl}${categoryUrl(c.slug, 'en')}`, lastmod: null, priority: '0.6' })),
  ...getVisibleArticles('en').map((a) => ({ loc: absoluteArticleUrl(a.slug, 'en'), lastmod: a.updatedDate, priority: '0.7' })),
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map((u) => `  <url><loc>${esc(u.loc)}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}<priority>${u.priority}</priority></url>`).join('\n')}
</urlset>
`;
writeFileSync(join(DIST, 'sitemap.xml'), sitemap, 'utf8');

// ── 8. rss.xml ──────────────────────────────────────────────────────────────
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function toRFC822(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return `${['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][new Date(Date.UTC(y, m - 1, d)).getUTCDay()]}, ${String(d).padStart(2, '0')} ${MONTHS[m - 1]} ${y} 09:00:00 +0000`;
}
const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog DigitiNexus</title>
    <link>${SITE.baseUrl}${SITE.blogBase}</link>
    <description>${esc(SITE.description)}</description>
    <language>it-IT</language>
    <atom:link href="${SITE.baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
${articles.map((a) => `    <item>
      <title>${esc(a.title)}</title>
      <link>${absoluteArticleUrl(a.slug)}</link>
      <guid isPermaLink="true">${absoluteArticleUrl(a.slug)}</guid>
      <pubDate>${toRFC822(a.publishDate)}</pubDate>
      <description>${esc(a.metaDescription)}</description>
    </item>`).join('\n')}
  </channel>
</rss>
`;
writeFileSync(join(DIST, 'rss.xml'), rss, 'utf8');

// ── 9. robots.txt ───────────────────────────────────────────────────────────
const robots = `User-agent: *
Allow: /

Sitemap: ${SITE.baseUrl}/sitemap.xml
`;
writeFileSync(join(DIST, 'robots.txt'), robots, 'utf8');

// ── 10. llms.txt (indice per crawler AI, formato llmstxt.org) ───────────────
const enArticles = getVisibleArticles('en');
const llms = `# DigitiNexus

> Agenzia web italiana: progettiamo e realizziamo siti su misura per studi professionali, PMI e startup. Design premium, consegna in 1–4 settimane. Blog bilingue (IT/EN) su costi, tempi, qualità, SEO/GEO e intelligenza artificiale per le aziende.

## Pagine principali

- [Home (IT)](${SITE.baseUrl}/): chi siamo, servizi, processo, FAQ
- [Home (EN)](${SITE.baseUrl}/en): about, services, process, FAQ
- [Blog (IT)](${SITE.baseUrl}${SITE.blogBase}): guide su costi, tempi e qualità dei siti web
- [Blog (EN)](${SITE.baseUrl}/en/blog): guides on website costs, timing and quality
- [Risorse gratuite](${SITE.baseUrl}/risorse-gratuite): guide scaricabili

## Articoli (IT)

${articles.map((a) => `- [${a.title}](${absoluteArticleUrl(a.slug)}): ${a.metaDescription}`).join('\n')}

## Articles (EN)

${enArticles.map((a) => `- [${a.title}](${absoluteArticleUrl(a.slug, 'en')}): ${a.metaDescription}`).join('\n')}
`;
writeFileSync(join(DIST, 'llms.txt'), llms, 'utf8');

console.log('[prerender] sitemap.xml, rss.xml, robots.txt, llms.txt generati.');

