import type { Article } from '../types';

const article: Article = {
  id: 59,
  title: 'AI, privacy e GDPR/AI Act: cosa puoi (e non puoi) fare con i dati',
  metaTitle: 'AI, privacy e GDPR/AI Act: cosa fare con i dati | DigitiNexus',
  slug: 'ai-privacy-gdpr',
  metaDescription:
    'Cosa puoi mettere (e cosa no) negli strumenti AI secondo GDPR e AI Act: dati dei clienti, DPA, informativa e DPIA, spiegati semplice.',
  capsule:
    'Con l\'AI puoi trattare liberamente dati non personali; i dati dei clienti vanno anonimizzati o tenuti fuori. Servono strumenti business, un accordo col fornitore (DPA), informativa aggiornata e, spesso, una valutazione d\'impatto (DPIA).',
  keywordPrimary: 'AI e privacy GDPR',
  keywordsSecondary: ['intelligenza artificiale GDPR aziende', 'AI Act PMI'],
  cluster: 'c7',
  isPillar: false,
  intent: 'I·MOFU',
  authorId: 'nicola-palummo',
  publishDate: '2026-09-11',
  updatedDate: '2026-09-11',
  status: 'published',
  cover: {
    src: '/blog/covers/ai-privacy-gdpr.webp',
    alt: 'AI, privacy e GDPR/AI Act: cosa puoi e non puoi fare con i dati dei clienti negli strumenti di intelligenza artificiale',
  },
  body: [
    {
      type: 'p',
      lead: true,
      text: 'Con gli strumenti di AI puoi usare liberamente testi pubblici, bozze e idee, mentre i dati personali dei tuoi clienti vanno anonimizzati o tenuti fuori. Per trattarli in modo conforme servono quattro cose: una versione business con garanzie sul trattamento, un accordo col fornitore (DPA), l\'informativa privacy aggiornata e, nei casi più delicati, una valutazione d\'impatto (DPIA).',
    },
    {
      type: 'p',
      text: 'In Italia l\'adozione dell\'AI corre: tra le imprese con almeno dieci addetti la quota che usa tecnologie di intelligenza artificiale è passata dal 6% al 16,4% in due anni (ISTAT, 2025). Più aziende la usano, più cresce il rischio di metterci dentro dati che non dovrebbero uscire. Qui trovi cosa puoi caricare senza pensieri, cosa lasciare fuori e quali adempimenti pratici mettono al riparo la tua azienda.',
    },

    { type: 'h2', text: 'Quali regole valgono quando usi l\'AI con i dati?' },
    {
      type: 'p',
      lead: true,
      text: 'Quando tratti dati personali con l\'AI valgono tre livelli di regole: il GDPR, il regolamento europeo sull\'intelligenza artificiale (AI Act) e le norme italiane di attuazione. Il GDPR è la cornice generale sui dati personali; l\'AI Act classifica i sistemi di AI per livello di rischio. Insieme stabiliscono cosa puoi fare e con quali tutele.',
    },
    {
      type: 'p',
      text: 'Il GDPR (Regolamento generale sulla protezione dei dati) è la legge europea che disciplina il trattamento dei dati personali, cioè ogni informazione che identifica una persona. Si applica anche quando quei dati passano per uno strumento di AI: il fatto che il trattamento sia "automatico" o "intelligente" non lo mette al di fuori delle regole. L\'AI Act, il regolamento europeo sull\'intelligenza artificiale, aggiunge un secondo piano: classifica i sistemi per rischio e impone obblighi crescenti a chi li sviluppa e a chi li usa.',
    },
    {
      type: 'p',
      text: 'A questi due livelli si affianca la normativa italiana di recepimento e il ruolo del Garante per la protezione dei dati personali, che vigila sul trattamento e ha già dato indicazioni sull\'uso dei sistemi di AI. La direzione è chiara: trasparenza verso le persone, minimizzazione dei dati e responsabilità di chi tratta. L\'AI Act è entrato in vigore il 1° agosto 2024 e si applica in modo scaglionato: i divieti sulle pratiche di AI vietate dal 2 febbraio 2025, gli obblighi per i modelli di AI per finalità generali dal 2 agosto 2025, la maggior parte delle regole (inclusi i sistemi ad alto rischio dell\'Allegato III) dal 2 agosto 2026 e gli ultimi obblighi dal 2 agosto 2027. Sono date in evoluzione: a livello europeo sono allo studio possibili rinvii (il pacchetto "Digital Omnibus"), quindi verifica il calendario aggiornato alla data in cui leggi, presso il Garante o su EUR-Lex, prima di decisioni operative.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Questa è informazione generale, non consulenza legale. Scadenze, obblighi specifici e riferimenti normativi (calendario di applicazione dell\'AI Act, normativa italiana di recepimento, provvedimenti del Garante) cambiano nel tempo: prima di decidere, verifica le scadenze e gli obblighi vigenti presso il Garante per la protezione dei dati personali e, sui casi delicati, con un consulente privacy o un legale.',
    },

    { type: 'h2', text: 'Cosa puoi mettere nei prompt senza problemi?' },
    {
      type: 'p',
      lead: true,
      text: 'Nei prompt puoi mettere liberamente tutto ciò che non identifica una persona: testi già pubblici, bozze, idee, esempi generici, dati interni aggregati o anonimizzati. Su questo materiale l\'AI lavora senza vincoli di privacy, perché non c\'è alcun dato personale in gioco. È la zona in cui sfrutti lo strumento a pieno, senza pensieri.',
    },
    {
      type: 'p',
      text: 'In pratica puoi farti scrivere la bozza di una email, riassumere un testo pubblico, generare idee per un articolo, riformulare una descrizione di prodotto, impostare la struttura di un documento. Tutte attività in cui il contenuto è tuo o pubblico e non riguarda persone identificabili. Se devi lavorare su un caso reale, sostituisci nomi, importi e riferimenti con segnaposto generici ("il cliente", "la fattura X"): ottieni lo stesso risultato senza esporre dati. Per scrivere istruzioni efficaci senza esagerare con i dettagli inutili, parti dalla guida ai [prompt efficaci per il lavoro](/blog/prompt-efficaci-lavoro).',
    },

    { type: 'h2', text: 'Cosa NON devi mettere negli strumenti di AI?' },
    {
      type: 'p',
      lead: true,
      text: 'Non devi caricare dati personali dei clienti, dati sensibili (salute, opinioni, situazione economica delle persone) e documenti riservati come contratti, atti o informazioni coperte da segreto. Il rischio non è teorico: questi dati possono finire fuori dal tuo controllo, essere conservati dal fornitore o usati per addestrare il modello.',
    },
    {
      type: 'p',
      text: 'Il problema è che incollare dati nell\'AI è diventato un automatismo. Secondo le rilevazioni di LayerX, una quota molto ampia degli utenti aziendali incolla dati negli strumenti di AI generativa nel corso del mese, e una parte significativa di questi contenuti include informazioni potenzialmente sensibili. Si copia una email con i dati di un cliente per farsela riassumere, si incolla un contratto per farsi spiegare una clausola: gesti rapidi che, su uno strumento pubblico, equivalgono a far uscire quei dati dall\'azienda.',
    },
    {
      type: 'p',
      text: 'La regola pratica è semplice: prima di incollare, chiediti se quel testo identifica una persona o è riservato. Se la risposta è sì, anonimizza (togli nomi, importi, riferimenti) oppure non caricarlo affatto. E se hai dubbi sull\'attendibilità di quello che l\'AI ti restituisce, ricorda che può anche inventare: trovi il perché nella guida alle [allucinazioni dell\'AI](/blog/allucinazioni-ai).',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Mai usare un account personale gratuito per lavorare su dati dei clienti. Su quelle versioni i contenuti possono essere conservati e usati per addestrare il modello: è la via più rapida per perdere il controllo di un dato.',
    },

    { type: 'h2', text: 'Quali sono i 3 adempimenti pratici da sistemare?' },
    {
      type: 'p',
      lead: true,
      text: 'Tre adempimenti coprono la maggior parte dei casi: usare la versione business o aziendale dello strumento (con disattivazione dell\'uso dei dati per l\'addestramento), firmare con il fornitore un accordo sul trattamento dei dati (DPA) e aggiornare l\'informativa privacy per dire che usi sistemi di AI. Sono passaggi una tantum che mettono in regola l\'uso quotidiano.',
    },
    {
      type: 'p',
      text: 'Il primo è la versione giusta dello strumento. Le edizioni business o aziendali esistono proprio perché offrono garanzie diverse: in genere permettono di disattivare l\'uso dei tuoi contenuti per addestrare il modello e prevedono regole più chiare di conservazione. È il primo accorgimento, e da solo riduce gran parte del rischio rispetto a un account gratuito pensato per il pubblico.',
    },
    {
      type: 'p',
      text: 'Il secondo è il DPA (Data Processing Agreement), l\'accordo con cui il fornitore dello strumento si impegna a trattare i dati per tuo conto rispettando il GDPR. Se l\'AI elabora dati personali dei tuoi clienti, il fornitore agisce come responsabile del trattamento e questo accordo va firmato: spesso i fornitori business lo mettono a disposizione, va solo accettato e conservato. Il terzo è l\'informativa privacy: chi raccoglie i dati ha diritto di sapere come vengono trattati, quindi se usi l\'AI su dati personali devi dirlo nell\'informativa che dai a clienti e contatti.',
    },
    {
      type: 'list',
      items: [
        '**Versione business e niente addestramento:** usa l\'edizione aziendale e disattiva l\'uso dei tuoi dati per allenare il modello.',
        '**DPA con il fornitore:** firma e conserva l\'accordo sul trattamento dei dati, così il fornitore opera come responsabile in regola col GDPR.',
        '**Informativa aggiornata:** indica nell\'informativa privacy che tratti dati con sistemi di AI e a quali finalità.',
      ],
    },

    { type: 'h2', text: 'Quando serve una DPIA (valutazione d\'impatto)?' },
    {
      type: 'p',
      lead: true,
      text: 'La DPIA serve quando un trattamento può comportare un rischio elevato per i diritti delle persone, ad esempio quando tratti dati su larga scala, dati sensibili o usi l\'AI per decisioni che incidono sulle persone. È una valutazione preventiva che descrive il trattamento, ne misura i rischi e indica le misure per ridurli.',
    },
    {
      type: 'p',
      text: 'La DPIA (valutazione d\'impatto sulla protezione dei dati) è il documento previsto dal GDPR per i trattamenti più delicati: non serve per ogni uso dell\'AI, ma diventa opportuna quando combini intelligenza artificiale e dati personali in scenari ad alto rischio. Esempi tipici: profilazione automatica dei clienti, analisi su grandi volumi di dati personali, sistemi che influenzano decisioni rilevanti. Quando rientri in questi casi, la valutazione va fatta prima di avviare il trattamento, non dopo.',
    },
    {
      type: 'p',
      text: 'Capire se il tuo caso richiede una DPIA dipende dalla natura dei dati e dalle finalità: una valutazione da fare con un consulente privacy, soprattutto se tratti dati di molte persone o categorie particolari.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Informazione generale, non consulenza legale. I criteri che fanno scattare l\'obbligo di DPIA e le indicazioni del Garante sono soggetti ad aggiornamento: prima di decidere se il tuo trattamento la richiede, verifica le scadenze e gli obblighi vigenti presso il Garante e valuta il caso con un consulente.',
    },

    { type: 'h2', text: 'Quali errori comuni far evitare al tuo team?' },
    {
      type: 'p',
      lead: true,
      text: 'Gli errori più frequenti sono due: usare account personali gratuiti per lavorare su dati aziendali e copia-incollare dati dei clienti negli strumenti pubblici per comodità. Entrambi nascono dalla fretta, non dalla cattiva volontà, e si prevengono con una regola chiara e uno strumento aziendale a disposizione di tutti.',
    },
    {
      type: 'p',
      text: 'Il primo errore è il "shadow AI": collaboratori che usano il loro account personale per fare prima, senza che l\'azienda lo sappia. Si risolve dando a tutti lo strumento giusto, quello business, e spiegando perché conta. Il secondo è incollare dati reali per pigrizia: il rimedio è l\'abitudine ad anonimizzare prima di caricare, resa semplice da pochi esempi pratici. Una pagina di istruzioni interne ("cosa puoi e non puoi mettere nell\'AI") vale più di un divieto generico.',
    },
    {
      type: 'p',
      text: 'Se nella tua azienda l\'AI tocca anche il contatto con i clienti, ad esempio un assistente sul sito, le stesse regole valgono per i dati raccolti lì: trovi come impostarlo bene nella guida al [chatbot AI per il sito](/blog/chatbot-ai-sito-web). Il principio non cambia mai: l\'AI accelera il lavoro, ma la responsabilità sui dati resta tua e va governata con poche regole semplici e applicate da tutti.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Scrivi una pagina interna di una facciata: cosa si può mettere nell\'AI, cosa no, quale strumento usare. È il modo più rapido per allineare il team ed evitare che ognuno improvvisi con dati delicati.',
    },

    {
      type: 'cta',
      text: 'Vuoi usare l\'AI in azienda senza esporre i dati dei tuoi clienti? Mettiamo a punto strumenti, regole e adempimenti su misura, in modo chiaro e applicabile dal team.',
      label: 'Parliamone',
      href: 'https://calendly.com/digitinexus/30min',
    },
  ],
  faq: [
    {
      q: 'Posso usare ChatGPT con i dati dei clienti?',
      a: 'Solo con cautela. Sugli account personali gratuiti i contenuti possono essere conservati e usati per addestrare il modello, quindi evita i dati dei clienti. Usa la versione business con uso dei dati per l\'addestramento disattivato, oppure anonimizza nomi e riferimenti prima di caricarli. Nel dubbio sui dati delicati, non caricarli.',
    },
    {
      q: 'Cos\'è il DPA?',
      a: 'Il DPA (Data Processing Agreement) è l\'accordo con cui il fornitore dello strumento di AI si impegna a trattare i dati per tuo conto rispettando il GDPR, come responsabile del trattamento. Se l\'AI elabora dati personali dei tuoi clienti, va firmato e conservato: i fornitori business di solito lo mettono a disposizione.',
    },
    {
      q: 'Devo aggiornare la privacy policy se uso l\'AI?',
      a: 'Sì, se tratti dati personali con l\'AI. Le persone hanno diritto di sapere come vengono trattati i loro dati, quindi l\'informativa privacy deve indicare che usi sistemi di intelligenza artificiale e con quali finalità. È un aggiornamento una tantum che mette in chiaro il trattamento verso clienti e contatti.',
    },
    {
      q: 'Cos\'è la DPIA?',
      a: 'La DPIA è la valutazione d\'impatto sulla protezione dei dati prevista dal GDPR per i trattamenti che possono comportare un rischio elevato per le persone. Serve, ad esempio, con dati sensibili, profilazione o grandi volumi di dati personali. Va fatta prima di avviare il trattamento, meglio se con un consulente privacy.',
    },
  ],
  internalLinks: [
    { slug: 'intelligenza-artificiale-per-aziende', anchor: 'Intelligenza artificiale per la tua azienda' },
    { slug: 'prompt-efficaci-lavoro', anchor: 'Prompt efficaci per il lavoro' },
    { slug: 'chatbot-ai-sito-web', anchor: 'Chatbot AI per il sito' },
    { slug: 'ai-studi-professionali', anchor: 'AI per studi professionali' },
  ],
  sources: [],
};

export default article;
