import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { langFromPath } from '../lib/i18nRouting';
import { clusterListFor, categoryUrl } from '../lib/blogRouting';

// Representative article cover (plain variant, no title band) per cluster.
const COVER: Record<string, string> = {
  c1: '/blog/covers/quanto-costa-sito-web-plain.webp',
  c2: '/blog/covers/design-premium-sito-web-plain.webp',
  c3: '/blog/covers/geo-generative-engine-optimization-plain.webp',
  c4: '/blog/covers/sito-web-studio-professionale-plain.webp',
  c5: '/blog/covers/sito-web-pmi-servizi-plain.webp',
  c7: '/blog/covers/intelligenza-artificiale-per-aziende-plain.webp',
};

// Landing section under the FAQ: areas of expertise linked to the blog clusters.
// Gives the homepage real internal links to the blog and surfaces service topics.
export const ExploreGuides: React.FC = () => {
  const { t } = useTranslation();
  const locale = langFromPath(useLocation().pathname);
  // Six clusters (startup card removed per design).
  const clusters = clusterListFor(locale).filter((c) => c.id !== 'c6');

  return (
    <section id="guides" className="bg-black text-white py-20 md:py-24 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Tag - aligned to Intro, same style as the other sections */}
        <div className="inline-flex items-center gap-2 border border-white/20 rounded-lg px-3 py-1 text-xs uppercase tracking-wider text-orange-400 font-mono bg-white/5 mb-5 md:ml-[120px]">
          <span className="opacity-50">9</span>
          <span>{t('guides.tag')}</span>
        </div>

        {/* Header: title left, subtitle right on desktop (like Services) */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-10 md:ml-[120px]"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-none">
              {t('guides.title')}
            </h2>
          </div>
          <div className="max-w-md text-lg text-gray-400 pb-2">
            {t('guides.subtitle')}
          </div>
        </motion.div>

        {/* Cards: cover image on top (like Why Me), label + description below */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clusters.map((c, idx) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={categoryUrl(c.slug, locale)}
                className="group bg-[#111] rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors flex flex-col h-full"
              >
                <div className="h-44 w-full overflow-hidden bg-white/[0.03]">
                  <img
                    src={COVER[c.id]}
                    alt={c.label}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white/95 group-hover:text-white">
                      {c.label}
                    </h3>
                    <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-white/30 transition-colors group-hover:text-orange-300" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">{c.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
