
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { langFromPath } from '../lib/i18nRouting';

// Pagine servizio per verticale, raggiungibili da qui (non dalla navbar).
const VERTICALS = [
  { key: 'commercialisti', slug: 'siti-web-commercialisti' },
  { key: 'avvocati', slug: 'siti-web-avvocati' },
  { key: 'studi', slug: 'siti-web-studi-professionali' },
] as const;

export const Services: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const prefix = langFromPath(location.pathname) === 'en' ? '/en' : '';
  return (
    <section id="services" className="bg-black text-white py-20 md:py-24 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Tag - Aligned to Intro */}
        <div className="inline-flex items-center gap-2 border border-white/20 rounded-lg px-3 py-1 text-xs uppercase tracking-wider text-orange-400 font-mono bg-white/5 mb-5 md:ml-[120px]">
            <span className="opacity-50">7</span>
            <span>{t('services.tag')}</span>
        </div>
        
        {/* Header */}
        <motion.div 
            className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-10 md:ml-[120px]"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="flex flex-col items-start">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-none">
                {t('services.title')}
                </h2>
            </div>
            <div className="max-w-md text-lg text-gray-400 pb-2">
                {t('services.subtitle')}
                <div className="mt-5">
                    <p className="text-sm text-gray-500 mb-2">{t('services.verticalsTitle')}</p>
                    <div className="flex flex-wrap gap-2">
                        {VERTICALS.map((v) => (
                            <Link
                                key={v.key}
                                to={`${prefix}/servizi/${v.slug}`}
                                className="inline-flex items-center gap-1.5 border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-colors rounded-full px-4 py-1.5 text-sm text-white/80"
                            >
                                {t(`services.verticals.${v.key}`)} <ArrowRight size={13} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>

        {/* Services Cards Grid - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1: One Time Project */}
            <motion.div 
                className="bg-[#111] rounded-2xl p-8 md:p-10 border border-white/10 hover:border-white/20 transition-colors flex flex-col"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="flex flex-col items-start gap-3 sm:flex-row sm:justify-between mb-6">
                    <h3 className="text-3xl md:text-4xl font-medium tracking-tight">{t('services.service1.title')}</h3>
                    <span className="inline-block px-3 py-1 bg-orange-900/30 text-orange-400 text-xs font-mono rounded border border-orange-500/30 whitespace-nowrap">
                        {t('services.service1.price')}
                    </span>
                </div>
                
                <p className="text-gray-400 mb-10 text-lg">
                    {t('services.service1.description')}
                </p>
                
                <div className="space-y-4 mb-12 flex-1">
                    {(t('services.service1.features', { returnObjects: true }) as string[]).map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded bg-orange-900/30 text-orange-400 flex items-center justify-center border border-orange-500/30 flex-shrink-0">
                                <Check size={12} />
                            </div>
                            <span className="text-gray-300">{item}</span>
                        </div>
                    ))}
                </div>

                <a href="https://calendly.com/digitinexus/30min" target="_blank" rel="noopener noreferrer" className="w-full bg-[#222] text-white border border-white/10 rounded-2xl py-3 flex items-center justify-center gap-3 font-medium hover:bg-[#333] transition-colors">
                    <span className="pl-2">{t('services.bookCall')}</span>
                </a>
            </motion.div>

            {/* Card 2: Webflow Development */}
            <motion.div 
                className="bg-[#111] rounded-2xl p-8 md:p-10 border border-white/10 hover:border-white/20 transition-colors flex flex-col"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="flex flex-col items-start gap-3 sm:flex-row sm:justify-between mb-6">
                    <h3 className="text-3xl md:text-4xl font-medium tracking-tight">{t('services.service2.title')}</h3>
                     <span className="inline-block px-3 py-1 bg-orange-900/30 text-orange-400 text-xs font-mono rounded border border-orange-500/30 whitespace-nowrap">
                        {t('services.service2.price')}
                    </span>
                </div>
                
                <p className="text-gray-400 mb-10 text-lg">
                {t('services.service2.description')}
                </p>
                
                <div className="space-y-4 mb-12 flex-1">
                    {(t('services.service2.features', { returnObjects: true }) as string[]).map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded bg-orange-900/30 text-orange-400 flex items-center justify-center border border-orange-500/30 flex-shrink-0">
                                <Check size={12} />
                            </div>
                            <span className="text-gray-300">{item}</span>
                        </div>
                    ))}
                </div>

                <a href="https://calendly.com/digitinexus/30min" target="_blank" rel="noopener noreferrer" className="w-full bg-[#222] text-white border border-white/10 rounded-2xl py-3 flex items-center justify-center gap-3 font-medium hover:bg-[#333] transition-colors">
                    <span className="pl-2">{t('services.bookCall')}</span>
                </a>
            </motion.div>

            {/* Card 3: Ads & Funnel — il sistema completo, a tutta larghezza */}
            <motion.div
                className="md:col-span-2 bg-[#111] rounded-2xl p-8 md:p-10 border border-orange-500/25 hover:border-orange-500/40 transition-colors flex flex-col"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="flex flex-col items-start gap-3 sm:flex-row sm:justify-between mb-2">
                    <h3 className="text-3xl md:text-4xl font-medium tracking-tight">{t('services.service3.title')}</h3>
                    <span className="inline-block px-3 py-1 bg-orange-900/30 text-orange-400 text-xs font-mono rounded border border-orange-500/30 whitespace-nowrap">
                        {t('services.service3.price')}
                    </span>
                </div>
                <p className="text-xs font-mono uppercase tracking-[0.15em] text-orange-400 mb-6">
                    {t('services.service3.platforms')} · {t('services.service3.badge')}
                </p>

                <p className="text-gray-400 mb-10 text-lg max-w-3xl">
                {t('services.service3.description')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 mb-10 flex-1">
                    {(t('services.service3.features', { returnObjects: true }) as string[]).map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded bg-orange-900/30 text-orange-400 flex items-center justify-center border border-orange-500/30 flex-shrink-0">
                                <Check size={12} />
                            </div>
                            <span className="text-gray-300">{item}</span>
                        </div>
                    ))}
                </div>

                <p className="text-sm text-gray-500 italic mb-8 max-w-3xl">{t('services.service3.note')}</p>

                {/* Stessa pill della navbar: bianca con il logo DN a destra */}
                <a href="https://calendly.com/digitinexus/30min" target="_blank" rel="noopener noreferrer" className="self-center md:self-start inline-flex items-center gap-3 bg-white text-black rounded-3xl pl-5 pr-1.5 py-1.5 font-medium hover:bg-gray-100 transition-colors">
                    <span>{t('services.bookCall')}</span>
                    <img src="/logoDN.webp" alt="DigitiNexus" className="w-9 h-9 rounded-3xl object-cover" />
                </a>
            </motion.div>

        </div>
      </div>
    </section>
  );
};
