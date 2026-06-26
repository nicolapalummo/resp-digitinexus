import type { Article } from '../types';

const article: Article = {
  id: 50,
  title: 'Prompt efficaci per il lavoro: la guida pratica per non esperti',
  metaTitle: 'Prompt efficaci per il lavoro: guida pratica | DigitiNexus',
  slug: 'prompt-efficaci-lavoro',
  metaDescription:
    'Come scrivere prompt che danno risposte utili: ruolo, contesto, esempi e formato, con modelli pronti per il lavoro quotidiano.',
  capsule:
    'Un buon prompt dà all\'AI un ruolo, il contesto, un compito chiaro e il formato di output. Più sei specifico, migliore è la risposta: vaghezza dentro, vaghezza fuori.',
  keywordPrimary: 'come scrivere prompt efficaci',
  keywordsSecondary: ['prompt engineering', 'prompt ChatGPT per lavoro'],
  cluster: 'c7',
  intent: 'I·MOFU',
  authorId: 'nicola-palummo',
  publishDate: '2026-07-10',
  updatedDate: '2026-07-10',
  status: 'published',
  cover: {
    src: '/blog/covers/prompt-efficaci-lavoro.webp',
    alt: 'Come scrivere prompt efficaci per il lavoro: ruolo, contesto, compito e formato',
  },
  body: [
    { type: 'h2', text: 'Cos\'è un prompt e perché conta' },
    {
      type: 'p',
      lead: true,
      text: 'Un prompt è l\'istruzione che dai a un\'AI per ottenere una risposta. Non è una formula magica: è la qualità della richiesta a decidere la qualità del risultato. Se chiedi in modo vago, ricevi una risposta vaga; se descrivi con precisione cosa vuoi, l\'AI ti segue. Saper scrivere un buon prompt è la differenza tra uno strumento che fa perdere tempo e uno che lo fa risparmiare.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: '**Prompt:** la richiesta in linguaggio naturale che invii a un assistente di intelligenza artificiale. Può essere una domanda, un\'istruzione o un compito completo. L\'AI non legge nel pensiero: lavora solo su ciò che le scrivi, quindi tutto ciò che dai per scontato resta fuori dalla risposta.',
    },
    {
      type: 'p',
      text: 'L\'errore più comune è trattare l\'AI come un motore di ricerca, scrivendo due parole e aspettandosi la risposta perfetta. Funziona meglio se la tratti come un collaboratore bravo ma alle prime ore in azienda: non conosce il contesto, non sa per chi scrivi né con che tono. Più glielo spieghi, meno deve indovinare. E quando indovina, sbaglia.',
    },
    {
      type: 'p',
      text: 'La buona notizia è che non serve un linguaggio tecnico né conoscere il funzionamento interno dei modelli. Serve chiarezza, la stessa che useresti per delegare un compito a una persona. Chi scrive bene una mail di lavoro ha già metà delle competenze per scrivere un buon prompt.',
    },

    { type: 'h2', text: 'Quali sono i 4 ingredienti di un prompt efficace?' },
    {
      type: 'p',
      lead: true,
      text: 'Un prompt efficace contiene quattro elementi: il ruolo (chi deve essere l\'AI), il contesto (la situazione e i dettagli che servono), il compito (cosa deve fare esattamente) e il formato (come vuoi la risposta). Più questi quattro punti sono precisi, più la risposta sarà centrata. È lo schema da tenere a mente ogni volta che apri una chat per lavoro.',
    },
    {
      type: 'list',
      items: [
        '**Ruolo:** dici all\'AI chi deve impersonare. "Agisci come un consulente commerciale esperto" produce un risultato diverso da una richiesta generica, perché orienta il tono, il lessico e il punto di vista.',
        '**Contesto:** fornisci le informazioni di sfondo. Chi è il destinatario, qual è l\'obiettivo, cosa è già successo. Senza contesto l\'AI riempie i vuoti con ipotesi, e spesso sbaglia bersaglio.',
        '**Compito:** spieghi cosa deve fare, con un verbo chiaro: riassumi, riscrivi, traduci, elenca, confronta. Un compito ambiguo dà una risposta ambigua.',
        '**Formato:** indichi come vuoi l\'output. Una mail, un elenco puntato, una tabella, tre opzioni tra cui scegliere, massimo 100 parole. Il formato ti fa risparmiare il lavoro di sistemazione.',
      ],
    },
    {
      type: 'p',
      text: 'Mettiamoli insieme. Invece di scrivere "fammi una mail per un cliente", prova così: "Agisci come responsabile commerciale di uno studio professionale (ruolo). Un cliente storico ha chiesto uno sconto del 20% che non possiamo concedere (contesto). Scrivi una mail che dica di no senza incrinare il rapporto e proponga un\'alternativa (compito). Tono cordiale e diretto, massimo 120 parole (formato)." La seconda versione produce un testo quasi pronto.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Non serve includere sempre tutti e quattro gli ingredienti in modo rigido. Per un compito semplice bastano compito e formato. Ma quando la risposta esce generica o fuori bersaglio, quasi sempre manca uno di questi quattro elementi: ripercorrili come una checklist.',
    },

    { type: 'h2', text: 'Quali sono gli errori più comuni?' },
    {
      type: 'p',
      lead: true,
      text: 'I due errori che rovinano più spesso un prompt sono la vaghezza e il sovraccarico. Un prompt troppo generico lascia all\'AI troppe scelte e ricevi una risposta media, buona per nessuno. Un prompt che chiede dieci cose insieme manda l\'AI in confusione: ne fa due bene, le altre male. Specificità e una richiesta alla volta sono le due regole che migliorano subito i risultati.',
    },
    {
      type: 'p',
      text: 'La vaghezza è insidiosa perché sembra efficienza. "Migliora questo testo" non dice cosa significhi migliorare: più corto? Più formale? Più persuasivo? L\'AI sceglie per te, e raramente sceglie ciò che avevi in mente. Sostituisci gli aggettivi vaghi con criteri: "rendilo più breve del 30% e più formale, mantenendo i tre punti chiave".',
    },
    {
      type: 'p',
      text: 'Il sovraccarico è l\'errore opposto: scrivere un prompt che chiede di analizzare un mercato, scrivere un piano, redigere tre mail e preparare una presentazione, tutto in una volta. Conviene spezzare: un compito per messaggio. Ottieni l\'analisi, la verifichi, poi passi al piano basandoti su quella. Lavorare a piccoli passi dà risultati più solidi e ti permette di correggere la rotta prima che l\'errore si propaghi.',
    },
    {
      type: 'list',
      items: [
        '**Troppo vago:** "scrivi qualcosa sul nostro servizio" → meglio: "scrivi un paragrafo di 80 parole che spieghi il servizio X a un titolare di PMI, concentrandoti sul risparmio di tempo".',
        '**Troppe richieste:** "analizza, riscrivi, traduci e impagina" → meglio: una richiesta per volta, costruendo sul risultato precedente.',
        '**Nessun esempio:** quando hai uno stile preciso in testa, mostralo invece di descriverlo a parole.',
      ],
    },

    { type: 'h2', text: 'Esempi pratici di prompt per il lavoro' },
    {
      type: 'p',
      lead: true,
      text: 'I prompt più utili nel lavoro quotidiano riguardano tre attività ricorrenti: scrivere mail, riassumere documenti lunghi e preparare bozze di testi. Per ognuna vale lo stesso schema: ruolo, contesto, compito, formato. Qui sotto trovi tre modelli pronti da adattare, senza inserire dati riservati o personali nella chat.',
    },
    {
      type: 'p',
      text: '**Mail di risposta.** "Agisci come assistente di uno studio. Ho ricevuto questa richiesta da un potenziale cliente [incolli il testo, senza dati identificativi]. Scrivi una risposta che ringrazi, risponda alla domanda principale e proponga una call conoscitiva. Tono professionale e cordiale, massimo 120 parole." Ottieni una bozza solida che poi rifinisci con la tua firma e i dettagli reali.',
    },
    {
      type: 'p',
      text: '**Riassunto di un documento.** "Agisci come analista. Riassumi il testo qui sotto in 5 punti elenco, evidenziando solo le decisioni operative e le scadenze. Ignora le parti introduttive. [testo]." Funziona per verbali, contratti generici, report: l\'AI estrae l\'essenziale e tu eviti di leggere venti pagine per trovarne tre righe importanti.',
    },
    {
      type: 'p',
      text: '**Bozza di un testo.** "Agisci come copywriter. Devo presentare il servizio X (descrizione: …) a piccole imprese che non hanno tempo da perdere. Scrivimi 3 versioni di un titolo e un sottotitolo, ognuna con un angolo diverso: tempo, costo, semplicità. Massimo 15 parole a titolo." Avere più varianti ti dà materiale da scegliere e combinare, invece di una sola proposta da prendere o lasciare.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Non incollare in chat dati riservati o personali: nomi di clienti, codici fiscali, informazioni sensibili, documenti coperti da riservatezza. Anonimizza prima di chiedere. Su come trattare i dati con l\'AI nel rispetto delle norme trovi i criteri in [AI, privacy e GDPR](/blog/ai-privacy-gdpr).',
    },

    { type: 'h2', text: 'Come migliorare un prompt che non funziona?' },
    {
      type: 'p',
      lead: true,
      text: 'Quando la risposta non ti soddisfa, non riscrivere tutto da capo: correggi e riprova. Il modo di lavorare con l\'AI è iterativo, una conversazione. Dici cosa non va ("troppo formale", "manca il punto sui costi", "accorcia della metà") e l\'AI rifinisce. Spesso bastano due o tre passaggi per arrivare al risultato giusto, molto più veloci che ripartire da zero.',
    },
    {
      type: 'p',
      text: 'La leva più potente, quando lo stile non torna, è dare un esempio. Descrivere a parole un tono è difficile; mostrarlo è immediato. Incolla una mail che hai scritto in passato e chiedi "usa questo stile". L\'AI coglie ritmo, lessico e livello di formalità da un campione molto meglio che da dieci aggettivi. Un buon esempio vale più di una lunga lista di istruzioni.',
    },
    {
      type: 'p',
      text: 'Resta una regola che non cambia mai: rileggi e verifica prima di usare ciò che l\'AI produce. I modelli possono presentare informazioni sbagliate con tono sicuro, soprattutto su nomi, numeri e dati. Per i motivi di questo comportamento e per come controllarlo, abbiamo scritto [perché l\'AI inventa le risposte](/blog/allucinazioni-ai). Il prompt fa il lavoro pesante, ma la responsabilità di ciò che pubblichi resta tua.',
    },
    {
      type: 'cta',
      text: 'Vuoi capire dove l\'AI può davvero farti risparmiare tempo nel lavoro di tutti i giorni? Partiamo dai tuoi processi e troviamo gli usi concreti, senza hype.',
      label: 'Parliamone',
      href: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ',
    },
  ],
  faq: [
    {
      q: 'Serve un linguaggio speciale per scrivere i prompt?',
      a: 'No. Non esistono parole magiche o codici segreti. Si scrive in linguaggio naturale, come quando deleghi un compito a un collega. Conta la chiarezza: dire chi, cosa, in quale contesto e in che formato. Chi sa spiegarsi bene a voce o per iscritto ha già le competenze giuste per scrivere prompt efficaci.',
    },
    {
      q: 'Meglio scrivere i prompt in italiano o in inglese?',
      a: 'Per il lavoro in italiano va benissimo l\'italiano: i modelli attuali lo gestiscono bene e ti permettono di esprimere meglio le sfumature. L\'inglese può aiutare in casi tecnici molto specifici, ma per mail, riassunti e bozze in italiano scrivere nella tua lingua è la scelta più naturale e produce risultati più adatti al tuo contesto.',
    },
    {
      q: 'Posso dare esempi all\'AI per ottenere risultati migliori?',
      a: 'Sì, ed è una delle strategie più efficaci. Mostrare un esempio dello stile o del formato che vuoi funziona meglio che descriverlo a parole. Incolla una mail già scritta, un testo modello o un output ideale e chiedi all\'AI di seguirlo. Coglie tono e struttura da un campione molto più precisamente che da una serie di istruzioni astratte.',
    },
    {
      q: 'Le stesse regole valgono per tutti i modelli di AI?',
      a: 'Sì, in larga parte. Ruolo, contesto, compito e formato funzionano con qualsiasi assistente conversazionale, perché rispondono al modo in cui questi strumenti lavorano. Possono cambiare dettagli e funzioni avanzate da un modello all\'altro, ma i principi di base di un buon prompt restano gli stessi ovunque. Imparati una volta, ti servono dappertutto.',
    },
  ],
  internalLinks: [
    { slug: 'intelligenza-artificiale-per-aziende', anchor: 'Intelligenza artificiale per le aziende' },
    { slug: 'allucinazioni-ai', anchor: 'Perché l\'AI inventa le risposte' },
    { slug: 'ai-privacy-gdpr', anchor: 'AI, privacy e GDPR' },
  ],
  sources: [],
};

export default article;
