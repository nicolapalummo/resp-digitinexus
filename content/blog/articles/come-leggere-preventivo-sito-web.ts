import type { Article } from '../types';

const article: Article = {
  id: 6,
  title: 'Come leggere un preventivo per un sito web (voce per voce)',
  metaTitle: 'Come leggere un preventivo per un sito web | DigitiNexus',
  slug: 'come-leggere-preventivo-sito-web',
  metaDescription:
    'Guida voce per voce a un preventivo per un sito web: cosa deve esserci, le voci ambigue da chiarire e le domande giuste da fare prima di firmare.',
  capsule:
    'Un buon preventivo per un sito web specifica voce per voce: design, sviluppo, contenuti, integrazioni, SEO di base, formazione e costi ricorrenti. Le voci vaghe ("ottimizzazione", "extra") vanno sempre chiarite.',
  keywordPrimary: 'preventivo sito web',
  keywordsSecondary: ['cosa include preventivo sito', 'capire preventivo sito'],
  cluster: 'c1',
  intent: 'C·MOFU',
  authorId: 'filippo-gentili',
  publishDate: '2026-08-12',
  updatedDate: '2026-08-12',
  status: 'published',
  cover: {
    src: '/blog/covers/come-leggere-preventivo-sito-web.webp',
    alt: 'Come leggere un preventivo per un sito web: glossario delle voci, voci ambigue da chiarire e domande da fare prima di firmare',
  },
  body: [
    { type: 'h2', text: 'Cosa deve contenere un preventivo per un sito web?' },
    {
      type: 'p',
      lead: true,
      text: 'Un preventivo serio è leggibile voce per voce: dice cosa fa ogni riga, non solo quanto costa. Le voci che non possono mancare sono **design**, **sviluppo**, **contenuti**, **integrazioni**, **SEO di base**, **formazione** e i **costi ricorrenti** (dominio, hosting, manutenzione). Se una di queste manca o è nascosta in un "tutto compreso" generico, è il primo segnale da chiarire prima di firmare.',
    },
    {
      type: 'p',
      text: 'La differenza tra un preventivo buono e uno rischioso non è il prezzo finale, ma la **trasparenza delle voci**. Un documento chiaro ti permette di confrontare due offerte sullo stesso piano e di capire dove finiscono i tuoi soldi. Uno vago ti costringe a fidarti e basta, e di solito le sorprese arrivano dopo la firma. Qui sotto trovi il glossario delle voci da riconoscere in qualsiasi preventivo, con cosa significano davvero e cosa chiedere quando le leggi.',
    },
    {
      type: 'table',
      caption: 'Glossario delle voci di un preventivo per un sito web: cosa significano e cosa chiedere.',
      headers: ['Voce', 'Cosa significa', 'Cosa chiedere'],
      rows: [
        ['Design / UI-UX', 'Progettazione grafica e dell\'esperienza d\'uso: layout, colori, struttura delle pagine.', 'È su misura o parte da un template? Quante schermate sono previste?'],
        ['Sviluppo', 'La realizzazione tecnica vera e propria: il codice o il montaggio sulla piattaforma scelta.', 'Su quale tecnologia o CMS? Il sito sarà aggiornabile da te?'],
        ['Contenuti', 'Testi, immagini e impaginazione delle pagine.', 'I testi li scrive chi sviluppa o li fornisco io? Le immagini sono incluse?'],
        ['Integrazioni', 'Collegamenti a strumenti esterni: modulo contatti, prenotazioni, CRM, pagamenti, newsletter.', 'Quali integrazioni sono comprese? Le licenze dei servizi terzi le pago a parte?'],
        ['SEO di base', 'Ottimizzazione tecnica iniziale: title, meta, struttura, velocità, indicizzazione.', 'Cosa comprende esattamente la "SEO di base"? È un\'attività una tantum o continuativa?'],
        ['Formazione', 'L\'affiancamento per imparare a gestire e aggiornare il sito da solo.', 'Quante ore? È inclusa o è una voce a parte? C\'è una guida scritta?'],
        ['Costi ricorrenti', 'Le spese annue: dominio, hosting, eventuale manutenzione e licenze.', 'Quanto pago ogni anno dopo il lancio? Sono indicati chiaramente nel preventivo?'],
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Leggi un preventivo come una lista della spesa, non come un totale. Per ogni riga chiediti: cosa fa, chi la esegue, è una tantum o annua. Se una voce non risponde a queste tre domande, è una voce da chiarire prima di firmare.',
    },

    { type: 'h2', text: 'Quali sono le voci ambigue da chiarire sempre?' },
    {
      type: 'p',
      lead: true,
      text: 'Tre formule ricorrono nei preventivi e suonano rassicuranti, ma spesso non vogliono dire nulla finché non le definisci: **"SEO"**, **"responsive"** e **"revisioni illimitate"**. Sono parole-ombrello che possono coprire pochissimo o moltissimo. Chiedere cosa contengono esattamente non è diffidenza, è il modo per confrontare due offerte sullo stesso metro.',
    },
    {
      type: 'p',
      text: '**"SEO"** è la più ambigua. Può significare l\'ottimizzazione tecnica di base (title, meta tag, struttura, velocità, sitemap), oppure un\'attività continuativa di posizionamento con contenuti e link nel tempo: due cose molto diverse per impegno e valore. Chiedi sempre se è una tantum o ricorrente, e cosa comprende riga per riga. **"Responsive"** dovrebbe essere lo standard, non un extra a pagamento: un sito che si adatta a smartphone e tablet è il minimo nel 2026, e va dato per scontato, non venduto come opzione.',
    },
    {
      type: 'p',
      text: '**"Revisioni illimitate"** è la formula più rischiosa, perché un perimetro che non esiste si paga sempre da qualche parte. Nella pratica si traduce in tempi che si dilatano o in un prezzo gonfiato a monte per coprire l\'incognita. Meglio un numero chiaro di giri di revisione (per esempio due o tre tornate) con regole su cosa è una revisione e cosa è invece una richiesta nuova, fuori dal preventivo iniziale.',
    },
    {
      type: 'list',
      items: [
        '**"SEO"** → chiedi: è ottimizzazione tecnica una tantum o attività continuativa? Cosa comprende nel dettaglio?',
        '**"Responsive"** → dovrebbe essere incluso di default: se è una voce a parte, chiedi perché.',
        '**"Revisioni illimitate"** → meglio un numero definito di tornate, con regole su cosa è una revisione.',
        '**"Ottimizzazione" / "extra" / "varie"** → voci-contenitore senza dettaglio: chiedi di esploderle riga per riga.',
        '**"Sito professionale" / "chiavi in mano"** → non dicono cosa è incluso: vale solo l\'elenco delle voci.',
      ],
    },

    { type: 'h2', text: 'Cosa è incluso e cosa no in un preventivo?' },
    {
      type: 'p',
      lead: true,
      text: 'La domanda decisiva non è quanto costa il sito, ma cosa resta fuori. Tre voci finiscono spesso "a parte" senza che sia evidente: i **contenuti** (testi e immagini), l\'**hosting** e la **manutenzione**. Se non sono scritte nel preventivo, quasi sempre non sono incluse, e diventano un costo che scopri dopo. Chiedi sempre l\'elenco esplicito di cosa è compreso e cosa no.',
    },
    {
      type: 'p',
      text: 'Sui **contenuti** si gioca metà dei malintesi. Molti preventivi presuppongono che i testi e le foto li fornisca tu: se non sei pronto a scriverli, il progetto si blocca o paghi un copy a parte. Su **hosting e manutenzione** vale la regola dei costi ricorrenti: il sito ha una spesa annua per restare online (dominio, hosting) e una eventuale per aggiornamenti e sicurezza. Un preventivo onesto li dichiara entrambi, anche quando sono a carico tuo.',
    },
    {
      type: 'p',
      text: 'È proprio qui che si annidano le sorprese più frequenti. Le abbiamo raccolte nella guida ai [costi nascosti di un sito web](/blog/costi-nascosti-sito-web): leggila prima di firmare, così sai quali voci pretendere nero su bianco. Per inquadrare invece cosa è ragionevole spendere e perché due offerte possono divergere tanto, parti dalla [guida a quanto costa un sito web](/blog/quanto-costa-sito-web), che è il riferimento da cui leggere ogni preventivo.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Diffida del preventivo senza una sola voce di costo ricorrente. Un sito online ha sempre almeno dominio e hosting da rinnovare ogni anno: se il documento non li menziona, o sono nascosti, o ti verranno chiesti dopo. Pretendi che il "quanto pago ogni anno" sia scritto.',
    },

    { type: 'h2', text: 'Di chi sono il sito, il dominio e il codice?' },
    {
      type: 'p',
      lead: true,
      text: 'Devi possedere tu il **dominio**, gli **account** (hosting, analytics, eventuali servizi) e i **contenuti**, e poter portare via il **sito** se cambi fornitore. È il punto più trascurato dei preventivi e il più importante: un sito che non puoi spostare non è davvero tuo. Verifica la proprietà e la portabilità prima di firmare, non dopo.',
    },
    {
      type: 'p',
      text: 'Il rischio concreto è restare bloccato. Se il dominio è registrato a nome del fornitore, o il sito vive su una piattaforma proprietaria chiusa a cui non hai gli accessi, cambiare partner diventa difficile o costoso. Un libero professionista che ha costruito la reputazione attorno al proprio dominio non può permettersi di perderlo: deve esserne l\'intestatario, con le credenziali in mano. Lo stesso vale per una PMI che nel tempo vorrà far evolvere il sito con un altro team.',
    },
    {
      type: 'p',
      text: 'La portabilità conta a prescindere da chi scegli, freelance o agenzia. Ne parliamo nella guida su [agenzia o freelance per il sito web](/blog/agenzia-o-freelance-sito-web): la differenza vera non è l\'etichetta, ma quante garanzie e quanta proprietà ti lascia il contratto.',
    },
    {
      type: 'list',
      items: [
        '**Dominio**: registrato a tuo nome, con le credenziali del registrar in mano a te.',
        '**Account e accessi**: hosting, email, analytics e servizi intestati a te o accessibili a te.',
        '**Contenuti**: testi, immagini e logo restano di tua proprietà, riutilizzabili altrove.',
        '**Codice e portabilità**: puoi spostare il sito su un altro hosting o team senza restare ostaggio di una piattaforma chiusa.',
      ],
    },

    { type: 'h2', text: 'Quali domande fare prima di firmare un preventivo?' },
    {
      type: 'p',
      lead: true,
      text: 'Prima di firmare, fai sette domande che trasformano un preventivo vago in un documento chiaro. Servono a far emergere cosa è incluso, chi fa cosa, in quanto tempo e a chi appartiene il risultato. Se il fornitore risponde con precisione, è un buon segno; se gira intorno alle voci, hai capito molto prima di spendere.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Cosa comprende **ogni voce** nel dettaglio, e cosa resta esplicitamente **fuori**?',
        'I **contenuti** (testi e immagini) li fornisco io o li realizzate voi? Sono nel prezzo?',
        'Cosa significa qui la voce **"SEO"**: ottimizzazione tecnica una tantum o attività continuativa?',
        'Quali sono i **costi ricorrenti annui** (dominio, hosting, manutenzione) e quanto pago dopo il lancio?',
        'Quanti **giri di revisione** sono inclusi e cosa conta come revisione e cosa come richiesta nuova?',
        'In **quanto tempo** consegnate, e da cosa dipende il rispetto della data?',
        'A chi appartengono **dominio, codice e contenuti**, e posso portarli via se cambio fornitore?',
      ],
    },
    {
      type: 'p',
      text: 'Più le risposte sono nette e messe per iscritto, più il preventivo è affidabile. Un commercialista che valuta due offerte per il sito dello studio non deve scegliere la più economica, ma quella che dichiara con precisione cosa riceverà e cosa pagherà ogni anno.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Stampa queste sette domande e portale al primo incontro. Un fornitore serio le accoglie volentieri, perché un preventivo chiaro conviene anche a lui: riduce i malintesi e i rifacimenti. Chi le evita o le minimizza ti sta dicendo qualcosa di importante sul rapporto che avrai dopo la firma.',
    },
    {
      type: 'cta',
      text: 'Hai un preventivo in mano e vuoi capire se le voci sono in ordine? Mandacelo e lo leggiamo insieme, voce per voce, senza impegno: ti diciamo cosa chiedere prima di firmare.',
      label: 'Parliamone',
      href: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ',
    },
  ],
  faq: [
    {
      q: 'Perché due preventivi per lo stesso sito sono così diversi?',
      a: 'Perché coprono cose diverse, anche quando sembrano uguali. Uno può includere contenuti, integrazioni e formazione, l\'altro solo il montaggio grafico. Il prezzo finale dice poco: confronta le voci una per una. La differenza vera è sempre in cosa è incluso e cosa resta a parte.',
    },
    {
      q: 'Le "revisioni illimitate" esistono davvero?',
      a: 'Nella pratica no: un perimetro che non esiste si paga comunque, in tempi che si dilatano o in un prezzo gonfiato a monte. Meglio un numero chiaro di tornate di revisione, con regole su cosa è una revisione e cosa è invece una richiesta nuova, fuori dal preventivo iniziale.',
    },
    {
      q: 'Il dominio è incluso nel preventivo del sito?',
      a: 'Non sempre, e va verificato. Il dominio ha un costo annuo separato e deve essere registrato a tuo nome, non a nome del fornitore. Se il preventivo non lo menziona, chiedi se è compreso, chi ne è intestatario e quanto pagherai per il rinnovo ogni anno.',
    },
    {
      q: 'Posso negoziare un preventivo per un sito web?',
      a: 'Sì, ma negozia sul perimetro, non solo sul prezzo. Puoi togliere voci che non ti servono ora, fornire tu i contenuti per ridurre il costo o rimandare integrazioni alla fase successiva. Tagliare sul prezzo senza toccare cosa è incluso, invece, di solito significa ricevere meno senza accorgertene.',
    },
  ],
  internalLinks: [
    { slug: 'quanto-costa-sito-web', anchor: 'Quanto costa un sito web' },
    { slug: 'costi-nascosti-sito-web', anchor: 'I costi nascosti di un sito web' },
    { slug: 'agenzia-o-freelance-sito-web', anchor: 'Agenzia o freelance per il sito web' },
  ],
  sources: [],
};

export default article;
