import type { Article } from '../types';
import { DEFAULT_AUTHOR_ID } from '../authors';

const article: Article = {
  id: 3,
  title: 'Sito web in 1–4 settimane: come è possibile senza perdere qualità',
  metaTitle: 'Sito web in 1–4 settimane: come è possibile | DigitiNexus',
  slug: 'sito-web-1-4-settimane',
  metaDescription:
    'Come si realizza un sito di qualità in 1–4 settimane: il processo settimana per settimana, senza sacrificare design e cura tecnica.',
  capsule:
    'Un sito di qualità si può consegnare in 1–4 settimane quando il processo è definito e i contenuti sono pronti: la rapidità nasce dal metodo, non dal taglio della qualità.',
  keywordPrimary: 'sito web veloce realizzazione',
  keywordsSecondary: ['sito in poche settimane', 'consegna rapida sito'],
  cluster: 'c1',
  intent: 'C·MOFU',
  authorId: DEFAULT_AUTHOR_ID,
  publishDate: '2026-06-15',
  updatedDate: '2026-06-15',
  status: 'published',
  cover: {
    src: '/blog/covers/sito-web-1-4-settimane.webp',
    alt: 'Sito web in 1–4 settimane: il processo settimana per settimana senza perdere qualità',
  },
  body: [
    { type: 'h2', text: 'Si può fare un sito di qualità in poche settimane?' },
    {
      type: 'p',
      lead: true,
      text: 'Sì, a condizioni precise: un processo definito, un team dedicato e i contenuti pronti prima di iniziare. La velocità non si ottiene tagliando la qualità, ma eliminando i tempi morti che gonfiano la durata di un progetto medio.',
    },
    {
      type: 'p',
      text: 'I numeri di riferimento del settore lo confermano: un sito professionale richiede *in media 2–6 settimane*, e un sito vetrina si colloca tra le **2 e le 4 settimane**. La forbice non dipende quasi mai dalla difficoltà tecnica, ma dall\'attesa: contenuti che non arrivano, approvazioni lente, scope che cambia a metà strada. Rimuovi questi ostacoli e il limite inferiore di quella forbice diventa la norma.',
    },
    {
      type: 'p',
      text: 'In DigitiNexus la consegna in 1–4 settimane non è una statistica di settore, ma il nostro metodo di lavoro: un modo organizzato di comprimere i tempi senza comprimere la cura. Non promettiamo un miracolo, promettiamo un processo. La domanda giusta, allora, non è *se* sia possibile, ma *a quali condizioni* lo diventa, e cosa serve da parte tua perché funzioni.',
    },

    { type: 'h2', text: 'Com\'è il processo settimana per settimana?' },
    {
      type: 'p',
      lead: true,
      text: 'Il progetto si divide in quattro settimane: brief e design, sviluppo, contenuti e rifiniture, test e lancio. Le fasi non sono rigidamente sequenziali: dove possibile si sovrappongono, perché aspettare che una si chiuda del tutto prima di aprire la successiva è il primo spreco da eliminare.',
    },
    {
      type: 'table',
      caption: 'Esempio di pianificazione di un sito vetrina in 4 settimane.',
      headers: ['Settimana', 'Cosa succede'],
      rows: [
        ['Settimana 1', 'Brief, strategia, struttura delle pagine e design delle schermate chiave'],
        ['Settimana 2', 'Sviluppo del sito, impostazione responsive e prime integrazioni'],
        ['Settimana 3', 'Inserimento contenuti, animazioni, rifiniture e revisione condivisa'],
        ['Settimana 4', 'Test su dispositivi, ottimizzazione velocità, SEO di base e lancio'],
      ],
    },
    {
      type: 'p',
      text: 'Concretamente: mentre nella settimana 2 sviluppiamo le pagine già approvate, tu prepari i testi mancanti; mentre nella settimana 3 inseriamo i contenuti, impostiamo già i test della settimana 4. La sovrapposizione è il motivo per cui quattro settimane di lavoro reale non significano quattro settimane di attesa l\'una dietro l\'altra. Per un confronto più ampio sulle tempistiche per tipologia, vedi [quanto tempo ci vuole per fare un sito web](/blog/quanto-tempo-fare-sito-web).',
    },

    { type: 'h2', text: 'Qual è il processo DigitiNexus in 3 settimane?' },
    {
      type: 'p',
      lead: true,
      text: 'Per un sito vetrina curato la nostra consegna tipica è di 3 settimane, a contenuti pronti e feedback rapidi: avvio e design nella prima settimana, sviluppo nella seconda, contenuti finali, test e lancio nella terza. È il ritmo che teniamo quando le condizioni sono sotto controllo.',
    },
    {
      type: 'table',
      caption: 'Il nostro processo in 3 settimane per un sito vetrina curato.',
      headers: ['Settimana', 'Cosa facciamo'],
      rows: [
        ['Settimana 1: Avvio e design', 'Brief e strategia, architettura delle pagine, wireframe e design delle pagine chiave. In parallelo raccogliamo e organizziamo i contenuti.'],
        ['Settimana 2: Sviluppo', 'Costruzione delle pagine, impostazione mobile-first e responsive, integrazioni (form, analytics, eventuale CRM) e micro-animazioni.'],
        ['Settimana 3: Contenuti, test e lancio', 'Contenuti finali, ottimizzazione delle performance (i Core Web Vitals, le metriche con cui Google misura velocità e stabilità di caricamento di una pagina), SEO di base con dati strutturati, test su dispositivi, revisione e go-live.'],
      ],
    },
    {
      type: 'p',
      text: 'Le 3 settimane valgono per un sito vetrina. Le altre tipologie hanno tempi diversi, ed è giusto dirlo in partenza:',
    },
    {
      type: 'list',
      items: [
        '**Landing page:** pochi giorni lavorativi (3–5), se i contenuti ci sono già.',
        '**E-commerce e portali complessi:** 6–12 settimane o più, perché la mole di lavoro e di test cresce e non è comprimibile.',
        '**Cosa fa slittare i tempi:** contenuti in ritardo dal cliente, revisioni eccessive e scope che cambia in corsa. Il "3 settimane" vale quando questi tre fattori restano sotto controllo.',
      ],
    },

    { type: 'h2', text: 'Cosa rende possibile la velocità?' },
    {
      type: 'p',
      lead: true,
      text: 'La velocità nasce da quattro fattori che lavorano insieme: un metodo collaudato, un team dedicato al progetto, contenuti pronti in partenza e uno scope chiaro che non cambia in corsa. Tolto anche uno solo, le settimane si allungano.',
    },
    {
      type: 'list',
      items: [
        '**Metodo collaudato:** ogni fase ha tempi, obiettivi e responsabili definiti. Non decidiamo cosa fare giorno per giorno: lo sappiamo dall\'inizio, e questo elimina l\'improvvisazione che fa lievitare le ore.',
        '**Team dedicato:** chi lavora al tuo sito non lo gestisce in mezzo ad altri dieci. Una persona che segue un progetto alla volta lo chiude in giorni, non in mesi diluiti tra mille interruzioni.',
        '**Contenuti pronti:** testi, foto e materiali raccolti prima dello sviluppo. È la singola leva che sposta di più la data di consegna, perché i contenuti in ritardo sono la causa numero uno dei ritardi di progetto.',
        '**Scope chiaro:** sappiamo cosa includere fin dall\'inizio. Un perimetro definito evita le richieste che si accumulano in corsa e che, una alla volta, fanno slittare la consegna senza che nessuno se ne accorga.',
      ],
    },
    {
      type: 'p',
      text: 'Un esempio: un sito vetrina di cinque pagine con testi e immagini già pronti il primo giorno può chiudersi in due o tre settimane. Lo stesso identico sito, ma con i contenuti che arrivano \"a pezzi\" lungo il percorso, scivola facilmente oltre il mese, pur a parità di lavoro tecnico. La differenza non è nel codice: è nell\'organizzazione.',
    },

    { type: 'h2', text: 'Cosa non sacrifichiamo per andare veloci?' },
    {
      type: 'p',
      lead: true,
      text: 'Non sacrifichiamo design premium, performance e SEO di base. Sono il motivo stesso per cui un sito esiste: rinunciarvi per consegnare prima sarebbe un falso risparmio, perché otterresti in fretta qualcosa che non lavora per te.',
    },
    {
      type: 'p',
      text: 'Un sito rapido da costruire ma lento da caricare, o anonimo nell\'aspetto, non porta clienti: porta abbandoni. Per questo la velocità nel nostro metodo agisce sui tempi morti, non sulle rifiniture. Il [design premium](/blog/design-premium-sito-web) resta lavorato sul tuo posizionamento, la performance resta misurata e ottimizzata, la SEO di base resta impostata prima del lancio e non rimandata a dopo.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'La domanda da farti non è \"quanto ci mettete\", ma \"cosa ottengo alla fine\". Una consegna rapida ha valore solo se il sito che ricevi è veloce, curato e trovabile su Google. Diversamente, hai solo anticipato un problema.',
    },

    { type: 'h2', text: 'Cosa serve dal cliente per restare nei tempi?' },
    {
      type: 'p',
      lead: true,
      text: 'Servono tre cose, ed è bene saperlo prima di partire: contenuti pronti, feedback rapidi e un decisore unico. Sono i fattori che, più della complessità tecnica, decidono se il progetto chiude nei tempi o slitta.',
    },
    {
      type: 'p',
      text: 'Non è un dettaglio nostro: i contenuti che arrivano in ritardo dal cliente sono *la causa numero uno dei ritardi*. Quando testi e foto sono pronti il primo giorno, le revisioni sono concentrate in poche finestre e una sola persona ha l\'ultima parola sulle approvazioni, le quattro settimane diventano realistiche. Quando invece i materiali arrivano a singhiozzo e tre persone danno feedback contraddittori, nessun metodo regge.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Contenuti pronti prima dell\'avvio:** testi definitivi, foto in buona risoluzione, loghi e materiali di brand.',
        '**Feedback nelle finestre previste:** revisioni puntuali e raggruppate, non commenti sparsi giorno per giorno.',
        '**Un decisore unico:** una persona che approva, così le richieste non si contraddicono e nessuna decisione resta in sospeso.',
      ],
    },
    {
      type: 'p',
      text: 'È la stessa logica che approfondiamo in [quanto tempo ci vuole per fare un sito web](/blog/quanto-tempo-fare-sito-web): il collo di bottiglia non è quasi mai chi sviluppa, ma il flusso di informazioni e decisioni che deve raggiungerlo in tempo.',
    },

    { type: 'h2', text: 'Quali progetti NON stanno in 1–4 settimane?' },
    {
      type: 'p',
      lead: true,
      text: 'Non tutto entra in quattro settimane, ed è onesto dirlo. E-commerce ampi, portali con aree riservate, gestionali su misura e siti con molte integrazioni richiedono più tempo, perché la mole di lavoro e i test crescono in modo non comprimibile.',
    },
    {
      type: 'p',
      text: 'Nella nostra esperienza un e-commerce richiede in genere 6–12 settimane o più, contro le 2–4 di un vetrina e i pochi giorni di una landing page. Più funzioni un sito deve gestire, più sale il numero di casi da progettare, sviluppare e collaudare: forzare questi progetti in quattro settimane non li renderebbe veloci, li renderebbe fragili.',
    },
    {
      type: 'table',
      caption: 'Tempistiche realistiche per tipologia di progetto.',
      headers: ['Tipo di progetto', 'Tempo realistico'],
      rows: [
        ['Landing page', 'Pochi giorni – 1 settimana'],
        ['Sito vetrina', '2–4 settimane'],
        ['E-commerce', '6–12+ settimane'],
      ],
    },
    {
      type: 'p',
      text: 'In pratica: il nostro metodo 1–4 settimane è pensato per landing page e siti vetrina ben definiti. Se il tuo progetto è un e-commerce con centinaia di prodotti o un portale complesso, te lo diciamo subito e pianifichiamo tempi onesti. Se invece ti serve capire prima il budget, leggi [quanto costa un sito web](/blog/quanto-costa-sito-web), così tempi e investimento li valuti insieme.',
    },
    {
      type: 'cta',
      text: 'Hai una scadenza e vuoi un sito premium in poche settimane? Ti diciamo subito se è fattibile e con quali date.',
      label: 'Prenota una call',
      href: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ',
    },
  ],
  faq: [
    {
      q: 'Qualità e velocità sono in contraddizione?',
      a: 'No, se la velocità nasce dal metodo e non dai tagli. Quella che peggiora la qualità deriva dal saltare passaggi; quella che la mantiene deriva dall\'eliminare le attese. Con un processo definito e contenuti pronti accorci i tempi morti, non le rifiniture: il sito esce prima senza diventare più povero.',
    },
    {
      q: 'Cosa succede se i contenuti tardano?',
      a: 'I tempi si allungano, perché i contenuti che arrivano in ritardo sono la causa numero uno dei ritardi di progetto. Possiamo avviare struttura e design senza i testi definitivi, ma per pubblicare servono. Raccoglierli prima dell\'avvio è il modo più efficace per restare dentro le quattro settimane.',
    },
    {
      q: 'Una settimana è realistica?',
      a: 'Per una landing page o un sito molto essenziale sì, se tutto è pronto: i dati di settore parlano di pochi giorni per una landing. Per un sito vetrina completo, con più pagine e contenuti originali, l\'intervallo realistico è 2–4 settimane. Una settimana resta possibile solo su progetti semplici e ben preparati.',
    },
    {
      q: 'Posso chiedere modifiche durante il progetto?',
      a: 'Sì, le revisioni fanno parte del lavoro e le mettiamo in conto. La differenza la fa concentrarle nelle finestre previste invece di spalmarle su tutto il progetto. Feedback puntuali e un decisore unico permettono di apportare le modifiche giuste senza far slittare la data di lancio.',
    },
  ],
  internalLinks: [
    { slug: 'quanto-tempo-fare-sito-web', anchor: 'Quanto tempo ci vuole per fare un sito web' },
    { slug: 'quanto-costa-sito-web', anchor: 'Quanto costa un sito web nel 2026' },
    { slug: 'case-study-sito-3-settimane', anchor: 'Case study: sito in 3 settimane' },
    { slug: 'design-premium-sito-web', anchor: 'Cos\'è un design premium' },
  ],
  sources: [],
};

export default article;
