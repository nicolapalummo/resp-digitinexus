# Writing kit — istruzioni operative per scrivere un articolo del blog

> Letto da ogni redattore. Fonte di verità: il **brief** dell'articolo in `DigitiNexus_Calendario_Brief_SEO_GEO.md` (cerca "Post #N —"). Voce/lunghezza: `VOICE.md`. Brand: `BRAND.md`.

## Formato file (TypeScript)
Crea `content/blog/articles/<slug>.ts`. Struttura:
```ts
import type { Article } from '../types';

const article: Article = {
  id: <N>, title: '<H1 dal brief>', metaTitle: '<≤60, keyword-first | DigitiNexus>',
  slug: '<slug esatto dalla tabella>', metaDescription: '<≤155 dal brief>',
  capsule: '<capsula dal brief, 40–75 parole, autosufficiente>',
  keywordPrimary: '<dal brief>', keywordsSecondary: [<dal brief>],
  cluster: '<c1..c7 dalla tabella>', isPillar: <true se pillar>, intent: '<dal brief>',
  authorId: '<nicola-palummo | filippo-gentili dalla tabella>',
  publishDate: '<YYYY-MM-DD dalla tabella>', updatedDate: '<= publishDate>',
  status: 'published',
  cover: { src: '/blog/covers/<slug>.webp', alt: '<descrizione italiana col tema>' },
  body: [ ... ], faq: [ ... ], internalLinks: [ ... ], sources: [ ... ],
};
export default article;
```
Blocchi `body`: `{type:'h2'|'h3',text}`, `{type:'p',text,lead?:true}`, `{type:'list',ordered?:true,items:string[]}`, `{type:'table',caption?,headers:string[],rows:string[][]}`, `{type:'callout',variant:'info'|'tip'|'warning'|'placeholder',text}`, `{type:'cta',text,label,href}`.
Inline nei text: `**grassetto**`, `[anchor](/blog/slug)`. **Apostrofi escapati come \'**. `export default article;` finale. **NON** modificare `content/blog/index.ts` (registra il coordinatore).

## Voce & struttura (da VOICE.md — sintesi)
- Italiano nativo, dai del "tu", premium ma diretto. Niente calchi inglesi. **Niente em dash "—"** (virgole/due punti/parentesi). Niente incipit "Vediamo/Approfondiamo/Scopri".
- Ogni H2 = **risposta-prima 40–75 parole** (primo paragrafo `lead:true`) → 1–2 paragrafi di sviluppo con **un dato con fonte + un esempio concreto** (per gli studi: declinato avvocato/commercialista/architetto) → eventuale lista/tabella.
- Copri la domanda principale + 3–5 adiacenti. Front-loading.
- **Lunghezza:** pillar 1.800–2.500 · satelliti/guide 1.000–1.500 · comparative/case study 900–1.400.
- Chiudi `body` con un blocco `cta` (label "Parliamone", href `https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ`).
- 3–5 FAQ (risposte 40–55 parole). `internalLinks` verso gli slug indicati nel brief.

## POLICY FONTI (tassativa)
- **Vietate**: web agency, marketplace, blog di tool/vendor non-data, ricerche di concorrenti (Onionlabs, AddLance, My Web Lab, Webvoria, Tready, Esc Agency, Frase, SE Roundtable…). Mai, né inline né in `sources`.
- **Citazione inline tra parentesi SOLO per ISTITUZIONI** (sotto) e per lo **studio accademico Aggarwal**. Esempio: `(ISTAT, 2025)` con link.
- **Data company ammesse** (SEOZoom, SparkToro, Ahrefs, Otterly): il numero sta nel testo **senza parentesi**; la fonte va **solo nella lista `sources`**.
- **Nessun numero orfano**: ogni dato ha una fonte ammessa; se non esiste → **togli il numero**, resta qualitativo. **Costi e tempi** non hanno fonte istituzionale → sempre **qualitativi** (niente cifre € o settimane spacciate per dato; gli intervalli operativi di processo si possono dare senza attribuzione, non come statistica citata).
- **Mai inventare** dati, percentuali, nomi di clienti, risultati.

### Whitelist dati (gli UNICI numeri ammessi)
ISTITUZIONI — citabili inline `(Fonte, anno)` + in `sources`:
- **ISTAT — Imprese e ICT 2025**: ~4,9 mln PMI; **88,3%** ferme a digitalizzazione "di base"; **14,3%** vende online; adozione **AI 6%→16,4%** in due anni; **competenze** freno principale (**55%**). `https://www.istat.it/comunicato-stampa/imprese-e-ict-anno-2025/`
- **Cassa Forense — Rapporto Avvocatura 2025**: **228.641** avvocati; **34%** ha un sito; **62%** lo ritiene "molto importante". `https://www.cassaforense.it/media/munf4vli/rapporto-avvocatura-2025.pdf`
- **MIMIT / Registro Imprese**: startup innovative ~**24.261**. `https://www.openinnovation.regione.lombardia.it/it/news/news/8961/scopri-i-numeri-delle-startup-innovative-nel-2025`

ACCADEMICO — citabile inline per nome:
- **Aggarwal et al., "GEO", KDD 2024**: Cite Sources/Quotation/Statistics ~**+40%** visibilità nei motori generativi. `https://arxiv.org/abs/2311.09735`

DATA COMPANY — SOLO in `sources`, mai inline tra parentesi:
- **SEOZoom**: **71,69%** keyword con AI Overview (Italia, mag 2026); **30,7%** settore finanza/fiscale. `https://www.seozoom.it/geo-generative-engine-optimization/`
- **SparkToro** (dati Datos/Semrush, 2024): ~**60%** ricerche senza clic. `https://sparktoro.com/blog/2024-zero-click-search-study-for-every-1000-us-google-searches-only-374-clicks-go-to-the-open-web-in-the-eu-its-360/`
- **Ahrefs**: AI Overview riducono il CTR della pos.1 del **58%** (`https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/`); **97%** dei file llms.txt mai letti (`https://ahrefs.com/blog/llmstxt-study/`).
- **Otterly.ai**: llms.txt toccato dallo **0,1%** delle richieste bot AI. `https://otterly.ai/blog/the-llms-txt-experiment/`

## Placeholder obbligatori (callout `variant:'placeholder'`, NON pubblicare il dato finché non confermato)
- **#10, #40, #44** (case study): durata reale, metriche prima/dopo, citazione cliente → placeholder finché DigitiNexus non fornisce i dati reali. Niente numeri inventati: se assenti, articolo "dietro le quinte del processo" senza metriche.
- **#28** (avvocati): limiti deontologici/pubblicitari forensi → placeholder "verificare con l'ordine".
- **#39** (digitalizzazione PMI): incentivi/bandi specifici → placeholder "verificare il bando vigente".
- **#18** (accessibilità): chi è obbligato per legge e da quando → placeholder "verificare la normativa applicabile".
- **#59** (AI privacy/GDPR/AI Act): scadenze e obblighi puntuali → generale + placeholder per i riferimenti precisi.

## Tabella metadati per articolo (slug · cluster · autore · data · pillar)
cluster: c1 Costi/Tempi · c2 Qualità · c3 SEO/GEO · c4 Studi · c5 PMI · c6 Startup · c7 AI.

| # | slug | cluster | autore | publishDate | pillar |
|---|---|---|---|---|---|
| 4 | costi-nascosti-sito-web | c1 | filippo-gentili | 2026-07-01 | |
| 5 | agenzia-o-freelance-sito-web | c1 | filippo-gentili | 2026-07-08 | |
| 6 | come-leggere-preventivo-sito-web | c1 | filippo-gentili | 2026-08-12 | |
| 7 | quanto-costa-ecommerce | c1 | filippo-gentili | 2026-09-07 | |
| 8 | quanto-costa-landing-page | c1 | filippo-gentili | 2026-09-25 | |
| 9 | costo-mantenimento-sito-web | c1 | filippo-gentili | 2026-10-09 | |
| 10 | case-study-sito-3-settimane | c1 | nicola-palummo | 2026-07-20 | |
| 11 | calcolatore-costo-sito | c1 | filippo-gentili | 2026-10-14 | |
| 13 | design-premium-sito-web | c2 | nicola-palummo | 2026-08-05 | |
| 14 | core-web-vitals-sito-veloce | c2 | nicola-palummo | 2026-09-14 | |
| 15 | sito-mobile-first | c2 | nicola-palummo | 2026-10-19 | |
| 16 | sito-web-che-converte | c2 | nicola-palummo | 2026-08-26 | |
| 17 | quando-rifare-sito-restyling | c2 | nicola-palummo | 2026-10-05 | |
| 18 | accessibilita-sito-web | c2 | nicola-palummo | 2026-10-23 | |
| 20 | ai-overview-google-italia | c3 | filippo-gentili | 2026-07-13 | |
| 21 | schema-markup-ai | c3 | filippo-gentili | 2026-08-17 | |
| 22 | e-e-a-t-author-authority | c3 | filippo-gentili | 2026-09-02 | |
| 23 | contenuti-citabili-ai-capsule-method | c3 | filippo-gentili | 2026-09-23 | |
| 24 | llms-txt-serve-davvero | c3 | filippo-gentili | 2026-07-27 | |
| 25 | seo-2026 | c3 | filippo-gentili | 2026-09-30 | |
| 26 | local-seo | c3 | filippo-gentili | 2026-10-12 | |
| 28 | sito-web-avvocato-studio-legale | c4 | filippo-gentili | 2026-06-29 | |
| 29 | sito-web-commercialista | c4 | filippo-gentili | 2026-07-06 | |
| 30 | costo-sito-studio-professionale | c4 | filippo-gentili | 2026-07-22 | |
| 31 | e-e-a-t-professionisti | c4 | filippo-gentili | 2026-07-29 | |
| 32 | errori-sito-studio | c4 | nicola-palummo | 2026-08-10 | |
| 33 | sito-web-studio-architettura | c4 | filippo-gentili | 2026-09-09 | |
| 34 | recensioni-google-business-profile-studi | c4 | filippo-gentili | 2026-08-19 | |
| 35 | farsi-trovare-ai-professionista | c4 | filippo-gentili | 2026-07-15 | |
| 36 | sito-web-pmi-servizi | c5 | filippo-gentili | 2026-08-03 | pillar |
| 37 | sito-b2b-lead-generation | c5 | filippo-gentili | 2026-08-31 | |
| 38 | restyling-sito-aziendale | c5 | nicola-palummo | 2026-09-21 | |
| 39 | digitalizzazione-pmi | c5 | filippo-gentili | 2026-10-16 | |
| 40 | case-study-sito-pmi | c5 | nicola-palummo | 2026-10-02 | |
| 41 | sito-web-startup | c6 | filippo-gentili | 2026-08-24 | pillar |
| 42 | landing-page-startup-validazione | c6 | nicola-palummo | 2026-09-16 | |
| 43 | sito-startup-round-investitori | c6 | filippo-gentili | 2026-09-28 | |
| 44 | sito-startup-veloce-lancio | c6 | nicola-palummo | 2026-10-07 | |
| 45 | branding-startup | c6 | nicola-palummo | 2026-10-21 | |
| 49 | allucinazioni-ai | c7 | nicola-palummo | 2026-07-03 | |
| 50 | prompt-efficaci-lavoro | c7 | nicola-palummo | 2026-07-10 | |
| 51 | chatbot-ai-sito-web | c7 | nicola-palummo | 2026-07-17 | |
| 52 | prenotazioni-contatti-ai | c7 | nicola-palummo | 2026-07-24 | |
| 53 | automazioni-ai-no-code | c7 | nicola-palummo | 2026-07-31 | |
| 54 | immagini-ai-per-brand | c7 | nicola-palummo | 2026-08-07 | |
| 55 | ai-studi-professionali | c7 | nicola-palummo | 2026-08-14 | |
| 56 | ai-per-commercialisti | c7 | nicola-palummo | 2026-08-21 | |
| 57 | ai-per-pmi-servizi | c7 | nicola-palummo | 2026-08-28 | |
| 58 | startup-con-ai | c7 | nicola-palummo | 2026-09-04 | |
| 59 | ai-privacy-gdpr | c7 | nicola-palummo | 2026-09-11 | |
| 60 | quanto-costa-ai-azienda | c7 | nicola-palummo | 2026-09-18 | |
