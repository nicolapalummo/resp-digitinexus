import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { langFromPath } from '../lib/i18nRouting';

// "Chi siamo" / Founders section: a black rounded card (title, text, photo) floating
// on the light section background, with a soft shadow. Placed above Why Me.
export const ChiSiamo: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const aboutHref = langFromPath(location.pathname) === 'en' ? '/en/chi-siamo' : '/chi-siamo';
  return (
    <section id="about" className="bg-[#F3F4F6] py-20 md:py-24 px-6 md:px-12">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="bg-black text-white rounded-[2rem] md:rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35)] p-8 md:p-12 lg:p-16"
        >
          {/* Tag - dark style (on the black card) */}
          <div className="inline-flex items-center gap-2 border border-white/20 rounded-lg px-3 py-1 text-xs uppercase tracking-wider text-orange-400 font-mono bg-white/5 mb-5">
            <span className="opacity-50">5</span>
            <span>{t('about.tag')}</span>
          </div>

          {/* Title */}
          <h2 className="mb-12 text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-none text-white max-w-3xl">
            {t('about.title')}
          </h2>

          {/* Text (left on desktop) + photo (right on desktop, top on mobile) */}
          <div className="grid items-center gap-10 lg:gap-14 lg:grid-cols-2">
            <div className="order-2 lg:order-1 space-y-5">
              {(t('about.text', { returnObjects: true }) as string[]).map((paragraph, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? 'text-2xl md:text-3xl font-medium leading-snug text-white'
                      : 'text-base md:text-lg leading-relaxed text-white/65'
                  }
                >
                  {paragraph}
                </p>
              ))}
              {/* Pagina Chi Siamo dedicata: accesso da qui e dal footer, non dalla navbar */}
              <Link
                to={aboutHref}
                className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors font-medium pt-1"
              >
                {t('about.moreLink')} <ArrowRight size={16} />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img
                  src="/team-digitinexus-v2.webp"
                  alt={t('about.imageAlt')}
                  loading="lazy"
                  className="w-full h-full object-cover aspect-[3/2]"
                />
              </div>
              <p className="mt-3 text-center text-sm text-white/50">Filippo Gentili &amp; Nicola Palummo</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
