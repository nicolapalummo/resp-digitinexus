import type { Article } from '../types';

const article: Article = {
  id: 71,
  title: 'Tracciare le conversioni a norma privacy (pixel, eventi, consenso)',
  metaTitle: 'Tracciare le conversioni a norma privacy | DigitiNexus',
  slug: 'tracciamento-conversioni-privacy',
  metaDescription:
    'Come misurare le conversioni delle Ads rispettando GDPR e consenso: pixel, eventi e consent mode senza raccogliere dati non consentiti.',
  capsule:
    'Senza tracciamento non sai cosa funziona; ma va fatto a norma: pixel ed eventi si attivano solo dopo il consenso (consent mode), senza inviare dati personali non necessari.',
  keywordPrimary: 'tracciamento conversioni privacy',
  keywordsSecondary: ['pixel meta', 'google tag', 'consenso cookie ads'],
  cluster: 'c8',
  intent: 'I·MOFU',
  authorId: 'filippo-gentili',
  publishDate: '2026-08-16',
  updatedDate: '2026-08-16',
  status: 'published',
  cover: {
    src: '/blog/covers/tracciamento-conversioni-privacy.webp',
    alt: 'Tracciamento delle conversioni a norma privacy: pixel, eventi e consenso GDPR',
  },
  body: [
    { type: 'h2', text: 'Perché il tracciamento è essenziale' },
    {
      type: 'p',
      lead: true,
      text: 'Il tracciamento delle conversioni è ciò che ti dice quale annuncio porta contatti e quale brucia budget. Senza, vedi solo clic e spesa: numeri che non bastano per decidere. Con il tracciamento colleghi ogni conversione alla campagna che l\'ha generata, e puoi spostare il budget su ciò che funziona davvero.',
    },
    {
      type: 'p',
      text: 'C\'è anche un secondo motivo, meno visibile: le piattaforme ottimizzano da sole sui dati di conversione. Google e Meta usano i segnali che ricevono per capire a chi mostrare gli annunci. Se non mandi segnali, l\'algoritmo lavora alla cieca e i risultati peggiorano. Quali numeri guardare poi, lo trovi in [le metriche che contano in una campagna](/blog/metriche-campagne-ads).',
    },
    {
      type: 'p',
      text: 'Infine, il tracciamento è la base del [retargeting](/blog/retargeting-come-funziona): per mostrare un annuncio a chi ha visitato il sito senza convertire, devi prima poter riconoscere quella visita. Tutto parte da qui. Ed è proprio perché tocca dati sulle persone che va fatto nel modo giusto.',
    },

    { type: 'h2', text: 'Come funziona il tracciamento: pixel, eventi, conversioni' },
    {
      type: 'p',
      lead: true,
      text: 'Il meccanismo si regge su tre elementi. Il **pixel** (o tag) è un piccolo codice installato sul sito che osserva cosa succede in pagina. Un **evento** è un\'azione registrata dal pixel: una visita, un modulo inviato, un acquisto. Una **conversione** è l\'evento che conta per il tuo business, quello che dici alla piattaforma di considerare come risultato.',
    },
    {
      type: 'p',
      text: 'In pratica: installi il pixel di Meta o il tag di Google sul sito, definisci gli eventi che ti interessano e indichi quali sono conversioni. Da quel momento la piattaforma sa che il clic di martedì ha portato una richiesta di contatto giovedì, e attribuisce il risultato alla campagna giusta.',
    },
    {
      type: 'table',
      caption: 'I tre elementi del tracciamento in breve',
      headers: ['Elemento', 'Cos\'è', 'Esempio'],
      rows: [
        ['Pixel / tag', 'Codice sul sito che osserva le azioni', 'Pixel Meta, tag Google installati nelle pagine'],
        ['Evento', 'Singola azione registrata', 'Visita alla pagina contatti, invio del modulo'],
        ['Conversione', 'Evento che conta come risultato', 'Richiesta di preventivo, acquisto, prenotazione'],
      ],
    },
    {
      type: 'p',
      text: 'Il punto delicato è che il pixel, per fare il suo lavoro, raccoglie dati sul comportamento delle persone. Ed è qui che entra in gioco la normativa: quei dati si possono raccogliere solo a certe condizioni.',
    },

    { type: 'h2', text: 'Consenso e GDPR: quando può partire il tracciamento' },
    {
      type: 'p',
      lead: true,
      text: 'La regola di fondo è semplice: il tracciamento a fini di marketing parte solo dopo che la persona ha dato il consenso. Il banner cookie non è una formalità: finché il visitatore non accetta la finalità marketing, pixel ed eventi pubblicitari devono restare spenti. Se rifiuta, restano spenti e basta.',
    },
    {
      type: 'p',
      text: 'Il GDPR e la disciplina sui cookie chiedono un consenso libero, informato e revocabile. Tradotto in pratica: un banner con scelte equivalenti (accettare e rifiutare devono essere ugualmente facili), un\'informativa che spiega quali strumenti usi e per cosa, e la possibilità di cambiare idea in qualsiasi momento.',
    },
    {
      type: 'p',
      text: 'Qui entra il **consent mode**: il meccanismo con cui i tag pubblicitari adattano il proprio comportamento alla scelta dell\'utente. Il sito comunica agli strumenti di Google e Meta se il consenso c\'è oppure no, e i tag si comportano di conseguenza: con il consenso tracciano normalmente, senza consenso non raccolgono dati personali. Così la misurazione rispetta la scelta di chi visita.',
    },
    {
      type: 'p',
      text: 'Per gestire tutto questo senza impazzire si usa una piattaforma di gestione del consenso (CMP): lo strumento che mostra il banner, registra le scelte dei visitatori e le comunica ai tag. La CMP va configurata bene: deve conoscere tutti gli strumenti attivi sul sito e bloccarli finché il consenso non arriva. Un banner elegante con tag che partono comunque non protegge nessuno.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Fai questa prova sul tuo sito: apri una pagina, rifiuta i cookie e verifica che pixel ed eventi pubblicitari non si attivino. Se partono comunque, il tracciamento non è a norma e va sistemato prima di accendere le campagne.',
    },

    { type: 'h2', text: 'Cosa non fare: gli errori che costano cari' },
    {
      type: 'p',
      lead: true,
      text: 'Gli errori più gravi sono due: tracciare prima del consenso e inviare dati personali alle piattaforme senza rendersene conto. Entrambi espongono a sanzioni e minano la fiducia di chi ti visita. E quasi sempre nascono da configurazioni frettolose, non da cattive intenzioni.',
    },
    {
      type: 'list',
      items: [
        '**Tracciare prima del consenso**: il pixel che parte al caricamento della pagina, prima di qualsiasi scelta dell\'utente, è l\'errore più diffuso.',
        '**Dati personali nelle URL**: se il sito passa email o nomi nei parametri della pagina (per esempio dopo l\'invio di un modulo), il pixel può inviarli alla piattaforma. Le URL devono restare pulite.',
        '**Banner solo di facciata**: il banner c\'è ma il rifiuto non spegne nulla, oppure rifiutare è molto più difficile che accettare.',
        '**Informativa non aggiornata**: usi pixel e strumenti pubblicitari, ma la privacy policy non li menziona.',
      ],
    },
    {
      type: 'p',
      text: 'C\'è poi un errore di segno opposto: rinunciare del tutto al tracciamento per paura di sbagliare. È la scelta peggiore, perché ti lascia con campagne accese e nessun modo di capire se rendono. Chi rifiuta il consenso non entra nelle statistiche pubblicitarie, è vero, ma i dati di chi accetta bastano quasi sempre per orientare le decisioni: dove spostare budget, quale annuncio spegnere, quale pubblico funziona.',
    },
    {
      type: 'p',
      text: 'La buona notizia è che tracciare a norma non significa tracciare peggio. Significa raccogliere solo i dati che servono a misurare le campagne, con il consenso di chi te li dà. Un impianto pulito regge nel tempo; uno improvvisato va rifatto alla prima verifica.',
    },

    { type: 'h2', text: 'Una nota su AI e privacy' },
    {
      type: 'p',
      lead: true,
      text: 'Le piattaforme pubblicitarie usano sistemi di intelligenza artificiale per ottimizzare le campagne sui dati di conversione che ricevono. Vale quindi lo stesso principio: più il dato che invii è pulito e consentito, più l\'ottimizzazione lavora su basi solide, senza esporre te o i tuoi clienti a rischi.',
    },
    {
      type: 'p',
      text: 'Il tema è lo stesso che tocca chi usa strumenti AI in azienda: quali dati entrano nei sistemi, con quale base giuridica, con quali garanzie. Se vuoi approfondire il quadro su GDPR e intelligenza artificiale, lo trovi in [AI e privacy: cosa dice il GDPR](/blog/ai-privacy-gdpr).',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Informazione generale, non consulenza legale: la normativa privacy è in evoluzione, verifica sempre la normativa vigente o rivolgiti a un professionista prima di configurare il tracciamento.',
    },
    {
      type: 'cta',
      text: 'Vuoi campagne che misurano i risultati senza rischi sul fronte privacy? Guardiamo insieme il tuo tracciamento e sistemiamo ciò che serve prima di investire in Ads.',
      label: 'Prenota una call',
      href: 'https://calendly.com/digitinexus/30min',
    },
  ],
  faq: [
    {
      q: 'Posso tracciare le conversioni senza consenso?',
      a: 'No, non a fini di marketing. Pixel ed eventi pubblicitari possono attivarsi solo dopo che il visitatore ha accettato la finalità marketing nel banner cookie. Se rifiuta, i tag devono restare spenti. Il consent mode serve proprio a questo: adattare il comportamento degli strumenti alla scelta dell\'utente, in automatico.',
    },
    {
      q: 'Cos\'è il pixel?',
      a: 'Il pixel è un piccolo codice installato sulle pagine del sito che registra le azioni dei visitatori: visite, moduli inviati, acquisti. Meta lo chiama pixel, Google lo chiama tag, ma il principio è lo stesso. È lo strumento che collega una conversione alla campagna che l\'ha generata.',
    },
    {
      q: 'Cos\'è il consent mode?',
      a: 'Il consent mode è il meccanismo con cui i tag pubblicitari rispettano la scelta dell\'utente sul banner cookie. Il sito comunica agli strumenti se il consenso marketing c\'è oppure no: con il consenso il tracciamento funziona normalmente, senza consenso i tag non raccolgono dati personali. Così misuri le campagne restando a norma.',
    },
    {
      q: 'Serve aggiornare la privacy policy?',
      a: 'Sì. Se usi pixel, tag e strumenti pubblicitari, l\'informativa privacy e la cookie policy devono dirlo: quali strumenti usi, per quali finalità, chi riceve i dati e come revocare il consenso. Un\'informativa che non menziona gli strumenti realmente attivi sul sito è un\'irregolarità facile da contestare.',
    },
  ],
  internalLinks: [
    { slug: 'metriche-campagne-ads', anchor: 'Le metriche che contano in una campagna Ads' },
    { slug: 'retargeting-come-funziona', anchor: 'Retargeting: recuperare chi non ha convertito' },
    { slug: 'ai-privacy-gdpr', anchor: 'AI e privacy: cosa dice il GDPR' },
  ],
  sources: [],
};

export default article;
