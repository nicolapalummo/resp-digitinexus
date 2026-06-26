import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { langFromPath } from '../lib/i18nRouting';

// Real 404 page (replaces the previous silent redirect to home). Sets noindex so
// crawlers don't index unknown URLs as soft-404 duplicates.
export const NotFound: React.FC = () => {
  const en = langFromPath(useLocation().pathname) === 'en';

  useEffect(() => {
    const prevTitle = document.title;
    document.title = en ? '404 — Page not found | DigitiNexus' : '404 — Pagina non trovata | DigitiNexus';

    let robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const prevRobots = robots?.getAttribute('content') ?? null;
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'noindex, follow');
    window.scrollTo(0, 0);

    return () => {
      document.title = prevTitle;
      if (prevRobots) robots!.setAttribute('content', prevRobots);
      else robots!.setAttribute('content', 'index, follow');
    };
  }, [en]);

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-orange-400/80">404</p>
        <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
          {en ? 'Page not found' : 'Pagina non trovata'}
        </h1>
        <p className="mt-3 leading-relaxed text-white/60">
          {en
            ? "The page you're looking for doesn't exist or has been moved."
            : 'La pagina che cerchi non esiste o è stata spostata.'}
        </p>
        <Link
          to={en ? '/en' : '/'}
          className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-medium text-black transition-transform hover:scale-105 duration-300"
        >
          {en ? 'Back home' : 'Torna alla home'}
        </Link>
      </div>
    </main>
  );
};
