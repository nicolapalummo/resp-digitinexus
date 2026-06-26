import type { Article } from '../types';

const article: Article = {
  id: 10,
  title: 'Case study: sito web consegnato in 3 settimane',
  metaTitle: 'Case study: sito web consegnato in 3 settimane | DigitiNexus',
  slug: 'case-study-sito-3-settimane',
  metaDescription:
    'Un caso reale: come abbiamo progettato e lanciato un sito di qualità in 3 settimane, fase per fase, con il metodo che rende possibile la velocità.',
  capsule:
    'In 3 settimane abbiamo portato online un sito completo: settimana 1 brief e design, settimana 2 sviluppo, settimana 3 contenuti, test e lancio. La rapidità è nata dal metodo, non dal taglio della qualità.',
  keywordPrimary: 'case study realizzazione sito',
  keywordsSecondary: ['sito consegnato in 3 settimane', 'esempio progetto sito'],
  cluster: 'c1',
  intent: 'C·BOFU',
  authorId: 'nicola-palummo',
  publishDate: '2026-09-30',
  updatedDate: '2026-09-30',
  status: 'draft',
  cover: {
    src: '/blog/covers/case-study-sito-3-settimane.webp',
    alt: 'Case study di un sito web consegnato in 3 settimane: il processo fase per fase',
  },
  body: [
    { type: 'h2', text: 'Qual era il punto di partenza?' },
    {
      type: 'p',
      lead: true,
      text: 'Il cliente aveva un sito datato che non rappresentava più il valore reale dell\'attività: lento, poco chiaro sui servizi e invisibile da mobile. Serviva una presenza online credibile in fretta, senza per questo accettare un risultato approssimativo.',
    },
    {
      type: 'p',
      text: 'È lo scenario più frequente tra chi ci contatta: non parte da zero, ma da qualcosa che lavora contro di sé. Un sito vecchio comunica trascuratezza prima ancora che il visitatore legga una riga, e ogni settimana in più con quel biglietto da visita online è un costo silenzioso in credibilità e contatti mancati. La domanda del cliente non era \"facciamo un sito\", ma \"sistemiamo questo problema, e presto\".',
    },
    {
      type: 'callout',
      variant: 'placeholder',
      text: 'PLACEHOLDER (dato reale da confermare): nome o settore del cliente, e lo stato di partenza preciso (sito esistente datato, primo sito, MVP). Inserire solo dati verificabili forniti da DigitiNexus.',
    },

    { type: 'h2', text: 'Quali erano gli obiettivi e i vincoli?' },
    {
      type: 'p',
      lead: true,
      text: 'L\'obiettivo era un sito chiaro, veloce e curato che trasmettesse autorità e facilitasse il contatto. Il vincolo principale era il tempo: una finestra ristretta, legata a un\'esigenza concreta del cliente, entro cui il sito doveva essere online e funzionante.',
    },
    {
      type: 'p',
      text: 'Un vincolo di tempo stretto non è un problema in sé: lo diventa quando non c\'è un metodo per reggerlo. La differenza tra una scadenza rispettata e una mancata si decide quasi sempre prima di scrivere una riga di codice, nel modo in cui si organizzano fasi, contenuti e approvazioni. Per questo la prima cosa che abbiamo fatto non è stata progettare, ma definire con precisione cosa includere e cosa no.',
    },
    {
      type: 'list',
      items: [
        '**Chiarezza:** servizi spiegati in modo immediato, comprensibili in pochi secondi.',
        '**Velocità:** un sito che carica in fretta e funziona bene da telefono.',
        '**Autorità:** un design che trasmette professionalità senza appesantire.',
        '**Contatto facile:** percorsi diretti verso la richiesta di informazioni.',
      ],
    },
    {
      type: 'callout',
      variant: 'placeholder',
      text: 'PLACEHOLDER (dato reale da confermare): durata esatta della finestra concordata, eventuale budget e obiettivi numerici fissati con il cliente. Niente cifre inventate: usare solo i dati reali del progetto.',
    },

    { type: 'h2', text: 'Com\'è andato il processo settimana per settimana?' },
    {
      type: 'p',
      lead: true,
      text: 'Il lavoro si è svolto in tre settimane: la prima dedicata a brief e design, la seconda allo sviluppo, la terza a contenuti, test e lancio. Le fasi non erano rigidamente in fila: dove possibile si sovrapponevano, perché aspettare la chiusura di una per aprire la successiva è il primo spreco da eliminare.',
    },
    {
      type: 'table',
      caption: 'La pianificazione del progetto in tre settimane.',
      headers: ['Settimana', 'Cosa è successo'],
      rows: [
        ['Settimana 1', 'Brief, definizione dello scope, struttura delle pagine e design delle schermate chiave'],
        ['Settimana 2', 'Sviluppo del sito, impostazione responsive, prime integrazioni e revisione condivisa'],
        ['Settimana 3', 'Inserimento contenuti, rifiniture, test su dispositivi, SEO di base e lancio'],
      ],
    },
    {
      type: 'p',
      text: 'Nella settimana 1 abbiamo concordato il perimetro e disegnato le pagine più importanti, così da approvare la direzione visiva prima di sviluppare. Nella settimana 2, mentre costruivamo le pagine già approvate, il cliente preparava i testi mancanti: la sovrapposizione tra il nostro sviluppo e la sua raccolta di contenuti è il motivo per cui tre settimane di lavoro reale non sono diventate tre settimane di attese in fila.',
    },
    {
      type: 'p',
      text: 'Nella settimana 3 abbiamo inserito i contenuti definitivi e impostato in parallelo i test finali, invece di rimandarli a fine progetto. Questo schema è lo stesso che descriviamo in [sito web in 1–4 settimane](/blog/sito-web-1-4-settimane): il metodo non cambia in base al cliente, cambia la mole di lavoro che ci si fa entrare.',
    },

    { type: 'h2', text: 'Cosa ha reso possibile la velocità?' },
    {
      type: 'p',
      lead: true,
      text: 'La velocità è nata da quattro fattori che hanno lavorato insieme: uno scope chiaro deciso il primo giorno, contenuti raccolti in tempo, un decisore unico lato cliente e un team dedicato lato nostro. Tolto anche uno solo, le tre settimane non sarebbero state realistiche.',
    },
    {
      type: 'list',
      items: [
        '**Scope chiaro:** abbiamo definito fin dall\'inizio quali pagine e quali funzioni includere, evitando le richieste che si accumulano in corsa e fanno slittare la consegna.',
        '**Contenuti pronti in tempo:** testi e immagini raccolti durante lo sviluppo, non a singhiozzo. I contenuti in ritardo sono la causa numero uno dei ritardi di progetto.',
        '**Decisore unico:** una sola persona approvava, così le richieste non si contraddicevano e nessuna decisione restava in sospeso.',
        '**Team dedicato:** chi seguiva il progetto non lo gestiva in mezzo ad altri dieci, e questo ha tenuto il lavoro concentrato e continuo.',
      ],
    },
    {
      type: 'p',
      text: 'La leva che ha pesato di più è stata la collaborazione sui contenuti. Quando testi e foto arrivano nelle finestre giuste, lo sviluppo non si ferma mai ad aspettare. È la stessa logica che approfondiamo in [quanto tempo ci vuole per fare un sito web](/blog/quanto-tempo-fare-sito-web): il collo di bottiglia non è quasi mai chi sviluppa, ma il flusso di informazioni e decisioni che deve raggiungerlo in tempo.',
    },

    { type: 'h2', text: 'Quali scelte di design e tecniche hanno fatto la differenza?' },
    {
      type: 'p',
      lead: true,
      text: 'Abbiamo lavorato su tre fronti: una struttura che porta subito al messaggio chiave, un design pulito e coerente con l\'identità del cliente, e una base tecnica curata su velocità e mobile. Sono le scelte che distinguono un sito fatto in fretta da un sito fatto bene in poco tempo.',
    },
    {
      type: 'p',
      text: 'Sul design, abbiamo puntato sulla chiarezza più che sulla decorazione: gerarchia visiva ordinata, testi leggibili, percorsi evidenti verso il contatto. Un [design premium](/blog/design-premium-sito-web) non è \"più bello\", è coerente, leggibile e orientato all\'obiettivo: è ciò che trasforma un visitatore in un contatto. Sul piano tecnico, abbiamo trattato velocità e resa da mobile come requisiti, non come rifiniture da rimandare: un sito lento o difficile da usare da telefono perde contatti a prescindere dall\'estetica.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'La velocità del nostro metodo agisce sui tempi morti, non sulle rifiniture. Design, performance e SEO di base restano lavorati prima del lancio: è questo che separa una consegna rapida da una consegna affrettata.',
    },

    { type: 'h2', text: 'Quali risultati ha portato il nuovo sito?' },
    {
      type: 'p',
      lead: true,
      text: 'Il sito è andato online entro la scadenza concordata, con una resa coerente su desktop e mobile e una base tecnica curata. I risultati di business misurabili (richieste, contatti, velocità prima e dopo) vanno riportati solo quando confermati dai dati reali del progetto.',
    },
    {
      type: 'callout',
      variant: 'placeholder',
      text: 'PLACEHOLDER (dato reale da confermare): metriche prima/dopo del progetto (tempo di caricamento, contatti o richieste nel periodo, traffico, conversioni). Inserire solo numeri verificabili forniti da DigitiNexus. Niente percentuali o cifre stimate o inventate.',
    },
    {
      type: 'callout',
      variant: 'placeholder',
      text: 'PLACEHOLDER (dato reale da confermare): citazione diretta del cliente sull\'esperienza e sul risultato. Da inserire come blocco quote con il nome o il ruolo, solo se autorizzata e reale.',
    },
    {
      type: 'p',
      text: 'Finché questi dati non sono confermati, ci limitiamo a ciò che è verificabile: la scadenza è stata rispettata e il sito è stato consegnato curato su design, performance e SEO di base. Su DigitiNexus non pubblichiamo numeri che non possiamo dimostrare, perché un risultato non attribuibile a un caso reale vale meno di nessun numero.',
    },

    { type: 'h2', text: 'Cosa puoi replicare di questo progetto?' },
    {
      type: 'p',
      lead: true,
      text: 'Tre lezioni valgono per qualsiasi sito con una scadenza stretta: definisci lo scope il primo giorno, prepara i contenuti prima dello sviluppo e affida le approvazioni a una sola persona. Sono le condizioni che trasformano una consegna rapida da promessa rischiosa in risultato prevedibile.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Decidi cosa includere all\'inizio:** uno scope chiaro evita le richieste che si accumulano in corsa e fanno slittare la data.',
        '**Raccogli i contenuti prima:** testi e foto pronti durante lo sviluppo sono la leva che sposta di più la data di consegna.',
        '**Nomina un decisore unico:** un\'unica persona che approva tiene le revisioni concentrate e coerenti.',
      ],
    },
    {
      type: 'p',
      text: 'Se il tuo punto di partenza è diverso, cambiano i tempi, non il metodo. Per capire prima budget e durata realistici, leggi [quanto costa un sito web](/blog/quanto-costa-sito-web) e [quanto tempo ci vuole per fare un sito web](/blog/quanto-tempo-fare-sito-web): tempi e investimento si valutano meglio insieme.',
    },
    {
      type: 'cta',
      text: 'Hai una scadenza e vuoi un sito premium in poche settimane? Ti diciamo subito se è fattibile e con quali date.',
      label: 'Parliamone',
      href: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ',
    },
  ],
  faq: [
    {
      q: 'Si può sempre fare un sito in 3 settimane?',
      a: 'No, dipende dal progetto. Una landing page o un sito vetrina ben definito ci stanno, se contenuti e approvazioni arrivano in tempo. Un e-commerce ampio o un portale complesso richiedono più tempo, perché la mole di lavoro e i test crescono. Forzare quei progetti in tre settimane li renderebbe fragili, non veloci.',
    },
    {
      q: 'Cosa è servito dal cliente per restare nei tempi?',
      a: 'Tre cose: contenuti pronti durante lo sviluppo, feedback rapidi raccolti in finestre precise e un decisore unico. I contenuti in ritardo sono la causa numero uno dei ritardi di progetto, quindi prepararli prima è la mossa che pesa di più. Senza queste condizioni, nessun metodo regge una scadenza stretta.',
    },
    {
      q: 'La qualità ne ha risentito?',
      a: 'No, perché la velocità ha agito sui tempi morti, non sulle rifiniture. Design premium, performance e SEO di base sono stati lavorati prima del lancio, non rimandati. Una consegna rapida peggiora la qualità solo quando salta dei passaggi: qui i passaggi ci sono stati tutti, concentrati in un processo definito senza attese inutili.',
    },
    {
      q: 'Quanto è costato il progetto?',
      a: 'Il costo dipende da pagine, contenuti e personalizzazione del design, quindi non esiste un prezzo unico valido per ogni caso. Per orientarti sulle fasce reali e capire cosa incide sul preventivo, leggi la nostra guida su quanto costa un sito web. Tempi e budget conviene sempre valutarli insieme, non separati.',
    },
  ],
  internalLinks: [
    { slug: 'sito-web-1-4-settimane', anchor: 'Sito web in 1–4 settimane: come è possibile' },
    { slug: 'quanto-tempo-fare-sito-web', anchor: 'Quanto tempo ci vuole per fare un sito web' },
    { slug: 'quanto-costa-sito-web', anchor: 'Quanto costa un sito web nel 2026' },
    { slug: 'design-premium-sito-web', anchor: 'Cos\'è un design premium' },
  ],
  sources: [],
  hasBlockingPlaceholder: true,
};

export default article;
