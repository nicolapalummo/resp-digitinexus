# CLAUDE.md — guida al progetto

Sito di **DigitiNexus** (agenzia web IT). SPA React con blog bilingue IT/EN prerenderizzato, pubblicazione programmata per data, deploy su Vercel.

## Stack
- **Vite 6 + React 19 + TypeScript**, SPA con **react-router-dom v7** (`BrowserRouter`)
- **i18next** — IT default, EN (`/en`). Le stringhe UI stanno in `i18n/locales/{it,en}.json`
- **Tailwind v3** compilato in build con PostCSS/purge (`tailwind.config.js`) — **NON** da CDN
- **Framer Motion** + **GSAP** (animazioni), **lucide-react** (icone), **sharp** (cover, build-time)
- Deploy **Vercel** (`vercel.json`)

## Comandi
```bash
npm run dev          # dev server (tutti gli articoli visibili, gating bypassato)
npm run build        # vite build + prerender-blog.mjs + prerender-home.mjs
npm run preview      # anteprima build
BLOG_PREVIEW=1 npm run build   # build mostrando anche gli articoli con data futura (i draft restano esclusi)
```
Dopo modifiche verificare sempre: `npx tsc --noEmit` (0 errori atteso) + `npm run build`.

## Pipeline di build (importante)
`npm run build` fa 3 step: **vite build** → **scripts/prerender-blog.mjs** → **scripts/prerender-home.mjs**.
I due prerender iniettano **HTML statico dentro `<div id="root">`** di `index.html` (per indicizzabilità/GEO). A runtime React monta con `createRoot` e **rimpiazza** quel contenuto (non hydrate). I prerender bundlano `lib/blog.ts` con **esbuild** (versione React-free) per leggere gli articoli.

## Blog (content-as-data)
- Ogni articolo è un modulo `.ts`: `content/blog/articles/<slug>.ts` (IT) e `content/blog/articles/en/<slug>.ts` (EN), `export default` di un oggetto `Article` (vedi `content/blog/types.ts`).
- **Registro**: `content/blog/index.ts` importa tutti gli articoli ed esporta `ARTICLES` (usato da `lib/blog.ts` via `import ... from '../content/blog'`).
- **Gating per data** (`lib/blog.ts` → `isPublished`): visibile solo se `status !== 'draft'` **E** `publishDate <= oggi`. In `dev` e con `BLOG_PREVIEW=1` il gating è bypassato, **ma i `draft` restano sempre esclusi**.
- **Bilingue**: campo `locale` + `altLocaleSlug`; mappa slug IT↔EN in `content/blog/locale-slug-map.ts`; rotte `/en/blog/...`; hreflang reciproci; JSON-LD per articolo.
- `lib/blogRouting.ts` è una versione **leggera** (senza import di ARTICLES) usata dai componenti eager (Header, ExploreGuides) per non trascinare i 120 moduli articolo nel bundle principale → blog in chunk separato (lazy).
- **Cover**: `scripts/generate-covers.mjs` (OpenAI Images, richiede `OPENAI_API_KEY`) + `scripts/generate-covers-en.mjs` (overlay titoli EN, no API). Dati in `content/blog/covers.ts`.

## Pubblicazione programmata
`.github/workflows/blog-schedule.yml` gira ogni giorno alle 05:00 UTC: aggiorna `.last-publish` e fa un **commit** su `main` → il push fa partire il **deploy Vercel** (integrazione Git) → al rebuild gli articoli con `publishDate` raggiunta diventano visibili. **Niente secret** (usa `GITHUB_TOKEN`, `permissions: contents: write`). Trigger manuale: `gh workflow run blog-schedule.yml`.

## Titolo/meta della home — TRE punti da tenere allineati
Il `<title>` della landing è impostato in **3 posti** (se ne cambi uno, cambiali tutti):
1. `index.html` `<title>` (statico/dev)
2. `scripts/prerender-home.mjs` → `META.{it,en}.title` (HTML prerenderizzato)
3. `lib/i18nRouting.ts` → `PAGE_META['/'].{it,en}.title` ← **applicato a runtime da `components/LocaleManager.tsx`** (altrimenti sovrascrive gli altri due!)
Le pagine blog usano `components/blog/useDocumentMeta.ts` per title/meta.

## Convenzioni UI
- **Header theme**: `components/Header.tsx` ha un `themeMap` (id sezione → `dark`/`light`) e un IntersectionObserver robusto (ri-parte al cambio rotta) che colora il testo dell'header. Le nuove sezioni con id vanno aggiunte a `themeMap`.
- **Numeri tag sezioni** (landing, in ordine): Problem 1 · Intro 2 · RecentWork 3 · HowItWorks 4 · ChiSiamo 5 · WhyMe 6 · Services 7 · FAQ 8 · ExploreGuides 9.
- **Font**: Manrope **self-hosted** (`public/fonts/Manrope-Variable.woff2`, `@font-face` in `index.css`). Niente Google Fonts (GDPR). I sorgenti TTF in `assets/` sono **gitignored**.
- **Favicon**: `public/favicon.svg` (vettoriale, primario — necessario per Safari, che non decodifica i PNG dentro `.ico`) + `favicon.ico` reale + PNG. Riferimenti in `index.html` con `?v=N` per **bustare la cache favicon di Safari** (per-pagina e ostinatissima): se cambi le icone, incrementa `v`.
- **Rotte client-only** (non prerenderizzate, `noindex`): `/confirmation`, 404 (`NotFound`). Servite dal rewrite catch-all di `vercel.json` → `index.html` → SPA.

## Integrazioni terze parti
- **Booking = Calendly** (`https://calendly.com/digitinexus/30min`). URL centralizzato in `content/blog/config.ts` → `SITE.bookCallUrl` (tutte le CTA blog/articoli); nei componenti landing (Hero, Header, Services, LetsTalk, FreemiumResources) è hardcodato lo stesso URL. La sezione **LetsTalk** incorpora il **widget inline Calendly** (script `assets.calendly.com/.../widget.js` caricato in `useEffect`).
- **Pagina conferma** `/confirmation` (`Confirmation.tsx`): thank-you post-prenotazione, legge i parametri del redirect Calendly (`invitee_full_name`/`invitee_first_name`, `event_start_time`) per personalizzare titolo + data. Su Calendly: Confirmation page → "Redirect to an external site" + "Pass event details".
- **Lead-gen a preview su `/risorse-gratuite`** (`FreemiumResources.tsx`): per ogni PDF si vedono solo le prime 2 pagine (immagini in `public/freemium/preview/`, generate con pdftoppm+sharp) + pagine **sfocate a monte** (blur nell'immagine, non CSS: non aggirabile). I **PDF completi stanno in `private/freemium/`** (mai serviti come statici, inclusi nelle functions via `includeFiles` in `vercel.json`) e arrivano **solo via email**: `api/send-resources.ts` registra il contatto nel CRM (contact-intake) e invia via **Resend** 3 link firmati HMAC a scadenza 7 giorni verso `api/download-resource.ts`. Env necessarie su Vercel: `RESEND_API_KEY`, `RESOURCES_FROM_EMAIL`, `RESOURCES_LINK_SECRET`. ⚠️ Le funzioni in `api/` devono restare **self-contained** (niente import relativi: con `"type": "module"` falliscono a runtime con FUNCTION_INVOCATION_FAILED). Email ricordata in localStorage (`digitinexus-resources-email`).

## Sicurezza / deploy
- **CSP** in `vercel.json`: `script-src 'self'` **senza `unsafe-inline`** → **non aggiungere `<script>` inline eseguibili** in `index.html`/prerender (il loader sta in `public/loader.js` esterno). Il JSON-LD `application/ld+json` è dato, non eseguito → consentito.
- Domini terzi in whitelist nella CSP: **Calendly** (`script-src assets.calendly.com`, `frame-src calendly.com`, `style/img/connect` per `*.calendly.com`) e **Web3Forms** (`connect-src api.web3forms.com`). Se aggiungi un servizio esterno, ricordati di aggiornare la CSP o verrà bloccato in produzione.
- ⚠️ La CSP si applica **solo su Vercel**, non in `dev`/`vite preview`: testa i servizi esterni (widget, form) su un deploy e controlla la console per violazioni.
- Altri header: HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy.
- **Segreti**: mai hardcodare; `.env` gitignored; `.env.example` solo placeholder; nessuna `VITE_*` sensibile (finirebbe nel bundle).

## Regole sui contenuti (vincolanti)
- **Niente dati fabbricati**: prezzi/tempi = dati first-party DigitiNexus confermati; statistiche = solo fonti istituzionali/data-company (mai web agency citate inline).
- Articoli normativi: sempre disclaimer "**informazione generale, non consulenza legale**" + rimando alla fonte/ordine.
- **Niente em-dash** (—) nel corpo degli articoli (lo verifica chi scrive; usare virgole/parentesi).
- Callout `variant: 'placeholder'` mostra un'etichetta rossa "Da confermare" → non deve finire pubblicato. `hasBlockingPlaceholder: true` + `status: 'draft'` per gli articoli in pausa.

## Documentazione
In **`docs/`**: calendario editoriale, brief SEO/GEO, voice/tone (IT+EN), brand, autori, prompt copertine, audit SEO/GEO. `README.md` resta in root.

## Git
- Branch di produzione: **main** (push su main → deploy Vercel). Lavoro feature su `feature/blog`.
- Non committare `dist/`, `node_modules/`, `assets/`, `.env*`, `public/blog/covers/_raw/` (già in `.gitignore`).
