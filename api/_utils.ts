// Utilità condivise dalle funzioni /api/* (i file con underscore non diventano rotte).
// I 3 PDF completi vivono in private/freemium/ (NON in public/): l'unico modo di
// ottenerli è il link firmato a scadenza inviato via email da send-resources.
import { createHmac } from 'node:crypto';

export const SITE_URL = 'https://digitinexus.com';
export const CRM_INTAKE_URL = 'https://crmsales.digitinexus.com/api/contact-intake';
export const LINK_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 giorni

export interface ResourceDef {
  file: string; // nome file in private/freemium/
  label: { it: string; en: string };
  downloadName: string; // nome del file consegnato al browser
}

export const RESOURCES: ResourceDef[] = [
  {
    file: 'guida-google-business-profile.pdf',
    label: {
      it: 'Guida Ottimizzazione Google Business Profile',
      en: 'Google Business Profile Optimization Guide',
    },
    downloadName: 'Guida Google Business Profile - DigitiNexus.pdf',
  },
  {
    file: '10-pilastri-del-marketing.pdf',
    label: { it: '10 Pilastri del Marketing', en: 'The 10 Pillars of Marketing' },
    downloadName: '10 Pilastri del Marketing - DigitiNexus.pdf',
  },
  {
    file: 'strategie-marketing-offline-pmi.pdf',
    label: {
      it: 'Strategie di Marketing Offline per PMI',
      en: 'Offline Marketing Strategies for SMBs',
    },
    downloadName: 'Strategie di Marketing Offline per PMI - DigitiNexus.pdf',
  },
];

function secret(): string {
  // RESOURCES_LINK_SECRET è la chiave prevista; in sua assenza si ripiega sulla
  // API key email (mai esposta) così i link restano firmati comunque.
  const s = process.env.RESOURCES_LINK_SECRET || process.env.RESEND_API_KEY;
  if (!s) throw new Error('RESOURCES_LINK_SECRET non configurato');
  return s;
}

export function signResource(id: number, exp: number): string {
  return createHmac('sha256', secret()).update(`${id}.${exp}`).digest('hex');
}

export function verifyResource(id: number, exp: number, sig: string): boolean {
  if (!Number.isInteger(id) || id < 0 || id >= RESOURCES.length) return false;
  if (!Number.isFinite(exp) || exp < Date.now()) return false;
  try {
    return signResource(id, exp) === sig;
  } catch {
    return false;
  }
}

export function downloadUrl(id: number, exp: number): string {
  return `${SITE_URL}/api/download-resource?id=${id}&exp=${exp}&sig=${signResource(id, exp)}`;
}

export const isValidEmail = (v: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
