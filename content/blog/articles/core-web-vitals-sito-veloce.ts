import type { Article } from '../types';
import { DEFAULT_AUTHOR_ID } from '../authors';

const article: Article = {
  id: 14,
  title: 'Perché un sito lento ti costa clienti: i Core Web Vitals spiegati',
  metaTitle: 'Sito lento = clienti persi: Core Web Vitals | DigitiNexus',
  slug: 'core-web-vitals-sito-veloce',
  metaDescription:
    'Perché la velocità del sito incide su clienti e ranking: cosa sono i Core Web Vitals (LCP, INP, CLS) e come migliorarli, spiegato semplice.',
  capsule:
    'Un sito lento perde visitatori e posizioni: i Core Web Vitals misurano caricamento, reattività e stabilità visiva. Migliorarli aiuta le conversioni e il posizionamento su Google.',
  keywordPrimary: 'sito web veloce',
  keywordsSecondary: ['core web vitals', 'velocità sito web', 'sito lento'],
  cluster: 'c2',
  isPillar: false,
  intent: 'I·MOFU',
  authorId: DEFAULT_AUTHOR_ID,
  publishDate: '2026-09-14',
  updatedDate: '2026-09-14',
  status: 'published',
  cover: {
    src: '/blog/covers/core-web-vitals-sito-veloce.webp',
    alt: 'Core Web Vitals spiegati: LCP, INP e CLS, le tre metriche con cui Google misura velocità e stabilità di un sito web',
  },
  body: [
    { type: 'h2', text: 'Perché la velocità di un sito conta davvero?' },
    {
      type: 'p',
      lead: true,
      text: 'La velocità conta perché agisce prima di tutto il resto: se la pagina fa attendere, la persona se ne va prima di leggere il messaggio, vedere le prove o trovare il pulsante per scriverti. Un sito lento non converte poco, converte ciò che nessuno ha visto. La velocità non è un dettaglio per tecnici, ma la prima condizione perché il resto del sito abbia una possibilità.',
    },
    {
      type: 'p',
      text: 'L\'attesa pesa di più sul telefono, dove arriva la maggior parte delle persone e dove la rete è meno stabile. Chi cerca un commercialista o un avvocato dallo smartphone, in un momento di fretta, non aspetta che la pagina finisca di assemblarsi: torna ai risultati di Google e apre il sito successivo. Quella persona non era meno interessata, l\'hai persa per un problema che non aveva nulla a che fare con la qualità del tuo lavoro.',
    },
    {
      type: 'p',
      text: 'Il legame tra velocità e conversioni è semplice da capire: ogni secondo di attesa è un\'occasione in più per ripensarci, distrarsi o cambiare pagina. Un sito che compare in fretta tiene la persona nel momento in cui la sua attenzione è massima, cioè subito. Non serve un numero per intuirlo, basta osservare cosa fai tu stesso quando una pagina non carica. La velocità è ciò che trasforma una visita in una possibilità reale di contatto.',
    },

    { type: 'h2', text: 'Cosa sono i Core Web Vitals (LCP, INP, CLS)?' },
    {
      type: 'p',
      lead: true,
      text: 'I Core Web Vitals sono tre metriche pubbliche con cui Google misura la qualità d\'uso di una pagina: LCP misura quanto impiega il contenuto principale a comparire, INP la reattività ai tuoi tocchi, CLS quanto la pagina resta ferma invece di "saltare" mentre carica. Insieme dicono se l\'esperienza è veloce, reattiva e stabile, cioè le tre cose che una persona percepisce davvero.',
    },
    {
      type: 'p',
      text: 'Il termine vale la pena scomporlo, perché è il riferimento di tutta la guida. **Core Web Vitals** è l\'insieme di indicatori che Google ha scelto come segnali centrali dell\'esperienza utente, misurati sui dati reali delle persone che visitano il sito. Non sono sensazioni, sono numeri verificabili da chiunque, gratuitamente, sul proprio dominio. Ognuno dei tre risponde a una domanda che la persona si pone senza accorgersene.',
    },
    {
      type: 'list',
      items: [
        '**LCP (Largest Contentful Paint)**: "quanto ci mette a comparire?": il tempo che impiega l\'elemento principale (di solito l\'immagine grande o il titolo) a essere visibile. Buono sotto 2,5 secondi.',
        '**INP (Interaction to Next Paint)**: "risponde quando tocco?": il ritardo tra il tuo tocco o clic e la reazione visibile della pagina. Buono sotto 200 millisecondi.',
        '**CLS (Cumulative Layout Shift)**: "sta fermo?": quanto gli elementi si spostano mentre la pagina carica, quei salti che ti fanno cliccare la cosa sbagliata. Buono sotto 0,1.',
      ],
    },
    {
      type: 'p',
      text: 'Le soglie indicate sono quelle pubblicate da Google: sopra di esse l\'esperienza passa da "buona" a "da migliorare" o "scarsa". Un caso concreto rende l\'idea del CLS: stai per premere "Prenota" e all\'ultimo momento compare un banner che sposta il pulsante, così tocchi l\'elemento sbagliato. Quel piccolo salto, moltiplicato per ogni visitatore, è frustrazione che allontana proprio nel momento dell\'azione. I Core Web Vitals mettono un numero su queste micro-frustrazioni.',
    },

    { type: 'h2', text: 'Come misurare la velocità del tuo sito?' },
    {
      type: 'p',
      lead: true,
      text: 'Misuri la velocità con due strumenti gratuiti di Google: PageSpeed Insights per analizzare una singola pagina al volo, e la Search Console per vedere come si comportano tutte le pagine del sito nel tempo, sui dati reali dei tuoi visitatori. Bastano l\'indirizzo del sito e qualche minuto: ottieni un punteggio, i tre Core Web Vitals e l\'elenco di cosa sta rallentando.',
    },
    {
      type: 'p',
      text: 'Il modo più rapido è incollare l\'indirizzo di una pagina in PageSpeed Insights: ti restituisce due fotografie, quella di laboratorio (un test simulato) e quella sul campo (i dati reali raccolti dagli utenti Chrome, dove ci sono). Per uno studio professionale, conviene testare le pagine che contano davvero: la home, la pagina servizi e quella dei contatti, cioè il percorso che porta alla richiesta di consulenza.',
    },
    {
      type: 'p',
      text: 'La Search Console aggiunge la visione d\'insieme: nella sezione dedicata all\'esperienza sulla pagina vedi quante URL del tuo sito risultano "buone", "da migliorare" o "scarse", raggruppate per problema. È il punto di partenza giusto, perché ti dice dove concentrare le energie invece di intervenire a caso. Misurare prima di toccare il codice evita di ottimizzare ciò che già funziona e di trascurare il vero collo di bottiglia.',
    },

    { type: 'h2', text: 'Quali sono le cause più comuni di un sito lento?' },
    {
      type: 'p',
      lead: true,
      text: 'Le cause più frequenti sono tre: immagini troppo pesanti, un hosting scadente e un eccesso di codice o plugin. Nella stragrande maggioranza dei casi, un sito lento lo è per questi motivi, non per la sua complessità. La buona notizia è che sono tutti problemi affrontabili, e spesso il più grosso, le immagini, è anche il più semplice da risolvere.',
    },
    {
      type: 'p',
      text: 'Le immagini sono quasi sempre il primo colpevole. Una foto caricata alla risoluzione della macchina fotografica può pesare diversi megabyte e da sola fa slittare l\'LCP: il browser deve scaricarla tutta prima che la pagina sembri pronta. Lo stesso vale per i video di sfondo e i caroselli pieni di immagini non compresse, frequenti nei siti che vogliono "fare scena" e finiscono per far attendere chi guarda.',
    },
    {
      type: 'p',
      text: 'L\'hosting è la seconda causa: un server economico e condeviso con centinaia di altri siti risponde lento alle richieste, e quel ritardo si somma a tutto il resto. La terza è il codice in eccesso, tipico dei siti costruiti accumulando plugin e temi pieni di funzioni mai usate: ogni componente aggiuntivo carica script che il browser deve eseguire, e molti di questi rallentano la reattività, peggiorando l\'INP. Più un sito è assemblato a strati, più si appesantisce senza che nessuno se ne accorga finché non è tardi.',
    },

    { type: 'h2', text: 'Come migliorare i Core Web Vitals senza sacrificare il design?' },
    {
      type: 'p',
      lead: true,
      text: 'Migliori i Core Web Vitals lavorando sulle cause: comprimi e ridimensiona le immagini, scegli un hosting adeguato, togli codice e plugin inutili e metti il contenuto davanti agli effetti decorativi. La velocità non si compra con un trucco dell\'ultimo momento, si progetta dall\'inizio. E un sito veloce non è un sito spoglio: il design curato e la rapidità convivono, basta decidere le priorità giuste.',
    },
    {
      type: 'p',
      text: 'L\'ottimizzazione delle immagini è l\'intervento con il miglior rapporto tra sforzo e risultato. Significa esportarle nella dimensione in cui appaiono davvero (non serve una foto da 4000 pixel per uno spazio largo 600), comprimerle e usare formati moderni come WebP, che pesano molto meno a parità di qualità visiva. Già solo questo, sulla home di uno studio pieno di foto, può spostare l\'LCP da "scarso" a "buono" senza togliere nemmeno un\'immagine.',
    },
    {
      type: 'p',
      text: 'Gli altri interventi completano il quadro: un hosting dimensionato sul traffico reale, un codice essenziale invece di una pila di plugin, e l\'accortezza di riservare lo spazio agli elementi che caricano dopo, così la pagina non "salta" e il CLS resta basso. È qui che la scelta di partenza pesa: un sito costruito su misura nasce ottimizzato, mentre un template riempito in fretta porta dentro peso che non userai. Ne abbiamo parlato confrontando [sito su misura e template](/blog/sito-su-misura-o-template), dove la performance è uno dei vantaggi del progetto disegnato da zero.',
    },
    {
      type: 'p',
      text: 'La velocità, infine, lavora insieme agli altri elementi che rendono un sito efficace. Un sito veloce ma confuso non converte, e uno chiaro ma lento non viene mai visto: contano entrambe le cose. Trovi gli altri sei elementi che trasformano una visita in un contatto in [i 7 elementi di UX di un sito che converte](/blog/sito-web-che-converte), e il motivo per cui tutto questo va pensato prima dal telefono in [perché il tuo sito va progettato dal mobile](/blog/sito-mobile-first).',
    },
    {
      type: 'cta',
      text: 'Vuoi sapere quanto è veloce davvero il tuo sito e cosa lo sta frenando, o partire da un progetto già ottimizzato per i Core Web Vitals? Lo vediamo insieme su dati reali, senza giri di parole.',
      label: 'Parliamone',
      href: 'https://calendly.com/digitinexus/30min',
    },
  ],
  faq: [
    {
      q: 'Quanto deve impiegare un sito a caricare?',
      a: 'Come riferimento, il contenuto principale dovrebbe comparire entro 2,5 secondi (la soglia "buona" dell\'LCP di Google), ancora meglio se sotto i 2. Ma più del numero esatto conta la percezione: la pagina deve sembrare pronta in fretta, soprattutto da telefono e su rete mobile, dove l\'attesa pesa di più.',
    },
    {
      q: 'I Core Web Vitals sono un fattore di ranking su Google?',
      a: 'Sì, fanno parte dei segnali con cui Google valuta l\'esperienza sulla pagina e incidono sul posizionamento, soprattutto a parità di rilevanza dei contenuti. Non sono il fattore principale (i contenuti restano centrali), ma a contenuti simili una pagina veloce e stabile è avvantaggiata rispetto a una lenta.',
    },
    {
      q: 'WordPress è per forza lento?',
      a: 'No. WordPress può essere veloce o lento a seconda di come è costruito: la lentezza nasce quasi sempre da troppi plugin, temi pesanti, immagini non ottimizzate e hosting economico, non dalla piattaforma in sé. Un sito WordPress curato, con codice essenziale e immagini leggere, supera tranquillamente i Core Web Vitals.',
    },
    {
      q: 'Come testo la velocità del mio sito?',
      a: 'Incolla l\'indirizzo di una pagina in PageSpeed Insights di Google: ottieni gratis il punteggio, i tre Core Web Vitals e l\'elenco dei problemi. Per la visione d\'insieme su tutte le pagine usa la Search Console, nella sezione dedicata all\'esperienza sulla pagina, che lavora sui dati reali dei tuoi visitatori.',
    },
  ],
  internalLinks: [
    { slug: 'sito-su-misura-o-template', anchor: 'Sito su misura o template' },
    { slug: 'sito-web-che-converte', anchor: 'I 7 elementi di UX di un sito che converte' },
    { slug: 'sito-mobile-first', anchor: 'Mobile-first: progettare il sito dal telefono' },
  ],
  sources: [],
};

export default article;
