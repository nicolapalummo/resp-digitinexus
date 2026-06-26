import type { Article } from '../types';
import { DEFAULT_AUTHOR_ID } from '../authors';

const article: Article = {
  id: 18,
  title: 'Accessibilità web: cos\'è e perché conviene (anche per legge)',
  metaTitle: 'Accessibilità web: cos\'è e perché conviene | DigitiNexus',
  slug: 'accessibilita-sito-web',
  metaDescription:
    'Cos\'è l\'accessibilità web, perché migliora esperienza e SEO e quali obblighi normativi considerare. Guida introduttiva pratica.',
  capsule:
    'L\'accessibilità web rende un sito usabile da tutti, comprese le persone con disabilità. Migliora esperienza, SEO e reputazione, e per alcune realtà è anche un obbligo di legge.',
  keywordPrimary: 'accessibilità sito web',
  keywordsSecondary: ['sito accessibile', 'WCAG', 'accessibilità digitale'],
  cluster: 'c2',
  isPillar: false,
  intent: 'I·TOFU',
  authorId: DEFAULT_AUTHOR_ID,
  publishDate: '2026-10-23',
  updatedDate: '2026-10-23',
  status: 'published',
  cover: {
    src: '/blog/covers/accessibilita-sito-web.webp',
    alt: 'Accessibilità sito web: cos\'è, perché conviene e principi pratici WCAG come contrasto, testi alternativi e navigazione da tastiera',
  },
  body: [
    { type: 'h2', text: 'Cos\'è l\'accessibilità web?' },
    {
      type: 'p',
      lead: true,
      text: 'L\'accessibilità web è la proprietà di un sito di essere usabile da chiunque, comprese le persone con disabilità visive, uditive, motorie o cognitive. Significa progettare pagine che funzionano anche per chi naviga con uno screen reader, con la sola tastiera, con uno schermo ingrandito o senza audio. Un sito accessibile non chiede capacità particolari per essere consultato: si adatta alla persona, non il contrario.',
    },
    {
      type: 'p',
      text: 'Il punto da chiarire subito è che l\'accessibilità non riguarda una minoranza marginale. Tocca chi ha una disabilità permanente, ma anche chi vive una limitazione temporanea (un braccio ingessato, un occhio bendato) o di contesto: leggi il telefono in pieno sole, guardi un video senza poter attivare l\'audio, navighi con una connessione lenta e una mano sola sull\'autobus. In tutti questi casi le stesse scelte tecniche fanno la differenza tra un sito che funziona e uno che esclude.',
    },
    {
      type: 'p',
      text: 'Beneficiano dell\'accessibilità, quindi, molte più persone di quante immagini: chi ha una vista ridotta e ingrandisce i testi, chi usa uno screen reader, chi non può usare il mouse e si muove con il tasto Tab, chi ha difficoltà cognitive e ha bisogno di un linguaggio chiaro, oltre a chiunque navighi in condizioni non ideali. Curare l\'accessibilità significa progettare per la persona reale, non per il caso ideale di chi usa un computer perfetto in una stanza silenziosa.',
    },

    { type: 'h2', text: 'Perché conviene (oltre l\'etica)?' },
    {
      type: 'p',
      lead: true,
      text: 'Rendere accessibile un sito conviene per tre ragioni concrete, oltre a quella etica: allarghi il pubblico che può usarlo e diventare cliente, migliori la SEO perché le buone pratiche di accessibilità coincidono con quelle che i motori premiano, e rafforzi la reputazione del tuo brand. Non è un costo per pochi, è qualità che ricade su tutti i visitatori.',
    },
    {
      type: 'p',
      text: 'Il primo vantaggio è il pubblico. Un sito che esclude chi usa lo screen reader o non può usare il mouse perde quei contatti prima ancora che leggano la tua proposta. Le persone con una qualche forma di disabilità sono una quota tutt\'altro che trascurabile della popolazione, e a loro si aggiunge chiunque navighi in condizioni difficili. Ogni ostacolo evitabile è una persona che se ne va verso un concorrente più curato, senza nemmeno dirti perché.',
    },
    {
      type: 'p',
      text: 'Il secondo vantaggio è la SEO, perché molte pratiche di accessibilità coincidono con i segnali che Google valuta. Una struttura di titoli ordinata, un testo alternativo descrittivo sulle immagini, una navigazione coerente e una pagina veloce aiutano lo screen reader e, allo stesso tempo, aiutano il motore a capire e indicizzare il contenuto. È lo stesso principio per cui un [sito che converte](/blog/sito-web-che-converte) e uno accessibile finiscono per somigliarsi: entrambi mettono al centro la chiarezza. Il terzo vantaggio è la reputazione: un sito che funziona per tutti comunica cura, e la cura visibile si trasferisce sul giudizio del tuo lavoro.',
    },

    { type: 'h2', text: 'L\'accessibilità è obbligatoria per legge?' },
    {
      type: 'p',
      lead: true,
      text: 'In alcuni casi sì: esistono normative europee e italiane che impongono requisiti di accessibilità digitale a determinate categorie di soggetti, in particolare la pubblica amministrazione e alcune realtà private oltre certe soglie. Se ricadi in queste categorie, l\'accessibilità non è una scelta ma un obbligo. Capire se rientri e da quando richiede però una verifica puntuale, perché ambito di applicazione, soglie e scadenze dipendono dal tipo di attività.',
    },
    {
      type: 'p',
      text: 'Il quadro normativo dell\'accessibilità digitale si è ampliato negli anni, passando da regole pensate soprattutto per gli enti pubblici a previsioni che coinvolgono anche operatori privati in determinati settori. Questo significa che la domanda corretta non è "l\'accessibilità è obbligatoria?", ma "lo è per la mia attività, e a partire da quale momento?". La risposta cambia a seconda che tu sia un\'amministrazione, una grande impresa, una PMI sotto una certa soglia o un libero professionista.',
    },
    { type: 'h3', text: 'Chi è obbligato e da quando in Italia' },
    {
      type: 'p',
      text: 'In Italia il quadro poggia su due pilastri. Per la pubblica amministrazione e i soggetti a essa collegati vale da tempo la Legge 4/2004, la cosiddetta legge Stanca, che impone requisiti di accessibilità a siti e servizi digitali del settore pubblico. Per il settore privato è entrato in gioco lo European Accessibility Act, la direttiva europea sull\'accessibilità recepita in Italia con il D.Lgs 82/2022: estende alcuni obblighi a determinati servizi e prodotti digitali, e-commerce compresi, con applicazione indicata a partire dal 28 giugno 2025.',
    },
    {
      type: 'p',
      text: 'Chi rientri davvero, però, va verificato caso per caso. La normativa individua categorie di operatori economici e tipi di servizio specifici, prevede soglie dimensionali e, di norma, esclude le microimprese che forniscono servizi (le realtà più piccole per numero di addetti e fatturato). La soglia esatta e l\'ambito di applicazione vanno letti sul testo vigente, perché "azienda privata oltre una certa dimensione" non basta a stabilire se l\'obbligo riguarda proprio la tua attività.',
    },
    {
      type: 'list',
      items: [
        '**Pubblica amministrazione** e soggetti collegati: Legge 4/2004 (legge Stanca), già in vigore.',
        '**Privati in determinati settori** (alcuni servizi digitali ed e-commerce sopra le soglie previste): D.Lgs 82/2022 di recepimento dello European Accessibility Act, applicazione indicata dal 28 giugno 2025.',
        '**Microimprese di servizi**: di norma escluse, ma la condizione va confermata sul testo vigente.',
        '**Standard tecnico di riferimento** in entrambi i casi: WCAG 2.1, livello AA.',
      ],
    },
    {
      type: 'p',
      text: 'Lo standard tecnico con cui si misura l\'accessibilità è lo stesso per il pubblico e per il privato: le WCAG 2.1, livello AA. Le WCAG (Web Content Accessibility Guidelines) sono le linee guida internazionali del W3C che traducono l\'accessibilità in criteri verificabili, organizzate in tre livelli di conformità: A (essenziale), AA (intermedio) e AAA (massimo). La conformità AA è il livello richiesto dalla normativa e il riferimento pratico più diffuso, perché copre i requisiti centrali senza imporre i vincoli più estremi del livello AAA.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Questa è un\'informazione generale, non una consulenza legale. Date, soglie e ambito di applicazione possono cambiare e dipendono dalla tua attività (settore, dimensione, natura pubblica o privata). Prima di trarre conclusioni sul tuo sito, verifica gli obblighi e le soglie applicabili al tuo caso sul testo normativo vigente o con un consulente.',
    },
    {
      type: 'p',
      text: 'Un\'osservazione vale comunque al di là dell\'obbligo: anche dove la legge non ti impone nulla, costruire un sito accessibile ti mette al riparo da problemi futuri (le soglie e gli ambiti tendono ad allargarsi nel tempo) e ti dà fin da subito i vantaggi di pubblico, SEO e reputazione visti sopra. Trattare l\'accessibilità come un criterio di qualità, e non come un adempimento da rimandare, è la scelta che invecchia meglio.',
    },

    { type: 'h2', text: 'Quali sono i principi pratici (WCAG)?' },
    {
      type: 'p',
      lead: true,
      text: 'Il riferimento tecnico dell\'accessibilità web sono le WCAG, le linee guida internazionali che traducono il principio "usabile da tutti" in requisiti concreti. Nella pratica si riducono a pochi controlli che puoi verificare anche senza essere un tecnico: contrasto adeguato dei testi, testo alternativo alle immagini, navigazione completa da tastiera e una struttura della pagina ordinata. Non servono strumenti complicati per i controlli di base.',
    },
    {
      type: 'p',
      text: 'Il **contrasto** è il primo controllo. Il testo deve staccarsi nettamente dallo sfondo: il grigio chiaro su bianco "di tendenza" è raffinato sul monitor di chi lo disegna e illeggibile per chi ha una vista ridotta o legge al sole. Il **testo alternativo** è il secondo: ogni immagine che porta informazione deve avere una descrizione testuale, così chi usa lo screen reader capisce cosa mostra e, come effetto collaterale, il motore di ricerca la indicizza meglio.',
    },
    {
      type: 'p',
      text: 'La **navigazione da tastiera** è il terzo principio: deve essere possibile raggiungere e attivare ogni link, pulsante e campo del modulo usando solo il tasto Tab e Invio, senza il mouse. La **struttura** è il quarto: titoli in ordine gerarchico, etichette chiare sui campi dei moduli, link che dicono dove portano invece di un generico "clicca qui". Sono gli stessi accorgimenti che rendono un sito ordinato e veloce, motivo per cui accessibilità e [performance tecnica](/blog/core-web-vitals-sito-veloce) si rinforzano a vicenda.',
    },
    {
      type: 'list',
      items: [
        '**Contrasto**: testo e sfondo con un contrasto netto, leggibile anche con vista ridotta o in piena luce.',
        '**Testo alternativo**: ogni immagine informativa ha una descrizione che lo screen reader può leggere.',
        '**Navigazione da tastiera**: link, pulsanti e moduli raggiungibili e attivabili con il solo tasto Tab.',
        '**Struttura**: titoli ordinati, etichette chiare sui campi, link che spiegano la destinazione.',
        '**Sottotitoli e trascrizioni**: video e audio accompagnati da testo per chi non può ascoltare.',
      ],
    },

    { type: 'h2', text: 'Come iniziare con l\'accessibilità del tuo sito?' },
    {
      type: 'p',
      lead: true,
      text: 'Si parte da un audit, cioè una verifica dello stato attuale, e poi si interviene per priorità: prima gli ostacoli che bloccano del tutto l\'uso del sito, poi i miglioramenti minori. Non serve riscrivere tutto in una volta. Bastano alcuni controlli alla portata di chiunque per capire dove sei e quali correzioni hanno l\'impatto maggiore sulle persone reali che usano il sito.',
    },
    {
      type: 'p',
      text: 'I controlli di base li puoi fare oggi stesso. Prova a navigare il tuo sito usando solo il tasto Tab, senza toccare il mouse: riesci a raggiungere e attivare ogni link e ogni pulsante? Controlla che le immagini importanti abbiano un testo alternativo. Verifica il contrasto dei testi, soprattutto sui grigi tenui. Apri una pagina sul telefono e prova a leggerla senza ingrandire. Già questi quattro test ti dicono se ci sono barriere evidenti da rimuovere subito.',
    },
    {
      type: 'p',
      text: 'Da lì si stabilisce una scala di priorità: prima ciò che impedisce a una persona di completare un\'azione (compilare un modulo, raggiungere il contatto, leggere un\'informazione chiave), poi gli affinamenti. È lo stesso metodo con cui valutiamo se e quando intervenire su un sito esistente: partire dai problemi che costano clienti, non dalla perfezione formale. Se stai progettando un nuovo sito, integrare l\'accessibilità fin dall\'inizio costa molto meno che rincorrerla dopo, ed è parte di un [design fatto bene](/blog/design-premium-sito-web).',
    },
    {
      type: 'cta',
      text: 'Vuoi capire se il tuo sito è accessibile e quali interventi hanno la priorità, oppure partire da un progetto già pensato per tutti? Ne parliamo con esempi concreti, senza tecnicismi inutili.',
      label: 'Parliamone',
      href: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ',
    },
  ],
  faq: [
    {
      q: 'L\'accessibilità è obbligatoria per tutti?',
      a: 'No, non per tutti allo stesso modo: alcune categorie (in particolare la pubblica amministrazione e certe realtà private oltre determinate soglie) hanno obblighi precisi, altre no. Per sapere se rientri e da quando serve verificare la normativa applicabile al tuo caso, se necessario con un consulente legale.',
    },
    {
      q: 'L\'accessibilità aiuta la SEO?',
      a: 'Sì, perché molte pratiche di accessibilità coincidono con i segnali che Google premia: struttura dei titoli ordinata, testo alternativo sulle immagini, navigazione coerente e pagine veloci. Lavorare sull\'accessibilità migliora quasi sempre anche l\'indicizzazione e la comprensione del contenuto da parte dei motori.',
    },
    {
      q: 'Rendere accessibile un sito è costoso?',
      a: 'Dipende dal punto di partenza, ma è molto meno costoso di quanto si pensi se integrato fin dall\'inizio. Su un sito esistente si procede per priorità, correggendo prima gli ostacoli gravi. Inserire l\'accessibilità in un nuovo progetto costa pochissimo in più; rincorrerla dopo costa molto.',
    },
    {
      q: 'Da dove inizio a rendere accessibile il mio sito?',
      a: 'Da un audit dello stato attuale. Poi fai alcuni controlli di base: naviga con il solo tasto Tab, verifica i testi alternativi delle immagini, controlla il contrasto dei testi, leggi una pagina sul telefono. Da lì stabilisci le priorità, partendo dagli ostacoli che impediscono di completare un\'azione.',
    },
  ],
  internalLinks: [
    { slug: 'sito-web-che-converte', anchor: 'Sito che converte: 7 elementi di UX' },
    { slug: 'core-web-vitals-sito-veloce', anchor: 'Core Web Vitals: perché un sito lento ti costa clienti' },
    { slug: 'design-premium-sito-web', anchor: 'Cos\'è un design premium per un sito' },
    { slug: 'sito-web-studio-professionale', anchor: 'Sito web per studio professionale' },
  ],
  sources: [
    {
      label: 'AgID — Accessibilità dei servizi digitali',
      url: 'https://www.agid.gov.it/it/design-servizi/accessibilita',
    },
    {
      label: 'W3C — Web Content Accessibility Guidelines (WCAG) 2.1',
      url: 'https://www.w3.org/TR/WCAG21/',
    },
  ],
};

export default article;
