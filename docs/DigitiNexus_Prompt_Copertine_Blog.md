# DigitiNexus — Prompt copertine blog (stile illustrato doodle)

Set di prompt per generare le **60 copertine** del blog in stile coerente: illustrazione disegnata a mano (doodle editoriale), figura singola, contorni neri marcati, riempimenti bianco/nero, **un solo colore accento — arancio `#F97316`** (al posto del blu del riferimento), sfondo piatto **`#F3F4F6`**. **Nessun testo** nell'immagine: logo e titolo si aggiungono dopo in overlay.

## Parametri tecnici

- Modello: **gpt-image-2** (o gpt-image-1.5). Size **`1536x1024`** (landscape), poi crop a **1200×630** per cover/OG.
- L'Images API **non ha campo "negative prompt"**: le esclusioni ("no text") sono già dentro al prompt.
- Tieni **lo stesso STYLE** per tutte le 60: cambia solo la `SCENE`. Così le copertine sono una famiglia coerente.
- Palette vincolata: linea nera `#111111`, riempimenti bianco `#FFFFFF` e nero, **unico accento arancio `#F97316`** (usato con parsimonia, mai sulla pelle), sfondo `#F3F4F6`.
- Prompt in **inglese** (resa più affidabile dei modelli immagine); i titoli articolo restano in italiano come riferimento.

## MAIN STYLE PROMPT (per la pipeline — sostituisci `{SCENE}`)

```
Hand-drawn flat doodle editorial illustration. A single human figure with simple
minimal facial features and a small hair bun or loose hair, drawn with bold,
slightly rough and uneven black ink outlines. Clothing and props filled with flat
white and solid black areas. Exactly ONE accent colour — warm orange #F97316 —
used sparingly on a few shapes, objects or garment details, never on skin. Simple
abstract geometric props (arcs, bars, spheres, dots, arrows, panels, browser
windows) arranged around the figure. Flat solid background colour #F3F4F6 (light
cool grey), no gradients, no texture, no drop shadows except a tiny thin ground
line. Centered composition with generous empty negative space, minimal, clean,
modern, playful. Landscape, 1536x1024. ABSOLUTELY NO text, no letters, no numbers,
no words, no captions, no logos, no watermarks, no readable UI text anywhere.
SCENE: {SCENE}
```

## Come usare i prompt per articolo

Ogni voce qui sotto è **già pronta da incollare** (contiene lo stile in forma compatta + la scena specifica). In alternativa, per lo script automatico, usa il MAIN STYLE PROMPT e inserisci nella `{SCENE}` solo la frase "Scene:" di ciascun articolo.

---

## Prompt per articolo (1–60)

### Fondamenta orizzontali

**#1 — Quanto costa un sito web nel 2026? Prezzi reali in Italia**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure with a small bun, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with lots of negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person standing among floating blocks and coin-discs of different sizes, weighing one orange disc in each hand as if comparing value.
```

**#2 — Quanto tempo ci vuole per fare un sito web? Tempi reali**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person walking briskly beside a giant simple round wall-clock and a tipping hourglass, with one orange clock hand.
```

**#3 — Sito web in 1–4 settimane: come è possibile senza perdere qualità**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person sprinting forward with motion lines along a dotted path, passing a few upright calendar-like panels, an orange flag ahead.
```

**#4 — I costi nascosti di un sito web (e come evitarli)**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person lifting the corner of a large flat surface like a rug to reveal small hidden orange geometric shapes underneath.
```

**#5 — Agenzia o freelance per il sito web? Confronto con numeri**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person standing at a fork between two diverging dotted paths, a single small figure-shape on one side and a small cluster of figure-shapes on the other, an orange signpost in the middle.
```

**#6 — Come leggere un preventivo per un sito web (voce per voce)**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person unrolling a long blank scroll and inspecting it through a big magnifying glass with an orange handle.
```

**#7 — Quanto costa un e-commerce nel 2026?**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person pushing a simple shopping cart filled with stacked geometric boxes, a few blank orange price-tag shapes dangling.
```

**#8 — Quanto costa una landing page (e quando ti serve)**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person holding up one tall single panel under a spotlight, with one rounded orange button-shape on the panel.
```

**#9 — Quanto costa mantenere un sito web ogni anno?**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person watering a small plant that grows out of an open laptop, with a few orange leaves sprouting.
```

**#10 — Case study: sito consegnato in 3 settimane**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person breaking through a finish-line ribbon with arms raised, three upright calendar panels behind, the ribbon orange.
```

**#11 — Calcolatore: stima costo e tempi del tuo sito**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person turning a large dial and sliding an abstract slider on a floating control panel, the slider knob orange.
```

**#12 — Sito su misura o template? Pro, contro e quando sceglierli**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person choosing between a single tailored mannequin shape and a stack of identical cloned panels, holding an orange measuring tape.
```

**#13 — Cos'è un design premium per un sito (e perché si paga)**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person polishing a large faceted gem held in both hands, small sparkle marks around it, orange facets.
```

**#14 — Perché un sito lento ti costa clienti: Core Web Vitals**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person pushing a big speedometer needle into the orange zone next to a zooming browser-window shape with speed lines.
```

**#15 — Mobile-first: perché il sito va progettato dal telefono**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person sketching on a giant upright smartphone outline, a tiny desktop screen beside it, an orange screen glow.
```

**#16 — Sito che converte: 7 elementi di UX che fanno la differenza**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person guiding a trail of dots down into a wide funnel shape, with an orange arrow exiting the bottom.
```

**#17 — Quando rifare il sito? 6 segnali che serve un restyling**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person frowning at a cracked old monitor shape with small warning spark marks, one spark orange.
```

**#18 — Accessibilità web: cos'è e perché conviene (anche per legge)**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person rolling out a ramp from an open doorway so several simple diverse figure-shapes can pass through, the ramp orange.
```

### SEO & GEO

**#19 — GEO: come farsi citare da ChatGPT, Gemini e dagli AI Overview**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person touching a glowing globe orbited by several empty blank speech bubbles outlined in orange.
```

**#20 — AI Overview di Google: cosa sono e quanto pesano in Italia**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person standing before a large browser-window shape topped by a glowing rounded answer-block highlighted in orange.
```

**#21 — Schema markup che le AI capiscono (Article, FAQPage, Person)**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person assembling large bracket and curly-brace shapes like building blocks into a neat tidy structure, the brackets orange.
```

**#22 — E-E-A-T e author authority: chi scrive conta (anche per le AI)**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person standing on a small pedestal holding an oversized pen and a round verified-check medallion, the medallion orange.
```

**#23 — Come scrivere contenuti che le AI citano (capsule method)**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person placing a small capsule/pill-shaped block at the very top of a stack of flat panels, the capsule orange.
```

**#24 — Serve il file llms.txt per farsi citare dalle AI? I dati dicono…**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person shrugging while inspecting a single small blank sheet of paper through a magnifier, faint dust marks, the magnifier rim orange.
```

**#25 — SEO di base nel 2026: cosa conta ancora (e cosa no)**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person laying foundation bricks beneath a floating website-window panel, the bricks orange.
```

**#26 — Local SEO: farsi trovare nella propria città (e dalle AI)**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person planting a large map-pin onto a folded map beside a small storefront shape, the pin orange.
```

### Studi professionali

**#27 — Il sito web per uno studio professionale: la guida 2026**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person carefully placing a polished website-window panel onto a shelf next to a briefcase and two slim classical columns, orange accents.
```

**#28 — Sito web per avvocati e studi legali: cosa serve davvero**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person holding a balanced horizontal beam with a small panel hanging from each end, standing in front of two tall slim columns, the beam orange.
```

**#29 — Sito web per commercialisti: come acquisire clienti online**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person organizing tall stacks of folders and ledger-blocks beside a simple calculator shape, the folder tabs orange.
```

**#30 — Quanto costa il sito di uno studio professionale?**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person attaching a blank price-tag to a leather portfolio briefcase, the tag orange.
```

**#31 — E-E-A-T per professionisti: trasmettere autorità online**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person pinning a ribboned medal onto an open portfolio, the medal orange.
```

**#32 — 7 errori del sito di uno studio che fanno perdere clienti**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person patching small cracks on a row of upright panels with a trowel, small warning sparks, one patch orange.
```

**#33 — Sito web per studi di architettura e ingegneria**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person at a drafting table drawing with an oversized compass over blank blueprint panels, the compass orange.
```

**#34 — Recensioni e Google Business Profile per studi professionali**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person lifting up a giant five-point star next to a map-pin, the star orange.
```

**#35 — Farsi trovare quando si chiede un professionista a ChatGPT**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person surrounded by several blank speech bubbles all pointing toward one highlighted standing figure-shape, the chosen figure outlined in orange.
```

### PMI / aziende di servizi

**#36 — Il sito web per una PMI di servizi: cosa serve per generare contatti**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person connecting a simple office-building block to incoming dotted lines and small arrow shapes, the arrows orange.
```

**#37 — Sito B2B che genera lead: struttura, contenuti, CTA**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person catching falling dots in a wide net that funnels them into a box, the net orange.
```

**#38 — Restyling del sito aziendale: quando conviene e cosa cambia**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person repainting a dull old panel into a fresh new one with a paint roller, an orange paint stripe.
```

**#39 — Digitalizzazione PMI: partire dal sito (e quali incentivi)**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person stepping across a small bridge from a stack of paper sheets to a glowing laptop, the bridge orange.
```

**#40 — Case study: PMI di servizi, sito rifatto in 4 settimane**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person breaking a finish-line ribbon while carrying a small office-building block under one arm, the ribbon orange.
```

### Startup

**#41 — Dal MVP al sito investor-ready: il sito web per startup**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person riding a large upward-pointing arrow like a surfboard while holding a laptop, an orange trail behind.
```

**#42 — Landing page per validare l'idea di una startup**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person testing a single tall panel marked with a big check-mark and a small lightbulb above it, the bulb orange.
```

**#43 — Il sito che serve per un round (pre-seed e seed)**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person presenting a blank bar-chart board to two seated abstract listener figure-shapes, one chart bar highlighted orange.
```

**#44 — Time-to-market: lanciare il sito di una startup in 2 settimane**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person sprinting along a giant upward arrow past two calendar panels with speed lines, the arrow tip orange.
```

**#45 — Branding per startup: un'identità credibile in tempi rapidi**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person painting a bold abstract mark (a star or asterisk shape, not a letter) onto a raised flag, the mark orange.
```

### AI per il business

**#46 — Intelligenza artificiale per la tua azienda: guida pratica (senza hype)**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person calmly interacting with a friendly simple robot assistant made of basic geometric shapes, a few small app-panel shapes floating around them, one orange accent on the robot.
```

**#47 — Agente AI o chatbot: che differenza c'è**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person comparing two characters side by side: a small simple speech-bubble bot and a taller multi-armed robot performing several tasks at once, orange accents on the robot.
```

**#48 — RAG: far rispondere l'AI con i dati della tua azienda**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person feeding folders and documents into a simple robot that displays a glowing round knowledge orb, the orb orange.
```

**#49 — Perché l'AI a volte "inventa": allucinazioni**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person inspecting with a magnifier a confident simple robot holding an odd mismatched puzzle piece, a small spark above, the spark orange.
```

**#50 — Prompt efficaci per il lavoro**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person handing a clear blank instruction card to a simple robot while small gears turn around its head, the card edge orange.
```

**#51 — Chatbot AI sul sito: quando serve (e quando no)**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person standing beside a large browser-window shape with a friendly chat-bubble assistant popping out of it, the bubble orange.
```

**#52 — Prenotazioni e primo contatto automatizzati con l'AI**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person and a small robot together placing appointment blocks onto a simple calendar grid, the blocks orange.
```

**#53 — Automazioni AI senza saper programmare**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person connecting nodes and blocks with cables into a simple flow diagram, a tiny robot helper beside, the connectors orange.
```

**#54 — Immagini e visual AI coerenti col brand**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person at an easel where a simple robot arm paints abstract geometric shapes on the canvas, the paint palette orange.
```

**#55 — AI per studi professionali: 7 usi concreti**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person between two slim classical columns while a simple robot assistant sorts documents and a briefcase, orange accents.
```

**#56 — AI per commercialisti: cosa automatizzare davvero**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a simple robot sorting tall stacks of ledger folders next to a calculator shape while a person supervises, the folder tabs orange.
```

**#57 — AI per PMI di servizi: 5 automazioni**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person watching a simple robot juggle several chat bubbles and small task icons around the clock, gears turning, orange accents.
```

**#58 — Costruire una startup con l'AI**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person riding a large upward arrow while building with blocks alongside a small robot co-pilot, an orange trail behind.
```

**#59 — AI, privacy e GDPR/AI Act**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person holding a shield that protects a stack of documents from a robot hand reaching in, a small padlock nearby, the shield orange.
```

**#60 — Quanto costa adottare l'AI in azienda**
```
Hand-drawn flat doodle editorial illustration, bold rough black ink outlines, single figure, flat white/black fills, ONE accent colour warm orange #F97316 used sparingly (never on skin), flat #F3F4F6 background, centered with negative space, no text/letters/numbers/logos, landscape 1536x1024. Scene: a person weighing a small robot head on one side of a balance scale against stacked coin-discs on the other, orange accents.
```

---

## Note

- Il riferimento usava talvolta un piccolo punto rosso secondario: qui è stato **unificato all'arancio** `#F97316` per coerenza di brand. Se vuoi un secondo accento, definiscilo una sola volta e applicalo a tutte le 60.
- Dopo la generazione: ritaglia a 1200×630, esporta in **WebP**, poi **overlay** di logo DigitiNexus + titolo (font Manrope) via codice — l'AI non deve disegnare testo né logo.
- Coerenza tra immagini: stesso STYLE, stessa size, e — se serve più costanza del personaggio — passa una delle prime cover come **immagine di riferimento** all'endpoint *edits* con `input_fidelity:"high"`.
