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
    preheader: 'I tuoi 3 PDF sono pronti da scaricare. I link restano validi per 7 giorni.',
    eyebrow: 'Le tue risorse',
    title: 'Ecco le tue risorse complete',
    intro:
      'Grazie per averle richieste! Qui sotto trovi i link per scaricare i 3 PDF completi. I link restano validi per 7 giorni.',
    cta: 'Scarica il PDF',
    outro: 'Domande sul tuo sito o sulla tua presenza online? Rispondi pure a questa email: la leggiamo davvero.',
    signature: '— Il team DigitiNexus',
    permission: 'Hai ricevuto questa email perché hai richiesto le risorse su digitinexus.com.',
    footer: 'DigitiNexus LLC',
  },
  en: {
    subject: 'Your 3 complete PDFs | DigitiNexus',
    preheader: 'Your 3 PDFs are ready to download. The links stay valid for 7 days.',
    eyebrow: 'Your resources',
    title: 'Here are your complete resources',
    intro:
      'Thanks for requesting them! Below are the links to download the 3 complete PDFs. The links stay valid for 7 days.',
    cta: 'Download the PDF',
    outro: 'Questions about your website or online presence? Just reply to this email — we actually read it.',
    signature: '— The DigitiNexus team',
    permission: 'You received this email because you requested the resources on digitinexus.com.',
    footer: 'DigitiNexus LLC',
  },
};

const isValidEmail = (v: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

function downloadUrl(id: number, exp: number): string {
  const secret = process.env.RESOURCES_LINK_SECRET || process.env.RESEND_API_KEY || '';
  const sig = createHmac('sha256', secret).update(`${id}.${exp}`).digest('hex');
  return `${SITE_URL}/api/download-resource?id=${id}&exp=${exp}&sig=${sig}`;
}

// Stile DigitiNexus: card scura #0a0a0a, accento arancio #F97316, item numerati
// 01/02/03 come le sezioni del sito, bottoni pill. Solo tabelle + stili inline
// (email-safe); il font Manrope degrada sui fallback di sistema nei client email.
function buildEmailHtml(locale: 'it' | 'en', links: { label: string; url: string }[]): string {
  const c = COPY[locale];
  const FONT = "'Manrope','Segoe UI',Helvetica,Arial,sans-serif";
  const rows = links
    .map(
      (l, i) => `
      <tr><td style="padding:22px 0;border-top:1px solid #262626">
        <p style="margin:0 0 4px;font-family:${FONT};font-size:12px;font-weight:700;letter-spacing:2px;color:#f97316">0${i + 1}</p>
        <p style="margin:0 0 14px;font-family:${FONT};font-size:17px;font-weight:700;color:#ffffff;line-height:1.4">${l.label}</p>
        <table role="presentation" cellpadding="0" cellspacing="0"><tr>
          <td bgcolor="#f97316" style="border-radius:999px">
            <a href="${l.url}" style="display:inline-block;font-family:${FONT};background:#f97316;color:#ffffff;text-decoration:none;padding:12px 26px;border-radius:999px;font-weight:700;font-size:14px">${c.cta} &rarr;</a>
          </td>
        </tr></table>
      </td></tr>`,
    )
    .join('');
  return `<!doctype html><html lang="${locale}"><head><meta charset="utf-8"><meta name="color-scheme" content="dark"><meta name="supported-color-schemes" content="dark"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:${FONT}">
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all">${c.preheader}&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="#f3f4f6"><tr><td align="center" style="padding:40px 16px">
    <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%">

      <!-- header: logo + wordmark -->
      <tr><td style="background:#0a0a0a;border-radius:20px 20px 0 0;padding:28px 36px;border-bottom:1px solid #262626">
        <table role="presentation" cellpadding="0" cellspacing="0"><tr>
          <td valign="middle" style="padding-right:14px"><img src="${SITE_URL}/email-logo.png" width="40" height="40" alt="DigitiNexus" style="display:block;border:0"></td>
          <td valign="middle" style="font-family:${FONT};font-size:19px;font-weight:800;color:#ffffff;letter-spacing:.3px">DigitiNexus</td>
        </tr></table>
      </td></tr>

      <!-- corpo -->
      <tr><td style="background:#0a0a0a;padding:36px 36px 40px;border-radius:0 0 20px 20px">
        <p style="margin:0 0 10px;font-family:${FONT};font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#f97316">${c.eyebrow}</p>
        <h1 style="margin:0 0 14px;font-family:${FONT};font-size:26px;line-height:1.25;color:#ffffff">${c.title}</h1>
        <p style="margin:0 0 26px;font-family:${FONT};font-size:15px;color:#a3a3a3;line-height:1.65">${c.intro}</p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>
        <p style="margin:28px 0 0;font-family:${FONT};font-size:15px;color:#a3a3a3;line-height:1.65;border-top:1px solid #262626;padding-top:24px">${c.outro}</p>
        <p style="margin:18px 0 0;font-family:${FONT};font-size:15px;font-weight:700;color:#ffffff">${c.signature}</p>
      </td></tr>

      <!-- footer fuori dalla card -->
      <tr><td align="center" style="padding:24px 20px 0">
        <p style="margin:0 0 6px;font-family:${FONT};font-size:12px;color:#737373;line-height:1.6">${c.permission}</p>
        <p style="margin:0;font-family:${FONT};font-size:12px;color:#737373">${c.footer} · <a href="${SITE_URL}" style="color:#f97316;text-decoration:none;font-weight:600">digitinexus.com</a></p>
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
  const from = process.env.RESOURCES_FROM_EMAIL || 'DigitiNexus <info@digitinexus.com>';
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
