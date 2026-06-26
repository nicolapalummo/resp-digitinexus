import type { Article } from '../types';

const article: Article = {
  id: 17,
  title: 'Quando rifare il sito? 6 segnali che serve un restyling',
  metaTitle: 'Quando rifare il sito? 6 segnali da non ignorare | DigitiNexus',
  slug: 'quando-rifare-sito-restyling',
  metaDescription:
    'I 6 segnali che indicano che è ora di rifare il sito: lentezza, look datato, niente mobile, pochi contatti. Come capirlo e cosa fare.',
  capsule:
    'È ora di rifare il sito quando è lento, sembra datato, non funziona da telefono, non porta contatti, è difficile da aggiornare o non rappresenta più la tua attività.',
  keywordPrimary: 'restyling sito web',
  keywordsSecondary: ['quando rifare il sito', 'segnali sito da rifare'],
  cluster: 'c2',
  intent: 'C·MOFU',
  authorId: 'nicola-palummo',
  publishDate: '2026-10-05',
  updatedDate: '2026-10-05',
  status: 'published',
  cover: {
    src: '/blog/covers/quando-rifare-sito-restyling.webp',
    alt: 'I 6 segnali che indicano quando rifare il sito con un restyling',
  },
  body: [
    { type: 'h2', text: 'Quando è davvero il momento di rifare il sito?' },
    {
      type: 'p',
      lead: true,
      text: 'Rifai il sito quando smette di fare il suo lavoro: porta pochi contatti, carica lento, sembra fermo a qualche anno fa, è scomodo da telefono, è faticoso da aggiornare o non racconta più quello che sei diventato. Non serve una data sul calendario: serve riconoscere i segnali. Quando ne ricorrono due o tre insieme, un restyling smette di essere un lusso e diventa la mossa che ti fa recuperare clienti che oggi stai perdendo senza accorgertene.',
    },
    {
      type: 'p',
      text: 'Il restyling è il rifacimento del sito che parte da quello che hai: tiene i contenuti e il posizionamento che funzionano, e sistema ciò che frena (look, velocità, struttura, conversione). È diverso dal rifare tutto da zero, più rapido e meno costoso. Qui sotto trovi i sei segnali da controllare uno per uno: leggili come una checklist e segna quelli che ti riguardano.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Apri il tuo sito mentre leggi e usa i sei segnali come una checklist. Se ne spunti almeno due, è il momento di pianificare il restyling, partendo da quello che ti fa perdere più contatti.',
    },

    { type: 'h2', text: 'Segnale 1: Il sito è lento' },
    {
      type: 'p',
      lead: true,
      text: 'Il primo segnale è la lentezza. Se il sito impiega secondi a comparire, perdi i visitatori prima ancora che leggano una riga, e Google ti mostra più in basso nei risultati. È un segnale doppio: ti fa trovare meno e converte peggio, perché chi cerca con urgenza non aspetta una pagina che si carica a pezzi.',
    },
    {
      type: 'p',
      text: 'La velocità si misura con i Core Web Vitals, gli indicatori con cui Google valuta quanto in fretta una pagina diventa utilizzabile e stabile. Le cause più frequenti sono immagini pesanti, hosting economico e troppi plugin che girano a vuoto. Spesso il restyling è l\'occasione per rifondare il sito su basi tecniche moderne, anziché continuare a rattoppare una struttura nata vecchia. Il dettaglio su cosa misurare e come intervenire è nella [guida ai Core Web Vitals e a un sito veloce](/blog/core-web-vitals-sito-veloce).',
    },

    { type: 'h2', text: 'Segnale 2: Sembra datato' },
    {
      type: 'p',
      lead: true,
      text: 'Il secondo segnale è un look fermo nel tempo. Un sito che sembra di dieci anni fa trasmette un messaggio involontario: attività poco attenta, forse anche poco attiva. Chi ti visita proietta sul servizio l\'impressione che riceve dalla pagina, e un design trascurato fa dubitare di una competenza che magari è impeccabile.',
    },
    {
      type: 'p',
      text: 'Il giudizio è istantaneo e silenzioso: nessuno ti scrive "il tuo sito sembra vecchio", semplicemente chiude e prova altrove. I segnali tipici sono caratteri minuscoli, foto di repertorio, layout rigido, troppi colori, spazi affollati. Un design pulito e leggibile comunica metodo e cura, le stesse qualità che il cliente cerca in te. Cosa distingue un lavoro curato lo trovi nella [guida al design premium di un sito](/blog/design-premium-sito-web).',
    },

    { type: 'h2', text: 'Segnale 3: Non funziona da telefono' },
    {
      type: 'p',
      lead: true,
      text: 'Il terzo segnale è un sito scomodo da smartphone. La maggior parte delle ricerche oggi avviene da telefono e Google indicizza per prima la versione mobile della pagina. Se il tuo sito è pensato per il desktop e da cellulare diventa minuscolo o difficile da usare, stai respingendo proprio chi ti cerca mentre è in giro, nel momento in cui sarebbe pronto a scriverti.',
    },
    {
      type: 'p',
      text: 'Mobile-first non vuol dire "che si veda anche da telefono": vuol dire progettato prima per il telefono. In concreto significa numero cliccabile, modulo compilabile con il pollice, testi leggibili senza zoom. Fai la prova adesso: apri il sito dal tuo cellulare e prova a chiamarti e a inviare una richiesta. Se devi ingrandire o faticare, c\'è da intervenire. Il quadro completo è nella [guida al sito mobile-first](/blog/sito-mobile-first).',
    },

    { type: 'h2', text: 'Segnale 4: Non porta contatti' },
    {
      type: 'p',
      lead: true,
      text: 'Il quarto segnale è il più concreto: il sito non genera contatti. Se ricevi richieste da passaparola e segnalazioni ma quasi nulla dal sito, il sito non sta lavorando per te. Un sito che non porta telefonate, email o appuntamenti è una vetrina spenta: presente, ma muta. È il segnale che pesa di più, perché tocca direttamente il motivo per cui il sito esiste.',
    },
    {
      type: 'p',
      text: 'Spesso non manca il traffico, manca la conversione: visitatori che arrivano ma non trovano un motivo chiaro per agire, né un percorso semplice per farlo. Le cause tipiche sono call-to-action deboli, moduli lunghi, contatti nascosti, nessuna prova di affidabilità. Un restyling orientato alla conversione interviene proprio qui. Come trasformare le visite in richieste è spiegato nella [guida al sito web che converte](/blog/sito-web-che-converte).',
    },

    { type: 'h2', text: 'Segnale 5: È difficile da aggiornare' },
    {
      type: 'p',
      lead: true,
      text: 'Il quinto segnale è la fatica ad aggiornarlo. Se per cambiare un orario, aggiungere un servizio o pubblicare una novità devi chiamare qualcuno e aspettare giorni, il sito ti tiene in ostaggio. Un sito che non puoi aggiornare da solo invecchia in fretta, perché finisce per restare fermo: le informazioni datate restano lì, e chi le legge le scambia per la realtà.',
    },
    {
      type: 'p',
      text: 'Un sito moderno si basa su un CMS, il pannello da cui gestisci testi, immagini e pagine senza toccare codice. Se il tuo è stato costruito su misura senza un pannello, o su una piattaforma ormai abbandonata, ogni modifica è un costo e un\'attesa. Il restyling è il momento giusto per darti autonomia: aggiornare il sito deve costarti minuti, non una pratica. Quando conviene affidarsi a chi cura il sito nel tempo lo vedi nella [guida tra agenzia e freelance per il sito](/blog/agenzia-o-freelance-sito-web).',
    },

    { type: 'h2', text: 'Segnale 6: Non ti rappresenta più' },
    {
      type: 'p',
      lead: true,
      text: 'Il sesto segnale è il disallineamento: il sito parla di un\'attività che non sei più. Sei cresciuto, hai aggiunto servizi, cambiato clienti di riferimento, alzato il livello dei tuoi lavori, e il sito è rimasto indietro. Quando ciò che mostri online è inferiore a ciò che offri di persona, il sito ti penalizza: chi ti scopre lì si fa un\'idea più piccola di quella che meriti.',
    },
    {
      type: 'p',
      text: 'È il segnale meno tecnico e spesso il più importante, perché tocca il posizionamento. Un riposizionamento (nuovo target, nuovi servizi, nuovo tono) chiede un sito coerente con dove sei arrivato, non con dove eri partito. Qui il restyling non è solo estetica: è raccontare con chiarezza chi sei oggi, a chi parli e perché dovrebbero scegliere te. Un sito allineato fa selezione, attira i clienti giusti e scoraggia quelli sbagliati.',
    },

    { type: 'h2', text: 'Cosa fare adesso: restyling o sito nuovo?' },
    {
      type: 'p',
      lead: true,
      text: 'Parti contando i segnali. Se ne ricorrono uno o due, e la struttura di fondo regge, un restyling mirato è quasi sempre la scelta giusta: tiene contenuti e posizionamento che funzionano, sistema look, velocità e conversione, e ti dà il risultato più rapido. Se invece il sito è datato su quasi tutti i fronti, costruito su una base tecnica superata e impossibile da aggiornare, rifarlo da zero costa meno fatica che rattopparlo all\'infinito.',
    },
    {
      type: 'p',
      text: 'La regola pratica è semplice: salva ciò che funziona, rifai ciò che frena. Un buon punto di partenza è ordinare gli interventi per impatto: prima i segnali che fanno perdere contatti subito (lentezza, mobile, conversione), poi quelli che lavorano sulla fiducia e sul posizionamento (look, autonomia, coerenza). La differenza tra rimettere a nuovo e ripartire da capo, con i criteri per decidere, è nella [guida al restyling del sito aziendale](/blog/restyling-sito-aziendale).',
    },
    {
      type: 'list',
      items: [
        '**Hai spuntato 1–2 segnali e la base regge:** restyling mirato, più rapido ed economico, partendo dal segnale che ti fa perdere più contatti.',
        '**Hai spuntato quasi tutti i segnali:** valuta un sito nuovo su basi moderne, soprattutto se la piattaforma è abbandonata o impossibile da aggiornare.',
        '**Hai cambiato attività o target:** parti dal posizionamento, poi costruisci il sito attorno a chi sei oggi.',
      ],
    },
    {
      type: 'cta',
      text: 'Vuoi sapere se al tuo sito basta un restyling mirato o conviene rifarlo? E quanto incide la velocità sui contatti che stai perdendo? Guardiamo insieme il tuo, senza impegno.',
      label: 'Parliamone',
      href: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ',
    },
  ],
  faq: [
    {
      q: 'Ogni quanto si rifà un sito?',
      a: 'Non esiste una scadenza fissa: si rifà quando smette di funzionare, non quando compie un certo numero di anni. In pratica molti siti mostrano i segnali del restyling dopo qualche anno, quando design, tecnologia e contenuti restano indietro. Conta i segnali di questa lista: se ne ricorrono due o tre, è il momento, a prescindere dall\'età.',
    },
    {
      q: 'Meglio un restyling o un sito nuovo?',
      a: 'Dipende da quanti segnali ricorrono. Se la base regge e i problemi sono pochi, il restyling è più rapido ed economico e salva il posizionamento che hai già. Se il sito è datato su quasi tutto, costruito su una piattaforma abbandonata e impossibile da aggiornare, rifarlo da zero conviene di più. La regola: salva ciò che funziona, rifai ciò che frena.',
    },
    {
      q: 'Quanto costa rifare un sito?',
      a: 'Dipende dall\'estensione dell\'intervento: un restyling mirato costa meno di un sito rifatto da zero, perché riusa ciò che funziona. Il prezzo varia con il numero di pagine, le funzioni e quanto va rimesso a posto. Per orientarti sul budget conviene partire dai segnali che vuoi correggere, così sai cosa serve davvero prima di chiedere un preventivo.',
    },
    {
      q: 'Rifacendo il sito perdo la SEO?',
      a: 'Non se il lavoro è fatto bene. Un restyling ben gestito conserva contenuti, indirizzi delle pagine e posizionamento, e dove serve imposta i reindirizzamenti per non disperdere il valore già guadagnato. I problemi nascono quando si rifà tutto senza una mappa: pagine che spariscono, indirizzi che cambiano senza redirect. Pianificato con metodo, il restyling protegge la SEO e spesso la migliora.',
    },
  ],
  internalLinks: [
    { slug: 'restyling-sito-aziendale', anchor: 'Restyling del sito aziendale' },
    { slug: 'core-web-vitals-sito-veloce', anchor: 'Core Web Vitals e sito veloce' },
    { slug: 'sito-mobile-first', anchor: 'Sito mobile-first' },
    { slug: 'sito-web-che-converte', anchor: 'Sito web che converte' },
    { slug: 'design-premium-sito-web', anchor: 'Design premium di un sito' },
  ],
  sources: [],
};

export default article;
