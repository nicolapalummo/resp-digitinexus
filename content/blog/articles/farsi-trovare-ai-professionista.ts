import type { Article } from '../types';

const article: Article = {
  id: 35,
  title: 'Come farsi trovare dai clienti che chiedono un professionista a ChatGPT',
  metaTitle: 'Farsi trovare quando chiedono un professionista all\'AI | DigitiNexus',
  slug: 'farsi-trovare-ai-professionista',
  metaDescription:
    'Sempre più clienti chiedono a ChatGPT un avvocato o un commercialista: ecco come strutturare sito e presenza per essere consigliati dalle AI.',
  capsule:
    'Per essere consigliato dalle AI quando qualcuno chiede "un bravo commercialista a Milano" servono un sito chiaro per zona e servizio, recensioni, citazioni esterne e dati strutturati che colleghino nome, studio e competenze.',
  keywordPrimary: 'farsi citare AI professionista',
  keywordsSecondary: ['comparire su ChatGPT studio', 'AI consiglia professionista'],
  cluster: 'c4',
  isPillar: false,
  intent: 'I·TOFU',
  authorId: 'filippo-gentili',
  publishDate: '2026-07-15',
  updatedDate: '2026-07-15',
  status: 'published',
  cover: {
    src: '/blog/covers/farsi-trovare-ai-professionista.webp',
    alt: 'Come farsi consigliare da ChatGPT quando un cliente cerca un avvocato o un commercialista',
  },
  body: [
    { type: 'h2', text: 'Le AI consigliano davvero un professionista locale?' },
    {
      type: 'p',
      lead: true,
      text: 'Sì, e sempre più spesso. Quando una persona chiede a ChatGPT "che commercialista scelgo per la mia SRL a Torino" o "mi serve un avvocato per una causa di lavoro a Bologna", l\'AI risponde con criteri, e a volte con nomi. Per comparire in quelle risposte devi essere visibile, coerente e citabile nelle fonti che l\'AI legge.',
    },
    {
      type: 'p',
      text: 'È un comportamento nuovo ma in crescita rapida, soprattutto per i temi delicati. Nel settore finanza/fiscale il 30,7% delle query in Italia mostra già un AI Overview, cioè una risposta generata dall\'AI in cima ai risultati. Lì si gioca una parte sempre più grande della scelta: chi cerca un professionista per le tasse o per una pratica legale spesso parte da una domanda all\'AI prima ancora di aprire dieci schede del browser.',
    },
    {
      type: 'p',
      text: 'Tradotto: il commercialista che vuole nuovi clienti e l\'avvocato che presidia una città devono ragionare non solo su Google, ma su come l\'AI ricostruisce "chi è bravo e affidabile" per quel servizio in quella zona. Le AI non inventano fiducia: la raccolgono dai segnali che trovano online. Se quei segnali su di te sono chiari, coerenti e verificabili, hai molte più probabilità di essere nel gruppo dei consigliati.',
    },

    { type: 'h2', text: 'Come scelgono le AI chi consigliare?' },
    {
      type: 'p',
      lead: true,
      text: 'Le AI consigliano chi appare credibile in più fonti coerenti tra loro. Tre segnali pesano più degli altri: le fonti che ti citano (sito, albo, directory, articoli), la coerenza dell\'entità (stesso nome, indirizzo e specializzazione ovunque) e i segnali di fiducia (recensioni reali, profilo Google Business, credenziali verificabili).',
    },
    {
      type: 'p',
      text: 'Il punto chiave è la coerenza. Un\'AI ricostruisce chi sei mettendo insieme pezzi sparsi: se sul sito ti chiami "Studio Legale Rossi", sull\'albo "Mario Rossi", su una directory "Avv. M. Rossi" e su Google Business un altro indirizzo, quei pezzi non si saldano in un\'unica entità affidabile. Se invece nome, studio, sede e aree di attività combaciano ovunque, l\'AI ha un\'identità solida da consigliare. Lo studio accademico GEO (Aggarwal et al., KDD 2024) mostra che citare fonti, statistiche e virgolettati può alzare la visibilità nei motori generativi di circa il 40%: la prova autorevole conta più del marketing.',
    },
    {
      type: 'list',
      items: [
        '**Fonti che ti citano:** il tuo sito, l\'iscrizione all\'albo, le directory di categoria, articoli o interviste in cui compari.',
        '**Coerenza dell\'entità:** stesso nome, indirizzo, telefono e specializzazione su ogni piattaforma, senza versioni discordanti.',
        '**Segnali di fiducia:** recensioni autentiche, profilo Google Business curato, credenziali e iscrizione all\'ordine ben visibili.',
      ],
    },

    { type: 'h2', text: 'Come ottimizzo il sito dello studio per le AI?' },
    {
      type: 'p',
      lead: true,
      text: 'Costruisci una pagina chiara per ogni combinazione di servizio e zona, scritta nel linguaggio del cliente, con una risposta sintetica in apertura e una sezione di domande frequenti. Le AI leggono e citano i contenuti che rispondono in modo diretto e verificabile: una pagina ben strutturata è più facile da capire, estrarre e consigliare.',
    },
    {
      type: 'p',
      text: 'La struttura conta quanto i contenuti. L\'avvocato che dedica una pagina a "diritto di famiglia a Bologna" e apre con due righe che rispondono subito ("Mi occupo di separazioni, divorzi e affidamento nel foro di Bologna") dà all\'AI un blocco pulito da citare. Il commercialista che spiega "regime forfettario: a chi conviene nel 2026" con una risposta netta in cima e le domande ricorrenti sotto diventa la fonte naturale quando qualcuno chiede consiglio sul forfettario. È il metodo delle capsule citabili: una risposta breve e autosufficiente prima dell\'approfondimento. Lo spieghiamo in [contenuti citabili dalle AI](/blog/contenuti-citabili-ai-capsule-method).',
    },
    {
      type: 'p',
      text: 'Per i temi legali e fiscali c\'è un motivo in più per curare questi contenuti: sono argomenti dove l\'affidabilità della fonte pesa molto, ed è proprio lì che l\'AI è più selettiva su chi citare. La base di partenza resta il sito dello studio: come deve essere strutturato lo trovi in [il sito web per uno studio professionale](/blog/sito-web-studio-professionale).',
    },

    { type: 'h2', text: 'Bastano le recensioni e la presenza locale?' },
    {
      type: 'p',
      lead: true,
      text: 'No, ma sono un pilastro. Recensioni reali e un profilo Google Business curato sono tra i segnali di fiducia più forti che le AI raccolgono per decidere chi consigliare in una zona. Da soli non bastano (servono anche sito e citazioni esterne coerenti), ma senza di essi è difficile entrare nel gruppo dei nomi suggeriti.',
    },
    {
      type: 'p',
      text: 'La presenza locale è il terreno dove si decidono le ricerche di uno studio: "commercialista a Padova", "avvocato divorzista a Firenze". Un profilo Google Business completo (indirizzo, orari, aree di attività, foto reali) e recensioni autentiche dei clienti dicono all\'AI che esisti davvero, operi in quella città e hai una reputazione verificabile. Per chi sceglie a chi affidare una pratica delicata, le recensioni valgono più di qualsiasi slogan: ne parliamo in [recensioni e Google Business Profile per studi](/blog/recensioni-google-business-profile-studi).',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Niente recensioni finte o gonfiate. Oltre a essere vietate dalle piattaforme, sono un rischio reputazionale e, per alcune professioni regolamentate, un problema deontologico. Le AI premiano la coerenza nel tempo, non i picchi sospetti: meglio poche recensioni reali e costanti che molte tutte uguali.',
    },

    { type: 'h2', text: 'A cosa servono le citazioni esterne?' },
    {
      type: 'p',
      lead: true,
      text: 'Le citazioni esterne sono le menzioni del tuo nome e del tuo studio fuori dal tuo sito: l\'albo professionale, le directory di categoria, articoli, interviste, eventi. Confermano all\'AI che sei un\'entità reale e riconosciuta, non solo un sito che parla di sé. Più sono coerenti, più rafforzano la fiducia.',
    },
    {
      type: 'p',
      text: 'Qui la regola d\'oro è la coerenza di nome, indirizzo e specializzazione. L\'avvocato presente sull\'albo del proprio ordine, su una o due directory legali serie e in un articolo dove viene citato per nome costruisce una rete di conferme che l\'AI può seguire. Il commercialista iscritto all\'Ordine dei Dottori Commercialisti con la stessa denominazione che usa sul sito offre all\'AI un\'identità senza contraddizioni. Ogni menzione coerente è un mattone; ogni versione discordante (sigle diverse, indirizzi vecchi) è una crepa che indebolisce l\'insieme.',
    },
    {
      type: 'list',
      items: [
        '**Albo e ordine:** l\'iscrizione ufficiale, con la denominazione esatta che usi sul sito.',
        '**Directory di categoria affidabili:** poche e serie, sempre con dati identici a quelli del tuo sito.',
        '**Articoli e interviste:** contenuti in cui sei citato per nome rafforzano l\'autorevolezza percepita.',
      ],
    },

    { type: 'h2', text: 'Quali dati strutturati servono per i professionisti?' },
    {
      type: 'p',
      lead: true,
      text: 'Servono i dati strutturati che descrivono chi sei in un linguaggio che le macchine leggono senza ambiguità: lo schema Person per il professionista, Organization (o LegalService) per lo studio, e la proprietà sameAs che collega il sito ai tuoi profili ufficiali. Sono il modo più diretto per dire all\'AI "questa persona, questo studio, queste competenze sono la stessa entità".',
    },
    {
      type: 'p',
      text: 'I dati strutturati sono codice invisibile al lettore ma chiarissimo per Google e per le AI: traducono "Avv. Mario Rossi, diritto del lavoro, Bologna, iscritto all\'albo X" in informazioni collegate e affidabili. La proprietà sameAs in particolare unisce sito, profilo dell\'ordine, Google Business e profili professionali in un\'unica identità: è ciò che impedisce all\'AI di confonderti con un omonimo o di considerarti due entità separate. Come implementarli senza errori lo spieghiamo in [schema markup per le AI](/blog/schema-markup-ai), e perché alzano l\'autorevolezza in [E-E-A-T e author authority](/blog/e-e-a-t-author-authority).',
    },
    {
      type: 'p',
      text: 'Esempi di prompt che un cliente farebbe oggi a ChatGPT per cercarti: "consigliami un commercialista a Milano esperto di partite IVA in regime forfettario", "che avvocato scelgo per una causa di lavoro a Bologna", "trovami un architetto a Firenze per ristrutturare un appartamento". In ognuno l\'AI cerca un\'entità chiara per servizio e zona, con prove di fiducia. Se sito, recensioni, citazioni e dati strutturati raccontano la stessa storia coerente, sei un candidato naturale alla risposta.',
    },
    {
      type: 'cta',
      text: 'Vuoi un sito che ti faccia consigliare dalle AI quando un cliente cerca un professionista nella tua zona? Costruiamo siti su misura per studi, pronti per la GEO.',
      label: 'Parliamone',
      href: 'https://calendly.com/digitinexus/30min',
    },
  ],
  faq: [
    {
      q: 'ChatGPT consiglia davvero professionisti locali?',
      a: 'Sì, sempre più spesso. Quando un utente chiede un avvocato o un commercialista in una città, l\'AI risponde con criteri e a volte con nomi, ricostruiti dalle fonti che trova online. Per comparire devi essere visibile, coerente e citabile, con segnali di fiducia chiari per quel servizio e quella zona.',
    },
    {
      q: 'Bastano le recensioni per farsi consigliare dalle AI?',
      a: 'No, ma sono un pilastro. Recensioni reali e un profilo Google Business curato sono tra i segnali di fiducia più forti che le AI raccolgono. Da soli non bastano: servono anche un sito chiaro per servizio e zona, citazioni esterne coerenti e dati strutturati che colleghino nome, studio e competenze.',
    },
    {
      q: 'Serve un blog per essere citati dalle AI?',
      a: 'Aiuta molto. Contenuti che rispondono alle domande reali dei clienti, con una risposta sintetica in cima e domande frequenti sotto, sono i più facili da estrarre e citare. Non serve scrivere tanto: serve rispondere bene alle domande che i tuoi clienti già fanno, una per pagina.',
    },
    {
      q: 'Come verifico se le AI mi citano?',
      a: 'Prova tu stesso i prompt che farebbe un cliente, tipo "consigliami un commercialista a Milano per partite IVA", su più assistenti. Controlla se compari, con quale nome e con quali fonti. Ripeti la verifica nel tempo: le risposte cambiano, e la coerenza dei tuoi segnali sposta il risultato.',
    },
  ],
  internalLinks: [
    { slug: 'sito-web-studio-professionale', anchor: 'Il sito web per uno studio professionale' },
    { slug: 'recensioni-google-business-profile-studi', anchor: 'Recensioni e Google Business Profile per studi' },
    { slug: 'contenuti-citabili-ai-capsule-method', anchor: 'Contenuti citabili dalle AI' },
    { slug: 'schema-markup-ai', anchor: 'Schema markup per le AI' },
    { slug: 'e-e-a-t-author-authority', anchor: 'E-E-A-T e author authority' },
  ],
  sources: [
    { label: 'SEOZoom — AI Overview in Italia: 30,7% delle query nel settore finanza/fiscale', url: 'https://www.seozoom.it/geo-generative-engine-optimization/' },
    { label: 'Aggarwal et al., "GEO: Generative Engine Optimization", KDD 2024 (citare fonti, statistiche e virgolettati ~+40% di visibilità nei motori generativi)', url: 'https://arxiv.org/abs/2311.09735' },
  ],
};

export default article;
