import type { Article } from '../types';

const article: Article = {
  id: 70,
  title: 'Come si misura una campagna: le metriche che contano',
  metaTitle: 'Le metriche che contano in una campagna Ads | DigitiNexus',
  slug: 'metriche-campagne-ads',
  metaDescription:
    'Quali metriche guardare davvero in advertising (costo per contatto, ROAS, tasso di conversione) e quali sono vanity metric da ignorare.',
  capsule:
    'Le metriche che contano misurano i risultati di business: costo per contatto o acquisizione, tasso di conversione e ritorno sulla spesa. Like e visualizzazioni, da soli, sono vanity metric.',
  keywordPrimary: 'metriche campagne ads',
  keywordsSecondary: ['kpi pubblicità online', 'ROAS CPA CTR'],
  cluster: 'c8',
  intent: 'I·MOFU',
  authorId: 'filippo-gentili',
  publishDate: '2026-08-09',
  updatedDate: '2026-08-09',
  status: 'published',
  cover: {
    src: '/blog/covers/metriche-campagne-ads.webp',
    alt: 'Metriche campagne ads: costo per contatto, tasso di conversione e ROAS su un report di advertising',
  },
  body: [
    { type: 'h2', text: 'Metriche di business e vanity metric: cosa guardare?' },
    {
      type: 'p',
      lead: true,
      text: 'Le metriche delle campagne ads che contano misurano risultati di business: quanti contatti o vendite ha portato la campagna e a quale costo. Le vanity metric misurano l\'attenzione: like, follower, visualizzazioni, copertura. Le prime ti dicono se la pubblicità sta funzionando; le seconde, da sole, dicono solo che qualcuno l\'ha vista.',
    },
    {
      type: 'p',
      text: 'Le vanity metric ingannano perché crescono facilmente. Con abbastanza budget, qualsiasi campagna raccoglie visualizzazioni e qualche like: sono il sottoprodotto naturale dell\'essere in giro. Ma una campagna può raggiungere migliaia di persone e non portare un solo cliente. Se il resoconto di fine mese parla solo di copertura e interazioni, non sai ancora nulla di quello che ti interessa davvero.',
    },
    {
      type: 'p',
      text: 'Questo non significa ignorarle del tutto. Impression, copertura e interazioni sono utili come **segnali diagnostici**: aiutano a capire se l\'annuncio viene mostrato e se attira attenzione. Il punto è non usarle come voto finale. Il voto finale lo danno i contatti, le vendite e quanto ti sono costati.',
    },
    {
      type: 'list',
      items: [
        '**Metriche di business**: costo per contatto o acquisizione, tasso di conversione, ritorno sulla spesa.',
        '**Metriche diagnostiche**: CTR, costo per clic, frequenza. Servono a capire dove intervenire.',
        '**Vanity metric**: like, follower, visualizzazioni. Da sole non giustificano un euro di budget.',
      ],
    },

    { type: 'h2', text: 'Quali sono le metriche chiave (CPA, tasso di conversione, ROAS)?' },
    {
      type: 'p',
      lead: true,
      text: 'Le metriche chiave sono tre: il costo per acquisizione (quanto paghi ogni contatto o cliente), il tasso di conversione (quanti visitatori compiono l\'azione che vuoi) e il ROAS (quanti ricavi genera ogni euro speso). Insieme rispondono all\'unica domanda che conta: la campagna si ripaga?',
    },
    {
      type: 'p',
      text: 'Il **costo per acquisizione (CPA)** è la spesa pubblicitaria divisa per il numero di conversioni ottenute: se investi un budget e ricevi un certo numero di richieste di preventivo, il CPA è quanto ti è costata in media ciascuna. È la metrica più concreta per chi vende servizi, perché si confronta direttamente con quanto vale un cliente per te.',
    },
    {
      type: 'p',
      text: 'Il **tasso di conversione** è la percentuale di visitatori che compie l\'azione desiderata: compilare il modulo, prenotare una chiamata, acquistare. Misura la qualità della pagina e dell\'offerta, non dell\'annuncio. Il **ROAS** (return on ad spend) è il rapporto tra i ricavi generati e la spesa pubblicitaria: un ROAS di 4 significa quattro euro di ricavi per ogni euro investito. È la metrica di riferimento per gli e-commerce, dove ogni vendita ha un valore misurabile.',
    },
    {
      type: 'table',
      caption: 'Le metriche chiave di una campagna a confronto',
      headers: ['Metrica', 'Cosa misura', 'A cosa serve'],
      rows: [
        ['CPA (costo per acquisizione)', 'Quanto paghi ogni contatto o cliente', 'Capire se il costo è sostenibile per i tuoi margini'],
        ['Tasso di conversione', 'Quanti visitatori compiono l\'azione', 'Valutare landing page e offerta'],
        ['ROAS', 'Ricavi generati per euro speso', 'Capire se la campagna si ripaga (e-commerce)'],
        ['CTR', 'Quanti vedono l\'annuncio e cliccano', 'Diagnosticare annuncio e pubblico, non il risultato'],
      ],
    },
    {
      type: 'p',
      text: 'Quale CPA è "buono" non è un numero universale: dipende da quanto vale un cliente per la tua attività e dai tuoi margini. È lo stesso ragionamento che guida la scelta dell\'investimento iniziale, e lo trovi sviluppato in [quanto budget serve per le ads](/blog/quanto-budget-ads).',
    },

    { type: 'h2', text: 'Perché il funnel va misurato a tappe?' },
    {
      type: 'p',
      lead: true,
      text: 'Il funnel va misurato a tappe perché il numero finale, da solo, non dice dove sta il problema. Tra l\'annuncio e il cliente ci sono passaggi distinti: visualizzazione, clic, visita alla pagina, contatto. Misurando ogni passaggio scopri esattamente dove si perde il traffico e cosa devi sistemare.',
    },
    {
      type: 'p',
      text: 'Ogni tappa che perde traffico racconta una storia diversa. Se pochi cliccano l\'annuncio (CTR basso), il problema è il messaggio o il pubblico: la promessa non interessa a chi la vede. Se i clic ci sono ma nessuno lascia il contatto, il problema è la pagina di destinazione o l\'offerta: l\'annuncio ha promesso qualcosa che la pagina non mantiene. Se i contatti arrivano ma non diventano clienti, il problema è a valle: qualificazione, tempi di risposta, follow-up.',
    },
    {
      type: 'p',
      text: 'Senza questa lettura a tappe si finisce per "aggiustare" la cosa sbagliata: si rifà l\'annuncio quando il problema era la pagina, o si cambia pagina quando il pubblico era quello sbagliato. Il quadro completo di come annuncio, sito e misurazione lavorano insieme è nella nostra guida al [funnel tra sito web e ads](/blog/funnel-sito-web-ads).',
    },

    { type: 'h2', text: 'Ogni quanto vanno guardati i dati?' },
    {
      type: 'p',
      lead: true,
      text: 'I dati vanno controllati con regolarità, ma le decisioni vanno prese su finestre più lunghe. Le piattaforme pubblicitarie attraversano una fase di apprendimento: hanno bisogno di accumulare conversioni per capire a chi mostrare gli annunci. Stravolgere la campagna ogni giorno riporta quell\'apprendimento al punto di partenza.',
    },
    {
      type: 'p',
      text: 'L\'errore più comune è giudicare troppo presto. Nei primi giorni i numeri ballano: un giorno ottimo e uno pessimo non dicono nulla, sono rumore statistico. Con poche conversioni all\'attivo, qualsiasi conclusione è una scommessa. Serve la pazienza di lasciare che i dati si accumulino, e la disciplina di non toccare tutto al primo risultato deludente: ottimizzare troppo presto è uno degli [errori che bruciano il budget](/blog/errori-che-bruciano-budget-ads) più frequenti.',
    },
    {
      type: 'p',
      text: 'Una cadenza sana, nella nostra esperienza, è questa: un\'occhiata frequente per accorgersi di anomalie evidenti (spesa impazzita, campagna ferma, modulo rotto), una lettura settimanale per capire l\'andamento e decisioni strutturali su base mensile, quando i numeri sono abbastanza solidi da distinguere una tendenza da una fluttuazione.',
    },

    { type: 'h2', text: 'Come dev\'essere un report chiaro?' },
    {
      type: 'p',
      lead: true,
      text: 'Un report chiaro parte dai risultati di business e risponde a quattro domande: quanto abbiamo speso, quanti contatti o vendite abbiamo ottenuto, quanto è costato ciascuno e cosa cambiamo il prossimo mese. Se il report che ricevi parla solo di impression e copertura, hai il diritto di chiedere di più.',
    },
    {
      type: 'p',
      text: 'Il report non è un adempimento, è lo strumento con cui decidi se continuare a investire. Per questo deve essere leggibile da chi non fa advertising di mestiere: numeri essenziali, confronto con il periodo precedente, spiegazione in linguaggio semplice di cosa è stato testato e cosa si è imparato. Le pagine di grafici senza una conclusione sono un modo elegante di non dire niente.',
    },
    {
      type: 'list',
      items: [
        'Spesa del periodo e confronto con il periodo precedente.',
        'Conversioni ottenute (contatti, prenotazioni, vendite) e costo per ciascuna.',
        'Cosa è stato testato e cosa si è imparato.',
        'Prossimi passi proposti, con il perché.',
      ],
    },
    {
      type: 'p',
      text: 'Tutto questo presuppone una misurazione fatta bene: se le conversioni non vengono tracciate correttamente, anche il report più bello racconta una storia sbagliata. Come impostare pixel ed eventi rispettando il consenso degli utenti lo spieghiamo in [tracciare le conversioni a norma privacy](/blog/tracciamento-conversioni-privacy).',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'La domanda più utile da fare a chi gestisce le tue campagne è una sola: "quanto mi costa oggi un contatto, e cosa stiamo facendo per abbassarlo?". Se la risposta è vaga, il problema non sono i dati.',
    },
    {
      type: 'cta',
      text: 'Vuoi capire se le tue campagne stanno davvero rendendo? Guardiamo insieme i numeri, separiamo le metriche che contano dalle vanity metric e ti diciamo cosa sistemare per primo.',
      label: 'Prenota una chiamata',
      href: 'https://calendly.com/digitinexus/30min',
    },
  ],
  faq: [
    {
      q: 'Cos\'è il ROAS?',
      a: 'Il ROAS (return on ad spend) è il rapporto tra i ricavi generati dalla campagna e la spesa pubblicitaria: un ROAS di 4 significa quattro euro di ricavi per ogni euro investito. È la metrica di riferimento per gli e-commerce; per chi vende servizi è spesso più pratico ragionare in costo per contatto.',
    },
    {
      q: 'Quante conversioni servono per capire se una campagna funziona?',
      a: 'Non esiste una soglia magica, ma con poche conversioni ogni conclusione è una scommessa: i numeri piccoli ballano troppo. La regola pratica è giudicare su settimane, non su giorni, e aspettare che le conversioni si accumulino abbastanza da distinguere una tendenza reale da una fluttuazione casuale.',
    },
    {
      q: 'I like e le visualizzazioni contano qualcosa?',
      a: 'Come segnali diagnostici sì: dicono se l\'annuncio viene mostrato e attira attenzione. Come misura del risultato no: una campagna può raccogliere migliaia di visualizzazioni senza portare un solo cliente. Usali per capire dove intervenire, mai per decidere se la campagna merita altro budget.',
    },
    {
      q: 'Ogni quanto si legge un report?',
      a: 'Un controllo frequente serve solo a intercettare anomalie evidenti, come spesa fuori controllo o moduli rotti. La lettura vera è settimanale, per seguire l\'andamento, e le decisioni strutturali si prendono su base mensile, quando i dati sono abbastanza solidi da giustificare un cambio di rotta.',
    },
  ],
  internalLinks: [
    { slug: 'funnel-sito-web-ads', anchor: 'Il funnel tra sito web e ads' },
    { slug: 'quanto-budget-ads', anchor: 'Quanto budget serve per le ads' },
    { slug: 'errori-che-bruciano-budget-ads', anchor: '5 errori che bruciano il budget in advertising' },
    { slug: 'tracciamento-conversioni-privacy', anchor: 'Tracciare le conversioni a norma privacy' },
  ],
  sources: [],
};

export default article;
