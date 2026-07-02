import type { Article } from '../types';

const article: Article = {
  id: 23,
  title: 'Come scrivere contenuti che le AI citano (capsule method)',
  metaTitle: 'Come scrivere contenuti che le AI citano | DigitiNexus',
  slug: 'contenuti-citabili-ai-capsule-method',
  metaDescription:
    'Il metodo per scrivere contenuti citabili dalle AI: capsula di risposta, struttura answer-first, dati e fonti. Con esempi pratici.',
  capsule:
    'Per essere citati dalle AI, ogni sezione deve aprirsi con una "capsula": una risposta autosufficiente di 20–25 parole, seguita da dati e fonti. Questo articolo ne è l\'esempio.',
  keywordPrimary: 'contenuti citabili AI',
  keywordsSecondary: ['scrivere per GEO', 'capsule method', 'contenuti answer-first'],
  cluster: 'c3',
  intent: 'I·MOFU',
  authorId: 'filippo-gentili',
  publishDate: '2026-09-23',
  updatedDate: '2026-09-23',
  status: 'published',
  cover: {
    src: '/blog/covers/contenuti-citabili-ai-capsule-method.webp',
    alt: 'Capsule method: come scrivere contenuti citabili dalle AI con risposta-prima, dati e fonti',
  },
  body: [
    { type: 'h2', text: 'Cos\'è il capsule method?' },
    {
      type: 'p',
      lead: true,
      text: 'Il **capsule method** è una tecnica di scrittura in cui ogni sezione si apre con una "capsula": una risposta breve e autosufficiente, di 20–25 parole, che chiude la domanda del titolo anche letta da sola. Sotto la capsula arriva l\'approfondimento. È il formato che le AI generative riprendono più volentieri, perché trovano il pezzo già pronto da citare.',
    },
    {
      type: 'p',
      text: 'Il punto da capire è come lavora un\'AI quando genera una risposta. Non legge la tua pagina dall\'inizio alla fine come un umano: cerca il frammento che risponde alla domanda, lo estrae e lo ricompone con altre fonti. Se quel frammento è un paragrafo lungo e discorsivo, deve tagliarlo e indovinare dove finisce il senso. Se invece è una capsula chiusa, la prende intera. Tu gli consegni l\'unità citabile, lui non deve costruirla.',
    },
    {
      type: 'p',
      text: 'Questo articolo è il suo stesso esempio. Ogni H2 è una domanda, la prima frase è la risposta, sotto trovi i dati e gli esempi. Se rileggi solo le frasi in apertura di sezione, hai già un riassunto coerente e autosufficiente dell\'intera guida. È esattamente ciò che un\'AI fa quando ti cita: prende l\'apertura, non il resto.',
    },

    { type: 'h2', text: 'Come si scrive una capsula efficace?' },
    {
      type: 'p',
      lead: true,
      text: 'Una capsula efficace risponde alla domanda in 20–25 parole, sta in cima alla sezione e ha senso anche estratta dal contesto. Niente premesse, niente "come abbiamo visto", niente rimandi ad altri paragrafi: deve reggere da sola, perché è proprio così che verrà letta e citata.',
    },
    {
      type: 'p',
      text: 'L\'autosufficienza è la regola più importante e la più difficile. Una capsula che inizia con "questo" o "come dicevamo" è inutile fuori contesto: l\'AI la scarta perché non sa a cosa si riferisce. La prova del nove è semplice: copia solo quella frase, incollala altrove e chiediti se risponde alla domanda. Se serve il paragrafo prima per capirla, non è una capsula, è un\'introduzione.',
    },
    {
      type: 'p',
      text: 'Per un commercialista che spiega "quando conviene il forfettario", la capsula non è "dipende da molti fattori": è "Il regime forfettario conviene sotto una certa soglia di ricavi e con pochi costi deducibili, perché applica un\'imposta unica al posto di IRPEF e addizionali". Una è fumo, l\'altra è citabile. La differenza non è la lunghezza, è la densità: nomi, condizioni, un perché, dentro una sola frase compiuta.',
    },
    {
      type: 'list',
      items: [
        '**Lunghezza:** 20–25 parole, una o due frasi al massimo.',
        '**Posizione:** la primissima frase sotto l\'H2, prima di qualsiasi premessa.',
        '**Autosufficienza:** ha senso anche copiata e incollata fuori dalla pagina.',
        '**Densità:** un soggetto, una risposta diretta, un perché. Niente "dipende" secco.',
        '**Niente rimandi:** vietato "come visto sopra", "questo", "ne parliamo dopo".',
      ],
    },

    { type: 'h2', text: 'Cos\'è la struttura answer-first?' },
    {
      type: 'p',
      lead: true,
      text: 'La struttura answer-first inverte l\'ordine classico: prima la risposta, poi la spiegazione. Ogni H2 è formulato come una domanda reale e la prima frase la chiude subito, invece di costruire il contesto e arrivare alla conclusione in fondo. È la cornice in cui le capsule vivono: i titoli fanno da indice di domande, le aperture da indice di risposte.',
    },
    {
      type: 'p',
      text: 'Funziona perché allinea la tua pagina al modo in cui le persone interrogano le AI: con domande in linguaggio naturale. Quando qualcuno chiede a un assistente "serve un sito veloce per la SEO?", il modello cerca pagine che contengano quella domanda e una risposta secca subito sotto. Un H2 scritto come domanda, con la risposta in prima riga, è la corrispondenza perfetta. Un titolo vago tipo "L\'importanza della velocità" non intercetta nessuna domanda.',
    },
    {
      type: 'p',
      text: 'Front-loading è la seconda metà della regola: le informazioni più importanti vanno nel primo 30% della pagina. È da lì che arriva la quota maggiore delle citazioni AI, perché i modelli pesano di più l\'inizio del documento. In pratica: la capsula generale subito dopo l\'H1, le sezioni decisive prima di quelle di contorno, i dati chiave non relegati in fondo. Chi nasconde la risposta a metà articolo, di fatto rinuncia a essere citato.',
    },

    { type: 'h2', text: 'Dati, citazioni ed entità: cosa aumenta le citazioni?' },
    {
      type: 'p',
      lead: true,
      text: 'Tre mosse aumentano in modo misurabile le citazioni: aggiungere statistiche con fonte, citare fonti autorevoli e inserire virgolettati. Lo studio accademico sulla Generative Engine Optimization (Aggarwal et al., KDD 2024) ha rilevato fino a +40% di visibilità nei motori generativi con queste leve. I numeri datati, i nomi propri e le citazioni rendono un contenuto più affidabile per la macchina, quindi più citabile.',
    },
    {
      type: 'p',
      text: 'La logica è quella della fiducia. Un\'AI deve scegliere a chi attribuire una risposta, e premia le fonti che dimostrano di sapere di cosa parlano. Un paragrafo con un dato datato e attribuito ("il 34% degli avvocati ha un sito, Cassa Forense 2025") pesa più di un\'affermazione generica ("pochi avvocati hanno un sito"). Il numero con fonte è verificabile, l\'opinione no. La regola operativa è semplice: almeno un dato con fonte per sezione, mai un numero orfano.',
    },
    {
      type: 'p',
      text: 'Le entità sono l\'altra leva. Un\'entità è un concetto definito in modo univoco: uno strumento, uno standard, una persona, un luogo. Quando nomini i Core Web Vitals, l\'E-E-A-T o la GEO, aggiungi alla prima menzione una frase-definizione autosufficiente. Così la macchina capisce di cosa parli senza interpretare, e collega la tua pagina al concetto giusto. Densità di entità definite e dati datati, non densità di parole: è questa la differenza tra un contenuto citato e uno ignorato.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Statistiche con fonte:** un dato datato e attribuito per sezione, mai numeri inventati o orfani.',
        '**Citazioni autorevoli:** richiama istituzioni e studi per nome, non fonti generiche.',
        '**Virgolettati:** un\'affermazione citata testualmente rafforza la credibilità del passaggio.',
        '**Entità definite:** alla prima menzione di un concetto tecnico, una frase che lo spiega da sola.',
      ],
    },

    { type: 'h2', text: 'Quali errori riducono le citazioni?' },
    {
      type: 'p',
      lead: true,
      text: 'Tre errori bruciano le citazioni: il fluff (frasi vuote che allungano senza dire), la vaghezza (risposte tipo "dipende" senza condizioni) e l\'assenza di fonti (numeri senza attribuzione o affermazioni non verificabili). Sono lo specchio rovesciato del capsule method: dove serve densità, mettono aria; dove serve una risposta secca, mettono giri di parole.',
    },
    {
      type: 'p',
      text: 'Il fluff è il nemico numero uno, e non solo per le AI. Le aperture generiche ("Nel mondo digitale di oggi…"), le liste di aggettivi senza criteri ("moderno, accattivante, professionale"), le conclusioni che ripetono l\'intro: tutto questo diluisce il segnale. Anche Google penalizza il testo gonfiato con il suo sistema sui contenuti utili (helpful content), perché la lunghezza deve venire dalla copertura, non dal riempitivo. Un articolo lungo e vuoto perde su entrambi i fronti.',
    },
    {
      type: 'p',
      text: 'La vaghezza è più insidiosa perché si traveste da prudenza. "Dipende dal caso" non è una risposta, è un rinvio. Se davvero dipende, scrivi da cosa: le condizioni, le soglie, gli scenari. Per un architetto, "il costo di un sito dipende" non viene mai citato; "il costo varia con il numero di pagine e la presenza di un portfolio interattivo" sì, perché dà alla macchina qualcosa di concreto da riportare. La prudenza utile è specifica, non evasiva.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Em dash col contagocce e niente incipit deboli ("Vediamo…", "Approfondiamo…"): non sono solo questioni di stile. Sono i segnali che distinguono un testo scritto con cura da uno generato in serie, e sempre più filtri lo notano. Scrivi diretto, vai al punto.',
    },

    { type: 'h2', text: 'Qual è la checklist del contenuto citabile?' },
    {
      type: 'p',
      lead: true,
      text: 'La checklist del contenuto citabile è una lista di controllo da passare prima di pubblicare: capsula presente e autosufficiente, H2 come domanda con risposta-prima, un dato con fonte per sezione, entità definite, FAQ con risposte brevi. Se ogni voce è spuntata, hai un articolo strutturato per essere ripreso dalle AI senza che debbano ricostruire nulla.',
    },
    {
      type: 'p',
      text: 'È lo stesso schema che usano i dati strutturati, ma applicato alla scrittura. Marcare le FAQ con [schema markup FAQPage](/blog/schema-markup-ai) dichiara alla macchina "questa è una domanda, questa la risposta"; scrivere in capsule fa lo stesso lavoro nel testo visibile, rendendo ogni sezione un\'unità isolabile. Le due cose si rafforzano: il markup etichetta, la scrittura citabile riempie l\'etichetta di contenuto che vale la pena citare.',
    },
    {
      type: 'list',
      items: [
        'Capsula sotto l\'H1, 20–25 parole, autosufficiente.',
        'Ogni H2 è una domanda reale, con la risposta nella prima frase (answer-first).',
        'Informazioni più importanti nel primo 30% della pagina (front-loading).',
        'Almeno un dato con fonte per sezione, nessun numero orfano.',
        'Entità tecniche definite alla prima menzione.',
        'Blocco FAQ con 3–5 risposte da 40–55 parole, ciascuna autosufficiente.',
        'Niente fluff, niente "dipende" secco, niente incipit deboli.',
        'Riletto ad alta voce: suona come un professionista che parla, non come testo generato.',
      ],
    },
    {
      type: 'p',
      text: 'Il capsule method è una tecnica di scrittura dentro una strategia più ampia. Il quadro completo, dove la struttura citabile si combina con dati, fonti e autorevolezza, è nella [guida alla Generative Engine Optimization](/blog/geo-generative-engine-optimization). Se vuoi capire da dove arrivano le citazioni nel contesto italiano, parti dalle [AI Overview di Google in Italia](/blog/ai-overview-google-italia).',
    },
    {
      type: 'cta',
      text: 'Vuoi contenuti e un sito pensati per essere citati da Google e dalle AI, non solo per "stare online"? Li scriviamo e li costruiamo citabili, in 1–4 settimane.',
      label: 'Parliamone',
      href: 'https://calendly.com/digitinexus/30min',
    },
  ],
  faq: [
    {
      q: 'Quanto deve essere lunga una capsula?',
      a: 'Tra 20 e 25 parole, una o due frasi al massimo. È abbastanza per dare una risposta completa e autosufficiente, ma abbastanza corta da restare densa e citabile. Se superi le 30 parole, di solito stai aggiungendo contesto che andrebbe nel paragrafo di sviluppo, non nella capsula.',
    },
    {
      q: 'Il capsule method funziona su ogni tipo di articolo?',
      a: 'Sì, dalle guide ai case study ai confronti. Cambia il contenuto della capsula, non il metodo: ogni sezione si apre con la sua risposta autosufficiente. Funziona ovunque ci sia una domanda da chiudere, ed è particolarmente efficace su contenuti informativi e comparativi, dove le AI cercano risposte secche da riportare.',
    },
    {
      q: 'Serve per Google o solo per le AI?',
      a: 'Per entrambi. La struttura answer-first aiuta le AI a estrarre risposte, ma le stesse regole (chiarezza, dati con fonte, niente fluff) sono ciò che Google premia con il suo sistema sui contenuti utili. Scrivere citabile non è un trucco per le AI: è scrivere bene, e i due motori convergono sullo stesso standard.',
    },
    {
      q: 'Come verifico se vengo citato dalle AI?',
      a: 'Interroga direttamente gli assistenti (ChatGPT, Gemini, Perplexity) con le domande a cui rispondi e guarda se la tua pagina compare tra le fonti. Esistono anche strumenti di monitoraggio delle citazioni AI. Controlla nel tempo: la visibilità nei motori generativi si misura sulla frequenza con cui vieni ripreso, non su un singolo test.',
    },
  ],
  internalLinks: [
    { slug: 'geo-generative-engine-optimization', anchor: 'Generative Engine Optimization (GEO)' },
    { slug: 'ai-overview-google-italia', anchor: 'AI Overview di Google in Italia' },
    { slug: 'schema-markup-ai', anchor: 'schema markup che le AI capiscono' },
  ],
  sources: [
    { label: 'Aggarwal et al., "GEO: Generative Engine Optimization", KDD 2024 (arXiv)', url: 'https://arxiv.org/abs/2311.09735' },
  ],
};

export default article;
