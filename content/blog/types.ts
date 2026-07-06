// Type system for the DigitiNexus blog.
// Content is authored as typed data (no markdown parser dependency) so we keep
// full control over GEO structure (capsule, answer-first H2s, FAQ schema).

export type ClusterId = 'c1' | 'c2' | 'c3' | 'c4' | 'c5' | 'c6' | 'c7' | 'c8';

/** Content locale. Italian is primary at /blog; English lives under /en/blog. */
export type Locale = 'it' | 'en';

export interface Cluster {
  id: ClusterId;
  /** URL segment, e.g. /blog/categoria/costi-tempi */
  slug: string;
  label: string;
  description: string;
}

export type ArticleStatus = 'draft' | 'scheduled' | 'published';

export interface Cover {
  /** Path under /public, e.g. /blog/quanto-costa-sito-web.webp */
  src: string;
  /** Italian descriptive alt text (with keyword where natural) */
  alt: string;
}

// ── Inline + block content model ────────────────────────────────────────────
// Inline markup inside `text` strings supports a tiny subset:
//   **bold**, *italic*, [anchor](/blog/slug) or [anchor](https://external)
// Parsed by parseInline() in components/blog/inline.tsx (no dependency).

export interface CapsuleBlock {
  type: 'capsule';
  /** 20–25 words, self-contained answer to the title. Also used as schema description. */
  text: string;
}
export interface HeadingBlock {
  type: 'h2' | 'h3';
  text: string;
  /** optional explicit anchor id; auto-derived from text if omitted */
  id?: string;
}
export interface ParagraphBlock {
  type: 'p';
  text: string;
  /** mark as the answer-first lead sentence under a heading (styling only) */
  lead?: boolean;
}
export interface ListBlock {
  type: 'list';
  ordered?: boolean;
  items: string[];
}
export interface TableBlock {
  type: 'table';
  caption?: string;
  headers: string[];
  rows: string[][];
}
export interface CalloutBlock {
  type: 'callout';
  variant: 'info' | 'tip' | 'warning' | 'placeholder';
  /** placeholder = data to confirm before publishing (verità-vincolo) */
  text: string;
}
export interface QuoteBlock {
  type: 'quote';
  text: string;
  cite?: string;
}
export interface CtaBlock {
  type: 'cta';
  text: string;
  label: string;
  href: string;
}
/** Client-side interactive cost/time calculator (hydrates in the SPA; the
 *  prerendered HTML relies on the article's static price/time table for SEO). */
export interface CalculatorBlock {
  type: 'calculator';
}

export type ContentBlock =
  | CapsuleBlock
  | HeadingBlock
  | ParagraphBlock
  | ListBlock
  | TableBlock
  | CalloutBlock
  | QuoteBlock
  | CtaBlock
  | CalculatorBlock;

export interface FaqItem {
  q: string;
  /** 40–55 words, used for FAQPage schema */
  a: string;
}

export interface InternalLink {
  /** target article slug (without /blog/ prefix) */
  slug: string;
  /** descriptive anchor text */
  anchor: string;
}

export interface Source {
  label: string;
  url: string;
}

export interface Article {
  /** editorial number from the plan (#1..#45) */
  id: number;
  /** H1 / page title */
  title: string;
  /** ≤ 60 chars, keyword-first */
  metaTitle: string;
  /** url slug without leading slash, e.g. quanto-costa-sito-web */
  slug: string;
  /** content locale; defaults to 'it' when omitted (legacy IT articles) */
  locale?: Locale;
  /** slug of the same article in the other locale (for hreflang alternates) */
  altLocaleSlug?: string;
  /** ≤ 155 chars */
  metaDescription: string;
  /** GEO answer capsule (also rendered as the lead block) */
  capsule: string;
  keywordPrimary: string;
  keywordsSecondary: string[];
  cluster: ClusterId;
  isPillar?: boolean;
  intent: string; // e.g. "C·MOFU"
  authorId: string;
  /** ISO date (YYYY-MM-DD) — go-live date */
  publishDate: string;
  /** ISO date — last meaningful update */
  updatedDate: string;
  status: ArticleStatus;
  cover: Cover;
  /** estimated reading minutes (auto if omitted) */
  readingMinutes?: number;
  body: ContentBlock[];
  faq: FaqItem[];
  internalLinks: InternalLink[];
  sources: Source[];
  /** set true when the post contains unresolved placeholders that block publishing */
  hasBlockingPlaceholder?: boolean;
}

export interface Author {
  id: string;
  name: string;
  role: string;
  /** short bio (2–3 sentences) shown at the foot of each article */
  bio: string;
  /** extended bio for the /author/<id> page */
  bioLong?: string;
  /** path under /public */
  avatar: string;
  /** public profiles for Person.sameAs (E-E-A-T) */
  sameAs: string[];
}
