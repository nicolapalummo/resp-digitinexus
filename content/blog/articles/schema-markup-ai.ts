import type { Article } from '../types';

const article: Article = {
  id: 21,
  title: 'Schema markup che le AI capiscono: Article, FAQPage, Person',
  metaTitle: 'Schema markup che le AI capiscono: la guida | DigitiNexus',
  slug: 'schema-markup-ai',
  metaDescription:
    'Quali schema JSON-LD usare per farsi capire da Google e dalle AI: Article, FAQPage, Person, Organization, con esempi pratici.',
  capsule:
    'Lo schema markup è codice JSON-LD che spiega i tuoi contenuti a motori e AI. I tipi più utili sono Article, FAQPage, Person e Organization: rendono la pagina più leggibile dalle macchine e più facile da estrarre nelle risposte generate.',
  keywordPrimary: 'schema markup',
  keywordsSecondary: ['json-ld faq', 'dati strutturati', 'structured data SEO'],
  cluster: 'c3',
  intent: 'I·MOFU',
  authorId: 'filippo-gentili',
  publishDate: '2026-08-17',
  updatedDate: '2026-08-17',
  status: 'published',
  cover: {
    src: '/blog/covers/schema-markup-ai.webp',
    alt: 'Schema markup in JSON-LD: i dati strutturati che spiegano una pagina web a Google e alle AI',
  },
  body: [
    { type: 'h2', text: 'Cos\'è lo schema markup (e perché aiuta le AI)?' },
    {
      type: 'p',
      lead: true,
      text: 'Lo **schema markup** è un blocco di codice, di solito in formato **JSON-LD**, che descrive in modo esplicito cosa contiene una pagina: chi è l\'autore, qual è il titolo, quali sono le domande e le risposte. Non cambia ciò che vede l\'utente: parla alle macchine. Motori di ricerca e AI lo leggono per capire la pagina senza doverla interpretare a tentoni.',
    },
    {
      type: 'p',
      text: 'La differenza è tutta nell\'estrazione. Un\'AI che genera una risposta deve prendere pezzi di testo da più fonti e ricomporli in modo affidabile. Se la tua pagina dichiara "questo è un articolo, questo è l\'autore, queste sono le FAQ", il lavoro di estrazione diventa più sicuro: il modello sa dove guardare e cosa sta leggendo, invece di indovinare dalla struttura HTML. Markup chiaro significa contenuto più facile da citare correttamente.',
    },
    {
      type: 'p',
      text: 'Il vocabolario è quello di schema.org, lo standard condiviso da Google, Microsoft e gli altri grandi motori. Tu scegli i "tipi" che descrivono il tuo contenuto (Article, FAQPage, Person, Organization) e li dichiari nel codice. Per un articolo di blog firmato con un blocco di domande frequenti, questi quattro coprono la maggior parte del lavoro. Gli altri tipi servono in casi più specifici.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Lo schema markup non garantisce un posizionamento migliore: aiuta i motori e le AI a capire e mostrare meglio i tuoi contenuti. È un acceleratore di comprensione, non una scorciatoia di ranking.',
    },

    { type: 'h2', text: 'Article e BlogPosting: come marcare un articolo?' },
    {
      type: 'p',
      lead: true,
      text: 'Article (o la sua variante BlogPosting) è lo schema base di ogni pagina editoriale. Dichiara che la pagina è un articolo e descrive i suoi attributi chiave: titolo, autore, date di pubblicazione e aggiornamento, immagine, editore. È il primo tipo da aggiungere, perché dà a motori e AI il contesto minimo per trattare la pagina come un contenuto autorevole e datato.',
    },
    {
      type: 'p',
      text: 'I campi che contano di più sono pochi e concreti. `headline` per il titolo, `author` collegato a una persona reale, `datePublished` e `dateModified` per la freschezza, `image` e `publisher` per l\'identità del brand. La data di aggiornamento, in particolare, è un segnale che le AI usano per preferire contenuti recenti su temi che cambiano in fretta, come la SEO o le normative.',
    },
    {
      type: 'list',
      items: [
        '`@type`: "Article" oppure "BlogPosting" per i post di blog.',
        '`headline`: il titolo della pagina, coerente con l\'H1.',
        '`author`: collegato a un blocco Person (vedi sotto), non solo un nome in chiaro.',
        '`datePublished` e `dateModified`: data di pubblicazione e ultimo aggiornamento.',
        '`image` e `publisher`: immagine di copertina e identità dell\'editore.',
      ],
    },
    {
      type: 'p',
      text: 'Un esempio pratico: per la guida di un commercialista su una scadenza fiscale, marcare `dateModified` con la data dell\'ultima revisione segnala che il contenuto è aggiornato all\'anno corrente. Su un tema dove un\'informazione vecchia è un\'informazione sbagliata, è proprio il dettaglio che spinge un\'AI a fidarsi della tua pagina invece che di una concorrente non datata.',
    },

    { type: 'h2', text: 'FAQPage: come strutturare le domande e risposte?' },
    {
      type: 'p',
      lead: true,
      text: 'FAQPage marca un blocco di domande e risposte come tale, dichiarando esplicitamente "questa è una domanda, questa è la sua risposta". È lo schema che più aiuta l\'estrazione: ogni coppia Q&A è già un\'unità autosufficiente, esattamente il formato che un\'AI cerca quando deve riportare una risposta secca a una domanda specifica.',
    },
    {
      type: 'p',
      text: 'La logica è semplice: marcare le FAQ aiuta i motori e le AI a riconoscere e isolare le coppie domanda-risposta, e questo si associa a una probabilità più alta di vederle riprese nelle risposte generate. Il motivo è strutturale. Un\'AI che risponde a "serve un plugin per lo schema?" preferisce attingere da un blocco già etichettato come domanda con la sua risposta, piuttosto che ritagliare il senso da un paragrafo discorsivo. Tu gli consegni il pezzo già pronto.',
    },
    {
      type: 'p',
      text: 'Perché funzioni, due regole. Primo: le domande e risposte marcate devono essere davvero visibili in pagina, non nascoste solo nel codice (Google considera spam il markup non corrispondente al contenuto). Secondo: scrivi risposte brevi e complete, da 40 a 55 parole, che abbiano senso anche lette da sole. È lo stesso principio delle capsule citabili: ogni risposta è un\'unità che l\'AI può riportare senza tagliare nulla.',
    },
    {
      type: 'list',
      items: [
        '`@type`: "FAQPage" per il contenitore, "Question" per ogni domanda, "Answer" per la risposta.',
        '`name`: il testo della domanda, formulato come la cercherebbe un utente.',
        '`acceptedAnswer`: la risposta, breve e autosufficiente (40–55 parole).',
        'Coerenza obbligatoria: ogni Q&A marcata deve comparire visibile nella pagina.',
      ],
    },
    {
      type: 'p',
      text: 'Il metodo per scrivere risposte che le AI riprendono volentieri, applicabile sia alle FAQ sia ai paragrafi, è nella [guida ai contenuti citabili](/blog/contenuti-citabili-ai-capsule-method).',
    },

    { type: 'h2', text: 'Person e Organization: come collegare autore e brand?' },
    {
      type: 'p',
      lead: true,
      text: 'Person descrive l\'autore come entità reale; Organization descrive il brand che pubblica. Insieme dicono a motori e AI "questo contenuto ha un nome e una firma riconoscibili". È il passaggio che lega la pagina a un\'identità coerente, requisito sempre più importante perché le AI privilegiano fonti firmate e identificabili rispetto a contenuti anonimi.',
    },
    {
      type: 'p',
      text: 'Il campo decisivo è `sameAs`: l\'elenco dei profili pubblici che confermano l\'identità (LinkedIn, sito personale, profili professionali). Collegando l\'autore ai suoi profili e il brand ai suoi canali, costruisci quella che si chiama coerenza d\'entità: lo stesso nome, le stesse credenziali, ovunque. È il segnale che permette a un motore di capire che la "DigitiNexus" del tuo articolo è la stessa azienda che trova altrove, e non un omonimo.',
    },
    {
      type: 'list',
      items: [
        '`Person`: `name`, `jobTitle`, `url` del profilo autore e `sameAs` ai profili pubblici.',
        '`Organization`: `name`, `logo`, `url` e `sameAs` ai canali ufficiali del brand.',
        'Collega l\'`author` dell\'Article al blocco Person: una firma reale, non un nome generico.',
        'Mantieni nome, ruolo e profili identici su tutte le pagine: è la coerenza d\'entità.',
      ],
    },
    {
      type: 'p',
      text: 'Questo lavoro è la base dell\'autorevolezza percepita. Il quadro completo, con il legame tra autore, credenziali e fiducia delle AI, è nella [guida a E-E-A-T e autorità dell\'autore](/blog/e-e-a-t-author-authority).',
    },

    { type: 'h2', text: 'DefinedTerm e HowTo: glossari e procedure?' },
    {
      type: 'p',
      lead: true,
      text: 'DefinedTerm e HowTo sono schemi specializzati per due tipi di contenuto ricorrenti: le definizioni e i procedimenti passo-passo. DefinedTerm marca un termine e la sua definizione, utile per i glossari; HowTo marca una procedura con i suoi step. Entrambi servono a una cosa sola: rendere ancora più esplicito un contenuto che già si presta a essere estratto come unità.',
    },
    {
      type: 'p',
      text: 'DefinedTerm è prezioso quando definisci entità tecniche. Se in un articolo spieghi cosa sono i Core Web Vitals o la GEO, marcare la definizione come DefinedTerm la rende un\'unità riconoscibile, esattamente ciò che un\'AI cerca quando deve rispondere a "cos\'è...". Per uno studio professionale, un glossario di termini del proprio settore marcato così diventa una fonte pulita da cui le AI attingono definizioni.',
    },
    {
      type: 'p',
      text: 'HowTo segue la stessa logica per le procedure. Una guida "come fare X in cinque passi" marcata con HowTo dichiara la sequenza degli step, e le AI riprendono più facilmente un procedimento già strutturato. Vale la regola di sempre: marca solo ciò che è davvero visibile e ordinato in pagina. Lo schema descrive il contenuto, non lo sostituisce.',
    },

    { type: 'h2', text: 'Quali errori evitare nello schema markup?' },
    {
      type: 'p',
      lead: true,
      text: 'L\'errore più grave è marcare contenuti che non esistono nella pagina. Se dichiari FAQ nel JSON-LD ma quelle domande non sono visibili all\'utente, Google lo tratta come spam strutturato e può penalizzarti. Lo schema deve sempre rispecchiare ciò che la pagina mostra davvero: è una descrizione fedele, non un trucco per gonfiare il codice.',
    },
    {
      type: 'p',
      text: 'Il secondo errore è l\'incoerenza dei dati. Un nome autore diverso tra Article e Person, una data di aggiornamento che non corrisponde, un\'organizzazione dichiarata in due modi diversi: sono tutte crepe che indeboliscono la fiducia della macchina. Le AI premiano la coerenza d\'entità, quindi ogni dato dichiarato deve combaciare ovunque, dalla pagina al markup ai profili collegati con `sameAs`.',
    },
    {
      type: 'list',
      items: [
        '**Markup non visibile in pagina:** FAQ o contenuti dichiarati nel codice ma assenti per l\'utente. Possibile penalizzazione.',
        '**Dati incoerenti:** nome autore, date o brand diversi tra schema, pagina e profili pubblici.',
        '**Tipo sbagliato:** marcare come Article una pagina prodotto, o come FAQPage un contenuto che non è in forma di Q&A.',
        '**Campi obbligatori mancanti:** uno schema incompleto viene ignorato o segnalato come errore.',
        '**Schema "abbandonato":** date di aggiornamento mai toccate che fanno sembrare il contenuto vecchio.',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Prima di pubblicare, valida ogni pagina con il Rich Results Test di Google e il validatore di Schema.org. Ti dicono se lo schema è corretto, se i campi obbligatori ci sono e se il markup corrisponde al contenuto visibile.',
    },
    {
      type: 'p',
      text: 'Lo schema markup è uno dei mattoni della visibilità nelle risposte generate, ma non lavora da solo: ha senso dentro una strategia più ampia. Il quadro completo è nella [guida alla Generative Engine Optimization](/blog/geo-generative-engine-optimization), dove vedi come si combina con capsule, dati con fonte e autorevolezza dell\'autore.',
    },
    {
      type: 'cta',
      text: 'Vuoi un sito già pronto per Google e per le AI, con schema markup corretto su ogni pagina? Lo costruiamo schema-ready e citabile, in 1–4 settimane.',
      label: 'Parliamone',
      href: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ',
    },
  ],
  faq: [
    {
      q: 'Lo schema markup migliora il ranking su Google?',
      a: 'Non direttamente. Lo schema non è un fattore di posizionamento: aiuta motori e AI a capire meglio i contenuti e può abilitare risultati arricchiti (rich result). L\'effetto sul ranking è indiretto, perché una pagina più comprensibile e cliccabile tende a performare meglio nel tempo.',
    },
    {
      q: 'Meglio JSON-LD o microdata?',
      a: 'JSON-LD. È il formato raccomandato da Google perché tiene lo schema separato dall\'HTML, in un unico blocco facile da gestire e da validare. I microdata, intrecciati al codice della pagina, sono più fragili e scomodi da mantenere. Per un sito nuovo, usa sempre JSON-LD.',
    },
    {
      q: 'Serve un plugin per aggiungere lo schema?',
      a: 'Dipende dalla piattaforma. Su WordPress molti plugin generano lo schema in automatico, ma vanno controllati perché producono spesso markup incompleto o incoerente. Su un sito su misura lo schema si scrive direttamente nel codice, con pieno controllo sui campi e sulla corrispondenza col contenuto visibile.',
    },
    {
      q: 'Come testo se lo schema funziona?',
      a: 'Con due strumenti gratuiti: il Rich Results Test di Google verifica se la pagina è idonea ai risultati arricchiti, il validatore di Schema.org controlla la correttezza del codice. Entrambi segnalano campi mancanti ed errori. Controlla anche che il markup corrisponda al contenuto realmente visibile.',
    },
  ],
  internalLinks: [
    { slug: 'geo-generative-engine-optimization', anchor: 'Generative Engine Optimization (GEO)' },
    { slug: 'e-e-a-t-author-authority', anchor: 'E-E-A-T e autorità dell\'autore' },
    { slug: 'contenuti-citabili-ai-capsule-method', anchor: 'Contenuti citabili: capsule method' },
  ],
  sources: [
    { label: 'Aggarwal et al., "GEO: Generative Engine Optimization", KDD 2024 (arXiv)', url: 'https://arxiv.org/abs/2311.09735' },
  ],
};

export default article;
