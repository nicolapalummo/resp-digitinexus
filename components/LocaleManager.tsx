import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  langFromPath,
  logicalPath,
  urlForLang,
  absolute,
  PAGE_META,
} from '../lib/i18nRouting';

function upsertLink(rel: string, href: string, hreflang?: string): HTMLLinkElement {
  const sel = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector(sel) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (hreflang) el.setAttribute('hreflang', hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
  return el;
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string): void {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function removeManagedHreflang(): void {
  document.head
    .querySelectorAll('link[data-managed-hreflang]')
    .forEach((n) => n.remove());
}

/**
 * Keeps the app language and SEO signals in sync with the URL.
 * Italian is primary at "/", English under "/en". The blog is Italian-only,
 * so on blog routes the hreflang alternates are removed and the page's own
 * meta hook owns canonical/title.
 */
export function LocaleManager() {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = langFromPath(location.pathname);
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
      try {
        localStorage.setItem('i18nextLng', lang);
      } catch {
        /* ignore storage failures */
      }
    }
    document.documentElement.lang = lang;

    removeManagedHreflang();

    const logical = logicalPath(location.pathname);
    const meta = PAGE_META[logical];

    if (meta) {
      const m = meta[lang];
      document.title = m.title;
      upsertMeta('name', 'description', m.description);

      const canonical = absolute(urlForLang(location.pathname, lang));
      upsertLink('canonical', canonical);

      const itUrl = absolute(logical);
      const enUrl = absolute(logical === '/' ? '/en' : '/en' + logical);
      ([
        ['it', itUrl],
        ['en', enUrl],
        ['x-default', itUrl],
      ] as const).forEach(([hl, href]) => {
        const el = upsertLink('alternate', href, hl);
        el.setAttribute('data-managed-hreflang', '');
      });

      upsertMeta('property', 'og:locale', lang === 'en' ? 'en_US' : 'it_IT');
      upsertMeta('property', 'og:url', canonical);
      upsertMeta('property', 'og:title', m.title);
      upsertMeta('property', 'og:description', m.description);
      upsertMeta('name', 'twitter:title', m.title);
      upsertMeta('name', 'twitter:description', m.description);
    } else {
      // Blog and other Italian-only routes: their own hook manages canonical/title.
      upsertMeta('property', 'og:locale', 'it_IT');
    }
  }, [location.pathname, i18n]);

  return null;
}
