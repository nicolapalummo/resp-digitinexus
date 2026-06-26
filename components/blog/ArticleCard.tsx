import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock } from 'lucide-react';
import type { Article, Locale } from '../../content/blog/types';
import { articleUrl, readingMinutes, formatDate } from '../../lib/blog';
import { clusterFor } from '../../content/blog/config';
import { blogUI } from '../../content/blog/ui-strings';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
  locale?: Locale;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, featured, locale = 'it' as Locale }) => {
  const cluster = clusterFor(article.cluster, locale);
  const ui = blogUI(locale);
  return (
    <Link
      to={articleUrl(article.slug, locale)}
      className={`group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-colors hover:border-white/25 ${featured ? 'md:flex-row' : ''}`}
    >
      <div className={`relative overflow-hidden bg-gradient-to-br from-white/[0.06] to-white/[0.01] ${featured ? 'md:w-1/2 aspect-[16/10] md:aspect-auto' : 'aspect-[16/9]'}`}>
        <img
          src={article.cover.src}
          alt={article.cover.alt}
          loading="lazy"
          className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.03]"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
        />
        <span className="absolute left-4 top-4 rounded-full border border-orange-500/30 bg-black/40 px-2.5 py-1 text-[11px] font-medium text-orange-300 backdrop-blur">
          {article.isPillar ? ui.pillar : ''}{cluster.label}
        </span>
      </div>
      <div className={`flex flex-1 flex-col p-6 ${featured ? 'md:justify-center md:p-9' : ''}`}>
        <h3 className={`font-semibold leading-snug tracking-tight text-white/95 group-hover:text-white ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
          {article.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-foreground/70">{article.metaDescription}</p>
        <div className="mt-5 flex items-center gap-4 text-xs text-muted">
          <span>{formatDate(article.publishDate, locale)}</span>
          <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{readingMinutes(article)} min</span>
          <ArrowUpRight className="ml-auto h-4 w-4 text-muted transition-colors group-hover:text-orange-300" />
        </div>
      </div>
    </Link>
  );
};
