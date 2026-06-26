import React, { useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { getArticlesByCluster, categoryUrl, blogBasePath, SITE } from '../../lib/blog';
import { clusterBySlugFor } from '../../content/blog/config';
import { blogUI } from '../../content/blog/ui-strings';
import { langFromPath } from '../../lib/i18nRouting';
import { ArticleCard } from './ArticleCard';
import { useDocumentMeta } from './useDocumentMeta';

export const BlogCategory: React.FC = () => {
  const { cluster: clusterSlug } = useParams<{ cluster: string }>();
  const locale = langFromPath(useLocation().pathname);
  const ui = blogUI(locale);
  const blogHome = blogBasePath(locale);
  const homeHref = locale === 'en' ? '/en' : '/';
  const cluster = clusterSlug ? clusterBySlugFor(clusterSlug, locale) : undefined;

  useEffect(() => { window.scrollTo(0, 0); }, [clusterSlug]);

  useDocumentMeta({
    title: cluster ? `${cluster.label} | ${ui.indexMetaTitle}` : `${ui.catEyebrow} | DigitiNexus`,
    description: cluster?.description ?? ui.indexMetaDescription,
    canonical: cluster ? `${SITE.baseUrl}${categoryUrl(cluster.slug, locale)}` : `${SITE.baseUrl}${blogHome}`,
    ogType: 'website',
    ogImage: SITE.defaultOgImage,
    noindex: !cluster,
    htmlLang: locale,
  });

  if (!cluster) {
    return (
      <main className="mx-auto max-w-3xl px-6 pt-40 pb-32 text-center">
        <h1 className="text-3xl font-semibold text-white">{ui.notFoundTitle}</h1>
        <Link to={blogHome} className="mt-8 inline-flex items-center gap-2 text-orange-400 hover:text-orange-300">
          <ArrowLeft className="h-4 w-4" /> {ui.backToBlog}
        </Link>
      </main>
    );
  }

  const articles = getArticlesByCluster(cluster.id, locale);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-6xl px-6 pt-32 md:pt-40 pb-10">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted">
          <Link to={homeHref} className="hover:text-white/70">{ui.homeCrumb}</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to={blogHome} className="hover:text-white/70">{ui.blogCrumb}</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground/70">{cluster.label}</span>
        </nav>
        <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-white">{cluster.label}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground/70">{cluster.description}</p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-28">
        {articles.length === 0 ? (
          <p className="py-16 text-center text-muted">{ui.catEmpty}</p>
        ) : (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => <ArticleCard key={a.slug} article={a} locale={locale} />)}
          </div>
        )}
      </section>
    </main>
  );
};
