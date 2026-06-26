# WRITING_KIT_EN — US source whitelist + per-article metadata (English blog)

Companion to `VOICE_EN.md` and `BLOG_EN_TRANSLATION_PLAN.md`. Governs the English (US) blog under `/en/blog`.

> ✅ **Source figures status:** verified via web research. Use the **VERIFIED FIGURES** block (Section A0) for any inline number. Figures flagged ⚠️ "verify on-page" (ABA, Gartner, Census BFS, UsableNet) returned 403/redirect to automated fetch — an agent may use them but must attribute carefully and, if uncertain, keep qualitative. Items marked "keep qualitative" have NO certified number — never invent one.

## A0. VERIFIED FIGURES (use these exact numbers + URLs)

INSTITUTION = citable inline in parentheses · DATA-COMPANY = `sources` list only, attribute by name ("according to BrightLocal").

**Small business / consumers**
- % of US small businesses with a website → NO certified figure. **Keep qualitative.**
- Pew Research: "82% of U.S. adults at least sometimes read online reviews before a first purchase" (40% always/almost always) — https://www.pewresearch.org/internet/2016/12/19/online-reviews/ — 2016 (⚠️ dated) — INSTITUTION.
- US Census e-commerce context: "e-commerce was 16.1% of total retail sales in 2024" — https://www.census.gov/programs-surveys/e-stats.html — INSTITUTION (macro context only).

**Local search & reviews (BrightLocal Local Consumer Review Survey 2026, DATA-COMPANY)** — https://www.brightlocal.com/research/local-consumer-review-survey/
- "97% of consumers read reviews for local businesses"; "41% always read reviews"; Google's share dipped "83% (2025) → 71% (2026)"; generative-AI use for local recs "6% → 45%".

**Law firms**
- ABA Model Rule 7.1: "A lawyer shall not make a false or misleading communication about the lawyer or the lawyer's services." — americanbar.org (⚠️ index-only) — INSTITUTION.
- ABA 2024 Websites & Marketing TechReport: solo firms with a website "53% (2021) → 70% (2024)" — INSTITUTION (⚠️ verify on-page).
- "How clients find lawyers" → NO certified ABA figure. **Keep qualitative.**

**CPAs (AICPA & CIMA, 2025, INSTITUTION)** — https://www.aicpa-cima.com/news/article/ai-transformation-opens-door-for-finance-professionals-to-build-future-ready
- "88% believe AI will be the most transformative technology in accounting/finance over the next 12–24 months"; "only 8% feel very well prepared… 21% well prepared."

**AI search / zero-click**
- Pew Research (2025, INSTITUTION, STRONGEST): with an AI summary users click a traditional result in "8% of visits" vs "15%" without; click inside the AI summary "1% of visits" — https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/
- Ahrefs (DATA-COMPANY): AI Overview correlated with "34.5% lower CTR for the top-ranking page" — https://ahrefs.com/blog/ai-overviews-reduce-clicks/ (a Dec-2025 update revises to 58% for position-one; pick scope deliberately).
- SparkToro (DATA-COMPANY): "58.5% of American Google searches resulted in zero clicks" (2024) — https://sparktoro.com/blog/2024-zero-click-search-study...

**GEO (academic, INSTITUTION)** — Aggarwal et al., "GEO: Generative Engine Optimization", KDD 2024 — https://arxiv.org/abs/2311.09735
- Verbatim: "GEO can boost visibility by up to 40% in generative engine responses."

**Speed / Core Web Vitals**
- Google "Milliseconds Make Millions" (web.dev, INSTITUTION): 0.1s mobile speedup → retail "+9.2% spend", "+9.1% PDP→Add-to-Basket"; travel "+2.2% checkout completion", "+10% booking rates" — https://web.dev/case-studies/milliseconds-make-millions
- HTTP Archive Web Almanac 2024 (INSTITUTION): "43% of sites had good CWV with INP on mobile" (54% desktop) — https://almanac.httparchive.org/en/2024/performance
- Think with Google "32% bounce 1s→3s" → NOT confirmable. **Do not cite.**

**Accessibility**
- WebAIM Million 2026 (DATA-COMPANY): "95.9% of home pages had detected WCAG 2 failures", "avg 56.1 errors/page" — https://webaim.org/projects/million/
- UsableNet 2024 (DATA-COMPANY): "over 4,000 ADA digital-accessibility lawsuits filed in 2024" — attribute to UsableNet (⚠️).
- ADA.gov Title II Web Rule (2024, INSTITUTION): "WCAG 2.1 Level AA is the technical standard for state and local governments" — https://www.ada.gov/resources/2024-03-08-web-rule/ (Title II = gov; Title III private business → keep qualitative).
- W3C: "WCAG 2.2 — W3C Recommendation 12 December 2024" — https://www.w3.org/TR/WCAG22/ — INSTITUTION.

**Privacy**
- California OAG (INSTITUTION): CCPA applies if a for-profit meets ANY: ">$25 million gross annual revenue"; "buys/sells/shares personal info of 100,000+ CA residents/households"; "derives 50%+ of revenue from selling CA residents' personal info" — https://oag.ca.gov/privacy/ccpa (cite verbatim "$25 million").
- FTC (INSTITUTION): enforces against unfair/deceptive practices incl. firms that "surreptitiously rewrite privacy policies" or train models on customer data against promises — https://www.ftc.gov/policy/advocacy-research/tech-at-ftc/2024/01/... (qualitative, no headline number).

**Startups**
- Census Business Formation Statistics (INSTITUTION): "~5.2 million new business applications filed in 2024" (⚠️ verify the verbatim annual total on the current BFS release) — https://www.census.gov/econ/bfs/index.html
- CB Insights "Why Startups Fail" (DATA-COMPANY): top reasons "ran out of cash/capital — 70%"; "no market need / poor PMF — 43%"; "bad timing — 29%" — https://www.cbinsights.com/research/report/startup-failure-reasons-top/

**AI adoption by US business**
- Census BTOS (2026, INSTITUTION): "between 17% and 20% of U.S. businesses reported using AI in any business function" (cite the definition with the number) — https://www.census.gov/library/stories/2026/05/ai-use-businesses.html

**B2B buyer behavior**
- Gartner (DATA-COMPANY): "61% of B2B buyers prefer an overall rep-free buying experience"; "73% avoid suppliers who send irrelevant outreach" — https://www.gartner.com/en/newsroom/press-releases/2025-06-25-... — attribute "according to Gartner" (⚠️).

---

## A. Source whitelist (US-certified)

### Institutions — citable INLINE in parentheses
| Source | Use for | Canonical URL | Figure |
|---|---|---|---|
| US Census Bureau | small business / e-commerce / business formation | https://www.census.gov | `[VERIFY]` |
| Census — Business Trends and Outlook Survey (BTOS) | US firms using AI | https://www.census.gov/hfp/btos | `[VERIFY]` AI-use % |
| Census — Business Formation Statistics | new business applications | https://www.census.gov/econ/bfs | `[VERIFY]` |
| Bureau of Labor Statistics (BLS) | occupations, small-business survival | https://www.bls.gov | `[VERIFY]` (e.g. BLS BED survival rates) |
| Small Business Administration (SBA) — Office of Advocacy | small business share of economy | https://advocacy.sba.gov | `[VERIFY]` |
| Pew Research Center | internet/mobile/search behavior | https://www.pewresearch.org | `[VERIFY]` |
| American Bar Association (ABA) | law firm tech/marketing; advertising rules | https://www.americanbar.org | Legal Technology Survey Report; Model Rules 7.1–7.5 |
| AICPA | CPA tech/AI adoption | https://www.aicpa-cima.com | `[VERIFY]` |
| AIA (American Institute of Architects) | architecture firm practice | https://www.aia.org | `[VERIFY]` |
| FTC | data/AI enforcement, privacy guidance | https://www.ftc.gov | qualitative/regulatory |
| California OAG (CCPA/CPRA) | state privacy law | https://oag.ca.gov/privacy/ccpa | regulatory (no orphan #) |
| ADA.gov | ADA Title III, web accessibility | https://www.ada.gov | regulatory |
| W3C / WCAG 2.2 | accessibility standard | https://www.w3.org/TR/WCAG22/ | standard |
| Google Search Central | SEO/AI search guidance | https://developers.google.com/search | guidance |
| Chrome UX Report (CrUX) | real-world Core Web Vitals | https://developer.chrome.com/docs/crux | `[VERIFY]` |
| Aggarwal et al., "GEO: Generative Engine Optimization" (KDD 2024) | GEO visibility uplift | https://arxiv.org/abs/2311.09735 | `[VERIFY]` (~+40% claim) |

### Data companies — ONLY in the `sources` list, NEVER inline
| Source | Use for | URL |
|---|---|---|
| Ahrefs | AI Overviews CTR, llms.txt, SEO | https://ahrefs.com/blog |
| SparkToro | zero-click search | https://sparktoro.com/blog |
| BrightLocal | local consumer review survey | https://www.brightlocal.com/research/ |
| Baymard Institute | e-commerce/checkout UX | https://baymard.com/research |
| Nielsen Norman Group (NN/g) | UX research | https://www.nngroup.com/articles/ |
| HTTP Archive — Web Almanac | web performance/tech adoption | https://almanac.httparchive.org |
| WebAIM Million | accessibility error prevalence | https://webaim.org/projects/million/ |
| UsableNet | ADA digital lawsuit report | https://blog.usablenet.com |
| HubSpot Research | B2B marketing/lead gen | https://www.hubspot.com/marketing-statistics |
| CB Insights | top reasons startups fail | https://www.cbinsights.com/research |
| Statista (US) | misc US market data | https://www.statista.com |

### Forbidden in EN
ISTAT · Cassa Forense · MIMIT · SEOZoom (Italian sources) · any web agency / marketplace / SEO-vendor blog as a primary statistic.

---

## B. Per-article metadata table (60)

Columns: **EN# · IT-id · EN slug (under /en/blog/) · IT slug (altLocaleSlug) · cluster · author · publishDate (= IT) · level**
Level: D = direct transcreation · A = adapt persona/data to US · H = heavy legal/normative re-frame.
publishDate is inherited from each IT counterpart (mirror calendar); fill from the IT article's `publishDate` at build time.

### c1 — Costs & timing (qualitative)
| EN# | IT | EN slug | IT slug | author | lvl |
|----|----|---------|---------|--------|-----|
| 1 | 1 | how-much-does-a-website-cost | quanto-costa-sito-web | filippo-gentili | D |
| 2 | 2 | how-long-to-build-a-website | quanto-tempo-fare-sito-web | nicola-palummo | D |
| 3 | 3 | website-in-1-to-4-weeks | sito-web-1-4-settimane | nicola-palummo | D |
| 4 | 4 | hidden-website-costs | costi-nascosti-sito-web | filippo-gentili | D |
| 5 | 5 | web-agency-vs-freelancer | agenzia-o-freelance-sito-web | filippo-gentili | D |
| 6 | 6 | how-to-read-a-website-quote | come-leggere-preventivo-sito-web | filippo-gentili | D |
| 7 | 7 | how-much-does-an-ecommerce-site-cost | quanto-costa-ecommerce | filippo-gentili | D |
| 8 | 8 | how-much-does-a-landing-page-cost | quanto-costa-landing-page | filippo-gentili | D |
| 9 | 9 | website-maintenance-cost | costo-mantenimento-sito-web | filippo-gentili | D |
| 10 | 10 | case-study-website-in-3-weeks | case-study-sito-3-settimane | nicola-palummo | D¹ |
| 11 | 11 | website-cost-calculator | calcolatore-costo-sito | filippo-gentili | D |

### c2 — Quality / UX / performance
| 12 | 12 | custom-website-vs-template | sito-su-misura-o-template | nicola-palummo | D |
| 13 | 13 | premium-website-design | design-premium-sito-web | nicola-palummo | D |
| 14 | 14 | core-web-vitals-fast-website | core-web-vitals-sito-veloce | nicola-palummo | D |
| 15 | 15 | mobile-first-website | sito-mobile-first | nicola-palummo | A |
| 16 | 16 | website-that-converts | sito-web-che-converte | nicola-palummo | D |
| 17 | 17 | when-to-redesign-your-website | quando-rifare-sito-restyling | nicola-palummo | D |
| 18 | 18 | website-accessibility-ada | accessibilita-sito-web | nicola-palummo | **H** |

### c3 — SEO / GEO
| 19 | 19 | generative-engine-optimization | geo-generative-engine-optimization | filippo-gentili | D |
| 20 | 20 | google-ai-overviews | ai-overview-google-italia | filippo-gentili | A |
| 21 | 21 | schema-markup-for-ai | schema-markup-ai | filippo-gentili | D |
| 22 | 22 | e-e-a-t-and-author-authority | e-e-a-t-author-authority | filippo-gentili | D |
| 23 | 23 | ai-citable-content-the-capsule-method | contenuti-citabili-ai-capsule-method | filippo-gentili | D |
| 24 | 24 | does-llms-txt-actually-matter | llms-txt-serve-davvero | filippo-gentili | D |
| 25 | 25 | seo-in-2026 | seo-2026 | filippo-gentili | D |
| 26 | 26 | local-seo | local-seo | filippo-gentili | A |

### c4 — Professional firms
| 27 | 27 | professional-services-firm-website | sito-web-studio-professionale | filippo-gentili | A |
| 28 | 28 | law-firm-website | sito-web-avvocato-studio-legale | filippo-gentili | **H** |
| 29 | 29 | cpa-accounting-firm-website | sito-web-commercialista | filippo-gentili | **H** |
| 30 | 30 | professional-firm-website-cost | costo-sito-studio-professionale | filippo-gentili | A |
| 31 | 31 | e-e-a-t-for-professional-services | e-e-a-t-professionisti | filippo-gentili | A |
| 32 | 32 | professional-firm-website-mistakes | errori-sito-studio | filippo-gentili | A |
| 33 | 33 | architecture-firm-website | sito-web-studio-architettura | filippo-gentili | A |
| 34 | 34 | google-reviews-for-professional-firms | recensioni-google-business-profile-studi | nicola-palummo | A |
| 35 | 35 | getting-found-by-ai-as-a-professional | farsi-trovare-ai-professionista | nicola-palummo | A |

### c5 — Small business (SMB)
| 36 | 36 | small-business-services-website | sito-web-pmi-servizi | filippo-gentili | A |
| 37 | 37 | b2b-lead-generation-website | sito-b2b-lead-generation | filippo-gentili | D |
| 38 | 38 | business-website-redesign | restyling-sito-aziendale | nicola-palummo | D |
| 39 | — | small-business-website-vs-social-media | (EN-native; replaces IT #39) | filippo-gentili | N² |
| 40 | 40 | case-study-small-business-website | case-study-sito-pmi | nicola-palummo | D¹ |

### c6 — Startup
| 41 | 41 | startup-website | sito-web-startup | nicola-palummo | D |
| 42 | 42 | startup-landing-page-for-validation | landing-page-startup-validazione | nicola-palummo | D |
| 43 | 43 | startup-website-for-fundraising | sito-startup-round-investitori | filippo-gentili | D |
| 44 | 44 | startup-website-fast-launch | sito-startup-veloce-lancio | nicola-palummo | D¹ |
| 45 | 45 | startup-branding | branding-startup | nicola-palummo | D |

### c7 — AI
| 46 | 46 | ai-for-businesses | intelligenza-artificiale-per-aziende | nicola-palummo | A |
| 47 | 47 | ai-agent-vs-chatbot | agente-ai-o-chatbot | nicola-palummo | D |
| 48 | 48 | rag-ai-on-your-company-data | rag-ai-dati-azienda | nicola-palummo | D |
| 49 | 49 | ai-hallucinations | allucinazioni-ai | nicola-palummo | D |
| 50 | 50 | effective-prompts-for-work | prompt-efficaci-lavoro | nicola-palummo | D |
| 51 | 51 | ai-chatbot-for-your-website | chatbot-ai-sito-web | nicola-palummo | D |
| 52 | 52 | ai-booking-and-lead-capture | prenotazioni-contatti-ai | nicola-palummo | D |
| 53 | 53 | no-code-ai-automation | automazioni-ai-no-code | nicola-palummo | D |
| 54 | 54 | ai-images-for-your-brand | immagini-ai-per-brand | nicola-palummo | D |
| 55 | 55 | ai-for-professional-firms | ai-studi-professionali | nicola-palummo | A |
| 56 | 56 | ai-for-cpas-accountants | ai-per-commercialisti | nicola-palummo | **H** |
| 57 | 57 | ai-for-small-businesses | ai-per-pmi-servizi | nicola-palummo | A |
| 58 | 58 | building-a-startup-with-ai | startup-con-ai | nicola-palummo | D |
| 59 | 59 | ai-privacy-and-data-protection | ai-privacy-gdpr | nicola-palummo | **H** |
| 60 | 60 | how-much-does-ai-cost-for-business | quanto-costa-ai-azienda | nicola-palummo | D |

Notes:
- ¹ Case studies (#10, #40, #44): keep `hasBlockingPlaceholder: true`, real metrics in `placeholder` callouts.
- ² **#39 EN-native** "small-business-website-vs-social-media": brand-new c5 article (why an SMB needs a website, not just social profiles); reach/control/ownership angle; US data (Pew on platform use, Census on SMB online presence) `[VERIFY]`; author filippo-gentili; publishDate = IT #39's slot.
- Covers: reuse the existing 60 neutral cover images; regenerate the **title overlay in English** (`generate-covers.mjs --reprocess` with EN titles) into an `-en` variant. For the EN-native #39, reuse the IT #39 cover image with an EN title.

---

## C. TS module checklist (per EN article)
- `locale: 'en'`, `altLocaleSlug: '<it-slug>'` (omit for the EN-native #39).
- `id`: keep the IT id for paired articles (disambiguated by locale in the registry); the EN-native gets a fresh id.
- `authorId`, `cluster`, `publishDate`/`updatedDate` = IT counterpart.
- `cover`: `/blog/covers/<it-slug>.webp` (shared image); in-article uses the `-plain` variant as today.
- `status: 'published'`, `sources: [...]` (US only), internal links → `/en/blog/<en-slug>`.
