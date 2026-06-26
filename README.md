# DigitiNexus — Sito web

Sito di DigitiNexus (agenzia web IT) costruito con **React 19 + TypeScript + Vite 6**.
SPA con **blog bilingue (IT/EN) prerenderizzato**, pubblicazione programmata per data e deploy su Vercel.

## 🚀 Funzionalità

- Design responsive, animazioni (Framer Motion, GSAP)
- **Blog bilingue** IT (`/blog`) ed EN (`/en/blog`) con HTML **prerenderizzato** (indicizzabile), sitemap e RSS generati
- **Pubblicazione programmata**: ogni articolo ha una `publishDate`; quelli con data futura restano nascosti finché non arriva il giorno (gating build-time)
- SEO/GEO: title/meta/OG per pagina, JSON-LD (Article, FAQPage, Person, Organization, Breadcrumb), hreflang reciproci, canonical
- Font **self-hosted** (Manrope, nessun Google Fonts → niente IP a terzi)
- Security headers + CSP in `vercel.json`

## 📦 Comandi

```bash
npm install        # dipendenze
npm run dev        # dev server
npm run build      # build di produzione (vite + prerender blog + prerender home)
npm run preview    # anteprima della build
```

> Per vedere in locale anche gli articoli con data futura: `BLOG_PREVIEW=1 npm run build` (oppure sono tutti visibili in `npm run dev`).

## 🛠️ Stack

- **React 19** + **TypeScript** + **Vite 6**
- **Tailwind CSS** (compilato in build con PostCSS/purge — non da CDN)
- **react-router-dom v7** (routing client), **i18next** (IT/EN)
- **Framer Motion** / **GSAP** (animazioni), **Lucide** (icone)
- **sharp** (generazione copertine blog, build-time)
- Deploy: **Vercel** (`vercel.json`)

## 📁 Struttura

```
resp.digitinexus.com/
├── components/              # Componenti React (Hero, Header, ChiSiamo, blog/, ...)
├── content/blog/            # Contenuti blog come moduli .ts
│   ├── articles/            # Articoli IT + en/ per gli EN; index.ts = registro
│   ├── authors.ts, covers.ts, types.ts
├── lib/blog.ts              # Logica blog (gating per data, alternates, schema)
├── i18n/locales/            # it.json, en.json
├── scripts/                 # prerender-blog, prerender-home, generate-covers
├── public/                  # asset statici (font/, blog/covers/, PDF, loader.js)
├── .github/workflows/       # blog-schedule.yml (cron → Vercel Deploy Hook)
├── docs/                    # documentazione di progetto (brief, voice, brand, calendario, audit)
├── App.tsx, index.html, index.tsx, vite.config.ts, vercel.json
```

## 🗓️ Pubblicazione programmata

Una **GitHub Action** (`.github/workflows/blog-schedule.yml`) gira ogni mattina e fa ribuildare il sito su Vercel tramite **Deploy Hook**. Al rebuild, gli articoli la cui `publishDate` è arrivata diventano visibili. Richiede il secret di repository `VERCEL_DEPLOY_HOOK_URL`.

## 🔑 Variabili d'ambiente

Copia `.env.example` in `.env` (mai committato). Serve solo per la generazione delle copertine:

```
OPENAI_API_KEY=sk-...
```

## 📚 Documentazione

La documentazione editoriale e di brand è in **`docs/`**: calendario editoriale, brief SEO/GEO, voice/tone (IT+EN), brand, autori, prompt copertine, audit SEO/GEO.

## 🌐 Deploy

Configurato per **Vercel** (`buildCommand: npm run build`, output `dist/`). Dominio: `digitinexus.com`.
```bash
npm i -g vercel   # opzionale, per deploy/preview da CLI
```
