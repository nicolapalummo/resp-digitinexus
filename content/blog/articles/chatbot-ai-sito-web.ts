import type { Article } from '../types';

const article: Article = {
  id: 51,
  title: 'Chatbot AI sul sito: quando serve davvero (e quando no)',
  metaTitle: 'Chatbot AI sul sito: quando serve davvero (e no) | DigitiNexus',
  slug: 'chatbot-ai-sito-web',
  metaDescription:
    'Quando un chatbot AI sul sito porta valore e quando è inutile: casi d\'uso, vantaggi, limiti e cosa serve per farlo bene.',
  capsule:
    'Un chatbot AI sul sito conviene quando ricevi molte domande ripetute o contatti fuori orario: risponde H24, qualifica i lead e gestisce prenotazioni. È inutile su siti con poco traffico o con richieste molto specifiche.',
  keywordPrimary: 'chatbot AI sito web',
  keywordsSecondary: ['chatbot aziendale', 'assistente virtuale sito'],
  cluster: 'c7',
  intent: 'I·C·MOFU',
  authorId: 'nicola-palummo',
  publishDate: '2026-07-17',
  updatedDate: '2026-07-17',
  status: 'published',
  cover: {
    src: '/blog/covers/chatbot-ai-sito-web.webp',
    alt: 'Chatbot AI sul sito web: quando un assistente virtuale conviene davvero e quando no',
  },
  body: [
    { type: 'h2', text: 'Cosa fa un chatbot AI sul sito?' },
    {
      type: 'p',
      lead: true,
      text: 'Un **chatbot AI sul sito** è un assistente virtuale che dialoga con i visitatori in linguaggio naturale: risponde alle domande frequenti, raccoglie i contatti di chi è interessato e gestisce richieste semplici come fissare un appuntamento. Lavora H24, anche quando tu e il tuo team siete altrove, e parla con le informazioni reali della tua azienda.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: '**Chatbot AI:** software che capisce le domande scritte in linguaggio naturale e risponde in modo coerente, senza menù rigidi o parole chiave esatte. A differenza dei vecchi chatbot "a bottoni", interpreta il senso della richiesta e formula una risposta, attingendo ai contenuti che gli hai fornito.',
    },
    {
      type: 'p',
      text: 'In pratica fa tre cose. **Risponde** alle domande ricorrenti su orari, servizi, prezzi e condizioni, senza far attendere nessuno. **Qualifica** chi visita il sito, capendo se è un contatto utile e raccogliendo i dati giusti prima di passarlo a una persona. **Gestisce** azioni semplici, come prenotare una consulenza o aprire una richiesta di assistenza.',
    },
    {
      type: 'p',
      text: 'Un esempio concreto. Un visitatore arriva sul sito di uno studio di commercialisti alle 22 e chiede "fate la dichiarazione dei redditi per i forfettari?". Il chatbot risponde subito con le informazioni reali dello studio, spiega come funziona il primo appuntamento e propone una data in agenda. La mattina dopo lo studio trova un contatto già qualificato, invece di un\'occasione persa.',
    },

    { type: 'h2', text: 'Quando conviene un chatbot AI?' },
    {
      type: 'p',
      lead: true,
      text: 'Conviene quando il chatbot risolve un problema che hai davvero: troppe domande ripetute che assorbono tempo, contatti che arrivano fuori orario e restano senza risposta, picchi di richieste che non riesci a gestire in tempo reale. Se ti riconosci in questi segnali, un assistente virtuale ti fa guadagnare tempo e contatti.',
    },
    {
      type: 'p',
      text: 'Il segnale più forte è il **volume di domande uguali**. Se ogni settimana rispondi venti volte alle stesse cinque domande (orari, costi, "come funziona", "venite anche da me", "come prenoto"), quel tempo si può recuperare. Il chatbot gestisce la parte ripetitiva e libera te e il tuo team per le richieste che meritano davvero una persona.',
    },
    {
      type: 'p',
      text: 'Il secondo segnale è il **fuori orario**. Molte richieste arrivano la sera o nel weekend, quando nessuno può rispondere. Chi non riceve risposta in fretta spesso scrive al concorrente successivo. Un assistente sempre attivo intercetta quel contatto, risponde alle prime domande e fissa l\'appuntamento. Su come automatizzare primo contatto e prenotazioni senza perdere il rapporto umano, vedi [prenotazioni e primo contatto con l\'AI](/blog/prenotazioni-contatti-ai).',
    },
    {
      type: 'list',
      items: [
        '**Tante domande ripetute:** rispondi spesso alle stesse cose e quel tempo pesa sulla giornata.',
        '**Contatti fuori orario:** richieste la sera e nel weekend che oggi restano senza risposta.',
        '**Traffico costante:** abbastanza visitatori perché un assistente sempre attivo abbia senso.',
        '**Un\'azione chiara da far compiere:** prenotare, chiedere un preventivo, aprire un ticket.',
      ],
    },

    { type: 'h2', text: 'Quando NON conviene un chatbot AI?' },
    {
      type: 'p',
      lead: true,
      text: 'Non conviene quando il sito ha poco traffico, quando le richieste sono troppo specifiche o delicate per essere automatizzate, o quando non hai contenuti chiari da cui far attingere il chatbot. In questi casi un assistente virtuale aggiunge costi e manutenzione senza un ritorno reale: meglio investire altrove.',
    },
    {
      type: 'p',
      text: 'Se il sito riceve pochissime visite, un chatbot risolve un problema che non hai. Con due o tre richieste alla settimana, una persona risponde meglio e in modo più caldo di qualsiasi automazione, e l\'investimento non si ripaga. Prima del chatbot, lì, viene il lavoro per portare traffico: un sito che si fa trovare conta più di un assistente che nessuno interroga.',
    },
    {
      type: 'p',
      text: 'C\'è poi il tema della **complessità**. Se le tue richieste sono quasi sempre casi unici, che dipendono da mille variabili (una consulenza legale articolata, una perizia tecnica su misura), il chatbot non può rispondere bene e rischia di dare informazioni sbagliate. Lì il suo ruolo onesto è uno solo: capire la richiesta a grandi linee, raccogliere i dati e passare la persona a un esperto, non simulare una competenza che non ha.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Un chatbot che inventa risposte su temi delicati fa più danni che benefici. Se la materia è troppo specifica o sensibile (salute, legale, fiscale puntuale), il sistema deve dichiarare i propri limiti e indirizzare a una persona, non riempire i vuoti con risposte verosimili ma inventate.',
    },

    { type: 'h2', text: 'Come si rende utile (e "tuo") un chatbot?' },
    {
      type: 'p',
      lead: true,
      text: 'Un chatbot diventa davvero utile quando risponde con le informazioni reali della tua azienda, non con risposte generiche. Lo si ottiene collegandolo ai tuoi contenuti, sito, FAQ, listini e documenti, con una tecnica chiamata RAG. Così l\'assistente parla con la tua voce e con i tuoi dati, e smette di improvvisare.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: '**RAG (Retrieval-Augmented Generation):** tecnica che collega l\'AI ai tuoi documenti. Prima di rispondere, il sistema cerca i passaggi pertinenti nei tuoi contenuti e li usa come base, così la risposta si fonda su informazioni reali e verificabili invece che sulla sola conoscenza generica del modello.',
    },
    {
      type: 'p',
      text: 'La differenza è netta. Un chatbot generico risponde "a braccio" e può sbagliare prezzi, orari o condizioni. Un chatbot collegato ai tuoi contenuti risponde a partire da ciò che hai scritto tu, e quando aggiorni un documento la risposta cambia di conseguenza, senza riaddestrare nulla. Come funziona nel dettaglio lo spieghiamo in [RAG: l\'AI con i dati della tua azienda](/blog/rag-ai-dati-azienda).',
    },
    {
      type: 'p',
      text: 'Da qui derivano due regole pratiche. Primo: la qualità del chatbot è la qualità dei tuoi contenuti, "spazzatura dentro, spazzatura fuori", quindi prima si fa ordine in FAQ e documenti. Secondo: serve sempre una via di uscita verso una persona, perché l\'assistente deve riconoscere quando non sa rispondere e passare il testimone, invece di insistere.',
    },

    { type: 'h2', text: 'Cosa succede ai dati scambiati in chat?' },
    {
      type: 'p',
      lead: true,
      text: 'Quando un visitatore scrive a un chatbot, condivide dati personali: nome, email, a volte informazioni sensibili. Vanno trattati nel rispetto del GDPR, con un\'informativa chiara, un trattamento corretto e la scelta consapevole di dove sono ospitati e chi può leggerli. La privacy non è un dettaglio tecnico: è parte del progetto.',
    },
    {
      type: 'p',
      text: 'Le domande da porsi sono concrete. Dove vengono salvate le conversazioni? Chi vi ha accesso? I messaggi vengono usati per addestrare modelli esterni o restano tuoi? Per quanto tempo vengono conservati? Sono scelte che incidono sulla conformità e sulla fiducia di chi scrive, soprattutto per uno studio professionale che tratta dati delicati per legge.',
    },
    {
      type: 'p',
      text: 'La regola pratica è la trasparenza: dire all\'utente che sta parlando con un assistente AI, mostrare l\'informativa privacy e raccogliere solo i dati che servono davvero. Il tema merita attenzione e va impostato bene fin dall\'inizio. Lo approfondiamo, con i riferimenti normativi, in [AI, privacy e GDPR](/blog/ai-privacy-gdpr).',
    },

    { type: 'h2', text: 'Quanto costa un chatbot AI sul sito?' },
    {
      type: 'p',
      lead: true,
      text: 'Il costo di un chatbot AI dipende da quanto deve essere "su misura": un assistente semplice sulle FAQ costa poco; uno collegato ai tuoi documenti, all\'agenda e al CRM richiede più lavoro iniziale. Pesano la qualità dei contenuti di partenza, le integrazioni necessarie e il volume di conversazioni gestite ogni mese.',
    },
    {
      type: 'p',
      text: 'Conviene ragionare per fasce qualitative, non per cifre fisse. Sul fronte iniziale, contano la pulizia dei tuoi contenuti (più sono ordinati, più il progetto è rapido) e le integrazioni: collegare il chatbot al calendario o al gestionale aggiunge valore ma anche lavoro. Sul fronte ricorrente, c\'è un costo legato all\'uso del modello AI, che cresce con il numero di conversazioni.',
    },
    {
      type: 'p',
      text: 'Il modo giusto di valutarlo è confrontare il costo con il tempo che ti fa risparmiare e con i contatti che intercetta fuori orario. Su un sito con poco traffico quel ritorno non c\'è, ed è uno dei motivi per cui a volte conviene aspettare. Come ragionare in concreto sull\'investimento in AI lo vedi in [quanto costa l\'AI per un\'azienda](/blog/quanto-costa-ai-azienda).',
    },
    {
      type: 'cta',
      text: 'Vuoi capire se un chatbot AI ha davvero senso per il tuo sito, prima di investirci? Partiamo dalle tue domande ricorrenti e dai tuoi contenuti, e ti diciamo onestamente se conviene.',
      label: 'Parliamone',
      href: 'https://calendly.com/digitinexus/30min',
    },
  ],
  faq: [
    {
      q: 'Un chatbot AI sostituisce le persone?',
      a: 'No, le affianca. Gestisce le domande ripetute e i contatti fuori orario, ma il suo ruolo migliore è preparare il terreno: capire la richiesta, raccogliere i dati e passare la persona a un esperto quando il caso lo merita. Sui temi complessi o delicati deve indirizzare a una persona, non improvvisare.',
    },
    {
      q: 'Parla italiano e più lingue?',
      a: 'Sì. Gli assistenti AI di oggi gestiscono bene l\'italiano e passano da una lingua all\'altra in modo naturale, rispondendo nella lingua in cui il visitatore scrive. È utile se hai clienti stranieri o lavori con l\'estero: la stessa base di contenuti serve risposte in più lingue, senza dover duplicare tutto.',
    },
    {
      q: 'Si collega a WhatsApp?',
      a: 'Sì, in molti casi lo stesso assistente può rispondere sia sul sito sia su WhatsApp e altri canali di messaggistica, attingendo agli stessi contenuti. Va valutato in base ai tuoi canali reali: ha senso se i clienti ti scrivono già lì. La privacy dei dati va comunque impostata con cura su ogni canale.',
    },
    {
      q: 'Quanto costa un chatbot AI?',
      a: 'Dipende da quanto è su misura: un assistente semplice sulle FAQ costa poco; uno collegato a documenti, agenda e gestionale richiede più lavoro iniziale e un costo ricorrente legato all\'uso. Conviene valutarlo confrontandolo con il tempo che fa risparmiare e i contatti che intercetta fuori orario, non come spesa a sé.',
    },
  ],
  internalLinks: [
    { slug: 'intelligenza-artificiale-per-aziende', anchor: 'Intelligenza artificiale per le aziende' },
    { slug: 'rag-ai-dati-azienda', anchor: 'RAG: l\'AI con i dati della tua azienda' },
    { slug: 'prenotazioni-contatti-ai', anchor: 'Prenotazioni e primo contatto con l\'AI' },
    { slug: 'ai-privacy-gdpr', anchor: 'AI, privacy e GDPR' },
    { slug: 'quanto-costa-ai-azienda', anchor: 'Quanto costa l\'AI per un\'azienda' },
  ],
  sources: [],
};

export default article;
