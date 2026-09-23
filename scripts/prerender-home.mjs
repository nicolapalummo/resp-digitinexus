// Post-build prerender for the homepage (/ and /en) and the resources page.
// The site is client-rendered, so without this the homepage HTML has an empty
// #root and crawlers that don't run JS (incl. AI crawlers) see no content.
// We inject a semantic, dark-themed static representation built from the i18n
// content into #root; React replaces it on mount (createRoot), so users get the
// full animated homepage while crawlers get real, indexable, citable content.
//
// Runs AFTER prerender-blog.mjs (which reads the clean dist/index.html template).

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DIST = join(ROOT, 'dist');
const SITE = 'https://digitinexus.com';

const it = JSON.parse(readFileSync(join(ROOT, 'i18n/locales/it.json'), 'utf8'));
const en = JSON.parse(readFileSync(join(ROOT, 'i18n/locales/en.json'), 'utf8'));
const SERVICE_PAGES = JSON.parse(readFileSync(join(ROOT, 'content/service-pages.json'), 'utf8'));

const esc = (s = '') => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Blog cluster category URLs per locale (for internal linking from the homepage).
const CLUSTERS = {
  it: { base: '/blog', seg: 'categoria', slugs: ['costi-tempi', 'qualita', 'seo-geo', 'studi-professionali', 'pmi', 'startup', 'intelligenza-artificiale', 'ads-funnel'] },
  en: { base: '/en/blog', seg: 'category', slugs: ['costs-timing', 'quality-design', 'seo-geo', 'professional-firms', 'small-business', 'startups', 'artificial-intelligence', 'ads-funnel'] },
};

const META = {
  it: {
    lang: 'it', home: '/',
    title: 'DigitiNexus Web Agency | Siti su misura per studi e PMI',
    desc: 'Agenzia web italiana: progettiamo e realizziamo siti su misura per studi professionali, PMI e startup. Design premium, consegna in 1–4 settimane.',
    blogLabel: 'Vai al blog',
  },
  en: {
    lang: 'en', home: '/en',
    title: 'DigitiNexus Web Agency | Custom websites for firms & SMEs',
    desc: 'Italian web agency: we design and build custom websites for professional firms, SMEs and startups. Premium design, delivered in 1–4 weeks.',
    blogLabel: 'Go to the blog',
  },
};

function servicesHtml(s) {
  if (!s) return '';
  const items = ['service1', 'service2', 'service3'].map((k) => s[k]).filter(Boolean);
  return items.map((sv) => `<article><h3>${esc(sv.title)}</h3>${sv.price ? `<p><strong>${esc(sv.price)}</strong></p>` : ''}<p>${esc(sv.description || '')}</p></article>`).join('');
}

function reviewsHtml(r) {
  if (!r) return '';
  return ['review1', 'review2', 'review3', 'review4', 'review5', 'review6', 'review7', 'review8', 'review9'].map((k) => r[k]).filter(Boolean)
    .map((rv) => `<blockquote><p>${esc(rv.quote)}</p><cite>${esc(rv.author || '')}${rv.role ? ', ' + esc(rv.role) : (rv.company ? ', ' + esc(rv.company) : '')}</cite></blockquote>`).join('');
}

function faqHtml(f) {
  if (!f) return '';
  return ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8'].map((k) => f[k]).filter(Boolean).map((q) => {
    const a = q.answer || [q.answer1, q.answer2, q.answer3].filter(Boolean).join(' ');
    return `<div><h3>${esc(q.question)}</h3><p>${esc(a)}</p></div>`;
  }).join('');
}

function clusterLinksHtml(locale) {
  const c = CLUSTERS[locale];
  const labels = locale === 'it'
    ? ['Costi, tempi e processo', 'Qualità e design', 'SEO & GEO', 'Studi professionali', 'PMI di servizi', 'Startup', 'Intelligenza Artificiale', 'Ads & Funnel']
    : ['Costs, timing & process', 'Quality & design', 'SEO & GEO', 'Professional firms', 'Small business', 'Startups', 'Artificial Intelligence', 'Ads & Funnel'];
  return c.slugs.map((slug, i) => `<li><a href="${c.base}/${c.seg}/${slug}">${esc(labels[i])}</a></li>`).join('');
}

function buildContent(locale) {
  const t = locale === 'en' ? en : it;
  const m = META[locale];
  const heroTitle = `${esc(t.hero?.title || 'DigitiNexus')} DigitiNexus`;
  return `
<main class="bg-black text-white">
  <header class="max-w-5xl mx-auto px-6 py-20" style="min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center">
    ${t.hero?.badge ? `<p class="text-orange-400">${esc(t.hero.badge)}</p>` : ''}
    <h1 class="text-4xl md:text-6xl font-semibold tracking-tight">${heroTitle}</h1>
    <p class="mt-5 text-lg text-white/70 max-w-2xl">${esc(t.hero?.subtitle || '')}</p>
    ${t.intro?.text2 ? `<p class="mt-4 text-white/70 max-w-2xl">${esc(t.intro.text2)}</p>` : ''}
  </header>
  <section class="max-w-5xl mx-auto px-6 py-10">
    <h2 class="text-3xl font-medium">${esc(t.about?.title || 'Chi siamo')}</h2>
    ${(Array.isArray(t.about?.text) ? t.about.text : [t.about?.text]).filter(Boolean).map((p) => `<p class="mt-3 text-white/70">${esc(p)}</p>`).join('')}
    <img src="/team-digitinexus-v2.webp" alt="${esc(t.about?.imageAlt || 'Team DigitiNexus')}" width="1537" height="1023" loading="lazy" />
    <p>Filippo Gentili &amp; Nicola Palummo</p>
  </section>
  <section class="max-w-5xl mx-auto px-6 py-10">
    <h2 class="text-3xl font-medium">${esc(t.services?.title || 'Servizi')}</h2>
    ${t.services?.subtitle ? `<p class="mt-3 text-white/70">${esc(t.services.subtitle)}</p>` : ''}
    ${t.services?.verticalsTitle ? `<p>${esc(t.services.verticalsTitle)}</p><ul>${Object.keys(SERVICE_PAGES).map((slug) => `<li><a href="${locale === 'en' ? '/en' : ''}/servizi/${slug}">${esc(SERVICE_PAGES[slug][locale].h1)}</a></li>`).join('')}</ul>` : ''}
    ${servicesHtml(t.services)}
  </section>
  <section class="max-w-5xl mx-auto px-6 py-10">
    <h2 class="text-3xl font-medium">${esc(t.reviews?.title || 'Recensioni')}</h2>
    ${reviewsHtml(t.reviews)}
  </section>
  <section class="max-w-5xl mx-auto px-6 py-10">
    <h2 class="text-3xl font-medium">${esc(t.faq?.title || 'FAQ')}</h2>
    ${faqHtml(t.faq)}
  </section>
  <section class="max-w-5xl mx-auto px-6 py-10">
    <h2 class="text-3xl font-medium">${esc(t.guides?.title || '')}</h2>
    ${t.guides?.subtitle ? `<p class="mt-3 text-white/70">${esc(t.guides.subtitle)}</p>` : ''}
    <ul>${clusterLinksHtml(locale)}</ul>
    <p><a href="${CLUSTERS[locale].base}">${esc(m.blogLabel)}</a></p>
  </section>
  <footer class="max-w-5xl mx-auto px-6 py-10 text-white/50">
    <p>© ${new Date().getFullYear()} DigitiNexus LLC · <a href="${locale === 'en' ? '/en' : ''}/chi-siamo">${locale === 'en' ? 'About us' : 'Chi siamo'}</a> · <a href="/Privacy%20Policy%20DigitiNexus%20LLC.pdf">Privacy Policy</a> · <a href="/Terms%20&amp;%20Conditions%20DigitiNexus%20LLC.pdf">Terms &amp; Conditions</a></p>
  </footer>
</main>`;
}

const RES_META = {
  it: {
    path: '/risorse-gratuite',
    title: 'Risorse gratuite per la tua presenza online | DigitiNexus',
    desc: 'Guide e risorse gratuite di DigitiNexus per migliorare la tua presenza online: Google Business Profile, marketing e strategia.',
  },
  en: {
    path: '/en/risorse-gratuite',
    title: 'Free resources for your online presence | DigitiNexus',
    desc: 'Free guides and resources from DigitiNexus to improve your online presence: Google Business Profile, marketing and strategy.',
  },
};

function buildResources(locale) {
  const f = (locale === 'en' ? en : it).freemium || {};
  const steps = ['step1', 'step2', 'step3'].map((k) => f[k]).filter(Boolean);
  return `
<main class="bg-black text-white">
  <header class="max-w-4xl mx-auto px-6 py-20">
    <h1 class="text-4xl md:text-6xl font-semibold tracking-tight">${esc(f.pageTitle || 'Resources')}</h1>
    <p class="mt-5 text-lg text-white/70">${esc(f.pageSubtitle || '')}</p>
  </header>
  <section class="max-w-4xl mx-auto px-6 py-10">
    ${steps.map((s) => `<article><h2>${esc(s.title)}</h2><p>${esc(s.description || '')}</p></article>`).join('')}
  </section>
  <section class="max-w-4xl mx-auto px-6 py-10">
    <h2>${esc(f.finalTitle || '')}</h2>
    <p>${esc(f.finalDescription || '')}</p>
  </section>
</main>`;
}

// Read the clean built shell (has homepage JSON-LD + built CSS link).
const baseHtml = readFileSync(join(DIST, 'index.html'), 'utf8');

function renderHome(locale) {
  const m = META[locale];
  let html = baseHtml;
  if (locale === 'en') {
    html = html.replace(/<html lang="[^"]*"/, '<html lang="en"');
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(m.title)}</title>`);
    html = html.replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(m.desc)}" />`);
    html = html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${SITE}/en" />`);
    html = html.replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${SITE}/en" />`);
    html = html.replace(/<meta property="og:locale"[^>]*>/, `<meta property="og:locale" content="en_US" />`);
    html = html.replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(m.title)}" />`);
    html = html.replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(m.desc)}" />`);
  }
  // reciprocal hreflang (home has an EN counterpart)
  const alt = `    <link rel="alternate" hreflang="it" href="${SITE}/" />\n    <link rel="alternate" hreflang="en" href="${SITE}/en" />\n    <link rel="alternate" hreflang="x-default" href="${SITE}/" />\n  </head>`;
  html = html.replace('</head>', alt);
  // inject static content into #root
  html = html.replace(/<div id="root">\s*<\/div>/, `<div id="root">${buildContent(locale)}</div>`);
  return html;
}

function renderResources(locale) {
  const m = RES_META[locale];
  let html = baseHtml;
  // strip homepage JSON-LD (resources page is not the org homepage)
  html = html.replace(/\s*<!-- Structured data:[\s\S]*?-->/g, '');
  html = html.replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '');
  if (locale === 'en') html = html.replace(/<html lang="[^"]*"/, '<html lang="en"');
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(m.title)}</title>`);
  html = html.replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(m.desc)}" />`);
  html = html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${SITE}${m.path}" />`);
  html = html.replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${SITE}${m.path}" />`);
  html = html.replace(/<meta property="og:locale"[^>]*>/, `<meta property="og:locale" content="${locale === 'en' ? 'en_US' : 'it_IT'}" />`);
  html = html.replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(m.title)}" />`);
  html = html.replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(m.desc)}" />`);
  const alt = `    <link rel="alternate" hreflang="it" href="${SITE}/risorse-gratuite" />\n    <link rel="alternate" hreflang="en" href="${SITE}/en/risorse-gratuite" />\n    <link rel="alternate" hreflang="x-default" href="${SITE}/risorse-gratuite" />\n  </head>`;
  html = html.replace('</head>', alt);
  // page-level structured data (the org schema was stripped above with the homepage block)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${SITE}${m.path}#webpage`,
        url: `${SITE}${m.path}`,
        name: m.title,
        description: m.desc,
        inLanguage: locale === 'en' ? 'en-US' : 'it-IT',
        isPartOf: { '@id': `${SITE}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${SITE}${m.path}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: locale === 'en' ? `${SITE}/en` : `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: locale === 'en' ? 'Free resources' : 'Risorse gratuite', item: `${SITE}${m.path}` },
        ],
      },
    ],
  };
  html = html.replace('</head>', `    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>\n  </head>`);
  html = html.replace(/<div id="root">\s*<\/div>/, `<div id="root">${buildResources(locale)}</div>`);
  return html;
}

// Shared head transform for the static content pages (chi-siamo, servizi/*):
// same-slug bilingual pattern as /risorse-gratuite.
function applyPageHead(html, { locale, path, pathIt, pathEn, title, desc, jsonLd }) {
  html = html.replace(/\s*<!-- Structured data:[\s\S]*?-->/g, '');
  html = html.replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '');
  if (locale === 'en') html = html.replace(/<html lang="[^"]*"/, '<html lang="en"');
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`);
  html = html.replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(desc)}" />`);
  html = html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${SITE}${path}" />`);
  html = html.replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${SITE}${path}" />`);
  html = html.replace(/<meta property="og:locale"[^>]*>/, `<meta property="og:locale" content="${locale === 'en' ? 'en_US' : 'it_IT'}" />`);
  html = html.replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(title)}" />`);
  html = html.replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(desc)}" />`);
  const alt = `    <link rel="alternate" hreflang="it" href="${SITE}${pathIt}" />\n    <link rel="alternate" hreflang="en" href="${SITE}${pathEn}" />\n    <link rel="alternate" hreflang="x-default" href="${SITE}${pathIt}" />\n  </head>`;
  html = html.replace('</head>', alt);
  html = html.replace('</head>', `    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>\n  </head>`);
  return html;
}

function renderAbout(locale) {
  const a = (locale === 'en' ? en : it).aboutPage;
  const path = locale === 'en' ? '/en/chi-siamo' : '/chi-siamo';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${SITE}${path}#webpage`,
        url: `${SITE}${path}`,
        name: a.metaTitle,
        description: a.metaDescription,
        inLanguage: locale === 'en' ? 'en-US' : 'it-IT',
        isPartOf: { '@id': `${SITE}/#website` },
        about: { '@id': `${SITE}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${SITE}${path}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: locale === 'en' ? `${SITE}/en` : `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: a.kicker, item: `${SITE}${path}` },
        ],
      },
      ...a.founders.map((f) => ({
        '@type': 'Person',
        name: f.name,
        jobTitle: f.role,
        sameAs: [f.linkedin],
        worksFor: { '@id': `${SITE}/#organization` },
      })),
    ],
  };
  const body = `
<main class="bg-black text-white" style="min-height:100vh">
  <div class="max-w-5xl mx-auto px-6 py-24">
    <p class="text-orange-400">${esc(a.kicker)}</p>
    <h1 class="text-4xl md:text-6xl font-medium tracking-tight">${esc(a.h1)}</h1>
    <p class="mt-6 text-2xl text-white">${esc(a.intro)}</p>
    ${a.story.map((p) => `<p class="mt-4 text-white/70">${esc(p)}</p>`).join('')}
    <img src="/team-digitinexus-v2.webp" alt="${esc((locale === 'en' ? en : it).about?.imageAlt || 'Team DigitiNexus')}" width="1537" height="1023" loading="lazy" />
    <h2 class="text-3xl font-medium">${esc(a.foundersTitle)}</h2>
    ${a.founders.map((f) => `<article><h3>${esc(f.name)}</h3><p>${esc(f.role)}</p><p><a href="${esc(f.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn</a></p></article>`).join('')}
    <h2 class="text-3xl font-medium">${esc(a.howTitle)}</h2>
    ${a.how.map((h) => `<article><h3>${esc(h.title)}</h3><p>${esc(h.text)}</p></article>`).join('')}
    <p>${esc(a.ctaText)} <a href="https://calendly.com/digitinexus/30min" target="_blank" rel="noopener noreferrer">${esc(a.ctaLabel)}</a></p>
  </div>
</main>`;
  let html = applyPageHead(baseHtml, {
    locale, path,
    pathIt: '/chi-siamo', pathEn: '/en/chi-siamo',
    title: a.metaTitle, desc: a.metaDescription, jsonLd,
  });
  html = html.replace(/<div id="root">\s*<\/div>/, `<div id="root">${body}</div>`);
  return html;
}

function renderService(slug, locale) {
  const s = SERVICE_PAGES[slug][locale];
  const base = locale === 'en' ? '/en' : '';
  const path = `${base}/servizi/${slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${SITE}${path}#service`,
        name: s.h1,
        description: s.metaDescription,
        url: `${SITE}${path}`,
        provider: { '@id': `${SITE}/#organization` },
        areaServed: { '@type': 'Country', name: locale === 'en' ? 'Italy' : 'Italia' },
        serviceType: s.h1,
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE}${path}#webpage`,
        url: `${SITE}${path}`,
        name: s.metaTitle,
        description: s.metaDescription,
        inLanguage: locale === 'en' ? 'en-US' : 'it-IT',
        isPartOf: { '@id': `${SITE}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${SITE}${path}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: locale === 'en' ? `${SITE}/en` : `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: s.h1, item: `${SITE}${path}` },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE}${path}#faq`,
        mainEntity: s.faq.items.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };
  const body = `
<main class="bg-black text-white" style="min-height:100vh">
  <div class="max-w-5xl mx-auto px-6 py-24">
    <p class="text-orange-400">${esc(s.kicker)}</p>
    <h1 class="text-4xl md:text-6xl font-medium tracking-tight">${esc(s.h1)}</h1>
    <p class="mt-6 text-lg text-white/70">${esc(s.subtitle)}</p>
    <h2 class="text-3xl font-medium">${esc(s.pains.title)}</h2>
    <ul>${s.pains.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
    <h2 class="text-3xl font-medium">${esc(s.includes.title)}</h2>
    ${s.includes.items.map((i) => `<article><h3>${esc(i.title)}</h3><p>${esc(i.text)}</p></article>`).join('')}
    <h2 class="text-3xl font-medium">${esc(s.pricing.title)}</h2>
    <p>${esc(s.pricing.text)}</p>
    <h2 class="text-3xl font-medium">${esc(s.process.title)}</h2>
    ${s.process.steps.map((st) => `<article><h3>${esc(st.label)}: ${esc(st.title)}</h3><p>${esc(st.text)}</p></article>`).join('')}
    <h2 class="text-3xl font-medium">${esc(s.faq.title)}</h2>
    <dl>${s.faq.items.map((f) => `<dt>${esc(f.q)}</dt><dd>${esc(f.a)}</dd>`).join('')}</dl>
    <h2 class="text-3xl font-medium">${esc(s.articles.title)}</h2>
    <ul>${s.articles.items.map((a) => `<li><a href="${esc(a.href)}">${esc(a.label)}</a></li>`).join('')}</ul>
    <p>${esc(s.cta.text)} <a href="https://calendly.com/digitinexus/30min" target="_blank" rel="noopener noreferrer">${esc(s.cta.label)}</a></p>
  </div>
</main>`;
  let html = applyPageHead(baseHtml, {
    locale, path,
    pathIt: `/servizi/${slug}`, pathEn: `/en/servizi/${slug}`,
    title: s.metaTitle, desc: s.metaDescription, jsonLd,
  });
  html = html.replace(/<div id="root">\s*<\/div>/, `<div id="root">${body}</div>`);
  return html;
}

// Client-only routes (React renders the real content; crawlers must not index
// them, but the URL must exist as a static asset so Vercel serves 200 instead
// of the 404.html fallback — /confirmation is the post-Calendly-booking page).
const CONFIRMATION_META = {
  it: { path: '/confirmation', title: 'Grazie di aver prenotato | DigitiNexus' },
  en: { path: '/en/confirmation', title: 'Thanks for booking | DigitiNexus' },
};

function renderConfirmation(locale) {
  const m = CONFIRMATION_META[locale];
  let html = baseHtml;
  html = html.replace(/\s*<!-- Structured data:[\s\S]*?-->/g, '');
  html = html.replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '');
  if (locale === 'en') html = html.replace(/<html lang="[^"]*"/, '<html lang="en"');
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(m.title)}</title>`);
  html = html.replace(/<meta name="robots"[^>]*>/, '<meta name="robots" content="noindex, follow" />');
  html = html.replace(/<meta name="googlebot"[^>]*>/, '<meta name="googlebot" content="noindex, follow" />');
  // no canonical/og:url pointing at the homepage on a noindex utility page
  html = html.replace(/\s*<link rel="canonical"[^>]*>/, '');
  html = html.replace(/\s*<link rel="alternate"[^>]*>/g, '');
  return html;
}

function render404() {
  let html = baseHtml;
  html = html.replace(/\s*<!-- Structured data:[\s\S]*?-->/g, '');
  html = html.replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '');
  html = html.replace(/<title>[\s\S]*?<\/title>/, '<title>404 — Pagina non trovata | DigitiNexus</title>');
  html = html.replace(/<meta name="robots"[^>]*>/, '<meta name="robots" content="noindex, follow" />');
  html = html.replace(/<meta name="googlebot"[^>]*>/, '<meta name="googlebot" content="noindex, follow" />');
  // a 404 must not declare the homepage as canonical
  html = html.replace(/\s*<link rel="canonical"[^>]*>/, '');
  html = html.replace(/\s*<link rel="alternate"[^>]*>/g, '');
  const body = `
<main class="bg-black text-white" style="min-height:60vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:4rem 1.5rem">
  <div>
    <p style="color:#f97316;font-family:monospace;letter-spacing:.3em">404</p>
    <h1>Pagina non trovata</h1>
    <p>La pagina che cerchi non esiste o è stata spostata.</p>
    <p><a href="/">Torna alla home</a></p>
  </div>
</main>`;
  html = html.replace(/<div id="root">\s*<\/div>/, `<div id="root">${body}</div>`);
  return html;
}

writeFileSync(join(DIST, 'index.html'), renderHome('it'), 'utf8');
mkdirSync(join(DIST, 'en'), { recursive: true });
writeFileSync(join(DIST, 'en', 'index.html'), renderHome('en'), 'utf8');
writeFileSync(join(DIST, '404.html'), render404(), 'utf8');

mkdirSync(join(DIST, 'risorse-gratuite'), { recursive: true });
writeFileSync(join(DIST, 'risorse-gratuite', 'index.html'), renderResources('it'), 'utf8');
mkdirSync(join(DIST, 'en', 'risorse-gratuite'), { recursive: true });
writeFileSync(join(DIST, 'en', 'risorse-gratuite', 'index.html'), renderResources('en'), 'utf8');

mkdirSync(join(DIST, 'confirmation'), { recursive: true });
writeFileSync(join(DIST, 'confirmation', 'index.html'), renderConfirmation('it'), 'utf8');
mkdirSync(join(DIST, 'en', 'confirmation'), { recursive: true });
writeFileSync(join(DIST, 'en', 'confirmation', 'index.html'), renderConfirmation('en'), 'utf8');

mkdirSync(join(DIST, 'chi-siamo'), { recursive: true });
writeFileSync(join(DIST, 'chi-siamo', 'index.html'), renderAbout('it'), 'utf8');
mkdirSync(join(DIST, 'en', 'chi-siamo'), { recursive: true });
writeFileSync(join(DIST, 'en', 'chi-siamo', 'index.html'), renderAbout('en'), 'utf8');

for (const slug of Object.keys(SERVICE_PAGES)) {
  mkdirSync(join(DIST, 'servizi', slug), { recursive: true });
  writeFileSync(join(DIST, 'servizi', slug, 'index.html'), renderService(slug, 'it'), 'utf8');
  mkdirSync(join(DIST, 'en', 'servizi', slug), { recursive: true });
  writeFileSync(join(DIST, 'en', 'servizi', slug, 'index.html'), renderService(slug, 'en'), 'utf8');
}

console.log(`[prerender-home] home, risorse, confirmation, chi-siamo e ${Object.keys(SERVICE_PAGES).length} pagine servizio generate (IT+EN).`);
