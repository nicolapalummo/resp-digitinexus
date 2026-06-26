import type { Article } from '../types';

const article: Article = {
  id: 48,
  title: 'RAG spiegato semplice: far rispondere l\'AI con i dati della tua azienda',
  metaTitle: 'RAG: l\'AI che risponde con i dati della tua azienda | DigitiNexus',
  slug: 'rag-ai-dati-azienda',
  metaDescription:
    'Cos\'è il RAG spiegato semplice: come un assistente AI risponde usando i documenti e il sito della tua azienda, con esempi.',
  capsule:
    'Il RAG (Retrieval-Augmented Generation) collega l\'AI ai tuoi documenti e al tuo sito: così risponde con informazioni reali della tua azienda, non solo con la sua conoscenza generica.',
  keywordPrimary: 'RAG intelligenza artificiale',
  keywordsSecondary: ['AI con i propri dati', 'knowledge base AI', 'assistente AI aziendale'],
  cluster: 'c7',
  intent: 'I·MOFU',
  authorId: 'nicola-palummo',
  publishDate: '2026-06-19',
  updatedDate: '2026-06-19',
  status: 'published',
  cover: {
    src: '/blog/covers/rag-ai-dati-azienda.webp',
    alt: 'RAG spiegato semplice: l\'AI che risponde con i documenti e i dati della tua azienda',
  },
  body: [
    { type: 'h2', text: 'Cos\'è il RAG (in parole semplici)' },
    {
      type: 'p',
      lead: true,
      text: 'Il RAG è una tecnica che fa lavorare l\'AI in due tempi: prima **recupera** le informazioni giuste dai tuoi documenti, poi **genera** la risposta basandosi su quelle. Invece di rispondere a memoria con la sua conoscenza generica, l\'AI consulta una fonte reale e parla solo di ciò che trova lì.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: '**RAG (Retrieval-Augmented Generation):** tecnica che collega un modello di intelligenza artificiale a una raccolta di documenti aziendali. Prima di rispondere, il sistema cerca i passaggi più pertinenti nei tuoi contenuti e li passa al modello, che li usa come base per formulare una risposta fondata su informazioni reali e verificabili, non solo sulla sua conoscenza generale.',
    },
    {
      type: 'p',
      text: 'Pensa a un assistente nuovo, bravissimo a scrivere ma che non conosce la tua azienda. Senza RAG ti risponde a braccio, con quello che ha imparato in generale. Con il RAG, prima di aprire bocca va in archivio, tira fuori il documento giusto, lo legge e solo dopo formula la risposta. Stesso assistente, ma ora parla con i tuoi dati alla mano.',
    },
    {
      type: 'p',
      text: 'La parola "augmented", aumentata, dice tutto: non cambi il cervello dell\'AI, lo affianchi a una memoria esterna che è tua. Il modello resta lo stesso, ma le sue risposte smettono di essere generiche e iniziano a riguardare i tuoi prodotti, i tuoi prezzi, le tue procedure. È la differenza tra un consulente che improvvisa e uno che ha studiato il tuo dossier.',
    },

    { type: 'h2', text: 'Perché serve a un\'azienda' },
    {
      type: 'p',
      lead: true,
      text: 'Serve perché l\'AI da sola non conosce la tua azienda: non sa i tuoi prezzi, le tue policy, le tue procedure interne. Il RAG colma questo vuoto. Le risposte si basano sui tuoi dati reali e il rischio che l\'AI inventi informazioni cala in modo netto, perché parte da un testo concreto invece che dalla memoria.',
    },
    {
      type: 'p',
      text: 'Il problema più costoso di un\'AI generica è che, quando non sa una cosa, tende a inventarla con tono sicuro. In azienda questo è inaccettabile: un cliente che riceve un prezzo sbagliato o una condizione di reso inesistente è un problema, non un aiuto. Il RAG riduce questo rischio perché obbliga l\'AI a rispondere a partire da un documento che hai scritto tu. Il meccanismo per cui le AI inventano lo abbiamo spiegato in [perché l\'AI inventa](/blog/allucinazioni-ai).',
    },
    {
      type: 'p',
      text: 'C\'è anche un vantaggio pratico immediato. Le informazioni della tua azienda cambiano: listini, orari, condizioni. Con il RAG aggiorni il documento e l\'assistente risponde subito con la versione nuova, senza dover "riaddestrare" nulla. La conoscenza vive nei tuoi file, non dentro il modello: la controlli tu, la aggiorni tu, e ogni risposta resta allineata a ciò che è davvero vero oggi.',
    },

    { type: 'h2', text: 'Come funziona, passo per passo' },
    {
      type: 'p',
      lead: true,
      text: 'Il RAG funziona in tre fasi: prima indicizza i tuoi documenti per renderli ricercabili, poi a ogni domanda cerca i passaggi più pertinenti, infine genera la risposta usando solo quei passaggi. Tutto avviene in un istante, ma sotto c\'è una sequenza precisa che vale la pena capire.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Indicizzazione:** i tuoi documenti vengono divisi in piccoli pezzi e organizzati in una raccolta ricercabile, una sorta di archivio ordinato dove ogni passaggio è facile da ritrovare per significato, non solo per parola esatta.',
        '**Ricerca:** quando arriva una domanda, il sistema cerca nell\'archivio i pochi passaggi più pertinenti a quella richiesta, scartando tutto il resto. È il momento in cui l\'assistente "va a consultare la fonte" prima di rispondere.',
        '**Risposta:** i passaggi trovati vengono passati al modello, che li legge e formula una risposta fondata su quel materiale, spesso indicando da dove arriva l\'informazione. Niente fonte pertinente, nessuna risposta inventata.',
      ],
    },
    {
      type: 'p',
      text: 'Un esempio concreto. Carichi il PDF delle tue condizioni di vendita. In fase di indicizzazione viene spezzato in paragrafi ricercabili. Un cliente chiede "posso restituire un prodotto dopo 20 giorni?": il sistema recupera il paragrafo sui resi, lo passa al modello e ottieni una risposta che cita la tua policy reale. La domanda è in linguaggio naturale, la risposta arriva dal tuo documento.',
    },

    { type: 'h2', text: 'Cosa puoi costruire' },
    {
      type: 'p',
      lead: true,
      text: 'Con il RAG costruisci due cose soprattutto: un assistente interno che risponde alle domande del tuo team pescando dai manuali e dalle procedure, e un assistente rivolto ai clienti che risponde sui tuoi contenuti, prodotti e condizioni. In entrambi i casi l\'AI parla con la voce della tua azienda, non con quella generica del modello.',
    },
    {
      type: 'p',
      text: 'L\'assistente interno è spesso il primo passo, perché il valore si vede subito. Un nuovo collaboratore chiede "come gestiamo un reclamo?" e ottiene la procedura aggiornata in pochi secondi, senza cercare in venti cartelle o disturbare un collega. La conoscenza dell\'azienda smette di essere chiusa in documenti che nessuno apre e diventa interrogabile in linguaggio naturale.',
    },
    {
      type: 'p',
      text: 'Sul fronte clienti, il RAG alimenta un assistente che risponde a partire dal tuo sito, dalle tue FAQ e dai tuoi listini: orari, disponibilità, caratteristiche di un servizio, condizioni di un\'offerta. Risponde quando tu non ci sei e lo fa con le tue informazioni, non con risposte di circostanza. Come metterlo in pratica sul sito lo vedi in [chatbot sul sito](/blog/chatbot-ai-sito-web).',
    },
    {
      type: 'list',
      items: [
        '**Assistente interno:** risponde al team su procedure, manuali e policy, riducendo le domande ripetitive.',
        '**Assistente clienti:** risponde sul sito a partire da FAQ, schede prodotto e condizioni reali.',
        '**Supporto alla scrittura:** bozze di email o preventivi basati sui tuoi documenti e sul tuo tono.',
      ],
    },

    { type: 'h2', text: 'Limiti e qualità dei dati' },
    {
      type: 'p',
      lead: true,
      text: 'Il RAG vale quanto i documenti che gli dai: "spazzatura dentro, spazzatura fuori". Se i tuoi file sono confusi, contraddittori o vecchi, anche le risposte lo saranno. Il sistema non corregge le tue informazioni: le recupera e le ripete. La qualità dell\'assistente è la qualità della tua base documentale, non un dettaglio tecnico.',
    },
    {
      type: 'p',
      text: 'Da qui derivano due limiti pratici. Primo: se un\'informazione non è scritta da nessuna parte, l\'assistente non può recuperarla, e un buon sistema lo dice invece di inventare. Secondo: se due documenti si contraddicono, le risposte diventano incoerenti. Per questo il lavoro vero, prima ancora della tecnologia, è mettere ordine nei contenuti: una sola versione aggiornata, chiara e affidabile per ogni informazione.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Prima di costruire un assistente RAG, fai pulizia: elimina i documenti obsoleti, unifica le versioni doppie e correggi le contraddizioni. Un\'ora spesa a sistemare i contenuti vale più di mille ore di tuning tecnico.',
    },
    {
      type: 'p',
      text: 'C\'è poi un tema da affrontare a monte: i dati aziendali e dei clienti vanno trattati nel rispetto delle norme. Dove vivono i documenti, chi può interrogarli e cosa entra nelle risposte sono scelte che riguardano la privacy, non solo l\'efficienza. Come tenere insieme AI e tutela dei dati lo approfondiamo in [AI, privacy e GDPR](/blog/ai-privacy-gdpr).',
    },
    {
      type: 'cta',
      text: 'Vuoi un assistente AI che risponda con i dati reali della tua azienda, sul sito o all\'interno del team? Partiamo dai tuoi documenti e costruiamo qualcosa di concreto.',
      label: 'Parliamone',
      href: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ',
    },
  ],
  faq: [
    {
      q: 'Il RAG serve per forza per un chatbot?',
      a: 'No. Il chatbot è solo uno degli usi. Il RAG serve ogni volta che vuoi un\'AI che risponda con i tuoi dati: un assistente interno per il team, un aiuto alla scrittura di email e preventivi, una ricerca interna sui documenti. Il chatbot sul sito è il caso più visibile, non l\'unico.',
    },
    {
      q: 'I miei dati restano privati?',
      a: 'Dipende da come imposti il sistema. I documenti restano i tuoi e tu decidi dove sono ospitati, chi può interrogarli e quali informazioni entrano nelle risposte. Vanno fatte scelte precise nel rispetto del GDPR, soprattutto quando i contenuti contengono dati di clienti o informazioni riservate.',
    },
    {
      q: 'Quanto è difficile da realizzare?',
      a: 'La parte tecnica è ormai accessibile e non richiede di addestrare un modello da zero. La difficoltà vera è un\'altra: avere documenti ordinati, aggiornati e coerenti. Una base documentale pulita rende il progetto rapido; contenuti confusi lo rallentano molto più di qualsiasi aspetto tecnologico.',
    },
    {
      q: 'Quali documenti posso usare?',
      a: 'Praticamente qualsiasi testo della tua azienda: PDF, schede prodotto, FAQ, manuali, procedure interne, pagine del sito, listini, email tipo. Conta che siano leggibili e aggiornati. Più i documenti sono chiari e privi di contraddizioni, più le risposte dell\'assistente saranno precise e affidabili.',
    },
  ],
  internalLinks: [
    { slug: 'intelligenza-artificiale-per-aziende', anchor: 'Intelligenza artificiale per le aziende' },
    { slug: 'allucinazioni-ai', anchor: 'Perché l\'AI inventa le risposte' },
    { slug: 'chatbot-ai-sito-web', anchor: 'Chatbot AI sul sito web' },
    { slug: 'ai-privacy-gdpr', anchor: 'AI, privacy e GDPR' },
  ],
  sources: [],
};

export default article;
