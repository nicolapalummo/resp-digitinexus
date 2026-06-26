import type { Article } from '../types';

const article: Article = {
  id: 11,
  title: 'Calcolatore: stima costo e tempi del tuo sito web',
  metaTitle: 'Calcolatore: stima costo e tempi del sito | DigitiNexus',
  slug: 'calcolatore-costo-sito',
  metaDescription:
    'Come si stimano costo e tempi di un sito web da tipologia, pagine e integrazioni: il ragionamento dietro una stima orientativa, senza impegno.',
  capsule:
    'Quanto costa un sito, in base alla nostra esperienza: una landing 500–900 €, un sito vetrina su misura 2.500–3.000 € (3.300–5.000 € con integrazioni avanzate, pagine illimitate e copy sempre inclusi), un e-commerce da 3.000 € su preventivo. Costi ricorrenti 260–820 €/anno. Il calcolatore qui sotto ti dà la fascia in tre domande.',
  keywordPrimary: 'calcolatore costo sito web',
  keywordsSecondary: ['stima prezzo sito', 'preventivo online sito'],
  cluster: 'c1',
  intent: 'C·MOFU',
  authorId: 'filippo-gentili',
  publishDate: '2026-10-14',
  updatedDate: '2026-10-14',
  status: 'published',
  cover: {
    src: '/blog/covers/calcolatore-costo-sito.webp',
    alt: 'Calcolatore per stimare costo e tempi di un sito web: tipologia, numero di pagine e integrazioni come fattori di una stima orientativa',
  },
  body: [
    {
      type: 'p',
      lead: true,
      text: 'Un **calcolatore costo sito web** serve a trasformare poche risposte (che sito ti serve, quante pagine, quali funzioni) in una stima orientativa di spesa e tempi. Non sostituisce un preventivo: ti dà un ordine di grandezza prima di parlare con qualcuno, così sai cosa aspettarti. In questa pagina spieghiamo come ragiona una stima del genere, quali fattori la fanno salire o scendere e dove finisce la stima e inizia il preventivo vero.',
    },
    {
      type: 'table',
      caption: 'Fasce indicative, in base alla nostra esperienza (stima orientativa, non un preventivo)',
      headers: ['Tipo di progetto', 'Fascia di prezzo', 'Tempi'],
      rows: [
        ['Landing page', '500–900 €', '3–5 giorni'],
        ['Sito vetrina su misura', '2.500–3.000 € (3.300–5.000 € con integrazioni avanzate)', '2–3 settimane'],
        ['E-commerce', 'su preventivo, da 3.000 €', '4–8 settimane'],
        ['Costi ricorrenti', '260–820 €/anno', 'dominio, hosting, manutenzione'],
      ],
    },
    {
      type: 'p',
      text: 'Per il sito vetrina **le pagine sono illimitate e il copywriting è incluso**: il prezzo non cambia col numero di pagine. Usa il calcolatore qui sotto per collocarti nella fascia giusta in tre domande.',
    },
    { type: 'calculator' },

    { type: 'h2', text: 'Come funziona il calcolatore' },
    {
      type: 'p',
      lead: true,
      text: 'Il calcolatore ti chiede tre cose: la **tipologia** di sito (landing, vetrina, e-commerce), le **integrazioni** che ti servono (nessuna, base come form e analytics, oppure avanzate come CRM, prenotazioni, pagamenti) e se i **contenuti** sono pronti o da realizzare. Da queste risposte combinate restituisce una fascia indicativa di costo e una stima di tempi, da leggere come punto di partenza per il dialogo, non come cifra definitiva.',
    },
    {
      type: 'p',
      text: 'Il principio è semplice: più una risposta sposta il progetto verso la personalizzazione e la complessità, più la stima si alza. Una landing page singola con un modulo contatti sta a un estremo; un e-commerce su misura con catalogo, pagamenti e gestionale collegato sta all\'altro. La maggior parte dei progetti vive nel mezzo, e il valore del calcolatore è proprio collocarti nella fascia giusta prima ancora di un incontro.',
    },
    {
      type: 'p',
      text: 'Il risultato è sempre un **intervallo**, non un numero secco, e accompagnato da una riga che spiega cosa lo determina. Una stima onesta dice anche da cosa dipende: è quello che ti permette di capire dove puoi intervenire (per esempio fornendo tu i contenuti, o rimandando un\'integrazione) per spostare la fascia.',
    },

    { type: 'h2', text: 'Su quali dati si basa la stima' },
    {
      type: 'p',
      lead: true,
      text: 'La stima si basa sulle **fasce di mercato 2026** per i siti web, non su un listino fisso. Costi e tempi non hanno una fonte statistica ufficiale a cui appoggiarsi: variano per tipologia di progetto, fornitore e territorio. Per questo il calcolatore ragiona per intervalli e qualitativamente, e per i numeri reali rimanda alla nostra guida di riferimento su quanto costa un sito.',
    },
    {
      type: 'p',
      text: 'Concretamente, dietro ogni risposta c\'è una logica di mercato. Un sito vetrina parte da una base contenuta perché la struttura è collaudata; un e-commerce o un portale richiedono più lavoro su funzioni, sicurezza e gestione, quindi una fascia più alta. Le stesse leve valgono per i tempi: meno personalizzazione e contenuti già pronti significano consegne rapide, mentre integrazioni e revisioni dilatano il calendario. Trovi i riferimenti completi nella [guida a quanto costa un sito web](/blog/quanto-costa-sito-web) e nella [guida ai tempi di realizzazione](/blog/quanto-tempo-fare-sito-web).',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Nessuna cifra in questa pagina è spacciata per dato certificato. Costi e tempi sono intervalli operativi, non statistiche: servono a inquadrare un ordine di grandezza, non a sostituire un\'analisi del tuo progetto.',
    },

    { type: 'h2', text: 'Cosa fa variare costo e tempi' },
    {
      type: 'p',
      lead: true,
      text: 'Tre leve spostano costo e tempi più di ogni altra: il **grado di personalizzazione**, i **contenuti** e le **integrazioni**. Un sito che parte da un template, con testi e foto già pronti e poche funzioni, è economico e veloce. Un sito su misura, con contenuti da produrre da zero e collegamenti a servizi esterni, costa di più e richiede più settimane. Sapere su quale leva stai premendo ti dice come muovere la stima.',
    },
    {
      type: 'p',
      text: 'La **personalizzazione** è la prima leva. Un design su misura, pensato sull\'identità del tuo brand, vale più di un template adattato, ma incide su costo e tempi. La differenza tra le due strade, e quando conviene l\'una o l\'altra, la spieghiamo nella guida su [sito su misura o template](/blog/sito-su-misura-o-template).',
    },
    {
      type: 'p',
      text: 'I **contenuti** sono la leva più sottovalutata. Se testi, immagini e materiali sono pronti, il lavoro fila; se vanno scritti e realizzati da zero, il progetto si allunga e il costo cresce, perché è lavoro vero. Le **integrazioni** sono la terza leva: un modulo contatti pesa poco, ma prenotazioni, pagamenti, area riservata, multilingua o un CRM collegato sono funzioni che vanno costruite e testate, e ognuna sposta la fascia verso l\'alto.',
    },
    {
      type: 'list',
      items: [
        '**Tipologia**: landing page e vetrina stanno in basso, e-commerce e portali in alto.',
        '**Numero di pagine**: poche sezioni costano e durano meno; un catalogo o un sito ricco di contenuti pesa di più.',
        '**Personalizzazione**: template adattato (più economico) contro design su misura (più valore, più tempo).',
        '**Contenuti**: già pronti (rapido) contro da produrre da zero (più costo e settimane).',
        '**Integrazioni**: ogni funzione esterna (pagamenti, prenotazioni, multilingua, CRM) alza costo e tempi.',
      ],
    },

    { type: 'h2', text: 'Come leggere il risultato (e quanto fidarsi)' },
    {
      type: 'p',
      lead: true,
      text: 'Leggi il risultato come una **fascia**, non come un prezzo. Se ti colloca in basso, hai un progetto snello e veloce; se ti colloca in alto, stai chiedendo personalizzazione o funzioni che richiedono lavoro e tempo. La stima è affidabile per inquadrare l\'ordine di grandezza, ma non conosce i dettagli del tuo caso: contenuti, vincoli e obiettivi reali la spostano, ed è normale.',
    },
    {
      type: 'p',
      text: 'Tratta gli estremi della fascia come due scenari concreti. L\'estremo basso assume che parti da una base collaudata, con contenuti già pronti e poche integrazioni; l\'estremo alto assume design su misura, contenuti da produrre e più funzioni collegate. Capire quale scenario ti somiglia ti dice già dove agire per restare nella fascia che hai in mente, prima ancora di chiedere un preventivo.',
    },
    {
      type: 'p',
      text: 'Un avvocato che vuole un sito di studio sobrio, con poche pagine e un modulo di contatto, resterà in basso; una PMI di servizi che aggiunge prenotazioni online, area riservata e versione in due lingue salirà di fascia, perché ogni funzione è lavoro in più da costruire e testare. La stima rende visibile questo legame tra le tue scelte e il risultato, ed è la sua utilità principale.',
    },

    { type: 'h2', text: 'Dalla stima al preventivo reale' },
    {
      type: 'p',
      lead: true,
      text: 'Una stima dà l\'ordine di grandezza; il **preventivo** definisce voce per voce cosa riceverai e quanto pagherai, anche ogni anno. Sono due cose diverse: la stima ti prepara, il preventivo ti impegna. Il passaggio dall\'una all\'altro avviene con un confronto sul tuo progetto specifico, dove le risposte generiche del calcolatore diventano scelte concrete su design, contenuti e funzioni.',
    },
    {
      type: 'p',
      text: 'Quando ricevi il preventivo, leggilo come una lista della spesa, non come un totale: per ogni voce chiediti cosa fa, chi la esegue, se è una tantum o annua. È il modo per confrontare due offerte sullo stesso metro ed evitare le sorprese dopo la firma. Trovi il glossario completo nella guida su [come leggere un preventivo per un sito web](/blog/come-leggere-preventivo-sito-web).',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Usa la stima per arrivare preparato al confronto, non per scegliere. La cifra orientativa serve a capire se sei nella fascia giusta; la decisione la prendi sul preventivo, dove ogni voce è scritta nero su bianco e puoi chiedere cosa è incluso e cosa resta fuori.',
    },
    {
      type: 'cta',
      text: 'Hai un\'idea di sito e vuoi passare dalla stima a un preventivo chiaro sul tuo progetto? Raccontaci tipologia, pagine e integrazioni che hai in mente: ti diamo un ordine di grandezza realistico e cosa lo determina, senza impegno.',
      label: 'Parliamone',
      href: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ',
    },
  ],
  faq: [
    {
      q: 'La stima del calcolatore è impegnativa?',
      a: 'No. È una stima orientativa, non un preventivo né un ordine. Serve a darti un ordine di grandezza prima di parlare con qualcuno, così arrivi preparato al confronto. L\'impegno nasce solo con un preventivo firmato, che definisce voce per voce cosa riceverai e quanto pagherai.',
    },
    {
      q: 'Quanto è precisa una stima fatta così?',
      a: 'È precisa quanto basta per inquadrare la fascia giusta, non per fissare la cifra finale. Restituisce un intervallo basato su tipologia, pagine e integrazioni. Il numero esatto dipende dal tuo progetto specifico, dai contenuti e dalle scelte di design, e si definisce solo nel preventivo reale.',
    },
    {
      q: 'Posso avere un preventivo reale invece della stima?',
      a: 'Sì. La stima è il primo passo; il preventivo arriva con un confronto sul tuo progetto, dove le risposte generiche diventano scelte concrete su design, contenuti e funzioni. Bastano una breve descrizione di cosa ti serve e gli obiettivi del sito per ricevere un\'offerta chiara, voce per voce.',
    },
    {
      q: 'Vale anche per un e-commerce?',
      a: 'Sì. Un e-commerce è semplicemente una tipologia che sposta la stima verso l\'alto, perché aggiunge catalogo, pagamenti, gestione degli ordini e sicurezza. Il calcolatore lo tratta come gli altri casi: più funzioni e personalizzazione richiedi, più alta sarà la fascia di costo e tempi indicata.',
    },
  ],
  internalLinks: [
    { slug: 'quanto-costa-sito-web', anchor: 'Quanto costa un sito web' },
    { slug: 'come-leggere-preventivo-sito-web', anchor: 'Come leggere un preventivo' },
    { slug: 'quanto-tempo-fare-sito-web', anchor: 'Quanto tempo serve per un sito' },
    { slug: 'sito-su-misura-o-template', anchor: 'Sito su misura o template' },
  ],
  sources: [],
};

export default article;
