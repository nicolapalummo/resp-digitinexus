// Lightweight blog routing helpers. CRUCIAL: this module must NOT import the
// article registry (content/blog), so the eager app shell (Header, ExploreGuides)
// can use it without pulling the 120 article modules into the main bundle.
import { SITE, clusterFor, clusterListFor, clusterBySlugFor } from '../content/blog/config';
import { IT_TO_EN, EN_TO_IT } from '../content/blog/locale-slug-map';
import type { Locale, ClusterId } from '../content/blog/types';

export { clusterFor, clusterListFor, clusterBySlugFor };

export function blogBasePath(locale: Locale = 'it'): string {
  return locale === 'en' ? `/en${SITE.blogBase}` : SITE.blogBase;
}
export function articleUrl(slug: string, locale: Locale = 'it'): string {
  return `${blogBasePath(locale)}/${slug}`;
}
export function categoryUrl(clusterSlug: string, locale: Locale = 'it'): string {
  const seg = locale === 'en' ? 'category' : 'categoria';
  return `${blogBasePath(locale)}/${seg}/${clusterSlug}`;
}

/** Map a blog/category/index path to its counterpart in the target locale (or null
 *  if not a blog path). Uses the static slug map — no article content needed. */
export function blogAltLocalePath(pathname: string, target: Locale): string | null {
  const blogIndex = target === 'en' ? '/en/blog' : '/blog';
  const art = pathname.match(/^\/(?:en\/)?blog\/(?!categoria\/|category\/)([^/?#]+)$/);
  if (art) {
    const slug = art[1];
    const fromEn = pathname.startsWith('/en/');
    const alt = fromEn ? EN_TO_IT[slug] : IT_TO_EN[slug];
    if (alt) return `${blogIndex}/${alt}`;
    return blogIndex; // no translated counterpart → target blog index
  }
  const cat = pathname.match(/^\/(?:en\/)?blog\/(?:categoria|category)\/([^/?#]+)$/);
  if (cat) {
    const curLocale: Locale = pathname.startsWith('/en/') ? 'en' : 'it';
    const cl = clusterBySlugFor(cat[1], curLocale);
    if (cl) return categoryUrl(clusterFor(cl.id as ClusterId, target).slug, target);
    return blogIndex;
  }
  if (pathname === '/blog' || pathname === '/en/blog') return blogIndex;
  return null;
}
