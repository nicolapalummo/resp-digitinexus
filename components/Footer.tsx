import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { langFromPath } from '../lib/i18nRouting';

// Footer legale minimale (GDPR: i PDF Privacy/Terms erano orfani, non linkati
// da nessuna pagina). Solo dati societari confermati — niente indirizzi/P.IVA.
export const Footer: React.FC = () => {
  const location = useLocation();
  const isEn = langFromPath(location.pathname) === 'en';
  // Sulla landing l'ultima sezione (LetsTalk, sfondo chiaro) ha già la sua riga
  // copyright + link legali: il footer nero globale lì stonerebbe e duplicherebbe.
  if (location.pathname === '/' || location.pathname === '/en') return null;
  return (
  <footer className="bg-black border-t border-white/10 py-8 px-6 text-center text-sm text-white/40">
    <p>
      © {new Date().getFullYear()} DigitiNexus LLC ·{' '}
      <Link
        to={isEn ? '/en/chi-siamo' : '/chi-siamo'}
        className="hover:text-white/70 underline underline-offset-4 transition-colors"
      >
        {isEn ? 'About us' : 'Chi siamo'}
      </Link>{' '}
      ·{' '}
      <a
        href="/Privacy%20Policy%20DigitiNexus%20LLC.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white/70 underline underline-offset-4 transition-colors"
      >
        Privacy Policy
      </a>{' '}
      ·{' '}
      <a
        href="/Terms%20&%20Conditions%20DigitiNexus%20LLC.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white/70 underline underline-offset-4 transition-colors"
      >
        Terms &amp; Conditions
      </a>
    </p>
  </footer>
  );
};
