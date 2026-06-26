import type { Article } from './types';

// Article registry — all 60 articles. Order is irrelevant (sorted by publishDate in lib/blog.ts).
import article1 from './articles/quanto-costa-sito-web';
import article2 from './articles/quanto-tempo-fare-sito-web';
import article3 from './articles/sito-web-1-4-settimane';
import article4 from './articles/costi-nascosti-sito-web';
import article5 from './articles/agenzia-o-freelance-sito-web';
import article6 from './articles/come-leggere-preventivo-sito-web';
import article7 from './articles/quanto-costa-ecommerce';
import article8 from './articles/quanto-costa-landing-page';
import article9 from './articles/costo-mantenimento-sito-web';
import article10 from './articles/case-study-sito-3-settimane';
import article11 from './articles/calcolatore-costo-sito';
import article12 from './articles/sito-su-misura-o-template';
import article13 from './articles/design-premium-sito-web';
import article14 from './articles/core-web-vitals-sito-veloce';
import article15 from './articles/sito-mobile-first';
import article16 from './articles/sito-web-che-converte';
import article17 from './articles/quando-rifare-sito-restyling';
import article18 from './articles/accessibilita-sito-web';
import article19 from './articles/geo-generative-engine-optimization';
import article20 from './articles/ai-overview-google-italia';
import article21 from './articles/schema-markup-ai';
import article22 from './articles/e-e-a-t-author-authority';
import article23 from './articles/contenuti-citabili-ai-capsule-method';
import article24 from './articles/llms-txt-serve-davvero';
import article25 from './articles/seo-2026';
import article26 from './articles/local-seo';
import article27 from './articles/sito-web-studio-professionale';
import article28 from './articles/sito-web-avvocato-studio-legale';
import article29 from './articles/sito-web-commercialista';
import article30 from './articles/costo-sito-studio-professionale';
import article31 from './articles/e-e-a-t-professionisti';
import article32 from './articles/errori-sito-studio';
import article33 from './articles/sito-web-studio-architettura';
import article34 from './articles/recensioni-google-business-profile-studi';
import article35 from './articles/farsi-trovare-ai-professionista';
import article36 from './articles/sito-web-pmi-servizi';
import article37 from './articles/sito-b2b-lead-generation';
import article38 from './articles/restyling-sito-aziendale';
import article39 from './articles/digitalizzazione-pmi';
import article40 from './articles/case-study-sito-pmi';
import article41 from './articles/sito-web-startup';
import article42 from './articles/landing-page-startup-validazione';
import article43 from './articles/sito-startup-round-investitori';
import article44 from './articles/sito-startup-veloce-lancio';
import article45 from './articles/branding-startup';
import article46 from './articles/intelligenza-artificiale-per-aziende';
import article47 from './articles/agente-ai-o-chatbot';
import article48 from './articles/rag-ai-dati-azienda';
import article49 from './articles/allucinazioni-ai';
import article50 from './articles/prompt-efficaci-lavoro';
import article51 from './articles/chatbot-ai-sito-web';
import article52 from './articles/prenotazioni-contatti-ai';
import article53 from './articles/automazioni-ai-no-code';
import article54 from './articles/immagini-ai-per-brand';
import article55 from './articles/ai-studi-professionali';
import article56 from './articles/ai-per-commercialisti';
import article57 from './articles/ai-per-pmi-servizi';
import article58 from './articles/startup-con-ai';
import article59 from './articles/ai-privacy-gdpr';
import article60 from './articles/quanto-costa-ai-azienda';

// ── English (US) articles — transcreations under /en/blog ───────────────────
import enArticle19 from './articles/en/generative-engine-optimization';
import enArticle1 from './articles/en/how-much-does-a-website-cost';
import enArticle27 from './articles/en/professional-services-firm-website';
import enArticle36 from './articles/en/small-business-services-website';
import enArticle41 from './articles/en/startup-website';
import enArticle46 from './articles/en/ai-for-businesses';
import enArticle20 from './articles/en/google-ai-overviews';
import enArticle14 from './articles/en/core-web-vitals-fast-website';
import enArticle28 from './articles/en/law-firm-website';
import enArticle2 from './articles/en/how-long-to-build-a-website';
import enArticle3 from './articles/en/website-in-1-to-4-weeks';
import enArticle4 from './articles/en/hidden-website-costs';
import enArticle5 from './articles/en/web-agency-vs-freelancer';
import enArticle6 from './articles/en/how-to-read-a-website-quote';
import enArticle7 from './articles/en/how-much-does-an-ecommerce-site-cost';
import enArticle8 from './articles/en/how-much-does-a-landing-page-cost';
import enArticle9 from './articles/en/website-maintenance-cost';
import enArticle10 from './articles/en/case-study-website-in-3-weeks';
import enArticle11 from './articles/en/website-cost-calculator';
import enArticle12 from './articles/en/custom-website-vs-template';
import enArticle13 from './articles/en/premium-website-design';
import enArticle21 from './articles/en/schema-markup-for-ai';
import enArticle22 from './articles/en/e-e-a-t-and-author-authority';
import enArticle23 from './articles/en/ai-citable-content-the-capsule-method';
import enArticle24 from './articles/en/does-llms-txt-actually-matter';
import enArticle25 from './articles/en/seo-in-2026';
import enArticle26 from './articles/en/local-seo';
import enArticle29 from './articles/en/cpa-accounting-firm-website';
import enArticle30 from './articles/en/professional-firm-website-cost';
import enArticle31 from './articles/en/e-e-a-t-for-professional-services';
import enArticle32 from './articles/en/professional-firm-website-mistakes';
import enArticle33 from './articles/en/architecture-firm-website';
import enArticle34 from './articles/en/google-reviews-for-professional-firms';
import enArticle35 from './articles/en/getting-found-by-ai-as-a-professional';
import enArticle15 from './articles/en/mobile-first-website';
import enArticle16 from './articles/en/website-that-converts';
import enArticle17 from './articles/en/when-to-redesign-your-website';
import enArticle18 from './articles/en/website-accessibility-ada';
import enArticle37 from './articles/en/b2b-lead-generation-website';
import enArticle38 from './articles/en/business-website-redesign';
import enArticle40 from './articles/en/case-study-small-business-website';
import enArticle42 from './articles/en/startup-landing-page-for-validation';
import enArticle43 from './articles/en/startup-website-for-fundraising';
import enArticle44 from './articles/en/startup-website-fast-launch';
import enArticle45 from './articles/en/startup-branding';
import enArticle61 from './articles/en/small-business-website-vs-social-media';
import enArticle47 from './articles/en/ai-agent-vs-chatbot';
import enArticle48 from './articles/en/rag-ai-on-your-company-data';
import enArticle49 from './articles/en/ai-hallucinations';
import enArticle50 from './articles/en/effective-prompts-for-work';
import enArticle51 from './articles/en/ai-chatbot-for-your-website';
import enArticle52 from './articles/en/ai-booking-and-lead-capture';
import enArticle53 from './articles/en/no-code-ai-automation';
import enArticle54 from './articles/en/ai-images-for-your-brand';
import enArticle55 from './articles/en/ai-for-professional-firms';
import enArticle56 from './articles/en/ai-for-cpas-accountants';
import enArticle57 from './articles/en/ai-for-small-businesses';
import enArticle58 from './articles/en/building-a-startup-with-ai';
import enArticle59 from './articles/en/ai-privacy-and-data-protection';
import enArticle60 from './articles/en/how-much-does-ai-cost-for-business';

const ARTICLES_IT: Article[] = [
  article1, article2, article3, article4, article5, article6, article7, article8, article9, article10,
  article11, article12, article13, article14, article15, article16, article17, article18, article19, article20,
  article21, article22, article23, article24, article25, article26, article27, article28, article29, article30,
  article31, article32, article33, article34, article35, article36, article37, article38, article39, article40,
  article41, article42, article43, article44, article45, article46, article47, article48, article49, article50,
  article51, article52, article53, article54, article55, article56, article57, article58, article59, article60,
];

export const ARTICLES_EN: Article[] = [
  enArticle1, enArticle2, enArticle3, enArticle4, enArticle5, enArticle6, enArticle7, enArticle8, enArticle9, enArticle10,
  enArticle11, enArticle12, enArticle13, enArticle14, enArticle19, enArticle20, enArticle21, enArticle22, enArticle23,
  enArticle24, enArticle25, enArticle26, enArticle27, enArticle28, enArticle29, enArticle30, enArticle31, enArticle32,
  enArticle15, enArticle16, enArticle17, enArticle18,
  enArticle33, enArticle34, enArticle35, enArticle36, enArticle37, enArticle38, enArticle40,
  enArticle41, enArticle42, enArticle43, enArticle44, enArticle45, enArticle46,
  enArticle47, enArticle48, enArticle49, enArticle50, enArticle51, enArticle52, enArticle53, enArticle54,
  enArticle55, enArticle56, enArticle57, enArticle58, enArticle59, enArticle60, enArticle61,
];

export const ARTICLES: Article[] = [...ARTICLES_IT, ...ARTICLES_EN];
