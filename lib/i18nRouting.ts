// Bilingual URL helpers. Italian is primary at "/", English lives under "/en".
// The blog is Italian-only (no /en/blog).

import servicePages from '../content/service-pages.json';

export const SITE_URL = 'https://digitinexus.com';
export type Lang = 'it' | 'en';

/** Language implied by the URL path. */
export function langFromPath(pathname: string): Lang {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'it';
}

/** The Italian-equivalent ("logical") path, stripping any /en prefix. */
export function logicalPath(pathname: string): string {
  if (pathname === '/en') return '/';
  if (pathname.startsWith('/en/')) return pathname.slice(3) || '/';
  return pathname || '/';
}

/** Does this logical path have an English version? (the blog is IT-only) */
export function hasEnglish(logical: string): boolean {
  return !logical.startsWith('/blog');
}

/** URL of the current page in the target language. */
export function urlForLang(pathname: string, target: Lang): string {
  const logical = logicalPath(pathname);
  if (target === 'it') return logical;
  const base = hasEnglish(logical) ? logical : '/'; // blog → English homepage
  return base === '/' ? '/en' : '/en' + base;
}

export function absolute(path: string): string {
  return SITE_URL + (path.startsWith('/') ? path : '/' + path);
}

interface PageMeta {
  it: { title: string; description: string };
  en: { title: string; description: string };
}

/** Per-page, per-language title/description (only for pages with an EN version). */
export const PAGE_META: Record<string, PageMeta> = {
  '/': {
    it: {
      title: 'DigitiNexus Web Agency | Siti su misura per studi e PMI',
      description:
        'Agenzia web italiana: progettiamo e realizziamo siti su misura per studi professionali, PMI e startup. Design premium, consegna in 1–4 settimane.',
    },
    en: {
      title: 'DigitiNexus Web Agency | Custom websites for firms & SMEs',
      description:
        'Italian web agency: we design and build custom websites for professional firms, SMEs and startups. Premium design, delivered in 1–4 weeks.',
    },
  },
  '/risorse-gratuite': {
    it: {
      title: 'Risorse gratuite per la tua presenza online | DigitiNexus',
      description:
        'Guide e risorse gratuite di DigitiNexus per migliorare la tua presenza online: Google Business Profile, marketing e strategia.',
    },
    en: {
      title: 'Free resources for your online presence | DigitiNexus',
      description:
        'Free guides and resources from DigitiNexus to improve your online presence: Google Business Profile, marketing and strategy.',
    },
  },
  '/chi-siamo': {
    it: {
      title: 'Chi siamo | DigitiNexus Web Agency',
      description:
        'Conosci DigitiNexus: la web agency fondata da Filippo Gentili e Nicola Palummo che progetta siti su misura per studi professionali, PMI e startup.',
    },
    en: {
      title: 'About us | DigitiNexus Web Agency',
      description:
        'Meet DigitiNexus: the web agency founded by Filippo Gentili and Nicola Palummo, designing custom websites for professional firms, SMEs and startups.',
    },
  },
};

// Le pagine servizio condividono lo slug tra IT ed EN (come /risorse-gratuite):
// title/description arrivano dallo stesso JSON usato da ServicePage e dal prerender.
for (const [slug, locales] of Object.entries(servicePages)) {
  PAGE_META[`/servizi/${slug}`] = {
    it: { title: locales.it.metaTitle, description: locales.it.metaDescription },
    en: { title: locales.en.metaTitle, description: locales.en.metaDescription },
  };
}
