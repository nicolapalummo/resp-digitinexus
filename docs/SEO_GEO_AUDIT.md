# Report SEO + GEO — digitinexus.com

> Report finale sullo stato SEO e GEO del sito, con tutti gli interventi completati e ciò che resta.
> Metodologia: plugin **claude-seo** (AgriciDaniel) — 7 categorie pesate. Punteggi = stime strutturali sui segnali reali di codice e build (non dati di campo CrUX/GSC/GA4).
> Legenda: ✅ Fatto · 🟡 Parziale · ❌ Da fare.

---

## 1. Punteggio finale

| Indice | Punteggio |
|---|---|
| **SEO Health Score (sito intero)** | **~88 / 100** |
| **GEO / AI Search Readiness** | **~85 / 100** |

**Tipo di attività:** agenzia web B2B / *professional service* italiana che realizza siti su misura per **studi professionali, PMI e startup**; consegna premium in 1–4 settimane. Ora con **presenza bilingue** (IT primario + EN per mercato US/internazionale) e **entità verificata** (Google Business Profile collegato, Knowledge Panel attivo, KG id `/g/11zj_nztn3`).

**In una frase:** sito tecnicamente solido e GEO-ready su tutte le superfici (home, risorse, blog IT+EN), con schema ricco ed entità verificata. I residui sono rifiniture (pagine servizio dedicate, immagini portfolio) o azioni **off-site** (directory B2B, menzioni di brand).

---

## 2. Punteggi per categoria

| Categoria | Peso | Punteggio | Trend |
|---|---|---|---|
| Technical SEO | 22% | ~85 | da ~50 |
| Content Quality | 23% | ~88 | da ~75 |
| On-Page SEO | 20% | ~88 | da ~60 |
| Schema / Structured Data | 10% | ~90 | da ~55 |
| Performance / CWV | 10% | ~85 | da ~45 |
| GEO / AI Readiness | 10% | ~85 | da ~60 |
| Images | 5% | ~88 | da ~70 |

---

## 3. Tutto ciò che è stato fatto

### Architettura & rendering
- **Prerender di tutte le pagine core**: home `/`, home EN `/en`, `/risorse-gratuite` e `/en/risorse-gratuite` ora hanno **contenuto statico nell'HTML** (H1, servizi, recensioni, FAQ, link al blog), iniettato dai file i18n da `scripts/prerender-home.mjs`. React lo sostituisce al mount → utenti vedono il sito completo, **i crawler AI senza JavaScript leggono il contenuto**. Prima il `#root` era vuoto (CSR puro).
- **Blog prerenderizzato (SSG)** IT + EN: ogni articolo, indice e categoria è HTML statico crawlabile.

### Internazionalizzazione (IT + EN reale)
- **IT primario** a `/`, **EN reale** sotto `/en` con struttura URL dedicata: `/en`, `/en/risorse-gratuite`, `/en/blog/*`.
- **hreflang reciproci** it↔en + `x-default` su tutte le pagine tradotte (statici sul blog e ora anche su home/risorse via prerender); `html lang` e `og:locale` corretti per lingua; lingua autoritativa dall'URL.
- **Blog bilingue completo**: 60 articoli IT + **60 articoli EN** (transcreation per il mercato US con fonti americane certificate: Census, BLS, SBA, ABA, AICPA, Pew, WCAG, CCPA, ecc.). 7 categorie EN, sitemap con URL EN, schema `en-US`.

### Schema / Structured Data
- **Homepage**: `Organization` + `WebSite` + `ProfessionalService` (+ OfferCatalog servizi) + **4 `Review`** reali + **`FAQPage`** (6 FAQ).
- **Entità verificata**: `sameAs` al **Google Business Profile** su `Organization` e `ProfessionalService` (+ `hasMap`), e sullo schema del blog. Collega sito ↔ azienda reale → segnale forte per Google e AI.
- **Blog**: schema completo IT (`it-IT`) ed EN (`en-US`) — BlogPosting + FAQPage + Person (autore) + Organization + WebPage + BreadcrumbList + citation.

### On-Page & contenuto
- **Title/description** homepage riorientati al target ("Realizzazione siti web su misura per studi e PMI | DigitiNexus") + OG/Twitter.
- **`<meta keywords>` rimosso** (era keyword stuffing).
- **FAQ** riallineate al target reale (studi/PMI/startup) in IT, EN e JSON-LD.
- **Internal linking home → blog**: nuova sezione "Approfondimenti" (`ExploreGuides`) sotto la FAQ, bilingue, che linka i cluster del blog (prima la home non aveva alcun link al blog) — presente sia nel React sia nell'HTML prerenderizzato.

### Performance
- **Tailwind compilato in build** (PostCSS + purge) al posto di `cdn.tailwindcss.com` → CSS **63KB (10KB gzip)** invece del runtime CDN da MB, niente più render-blocking esterno.
- **Rimosso l'importmap CDN** (`aistudiocdn.com`): React/framer/lucide ora bundle 100% locale (niente dipendenza da CDN di terzi).
- **Loader brandizzato** sulla pagina Risorse (UX durante il caricamento).

### Immagini
- **`alt` su tutte le immagini** del sito (12/12) + cover blog con `alt` per articolo.
- **60 cover EN titolate in inglese** (`<slug>-en.webp`) per card e anteprime social; in-articolo usa la versione *plain* neutra.

### Tecnico / sicurezza
- **Header** in `vercel.json`: HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, Cache-Control immutable su `/assets`.
- **hreflang rotti rimossi**, **canonical** coerenti, **sitemap** IT+EN, **robots.txt** ok.

---

## 4. Dettaglio per categoria

**Technical SEO ~85** — Pagine core e blog prerenderizzati (contenuto in HTML); hreflang reciproci; headers; sitemap/robots ok. *Residuo:* bundle JS pesante (vedi Performance).

**Content Quality ~88** — Blog bilingue eccellente (120 articoli, autori firmati con LinkedIn = E-E-A-T, fonti verificate, capsula answer-first). Home con contenuto in HTML. *Residuo:* niente pagine servizio dedicate (per ora una sezione sotto la FAQ).

**On-Page SEO ~88** — Title/meta target-oriented, keyword stuffing rimosso, internal linking home→blog attivo, blog on-page curato. *Residuo:* landing di servizio dedicate.

**Schema ~90** — Grafo homepage completo + entità verificata (GBP `sameAs`); blog full schema IT+EN. *Residuo:* niente `AggregateRating` (scelta: scartato) né `LocalBusiness`/NAP (per scelta: nessun NAP pubblico).

**Performance / CWV ~85** — Zero CDN render-blocking, CSS purgato, prerender che abbassa LCP, e **code-splitting del blog**: il bundle della homepage è sceso da ~650KB a **~194KB gzip** (i dati dei 120 articoli ora in un chunk separato caricato solo sulle rotte /blog). *Residuo minore:* animazioni framer-motion/gsap da monitorare per INP; immagini portfolio.

**Images ~88** — Tutte con `alt`, WebP, cover EN titolate. *Residuo:* verificare formato/lazy/dimensioni delle immagini di portfolio.

---

## 5. GEO / AI Search Readiness (~85)

- **Blog IT+EN GEO-ready** ✅: prerenderizzato (i crawler AI lo leggono), capsula 40–75 parole front-loaded, H2 answer-first, FAQPage + JSON-LD, fonti citate. Copre due mercati linguistici.
- **Homepage citabile** ✅: ora che è prerenderizzata, gli AI crawler senza JS vedono chi è DigitiNexus, cosa offre e le recensioni.
- **Entità verificata** ✅: `sameAs` al Google Business Profile + Knowledge Panel attivo. Per la GEO i **profili verificati e le menzioni** sono tra i segnali più forti per essere citati dalle AI.
- *Residuo (off-site):* menzioni di brand su Wikipedia, Reddit, YouTube, directory B2B (Clutch/Sortlist) → opportunità di autorità off-page. **llms.txt:** assente, bassa priorità (ininfluente per Google).

---

## 6. Cosa resta (roadmap)

| Priorità | Item | Tipo |
|---|---|---|
| ~~Alta~~ | ~~Code-splitting / lazy del blog~~ ✅ Fatto (194KB gzip) | Tecnico |
| Media | **Pagine servizio dedicate** (`/realizzazione-siti-web`, `/siti-per-studi-professionali`, …) con `Service` schema | Nuove route |
| Media | **Brand mention off-site** (directory B2B, Wikipedia/Reddit, LinkedIn company) + `sameAs` aggiuntivi | Off-site |
| Bassa | Cover/portfolio: verificare formato AVIF/lazy delle immagini home | Asset |
| Bassa | `lastmod` sitemap, llms.txt (opzionale) | Tecnico |
| — | ~~AggregateRating~~ | Scartato (no rating reale) |
| — | NAP / `LocalBusiness` completo | Per scelta non incluso (nessun NAP pubblico) |

---

## 7. Nota di metodo
Punteggi e stato sono l'applicazione della metodologia `claude-seo` ai segnali reali di codice e build (prerender vs CSR, JSON-LD in `dist`, hreflang, sitemap, CDN, bundle, contenuti i18n). I punteggi sono stime strutturali, non misure di campo: per i Core Web Vitals reali e l'indicizzazione conviene collegare Search Console + GA4 + PageSpeed/CrUX e rivedere trimestralmente, tracciando anche le citazioni AI sulle query dei clienti.
