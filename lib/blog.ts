import { ARTICLES } from '../content/blog';
import {
  SITE, CLUSTERS, CLUSTER_LIST, clusterBySlug, ARTICLE_BYLINE,
  CLUSTERS_EN, CLUSTER_LIST_EN, clusterFor, clusterListFor, clusterBySlugFor, articleByline,
} from '../content/blog/config';
import { getAuthor, authorProfileUrl } from '../content/blog/authors';
import { blogUI } from '../content/blog/ui-strings';
import { blogBasePath, articleUrl, categoryUrl, blogAltLocalePath } from './blogRouting';
import type { Article, ClusterId, ContentBlock, Locale } from '../content/blog/types';

export { SITE, CLUSTERS, CLUSTER_LIST, clusterBySlug, ARTICLE_BYLINE };
export { CLUSTERS_EN, CLUSTER_LIST_EN, clusterFor, clusterListFor, clusterBySlugFor, articleByline };
export { getAuthor, authorProfileUrl, blogUI };
export { blogBasePath, articleUrl, categoryUrl, blogAltLocalePath };
export type { Locale };

// ── Locale helpers ──────────────────────────────────────────────────────────
// Italian is primary at /blog; English lives under /en/blog. Articles without an
// explicit locale are Italian (legacy).
export function articleLocale(a: Article): Locale {
  return a.locale ?? 'it';
}
function langTag(locale: Locale): string {
  return locale === 'en' ? 'en-US' : 'it-IT';
}

// ── Date gating ─────────────────────────────────────────────────────────────
// An article is visible when its status is not "draft" and its publishDate is
// today or earlier. Future-dated posts stay hidden until their date.

function todayISO(now?: Date): string {
  const d = now ?? new Date();
  return d.toISOString().slice(0, 10);
}

// Preview mode bypasses date-gating so authors can see scheduled posts before
// their publishDate. Active in `npm run dev` (Vite DEV) and when BLOG_PREVIEW=1.
// Production builds (npm run build, no flag) keep real gating.
function isPreview(): boolean {
  try {
    if (typeof process !== 'undefined' && process.env && process.env.BLOG_PREVIEW === '1') return true;
  } catch { /* noop */ }
  try {
    // @ts-ignore - import.meta.env exists only under Vite
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV) return true;
  } catch { /* noop */ }
  return false;
}

export function isPublished(article: Article, now?: Date): boolean {
  if (article.status === 'draft') return false;
  if (isPreview()) return true;
  return article.publishDate <= todayISO(now);
}

/** All registered articles (including future/draft). Build-time use only. */
export function getAllArticles(): Article[] {
  return ARTICLES;
}

/** Visible articles for a locale, newest first. */
export function getVisibleArticles(locale: Locale = 'it', now?: Date): Article[] {
  return ARTICLES.filter((a) => articleLocale(a) === locale && isPublished(a, now)).sort((a, b) =>
    b.publishDate.localeCompare(a.publishDate),
  );
}

export function getArticleBySlug(slug: string, locale: Locale = 'it', now?: Date): Article | undefined {
  const a = ARTICLES.find((x) => x.slug === slug && articleLocale(x) === locale);
  if (!a) return undefined;
  if (!isPublished(a, now)) return undefined;
  return a;
}

export function getArticlesByCluster(cluster: ClusterId, locale: Locale = 'it', now?: Date): Article[] {
  return getVisibleArticles(locale, now).filter((a) => a.cluster === cluster);
}

export function getArticlesByAuthor(authorId: string, locale: Locale = 'it', now?: Date): Article[] {
  return getVisibleArticles(locale, now).filter((a) => a.authorId === authorId);
}

/** Related visible articles for a given article (uses internalLinks, falls back to cluster). */
export function getRelatedArticles(article: Article, now?: Date, limit = 3): Article[] {
  const locale = articleLocale(article);
  const linked = article.internalLinks
    .map((l) => getArticleBySlug(l.slug, locale, now))
    .filter((a): a is Article => Boolean(a) && a!.slug !== article.slug);
  const fromCluster = getArticlesByCluster(article.cluster, locale, now).filter(
    (a) => a.slug !== article.slug,
  );
  const seen = new Set<string>();
  const out: Article[] = [];
  for (const a of [...linked, ...fromCluster]) {
    if (seen.has(a.slug)) continue;
    seen.add(a.slug);
    out.push(a);
    if (out.length >= limit) break;
  }
  return out;
}

// ── URL + text helpers (routing helpers come from ./blogRouting) ─────────────
export function absoluteArticleUrl(slug: string, locale: Locale = 'it'): string {
  return `${SITE.baseUrl}${articleUrl(slug, locale)}`;
}
export function authorUrl(authorId: string): string {
  return `/author/${authorId}`;
}
/** Cover used INSIDE the article (no title band). Titled .webp → "-plain.webp".
 *  The plain illustration is language-neutral, so "-en.webp" also maps to "-plain.webp". */
export function coverInArticleSrc(src: string): string {
  if (!src.endsWith('.webp')) return src;
  return src.replace(/(?:-en)?\.webp$/, '-plain.webp');
}

// ── Internal-link gating (scheduling-aware) ─────────────────────────────────
// A link to /blog/<slug> is "active" only if that article is already published.
// Otherwise the renderer shows bold plain text instead of a dead link. When the
// target goes live (next rebuild), the same link automatically becomes clickable.

/** Returns {slug, locale} for an article href under /blog or /en/blog, else null. */
export function slugFromBlogHref(href: string): { slug: string; locale: Locale } | null {
  const en = href.match(/^\/en\/blog\/([^/?#]+)$/);
  if (en) return en[1] === 'category' ? null : { slug: en[1], locale: 'en' };
  const it = href.match(/^\/blog\/([^/?#]+)$/);
  if (it) return it[1] === 'categoria' ? null : { slug: it[1], locale: 'it' };
  return null; // category/index/external → not gated
}

/** true if href is safe to render as a link (external, non-article, or a published article). */
export function isInternalArticleLinkActive(href: string, now?: Date): boolean {
  const m = slugFromBlogHref(href);
  if (m === null) return true;
  return getArticleBySlug(m.slug, m.locale, now) !== undefined;
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 60);
}

function plainTextLength(blocks: ContentBlock[]): number {
  let words = 0;
  const count = (s: string) => s.split(/\s+/).filter(Boolean).length;
  for (const b of blocks) {
    if ('text' in b && typeof b.text === 'string') words += count(b.text);
    if (b.type === 'list') words += b.items.reduce((n, i) => n + count(i), 0);
    if (b.type === 'table') {
      words += b.headers.reduce((n, h) => n + count(h), 0);
      words += b.rows.flat().reduce((n, c) => n + count(c), 0);
    }
  }
  return words;
}

export function readingMinutes(article: Article): number {
  if (article.readingMinutes) return article.readingMinutes;
  const words = plainTextLength(article.body) + article.capsule.split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
}

export function formatDateIT(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  const months = [
    'gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno',
    'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre',
  ];
  return `${d} ${months[m - 1]} ${y}`;
}

export function formatDateEN(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  return `${months[m - 1]} ${d}, ${y}`;
}

/** Locale-aware date format. */
export function formatDate(iso: string, locale: Locale = 'it'): string {
  return locale === 'en' ? formatDateEN(iso) : formatDateIT(iso);
}

// ── JSON-LD schema ──────────────────────────────────────────────────────────
function organizationNode() {
  return {
    '@type': 'Organization',
    '@id': `${SITE.baseUrl}/#organization`,
    name: SITE.name,
    url: SITE.baseUrl,
    logo: { '@type': 'ImageObject', url: SITE.logo },
    sameAs: SITE.sameAs,
  };
}

function personNode(authorId: string) {
  const a = getAuthor(authorId);
  const node: Record<string, unknown> = {
    '@type': 'Person',
    '@id': `${SITE.baseUrl}/#person-${a.id}`,
    name: a.name,
    image: `${SITE.baseUrl}${a.avatar}`,
    jobTitle: a.role,
    sameAs: a.sameAs,
    worksFor: { '@id': `${SITE.baseUrl}/#organization` },
  };
  if (a.bio) node.description = a.bio;
  return node;
}

export function buildArticleSchema(article: Article) {
  const locale = articleLocale(article);
  const lang = langTag(locale);
  const url = absoluteArticleUrl(article.slug, locale);
  const cluster = clusterFor(article.cluster, locale);
  const cover = article.cover.src.startsWith('http')
    ? article.cover.src
    : `${SITE.baseUrl}${article.cover.src}`;

  const graph: Record<string, unknown>[] = [
    organizationNode(),
    personNode(article.authorId),
    {
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      isPartOf: { '@id': `${url}#webpage` },
      mainEntityOfPage: { '@id': `${url}#webpage` },
      headline: article.title,
      description: article.metaDescription,
      abstract: article.capsule,
      image: [cover],
      datePublished: article.publishDate,
      dateModified: article.updatedDate,
      inLanguage: lang,
      author: { '@id': `${SITE.baseUrl}/#person-${article.authorId}` },
      publisher: { '@id': `${SITE.baseUrl}/#organization` },
      keywords: [article.keywordPrimary, ...article.keywordsSecondary].join(', '),
      articleSection: cluster.label,
      citation: article.sources.map((s) => ({
        '@type': 'CreativeWork',
        name: s.label,
        url: s.url,
      })),
    },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: article.metaTitle,
      inLanguage: lang,
      isPartOf: { '@id': `${SITE.baseUrl}/#website` },
      primaryImageOfPage: { '@type': 'ImageObject', url: cover },
      datePublished: article.publishDate,
      dateModified: article.updatedDate,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: locale === 'en' ? `${SITE.baseUrl}/en` : `${SITE.baseUrl}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.baseUrl}${blogBasePath(locale)}` },
        {
          '@type': 'ListItem',
          position: 3,
          name: cluster.label,
          item: `${SITE.baseUrl}${categoryUrl(cluster.slug, locale)}`,
        },
        { '@type': 'ListItem', position: 4, name: article.title, item: url },
      ],
    },
  ];

  if (article.faq.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: article.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

export function buildBlogIndexSchema(articles: Article[], locale: Locale = 'it') {
  const base = blogBasePath(locale);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationNode(),
      {
        '@type': 'Blog',
        '@id': `${SITE.baseUrl}${base}#blog`,
        name: `Blog ${SITE.name}`,
        url: `${SITE.baseUrl}${base}`,
        inLanguage: langTag(locale),
        publisher: { '@id': `${SITE.baseUrl}/#organization` },
        blogPost: articles.map((a) => ({
          '@type': 'BlogPosting',
          headline: a.title,
          url: absoluteArticleUrl(a.slug, locale),
          datePublished: a.publishDate,
          dateModified: a.updatedDate,
        })),
      },
    ],
  };
}

// ── hreflang helper ─────────────────────────────────────────────────────────
/** The other-locale slug for an article, via its own altLocaleSlug or the reverse
 *  link from the other locale's registry (so only one side needs altLocaleSlug). */
function counterpartSlug(article: Article): string | null {
  if (article.altLocaleSlug) return article.altLocaleSlug;
  const locale = articleLocale(article);
  const other: Locale = locale === 'en' ? 'it' : 'en';
  const match = ARTICLES.find(
    (a) => articleLocale(a) === other && a.altLocaleSlug === article.slug,
  );
  return match ? match.slug : null;
}

/** Reciprocal alternate URLs for an article that has a counterpart in the other locale. */
export function articleAlternates(article: Article): { hreflang: string; href: string }[] {
  const alt = counterpartSlug(article);
  if (!alt) return [];
  const locale = articleLocale(article);
  const selfUrl = absoluteArticleUrl(article.slug, locale);
  const altUrl = absoluteArticleUrl(alt, locale === 'en' ? 'it' : 'en');
  const itUrl = locale === 'it' ? selfUrl : altUrl;
  const enUrl = locale === 'en' ? selfUrl : altUrl;
  return [
    { hreflang: 'it', href: itUrl },
    { hreflang: 'en', href: enUrl },
    { hreflang: 'x-default', href: itUrl },
  ];
}
