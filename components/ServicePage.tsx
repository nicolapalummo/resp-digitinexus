import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { langFromPath } from '../lib/i18nRouting';
import { NotFound } from './NotFound';
import servicePages from '../content/service-pages.json';

// Pagine servizio per verticale (/servizi/<slug>, /en/servizi/<slug>).
// Contenuto in content/service-pages.json (prezzi first-party; EN senza cifre).
// Title/meta/canonical/hreflang gestiti da LocaleManager via PAGE_META.
// Raggiungibili dai bottoni nella sezione Services, volutamente fuori dalla navbar.

interface ServicePageContent {
  kicker: string;
  h1: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  pains: { title: string; items: string[] };
  includes: { title: string; items: { title: string; text: string }[] };
  pricing: { title: string; text: string };
  process: { title: string; steps: { label: string; title: string; text: string }[] };
  faq: { title: string; items: { q: string; a: string }[] };
  articles: { title: string; items: { label: string; href: string }[] };
  cta: { text: string; label: string };
}

const PAGES = servicePages as Record<string, Record<'it' | 'en', ServicePageContent>>;

export const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const lang = langFromPath(location.pathname);
  const data = slug ? PAGES[slug]?.[lang] : undefined;

  if (!data) return <NotFound />;

  return (
    <main className="bg-black text-white min-h-screen px-6 md:px-12 pt-36 md:pt-44 pb-24">
      <div className="container mx-auto max-w-5xl">
        <div className="inline-flex items-center gap-2 border border-white/20 rounded-lg px-3 py-1 text-xs uppercase tracking-wider text-orange-400 font-mono bg-white/5 mb-6">
          <span>{data.kicker}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight max-w-3xl">
          {data.h1}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
          {data.subtitle}
        </p>

        <h2 className="mt-20 text-3xl md:text-4xl font-medium tracking-tight">{data.pains.title}</h2>
        <ul className="mt-8 space-y-4 max-w-3xl">
          {data.pains.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-white/70 text-lg">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="mt-20 text-3xl md:text-4xl font-medium tracking-tight">
          {data.includes.title}
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.includes.items.map((item) => (
            <div key={item.title} className="bg-[#111] rounded-2xl p-7 border border-white/10">
              <p className="flex items-center gap-2 text-lg font-medium">
                <Check size={18} className="text-orange-400 flex-shrink-0" /> {item.title}
              </p>
              <p className="mt-2 text-white/60 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#111] rounded-2xl p-8 md:p-10 border border-orange-400/30">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">{data.pricing.title}</h2>
          <p className="mt-4 text-white/70 text-lg leading-relaxed max-w-3xl">{data.pricing.text}</p>
        </div>

        <h2 className="mt-20 text-3xl md:text-4xl font-medium tracking-tight">
          {data.process.title}
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.process.steps.map((step) => (
            <div key={step.label} className="bg-[#111] rounded-2xl p-7 border border-white/10">
              <p className="text-xs uppercase tracking-wider text-orange-400 font-mono">
                {step.label}
              </p>
              <p className="mt-2 text-lg font-medium">{step.title}</p>
              <p className="mt-2 text-white/60 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-20 text-3xl md:text-4xl font-medium tracking-tight">{data.faq.title}</h2>
        <dl className="mt-8 space-y-6 max-w-3xl">
          {data.faq.items.map((f) => (
            <div key={f.q} className="border-b border-white/10 pb-6">
              <dt className="text-lg font-medium">{f.q}</dt>
              <dd className="mt-2 text-white/60 leading-relaxed">{f.a}</dd>
            </div>
          ))}
        </dl>

        <h2 className="mt-20 text-2xl md:text-3xl font-medium tracking-tight">
          {data.articles.title}
        </h2>
        <ul className="mt-6 space-y-3">
          {data.articles.items.map((a) => (
            <li key={a.href}>
              <Link
                to={a.href}
                className="text-orange-400 hover:text-orange-300 transition-colors text-lg"
              >
                {a.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-20 bg-[#111] rounded-2xl p-8 md:p-10 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-xl md:text-2xl font-medium max-w-xl">{data.cta.text}</p>
          <a
            href="https://calendly.com/digitinexus/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black hover:bg-gray-100 transition-all duration-300 rounded-2xl px-6 py-4 font-semibold text-base flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            {data.cta.label}
          </a>
        </div>
      </div>
    </main>
  );
};
