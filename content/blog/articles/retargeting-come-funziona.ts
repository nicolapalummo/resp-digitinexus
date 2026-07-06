import type { Article } from '../types';

const article: Article = {
  id: 69,
  title: 'Retargeting: recuperare chi ha visitato il sito e non ha convertito',
  metaTitle: 'Retargeting: recuperare chi non ha convertito | DigitiNexus',
  slug: 'retargeting-come-funziona',
  metaDescription:
    'Come il retargeting mostra i tuoi annunci a chi ha già visitato il sito senza convertire, riportandolo alla decisione. Vantaggi, limiti e privacy.',
  capsule:
    'Il retargeting mostra annunci a chi ha già visitato il sito senza convertire: pubblico più caldo, costi spesso più bassi e conversioni più probabili. Richiede tracciamento a norma e consenso.',
  keywordPrimary: 'retargeting come funziona',
  keywordsSecondary: ['remarketing', 'recuperare visitatori sito'],
  cluster: 'c8',
  intent: 'I-C·MOFU',
  authorId: 'filippo-gentili',
  publishDate: '2026-08-02',
  updatedDate: '2026-08-02',
  status: 'published',
  cover: {
    src: '/blog/covers/retargeting-come-funziona.webp',
    alt: 'Retargeting: come funziona e come recuperare i visitatori del sito che non hanno convertito',
  },
  body: [
    { type: 'h2', text: 'Cos\'è il retargeting (e perché funziona)' },
    {
      type: 'p',
      lead: true,
      text: 'Il retargeting è la tecnica pubblicitaria che mostra i tuoi annunci a chi ha già visitato il sito senza compiere l\'azione che volevi: un acquisto, una richiesta di preventivo, una prenotazione. Invece di parlare a sconosciuti, parli a persone che ti conoscono già e che hanno dimostrato interesse con un comportamento concreto.',
    },
    {
      type: 'p',
      text: 'Lo trovi anche con il nome di **remarketing**: è la stessa cosa, cambia solo l\'etichetta che usano le piattaforme. Il principio resta identico su Meta, Google, TikTok o LinkedIn: il sistema riconosce chi è passato dal tuo sito e gli ripropone un messaggio nei giorni successivi, mentre naviga altrove.',
    },
    {
      type: 'p',
      text: 'Perché funziona? Perché la maggior parte delle persone non decide alla prima visita. Chi arriva sul sito confronta, si distrae, rimanda. Il retargeting lavora proprio su questo pubblico "caldo": ha già superato la fase di scoperta, gli manca solo la spinta finale. Per questo, a parità di budget, i costi per risultato sono spesso più bassi rispetto alle campagne verso pubblici freddi.',
    },
    {
      type: 'p',
      text: 'Nel disegno complessivo di una strategia, il retargeting è il pezzo basso del percorso: raccoglie quello che le campagne di scoperta e il sito hanno seminato. Trovi il quadro completo nella guida al [funnel tra sito web e ads](/blog/funnel-sito-web-ads).',
    },

    { type: 'h2', text: 'Come si costruisce il pubblico di retargeting?' },
    {
      type: 'p',
      lead: true,
      text: 'Il pubblico di retargeting si costruisce con tre strumenti: il pixel (o tag) installato sul sito, gli eventi che registrano i comportamenti e le liste caricate a mano, come i contatti già acquisiti. La piattaforma usa questi segnali per creare gruppi di persone da raggiungere di nuovo con gli annunci.',
    },
    {
      type: 'p',
      text: 'Il **pixel** è un piccolo codice che le piattaforme pubblicitarie ti danno da inserire nel sito: registra le visite e le collega, in forma anonima per te, agli account degli utenti sulla piattaforma. Gli **eventi** aggiungono il dettaglio: non solo "ha visitato il sito", ma "ha visto la pagina prezzi", "ha aggiunto al carrello", "ha iniziato a compilare il modulo".',
    },
    {
      type: 'list',
      items: [
        '**Visitatori di una pagina specifica**: chi ha guardato un servizio o un prodotto preciso.',
        '**Carrelli abbandonati**: chi ha aggiunto al carrello ma non ha completato l\'acquisto.',
        '**Moduli non inviati**: chi ha aperto la pagina contatti senza scrivere.',
        '**Liste clienti**: contatti già acquisiti, utili per proposte dedicate o per escluderli dalle campagne.',
        '**Interazioni social**: chi ha guardato un video o interagito con il profilo, anche senza passare dal sito.',
      ],
    },
    {
      type: 'p',
      text: 'Conta anche la finestra temporale: puoi decidere se raggiungere chi è passato negli ultimi 7, 30 o 90 giorni. Più la visita è recente, più l\'interesse è vivo. Attenzione però: tutto questo si basa su dati di navigazione, quindi il tracciamento deve partire solo dopo il consenso dell\'utente. Il come lo spieghiamo nella guida al [tracciamento delle conversioni a norma privacy](/blog/tracciamento-conversioni-privacy).',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Installa il pixel e gli eventi prima di lanciare qualsiasi campagna, anche se il retargeting arriverà dopo. Il pubblico si accumula nel tempo: se parti oggi, tra un mese avrai già una lista di visitatori pronta da usare.',
    },

    { type: 'h2', text: 'Cosa mostrare a chi ha visitato senza convertire?' },
    {
      type: 'p',
      lead: true,
      text: 'A chi ti conosce già non serve ripresentarti da zero: servono tre tipi di messaggio, in base a cosa lo ha frenato. Un promemoria se si è semplicemente distratto, un incentivo se il dubbio è il prezzo, una prova concreta se il dubbio è la fiducia.',
    },
    {
      type: 'p',
      text: 'Il **promemoria** è il formato più semplice e spesso il più efficace: rimostri il prodotto lasciato nel carrello o il servizio consultato, con un invito diretto a completare. Non devi convincere, devi solo riportare la persona al punto in cui si era fermata.',
    },
    {
      type: 'p',
      text: 'L\'**incentivo** entra in gioco quando il freno è economico o di urgenza: una condizione dedicata, una scadenza reale, un vantaggio per chi completa entro una data. Usalo con misura: se ogni visitatore riceve uno sconto automatico, insegni al tuo pubblico ad abbandonare il carrello apposta.',
    },
    {
      type: 'p',
      text: 'La **prova** risponde al dubbio di fiducia: recensioni, casi concreti, risposte alle obiezioni più comuni. È il messaggio giusto per servizi e acquisti importanti, dove la decisione richiede giorni. Su Meta questo dialogo tra scoperta e ritorno è naturale: come impostarlo lo vedi in [Meta Ads tra scoperta e retargeting](/blog/meta-ads-scoperta-retargeting).',
    },
    {
      type: 'table',
      caption: 'Cosa mostrare in base al freno del visitatore',
      headers: ['Il freno probabile', 'Il messaggio giusto', 'Esempio'],
      rows: [
        ['Si è distratto', 'Promemoria diretto', 'Il prodotto lasciato nel carrello, con invito a completare'],
        ['Dubbio sul prezzo', 'Incentivo con scadenza', 'Condizione dedicata valida pochi giorni'],
        ['Dubbio di fiducia', 'Prova e rassicurazione', 'Recensioni, casi reali, garanzie chiare'],
        ['Sta confrontando', 'Differenza concreta', 'Cosa ti distingue dalle alternative che sta valutando'],
      ],
    },

    { type: 'h2', text: 'Quali sono i limiti (e le regole privacy)?' },
    {
      type: 'p',
      lead: true,
      text: 'Il retargeting ha tre limiti da rispettare: serve il consenso dell\'utente per tracciarlo, serve una frequenza ragionevole per non risultare invadente e serve abbastanza traffico sul sito perché il pubblico abbia una dimensione utile. Ignorarli significa campagne inefficaci o, peggio, fuori norma.',
    },
    {
      type: 'p',
      text: 'Il primo limite è normativo. Il pixel raccoglie dati di navigazione, quindi in Europa si attiva solo dopo il **consenso** espresso nel banner cookie, per la finalità di marketing. Chi rifiuta non entra nei tuoi pubblici, ed è corretto così: il tuo pubblico di retargeting sarà più piccolo del traffico reale. Le regole pratiche le trovi nella guida al [tracciamento a norma privacy](/blog/tracciamento-conversioni-privacy).',
    },
    {
      type: 'p',
      text: 'Il secondo limite è di buon senso: la **frequenza**. Se la stessa persona vede il tuo annuncio decine di volte, l\'effetto si ribalta: da promemoria utile a presenza fastidiosa. Le piattaforme permettono di limitare le ripetizioni ed escludere chi ha già convertito: usale sempre, ed escludi i clienti acquisiti dalle campagne di recupero.',
    },
    {
      type: 'p',
      text: 'Il terzo limite è la dimensione del pubblico. Con poche visite al mese, il retargeting fatica: il pubblico è troppo piccolo perché gli algoritmi lavorino bene e il budget si consuma su poche persone. In quel caso la priorità è portare più traffico qualificato al sito, e solo dopo attivare il recupero.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Regola semplice per non "inseguire" nessuno: chi ha convertito esce dal pubblico, chi non converte dopo settimane di esposizione va lasciato andare. Il retargeting recupera indecisi, non trasforma un no in un sì a forza di ripetizioni.',
    },
    {
      type: 'cta',
      text: 'Il tuo sito riceve visite ma poche richieste? Guardiamo insieme il percorso dei tuoi visitatori e capiamo se e come impostare un retargeting che li riporti alla decisione.',
      label: 'Prenota una call gratuita',
      href: 'https://calendly.com/digitinexus/30min',
    },
  ],
  faq: [
    {
      q: 'Il retargeting è invasivo?',
      a: 'Lo diventa se gestito male: stessa creatività ripetuta all\'infinito, nessun limite di frequenza, annunci anche a chi ha già acquistato. Gestito bene è un promemoria utile: raggiunge solo chi ha mostrato interesse, con messaggi pertinenti e un tetto alle ripetizioni. La differenza la fanno le esclusioni e la varietà dei contenuti.',
    },
    {
      q: 'Serve tanto traffico per fare retargeting?',
      a: 'Serve un traffico sufficiente a creare pubblici di dimensione utile: con poche decine di visite al mese le piattaforme faticano a lavorare e i risultati restano deboli. Se il sito riceve poco traffico, prima conviene investire su campagne di scoperta o su Google, e attivare il retargeting quando il pubblico si è accumulato.',
    },
    {
      q: 'Il retargeting costa meno delle altre campagne?',
      a: 'Spesso sì, in proporzione ai risultati: il pubblico è più piccolo e più propenso a convertire, quindi il costo per conversione tende a essere più basso rispetto alle campagne verso pubblici freddi. Ma non vive da solo: senza campagne di scoperta o traffico organico che alimentano il sito, il pubblico da recuperare si esaurisce.',
    },
    {
      q: 'Il retargeting è a norma GDPR?',
      a: 'Sì, a condizione che il tracciamento parta solo dopo il consenso dell\'utente per finalità di marketing, espresso nel banner cookie, e che l\'informativa privacy descriva l\'uso dei pixel. Chi nega il consenso non deve entrare nei pubblici. Questa è informazione generale, non consulenza legale: verifica sempre la normativa vigente.',
    },
  ],
  internalLinks: [
    { slug: 'funnel-sito-web-ads', anchor: 'Il funnel tra sito web e ads: la guida completa' },
    { slug: 'meta-ads-scoperta-retargeting', anchor: 'Meta Ads: dalla scoperta al retargeting' },
    { slug: 'tracciamento-conversioni-privacy', anchor: 'Tracciare le conversioni a norma privacy' },
  ],
  sources: [],
};

export default article;
