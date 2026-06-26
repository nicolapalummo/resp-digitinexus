import type { Article } from '../types';
import { DEFAULT_AUTHOR_ID } from '../authors';

const article: Article = {
  id: 13,
  title: 'Cos\'è un design premium per un sito (e perché si paga)',
  metaTitle: 'Cos\'è un design premium per un sito | DigitiNexus',
  slug: 'design-premium-sito-web',
  metaDescription:
    'Cosa distingue un design premium da un sito qualunque: criteri concreti di qualità, impatto sulla fiducia e sulle conversioni.',
  capsule:
    'Un design premium non è \'più bello\': è coerente, leggibile, veloce e orientato all\'obiettivo. Si paga perché incide su fiducia e conversioni, trasformando i visitatori in clienti.',
  keywordPrimary: 'design premium sito web',
  keywordsSecondary: ['web design professionale', 'sito di qualità'],
  cluster: 'c2',
  isPillar: false,
  intent: 'I·TOFU',
  authorId: DEFAULT_AUTHOR_ID,
  publishDate: '2026-08-05',
  updatedDate: '2026-08-05',
  status: 'published',
  cover: {
    src: '/blog/covers/design-premium-sito-web.webp',
    alt: 'Cos\'è un design premium per un sito web: criteri concreti di qualità, gerarchia, tipografia e performance',
  },
  body: [
    { type: 'h2', text: 'Cosa significa \'design premium\' (i criteri concreti)?' },
    {
      type: 'p',
      lead: true,
      text: 'Un design premium è un sito che rispetta cinque criteri verificabili: gerarchia visiva chiara, tipografia leggibile, coerenza in ogni pagina, performance tecnica e accessibilità. Non è una questione di gusto o di aggettivi come \'moderno\' o \'accattivante\': è la somma di scelte che puoi controllare, una per una, sul tuo sito.',
    },
    {
      type: 'p',
      text: 'Il termine \'premium\' viene spesso usato a vuoto, come sinonimo di \'costoso\' o \'fatto bene\'. Qui lo trattiamo in modo diverso: come un insieme di proprietà misurabili. Un sito premium non si riconosce perché \'piace\', ma perché supera una serie di controlli concreti. Ecco i cinque che contano, prima di approfondirli uno per uno.',
    },
    {
      type: 'list',
      items: [
        '**Gerarchia visiva**: in tre secondi capisci cosa è importante, dove guardare e quale azione compiere.',
        '**Tipografia**: i testi si leggono senza sforzo per dimensione, interlinea, lunghezza di riga e contrasto.',
        '**Coerenza**: colori, spaziature, pulsanti e stile si ripetono identici su tutte le pagine.',
        '**Performance**: le pagine caricano in fretta e restano stabili mentre compaiono i contenuti.',
        '**Accessibilità**: il sito è usabile anche da tastiera, da screen reader e con contrasti adeguati.',
      ],
    },

    { type: 'h2', text: 'Gerarchia visiva: il sito ti guida o ti lascia perso?' },
    {
      type: 'p',
      lead: true,
      text: 'La gerarchia visiva è l\'ordine con cui il design ti fa guardare gli elementi: prima il messaggio principale, poi le prove, infine l\'azione. In un design premium la dimensione dei titoli, lo spazio attorno agli elementi e il colore dei pulsanti lavorano insieme per indicarti, senza che tu ci pensi, cosa fare a ogni schermata.',
    },
    {
      type: 'p',
      text: 'Il modo più semplice per verificarla è il \'test dei tre secondi\': apri la home, conta tre secondi, poi chiudi gli occhi. Ricordi cosa offre l\'azienda e qual era l\'azione principale? Se sì, la gerarchia funziona. Su un sito senza gerarchia, invece, dieci elementi gridano con la stessa intensità: tre titoli della stessa misura, cinque pulsanti tutti colorati, nessuno spazio che separi le sezioni. Il risultato è che l\'occhio non sa dove posarsi e la persona se ne va.',
    },
    {
      type: 'p',
      text: 'Un esempio: la home di uno studio professionale con un titolo grande che dice cosa fa lo studio e per chi, un sottotitolo che lo spiega in una riga, un solo pulsante evidente (\'Prenota una consulenza\') e, più sotto, le prove di fiducia. Questo è gerarchia. La stessa pagina con sei riquadri identici e nessun elemento dominante non lo è. La gerarchia è uno degli ingredienti che rendono [un sito capace di convertire](/blog/sito-web-che-converte), non solo di esistere.',
    },

    { type: 'h2', text: 'Tipografia: i testi si leggono senza fatica?' },
    {
      type: 'p',
      lead: true,
      text: 'La tipografia premium si misura sulla leggibilità, non sull\'originalità del font. I criteri sono concreti: corpo del testo abbastanza grande sul mobile, interlinea ariosa, righe non troppo lunghe e contrasto netto tra testo e sfondo. Se devi avvicinare gli occhi allo schermo o ingrandire la pagina per leggere, la tipografia non è premium, qualunque carattere sia stato scelto.',
    },
    {
      type: 'p',
      text: 'I segnali di una tipografia curata sono pochi e controllabili. Il corpo del testo sul telefono è leggibile a distanza di lettura normale; l\'interlinea lascia respirare le righe invece di schiacciarle; ogni riga di testo si ferma prima di diventare un nastro infinito difficile da seguire; il grigio tenue \'di tendenza\' su sfondo bianco lascia il posto a un contrasto pieno. Sono dettagli, ma sono i dettagli che la persona percepisce a ogni frase che legge.',
    },
    {
      type: 'p',
      text: 'Un controesempio frequente: il sito di un\'azienda di servizi che, per sembrare \'elegante\', usa un grigio chiarissimo su bianco e un corpo minuscolo. Sul desktop di chi lo ha progettato sembra raffinato; sul telefono di un cliente di sessant\'anni è illeggibile. La tipografia premium parte da chi legge, non da chi disegna.',
    },

    { type: 'h2', text: 'Coerenza: ogni pagina sembra dello stesso sito?' },
    {
      type: 'p',
      lead: true,
      text: 'La coerenza è la regola per cui colori, font, spaziature, stile dei pulsanti e tono delle immagini restano identici su tutte le pagine. In un design premium passi dalla home ai servizi al contatto senza mai avere la sensazione di essere finito su un altro sito. La coerenza si verifica navigando: se cambia il \'sapore\' visivo da una pagina all\'altra, manca.',
    },
    {
      type: 'p',
      text: 'La mancanza di coerenza è il sintomo più comune di un sito messo insieme a pezzi, spesso con un template riempito in fretta o con plugin diversi che impongono ciascuno il proprio stile. Il pulsante \'contattaci\' è arancione in home e blu nei servizi; la pagina del blog usa un font diverso dal resto; le foto sono ora professionali, ora prese a caso. Ogni incoerenza, presa da sola, è minima. Sommate, comunicano trascuratezza, e la trascuratezza visiva si trasferisce sul giudizio del tuo lavoro.',
    },
    {
      type: 'p',
      text: 'Un design premium nasce da un sistema: una palette di colori definita, due o tre stili di pulsante con regole precise su quando usarli, spaziature scelte a tavolino e ripetute ovunque. È lo stesso principio per cui un sito su misura tende a essere più coerente di un modello adattato: ne abbiamo parlato confrontando [sito su misura e template](/blog/sito-su-misura-o-template), dove la coerenza è proprio uno dei vantaggi del progetto disegnato da zero.',
    },

    { type: 'h2', text: 'Performance: il sito è veloce o fa scappare?' },
    {
      type: 'p',
      lead: true,
      text: 'La performance è il criterio più oggettivo: un design premium carica in fretta e resta stabile mentre i contenuti compaiono. Non è un dettaglio da tecnici, perché un sito lento perde visitatori prima ancora che leggano la tua proposta, e Google misura la velocità con metriche pubbliche che chiunque può controllare sul proprio sito.',
    },
    {
      type: 'p',
      text: 'Le metriche di riferimento sono i Core Web Vitals: il tempo che impiega il contenuto principale a comparire (LCP), la reattività della pagina ai tuoi tocchi (INP) e quanto la pagina resta ferma invece di \'saltare\' mentre carica (CLS). Un sito che si dice premium ma fa attendere secondi prima di mostrare il titolo, o sposta i pulsanti mentre cerchi di cliccarli, non lo è: bello fermo non basta, deve essere bello e rapido. Come si raggiunge la velocità senza sacrificare il design lo spieghiamo in [Core Web Vitals](/blog/core-web-vitals-sito-veloce).',
    },
    {
      type: 'p',
      text: 'Un esempio concreto di performance trascurata: una home con una grande immagine non compressa che impiega secondi a caricarsi sul telefono. Esteticamente è curata, ma su una connessione mobile media la persona vede una pagina bianca e torna indietro. Il design più raffinato che nessuno aspetta di vedere non converte nessuno.',
    },

    { type: 'h2', text: 'Accessibilità: tutti riescono a usarlo?' },
    {
      type: 'p',
      lead: true,
      text: 'L\'accessibilità è la proprietà per cui il sito è usabile anche da chi non naviga con un mouse e uno schermo perfetto: chi usa solo la tastiera, chi si affida a uno screen reader, chi ha una vista ridotta. Un design premium la tratta come un criterio di qualità, non come un di più: contrasti adeguati, testo alternativo alle immagini, pulsanti raggiungibili da tastiera.',
    },
    {
      type: 'p',
      text: 'Spesso l\'accessibilità viene scambiata per un obbligo burocratico, ma in pratica coincide quasi sempre con un design migliore per tutti. Un contrasto adeguato tra testo e sfondo aiuta chi ha problemi di vista e, allo stesso tempo, chi legge il sito al sole sul telefono. Un\'etichetta chiara su ogni pulsante guida lo screen reader e, insieme, rende la pagina più comprensibile a chiunque. Curare l\'accessibilità significa progettare per la persona reale, non per il caso ideale.',
    },
    {
      type: 'p',
      text: 'Per verificarla bastano controlli alla portata di tutti: prova a navigare il sito solo con il tasto Tab, senza toccare il mouse, e guarda se riesci a raggiungere e attivare ogni link e ogni pulsante. Controlla che le immagini importanti abbiano un testo alternativo. Verifica il contrasto dei testi. Se questi controlli passano, hai un pezzo concreto di qualità in più, e un sito che nessuno è costretto a lasciare per un ostacolo evitabile.',
    },

    { type: 'h2', text: 'Premium o costoso: cosa stai pagando davvero?' },
    {
      type: 'p',
      lead: true,
      text: 'Premium non vuol dire costoso, e costoso non garantisce premium: sono cose diverse. Quando paghi un design premium non stai pagando \'più ore di grafica\', ma il lavoro che rende quei cinque criteri veri sul tuo sito: la strategia che decide la gerarchia, il sistema che assicura la coerenza, le scelte tecniche che danno la velocità e l\'accessibilità.',
    },
    {
      type: 'p',
      text: 'Un sito può essere costato molto ed essere comunque mediocre: tanta animazione, nessuna gerarchia, performance trascurata. E un sito sobrio, costato il giusto, può essere pienamente premium se rispetta i criteri. La differenza non è il prezzo, ma se chi lo ha costruito ha lavorato sulle proprietà che contano per chi legge, o solo sull\'effetto \'wow\' di chi guarda la prima schermata per due secondi.',
    },
    {
      type: 'p',
      text: 'Per questo \'premium\' e \'veloce da consegnare\' non sono in contraddizione, come spesso si crede. La qualità nasce dal metodo, non dal tempo: con un processo definito, un design che rispetta i cinque criteri si realizza in poche settimane, senza tagli. È esattamente l\'approccio che descriviamo in [come consegniamo un sito in 1-4 settimane](/blog/sito-web-1-4-settimane).',
    },

    { type: 'h2', text: 'Come riconoscere un design premium prima di sceglierlo?' },
    {
      type: 'p',
      lead: true,
      text: 'Per capire se un sito (il tuo, o quello che ti propongono) è davvero premium, non fidarti degli aggettivi: applica i cinque criteri come una checklist. In pochi minuti, senza essere un esperto, puoi verificare gerarchia, tipografia, coerenza, performance e accessibilità su qualunque pagina, e avere una risposta concreta invece di un\'impressione.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Gerarchia**: fai il test dei tre secondi. Hai capito cosa offre e qual è l\'azione principale?',
        '**Tipografia**: leggi un paragrafo sul telefono. Lo fai senza ingrandire e senza fatica?',
        '**Coerenza**: naviga tre pagine diverse. Sembrano dello stesso sito o di tre siti?',
        '**Performance**: apri la home da telefono su rete mobile. Compare in fretta o aspetti la pagina bianca?',
        '**Accessibilità**: prova a muoverti solo con il tasto Tab. Raggiungi link e pulsanti senza il mouse?',
      ],
    },
    {
      type: 'p',
      text: 'Se una pagina supera tutti e cinque i controlli, hai davanti un design premium nel senso utile del termine: non \'bello\' a parole, ma costruito per essere chiaro, leggibile, coerente, veloce e usabile da chiunque. Sono le stesse proprietà che, messe al servizio di un obiettivo, fanno la differenza tra un sito che riempie lo spazio e [un sito che porta contatti](/blog/sito-web-che-converte).',
    },
    {
      type: 'cta',
      text: 'Vuoi sapere se il tuo sito attuale regge questi cinque criteri, o partire da un design premium fin dall\'inizio? Ne parliamo con esempi concreti, senza giri di parole.',
      label: 'Parliamone',
      href: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ',
    },
  ],
  faq: [
    {
      q: 'Un sito bello converte di più?',
      a: 'Non è la bellezza a far convertire, ma la qualità del design: gerarchia chiara, leggibilità, coerenza, velocità. Un sito \'bello\' ma lento o confuso converte poco. Conta che il design guidi la persona verso un\'azione precisa, non che faccia effetto nei primi due secondi.',
    },
    {
      q: 'Perché un design premium costa di più?',
      a: 'Perché paghi il lavoro che rende veri i cinque criteri: la strategia dietro la gerarchia, il sistema che garantisce la coerenza, le scelte tecniche per velocità e accessibilità. Non sono \'più ore di grafica\', ma competenze diverse. Un sito costoso ma mediocre, infatti, esiste: premium e costoso non coincidono.',
    },
    {
      q: 'Posso avere un design premium in poche settimane?',
      a: 'Sì. La qualità nasce dal metodo, non dal tempo dilatato. Con un processo definito e contenuti pronti, un design che rispetta gerarchia, tipografia, coerenza, performance e accessibilità si realizza in poche settimane, senza sacrificare nessuno dei cinque criteri.',
    },
    {
      q: 'Un template può essere premium?',
      a: 'In parte. Un buon template può rispettare gerarchia e tipografia, ma fatica su coerenza, performance e personalizzazione, perché è pensato per migliaia di siti diversi. Più il design è strategico e su misura del tuo obiettivo, più è facile rispettare tutti e cinque i criteri insieme.',
    },
    {
      q: 'Come capisco se il mio sito attuale è premium?',
      a: 'Applica i cinque criteri come checklist: test dei tre secondi per la gerarchia, lettura sul telefono per la tipografia, navigazione di tre pagine per la coerenza, apertura su rete mobile per la performance, prova con il solo tasto Tab per l\'accessibilità. Le risposte sono concrete, non opinioni.',
    },
  ],
  internalLinks: [
    { slug: 'sito-su-misura-o-template', anchor: 'Sito su misura o template' },
    { slug: 'sito-web-che-converte', anchor: 'Sito che converte: 7 elementi di UX' },
    { slug: 'core-web-vitals-sito-veloce', anchor: 'Core Web Vitals: perché un sito lento ti costa clienti' },
    { slug: 'sito-web-1-4-settimane', anchor: 'Sito web in 1-4 settimane' },
  ],
  sources: [],
};

export default article;
