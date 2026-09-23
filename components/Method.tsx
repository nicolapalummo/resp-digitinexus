import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Users, Search, Sparkles, Mail, BarChart3, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Hub & spoke: il sito al centro, i canali intorno. Le posizioni sono calcolate
// sul cerchio (angoli in gradi, raggio in % del contenitore quadrato) così il
// diagramma resta identico su mobile e desktop, solo scalato.
const RADIUS = 36;
const SPOKES = [
  { key: 'ads', angle: -90, Icon: Megaphone },
  { key: 'social', angle: -30, Icon: Users },
  { key: 'seo', angle: 30, Icon: Search },
  { key: 'geo', angle: 90, Icon: Sparkles },
  { key: 'funnel', angle: 150, Icon: Mail },
  { key: 'data', angle: 210, Icon: BarChart3 },
] as const;

const pos = (angle: number) => {
  const rad = (angle * Math.PI) / 180;
  return { x: 50 + RADIUS * Math.cos(rad), y: 50 + RADIUS * Math.sin(rad) };
};

const STEPS = ['step1', 'step2', 'step3', 'step4'] as const;

export const Method: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="method" className="bg-black text-white py-20 md:py-24 px-6 md:px-12 border-t border-white/5">
      <div className="container mx-auto">
        {/* Tag - Aligned to Intro */}
        <div className="inline-flex items-center gap-2 border border-white/20 rounded-lg px-3 py-1 text-xs uppercase tracking-wider text-orange-400 font-mono bg-white/5 mb-5 md:ml-[120px]">
          <span className="opacity-50">7</span>
          <span>{t('method.tag')}</span>
        </div>

        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 md:mb-20 gap-10 md:ml-[120px]"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-none max-w-2xl">
            {t('method.title')}
          </h2>
          <p className="max-w-md text-lg text-gray-400 pb-2">{t('method.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center md:ml-[120px]">
          {/* Diagramma hub & spoke */}
          <motion.div
            className="order-1 lg:order-2 w-full max-w-[340px] sm:max-w-[440px] mx-auto"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full aspect-square">
              {/* Connettori centro → nodi */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden="true">
                <circle cx="50" cy="50" r={RADIUS} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.3" />
                {SPOKES.map((s) => {
                  const { x, y } = pos(s.angle);
                  return (
                    <line
                      key={s.key}
                      x1="50"
                      y1="50"
                      x2={x}
                      y2={y}
                      stroke="rgba(251,146,60,0.35)"
                      strokeWidth="0.4"
                      strokeDasharray="2 2"
                    />
                  );
                })}
              </svg>

              {/* Hub: il sito */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <motion.div
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#111] border border-orange-500/30 shadow-[0_0_40px_rgba(251,146,60,0.15)] flex flex-col items-center justify-center text-center px-2 sm:px-3"
                  animate={{ boxShadow: ['0 0 30px rgba(251,146,60,0.12)', '0 0 50px rgba(251,146,60,0.25)', '0 0 30px rgba(251,146,60,0.12)'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <img src="/logoDN.webp" alt="" width={32} height={32} loading="lazy" className="w-6 h-6 sm:w-7 sm:h-7 object-contain mb-1" />
                  <span className="text-[11px] sm:text-sm font-medium leading-tight">{t('method.hubLabel')}</span>
                  <span className="hidden sm:block text-[10px] text-white/40 mt-0.5 leading-tight">{t('method.hubCaption')}</span>
                </motion.div>
              </div>

              {/* Nodi */}
              {SPOKES.map((s, i) => {
                const { x, y } = pos(s.angle);
                const { Icon } = s;
                return (
                  <motion.div
                    key={s.key}
                    className="absolute z-10 flex flex-col items-center gap-1 sm:gap-1.5 w-[74px] sm:w-[96px] bg-white/[0.04] border border-white/10 rounded-2xl px-1.5 sm:px-2 py-2 sm:py-2.5 backdrop-blur-sm"
                    style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 0.5, delay: 0.25 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-orange-500/10 border border-orange-500/25 text-orange-400 flex items-center justify-center">
                      <Icon size={14} />
                    </span>
                    <span className="text-[9px] sm:text-[11px] text-white/70 text-center leading-tight">
                      {t(`method.spokes.${s.key}`)}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Quattro step */}
          <div className="order-2 lg:order-1 relative">
            {/* Linea verticale che collega gli step */}
            <div className="absolute left-[18px] top-4 bottom-4 w-px bg-gradient-to-b from-orange-500/40 via-white/10 to-transparent" aria-hidden="true" />

            <ol className="space-y-9">
              {STEPS.map((step, i) => (
                <motion.li
                  key={step}
                  className="relative pl-14"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="absolute left-0 top-0 w-9 h-9 rounded-xl bg-[#111] border border-orange-500/30 text-orange-400 font-mono text-sm flex items-center justify-center">
                    {`0${i + 1}`}
                  </span>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl font-medium tracking-tight">{t(`method.${step}.title`)}</h3>
                    <span className="inline-block px-2.5 py-0.5 bg-orange-500/5 text-orange-400/90 text-xs font-mono rounded border border-orange-500/20">
                      {t(`method.${step}.meta`)}
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{t(`method.${step}.description`)}</p>
                </motion.li>
              ))}
            </ol>

            <motion.div
              className="mt-12 pl-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href="https://calendly.com/digitinexus/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-100 transition-colors rounded-2xl px-6 py-3.5 font-semibold"
              >
                {t('method.cta')} <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
