// Cover-generation data for the blog.
// MAIN_STYLE_PROMPT is the constant style prepended to EVERY scene at every
// generation (never generate without it). Scenes are extracted verbatim from
// DigitiNexus_Prompt_Copertine_Blog.md. Each slug MUST match the post slug.

export const MAIN_STYLE_PROMPT =
  'Hand-drawn flat doodle editorial illustration. A single human figure with simple ' +
  'minimal facial features and a small hair bun or loose hair, drawn with bold, ' +
  'slightly rough and uneven black ink outlines. Clothing and props filled with flat ' +
  'white and solid black areas. Exactly ONE accent colour — warm orange #F97316 — ' +
  'used sparingly on a few shapes, objects or garment details, never on skin. Simple ' +
  'abstract geometric props (arcs, bars, spheres, dots, arrows, panels, browser ' +
  'windows) arranged around the figure. Flat solid background colour #F3F4F6 (light ' +
  'cool grey), no gradients, no texture, no drop shadows except a tiny thin ground ' +
  'line. Centered composition with generous empty negative space, minimal, clean, ' +
  'modern, playful. Landscape, 1536x1024. ABSOLUTELY NO text, no letters, no numbers, ' +
  'no words, no captions, no logos, no watermarks, no readable UI text anywhere.';

export interface Cover {
  /** must match the post slug exactly */
  slug: string;
  /** the "Scene: ..." description for this article */
  scene: string;
}

/** finalPrompt for an image = MAIN_STYLE_PROMPT + "\nSCENE: " + scene */
export function buildPrompt(scene: string): string {
  return `${MAIN_STYLE_PROMPT}\nSCENE: ${scene}`;
}

export const covers: Cover[] = [
  { slug: 'quanto-costa-sito-web', scene: 'a person standing among floating blocks and coin-discs of different sizes, weighing one orange disc in each hand as if comparing value.' },
  { slug: 'quanto-tempo-fare-sito-web', scene: 'a person walking briskly beside a giant simple round wall-clock and a tipping hourglass, with one orange clock hand.' },
  { slug: 'sito-web-1-4-settimane', scene: 'a person sprinting forward with motion lines along a dotted path, passing a few upright calendar-like panels, an orange flag ahead.' },
  { slug: 'costi-nascosti-sito-web', scene: 'a person lifting the corner of a large flat surface like a rug to reveal small hidden orange geometric shapes underneath.' },
  { slug: 'agenzia-o-freelance-sito-web', scene: 'a person standing at a fork between two diverging dotted paths, a single small figure-shape on one side and a small cluster of figure-shapes on the other, an orange signpost in the middle.' },
  { slug: 'come-leggere-preventivo-sito-web', scene: 'a person unrolling a long blank scroll and inspecting it through a big magnifying glass with an orange handle.' },
  { slug: 'quanto-costa-ecommerce', scene: 'a person pushing a simple shopping cart filled with stacked geometric boxes, a few blank orange price-tag shapes dangling.' },
  { slug: 'quanto-costa-landing-page', scene: 'a person holding up one tall single panel under a spotlight, with one rounded orange button-shape on the panel.' },
  { slug: 'costo-mantenimento-sito-web', scene: 'a person watering a small plant that grows out of an open laptop, with a few orange leaves sprouting.' },
  { slug: 'case-study-sito-3-settimane', scene: 'a person breaking through a finish-line ribbon with arms raised, three upright calendar panels behind, the ribbon orange.' },
  { slug: 'calcolatore-costo-sito', scene: 'a person turning a large dial and sliding an abstract slider on a floating control panel, the slider knob orange.' },
  { slug: 'sito-su-misura-o-template', scene: 'a person choosing between a single tailored mannequin shape and a stack of identical cloned panels, holding an orange measuring tape.' },
  { slug: 'design-premium-sito-web', scene: 'a person polishing a large faceted gem held in both hands, small sparkle marks around it, orange facets.' },
  { slug: 'core-web-vitals-sito-veloce', scene: 'a person pushing a big speedometer needle into the orange zone next to a zooming browser-window shape with speed lines.' },
  { slug: 'sito-mobile-first', scene: 'a person sketching on a giant upright smartphone outline, a tiny desktop screen beside it, an orange screen glow.' },
  { slug: 'sito-web-che-converte', scene: 'a person guiding a trail of dots down into a wide funnel shape, with an orange arrow exiting the bottom.' },
  { slug: 'quando-rifare-sito-restyling', scene: 'a person frowning at a cracked old monitor shape with small warning spark marks, one spark orange.' },
  { slug: 'accessibilita-sito-web', scene: 'a person rolling out a ramp from an open doorway so several simple diverse figure-shapes can pass through, the ramp orange.' },
  { slug: 'geo-generative-engine-optimization', scene: 'a person touching a glowing globe orbited by several empty blank speech bubbles outlined in orange.' },
  { slug: 'ai-overview-google-italia', scene: 'a person standing before a large browser-window shape topped by a glowing rounded answer-block highlighted in orange.' },
  { slug: 'schema-markup-ai', scene: 'a person assembling large bracket and curly-brace shapes like building blocks into a neat tidy structure, the brackets orange.' },
  { slug: 'e-e-a-t-author-authority', scene: 'a person standing on a small pedestal holding an oversized pen and a round verified-check medallion, the medallion orange.' },
  { slug: 'contenuti-citabili-ai-capsule-method', scene: 'a person placing a small capsule/pill-shaped block at the very top of a stack of flat panels, the capsule orange.' },
  { slug: 'llms-txt-serve-davvero', scene: 'a person shrugging while inspecting a single small blank sheet of paper through a magnifier, faint dust marks, the magnifier rim orange.' },
  { slug: 'seo-2026', scene: 'a person laying foundation bricks beneath a floating website-window panel, the bricks orange.' },
  { slug: 'local-seo', scene: 'a person planting a large map-pin onto a folded map beside a small storefront shape, the pin orange.' },
  { slug: 'sito-web-studio-professionale', scene: 'a person carefully placing a polished website-window panel onto a shelf next to a briefcase and two slim classical columns, orange accents.' },
  { slug: 'sito-web-avvocato-studio-legale', scene: 'a person holding a balanced horizontal beam with a small panel hanging from each end, standing in front of two tall slim columns, the beam orange.' },
  { slug: 'sito-web-commercialista', scene: 'a person organizing tall stacks of folders and ledger-blocks beside a simple calculator shape, the folder tabs orange.' },
  { slug: 'costo-sito-studio-professionale', scene: 'a person attaching a blank price-tag to a leather portfolio briefcase, the tag orange.' },
  { slug: 'e-e-a-t-professionisti', scene: 'a person pinning a ribboned medal onto an open portfolio, the medal orange.' },
  { slug: 'errori-sito-studio', scene: 'a person patching small cracks on a row of upright panels with a trowel, small warning sparks, one patch orange.' },
  { slug: 'sito-web-studio-architettura', scene: 'a person at a drafting table drawing with an oversized compass over blank blueprint panels, the compass orange.' },
  { slug: 'recensioni-google-business-profile-studi', scene: 'a person lifting up a giant five-point star next to a map-pin, the star orange.' },
  { slug: 'farsi-trovare-ai-professionista', scene: 'a person surrounded by several blank speech bubbles all pointing toward one highlighted standing figure-shape, the chosen figure outlined in orange.' },
  { slug: 'sito-web-pmi-servizi', scene: 'a person connecting a simple office-building block to incoming dotted lines and small arrow shapes, the arrows orange.' },
  { slug: 'sito-b2b-lead-generation', scene: 'a person catching falling dots in a wide net that funnels them into a box, the net orange.' },
  { slug: 'restyling-sito-aziendale', scene: 'a person repainting a dull old panel into a fresh new one with a paint roller, an orange paint stripe.' },
  { slug: 'digitalizzazione-pmi', scene: 'a person stepping across a small bridge from a stack of paper sheets to a glowing laptop, the bridge orange.' },
  { slug: 'case-study-sito-pmi', scene: 'a person breaking a finish-line ribbon while carrying a small office-building block under one arm, the ribbon orange.' },
  { slug: 'sito-web-startup', scene: 'a person riding a large upward-pointing arrow like a surfboard while holding a laptop, an orange trail behind.' },
  { slug: 'landing-page-startup-validazione', scene: 'a person testing a single tall panel marked with a big check-mark and a small lightbulb above it, the bulb orange.' },
  { slug: 'sito-startup-round-investitori', scene: 'a person presenting a blank bar-chart board to two seated abstract listener figure-shapes, one chart bar highlighted orange.' },
  { slug: 'sito-startup-veloce-lancio', scene: 'a person sprinting along a giant upward arrow past two calendar panels with speed lines, the arrow tip orange.' },
  { slug: 'branding-startup', scene: 'a person painting a bold abstract mark (a star or asterisk shape, not a letter) onto a raised flag, the mark orange.' },
  // ── AI per il business (#46–#60) ──
  { slug: 'intelligenza-artificiale-per-aziende', scene: 'a person calmly interacting with a friendly simple robot assistant made of basic geometric shapes, a few small app-panel shapes floating around them, one orange accent on the robot.' },
  { slug: 'agente-ai-o-chatbot', scene: 'a person comparing two characters side by side: a small simple speech-bubble bot and a taller multi-armed robot performing several tasks at once, orange accents on the robot.' },
  { slug: 'rag-ai-dati-azienda', scene: 'a person feeding folders and documents into a simple robot that displays a glowing round knowledge orb, the orb orange.' },
  { slug: 'allucinazioni-ai', scene: 'a person inspecting with a magnifier a confident simple robot holding an odd mismatched puzzle piece, a small spark above, the spark orange.' },
  { slug: 'prompt-efficaci-lavoro', scene: 'a person handing a clear blank instruction card to a simple robot while small gears turn around its head, the card edge orange.' },
  { slug: 'chatbot-ai-sito-web', scene: 'a person standing beside a large browser-window shape with a friendly chat-bubble assistant popping out of it, the bubble orange.' },
  { slug: 'prenotazioni-contatti-ai', scene: 'a person and a small robot together placing appointment blocks onto a simple calendar grid, the blocks orange.' },
  { slug: 'automazioni-ai-no-code', scene: 'a person connecting nodes and blocks with cables into a simple flow diagram, a tiny robot helper beside, the connectors orange.' },
  { slug: 'immagini-ai-per-brand', scene: 'a person at an easel where a simple robot arm paints abstract geometric shapes on the canvas, the paint palette orange.' },
  { slug: 'ai-studi-professionali', scene: 'a person between two slim classical columns while a simple robot assistant sorts documents and a briefcase, orange accents.' },
  { slug: 'ai-per-commercialisti', scene: 'a simple robot sorting tall stacks of ledger folders next to a calculator shape while a person supervises, the folder tabs orange.' },
  { slug: 'ai-per-pmi-servizi', scene: 'a person watching a simple robot juggle several chat bubbles and small task icons around the clock, gears turning, orange accents.' },
  { slug: 'startup-con-ai', scene: 'a person riding a large upward arrow while building with blocks alongside a small robot co-pilot, an orange trail behind.' },
  { slug: 'ai-privacy-gdpr', scene: 'a person holding a shield that protects a stack of documents from a robot hand reaching in, a small padlock nearby, the shield orange.' },
  { slug: 'quanto-costa-ai-azienda', scene: 'a person weighing a small robot head on one side of a balance scale against stacked coin-discs on the other, orange accents.' },
  // ── C8 Ads & Funnel (#61-#75) ──
  { slug: 'funnel-sito-web-ads', scene: 'a person guiding a stream of small dots through a large funnel that outputs a few happy customer-shapes at the bottom, the funnel outlined in orange.' },
  { slug: 'meta-google-tiktok-quale-scegliere', scene: 'a person standing before three blank signpost screens pointing in different directions, choosing one that is highlighted in orange.' },
  { slug: 'sito-o-ads-da-dove-partire', scene: 'a person laying a solid foundation block on the ground before raising a small megaphone above it, the megaphone orange.' },
  { slug: 'quanto-budget-ads', scene: 'a person carefully pouring a few coin-discs from a small jar into the top of a megaphone-funnel, the coins orange.' },
  { slug: 'landing-page-per-ads', scene: 'a person assembling one tall single web-page panel with a big rounded call-to-action button, the button orange.' },
  { slug: 'google-ads-domanda-attiva', scene: 'a person holding a large magnifying glass over a blank search-bar shape while catching incoming dots with a small net, the search bar outlined in orange.' },
  { slug: 'meta-ads-scoperta-retargeting', scene: 'a person holding a small megaphone next to a large phone shape with floating heart and speech-bubble shapes, the hearts orange.' },
  { slug: 'tiktok-ads-quando-ha-senso', scene: 'a person holding a tall vertical phone playing a video, with a rounded play-button triangle floating above, the play button orange.' },
  { slug: 'retargeting-come-funziona', scene: 'a person gently pulling a small walking figure-shape back along a dotted U-turn path toward a panel, the dotted path orange.' },
  { slug: 'metriche-campagne-ads', scene: 'a person studying a simple floating dashboard with a bar chart and a rising line, holding a magnifier over one key bar, that bar orange.' },
  { slug: 'tracciamento-conversioni-privacy', scene: 'a person connecting a chain of small dots (a tracking pixel path) that passes through a shield with a small padlock, the shield orange.' },
  { slug: 'errori-che-bruciano-budget-ads', scene: 'a person plugging a leak in a bucket from which a few coin-discs are dripping out, the escaping coins orange.' },
  { slug: 'ads-studi-professionali-servizi', scene: 'a person catching a few dots marked with small check-shapes into an open briefcase, the check marks orange.' },
  { slug: 'ads-ecommerce-attivita-locali', scene: 'a person holding a shopping bag next to a small storefront shape with a map-pin, and a few arrow-shapes pointing in, the pin orange.' },
  { slug: 'annuncio-landing-offerta-message-match', scene: 'a person fitting together two matching puzzle pieces, one shaped like a small ad panel and one like a landing page, the joining edge glowing orange.' },
];

export function coverBySlug(slug: string): Cover | undefined {
  return covers.find((c) => c.slug === slug);
}
