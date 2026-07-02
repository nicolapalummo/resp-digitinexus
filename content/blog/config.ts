import type { Cluster, ClusterId, Locale } from './types';

// ── Site / Organization (used for canonical, OG, JSON-LD) ───────────────────
export const SITE = {
  name: 'DigitiNexus',
  baseUrl: 'https://digitinexus.com',
  blogBase: '/blog',
  locale: 'it_IT',
  lang: 'it',
  description:
    'Siti web su misura, veloci ed eleganti, consegnati in 1–4 settimane e ottimizzati per la crescita.',
  // Organization schema
  logo: 'https://digitinexus.com/logo.png',
  // Default social card image (absolute URL)
  defaultOgImage: 'https://digitinexus.com/Logo%20DN%20Mongolfiera.webp',
  // Entity consistency (sameAs) — verified Google Business Profile.
  // Add real LinkedIn company / Clutch / Sortlist URLs here when available.
  sameAs: [
    'https://maps.app.goo.gl/Q4Su2Uwb38CFKdYg7',
  ],
  // CTA destination reused across articles
  bookCallUrl:
    'https://calendly.com/digitinexus/30min',
} as const;

// ── Byline a fine articolo (organizzazione, non persona) ────────────────────
export const ARTICLE_BYLINE = {
  kicker: 'Articolo a cura di',
  name: 'DigitiNexus — Agenzia Web e Design',
  description:
    'Siamo un team di designer e sviluppatori specializzati in SEO, Next.js e crescita digitale per studi professionali e PMI, italiane e non solo. Costruiamo siti che portano traffico reale e clienti reali.',
  logo: '/logoDN.webp',
  ctaLabel: 'Lavora con noi',
  ctaHref: SITE.bookCallUrl,
} as const;

// English byline (US blog)
export const ARTICLE_BYLINE_EN = {
  kicker: 'Article by',
  name: 'DigitiNexus — Web & Design Agency',
  description:
    'We are a team of designers and developers specialized in SEO, Next.js and digital growth for professional firms, small businesses and startups, in the US and beyond. We build websites that bring real traffic and real clients.',
  logo: '/logoDN.webp',
  ctaLabel: 'Work with us',
  ctaHref: SITE.bookCallUrl,
} as const;

export function articleByline(locale: Locale = 'it') {
  return locale === 'en' ? ARTICLE_BYLINE_EN : ARTICLE_BYLINE;
}

// ── Editorial start (Settimana 1) + cadence ─────────────────────────────────
// Confermato: avvio lunedì 29 giugno 2026, uscite lunedì + giovedì.
export const SCHEDULE_START = '2026-06-29';

// ── Topic clusters (pillar pages) ───────────────────────────────────────────
export const CLUSTERS: Record<string, Cluster> = {
  c1: {
    id: 'c1',
    slug: 'costi-tempi',
    label: 'Costi, tempi e processo',
    description:
      'Quanto costa e quanto tempo serve davvero per un sito web: fasce di prezzo reali, tempi e processo trasparente.',
  },
  c2: {
    id: 'c2',
    slug: 'qualita',
    label: 'Qualità e design',
    description:
      'Cosa rende un sito di qualità: su misura vs template, design premium, performance e siti che convertono.',
  },
  c3: {
    id: 'c3',
    slug: 'seo-geo',
    label: 'SEO & GEO',
    description:
      'Farsi trovare su Google e farsi citare dalle AI: SEO tecnica, Generative Engine Optimization e schema markup.',
  },
  c4: {
    id: 'c4',
    slug: 'studi-professionali',
    label: 'Studi professionali',
    description:
      'Il sito per avvocati, commercialisti, architetti e consulenti: trasformare la reputazione offline in autorità online.',
  },
  c5: {
    id: 'c5',
    slug: 'pmi',
    label: 'PMI di servizi',
    description:
      'Il sito per una PMI di servizi: dal sito-brochure al sito che genera contatti e lead qualificati.',
  },
  c6: {
    id: 'c6',
    slug: 'startup',
    label: 'Startup',
    description:
      'Dal MVP al sito investor-ready: velocità di lancio e credibilità per clienti e investitori.',
  },
  c7: {
    id: 'c7',
    slug: 'intelligenza-artificiale',
    label: 'Intelligenza Artificiale',
    description:
      'AI per il business, senza hype: agenti e chatbot, automazioni, RAG sui tuoi dati, casi d\'uso concreti per studi, PMI e startup.',
  },
};

export const CLUSTER_LIST = Object.values(CLUSTERS);

export function clusterBySlug(slug: string): Cluster | undefined {
  return CLUSTER_LIST.find((c) => c.slug === slug);
}

// ── English clusters (US blog) ──────────────────────────────────────────────
// English URL segments + labels. Keyed by the same ClusterId.
export const CLUSTERS_EN: Record<string, Cluster> = {
  c1: { id: 'c1', slug: 'costs-timing', label: 'Costs, timing & process',
    description: 'What a website really costs and how long it takes: real price ranges, timelines and a transparent process.' },
  c2: { id: 'c2', slug: 'quality-design', label: 'Quality & design',
    description: 'What makes a website great: custom vs template, premium design, performance and websites that convert.' },
  c3: { id: 'c3', slug: 'seo-geo', label: 'SEO & GEO',
    description: 'Getting found on Google and cited by AI: technical SEO, Generative Engine Optimization and schema markup.' },
  c4: { id: 'c4', slug: 'professional-firms', label: 'Professional firms',
    description: 'Websites for attorneys, CPAs, architects and consultants: turning offline reputation into online authority.' },
  c5: { id: 'c5', slug: 'small-business', label: 'Small business',
    description: 'Websites for service businesses: from a brochure site to a site that generates qualified leads.' },
  c6: { id: 'c6', slug: 'startups', label: 'Startups',
    description: 'From MVP to investor-ready website: launch speed and credibility for customers and investors.' },
  c7: { id: 'c7', slug: 'artificial-intelligence', label: 'Artificial Intelligence',
    description: 'AI for business, without the hype: agents and chatbots, automation, RAG on your data, concrete use cases for firms, SMBs and startups.' },
};

export const CLUSTER_LIST_EN = Object.values(CLUSTERS_EN);

/** Cluster metadata for a locale. */
export function clusterFor(id: ClusterId, locale: Locale = 'it'): Cluster {
  return (locale === 'en' ? CLUSTERS_EN : CLUSTERS)[id];
}
export function clusterListFor(locale: Locale = 'it'): Cluster[] {
  return locale === 'en' ? CLUSTER_LIST_EN : CLUSTER_LIST;
}
export function clusterBySlugFor(slug: string, locale: Locale = 'it'): Cluster | undefined {
  return clusterListFor(locale).find((c) => c.slug === slug);
}
