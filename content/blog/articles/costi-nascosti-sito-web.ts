import type { Article } from '../types';

const article: Article = {
  id: 4,
  title: 'I costi nascosti di un sito web (e come evitarli)',
  metaTitle: 'I costi nascosti di un sito web e come evitarli | DigitiNexus',
  slug: 'costi-nascosti-sito-web',
  metaDescription:
    'Dominio, hosting, manutenzione, licenze, modifiche e migrazione: i costi nascosti di un sito web e come evitarli con un preventivo davvero chiaro.',
  capsule:
    'Oltre al prezzo iniziale, un sito ha costi ricorrenti per dominio, hosting e manutenzione, più voci spesso non dette: licenze e plugin, modifiche dopo il lancio e migrazione. Si evitano con un preventivo che le dichiari tutte.',
  keywordPrimary: 'costi nascosti sito web',
  keywordsSecondary: ['costi ricorrenti sito', 'spese impreviste sito web'],
  cluster: 'c1',
  intent: 'C·MOFU',
  authorId: 'filippo-gentili',
  publishDate: '2026-07-01',
  updatedDate: '2026-07-01',
  status: 'published',
  cover: {
    src: '/blog/covers/costi-nascosti-sito-web.webp',
    alt: 'I costi nascosti di un sito web: dominio, hosting, manutenzione, licenze, modifiche e migrazione spiegati voce per voce',
  },
  body: [
    { type: 'h2', text: 'Quali sono i costi nascosti di un sito web?' },
    {
      type: 'p',
      lead: true,
      text: 'I **costi nascosti** di un sito web sono le voci che non compaiono nel prezzo iniziale ma arrivano dopo: dominio, hosting e manutenzione ogni anno, più licenze e plugin a pagamento, modifiche successive al lancio e migrazione se cambi fornitore. Non sono trucchi: sono spese reali che un buon preventivo dichiara fin dall\'inizio, mentre uno superficiale lascia scoprire al primo rinnovo.',
    },
    {
      type: 'p',
      text: 'Il problema non è che queste voci esistano: esistono per qualsiasi sito, ovunque lo faccia fare. Il problema è quando nessuno te le spiega prima. Paghi la cifra del progetto convinto che sia tutto, e dodici mesi dopo ti arriva una fattura per il rinnovo del dominio, un avviso che il plugin del modulo prenotazioni va rinnovato e un preventivo per "quella piccola modifica" che pensavi fosse compresa.',
    },
    {
      type: 'p',
      text: 'Ecco le voci da conoscere, una per una, così le riconosci in un preventivo invece di scoprirle in fattura.',
    },
    {
      type: 'list',
      items: [
        '**Dominio.** È l\'indirizzo del sito (es. tuonome.it) e si rinnova ogni anno. Costa poco, ma se scade davvero il sito sparisce: la registrazione va sempre intestata a te.',
        '**Hosting.** È lo spazio server dove vive il sito; incide su velocità, sicurezza e affidabilità. È una quota annua o mensile che paghi finché il sito è online.',
        '**Manutenzione.** Aggiornamenti, backup, sicurezza e piccole correzioni. Non è opzionale come sembra: un sito fermo diventa lento, vulnerabile e perde posizioni su Google.',
        '**Licenze e plugin.** Temi premium, moduli per prenotazioni, e-commerce o moduli avanzati spesso hanno una licenza annua. Se non la rinnovi, smettono di funzionare o di ricevere aggiornamenti di sicurezza.',
        '**Modifiche dopo il lancio.** Cambiare un testo, aggiungere una pagina o un servizio: se non è chiaro cosa è incluso, ogni richiesta diventa un extra a parte.',
        '**Migrazione.** Spostare il sito su un altro hosting o fornitore. È facile se hai accessi e codice in mano, costosa o impossibile se sei legato a una piattaforma proprietaria.',
      ],
    },

    { type: 'h2', text: 'Perché si chiamano costi "nascosti"?' },
    {
      type: 'p',
      lead: true,
      text: 'Si chiamano nascosti non perché qualcuno li occulti di proposito, ma perché restano fuori dal numero che guardi quando confronti due preventivi. Tu vedi la cifra del progetto e decidi su quella; le voci ricorrenti e gli extra arrivano dopo, quando ormai hai scelto e non puoi più paragonarli.',
    },
    {
      type: 'p',
      text: 'È lo stesso meccanismo di un\'auto: il prezzo di listino non è il costo reale di possederla. Ci sono bollo, assicurazione, carburante e tagliandi. Nessuno li definisce "nascosti", eppure cambiano completamente quanto ti costa davvero tenerla su strada. Con un sito succede esattamente questo, ma siccome se ne parla meno, la sorpresa è più grande.',
    },
    {
      type: 'p',
      text: 'Il preventivo basso che sembra un affare spesso è basso proprio perché queste voci sono fuori. Quello che sembra più caro a volte le include già tutte. Per questo confrontare due cifre senza sapere cosa c\'è dentro non dice nulla: il vero confronto si fa a parità di voci, non a parità di prezzo. Trovi il quadro completo del prezzo iniziale nella [guida a quanto costa un sito web](/blog/quanto-costa-sito-web).',
    },

    { type: 'h2', text: 'Quanto incidono i costi ricorrenti ogni anno?' },
    {
      type: 'p',
      lead: true,
      text: 'I costi ricorrenti, cioè dominio, hosting e manutenzione, incidono ogni anno per tutta la vita del sito. Non sono un di più: sono ciò che lo tiene online, veloce e sicuro. La quota varia in base al tipo di sito e ai servizi inclusi, ma il principio non cambia: un sito non è un acquisto unico, è qualcosa che mantieni nel tempo.',
    },
    {
      type: 'table',
      caption: 'Le tre voci ricorrenti di base di un sito professionale.',
      headers: ['Voce', 'A cosa serve', 'Cadenza'],
      rows: [
        ['Dominio', 'L\'indirizzo del sito, da rinnovare per non perderlo', 'Annuale'],
        ['Hosting', 'Lo spazio server: incide su velocità e affidabilità', 'Annuale o mensile'],
        ['Manutenzione', 'Sicurezza, backup, aggiornamenti e piccole correzioni', 'Annuale o a canone'],
      ],
    },
    {
      type: 'p',
      text: 'Saltare la manutenzione è l\'errore più costoso, perché sembra un risparmio e invece è un rischio. Pensa a uno studio professionale: un sito fermo da due anni, con plugin scaduti e nessun backup, è la porta aperta a un attacco o a un crash proprio mentre un potenziale cliente ti sta cercando. Recuperare costa molto più di quanto sarebbe costato mantenerlo. Le tre voci, analizzate una per una con cosa includere e cosa evitare, le trovi nella [guida ai costi di mantenimento di un sito](/blog/costo-mantenimento-sito-web).',
    },

    { type: 'h2', text: 'Licenze e plugin: cosa rischi se non li rinnovi?' },
    {
      type: 'p',
      lead: true,
      text: 'Se non rinnovi le licenze di temi e plugin a pagamento, rischi che smettano di ricevere aggiornamenti e, in alcuni casi, di funzionare. È una delle voci più sottovalutate: molti siti si appoggiano a moduli esterni per prenotazioni, moduli avanzati o e-commerce, e quei moduli hanno spesso un abbonamento annuo separato dal sito.',
    },
    {
      type: 'p',
      text: 'Il rischio concreto è doppio. Da un lato la sicurezza: un plugin non aggiornato è la falla più sfruttata per entrare in un sito. Dall\'altro la continuità: immagina un\'azienda di servizi il cui modulo di prenotazione si blocca perché la licenza è scaduta, proprio nel weekend. I clienti non riescono a prenotare e tu te ne accorgi lunedì. Per questo conta sapere, prima di firmare, quali licenze ha il tuo sito e chi le rinnova.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Chiedi sempre l\'elenco di temi e plugin a pagamento usati nel tuo sito, con il costo annuo di ciascuno e a nome di chi sono intestate le licenze. È la domanda che separa un fornitore trasparente da uno che preferisce non parlarne.',
    },

    { type: 'h2', text: 'Le modifiche dopo il lancio sono incluse?' },
    {
      type: 'p',
      lead: true,
      text: 'Non sempre, ed è qui che nascono molte spese impreviste. Cambiare un testo, aggiungere una pagina, aggiornare i prezzi di un servizio: se il preventivo non dice con chiarezza cosa è compreso dopo il lancio, ogni richiesta può diventare un intervento a pagamento. Voci come "revisioni illimitate" o "assistenza" vanno sempre chiarite, perché significano cose diverse per fornitori diversi.',
    },
    {
      type: 'p',
      text: 'Un sito non è un oggetto finito: cresce con la tua attività. Un commercialista che apre un nuovo servizio, uno studio che aggiunge un socio, una PMI che lancia una promozione hanno bisogno di toccare il sito spesso. La differenza tra un fornitore e l\'altro non è "se" si pagano queste modifiche, ma se te lo dicono prima. Capire cosa è incluso e cosa no, voce per voce, è il cuore di un preventivo onesto: ti spieghiamo come leggerlo riga per riga nella [guida al preventivo per un sito](/blog/come-leggere-preventivo-sito-web).',
    },

    { type: 'h2', text: 'Il sito è davvero tuo? Proprietà e migrazione' },
    {
      type: 'p',
      lead: true,
      text: 'Il sito è davvero tuo solo se il dominio è intestato a te e hai gli accessi al codice e all\'hosting. È il costo nascosto più insidioso perché non si vede in fattura: si scopre il giorno in cui vuoi cambiare fornitore e ti accorgi di non poter portare via niente. Alcune soluzioni proprietarie ti legano alla piattaforma, e uscirne significa rifare il sito da capo.',
    },
    {
      type: 'p',
      text: 'La migrazione, cioè spostare il sito altrove, è semplice quando possiedi tutto: dominio, file, database e accessi. Diventa costosa o impossibile quando il sito vive su un sistema chiuso di cui non hai le chiavi. Pensa a una startup che cresce e ha bisogno di un sito più evoluto: se è prigioniera di una piattaforma, deve ricominciare invece di evolvere. Prima di firmare, chiarisci a chi appartengono dominio, codice e contenuti.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Il **dominio** è registrato a tuo nome, non a nome del fornitore?',
        'Hai (o puoi avere) gli **accessi** all\'hosting e al pannello di gestione?',
        'Il **codice e i contenuti** sono tuoi e portabili su un altro hosting?',
        'Esistono **vincoli o canoni** che ti impediscono di spostarti liberamente?',
      ],
    },

    { type: 'h2', text: 'Come evitare i costi nascosti con un preventivo chiaro?' },
    {
      type: 'p',
      lead: true,
      text: 'I costi nascosti si evitano in un solo modo: pretendendo un preventivo che li dichiari tutti prima della firma. Un preventivo chiaro elenca le voci una per una, indica cosa è incluso e cosa no, specifica i costi ricorrenti annui e dice a chi appartengono dominio, codice e contenuti. Se ti arriva una cifra unica senza dettaglio, chiedi di scomporla: è il tuo diritto e la prova della serietà di chi te lo propone.',
    },
    {
      type: 'p',
      text: 'La buona notizia è che le domande da fare sono sempre le stesse, e farle in anticipo cambia tutto. Non servono competenze tecniche: serve sapere cosa chiedere. Usa questa checklist prima di firmare qualsiasi preventivo per un sito.',
    },
    {
      type: 'list',
      items: [
        'Quali sono i **costi ricorrenti annui** (dominio, hosting, manutenzione) e a quanto ammontano?',
        'Quali **licenze o plugin a pagamento** usa il sito, e chi li rinnova?',
        'Le **modifiche dopo il lancio** sono incluse? Quante, di che tipo, per quanto tempo?',
        'Il **dominio** è intestato a me e ho gli accessi a hosting e gestione?',
        'Posso **migrare** il sito altrove senza dover ricominciare da zero?',
        'Cosa significano esattamente voci come "assistenza", "SEO" o "revisioni"?',
      ],
    },
    {
      type: 'p',
      text: 'Un fornitore che risponde a queste domande senza esitare è già un buon segno. Uno che le evita o tiene tutto sul vago ti sta dicendo qualcosa di importante. In DigitiNexus mettiamo nero su bianco voci, costi ricorrenti e proprietà fin dal preventivo, così non ci sono sorprese al primo rinnovo.',
    },
    {
      type: 'cta',
      text: 'Vuoi un preventivo che dichiari ogni voce, costi ricorrenti e proprietà comprese, senza sorprese dopo? Parliamone con numeri reali.',
      label: 'Parliamone',
      href: 'https://calendly.com/digitinexus/30min',
    },
  ],
  faq: [
    {
      q: 'Il dominio del sito è mio per sempre?',
      a: 'Il dominio è tuo finché lo rinnovi, di norma ogni anno, ed è intestato a te. Se è registrato a nome del fornitore o lasci scadere il rinnovo, rischi di perderlo. Verifica sempre che l\'intestazione e gli accessi siano a tuo nome fin dall\'inizio.',
    },
    {
      q: 'La manutenzione di un sito è obbligatoria?',
      a: 'Non è obbligatoria per legge, ma saltarla è l\'errore più costoso. Senza aggiornamenti e backup il sito diventa lento, vulnerabile agli attacchi e perde posizioni su Google. Recuperare un sito compromesso costa molto più di quanto sarebbe costato mantenerlo aggiornato.',
    },
    {
      q: 'Cosa rischio con i plugin a pagamento se non li rinnovo?',
      a: 'Rischi che smettano di ricevere aggiornamenti di sicurezza e, in alcuni casi, di funzionare. Un plugin non aggiornato è una delle falle più sfruttate per entrare in un sito. Chiedi sempre l\'elenco delle licenze a pagamento, il costo annuo e a chi sono intestate.',
    },
    {
      q: 'Posso spostare il sito su un altro fornitore?',
      a: 'Sì, se possiedi dominio, codice, contenuti e accessi all\'hosting. La migrazione è semplice quando hai tutto in mano. Diventa costosa o impossibile se il sito vive su una piattaforma proprietaria chiusa: chiarisci la portabilità prima di firmare il preventivo.',
    },
    {
      q: 'Le modifiche dopo il lancio sono comprese nel prezzo?',
      a: 'Dipende dal preventivo: non è scontato. Voci come "assistenza" o "revisioni illimitate" significano cose diverse per fornitori diversi. Chiarisci sempre quante modifiche sono incluse, di che tipo e per quanto tempo, così eviti che ogni piccola richiesta diventi un costo extra.',
    },
  ],
  internalLinks: [
    { slug: 'quanto-costa-sito-web', anchor: 'Quanto costa un sito web' },
    { slug: 'costo-mantenimento-sito-web', anchor: 'Costi di mantenimento di un sito' },
    { slug: 'come-leggere-preventivo-sito-web', anchor: 'Come leggere un preventivo' },
  ],
  sources: [],
};

export default article;
