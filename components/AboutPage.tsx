import React from 'react';
import { useTranslation } from 'react-i18next';
import { Linkedin } from 'lucide-react';

// Pagina Chi Siamo dedicata (/chi-siamo, /en/chi-siamo). Title/meta/canonical/
// hreflang sono gestiti a runtime da LocaleManager via PAGE_META. Raggiungibile
// dal bottone nella sezione ChiSiamo e dal footer, volutamente fuori dalla navbar.
export const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  const story = t('aboutPage.story', { returnObjects: true }) as string[];
  const founders = t('aboutPage.founders', { returnObjects: true }) as {
    name: string;
    role: string;
    linkedin: string;
  }[];
  const how = t('aboutPage.how', { returnObjects: true }) as { title: string; text: string }[];

  return (
    <main className="bg-black text-white min-h-screen px-6 md:px-12 pt-36 md:pt-44 pb-24">
      <div className="container mx-auto max-w-5xl">
        <div className="inline-flex items-center gap-2 border border-white/20 rounded-lg px-3 py-1 text-xs uppercase tracking-wider text-orange-400 font-mono bg-white/5 mb-6">
          <span>{t('aboutPage.kicker')}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight max-w-3xl">
          {t('aboutPage.h1')}
        </h1>
        <p className="mt-6 text-2xl md:text-3xl font-medium leading-snug text-white max-w-3xl">
          {t('aboutPage.intro')}
        </p>
        <div className="mt-6 space-y-5 max-w-3xl">
          {story.map((paragraph, i) => (
            <p key={i} className="text-base md:text-lg leading-relaxed text-white/65">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-white/10 max-w-3xl">
          <img
            src="/team-digitinexus-v2.webp"
            alt={t('about.imageAlt')}
            width={1537}
            height={1023}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="mt-20 text-3xl md:text-4xl font-medium tracking-tight">
          {t('aboutPage.foundersTitle')}
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {founders.map((f) => (
            <div key={f.name} className="bg-[#111] rounded-2xl p-7 border border-white/10">
              <p className="text-xl font-medium">{f.name}</p>
              <p className="mt-1 text-white/60">{f.role}</p>
              <a
                href={f.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-colors"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
            </div>
          ))}
        </div>

        <h2 className="mt-20 text-3xl md:text-4xl font-medium tracking-tight">
          {t('aboutPage.howTitle')}
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {how.map((h) => (
            <div key={h.title} className="bg-[#111] rounded-2xl p-7 border border-white/10">
              <p className="text-lg font-medium">{h.title}</p>
              <p className="mt-2 text-white/60 leading-relaxed">{h.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-[#111] rounded-2xl p-8 md:p-10 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-xl md:text-2xl font-medium max-w-xl">{t('aboutPage.ctaText')}</p>
          <a
            href="https://calendly.com/digitinexus/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black hover:bg-gray-100 transition-all duration-300 rounded-2xl px-6 py-4 font-semibold text-base flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            {t('aboutPage.ctaLabel')}
          </a>
        </div>
      </div>
    </main>
  );
};
