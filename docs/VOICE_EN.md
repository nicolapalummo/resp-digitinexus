# VOICE_EN — English (US) transcreation guide for the DigitiNexus blog

This guide governs the **English (US) blog** under `/en/blog`. The English articles are a **transcreation** of the Italian originals, not a literal translation. Read this together with `WRITING_KIT_EN.md` (US source whitelist + per-article metadata) and the source Italian article.

## 1. Core principle — transcreate, don't translate
Rewrite the idea for a US reader. Never calque Italian phrasing, idioms, or sentence structure. Keep the original's intent, structure (GEO), and argument — but the examples, analogies, personas, legal/cultural context, and data are re-localized for the United States.

## 2. Language & mechanics
- **US English** spelling and usage: optimize, color, behavior, organization, "toward", "100%".
- Numbers/format: US conventions; currency qualitative (no invented "$X" figures presented as data).
- Voice: second person ("you"), direct, confident, plain. Short paragraphs.
- **Banned weak openers**: "In this article", "In today's digital world", "Let's dive in", "Let's take a look", "When it comes to". Open with the answer.
- **No em dashes in body prose** (use commas, colons, parentheses). En dashes only in numeric ranges ("1–4 weeks"). Keep to the same anti-slop bar as the Italian blog.
- No AI-slop filler: no "It's worth noting", "In conclusion", "Moreover/Furthermore" chains, no hype.

## 3. GEO structure (unchanged from IT)
- **Capsule** ("In short") of ~40–75 words, self-contained, front-loaded — the snippet AI engines can quote.
- Every **H2 is a question**; the first sentence answers it (answer-first, 40–75 words), then development with a sourced data point and a concrete US example, optional list/table.
- **4–6 FAQ** (40–55 words each) → FAQPage schema.
- Define entities/terms on first mention (US terminology).
- Lengths: pillar 1,800–2,500 words · satellites 1,000–1,500 · comparisons/case studies 900–1,400.

## 4. Persona & context mapping (IT → US)
| Italian original | US transcreation | US authority |
|---|---|---|
| Commercialista | CPA / accounting firm | AICPA, IRS |
| Avvocato / studio legale | Attorney / law firm | ABA Model Rules, state bar |
| Architetto / studio | Architecture firm | AIA |
| Studio professionale | Professional services firm / practice | BLS |
| PMI | Small business / SMB | SBA, US Census, BLS |
| Startup | Startup | SBA, Census Business Formation |
| GDPR / AI Act | CCPA/CPRA, FTC (GDPR only if serving the EU) | FTC, California OAG |
| IVA / fatturazione | Sales tax / invoicing | — |
| Incentivi/bandi PMI | (no US equivalent) → reframe as ROI/financing (SBA loans) | SBA |

## 5. Glossary (recurring terms)
- sito vetrina → brochure site · preventivo → quote/estimate · studio → firm/practice · ditta/azienda → business/company · su misura → custom · restyling → redesign · sito che converte → website that converts · scheda Google → Google Business Profile · recensioni → reviews · farsi trovare → getting found · realizzazione siti → web design and development.

## 6. Source policy v2 (US-certified)
- **Forbidden in EN:** the Italian sources used in the IT blog — **ISTAT, Cassa Forense, MIMIT, SEOZoom** must NOT appear. Also (as in IT) no web agencies, marketplaces, or SEO-vendor blogs as primary stats.
- **Allowed:** only the vetted US whitelist in `WRITING_KIT_EN.md` (US Census, BLS, SBA, ABA, AICPA, AIA, Pew, BrightLocal, Baymard, Nielsen Norman, Google/CrUX, HTTP Archive, FTC, ADA.gov/W3C, WebAIM, Ahrefs, SparkToro, Aggarwal/arXiv, etc.).
- **Citation rules (same as IT):** inline parenthetical ONLY for institutions (Census, BLS, SBA, ABA, AICPA, FTC, Pew) + the academic study (Aggarwal). Data companies (Ahrefs, SparkToro, BrightLocal, Baymard, Nielsen Norman, HubSpot, CB Insights, UsableNet) go ONLY in the `sources` list, never inline. No orphan numbers. Costs/times qualitative. If no certified US figure exists for a claim → make it qualitative; never invent.

## 7. Heavy re-frame articles (legal/normative — handle with care)
For #18 (accessibility → ADA Title III + WCAG 2.2 / Section 508), #28 (law firms → ABA Model Rules 7.1–7.5, state bar advertising), #29/#56 (CPAs → AICPA), #59 (privacy → CCPA/CPRA + FTC): describe the framework generally; never state a specific rule, threshold, or deadline as settled fact. Use a `placeholder` callout ("verify current rules / consult counsel"). The article informs, it does not give legal advice.

## 8. Bylines & internal links
- Authors unchanged: **Nicola Palummo** (Cofounder & Web Designer) and **Filippo Gentili** (Cofounder), per the article's `authorId`. English bios. LinkedIn as before.
- The agency serves **US and international clients** (confirmed) — value prop and CTA are global; CTA stays the booking link.
- Internal links point to **English slugs** under `/en/blog/...` only.

## 9. Pre-publish checklist (per article)
- [ ] Transcreation, zero Italian calques/residue; US English throughout.
- [ ] Persona/context localized to the US (per §4).
- [ ] Every figure from a vetted US source (institution inline / data-company in `sources`); forbidden IT sources absent; no orphan numbers.
- [ ] Capsule + answer-first H2 questions + 4–6 FAQ; 0 em dashes in body.
- [ ] `locale: 'en'`, `altLocaleSlug` set to the IT counterpart; internal links to EN slugs.
- [ ] Length within range for the article type.
