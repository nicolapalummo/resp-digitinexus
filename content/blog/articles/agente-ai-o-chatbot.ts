import type { Article } from '../types';

const article: Article = {
  id: 47,
  title: 'Agente AI o chatbot: che differenza c\'è (e cosa ti serve davvero)',
  metaTitle: 'Agente AI o chatbot: che differenza c\'è | DigitiNexus',
  slug: 'agente-ai-o-chatbot',
  metaDescription:
    'Chatbot e agente AI non sono la stessa cosa: differenze pratiche, casi d\'uso e come capire quale ti serve davvero.',
  capsule:
    'Un chatbot risponde a domande; un agente AI compie azioni e decisioni in sequenza su più sistemi. Per attività con poche risposte basta un chatbot; per flussi complessi serve un agente.',
  keywordPrimary: 'differenza agente AI e chatbot',
  keywordsSecondary: ['cos\'è un agente AI', 'chatbot vs agente'],
  cluster: 'c7',
  intent: 'I·TOFU',
  authorId: 'nicola-palummo',
  publishDate: '2026-06-12',
  updatedDate: '2026-06-12',
  status: 'published',
  cover: {
    src: '/blog/covers/agente-ai-o-chatbot.webp',
    alt: 'Agente AI o chatbot: differenze pratiche, casi d\'uso e quale scegliere',
  },
  body: [
    { type: 'h2', text: 'Cos\'è un chatbot' },
    {
      type: 'p',
      lead: true,
      text: 'Un chatbot è un assistente che risponde a domande in linguaggio naturale, una domanda alla volta. Riceve un messaggio, lo capisce e restituisce una risposta presa dalle informazioni che gli hai dato. Non compie azioni fuori dalla conversazione: il suo lavoro inizia e finisce nello scambio di testo con la persona.',
    },
    {
      type: 'p',
      text: 'La cosa importante è che un chatbot vive **dentro la conversazione**. Sa rispondere a "quali sono i vostri orari?", "fate consulenze online?" o "quanto costa un sito?", perché quelle risposte sono nei suoi contenuti. È bravissimo a togliere lavoro ripetitivo dal tuo telefono e dalla tua casella mail, ma resta un interlocutore: parla, non agisce.',
    },
    {
      type: 'p',
      text: 'Pensa al chatbot sul sito di uno studio dentistico. Un visitatore chiede "avete posto questa settimana?" e il chatbot risponde "di solito sì, le scrivo l\'indirizzo per fissare". È utile e immediato, ma non ha aperto l\'agenda, non ha verificato un buco reale, non ha confermato nulla. Ha dato una buona risposta dentro la chat, e si è fermato lì.',
    },

    { type: 'h2', text: 'Cos\'è un agente AI' },
    {
      type: 'p',
      lead: true,
      text: 'Un agente AI non si limita a rispondere: legge documenti, chiama strumenti e API, e decide cosa fare in sequenza per portare a termine un compito. Capisce l\'obiettivo, lo spezza in passi, esegue ogni passo sui sistemi che gli hai collegato e si ferma solo quando il risultato è completo.',
    },
    {
      type: 'p',
      text: 'La differenza chiave è che un agente **opera su più strumenti** e prende decisioni una dopo l\'altra. Può leggere la mail di un cliente, cercare i dati nel tuo gestionale, controllare la disponibilità in calendario, scrivere una bozza di risposta e aggiornare una scheda. Ogni passo dipende dal precedente: se il dato manca, l\'agente sceglie un\'altra strada invece di bloccarsi.',
    },
    {
      type: 'p',
      text: 'Riprendi lo studio dentistico, stavolta con un agente. Arriva la richiesta "vorrei un appuntamento giovedì pomeriggio". L\'agente apre il calendario, trova lo slot libero, verifica che il paziente sia già in anagrafica, propone l\'orario, registra la prenotazione e invia la conferma. Non ha raccontato cosa farebbe: lo ha fatto. Qui sta il salto rispetto al chatbot.',
    },

    { type: 'h2', text: 'La differenza pratica (regola rapida)' },
    {
      type: 'p',
      lead: true,
      text: 'La regola è semplice: conta quante decisioni in sequenza richiede il compito. Sotto le **cinque decisioni** circa, in cui di fatto serve dare una risposta corretta, ti basta un chatbot. Sopra quella soglia, con passi che dipendono l\'uno dall\'altro su sistemi diversi, ti serve un agente.',
    },
    {
      type: 'p',
      text: 'Non è una soglia matematica, è un\'indicazione per orientarti. Se il flusso è "domanda, risposta, fine", anche ripetuto mille volte al giorno, resta nel campo del chatbot. Se il flusso è "leggi, controlla, decidi, esegui, aggiorna, conferma", e ogni passo cambia in base a cosa trova quello prima, sei nel campo dell\'agente.',
    },
    {
      type: 'table',
      caption: 'Chatbot e agente AI a confronto',
      headers: ['', 'Chatbot', 'Agente AI'],
      rows: [
        ['Cosa fa', 'Risponde a domande', 'Compie azioni e decisioni'],
        ['Sistemi usati', 'Solo la conversazione', 'Più strumenti e API collegati'],
        ['Passi tipici', 'Uno: domanda e risposta', 'Diversi, in sequenza, collegati'],
        ['Esempio', 'Spiega gli orari', 'Prenota, conferma e aggiorna'],
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Prima di scegliere, scrivi su carta i passi reali del compito. Se la lista è corta e finisce in una risposta, parti dal chatbot: costa meno e si mette in piedi prima.',
    },

    { type: 'h2', text: 'Quale ti serve in base all\'obiettivo' },
    {
      type: 'p',
      lead: true,
      text: 'La scelta dipende dall\'obiettivo, non dalla tecnologia. Se vuoi dare risposte rapide e ridurre le domande ripetitive, ti serve un chatbot. Se vuoi che un\'attività venga portata a termine da sola, dall\'inizio alla fine, ti serve un agente. Parti sempre dal risultato che vuoi ottenere.',
    },
    {
      type: 'p',
      text: 'Per uno **studio professionale**, commercialista o avvocato, un chatbot copre bene la prima linea: spiega i servizi, indica i documenti da preparare, filtra le richieste poco pertinenti prima che arrivino sulla scrivania. Un agente serve un passo più in là, quando vuoi che la richiesta del cliente venga letta, classificata, smistata alla persona giusta e tracciata senza il tuo intervento.',
    },
    {
      type: 'p',
      text: 'Per una **PMI**, vale lo stesso ragionamento sul commerciale e sul post-vendita. Un chatbot risponde a chi chiede preventivi, tempi e modalità di spedizione. Un agente entra quando l\'ordine va recuperato dal gestionale, lo stato verificato, il cliente aggiornato e la pratica annotata: un flusso che tocca più sistemi e che nessuna singola risposta riesce a chiudere.',
    },
    {
      type: 'list',
      items: [
        '**Tante domande simili, poche azioni**: chatbot.',
        '**Un compito che attraversa più sistemi**: agente AI.',
        '**Vuoi partire subito e crescere dopo**: chatbot ora, agente quando il flusso lo richiede.',
      ],
    },

    { type: 'h2', text: 'Cosa serve per metterlo sul sito' },
    {
      type: 'p',
      lead: true,
      text: 'Per portare un chatbot o un agente sul tuo sito servono due cose: un posto dove far comparire l\'assistente e una fonte di informazioni affidabile da cui attingere. La prima è tecnica e veloce; la seconda è quella che fa davvero la differenza tra risposte vaghe e risposte utili.',
    },
    {
      type: 'p',
      text: 'Per la parte visibile, cioè l\'assistente in pagina e come si collega al tuo sito, trovi tutto in [chatbot sul sito](/blog/chatbot-ai-sito-web). È il punto di partenza concreto: come appare, dove si mette e cosa serve perché funzioni davvero per chi ti visita, senza diventare l\'ennesimo widget che nessuno usa.',
    },
    {
      type: 'p',
      text: 'Per la qualità delle risposte serve invece collegare l\'assistente ai **tuoi dati reali**, e qui entra in gioco il [RAG sui tuoi dati](/blog/rag-ai-dati-azienda). Senza i tuoi documenti, un assistente risponde in modo generico; con il RAG attinge ai tuoi contenuti, così risponde con le tue informazioni e non con frasi fatte. Questo vale sia per il chatbot sia per l\'agente.',
    },
    {
      type: 'p',
      text: 'L\'ordine giusto è quasi sempre questo: parti dal chatbot con i tuoi dati, vedi quali domande arrivano davvero e solo dopo decidi se ti serve un agente che compia anche le azioni. Così non paghi complessità prima del tempo e costruisci sopra qualcosa che già funziona.',
    },
    {
      type: 'cta',
      text: 'Non sei sicuro se ti serve un chatbot o un agente? Guardiamo insieme i tuoi flussi reali e capiamo da dove conviene partire.',
      label: 'Parliamone',
      href: 'https://calendly.com/digitinexus/30min',
    },
  ],
  faq: [
    {
      q: 'Un agente è meglio di un chatbot?',
      a: 'Non in assoluto, dipende dal compito. Un agente è più potente perché compie azioni su più sistemi, ma è anche più complesso da impostare. Per dare risposte rapide a domande ricorrenti, un chatbot è spesso la scelta migliore: fa il lavoro giusto senza complicazioni inutili.',
    },
    {
      q: 'Costa molto di più?',
      a: 'Un agente costa di più di un chatbot, perché va collegato ai tuoi sistemi e gestisce decisioni in sequenza. Ma il confronto giusto è con il valore che libera. Se automatizza un flusso che oggi ti porta via ore ogni settimana, la spesa in più si ripaga in fretta.',
    },
    {
      q: 'Posso iniziare semplice?',
      a: 'Sì, ed è la strada consigliata. Parti da un chatbot collegato ai tuoi dati, raccogli le domande reali dei clienti e capisci dove serve davvero compiere azioni. Solo allora valuti l\'agente. Costruisci sopra qualcosa che già funziona, senza pagare complessità prima del tempo.',
    },
    {
      q: 'Parla italiano?',
      a: 'Sì, sia il chatbot sia l\'agente lavorano in italiano in modo naturale, comprese le richieste informali. Capiscono la domanda e rispondono nella tua lingua, con il tono che imposti. Possono gestire anche più lingue, utile se hai clienti o fornitori che ti scrivono dall\'estero.',
    },
  ],
  internalLinks: [
    { slug: 'intelligenza-artificiale-per-aziende', anchor: 'Intelligenza artificiale per le aziende' },
    { slug: 'chatbot-ai-sito-web', anchor: 'Come mettere un chatbot AI sul sito' },
    { slug: 'rag-ai-dati-azienda', anchor: 'RAG: AI che risponde sui tuoi dati' },
    { slug: 'automazioni-ai-no-code', anchor: 'Automazioni AI senza scrivere codice' },
  ],
  sources: [
    { label: 'Anthropic — Building Effective Agents (ricerca)', url: 'https://www.anthropic.com/research/building-effective-agents' },
    { label: 'IBM — Cosa sono gli agenti AI', url: 'https://www.ibm.com/think/topics/ai-agents' },
  ],
};

export default article;
