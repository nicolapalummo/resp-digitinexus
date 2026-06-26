import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getVisibleArticles, buildBlogIndexSchema, categoryUrl, blogBasePath, SITE } from '../../lib/blog';
import { clusterListFor } from '../../content/blog/config';
import { blogUI } from '../../content/blog/ui-strings';
import { langFromPath } from '../../lib/i18nRouting';
import { ArticleCard } from './ArticleCard';
import { useDocumentMeta } from './useDocumentMeta';

export const BlogIndex: React.FC = () => {
  const locale = langFromPath(useLocation().pathname);
  const ui = blogUI(locale);
  const articles = getVisibleArticles(locale);
  const [featured, ...rest] = articles;

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useDocumentMeta({
    title: ui.indexMetaTitle,
    description: ui.indexMetaDescription,
    canonical: `${SITE.baseUrl}${blogBasePath(locale)}`,
    ogType: 'website',
    ogImage: SITE.defaultOgImage,
    jsonLd: buildBlogIndexSchema(articles, locale),
    htmlLang: locale,
  });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-6xl px-6 pt-32 md:pt-40 pb-10">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <p className="text-sm font-mono uppercase tracking-[0.25em] text-orange-400/80">{ui.indexKicker}</p>
          <h1 className="mt-4 max-w-3xl text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-white">
            {ui.indexTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/70">
            {ui.indexSubtitle}
          </p>
        </motion.div>

        {/* Cluster nav */}
        <nav className="mt-9 flex flex-wrap gap-2.5">
          {clusterListFor(locale).map((c) => (
            <Link key={c.id} to={categoryUrl(c.slug, locale)}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-foreground/80 transition-colors hover:border-orange-400/50 hover:text-orange-300">
              {c.label}
            </Link>
          ))}
        </nav>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-28">
        {articles.length === 0 ? (
          <p className="py-20 text-center text-muted">{ui.indexEmpty}</p>
        ) : (
          <>
            {featured && <div className="mb-8"><ArticleCard article={featured} featured locale={locale} /></div>}
            {rest.length > 0 && (
              <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((a) => <ArticleCard key={a.slug} article={a} locale={locale} />)}
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
};
