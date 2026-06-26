import type { Author } from './types';

// Il blog usa Person schema con sameAs verso il profilo pubblico per l'E-E-A-T.
// Nota: la foto autore è ancora un placeholder SVG → sostituire con foto reale (.webp).
export const AUTHORS: Record<string, Author> = {
  // Tipo 2 — Design / realizzazione siti
  'nicola-palummo': {
    id: 'nicola-palummo',
    name: 'Nicola Palummo',
    role: 'Cofounder & Web Designer, DigitiNexus',
    // Bio fornita dall'utente (verbatim). Niente dati non verificabili.
    bio: 'Nicola Palummo è cofounder e web designer di DigitiNexus. Appassionato di design, progetta e realizza siti con attenzione ai dettagli e alla consegna rapida.',
    avatar: '/blog/authors/nicola-palummo.svg', // TODO: sostituire con foto reale (.webp)
    sameAs: [
      'https://www.linkedin.com/in/nicola-palummo',
    ],
  },
  // Tipo 1 — Finance / Strategia
  'filippo-gentili': {
    id: 'filippo-gentili',
    name: 'Filippo Gentili',
    role: 'Cofounder, DigitiNexus',
    bio: '',
    avatar: '/blog/authors/filippo-gentili.svg', // TODO: sostituire con foto reale (.webp)
    sameAs: [
      'https://www.linkedin.com/in/filippo-gentili-390615279/',
    ],
  },
};

export const DEFAULT_AUTHOR_ID = 'nicola-palummo';

/** true se l'autore ha un profilo pubblico reale (non placeholder) → nome cliccabile */
export function authorProfileUrl(id: string): string | null {
  const a = getAuthor(id);
  const url = a.sameAs[0];
  if (!url || url.includes('PLACEHOLDER')) return null;
  return url;
}

export function getAuthor(id: string): Author {
  return AUTHORS[id] ?? AUTHORS[DEFAULT_AUTHOR_ID];
}
