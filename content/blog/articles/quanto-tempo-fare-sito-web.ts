import type { Article } from '../types';
import { DEFAULT_AUTHOR_ID } from '../authors';

const article: Article = {
  id: 2,
  title: 'Quanto tempo ci vuole per fare un sito web? Tempi reali',
  metaTitle: 'Quanto tempo per fare un sito web? Tempi reali | DigitiNexus',
  slug: 'quanto-tempo-fare-sito-web',
  metaDescription:
    'Quanto tempo serve per realizzare un sito web: tempistiche reali per landing, vetrina ed e-commerce e cosa fa ritardare un progetto.',
  capsule:
    'Un sito web professionale richiede in media da 2 a 6 settimane: una landing può essere pronta in pochi giorni, un sito vetrina in 2–4 settimane, un e-commerce o portale complesso anche 8–24 settimane.',
  keywordPrimary: 'quanto tempo per fare un sito web',
  keywordsSecondary: ['tempistiche sito web', 'in quanto tempo si fa un sito'],
  cluster: 'c1',
  intent: 'I/C·MOFU',
  authorId: DEFAULT_AUTHOR_ID,
  publishDate: '2026-06-08',
  updatedDate: '2026-06-08',
  status: 'published',
  cover: {
    src: '/blog/covers/quanto-tempo-fare-sito-web.webp',
    alt: 'Quanto tempo ci vuole per fare un sito web: tempi reali per landing, sito vetrina ed e-commerce',
  },
  body: [
    { type: 'h2', text: 'Quanto tempo serve davvero per fare un sito?' },
    {
      type: 'p',
      lead: true,
      text: 'In media servono **da 2 a 6 settimane** per un sito professionale. Una landing page si fa in pochi giorni; un sito vetrina in 2–4 settimane; un e-commerce in 4–8 settimane; un portale o progetto complesso può richiedere da 8 a 24 settimane. Il tempo cresce con il numero di pagine, funzioni e decisioni da prendere.',
    },
    {
      type: 'table',
      caption: 'Tempi indicativi per tipo di progetto.',
      headers: ['Tipo di progetto', 'Tempo tipico'],
      rows: [
        ['Landing page', 'Da pochi giorni a 1 settimana'],
        ['Sito vetrina professionale', '2–4 settimane'],
        ['E-commerce', '4–8 settimane'],
        ['Portale o progetto complesso', '8–24 settimane'],
      ],
    },
    {
      type: 'p',
      text: 'La differenza non dipende solo dalla bravura di chi sviluppa, ma da quante decisioni e contenuti servono. Più il progetto è grande, più cresce la parte di coordinamento: ogni pagina in più è una struttura da pensare, un testo da scrivere, una grafica da approvare. Un sito vetrina di cinque pagine non è la metà di uno da dieci, perché molte ore vanno nella strategia iniziale e nei test finali, che restano fissi a prescindere dal numero di pagine.',
    },
    {
      type: 'p',
      text: 'Vale anche il contrario: un progetto con contenuti già pronti, brand definito e un solo referente può chiudersi nella parte bassa della forbice. Quando leggi una stima, quindi, non guardare solo il numero ma cosa lo fa salire o scendere. Se vuoi capire come questi tempi si traducono in budget, trovi tutto in [quanto costa un sito](/blog/quanto-costa-sito-web).',
    },

    { type: 'h2', text: 'Quali sono le fasi di un progetto e quanto durano?' },
    {
      type: 'p',
      lead: true,
      text: 'Un sito passa per cinque fasi: brief e strategia, design, sviluppo, contenuti e infine test e lancio. Ognuna ha tempi propri e spesso si sovrappongono. Su un sito vetrina, l\'insieme si distribuisce in genere sulle 2–4 settimane.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Brief e strategia (2–4 giorni):** si definiscono obiettivi, struttura e contenuti necessari. È la fase che evita rifacimenti dopo.',
        '**Design (3–6 giorni):** wireframe e grafica delle pagine chiave, fino all\'approvazione.',
        '**Sviluppo (5–10 giorni):** la trasformazione del design in un sito vero, responsive e veloce.',
        '**Contenuti (in parallelo):** testi, foto e video. Spesso è qui che il progetto rallenta.',
        '**Test e lancio (2–3 giorni):** controlli su dispositivi, velocità, SEO di base, poi la pubblicazione.',
      ],
    },
    {
      type: 'p',
      text: 'I giorni indicati sono ordini di grandezza, non promesse: servono a capire dove finisce il tempo. La fase di sviluppo sembra la più pesante, ma a fare la differenza sul calendario reale sono il brief, che se fatto bene elimina i rifacimenti, e i contenuti, che procedono in parallelo solo se il cliente li consegna in tempo. Per un esempio reale di come queste fasi si incastrano, guarda il nostro [case study di un sito in 3 settimane](/blog/case-study-sito-3-settimane).',
    },

    { type: 'h2', text: 'Cosa fa ritardare un sito?' },
    {
      type: 'p',
      lead: true,
      text: 'La causa numero uno dei ritardi non è tecnica: sono i contenuti che arrivano tardi dal cliente. Subito dopo vengono le revisioni infinite e l\'assenza di un decisore unico. In tutti e tre i casi il problema non è il codice, ma il flusso di approvazioni.',
    },
    {
      type: 'p',
      text: 'Testi, foto e materiali sono il carburante del progetto: se mancano, lo sviluppo si ferma anche quando il sito è quasi pronto. Un esempio tipico: la struttura è online, il design approvato, ma le schede prodotto restano vuote perché il cliente non ha ancora inviato descrizioni e foto. Il sito è tecnicamente pronto e però non può andare live, e ogni giorno di attesa è un giorno di ritardo che non dipende da chi sviluppa.',
    },
    {
      type: 'list',
      items: [
        '**Contenuti in ritardo:** la causa più frequente. Senza testi e immagini definitivi, le pagine restano scheletri.',
        '**Revisioni infinite:** modifiche al design dopo l\'approvazione, una alla volta, allungano ogni ciclo.',
        '**Nessun decisore unico:** quando ogni scelta passa da più persone, ogni feedback richiede giorni invece di ore.',
      ],
    },
    {
      type: 'p',
      text: 'Definire fin dall\'inizio chi approva e in quanti giorni di solito elimina la maggior parte dei ritardi. Non serve lavorare più in fretta: serve togliere le attese tra una fase e l\'altra.',
    },

    { type: 'h2', text: 'Come si accorciano i tempi senza perdere qualità?' },
    {
      type: 'p',
      lead: true,
      text: 'I tempi si accorciano con un processo definito e i contenuti pronti in partenza, non tagliando la cura del design. La rapidità nasce dal metodo: tappe con date, un referente unico e materiali consegnati prima dell\'avvio sviluppo.',
    },
    {
      type: 'p',
      text: 'In DigitiNexus un sito vetrina curato lo consegniamo in genere in tre settimane, a contenuti pronti e feedback rapidi. Il processo è scandito per settimane, così sai sempre a che punto siamo e lo sviluppo non resta mai fermo in attesa di un testo o di un\'approvazione.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Settimana 1, avvio e design:** brief e strategia, architettura delle pagine, wireframe e design delle pagine chiave, raccolta e organizzazione dei contenuti.',
        '**Settimana 2, sviluppo:** costruzione delle pagine, approccio mobile-first e responsive, integrazioni come form, analytics ed eventuale CRM, micro-animazioni.',
        '**Settimana 3, contenuti, test e lancio:** contenuti finali, ottimizzazione delle performance (Core Web Vitals), SEO di base e schema, test sui dispositivi, revisione e go-live.',
      ],
    },
    {
      type: 'p',
      text: 'Le tre settimane valgono per il vetrina. Una landing page, con i contenuti pronti, la chiudiamo in pochi giorni lavorativi, in genere 3–5. Un e-commerce o un portale articolato richiede molto di più, dalle 6 alle 12 settimane e oltre, perché crescono prodotti, pagamenti, integrazioni e gestione. E il calendario resta realistico solo quando teniamo sotto controllo le tre cose che fanno slittare i tempi: contenuti consegnati in ritardo, revisioni eccessive e uno scope che cambia in corsa. Ti raccontiamo come funziona in [sito in 1–4 settimane](/blog/sito-web-1-4-settimane).',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Il modo più semplice per accorciare i tempi è gratuito: prepara testi, foto e logo prima di firmare, e indica una sola persona che approva. Da soli, questi due accorgimenti tolgono la causa numero uno e numero tre dei ritardi.',
    },

    { type: 'h2', text: 'Quanto tempo per landing, vetrina ed e-commerce?' },
    {
      type: 'p',
      lead: true,
      text: 'Una landing page si pubblica in pochi giorni, un sito vetrina in 2–4 settimane, un e-commerce in 4–8 settimane in base al catalogo e alle integrazioni. La distanza tra questi tre numeri racconta quante decisioni e funzioni separano un progetto dall\'altro.',
    },
    {
      type: 'list',
      items: [
        '**Landing page:** una pagina, un obiettivo. Veloce da fare perché le decisioni sono poche e i contenuti sono concentrati.',
        '**Sito vetrina:** più pagine e più contenuti, ma struttura lineare. Sulle 2–4 settimane il fattore decisivo è la velocità con cui arrivano i testi.',
        '**E-commerce:** prodotti, pagamenti, spedizioni e gestione. Più funzioni e più integrazioni spingono verso le 4–8 settimane, e con cataloghi grandi anche oltre.',
      ],
    },
    {
      type: 'p',
      text: 'Per il sito vetrina, oltre al tempo conta il budget. Tempi e costi vanno letti insieme, perché un progetto più articolato richiede sia più settimane sia più investimento. Trovi il quadro completo in [quanto costa un sito](/blog/quanto-costa-sito-web).',
    },

    { type: 'h2', text: 'I tempi cambiano tra agenzia e freelance?' },
    {
      type: 'p',
      lead: true,
      text: 'Possono cambiare, ma non per l\'etichetta. Un freelance ha meno passaggi interni e risponde in fretta, però gestisce un progetto alla volta; un\'agenzia con un team dedicato può lavorare in parallelo su più fasi. A decidere i tempi reali è il metodo, non la dimensione dello studio.',
    },
    {
      type: 'p',
      text: 'Il freelance è spesso più rapido sulle micro-decisioni, perché parli direttamente con chi mette le mani sul sito. L\'agenzia tende a vincere sui progetti più grandi, dove design, sviluppo e contenuti possono avanzare insieme invece che in fila. In entrambi i casi, quello che sposta davvero il calendario è se esiste un processo chiaro e se i contenuti arrivano in tempo, due fattori che non dipendono dalla forma giuridica di chi lavora. Quando confronti i preventivi, guarda come è descritto il flusso di lavoro: te lo spieghiamo in [come leggere un preventivo](/blog/come-leggere-preventivo-sito-web).',
    },
    {
      type: 'cta',
      text: 'Vuoi sapere in quanto tempo possiamo consegnare il tuo sito? Ti diamo una stima realistica con date precise.',
      label: 'Prenota una call',
      href: 'https://calendly.com/digitinexus/30min',
    },
  ],
  faq: [
    {
      q: 'Si può fare un sito in una settimana?',
      a: 'Per una landing page o un sito molto essenziale sì, se i contenuti sono già pronti e le decisioni sono rapide. Per un sito vetrina completo servono in genere 2–4 settimane: una settimana è realistica solo per progetti semplici e ben preparati.',
    },
    {
      q: 'Perché il mio progetto è in ritardo?',
      a: 'Nella maggior parte dei casi perché mancano i contenuti o le approvazioni richiedono troppi passaggi. Lo sviluppo può essere pronto, ma senza testi e foto definitivi il sito non va online. Un decisore unico e contenuti pronti riducono molto i ritardi.',
    },
    {
      q: 'Quanto incidono i contenuti sui tempi?',
      a: 'Moltissimo: i contenuti sono la causa numero uno dei ritardi. Se testi, foto e materiali arrivano in ritardo o cambiano in continuazione, ogni fase successiva slitta. Preparare i contenuti in anticipo è il modo più semplice per accorciare i tempi.',
    },
    {
      q: 'I tempi sono diversi tra agenzia e freelance?',
      a: 'Possono esserlo. Un freelance ha meno passaggi interni ma gestisce un progetto alla volta; un\'agenzia con un team dedicato può procedere in parallelo su più fasi. Conta più il metodo e la disponibilità che l\'etichetta agenzia o freelance.',
    },
  ],
  internalLinks: [
    { slug: 'quanto-costa-sito-web', anchor: 'Quanto costa un sito web nel 2026' },
    { slug: 'sito-web-1-4-settimane', anchor: 'Sito web in 1–4 settimane' },
    { slug: 'case-study-sito-3-settimane', anchor: 'Case study: sito in 3 settimane' },
    { slug: 'come-leggere-preventivo-sito-web', anchor: 'Come leggere un preventivo' },
  ],
  sources: [],
};

export default article;
