import { useEffect } from 'react';

export interface DocumentMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  publishedTime?: string;
  modifiedTime?: string;
  jsonLd?: unknown;
  noindex?: boolean;
  /** reciprocal hreflang alternates (it/en/x-default) for translated articles */
  alternates?: { hreflang: string; href: string }[];
  /** document language for this page */
  htmlLang?: 'it' | 'en';
}

const MANAGED_ATTR = 'data-blog-meta';
const MANAGED_HREFLANG = 'data-blog-hreflang';

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    el.setAttribute(MANAGED_ATTR, '');
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Client-side meta management for SPA navigation. The same values are baked into
 * the prerendered static HTML by scripts/prerender-blog.mjs, so crawlers that
 * don't run JS still see correct tags.
 */
export function useDocumentMeta(meta: DocumentMeta) {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const prevTitle = document.title;
    document.title = meta.title;

    upsertMeta('name', 'description', meta.description);
    upsertMeta('name', 'robots', meta.noindex ? 'noindex, follow' : 'index, follow');
    upsertLink('canonical', meta.canonical);

    upsertMeta('property', 'og:title', meta.ogTitle ?? meta.title);
    upsertMeta('property', 'og:description', meta.ogDescription ?? meta.description);
    upsertMeta('property', 'og:type', meta.ogType ?? 'article');
    upsertMeta('property', 'og:url', meta.canonical);
    upsertMeta('property', 'og:locale', meta.htmlLang === 'en' ? 'en_US' : 'it_IT');
    if (meta.htmlLang) document.documentElement.lang = meta.htmlLang;
    if (meta.ogImage) upsertMeta('property', 'og:image', meta.ogImage);

    // Reciprocal hreflang alternates (replace any managed set from a previous page)
    document.head.querySelectorAll(`link[${MANAGED_HREFLANG}]`).forEach((n) => n.remove());
    (meta.alternates ?? []).forEach((alt) => {
      const el = document.createElement('link');
      el.setAttribute('rel', 'alternate');
      el.setAttribute('hreflang', alt.hreflang);
      el.setAttribute('href', alt.href);
      el.setAttribute(MANAGED_HREFLANG, '');
      document.head.appendChild(el);
    });
    if (meta.publishedTime) upsertMeta('property', 'article:published_time', meta.publishedTime);
    if (meta.modifiedTime) upsertMeta('property', 'article:modified_time', meta.modifiedTime);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', meta.ogTitle ?? meta.title);
    upsertMeta('name', 'twitter:description', meta.ogDescription ?? meta.description);
    if (meta.ogImage) upsertMeta('name', 'twitter:image', meta.ogImage);

    // JSON-LD (one managed script per page)
    const existing = document.head.querySelector(`script[type="application/ld+json"][${MANAGED_ATTR}]`);
    if (existing) existing.remove();
    if (meta.jsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute(MANAGED_ATTR, '');
      script.textContent = JSON.stringify(meta.jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      document.title = prevTitle;
      const ld = document.head.querySelector(`script[type="application/ld+json"][${MANAGED_ATTR}]`);
      if (ld) ld.remove();
      document.head.querySelectorAll(`link[${MANAGED_HREFLANG}]`).forEach((n) => n.remove());
    };
  }, [meta]);
}
