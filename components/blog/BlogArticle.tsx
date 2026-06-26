import React, { useEffect, useMemo } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock, ChevronRight, ExternalLink } from 'lucide-react';
import type { Article, Locale } from '../../content/blog/types';
import {
  getArticleBySlug, getRelatedArticles, readingMinutes, formatDate,
  buildArticleSchema, absoluteArticleUrl, articleUrl, categoryUrl, blogBasePath, SITE,
  getAuthor, authorProfileUrl, coverInArticleSrc, articleAlternates,
} from '../../lib/blog';
import { clusterFor, articleByline } from '../../content/blog/config';
import { blogUI } from '../../content/blog/ui-strings';
import { langFromPath } from '../../lib/i18nRouting';
import { ArticleBlocks } from './ArticleBlocks';
import { useDocumentMeta } from './useDocumentMeta';

const NotFound: React.FC<{ locale: Locale }> = ({ locale }) => {
  const ui = blogUI(locale);
  const blogHome = blogBasePath(locale);
  return (
    <div className="mx-auto max-w-3xl px-6 pt-40 pb-32 text-center">
      <p className="text-sm font-mono uppercase tracking-widest text-orange-400/80">404</p>
      <h1 className="mt-4 text-3xl font-semibold text-white">{ui.notFoundTitle}</h1>
      <p className="mt-3 text-foreground/70">{ui.notFoundBody}</p>
      <Link to={blogHome} className="mt-8 inline-flex items-center gap-2 text-orange-400 hover:text-orange-300">
        <ArrowLeft className="h-4 w-4" /> {ui.backToBlog}
      </Link>
    </div>
  );
};

export const BlogArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const locale = langFromPath(useLocation().pathname);
  const article = slug ? getArticleBySlug(slug, locale) : undefined;

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!article) return <NotFound locale={locale} />;
  return <ArticleView article={article} locale={locale} />;
};

const ArticleView: React.FC<{ article: Article; locale: Locale }> = ({ article, locale }) => {
  const ui = blogUI(locale);
  const byline = articleByline(locale);
  const cluster = clusterFor(article.cluster, locale);
  const author = getAuthor(article.authorId);
  const authorLink = authorProfileUrl(article.authorId);
  const minutes = readingMinutes(article);
  const related = useMemo(() => getRelatedArticles(article), [article]);
  const coverAbs = article.cover.src.startsWith('http') ? article.cover.src : `${SITE.baseUrl}${article.cover.src}`;
  const homeHref = locale === 'en' ? '/en' : '/';
  const blogHref = blogBasePath(locale);

  useDocumentMeta({
    title: article.metaTitle,
    description: article.metaDescription,
    canonical: absoluteArticleUrl(article.slug, locale),
    ogImage: coverAbs,
    ogType: 'article',
    publishedTime: article.publishDate,
    modifiedTime: article.updatedDate,
    jsonLd: buildArticleSchema(article),
    alternates: articleAlternates(article),
    htmlLang: locale,
  });

  const toc = article.body.filter((b) => b.type === 'h2') as { type: 'h2'; text: string }[];

  return (
    <article className="bg-background text-foreground">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-white/5">
        <div className="mx-auto max-w-3xl px-6 pt-32 md:pt-36 pb-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-muted">
            <Link to={homeHref} className="hover:text-white/70">{ui.homeCrumb}</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to={blogHref} className="hover:text-white/70">{ui.blogCrumb}</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to={categoryUrl(cluster.slug, locale)} className="hover:text-white/70">{cluster.label}</Link>
          </nav>

          <Link
            to={categoryUrl(cluster.slug, locale)}
            className="mt-7 inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-300"
          >
            {article.isPillar ? ui.pillar : ''}{cluster.label}
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-3xl md:text-5xl font-semibold leading-[1.1] tracking-tight text-white"
          >
            {article.title}
          </motion.h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
            <span>
              {ui.by}{' '}
              {authorLink ? (
                <a href={authorLink} target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-orange-300">{author.name}</a>
              ) : (
                <span className="text-white/90">{author.name}</span>
              )}
            </span>
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{formatDate(article.publishDate, locale)}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{minutes} {ui.minRead}</span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 pb-8">
        {/* TOC */}
        {toc.length > 2 && (
          <nav aria-label="Indice" className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <div className="mb-3 text-[11px] font-mono uppercase tracking-[0.2em] text-muted">{ui.inThisArticle}</div>
            <ol className="space-y-1.5 text-sm">
              {toc.map((h, i) => (
                <li key={i}>
                  <a href={`#${h.text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9\s-]/g,'').trim().replace(/\s+/g,'-').slice(0,60)}`}
                     className="text-foreground/70 hover:text-orange-300 transition-colors">
                    {h.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Capsule (lead) */}
        <div className="mt-8">
          <ArticleBlocks blocks={[{ type: 'capsule', text: article.capsule }]} />
        </div>

        {/* Cover image (under "In breve") — plain variant, no title band */}
        <figure className="mt-8 overflow-hidden rounded-2xl border border-white/10">
          <img src={coverInArticleSrc(article.cover.src)} alt={article.cover.alt} className="w-full" loading="lazy" />
        </figure>

        {/* Body */}
        <div className="blog-prose">
          <ArticleBlocks blocks={article.body} />
        </div>

        {/* FAQ */}
        {article.faq.length > 0 && (
          <section className="mt-14">
            <h2 className="mb-6 text-2xl md:text-3xl font-semibold tracking-tight text-white">{ui.faqTitle}</h2>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {article.faq.map((f, i) => (
                <details key={i} className="group py-4">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-medium text-white/90 marker:content-none">
                    {f.q}
                    <ChevronRight className="h-4 w-4 flex-shrink-0 text-muted transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 leading-relaxed text-foreground/80">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Sources */}
        {article.sources.length > 0 && (
          <section className="mt-12">
            <h2 className="mb-4 text-sm font-mono uppercase tracking-[0.2em] text-muted">{ui.sources}</h2>
            <ul className="space-y-2 text-sm">
              {article.sources.map((s, i) => (
                <li key={i}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-1.5 text-foreground/70 hover:text-orange-300">
                    <ExternalLink className="h-3.5 w-3.5" />{s.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Byline — organizzazione */}
        <section className="mt-12 flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <img src={byline.logo} alt="DigitiNexus" className="h-14 w-14 flex-shrink-0 rounded-2xl object-cover bg-white/10" loading="lazy" />
          <div className="flex-1">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted">{byline.kicker}</div>
            <div className="font-semibold text-white">{byline.name}</div>
            <p className="mt-2 text-sm leading-relaxed text-foreground/75">{byline.description}</p>
            <p className="mt-1 text-sm italic text-muted">
              ({ui.writtenBy}{' '}
              {authorLink ? (
                <a href={authorLink} target="_blank" rel="noopener noreferrer" className="not-italic text-orange-400 hover:text-orange-300">{author.name}</a>
              ) : (
                <span className="not-italic">{author.name}</span>
              )}
              {' '}- {ui.cofounder})
            </p>
            <a href={byline.ctaHref} target="_blank" rel="noopener noreferrer"
               className="mt-3 inline-flex items-center gap-1.5 rounded-2xl border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10">
              {byline.ctaLabel} <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </section>

        {/* CTA */}
        <ArticleBlocks blocks={[{
          type: 'cta',
          text: ui.ctaText,
          label: ui.ctaLabel,
          href: SITE.bookCallUrl,
        }]} />
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-white/5 bg-white/[0.015]">
          <div className="mx-auto max-w-5xl px-6 py-14">
            <h2 className="mb-7 text-xl font-semibold text-white">{ui.related}</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} to={articleUrl(r.slug, locale)}
                      className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/20">
                  <div className="text-xs text-orange-400/80">{clusterFor(r.cluster, locale).label}</div>
                  <h3 className="mt-2 font-medium leading-snug text-white/90 group-hover:text-white">{r.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm text-muted group-hover:text-orange-300">
                    {ui.read} <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
};
