// UI strings for the blog, per locale. Keeps the article components free of
// hardcoded Italian so /blog (it) and /en/blog (en) can share one component tree.
import type { Locale } from './types';

export interface BlogUIStrings {
  by: string;
  minRead: string;
  inThisArticle: string;
  faqTitle: string;
  sources: string;
  related: string;
  readMore: string;
  read: string;
  backToBlog: string;
  notFoundTitle: string;
  notFoundBody: string;
  pillar: string;
  writtenBy: string; // "(written by {name} - cofounder)" → use {name} token
  cofounder: string;
  ctaText: string;
  ctaLabel: string;
  homeCrumb: string;
  blogCrumb: string;
  // index page
  indexKicker: string;
  indexTitle: string;
  indexSubtitle: string;
  indexEmpty: string;
  indexMetaTitle: string;
  indexMetaDescription: string;
  // category page
  catEyebrow: string; // "Category" / "Categoria"
  catEmpty: string;
}

const IT: BlogUIStrings = {
  by: 'Di',
  minRead: 'min di lettura',
  inThisArticle: 'In questo articolo',
  faqTitle: 'Domande frequenti',
  sources: 'Fonti',
  related: 'Articoli correlati',
  readMore: 'Leggi',
  read: 'Leggi',
  backToBlog: 'Torna al blog',
  notFoundTitle: 'Articolo non trovato',
  notFoundBody: "L'articolo che cerchi non esiste o non è ancora stato pubblicato.",
  pillar: 'Pillar · ',
  writtenBy: 'articolo scritto da',
  cofounder: 'cofounder',
  ctaText:
    'Vuoi un sito premium consegnato in 1–4 settimane? Parliamone: ti diamo tempi e preventivo chiari, senza impegno.',
  ctaLabel: 'Prenota una call',
  homeCrumb: 'Home',
  blogCrumb: 'Blog',
  indexKicker: 'Blog',
  indexTitle: 'Siti web, senza giri di parole.',
  indexSubtitle:
    'Costi e tempi reali, qualità del design, come farti trovare su Google e citare dalle AI. Guide concrete con dati e fonti, in italiano.',
  indexEmpty: 'I primi articoli stanno per arrivare. Torna presto.',
  indexMetaTitle: 'Blog DigitiNexus | Siti web, costi, tempi, SEO e GEO',
  indexMetaDescription:
    'Guide pratiche su quanto costa e quanto tempo serve per un sito web, qualità del design, SEO e GEO. Italiano nativo, dati con fonte.',
  catEyebrow: 'Categoria',
  catEmpty: 'Nessun articolo in questa categoria, per ora.',
};

const EN: BlogUIStrings = {
  by: 'By',
  minRead: 'min read',
  inThisArticle: 'In this article',
  faqTitle: 'Frequently asked questions',
  sources: 'Sources',
  related: 'Related articles',
  readMore: 'Read',
  read: 'Read',
  backToBlog: 'Back to the blog',
  notFoundTitle: 'Article not found',
  notFoundBody: "The article you are looking for does not exist or has not been published yet.",
  pillar: 'Pillar · ',
  writtenBy: 'written by',
  cofounder: 'cofounder',
  ctaText:
    'Want a premium website delivered in 1–4 weeks? Let’s talk: clear timeline and a transparent quote, no strings attached.',
  ctaLabel: 'Book a call',
  homeCrumb: 'Home',
  blogCrumb: 'Blog',
  indexKicker: 'Blog',
  indexTitle: 'Websites, no fluff.',
  indexSubtitle:
    'Real costs and timelines, design quality, how to get found on Google and cited by AI. Practical guides backed by data and sources.',
  indexEmpty: 'The first articles are on their way. Check back soon.',
  indexMetaTitle: 'DigitiNexus Blog | Websites, costs, timing, SEO and GEO',
  indexMetaDescription:
    'Practical guides on what a website costs and how long it takes, design quality, SEO and GEO. Data-backed, US-sourced.',
  catEyebrow: 'Category',
  catEmpty: 'No articles in this category yet.',
};

export function blogUI(locale: Locale = 'it'): BlogUIStrings {
  return locale === 'en' ? EN : IT;
}
