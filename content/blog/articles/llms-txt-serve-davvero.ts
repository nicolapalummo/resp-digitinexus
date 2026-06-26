import type { Article } from '../types';

const article: Article = {
  id: 24,
  title: 'Serve il file llms.txt per farsi citare dalle AI? I dati dicono…',
  metaTitle: 'Serve il file llms.txt per le AI? Cosa dicono i dati | DigitiNexus',
  slug: 'llms-txt-serve-davvero',
  metaDescription:
    'llms.txt serve davvero a farsi citare dalle AI? La posizione di Google e i dati reali, senza dogmi, e cosa conviene fare.',
  capsule:
    'Oggi llms.txt non porta citazioni: Google dichiara di non usarlo e i test mostrano che riceve circa lo 0,1% delle richieste dei bot AI. È un complemento facoltativo, non una priorità.',
  keywordPrimary: 'llms.txt',
  keywordsSecondary: ['llms txt serve', 'llms.txt funziona', 'file per AI'],
  cluster: 'c3',
  intent: 'I·TOFU',
  authorId: 'filippo-gentili',
  publishDate: '2026-07-27',
  updatedDate: '2026-07-27',
  status: 'published',
  cover: {
    src: '/blog/covers/llms-txt-serve-davvero.webp',
    alt: 'Il file llms.txt nella root di un sito: serve davvero a farsi citare dalle AI?',
  },
  body: [
    { type: 'h2', text: 'Cos\'è il file llms.txt?' },
    {
      type: 'p',
      lead: true,
      text: 'Il **llms.txt** è un file di testo, in formato Markdown, che metti nella root del sito (su `tuosito.it/llms.txt`) per offrire alle AI una mappa curata dei tuoi contenuti principali. L\'idea è dichiarare, in modo pulito e già sintetizzato, cosa fai e dove trovare le pagine che contano, così che un modello linguistico capisca il sito senza dover scaricare e ripulire l\'HTML.',
    },
    {
      type: 'p',
      text: 'La proposta nasce a metà 2024 da Jeremy Howard (co-fondatore di Answer.AI) e ricalca nel principio il vecchio `robots.txt`: un file convenzionale, leggibile da una macchina, posto sempre nello stesso punto. La differenza è il destinatario. Il robots.txt dice ai crawler dei motori di ricerca cosa possono visitare; il llms.txt vorrebbe dire ai modelli di linguaggio quali contenuti leggere in via prioritaria, già ripuliti da menu, banner e codice.',
    },
    {
      type: 'p',
      text: 'Sulla carta è elegante. Un avvocato potrebbe elencare in poche righe le aree di pratica e i link alle pagine chiave; un commercialista potrebbe puntare ai servizi e alle guide fiscali più aggiornate. Il punto, però, non è se l\'idea sia sensata: è se qualcuno, dall\'altra parte, quel file lo legga davvero.',
    },

    { type: 'h2', text: 'Funziona davvero? Cosa dicono i dati' },
    {
      type: 'p',
      lead: true,
      text: 'No, oggi non funziona come strumento per farsi citare. Nessun grande sistema AI dichiara di usare llms.txt, Google ha confermato di ignorarlo e le misurazioni sul traffico reale dei bot lo confermano: il file viene toccato in una frazione minima delle richieste. È uno standard proposto, non ancora adottato.',
    },
    {
      type: 'p',
      text: 'La posizione più netta arriva da Google. John Mueller, Search Advocate dell\'azienda, ha paragonato il llms.txt al meta tag "keywords": qualcosa che i siti possono compilare, ma che i sistemi non usano per decidere cosa mostrare o citare. Né Google né, allo stato attuale, gli altri principali fornitori di modelli hanno annunciato un supporto ufficiale. In pratica scrivi un file che il destinatario previsto non ha mai promesso di aprire.',
    },
    {
      type: 'p',
      text: 'I numeri sul campo dicono la stessa cosa. Un esperimento di Otterly.ai che ha misurato il traffico dei bot AI ha rilevato che il llms.txt viene toccato in circa lo 0,1% delle loro richieste: i crawler continuano a leggere le pagine HTML normali e ignorano quasi del tutto il file dedicato. Un\'analisi su larga scala di Ahrefs è arrivata a una conclusione coerente: il 97% dei file llms.txt presenti sui siti non risulta mai letto da nessun bot. Due misurazioni indipendenti, stesso verdetto.',
    },
    {
      type: 'table',
      caption: 'llms.txt: cosa dicono fonti e misurazioni (2026)',
      headers: ['Fonte', 'Dato', 'Significato'],
      rows: [
        ['Google (John Mueller)', 'Nessun sistema AI lo usa', 'Paragonato al meta keywords: ignorato'],
        ['Otterly.ai', '0,1% delle richieste bot AI', 'I crawler leggono l\'HTML, non il file'],
        ['Ahrefs', '97% dei file mai letti', 'Quasi nessun bot apre il llms.txt'],
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Lo standard potrebbe essere adottato in futuro: un file pubblico e convenzionale è facile da supportare. Ma una scelta di marketing si fa sui dati di oggi, non su un\'ipotesi. E oggi il llms.txt non porta citazioni.',
    },

    { type: 'h2', text: 'Conviene implementarlo lo stesso?' },
    {
      type: 'p',
      lead: true,
      text: 'Solo se non ti costa quasi nulla e non ti distrae dalle cose che funzionano. Il llms.txt è un file di testo: crearlo richiede poco tempo e non danneggia il sito. Se lo intendi come piccola scommessa su un\'eventuale adozione futura, va bene. Il problema nasce quando lo tratti come una leva di visibilità, perché oggi non lo è.',
    },
    {
      type: 'p',
      text: 'Il rischio concreto non è il file in sé, è il costo opportunità. Le ore spese a curare e tenere aggiornato un llms.txt sono ore tolte a interventi che un impatto misurabile ce l\'hanno: rendere le pagine citabili, marcare i contenuti con i dati strutturati, costruire autorevolezza. Per uno studio professionale con tempo e budget limitati, mettere il llms.txt prima di questi lavori significa ottimizzare la cosa sbagliata.',
    },
    {
      type: 'p',
      text: 'C\'è anche una questione di manutenzione. Un file che elenca le tue pagine principali invecchia: cambi un servizio, riscrivi una guida, sposti un URL, e il llms.txt resta indietro. Un documento disallineato dalla realtà del sito, anche se un giorno venisse letto, racconterebbe una versione vecchia di te. Meglio nessun file che un file che mente.',
    },

    { type: 'h2', text: 'Cosa fare al suo posto?' },
    {
      type: 'p',
      lead: true,
      text: 'Investi sui segnali che le AI usano davvero oggi: contenuti scritti per essere estratti, dati strutturati e autorevolezza riconoscibile. Sono le tre leve che, a differenza del llms.txt, hanno un effetto verificabile su quanto vieni ripreso e citato dai sistemi generativi. Il file dedicato è un complemento facoltativo; questi sono il lavoro vero.',
    },
    {
      type: 'p',
      text: 'Il primo intervento è sul contenuto. Le AI leggono le tue pagine HTML, quindi quelle pagine devono rispondere in modo chiaro e autosufficiente: una frase secca in apertura che dà la risposta, poi lo sviluppo. È il metodo delle capsule di risposta, che rende un paragrafo estraibile e riportabile senza il contesto attorno. Lo trovi spiegato nella [guida ai contenuti citabili dalle AI](/blog/contenuti-citabili-ai-capsule-method).',
    },
    {
      type: 'p',
      text: 'Il secondo è tecnico. I dati strutturati (lo schema markup) dichiarano in modo leggibile dalle macchine cosa contiene una pagina: chi è l\'autore, quali sono le domande e le risposte, di che entità parli. È il modo standard e già supportato per dare contesto alle AI, al posto di un file che nessuno apre. Il dettaglio è nella [guida allo schema markup per le AI](/blog/schema-markup-ai).',
    },
    {
      type: 'list',
      items: [
        '**Contenuti citabili:** capsule di risposta in apertura di ogni sezione, brevi e autosufficienti, così l\'AI può riportarle intere.',
        '**Dati strutturati:** schema Article + FAQPage + Person per dichiarare contenuto, domande e autore in modo leggibile dalle macchine.',
        '**Autorevolezza:** un autore firmato con credenziali, fonti citate e un\'identità coerente sul web aumentano la fiducia dei sistemi generativi.',
        '**Top 10 organica:** le AI pescano le fonti dalle pagine ben posizionate, quindi la SEO resta il biglietto d\'ingresso.',
      ],
    },
    {
      type: 'p',
      text: 'Il quadro completo di come farsi riprendere dai motori generativi, con la differenza rispetto alla SEO classica, è nella [guida alla Generative Engine Optimization](/blog/geo-generative-engine-optimization). È lì che conviene mettere energie, non in un file che oggi resta lettera morta.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Test rapido: prima di curare un llms.txt, copia un tuo paragrafo, incollalo da solo in una chat AI e chiediti se risponde a una domanda precisa senza il contesto attorno. Se la risposta è no, è lì che devi lavorare prima.',
    },
    {
      type: 'cta',
      text: 'Vuoi un sito davvero pronto per le AI, con contenuti citabili e schema markup al posto giusto? Lo costruiamo così, in 1–4 settimane.',
      label: 'Parliamone',
      href: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ',
    },
  ],
  faq: [
    {
      q: 'llms.txt aiuta il ranking su Google?',
      a: 'No. Google ha dichiarato di non usare il file llms.txt per il posizionamento né per le risposte generate: John Mueller lo ha paragonato al vecchio meta keywords, compilabile ma ignorato. Sul ranking organico non ha alcun effetto, diretto o indiretto. Per la visibilità contano contenuti, dati strutturati e autorevolezza.',
    },
    {
      q: 'Le AI leggono davvero il file llms.txt?',
      a: 'Quasi mai. Un esperimento di Otterly.ai ha misurato che riceve circa lo 0,1% delle richieste dei bot AI, e un\'analisi di Ahrefs ha rilevato che il 97% dei file presenti sui siti non viene mai letto. I crawler continuano a leggere le normali pagine HTML, non il file dedicato.',
    },
    {
      q: 'Mi penalizza non avere un llms.txt?',
      a: 'No, non averlo non comporta alcuna penalizzazione. Non è un file obbligatorio né uno standard ufficialmente supportato dai principali sistemi AI. La sua assenza non toglie nulla alla tua visibilità: ciò che conta è che le pagine HTML siano chiare, citabili e marcate con i dati strutturati corretti.',
    },
    {
      q: 'Dove va messo il file llms.txt?',
      a: 'Nella root del sito, raggiungibile su tuosito.it/llms.txt, come avviene per robots.txt. È un file di testo in formato Markdown che elenca i contenuti principali con i relativi link. Crearlo è semplice, ma ricorda che oggi quasi nessun bot lo apre: non sostituisce il lavoro su contenuti e schema.',
    },
  ],
  internalLinks: [
    { slug: 'geo-generative-engine-optimization', anchor: 'Generative Engine Optimization (GEO)' },
    { slug: 'schema-markup-ai', anchor: 'Schema markup per le AI' },
    { slug: 'contenuti-citabili-ai-capsule-method', anchor: 'Contenuti citabili: capsule method' },
  ],
  sources: [
    { label: 'Otterly.ai — The llms.txt experiment (toccato dallo 0,1% delle richieste bot AI)', url: 'https://otterly.ai/blog/the-llms-txt-experiment/' },
    { label: 'Ahrefs — llms.txt study (97% dei file mai letti)', url: 'https://ahrefs.com/blog/llmstxt-study/' },
  ],
};

export default article;
