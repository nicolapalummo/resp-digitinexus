import type { Article } from '../types';
import { DEFAULT_AUTHOR_ID } from '../authors';

const article: Article = {
  id: 16,
  title: 'Sito che converte: 7 elementi di UX che fanno la differenza',
  metaTitle: 'Sito che converte: 7 elementi di UX decisivi | DigitiNexus',
  slug: 'sito-web-che-converte',
  metaDescription:
    'I 7 elementi di UX che trasformano i visitatori in clienti: chiarezza, gerarchia, velocità, prove, CTA e mobile. Con criteri pratici.',
  capsule:
    'Un sito converte quando è chiaro in pochi secondi: messaggio immediato, gerarchia visiva, velocità, prove di fiducia, call to action evidenti ed esperienza mobile impeccabile.',
  keywordPrimary: 'sito web che converte',
  keywordsSecondary: ['ux conversione', 'aumentare conversioni sito'],
  cluster: 'c2',
  isPillar: false,
  intent: 'I·MOFU',
  authorId: DEFAULT_AUTHOR_ID,
  publishDate: '2026-08-26',
  updatedDate: '2026-08-26',
  status: 'published',
  cover: {
    src: '/blog/covers/sito-web-che-converte.webp',
    alt: 'Sito web che converte: i 7 elementi di UX che trasformano i visitatori in clienti, da messaggio chiaro a form semplici',
  },
  body: [
    { type: 'h2', text: 'Cosa significa \'convertire\' per un sito?' },
    {
      type: 'p',
      lead: true,
      text: 'Convertire significa che una persona compie l\'azione che ti sei prefisso: ti scrive, prenota una chiamata, compra, scarica un documento. Non è una metrica astratta: ogni sito ha il suo obiettivo, e una conversione è quel passo dal visitatore al contatto. Un sito che converte è progettato attorno a quel passo, non solo all\'estetica.',
    },
    {
      type: 'p',
      text: 'L\'obiettivo cambia da progetto a progetto: consulenza per uno studio, acquisto per un negozio, form contatti per un\'azienda di servizi. Definire quale azione conta è il passo zero. I sette elementi che seguono sono proprietà di esperienza d\'uso (la UX, il modo in cui la persona vive la navigazione) che puoi verificare una per una, e funzionano solo insieme.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Messaggio chiaro sopra la piega**: cosa offri e per chi, leggibile senza scorrere.',
        '**Gerarchia visiva**: il design guida l\'occhio dall\'offerta alla prova all\'azione.',
        '**Velocità**: la pagina compare in fretta, prima che la persona se ne vada.',
        '**Prove di fiducia**: recensioni, loghi e casi reali che riducono il dubbio.',
        '**Call to action evidenti**: un\'azione chiara, ripetuta nei punti giusti.',
        '**Esperienza mobile**: tutto funziona dal telefono, dove arriva la maggior parte delle persone.',
        '**Form semplici**: pochi campi, nessun ostacolo tra l\'intenzione e il contatto.',
      ],
    },

    { type: 'h2', text: '1) Il messaggio sopra la piega è chiaro in pochi secondi?' },
    {
      type: 'p',
      lead: true,
      text: 'Il primo elemento è il messaggio nella prima schermata, quella che la persona vede prima di scorrere (sopra la piega). In pochi secondi deve capire cosa offri, per chi e perché fidarsi. Se per spiegarlo serve scorrere, è troppo tardi: chi non capisce subito non resta a indovinare, chiude.',
    },
    {
      type: 'p',
      text: 'Il criterio concreto è il \'test del visitatore distratto\': apri la home, conta cinque secondi, copri lo schermo. Sapresti dire cosa fa l\'azienda e a chi si rivolge? Se la risposta è un titolo generico tipo \'Soluzioni innovative per il tuo business\', il messaggio non c\'è. Per uno studio di architettura funziona \'Progettiamo case e ristrutturazioni su misura a Milano\', non \'Il design al servizio dello spazio\': la prima dice a una persona reale se è nel posto giusto. Il messaggio chiaro è il primo filtro, trattiene chi cerca quello che fai e lascia andare chi non è in target.',
    },

    { type: 'h2', text: '2) La gerarchia visiva guida l\'occhio o lo confonde?' },
    {
      type: 'p',
      lead: true,
      text: 'La gerarchia visiva è l\'ordine con cui il design ti fa guardare gli elementi: prima il messaggio principale, poi le prove, infine l\'azione. Su un sito che converte, dimensione dei titoli, spazio attorno agli elementi e colore dei pulsanti lavorano insieme per dirti, senza che tu ci pensi, dove guardare e cosa fare.',
    },
    {
      type: 'p',
      text: 'Il sintomo opposto è la pagina dove tutto grida con la stessa intensità: titoli della stessa misura, pulsanti tutti colorati, nessuno spazio che separi le sezioni. L\'occhio non sa dove posarsi e la persona se ne va. Si verifica col \'test dei tre secondi\': dopo tre secondi sulla home, ricordi qual era l\'azione principale? Un esempio che converte ha un titolo grande con l\'offerta, un sottotitolo in una riga, un solo pulsante evidente e, più sotto, le prove. La gerarchia distingue un [design premium](/blog/design-premium-sito-web) da un sito qualunque e trasforma il messaggio in un percorso verso l\'azione.',
    },

    { type: 'h2', text: '3) Il sito è abbastanza veloce da non far scappare?' },
    {
      type: 'p',
      lead: true,
      text: 'La velocità agisce prima di tutti gli altri elementi: un sito lento perde la persona prima che legga il messaggio o veda la call to action. Non è un dettaglio tecnico, ma il primo requisito perché tutto il resto abbia una possibilità. Una pagina che fa attendere secondi su rete mobile converte ciò che nessuno ha visto, cioè niente.',
    },
    {
      type: 'p',
      text: 'Il riferimento oggettivo sono i Core Web Vitals, le metriche pubbliche con cui Google misura velocità e stabilità: il tempo che impiega il contenuto principale a comparire, la reattività ai tuoi tocchi e quanto la pagina resta ferma invece di \'saltare\'. Sono controllabili da chiunque sul proprio sito. La velocità non si compra con un trucco, si progetta: immagini compresse, codice essenziale, il contenuto davanti agli effetti. Come si raggiunge senza sacrificare il design lo spieghiamo in [Core Web Vitals e perché un sito lento ti costa clienti](/blog/core-web-vitals-sito-veloce).',
    },

    { type: 'h2', text: '4) Ci sono prove di fiducia che riducono il dubbio?' },
    {
      type: 'p',
      lead: true,
      text: 'Le prove di fiducia mostrano, invece di affermare, che sei affidabile: recensioni vere, loghi di clienti, casi reali, certificazioni. Servono perché tra il \'mi interessa\' e il \'ti scrivo\' c\'è sempre un dubbio, e la prova è ciò che lo riduce nel momento in cui la persona sta decidendo se fidarsi.',
    },
    {
      type: 'p',
      text: 'Il criterio concreto è la verificabilità: una prova convince quanto è specifica e controllabile. \'Clienti soddisfatti in tutta Italia\' non prova nulla; una recensione con nome e contesto, il logo di un\'azienda nota, un caso che racconta problema e risultato sono prove vere. Per i professionisti contano anche i segnali di competenza, come l\'autore firmato e le credenziali: è il principio dell\'E-E-A-T, l\'insieme di esperienza, competenza, autorevolezza e affidabilità che rende credibile chi parla.',
    },
    {
      type: 'p',
      text: 'Per un commercialista, una pagina con recensioni Google reali, gli anni di attività e due o tre casi tipici converte più di dieci aggettivi. Posiziona le prove dove nasce il dubbio: accanto alla call to action, non in fondo. La fiducia non si dichiara, si dimostra nel punto in cui la persona sta per decidere.',
    },

    { type: 'h2', text: '5) Le call to action sono evidenti e dicono cosa succede?' },
    {
      type: 'p',
      lead: true,
      text: 'La call to action (CTA, l\'invito all\'azione: un pulsante o un link che chiede un passo preciso) è evidente quando si distingue dal resto, dice cosa accadrà e compare nei punti giusti. Su un sito che converte non devi cercarla: la vedi sopra la piega, la ritrovi a fine di ogni sezione utile e sai cosa succede se la premi.',
    },
    {
      type: 'p',
      text: 'Il testo conta quanto la posizione. \'Invia\' o \'Clicca qui\' non dicono nulla; \'Prenota una consulenza gratuita\' o \'Richiedi un preventivo\' dicono l\'azione e tolgono ansia. La CTA dev\'essere il pulsante più visibile per colore e contrasto: se ce ne sono cinque colorati uguali, nessuno è la call to action. Una sola azione primaria per pagina, ripetuta, batte tre azioni che si contendono l\'attenzione.',
    },
    {
      type: 'p',
      text: 'La posizione segue il percorso: una CTA sopra la piega intercetta chi è già convinto, una a fine pagina raccoglie chi aveva bisogno di leggere le prove prima di decidere. Per uno studio legale, lo stesso pulsante \'Fissa un primo appuntamento\' all\'inizio e dopo i casi trattati copre entrambi i momenti. In ogni schermata, la persona deve sapere qual è il passo successivo.',
    },

    { type: 'h2', text: '6) L\'esperienza dal telefono è curata quanto quella da desktop?' },
    {
      type: 'p',
      lead: true,
      text: 'L\'esperienza mobile è curata quando il sito è pensato dal telefono, non adattato dopo. Sul mobile arriva la maggior parte delle persone, ed è lì che si decidono molte conversioni: se i pulsanti sono troppo piccoli, il testo illeggibile o il form scomodo da compilare con il pollice, la persona rinuncia anche se l\'offerta la interessa.',
    },
    {
      type: 'p',
      text: 'I criteri sono verificabili sul tuo telefono, ora: i pulsanti sono grandi abbastanza da toccarli senza sbagliare; il testo si legge senza ingrandire; la call to action è raggiungibile senza scorrimenti infiniti; il numero si chiama con un tocco. Progettare dal telefono cambia le priorità: tieni l\'essenziale, metti l\'azione a portata di pollice. È l\'approccio mobile-first, che spieghiamo in [perché il tuo sito va progettato dal telefono](/blog/sito-mobile-first): dove vive la maggioranza di chi potrebbe diventare cliente.',
    },

    { type: 'h2', text: '7) I form chiedono il minimo indispensabile?' },
    {
      type: 'p',
      lead: true,
      text: 'Il form è l\'ultimo passo, e ogni campo in più è un motivo in più per non completarlo. Un form che converte chiede solo ciò che ti serve per ricontattare la persona: spesso bastano nome, contatto e una riga di messaggio. Tutto ciò che aggiungi \'per sicurezza\' (azienda, partita IVA) è attrito tra l\'intenzione e il contatto.',
    },
    {
      type: 'p',
      text: 'Il criterio è radicale: per ogni campo, chiediti se ti serve adesso o se puoi chiederlo dopo, parlando. La risposta è quasi sempre \'dopo\'. Un form di cinque campi essenziali converte più di uno di dodici, perché ogni campo è una micro-decisione e ogni decisione è un punto dove la persona può fermarsi. Aiutano anche etichette chiare, messaggi di errore che dicono cosa correggere e un pulsante d\'invio esplicito (\'Invia la richiesta\', non \'Submit\').',
    },
    {
      type: 'p',
      text: 'Per un\'azienda di servizi, un form con nome, contatto e una riga di descrizione raccoglie più richieste di un modulo che pretende subito budget, settore e numero di dipendenti. Quei dettagli si chiedono nella prima chiamata, quando la persona ha già deciso di parlarti. Il form non è il momento di qualificare, ma di togliere ogni ostacolo tra chi vuole scriverti e il pulsante.',
    },

    { type: 'h2', text: 'Come capisci se il tuo sito converte davvero?' },
    {
      type: 'p',
      lead: true,
      text: 'Lo capisci misurando, non a sensazione. Una conversione è un\'azione precisa, quindi puoi contarla: quante persone arrivano, quante compiono l\'azione che conta, dove si fermano. Senza misura ogni giudizio sul sito è un\'opinione; con la misura sai quale dei sette elementi sta zoppicando.',
    },
    {
      type: 'p',
      text: 'Il punto di partenza è definire l\'azione-obiettivo e tracciarla con uno strumento di analisi del traffico (Google Analytics o un\'alternativa attenta alla privacy), impostando come obiettivo l\'invio del form o la chiamata. Poi guardi il percorso: se molte persone arrivano ma poche scrivono, il problema è a valle (messaggio, prove, CTA, form); se arrivano in pochi, è a monte, un tema di visibilità. I sette elementi diventano la tua checklist diagnostica.',
    },
    {
      type: 'p',
      text: 'Se il tuo sito supera tutti e sette i controlli (messaggio, gerarchia, velocità, prove, CTA, mobile, form), hai una base che lavora per te invece di limitarsi a esistere. Sono le stesse proprietà che distinguono un sito costruito su misura del tuo obiettivo da un modello riempito in fretta, come spieghiamo confrontando [sito su misura e template](/blog/sito-su-misura-o-template).',
    },
    {
      type: 'cta',
      text: 'Vuoi sapere quale dei sette elementi sta frenando le conversioni del tuo sito? Lo vediamo insieme su esempi concreti, senza giri di parole.',
      label: 'Parliamone',
      href: 'https://calendly.com/digitinexus/30min',
    },
  ],
  faq: [
    {
      q: 'Quanti CTA servono in una pagina?',
      a: 'Una sola azione primaria, ripetuta nei punti giusti: sopra la piega, dopo le prove e a fine pagina. Più azioni diverse che si contendono l\'attenzione confondono e riducono le conversioni. Meglio lo stesso invito (\'Prenota una consulenza\') in più momenti del percorso che tre pulsanti che chiedono cose diverse.',
    },
    {
      q: 'Conta più il testo o il design del sito?',
      a: 'Lavorano insieme e nessuno dei due basta da solo. Il design guida l\'occhio e crea fiducia; il testo dice cosa offri, per chi e cosa fare. Un sito bellissimo con un messaggio confuso non converte, e un testo perfetto su una pagina caotica o lenta non viene mai letto. Curali entrambi.',
    },
    {
      q: 'Come misuro le conversioni del mio sito?',
      a: 'Definisci l\'azione-obiettivo (form inviato, chiamata, acquisto) e tracciala con uno strumento di analisi come Google Analytics, impostandola come obiettivo. Poi guardi quante persone la compiono rispetto a quante arrivano, e dove si fermano. Così smetti di giudicare a sensazione e capisci quale elemento di UX sta frenando i contatti.',
    },
    {
      q: 'Il mobile cambia le regole della conversione?',
      a: 'Non cambia i sette elementi, ma alza l\'asticella su tutti. Sul telefono lo spazio è poco e la pazienza minore: messaggio, gerarchia, velocità, CTA e form devono funzionare a portata di pollice. Per questo conviene progettare dal mobile, dove arriva la maggioranza delle persone, e non adattare dopo il sito da desktop.',
    },
  ],
  internalLinks: [
    { slug: 'sito-su-misura-o-template', anchor: 'Sito su misura o template' },
    { slug: 'design-premium-sito-web', anchor: 'Cos\'è un design premium per un sito' },
    { slug: 'core-web-vitals-sito-veloce', anchor: 'Core Web Vitals: perché un sito lento ti costa clienti' },
    { slug: 'sito-mobile-first', anchor: 'Mobile-first: progettare il sito dal telefono' },
  ],
  sources: [],
};

export default article;
