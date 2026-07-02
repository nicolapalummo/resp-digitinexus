
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CALENDLY_URL = 'https://calendly.com/digitinexus/30min';

export const LetsTalk: React.FC = () => {
  const { t } = useTranslation();

  // Load the Calendly inline-widget script once; re-init on later mounts (SPA nav).
  useEffect(() => {
    const SRC = 'https://assets.calendly.com/assets/external/widget.js';
    const w = window as unknown as { Calendly?: { initInlineWidgets?: () => void } };
    if (document.querySelector(`script[src="${SRC}"]`)) {
      w.Calendly?.initInlineWidgets?.();
      return;
    }
    const s = document.createElement('script');
    s.src = SRC;
    s.async = true;
    document.body.appendChild(s);
  }, []);
  return (
    <section id="lets-talk" className="bg-[#E8ECF2] text-black py-32 md:py-48 px-6 flex flex-col items-center justify-center text-center min-h-[80vh] relative rounded-t-[2rem]">
        <motion.div 
            className="flex-1 flex flex-col items-center justify-center w-full"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-16 max-w-6xl leading-[0.95] text-[#1a1a1a]">
                {t('letsTalk.title')} <br className="hidden md:block" /> {t('letsTalk.title2')}
            </h2>
            
            {/* Calendly inline booking widget */}
            <div
              className="calendly-inline-widget w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
              data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&primary_color=f97316`}
              style={{ minWidth: '320px', height: '700px' }}
            />

            {/* Fallback link if the widget can't load */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 text-sm text-gray-500 underline underline-offset-4 hover:text-gray-800 transition-colors"
            >
              {t('letsTalk.bookCall')}
            </a>
        </motion.div>
         
         <div className="absolute bottom-8 text-xs md:text-sm text-gray-400 font-medium tracking-wide flex flex-col md:flex-row items-center gap-2 md:gap-0">
             <span>&copy; {new Date().getFullYear()} {t('letsTalk.copyright')}</span>
             <span className="hidden md:inline mx-2">|</span>
             <span className="md:mx-2 flex flex-col md:flex-row items-center gap-2 md:gap-0">
                 <a 
                     href="/Terms & Conditions DigitiNexus LLC.pdf" 
                     target="_blank"
                     rel="noopener noreferrer"
                     className="hover:text-gray-600 transition-colors cursor-pointer"
                 >
                     {t('letsTalk.terms')}
                 </a>
                 <span className="hidden md:inline mx-2">|</span>
                 <a 
                     href="/Privacy Policy DigitiNexus LLC.pdf" 
                     target="_blank"
                     rel="noopener noreferrer"
                     className="hover:text-gray-600 transition-colors cursor-pointer"
                 >
                     {t('letsTalk.privacy')}
                 </a>
             </span>
         </div>
    </section>
  );
};
