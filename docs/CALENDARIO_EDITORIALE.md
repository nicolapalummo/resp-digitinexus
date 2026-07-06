# Calendario editoriale — DigitiNexus blog

**Cadenza:** 3 post/settimana (**lunedì, mercoledì, venerdì**), di cui **1 sempre sull'AI** nelle settimane 1–15 · **Totale:** 60 articoli · **Arco:** 1 giugno → 23 ottobre 2026.

Autori: **Filippo Gentili** (Finance/Strategia) · **Nicola Palummo** (Design/realizzazione + cluster AI). Vedi `BLOG_AUTORI.md`.

---

## Come funziona la pubblicazione (automatica per data)

Il blog è **statico prerenderizzato** (SSG): ogni articolo è un modulo dati (`content/blog/articles/<slug>.ts`) con due campi chiave: `publishDate` e `status`.

1. **Gating per data (build-time).** Alla build, `lib/blog.ts` mostra un articolo **solo se** `status ≠ draft` **e** `publishDate ≤ oggi`. Gli articoli con data **futura** sono esclusi da indice, pagina, sitemap e RSS: esistono nel codice ma **non sono visibili**.
2. **Pubblicazione automatica.** Una **GitHub Action cron giornaliera** (05:00 UTC) chiama un **Vercel Deploy Hook** che ri-builda e ri-pubblica il sito. Il giorno in cui un `publishDate` arriva, il rebuild include l'articolo e **va online da solo**, senza interventi manuali. (File: `.github/workflows/blog-schedule.yml`; secret da impostare: `VERCEL_DEPLOY_HOOK_URL`.)
3. **Anteprima prima del live.** In sviluppo (`npm run dev`) o con `BLOG_PREVIEW=1` il gating è disattivato: vedi anche gli articoli programmati, per revisionarli prima che diventino pubblici.

> In pratica: **scriviamo gli articoli in anticipo**, mettiamo la `publishDate` giusta e li committiamo. Restano "dormienti" finché non arriva la loro data, poi il cron li pubblica automaticamente.

## Come e quando si scrivono gli articoli

- I brief sono in `DigitiNexus_Calendario_Brief_SEO_GEO.md`, raggruppati in **"Blocchi"** di stesura (NON coincidono con le settimane di uscita: servono solo a scrivere in modo ordinato).
- Per ogni articolo: si scrive il modulo `.ts` seguendo il brief + `VOICE.md` (lunghezza/profondità, capsula, answer-first) e la **policy fonti** (no web agency; citazione inline solo per istituzioni; data company solo in lista Fonti; nessun dato inventato).
- Autore assegnato per tipo (vedi `BLOG_AUTORI.md`); cover generata dalla pipeline (`scripts/generate-covers.mjs`), titolo aggiunto con `--reprocess` quando l'articolo esiste.
- Si registra il modulo in `content/blog/index.ts`, si imposta `publishDate` (dalla tabella sotto) e `status: 'published'`. Il gating fa il resto.
- **Conviene lavorare con anticipo** (un blocco alla volta) così c'è sempre margine tra stesura e data di uscita.

Legenda stato: 🟢 **live** (data ≤ oggi) · 📅 **programmato** (scritto, esce alla sua data) · ⏸️ **IN PAUSA** (`status: draft`, non esce finché non si conferma) · ⚠️ **DA CONFERMARE prima della pubblicazione** (vedi sezione in fondo).

> **Tutti i 60 articoli sono già scritti, IT ed EN, e in parità.** I 5 articoli normativi sono **confermati** (con la correzione su #28: art. 17 e 35) e il **calcolatore #11 è realizzato**. Resta in sospeso **solo** una cosa: i **3 case study** (in pausa, `status: draft`), che non escono finché non fornisci i dati reali del progetto. Tutto il resto è pronto e approvabile (vedi stato in fondo).

---

## Calendario (20 settimane × 3 uscite)

| Sett. | Data | # | Articolo | Cluster | Autore | Stato |
|---|---|---|---|---|---|---|
| 1 | lun 01 giu | 1 | Quanto costa un sito 2026 | Costi/Tempi (pillar) | Filippo | 🟢 |
| 1 | mer 03 giu | 19 | GEO: farsi citare dalle AI | SEO/GEO (pillar) | Filippo | 🟢 |
| 1 | ven 05 giu | 46 | AI per l'azienda: la guida | AI (pillar) | Nicola | 🟢 |
| 2 | lun 08 giu | 2 | Quanto tempo per un sito | Costi/Tempi | Nicola | 🟢 |
| 2 | mer 10 giu | 27 | Sito per studi professionali | Studi (pillar) | Filippo | 🟢 |
| 2 | ven 12 giu | 47 | Agente AI o chatbot | AI | Nicola | 🟢 |
| 3 | lun 15 giu | 3 | Sito in 1–4 settimane | Costi/Tempi | Nicola | 🟢 |
| 3 | mer 17 giu | 12 | Su misura o template? | Qualità (pillar) | Nicola | 🟢 |
| 3 | ven 19 giu | 48 | RAG: l'AI con i tuoi dati | AI | Nicola | 🟢 |
| 4 | lun 29 giu | 28 | Sito per avvocati/studi legali | Studi | Filippo | 📅 |
| 4 | mer 01 lug | 4 | Costi nascosti di un sito | Costi/Tempi | Filippo | 📅 |
| 4 | ven 03 lug | 49 | Perché l'AI inventa (allucinazioni) | AI | Nicola | 📅 |
| 5 | lun 06 lug | 29 | Sito per commercialisti | Studi | Filippo | 📅 |
| 5 | mer 08 lug | 5 | Agenzia o freelance? | Costi/Tempi | Filippo | 📅 |
| 5 | ven 10 lug | 50 | Prompt efficaci per il lavoro | AI | Nicola | 📅 |
| 6 | lun 13 lug | 20 | AI Overview in Italia | SEO/GEO | Filippo | 📅 |
| 6 | mer 15 lug | 35 | Trovarsi su ChatGPT (studi) | Studi | Filippo | 📅 |
| 6 | ven 17 lug | 51 | Chatbot AI sul sito | AI | Nicola | 📅 |
| 7 | ~~20 lug~~ → 30 set | 10 | Case study: sito in 3 settimane | Costi/Tempi | Nicola | ⏸️ ⚠️ |
| 7 | mer 22 lug | 30 | Costo sito studio | Studi | Filippo | 📅 |
| 7 | ven 24 lug | 52 | Prenotazioni automatizzate AI | AI | Nicola | 📅 |
| 8 | lun 27 lug | 24 | Serve llms.txt? | SEO/GEO | Filippo | 📅 |
| 8 | mer 29 lug | 31 | E-E-A-T per professionisti | Studi | Filippo | 📅 |
| 8 | ven 31 lug | 53 | Automazioni AI no-code | AI | Nicola | 📅 |
| 9 | lun 03 ago | 36 | Sito per PMI di servizi | PMI (pillar) | Filippo | 📅 |
| 9 | mer 05 ago | 13 | Cos'è un design premium | Qualità | Nicola | 📅 |
| 9 | ven 07 ago | 54 | Immagini AI per il brand | AI | Nicola | 📅 |
| 10 | lun 10 ago | 32 | 7 errori del sito di uno studio | Studi | Nicola | 📅 |
| 10 | mer 12 ago | 6 | Come leggere un preventivo | Costi/Tempi | Filippo | 📅 |
| 10 | ven 14 ago | 55 | AI per studi professionali | AI | Nicola | 📅 |
| 11 | lun 17 ago | 21 | Schema markup per le AI | SEO/GEO | Filippo | 📅 |
| 11 | mer 19 ago | 34 | Recensioni e Google Business Profile | Studi | Filippo | 📅 |
| 11 | ven 21 ago | 56 | AI per commercialisti | AI | Nicola | 📅 |
| 12 | lun 24 ago | 41 | Sito per startup (MVP→investor) | Startup (pillar) | Filippo | 📅 |
| 12 | mer 26 ago | 16 | Sito che converte: UX | Qualità | Nicola | 📅 |
| 12 | ven 28 ago | 57 | AI per PMI di servizi | AI | Nicola | 📅 |
| 13 | lun 31 ago | 37 | Sito B2B lead gen | PMI | Filippo | 📅 |
| 13 | mer 02 set | 22 | E-E-A-T e author authority | SEO/GEO | Filippo | 📅 |
| 13 | ven 04 set | 58 | Costruire una startup con l'AI | AI | Nicola | 📅 |
| 14 | lun 07 set | 7 | Quanto costa un e-commerce | Costi/Tempi | Filippo | 📅 |
| 14 | mer 09 set | 33 | Sito architettura/ingegneria | Studi | Filippo | 📅 |
| 14 | ven 11 set | 59 | AI, privacy e GDPR/AI Act | AI | Nicola | 📅 |
| 15 | lun 14 set | 14 | Core Web Vitals | Qualità | Nicola | 📅 |
| 15 | mer 16 set | 42 | Landing per validare startup | Startup | Nicola | 📅 |
| 15 | ven 18 set | 60 | Quanto costa adottare l'AI | AI | Nicola | 📅 |
| 16 | lun 21 set | 38 | Restyling sito aziendale | PMI | Nicola | 📅 |
| 16 | mer 23 set | 23 | Capsule method (contenuti citabili) | SEO/GEO | Filippo | 📅 |
| 16 | ven 25 set | 8 | Quanto costa una landing | Costi/Tempi | Filippo | 📅 |
| 17 | lun 28 set | 43 | Sito per un round seed | Startup | Filippo | 📅 |
| 17 | mer 30 set | 25 | SEO di base 2026 | SEO/GEO | Filippo | 📅 |
| 17 | ven 02 ott | 40 | Case study PMI 4 settimane | PMI | Nicola | ⏸️ ⚠️ |
| 18 | lun 05 ott | 17 | Quando rifare il sito | Qualità | Nicola | 📅 |
| 18 | mer 07 ott | 44 | Time-to-market startup | Startup | Nicola | ⏸️ ⚠️ |
| 18 | ven 09 ott | 9 | Mantenere un sito (costi annui) | Costi/Tempi | Filippo | 📅 |
| 19 | lun 12 ott | 26 | Local SEO | SEO/GEO | Filippo | 📅 |
| 19 | mer 14 ott | 11 | Calcolatore costo/tempi | Costi/Tempi | Filippo | 📅 |
| 19 | ven 16 ott | 39 | Digitalizzazione PMI | PMI | Filippo | 📅 |
| 20 | lun 19 ott | 15 | Mobile-first | Qualità | Nicola | 📅 |
| 20 | mer 21 ott | 45 | Branding startup | Startup | Nicola | 📅 |
| 20 | ven 23 ott | 18 | Accessibilità web | Qualità | Nicola | 📅 |

**Note:**
- Settimane **1–3 retrodatate a giugno** (live, 9 articoli). I **restanti 51 sono già scritti** e programmati: partono **lunedì 29 giugno** e proseguono lun/mer/ven, escono automaticamente alla loro data. La settimana 22–26 giugno è di transizione (vuota).
- L'uscita **AI** è la terza di ogni settimana fino alla #60 (settimana 15); dalla 16 le tre uscite completano gli altri cluster.
- Le **pillar** escono per prime nei rispettivi cluster: #1, #19, #46 (sett. 1), #27 (sett. 2), #12 (sett. 3), #36 (sett. 9), #41 (sett. 12).
- Per cambiare una data basta modificare `publishDate` nel modulo dell'articolo; per spostare un autore, cambiare `authorId`.


---

## Stato approvazione

**Quasi tutto pronto.** Dopo le tue conferme restano in sospeso **solo i 3 case study** (in pausa, mancano i dati reali del progetto). Tutto il resto è scritto, corretto e approvabile.

### 🔴 IN PAUSA — i 3 case study (dati reali mancanti)
`status: 'draft'`: restano programmati ma **non escono** (né in produzione né in preview) finché non li confermi. Per riattivarli: inserire i dati reali (durata, metriche prima/dopo, citazione cliente), rimuovere il callout, impostare `hasBlockingPlaceholder: false` e `status: 'published'` (IT **ed** EN).
- **#10 — Case study: sito in 3 settimane** · ⏸️ pausa · riprogrammato a **30 set 2026**
- **#40 — Case study PMI 4 settimane** · ⏸️ pausa · data 02 ott
- **#44 — Time-to-market startup** · ⏸️ pausa · data 07 ott

### ✅ Normativi — CONFERMATI
Scritti col disclaimer "informazione generale, non consulenza legale" e confermati dalla tua revisione.
- **#28 — Avvocati** · 29 giu · ✅ corretto: riferimento **art. 17 e 35** del Codice Deontologico Forense; nomi/casi dei clienti non pubblicabili **nemmeno col consenso** (segreto professionale).
- **#34 — Recensioni studi** · 19 ago · ✅ stesso riferimento (art. 17 e 35) + divieto di esporre il cliente anche col suo consenso; policy Google.
- **#39 — Digitalizzazione PMI** · 16 ott · ✅ incentivi in forma generica (rimando a MIMIT/Invitalia/Regione, nessun bando dato come attivo).
- **#59 — Privacy/AI Act** · 11 set · ✅ inserite le **date esatte** dell'AI Act (in vigore 1 ago 2024; divieti 2 feb 2025; GPAI 2 ago 2025; alto rischio 2 ago 2026; ultimi obblighi 2 ago 2027). ⚠️ **Da monitorare**: possibili rinvii a livello UE (pacchetto "Digital Omnibus"), ricontrollare il calendario alla data di uscita.
- **#18 — Accessibilità** · 23 ott · ✅ EAA/D.Lgs 82/2022 (dal 28 giu 2025, microimprese escluse), L. 4/2004 "Stanca" per la PA, WCAG 2.1 AA.

### ✅ Prezzi e calcolatore (dati DigitiNexus first-party)
- **#1 / #27 / #30** · ✅ fasce di prezzo inserite (vetrina ~2.500–8.000 €, offerta DigitiNexus da 2.500–3.000 € con pagine illimitate e copy incluso).
- **#11 — Calcolatore costo/tempi** · ✅ **calcolatore interattivo realizzato** e integrato nell'articolo (componente `CostCalculator`: fasce statiche per il SEO + widget client-side). In revisione prima della PR. *(Da decidere: versione EN del calcolatore in $ o qualitativa.)*

> Promemoria: i **3 case study** sono gli unici articoli che NON usciranno alla loro data finché non fornisci i dati reali.

---

## Cluster C8 — Ads & Funnel (slot domenicale in parallelo)

Uscita **1/settimana la domenica** (mai in collisione con lun/mer/ven), dal **7 giugno al 13 settembre 2026**. Autore: Filippo Gentili (Nicola Palummo per #65 e #75).

| Data | # | Slug |
|---|---|---|
| dom 07/06/2026 | 61 | funnel-sito-web-ads (pillar) |
| dom 14/06/2026 | 62 | meta-google-tiktok-quale-scegliere |
| dom 21/06/2026 | 63 | sito-o-ads-da-dove-partire |
| dom 28/06/2026 | 64 | quanto-budget-ads |
| dom 05/07/2026 | 65 | landing-page-per-ads |
| dom 12/07/2026 | 66 | google-ads-domanda-attiva |
| dom 19/07/2026 | 67 | meta-ads-scoperta-retargeting |
| dom 26/07/2026 | 68 | tiktok-ads-quando-ha-senso |
| dom 02/08/2026 | 69 | retargeting-come-funziona |
| dom 09/08/2026 | 70 | metriche-campagne-ads |
| dom 16/08/2026 | 71 | tracciamento-conversioni-privacy |
| dom 23/08/2026 | 72 | errori-che-bruciano-budget-ads |
| dom 30/08/2026 | 73 | ads-studi-professionali-servizi |
| dom 06/09/2026 | 74 | ads-ecommerce-attivita-locali |
| dom 13/09/2026 | 75 | annuncio-landing-offerta-message-match |

Brief completi in `DigitiNexus_Cluster_Ads_Funnel.md`.
