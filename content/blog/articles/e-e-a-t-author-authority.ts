import type { Article } from '../types';

const article: Article = {
  id: 22,
  title: 'E-E-A-T e author authority: chi scrive conta (anche per le AI)',
  metaTitle: 'E-E-A-T e author authority: chi scrive conta | DigitiNexus',
  slug: 'e-e-a-t-author-authority',
  metaDescription:
    'Perché l\'autore conta per Google e per le AI: come costruire author authority con firma, credenziali, Person schema e coerenza dell\'identità.',
  capsule:
    'Google e le AI valutano chi scrive: un articolo firmato da un autore con bio, credenziali e profilo collegato via Person schema viene trattato come consiglio esperto e citato più volentieri di un contenuto anonimo.',
  keywordPrimary: 'e-e-a-t',
  keywordsSecondary: ['author authority', 'autorevolezza autore', 'firma articoli SEO'],
  cluster: 'c3',
  intent: 'I·MOFU',
  authorId: 'filippo-gentili',
  publishDate: '2026-09-02',
  updatedDate: '2026-09-02',
  status: 'published',
  cover: {
    src: '/blog/covers/e-e-a-t-author-authority.webp',
    alt: 'E-E-A-T e author authority: la firma dell\'autore con bio e credenziali che rende un articolo affidabile per Google e per le AI',
  },
  body: [
    { type: 'h2', text: 'Cos\'è l\'E-E-A-T?' },
    {
      type: 'p',
      lead: true,
      text: 'L\'**E-E-A-T** è l\'acronimo con cui Google riassume quattro segnali di qualità di un contenuto: **Experience** (esperienza diretta), **Expertise** (competenza tecnica), **Authoritativeness** (autorevolezza riconosciuta) e **Trustworthiness** (affidabilità). Non è un punteggio nel codice, ma il criterio con cui valutatori umani e algoritmi giudicano se ti puoi fidare di chi ha scritto una pagina.',
    },
    {
      type: 'p',
      text: 'Le quattro componenti rispondono a domande diverse. L\'esperienza chiede "l\'autore ha vissuto in prima persona ciò di cui parla?": una recensione di chi ha usato davvero un prodotto vale più di una compilata a tavolino. L\'expertise chiede "ha le competenze per parlarne?". L\'autorevolezza guarda al riconoscimento esterno: chi altri lo cita o lo conferma. L\'affidabilità, la più importante, riguarda l\'onestà complessiva della pagina e del sito: fonti verificabili, trasparenza, contatti reali.',
    },
    {
      type: 'p',
      text: 'L\'E-E-A-T compare nelle Search Quality Rater Guidelines, le linee guida che Google fornisce ai valutatori esterni che giudicano la qualità dei risultati. Non è quindi un fattore di ranking che puoi attivare con un campo, ma un insieme di segnali che i sistemi di Google approssimano. Pesa di più nei temi YMYL ("Your Money or Your Life"): salute, finanza, diritto, dove un\'informazione sbagliata fa danni concreti.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'La prima "E" (Experience) è l\'aggiunta più recente di Google al modello, che prima era E-A-T. Segnala quanto conta l\'esperienza diretta: chi parla per averlo fatto, non solo per averlo letto.',
    },

    { type: 'h2', text: 'Perché l\'autore conta per le AI?' },
    {
      type: 'p',
      lead: true,
      text: 'Perché un\'AI che genera una risposta deve decidere di quali fonti fidarsi, e una firma riconoscibile è uno dei segnali che usa. Un contenuto attribuito a una persona reale, con competenze verificabili e profili collegati, viene trattato come consiglio esperto e ha più probabilità di essere ripreso rispetto a un testo anonimo che potrebbe venire da chiunque.',
    },
    {
      type: 'p',
      text: 'Il meccanismo è lo stesso che governa la citabilità nei motori generativi. Lo studio accademico di riferimento sul tema (Aggarwal et al., "GEO", KDD 2024) ha misurato che strutturare i contenuti con fonti citate, virgolettati e statistiche aumenta la visibilità nelle risposte AI fino a circa il 40%. L\'autore identificabile lavora nella stessa direzione: è un segnale di affidabilità che rende la fonte più "sicura" da citare per un modello che deve evitare di propagare informazioni dubbie.',
    },
    {
      type: 'p',
      text: 'C\'è anche un motivo pratico. Quando chiedi a ChatGPT o a Perplexity un parere su un tema delicato, il modello tende a privilegiare fonti che può attribuire e che reggono il controllo. Un articolo su una scadenza fiscale firmato da un commercialista con tanto di iscrizione all\'albo è più citabile di un testo identico ma anonimo: l\'identità dell\'autore è parte della prova che l\'informazione è attendibile.',
    },

    { type: 'h2', text: 'Come si costruisce l\'author authority?' },
    {
      type: 'p',
      lead: true,
      text: 'L\'**author authority** è l\'autorevolezza che un autore accumula nel tempo come fonte riconoscibile su un argomento. Si costruisce mostrando chi sei: una bio reale con foto, le credenziali che giustificano la competenza, uno storico di articoli firmati coerenti per tema. È la differenza tra "un articolo sul sito di un\'azienda" e "un articolo scritto da quella persona, di cui sai cosa fa".',
    },
    {
      type: 'p',
      text: 'I mattoni sono concreti e verificabili. Una pagina autore dedicata, con nome completo, ruolo, foto vera (non uno stock) e una biografia che spieghi perché quella persona può parlare di quel tema. Le credenziali pertinenti: titoli, iscrizioni a ordini professionali, anni di esperienza nel settore. Un blocco firma in calce a ogni articolo che colleghi il pezzo all\'autore e alla sua pagina. Più questi elementi sono coerenti e dimostrabili, più la firma pesa.',
    },
    {
      type: 'list',
      items: [
        '**Pagina autore** dedicata con bio, ruolo e foto reale, raggiungibile dagli articoli.',
        '**Credenziali pertinenti** al tema: titoli, iscrizione all\'albo, esperienza nel settore.',
        '**Storico coerente** di articoli firmati sullo stesso ambito: la specializzazione si vede.',
        '**Blocco firma** in ogni articolo che leghi il contenuto alla persona e alla sua pagina.',
        '**Foto reale**, non immagini di repertorio: l\'identità deve essere riconoscibile.',
      ],
    },
    {
      type: 'p',
      text: 'Per uno studio professionale questo passaggio è decisivo, perché vende fiducia prima ancora che un servizio. Un avvocato che firma le proprie guide con nome, foto e iscrizione all\'ordine comunica autorità in modo che nessun testo anonimo può fare. Il quadro completo per i professionisti, con i segnali specifici da curare, è nella [guida a E-E-A-T per professionisti](/blog/e-e-a-t-professionisti).',
    },

    { type: 'h2', text: 'Come si collega l\'identità con Person schema e sameAs?' },
    {
      type: 'p',
      lead: true,
      text: 'Si collega dichiarando l\'autore come entità nel codice, con lo schema **Person**, e collegandolo ai suoi profili pubblici tramite il campo **sameAs**. È il passaggio tecnico che trasforma un nome in chiaro in un\'identità verificabile: dici esplicitamente a Google e alle AI che la firma dell\'articolo corrisponde a una persona reale, confermata altrove sul web.',
    },
    {
      type: 'p',
      text: 'Person è il tipo di schema.org che descrive una persona: nome, ruolo, URL della pagina autore. Il campo `sameAs` è l\'elenco dei profili che confermano quell\'identità: LinkedIn, sito personale, profili professionali, eventuali pubblicazioni. Collegando l\'`author` dell\'Article al blocco Person e quest\'ultimo ai suoi `sameAs`, costruisci una catena che una macchina può seguire e verificare: questo articolo, questa persona, questi profili che la confermano.',
    },
    {
      type: 'p',
      text: 'Il dettaglio fa la differenza per le AI, che si fidano più volentieri di entità collegate che di nomi sciolti. Per il commercialista dell\'esempio, un blocco Person che punti al suo profilo LinkedIn e alla scheda dell\'ordine permette a un modello di confermare che l\'autore esiste, fa quel mestiere ed è chi dice di essere. Trovi i campi esatti da compilare nella [guida allo schema markup per le AI](/blog/schema-markup-ai).',
    },

    { type: 'h2', text: 'Cos\'è la coerenza dell\'entità e perché conta?' },
    {
      type: 'p',
      lead: true,
      text: 'La coerenza dell\'entità è la regola per cui lo stesso autore (o brand) deve apparire con gli stessi dati ovunque sul web: stesso nome, stesso ruolo, stessa foto, stesse credenziali. Quando questi segnali combaciano su sito, LinkedIn, directory e profili professionali, motori e AI capiscono che parlano di una sola entità reale, e la fiducia cresce. Quando divergono, si incrina.',
    },
    {
      type: 'p',
      text: 'Il problema dell\'incoerenza è che indebolisce la prova di identità. Se sul sito ti firmi "Marco Rossi, avvocato" e su LinkedIn compari come "M. Rossi" con un ruolo diverso, una macchina non può essere certa che siate la stessa persona, e nel dubbio declassa il segnale. Lo stesso vale per il brand: nome dell\'azienda, logo e contatti devono coincidere tra sito, Google Business Profile e profili social, altrimenti l\'entità appare frammentata.',
    },
    {
      type: 'list',
      items: [
        'Stesso **nome completo** dell\'autore su sito, LinkedIn, directory e pubblicazioni.',
        'Stesso **ruolo e credenziali** ovunque: niente versioni divergenti dello stesso profilo.',
        'Stessa **foto** e stessa bio di base, così l\'identità resta riconoscibile a colpo d\'occhio.',
        'Per il brand: **nome, logo e contatti** identici tra sito, Google Business Profile e social.',
      ],
    },
    {
      type: 'p',
      text: 'La coerenza dell\'entità è il filo che lega tutto il resto: la firma, le credenziali, il Person schema e i `sameAs` funzionano solo se raccontano la stessa storia ovunque. È anche uno dei segnali che porta le AI a consigliare una fonte invece di un\'altra. Come si inserisce nel quadro più ampio della visibilità generativa lo vedi nella [guida alla Generative Engine Optimization](/blog/geo-generative-engine-optimization).',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Fai un controllo periodico: cerca il tuo nome e quello del brand e verifica che nome, ruolo, foto e contatti coincidano su tutte le piattaforme. Una sola scheda con dati vecchi è abbastanza per spezzare la coerenza dell\'entità.',
    },
    {
      type: 'cta',
      text: 'Vuoi un sito che valorizzi chi sei agli occhi di Google e delle AI, con firma autore, Person schema e identità coerente su ogni pagina? Lo costruiamo così, in 1–4 settimane.',
      label: 'Parliamone',
      href: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ',
    },
  ],
  faq: [
    {
      q: 'Serve un autore reale o basta il nome dell\'agenzia?',
      a: 'Serve un autore reale. Un brand firma il sito, ma le AI e i valutatori di Google premiano i contenuti attribuiti a una persona con competenze verificabili. Un nome di agenzia da solo è un\'entità anonima: una firma personale, collegata a profili pubblici, comunica esperienza e responsabilità diretta.',
    },
    {
      q: 'Come collego il profilo LinkedIn dell\'autore?',
      a: 'Attraverso il campo sameAs dello schema Person: vi inserisci l\'URL di LinkedIn insieme agli altri profili pubblici dell\'autore. È quel collegamento a dire ai motori e alle AI che la firma dell\'articolo e il profilo LinkedIn sono la stessa persona, rendendo l\'identità verificabile.',
    },
    {
      q: 'L\'E-E-A-T è un fattore di ranking diretto?',
      a: 'No. L\'E-E-A-T non è un punteggio nel codice né un campo da attivare: è un concetto delle linee guida per i valutatori di qualità di Google. I sistemi lo approssimano con molti segnali. Curarlo migliora la qualità percepita, ma non c\'è un interruttore unico che lo accende.',
    },
    {
      q: 'Le credenziali dell\'autore devono essere pertinenti al tema?',
      a: 'Sì, ed è la parte decisiva. Un titolo o un\'esperienza valgono come segnale solo se attinenti all\'argomento: un avvocato è autorevole sul diritto, non sulla fiscalità. Mostra le credenziali coerenti con il tema dell\'articolo, non un elenco generico che diluisce la competenza specifica.',
    },
    {
      q: 'Una piccola azienda può costruire author authority?',
      a: 'Sì, e spesso più facilmente di una grande. Bastano una persona reale che firma con nome, foto e ruolo, una pagina autore curata, credenziali pertinenti e profili collegati in modo coerente. L\'autorevolezza si costruisce nel tempo con articoli firmati sullo stesso tema, non con le dimensioni dell\'azienda.',
    },
  ],
  internalLinks: [
    { slug: 'geo-generative-engine-optimization', anchor: 'Generative Engine Optimization (GEO)' },
    { slug: 'schema-markup-ai', anchor: 'Schema markup per le AI: Person e Article' },
    { slug: 'e-e-a-t-professionisti', anchor: 'E-E-A-T per professionisti' },
  ],
  sources: [
    { label: 'Aggarwal et al., "GEO: Generative Engine Optimization", KDD 2024 (arXiv)', url: 'https://arxiv.org/abs/2311.09735' },
  ],
};

export default article;
