import type { Article } from '../types';
import { DEFAULT_AUTHOR_ID } from '../authors';

const article: Article = {
  id: 15,
  title: 'Mobile-first: perché il tuo sito va progettato dal telefono',
  metaTitle: 'Mobile-first: progettare il sito dal telefono | DigitiNexus',
  slug: 'sito-mobile-first',
  metaDescription:
    'Cosa significa mobile-first e perché conviene progettare il sito a partire dallo smartphone: usabilità, velocità e ranking.',
  capsule:
    'Mobile-first significa progettare il sito partendo dallo smartphone, dove avviene la maggior parte delle visite. Migliora usabilità e velocità su mobile e aiuta il posizionamento, dato che Google indicizza in ottica mobile.',
  keywordPrimary: 'sito mobile first',
  keywordsSecondary: ['sito responsive', 'sito ottimizzato mobile'],
  cluster: 'c2',
  isPillar: false,
  intent: 'I·TOFU',
  authorId: DEFAULT_AUTHOR_ID,
  publishDate: '2026-10-19',
  updatedDate: '2026-10-19',
  status: 'published',
  cover: {
    src: '/blog/covers/sito-mobile-first.webp',
    alt: 'Sito mobile-first: progettare un sito web partendo dallo smartphone per usabilità, velocità e posizionamento',
  },
  body: [
    { type: 'h2', text: 'Cosa significa mobile-first?' },
    {
      type: 'p',
      lead: true,
      text: 'Mobile-first significa progettare un sito partendo dallo schermo dello smartphone, e solo dopo adattarlo a tablet e desktop. È l\'opposto dell\'approccio tradizionale, che disegnava prima la versione desktop e poi la rimpiccioliva per il telefono. Partire dal mobile ti obbliga a decidere cosa conta davvero, perché su uno schermo piccolo non c\'è spazio per tutto.',
    },
    {
      type: 'p',
      text: 'La differenza non è un dettaglio da addetti ai lavori. Quando disegni prima per il telefono, sei costretto a mettere in ordine di priorità i contenuti: cosa deve vedere la persona per primo, quale azione vuoi che compia, cosa può aspettare più in basso. Quando invece parti dal desktop, lo schermo grande perdona tutto, e quando arrivi al mobile ti ritrovi a togliere e comprimere all\'ultimo. Il risultato si vede: un sito mobile-first sembra pensato per il telefono, un sito ridimensionato sembra subìto dal telefono.',
    },
    { type: 'h2', text: 'Mobile-first e responsive sono la stessa cosa?' },
    {
      type: 'p',
      lead: true,
      text: 'No, sono due cose diverse anche se collegate. Responsive significa che il sito si adatta a qualunque dimensione di schermo, riorganizzando i contenuti in automatico. Mobile-first è l\'approccio di progettazione che parte dal mobile come scenario principale. Un sito può essere responsive ma pensato per il desktop; un sito mobile-first è quasi sempre anche responsive, ma il punto di partenza è opposto.',
    },
    {
      type: 'p',
      text: 'Per capire la differenza con un\'immagine: il responsive è la capacità del vestito di adattarsi a corporature diverse; il mobile-first è la decisione di cucire prima la taglia più stretta, quella che ti costringe a tenere solo l\'essenziale. Un sito può adattarsi al telefono (responsive) e restare comunque pensato male per chi lo usa lì, con menu ereditati dal desktop, testi pensati per il mouse, pulsanti troppo vicini.',
    },
    {
      type: 'p',
      text: 'Per uno studio professionale la differenza è concreta. Un sito responsive ma desktop-first può mostrare sul telefono una tabella di servizi a sei colonne che diventa illeggibile; un sito mobile-first quella stessa informazione la presenta a schede impilate, una sotto l\'altra, leggibili con il pollice. Stesso contenuto, esperienza opposta.',
    },

    { type: 'h2', text: 'Perché partire dal mobile conviene?' },
    {
      type: 'p',
      lead: true,
      text: 'Partire dal mobile conviene per due motivi che si rinforzano a vicenda. Il primo riguarda le persone: oggi la maggioranza delle visite a un sito arriva da smartphone, quindi progettare per il telefono significa progettare per la maggior parte dei tuoi visitatori reali. Il secondo riguarda Google, che da anni indicizza i siti in ottica mobile: è la versione mobile quella che il motore guarda per decidere il posizionamento.',
    },
    {
      type: 'p',
      text: 'Sul primo punto vale la pena essere onesti sui numeri: la prevalenza del traffico mobile è ormai un fatto noto a chiunque guardi le statistiche del proprio sito, ma le percentuali variano molto per settore e tipo di attività. Un blog informativo, un e-commerce e il sito di uno studio legale hanno quote di mobile diverse fra loro. Il consiglio pratico è uno solo: apri tu stesso l\'analitica del tuo sito e guarda la ripartizione fra dispositivi. Per la stragrande maggioranza delle attività che incontriamo, il telefono è già il dispositivo principale, e spesso da tempo.',
    },
    {
      type: 'p',
      text: 'Sul secondo punto il meccanismo si chiama mobile-first indexing: è il sistema con cui Google usa la versione mobile di una pagina come riferimento per indicizzarla e valutarla. In pratica, se la tua versione mobile è povera, lenta o incompleta rispetto al desktop, è quella versione povera che il motore considera. Progettare dal mobile elimina alla radice il rischio di avere un sito che fa bella figura sul computer e cattiva figura proprio dove conta per il ranking.',
    },

    { type: 'h2', text: 'Cosa cambia nel design quando parti dal telefono?' },
    {
      type: 'p',
      lead: true,
      text: 'Partendo dal telefono cambia soprattutto l\'ordine delle priorità. Su uno schermo largo dieci centimetri non puoi mettere tutto in primo piano, quindi sei costretto a decidere cosa va sopra la prima schermata, quanto deve essere grande il testo per leggersi senza zoom, quanto spazio lasciare attorno ai pulsanti perché si tocchino con il dito senza sbagliare. Il vincolo dello spazio diventa un alleato della chiarezza.',
    },
    {
      type: 'list',
      items: [
        '**Priorità dei contenuti**: il messaggio principale e l\'azione che vuoi (chiamare, prenotare, scrivere) stanno in alto, subito, senza far scorrere a lungo.',
        '**Bersagli del tocco**: pulsanti e link abbastanza grandi e distanziati da premersi con il pollice, senza colpire per sbaglio quello accanto.',
        '**Leggibilità**: corpo del testo generoso, interlinea ariosa, righe non troppo lunghe, contrasto netto tra testo e sfondo.',
        '**Navigazione semplice**: poche voci di menu essenziali, raggiungibili con una mano, invece di un menu desktop trascinato sul telefono.',
        '**Form brevi**: i moduli chiedono il minimo indispensabile, perché scrivere sul telefono costa fatica e ogni campo in più fa abbandonare.',
      ],
    },
    {
      type: 'p',
      text: 'Un esempio concreto: la home di un commercialista. In ottica mobile-first la prima schermata dice cosa fa lo studio e per chi, mostra un solo pulsante evidente (\'Prenota una consulenza\') e tiene tutto il resto, chi siamo, servizi dettagliati, blog, più in basso. La persona col telefono in mano capisce e agisce in pochi secondi. La stessa pagina pensata per il desktop e poi schiacciata sul telefono mette spesso il modulo di contatto a fondo pagina, dopo dieci scroll, e perde chi voleva solo prenotare.',
    },

    { type: 'h2', text: 'La velocità su mobile conta più che sul desktop?' },
    {
      type: 'p',
      lead: true,
      text: 'Sì, sul telefono la velocità pesa di più, per un motivo banale: le condizioni d\'uso sono peggiori. Lo smartphone ha in media meno potenza di calcolo di un computer, la connessione mobile è più instabile, e chi naviga in giro è più impaziente di chi è seduto alla scrivania. Una pagina che sul desktop in fibra carica in un attimo, sul telefono in 4G può far aspettare quel paio di secondi che basta a far tornare indietro la persona.',
    },
    {
      type: 'p',
      text: 'Per questo un sito mobile-first cura la velocità fin dall\'inizio, non come ritocco finale. Significa immagini compresse e dimensionate per lo schermo del telefono, niente caroselli pesanti che bloccano il caricamento, codice essenziale invece di decine di funzioni inutili. Le metriche con cui Google misura proprio questo, il tempo prima che compaia il contenuto, la reattività ai tuoi tocchi, la stabilità della pagina mentre carica, si chiamano Core Web Vitals: sono pubbliche e puoi controllarle tu sul tuo sito.',
    },
    {
      type: 'p',
      text: 'Velocità e mobile-first vanno quindi a braccetto: progettare dal telefono e progettare veloce sono la stessa attenzione vista da due lati. Come si ottiene un sito rapido senza rinunciare al design lo approfondiamo in [Core Web Vitals: perché un sito lento ti costa clienti](/blog/core-web-vitals-sito-veloce).',
    },

    { type: 'h2', text: 'Quali sono gli errori più comuni sul mobile?' },
    {
      type: 'p',
      lead: true,
      text: 'Gli errori più comuni nascono quasi sempre da un sito pensato per il desktop e adattato al telefono in fretta. Sono pochi e si riconoscono a colpo d\'occhio: testo troppo piccolo da leggere senza zoom, pulsanti appiccicati che fanno sbagliare il tocco, popup invasivi che coprono lo schermo appena apri la pagina. Ognuno di questi, da solo, basta a far perdere una parte dei visitatori.',
    },
    {
      type: 'list',
      items: [
        '**Testo minuscolo**: per leggere devi ingrandire la pagina con due dita. Chi non ha voglia di farlo se ne va.',
        '**Pulsanti troppo vicini**: link e bottoni così ravvicinati che col pollice ne premi uno per l\'altro, soprattutto nei menu e nei footer.',
        '**Popup invasivi**: una finestra che copre l\'intera schermata appena arrivi, con la \'x\' di chiusura minuscola e nascosta. Google sconsiglia esplicitamente questi interstiziali sul mobile.',
        '**Menu desktop trascinato sul telefono**: voci troppe e troppo fitte, pensate per essere cliccate col mouse, non toccate col dito.',
        '**Immagini non ottimizzate**: foto enormi che caricano lentamente e fanno saltare la pagina mentre compaiono.',
      ],
    },
    {
      type: 'p',
      text: 'Il filo comune di tutti questi errori è uno: chi ha costruito il sito non lo ha mai usato davvero da telefono, in piedi, con una mano, con la fretta di chi sta cercando in fretta. Mobile-first è anche questo, mettersi nei panni di chi visita il sito nelle condizioni reali, non in quelle comode di chi lo progetta. È lo stesso principio che rende [un sito capace di convertire](/blog/sito-web-che-converte): pensare a chi lo usa, non a chi lo disegna.',
    },

    { type: 'h2', text: 'Come testo il mio sito sul mobile?' },
    {
      type: 'p',
      lead: true,
      text: 'Il modo migliore per testare il mobile è il più ovvio e il più trascurato: prendi il telefono e usa il tuo sito come farebbe un cliente. Aprilo da smartphone, non dal computer ridimensionando la finestra. Prova a leggere, a toccare i pulsanti, a compilare il modulo di contatto, a prenotare. Se ti scopri a ingrandire con le dita o a sbagliare un tocco, hai già trovato un problema da correggere.',
    },
    {
      type: 'p',
      text: 'Oltre alla prova a mano, esistono controlli gratuiti che danno una misura oggettiva. Gli strumenti di Google Search Console segnalano i problemi di usabilità da mobile della tua pagina; gli strumenti di analisi delle prestazioni mostrano i Core Web Vitals separati per mobile e desktop, così vedi nero su bianco se la versione telefono è più lenta. Sono controlli alla portata di chiunque, non servono competenze tecniche per leggerne il responso principale.',
    },
    {
      type: 'p',
      text: 'Se da questi controlli emerge che il tuo sito attuale nasce desktop-first e fatica sul telefono, la domanda diventa se valga la pena ritoccarlo o ripensarlo. Per i casi più seri ne abbiamo parlato in modo dedicato, partendo proprio dai segnali che dicono [quando conviene rifare il sito](/blog/sito-su-misura-o-template). La regola di fondo resta semplice: un sito che non funziona dove la maggior parte delle persone lo usa non è un sito che funziona.',
    },
    {
      type: 'cta',
      text: 'Vuoi capire se il tuo sito è davvero pensato per il telefono o solo adattato all\'ultimo? Lo guardiamo insieme dal mobile, con esempi concreti e senza giri di parole.',
      label: 'Parliamone',
      href: 'https://calendly.com/digitinexus/30min',
    },
  ],
  faq: [
    {
      q: 'Responsive e mobile-first sono la stessa cosa?',
      a: 'No. Responsive significa che il sito si adatta a ogni dimensione di schermo. Mobile-first è l\'approccio di progettazione che parte dal telefono come scenario principale. Un sito può essere responsive ma pensato per il desktop; un sito mobile-first è quasi sempre anche responsive, ma il punto di partenza è opposto.',
    },
    {
      q: 'Conta più il mobile o il desktop?',
      a: 'Dipende dal tuo settore, ma per la maggior parte delle attività il mobile è ormai il dispositivo principale per numero di visite. Apri l\'analitica del tuo sito e guarda la ripartizione reale. In più Google indicizza in ottica mobile, quindi è la versione telefono che pesa di più sul posizionamento.',
    },
    {
      q: 'Un sito non ottimizzato per il mobile viene penalizzato?',
      a: 'Sì, in due modi. Google indicizza i siti in ottica mobile, quindi una versione telefono lenta o incompleta abbassa il posizionamento. E le persone abbandonano un sito difficile da usare sullo smartphone. Il danno è doppio: perdi visibilità nei risultati e perdi i visitatori che comunque arrivano.',
    },
    {
      q: 'Come testo il mio sito sul mobile?',
      a: 'Prima di tutto usalo dal telefono come un cliente: leggi, tocca i pulsanti, compila il modulo. Poi affidati a controlli gratuiti come Google Search Console per i problemi di usabilità mobile e agli strumenti che misurano i Core Web Vitals separati per mobile, così vedi se la versione telefono è più lenta.',
    },
  ],
  internalLinks: [
    { slug: 'core-web-vitals-sito-veloce', anchor: 'Core Web Vitals: perché un sito lento ti costa clienti' },
    { slug: 'sito-web-che-converte', anchor: 'Sito che converte: 7 elementi di UX' },
    { slug: 'sito-su-misura-o-template', anchor: 'Sito su misura o template' },
  ],
  sources: [],
};

export default article;
