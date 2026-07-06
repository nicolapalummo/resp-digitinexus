import React from 'react';

// Footer legale minimale (GDPR: i PDF Privacy/Terms erano orfani, non linkati
// da nessuna pagina). Solo dati societari confermati — niente indirizzi/P.IVA.
export const Footer: React.FC = () => (
  <footer className="bg-black border-t border-white/10 py-8 px-6 text-center text-sm text-white/40">
    <p>
      © {new Date().getFullYear()} DigitiNexus LLC ·{' '}
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
