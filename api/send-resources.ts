// POST /api/send-resources — {email, consensoMarketing, locale}
// 1. Registra SEMPRE il contatto nel CRM (fonte "Risorsa sito"): anche se
//    l'invio email fallisce, il contatto non va perso.
// 2. Invia l'email con i 3 link firmati a scadenza (7 giorni) ai PDF completi.
// Email via Resend (env: RESEND_API_KEY, RESOURCES_FROM_EMAIL, RESOURCES_LINK_SECRET).
// File self-contained: niente import relativi (il progetto è "type": "module"
// e gli import ESM senza estensione falliscono a runtime nelle functions).
import { createHmac } from 'node:crypto';

const SITE_URL = 'https://digitinexus.com';
const CRM_INTAKE_URL = 'https://crmsales.digitinexus.com/api/contact-intake';
const LINK_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 giorni

const RESOURCES = [
  {
    label: {
      it: 'Guida Ottimizzazione Google Business Profile',
      en: 'Google Business Profile Optimization Guide',
    },
  },
  { label: { it: '10 Pilastri del Marketing', en: 'The 10 Pillars of Marketing' } },
  {
    label: {
      it: 'Strategie di Marketing Offline per PMI',
      en: 'Offline Marketing Strategies for SMBs',
    },
  },
];

const COPY = {
  it: {
    subject: 'I tuoi 3 PDF completi | DigitiNexus',
    title: 'Ecco le tue risorse complete',
    intro:
      'Grazie per averle richieste! Qui sotto trovi i link per scaricare i 3 PDF completi. I link restano validi per 7 giorni.',
    cta: 'Scarica il PDF',
    outro: 'Domande sul tuo sito o sulla tua presenza online? Rispondi pure a questa email.',
    footer: 'DigitiNexus LLC · digitinexus.com',
  },
  en: {
    subject: 'Your 3 complete PDFs | DigitiNexus',
    title: 'Here are your complete resources',
    intro:
      'Thanks for requesting them! Below are the links to download the 3 complete PDFs. The links stay valid for 7 days.',
    cta: 'Download the PDF',
    outro: 'Questions about your website or online presence? Just reply to this email.',
    footer: 'DigitiNexus LLC · digitinexus.com',
  },
};

const isValidEmail = (v: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

function downloadUrl(id: number, exp: number): string {
  const secret = process.env.RESOURCES_LINK_SECRET || process.env.RESEND_API_KEY || '';
  const sig = createHmac('sha256', secret).update(`${id}.${exp}`).digest('hex');
  return `${SITE_URL}/api/download-resource?id=${id}&exp=${exp}&sig=${sig}`;
}

function buildEmailHtml(locale: 'it' | 'en', links: { label: string; url: string }[]): string {
  const c = COPY[locale];
  const rows = links
    .map(
      (l) => `
      <tr><td style="padding:10px 0">
        <p style="margin:0 0 6px;font-weight:600;color:#111">${l.label}</p>
        <a href="${l.url}" style="display:inline-block;background:#f97316;color:#fff;text-decoration:none;padding:10px 18px;border-radius:10px;font-weight:600">${c.cta} →</a>
      </td></tr>`,
    )
    .join('');
  return `<!doctype html><html><body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:32px 16px">
    <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;padding:32px">
      <tr><td>
        <h1 style="margin:0 0 12px;font-size:22px;color:#111">${c.title}</h1>
        <p style="margin:0 0 18px;color:#444;line-height:1.6">${c.intro}</p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>
        <p style="margin:22px 0 0;color:#444;line-height:1.6">${c.outro}</p>
        <p style="margin:26px 0 0;color:#999;font-size:12px">${c.footer}</p>
      </td></tr>
    </table>
  </td></tr></table>
</body></html>`;
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'method_not_allowed' });
    return;
  }
  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  const email = String(body.email || '').trim().toLowerCase();
  const consensoMarketing = Boolean(body.consensoMarketing);
  const locale: 'it' | 'en' = body.locale === 'en' ? 'en' : 'it';

  if (!isValidEmail(email)) {
    res.status(400).json({ ok: false, error: 'invalid_email' });
    return;
  }

  // 1. CRM prima di tutto: il contatto non va perso se l'email fallisce.
  let crmOk = false;
  try {
    const crmRes = await fetch(CRM_INTAKE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        risorsaScaricata: 'Risorsa sito: richiesta 3 PDF completi via email',
        consensoMarketing,
      }),
    });
    crmOk = crmRes.ok;
  } catch {
    crmOk = false;
  }

  // 2. Email transazionale con i link firmati (consegna richiesta dall'utente;
  //    il nurturing marketing è gestito dal CRM solo se consensoMarketing=true).
  let emailSent = false;
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESOURCES_FROM_EMAIL || 'DigitiNexus <risorse@digitinexus.com>';
  if (apiKey) {
    try {
      const exp = Date.now() + LINK_TTL_MS;
      const links = RESOURCES.map((r, id) => ({
        label: r.label[locale],
        url: downloadUrl(id, exp),
      }));
      const sendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from,
          to: [email],
          subject: COPY[locale].subject,
          html: buildEmailHtml(locale, links),
        }),
      });
      emailSent = sendRes.ok;
      if (!sendRes.ok) {
        console.error('[send-resources] Resend error', sendRes.status, await sendRes.text());
      }
    } catch (err) {
      console.error('[send-resources] email send failed', err);
    }
  } else {
    console.error('[send-resources] RESEND_API_KEY mancante: email non inviata');
  }

  res.status(200).json({ ok: true, crmOk, emailSent });
}
