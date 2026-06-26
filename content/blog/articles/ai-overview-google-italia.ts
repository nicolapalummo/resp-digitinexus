import type { Article } from '../types';

const article: Article = {
  id: 20,
  title: 'AI Overview di Google: cosa sono e quanto pesano in Italia',
  metaTitle: 'AI Overview di Google in Italia: cosa sono | DigitiNexus',
  slug: 'ai-overview-google-italia',
  metaDescription:
    'Cosa sono gli AI Overview di Google, quanto sono diffusi in Italia e come cambiano clic e traffico organico nel 2026.',
  capsule:
    'Gli AI Overview sono le risposte generate dall\'AI in cima a Google. In Italia interessano oltre il 70% delle keyword monitorate e riducono i clic organici fino al 60%.',
  keywordPrimary: 'ai overview google',
  keywordsSecondary: ['zero click search', 'panoramica AI Google Italia'],
  cluster: 'c3',
  intent: 'I·TOFU',
  authorId: 'filippo-gentili',
  publishDate: '2026-07-13',
  updatedDate: '2026-07-13',
  status: 'published',
  cover: {
    src: '/blog/covers/ai-overview-google-italia.webp',
    alt: 'AI Overview di Google in Italia: la risposta generata dall\'AI in cima ai risultati di ricerca',
  },
  body: [
    { type: 'h2', text: 'Cosa sono gli AI Overview di Google?' },
    {
      type: 'p',
      lead: true,
      text: 'Gli **AI Overview** sono le risposte generate dall\'intelligenza artificiale che Google mostra in cima alla pagina dei risultati, prima dei link classici. Riassumono in poche righe la risposta a una domanda, attingendo da più fonti, e spesso citano alcuni siti. Sono la trasformazione più visibile della ricerca degli ultimi anni.',
    },
    {
      type: 'p',
      text: 'In pratica, quando cerchi qualcosa su Google, sempre più spesso non trovi subito i dieci link blu: trovi un riquadro con una risposta già scritta. Sotto, o di lato, compaiono i collegamenti alle pagine da cui l\'AI ha attinto. L\'utente legge la sintesi e, in molti casi, ha già quello che cercava senza aprire alcun sito.',
    },
    {
      type: 'p',
      text: 'Gli AI Overview compaiono soprattutto sulle ricerche informative, quelle che iniziano con "come", "cosa", "quanto", "perché". Una persona che cerca "quanto costa rifare un sito web" o "cosa serve per aprire una partita IVA" ha buone probabilità di vedere una risposta generata prima ancora di scorrere. Sono meno frequenti sulle ricerche di marca o transazionali, dove l\'utente sa già dove vuole arrivare.',
    },

    { type: 'h2', text: 'Quanto sono diffusi in Italia?' },
    {
      type: 'p',
      lead: true,
      text: 'Sono già la norma, non l\'eccezione. A maggio 2026 il 71,69% delle keyword monitorate sul database italiano attiva un AI Overview. Significa che, su sette ricerche su dieci, l\'utente vede prima una risposta generata dall\'AI e poi i risultati tradizionali.',
    },
    {
      type: 'p',
      text: 'La diffusione, però, cambia molto da settore a settore. Google è più prudente dove un\'informazione sbagliata può fare danni: nel comparto finanza e fiscale gli AI Overview compaiono nel 30,7% delle query, meno della metà della media. Su temi sensibili come salute, denaro o diritto il motore preferisce lasciare più spazio alle fonti dirette. All\'estremo opposto, su categorie come la ristorazione gli AI Overview restano sotto il 10%, perché lì conta di più la geolocalizzazione e la scelta locale.',
    },
    {
      type: 'p',
      text: 'La lettura pratica è semplice: prima di stimare l\'impatto sul tuo traffico, devi sapere quanto pesano gli AI Overview nelle tue query reali. Un commercialista che si posiziona su domande fiscali ne vede meno di un\'azienda che intercetta ricerche informative generiche, ma la direzione è chiara per tutti. La quota cresce mese dopo mese.',
    },
    {
      type: 'table',
      caption: 'Diffusione degli AI Overview in Italia per tipo di query (maggio 2026)',
      headers: ['Ambito', 'Presenza AI Overview', 'Perché'],
      rows: [
        ['Media generale (database Italia)', '71,69%', 'Ormai lo standard sulle ricerche informative'],
        ['Finanza e fiscale', '30,7%', 'Google più cauto sui temi sensibili'],
        ['Ristorazione e local', 'sotto il 10%', 'Conta di più la geolocalizzazione'],
      ],
    },

    { type: 'h2', text: 'Cosa cambia per il traffico del tuo sito?' },
    {
      type: 'p',
      lead: true,
      text: 'Cambia che essere primi non basta più. Quando compare un AI Overview, l\'utente trova spesso la risposta nella pagina dei risultati e non clicca: circa il 60% delle ricerche Google non porta ad alcun clic verso un sito. È la cosiddetta zero-click search, la ricerca che si esaurisce nella pagina dei risultati.',
    },
    {
      type: 'p',
      text: 'L\'effetto sui clic è misurabile. In presenza di un AI Overview, il CTR (la percentuale di chi clicca un risultato) della prima posizione organica cala fino al 58%. Tradotto: la posizione 1 vale oggi meno della metà rispetto a prima dell\'AI. Se il tuo sito non è citato dentro la risposta generata, per quegli utenti la tua azienda non esiste, anche quando tecnicamente sei in cima a Google.',
    },
    {
      type: 'p',
      text: 'Questo non significa che il traffico organico sparisca. Significa che cambia composizione: chi clicca lo fa con un\'intenzione più precisa, perché ha già letto la sintesi e vuole approfondire o agire. Resta meno traffico, ma più qualificato. Il problema vero arriva per chi vive di sole ricerche informative ad alto volume: lì la perdita di clic è concreta e va compensata su altri fronti.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Se gran parte del tuo traffico arriva da ricerche informative generiche, controlla l\'andamento dei clic organici degli ultimi mesi in Search Console. Un calo dei clic a parità di posizione è il segnale tipico dell\'effetto AI Overview.',
    },

    { type: 'h2', text: 'Come restare visibili con gli AI Overview?' },
    {
      type: 'p',
      lead: true,
      text: 'Restare visibili significa puntare a essere citati dentro la risposta, non solo a posizionarti sotto. È il lavoro della GEO (Generative Engine Optimization), l\'insieme delle tecniche per farsi riprendere dalle AI. La buona notizia è che le fonti citate negli AI Overview arrivano quasi sempre dalla top 10 organica: la SEO non sparisce, diventa il biglietto d\'ingresso.',
    },
    {
      type: 'p',
      text: 'Il meccanismo funziona a due stadi. Prima devi entrare nel gruppo di pagine ben posizionate da cui Google pesca le fonti, e questo resta un lavoro di SEO classica. Poi, tra quelle pagine, l\'AI sceglie da chi attingere: e qui conta quanto il tuo contenuto risponde in modo chiaro, sintetico e affidabile alla domanda. Una pagina che apre con una frase secca e autosufficiente è più facile da estrarre e riportare di una che gira intorno al punto per tre paragrafi.',
    },
    {
      type: 'p',
      text: 'Un esempio concreto. Alla domanda "quanto tempo serve per fare un sito" rispondi male con tre paragrafi di premesse e bene con una frase netta in apertura ("Un sito vetrina su misura richiede 1–4 settimane, a seconda di pagine e contenuti"), seguita dallo sviluppo. La seconda versione è una capsula completa, che l\'AI può riportare senza tagliare nulla. Il metodo per scriverle è nella [guida ai contenuti citabili dalle AI](/blog/contenuti-citabili-ai-capsule-method).',
    },
    {
      type: 'list',
      items: [
        '**Top 10 organica:** senza una buona posizione non entri nemmeno tra le fonti candidate. La SEO resta la base.',
        '**Capsule di risposta in apertura:** una frase breve e autosufficiente che risponde subito alla domanda, comprensibile anche estratta da sola.',
        '**Un dato con fonte per sezione:** numeri datati e percentuali con link verificabile aumentano la probabilità di essere ripresi.',
        '**Autore e autorevolezza:** le AI privilegiano fonti riconoscibili, con un autore firmato e un\'entità coerente.',
      ],
    },
    {
      type: 'p',
      text: 'Il quadro completo, con il funzionamento della GEO e la differenza rispetto alla SEO, è nella [guida alla Generative Engine Optimization](/blog/geo-generative-engine-optimization).',
    },

    { type: 'h2', text: 'Cosa fare adesso (azioni concrete)?' },
    {
      type: 'p',
      lead: true,
      text: 'Parti dalle pagine che già si posizionano e riscrivile per essere citate. Visto che gran parte delle citazioni AI arriva dalla top 10, conviene prendere i contenuti che Google premia già e dotarli di capsule in apertura, dati con fonte e schema markup. È il modo più rapido per trasformare posizioni che hai in citazioni che non hai ancora.',
    },
    {
      type: 'p',
      text: 'Lo conferma anche la ricerca accademica: lo studio di **Aggarwal et al. (KDD 2024)** mostra che citare fonti, aggiungere statistiche e virgolettati può alzare la visibilità nei motori generativi fino a circa il +40% ([arXiv](https://arxiv.org/abs/2311.09735)). Non servono trucchi: serve scrivere in modo che ogni passaggio sia estraibile, verificabile e firmato.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Verifica in Search Console su quali query informative perdi clic a parità di posizione: sono quelle dove pesano gli AI Overview.',
        'Riscrivi quelle pagine con una capsula di risposta in apertura, breve e autosufficiente.',
        'Aggiungi un dato con fonte per ogni sezione e marca domande e risposte con [schema markup](/blog/schema-markup-ai) (Article + FAQPage).',
        'Firma i contenuti con un autore reale e collega un profilo pubblico, per rafforzare l\'autorevolezza.',
        'Poni le domande tipiche dei tuoi clienti a Google e alle AI, e controlla se compari tra le fonti.',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Test rapido: copia un tuo paragrafo, incollalo da solo in una chat e chiediti "risponde a una domanda precisa, senza il contesto attorno?". Se la risposta è no, riscrivilo come capsula. È così che si diventa citabili.',
    },
    {
      type: 'p',
      text: 'Il contesto SEO di base su cui poggia tutto questo, nel 2026, lo trovi nella [guida alla SEO nel 2026](/blog/seo-2026): è la fondamenta su cui la visibilità negli AI Overview si costruisce.',
    },
    {
      type: 'cta',
      text: 'Vuoi un sito pensato per posizionarsi su Google e farsi citare dagli AI Overview? Lo costruiamo schema-ready e citabile, in 1–4 settimane.',
      label: 'Parliamone',
      href: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ',
    },
  ],
  faq: [
    {
      q: 'Gli AI Overview fanno perdere traffico?',
      a: 'Sì, sul traffico informativo. Quando compare una risposta generata, molti utenti non cliccano: circa il 60% delle ricerche Google è zero-click e il CTR della prima posizione cala fino al 58%. Resta meno traffico, ma più qualificato, perché chi clicca ha un\'intenzione più precisa.',
    },
    {
      q: 'Posso disattivare gli AI Overview sul mio sito?',
      a: 'No, non puoi impedire a Google di mostrare un AI Overview per le query che ti riguardano: è una funzione del motore di ricerca, non del tuo sito. Puoi solo lavorare per essere tra le fonti citate dentro la risposta, anziché restare escluso.',
    },
    {
      q: 'Come finisco citato in un AI Overview?',
      a: 'Devi essere in top 10 organica, perché è da lì che Google pesca le fonti, e avere contenuti citabili: capsule di risposta in apertura, dati con fonte e schema markup. Più la tua pagina risponde in modo chiaro e affidabile, più è probabile che l\'AI la riprenda.',
    },
    {
      q: 'Su quali query compaiono gli AI Overview?',
      a: 'Soprattutto sulle ricerche informative ("come", "cosa", "quanto"). In Italia interessano il 71,69% delle keyword monitorate, ma con forti differenze: nel settore finanza e fiscale scendono al 30,7%, perché Google è più cauto sui temi sensibili dove un errore costa.',
    },
  ],
  internalLinks: [
    { slug: 'geo-generative-engine-optimization', anchor: 'Generative Engine Optimization (GEO)' },
    { slug: 'contenuti-citabili-ai-capsule-method', anchor: 'Contenuti citabili: capsule method' },
    { slug: 'schema-markup-ai', anchor: 'Schema markup per le AI' },
    { slug: 'seo-2026', anchor: 'SEO nel 2026' },
  ],
  sources: [
    { label: 'SEOZoom — AI Overview in Italia (71,69% delle keyword; 30,7% nel settore finanza/fiscale)', url: 'https://www.seozoom.it/geo-generative-engine-optimization/' },
    { label: 'SparkToro — Zero-Click Search Study 2024 (dati Datos/Semrush)', url: 'https://sparktoro.com/blog/2024-zero-click-search-study-for-every-1000-us-google-searches-only-374-clicks-go-to-the-open-web-in-the-eu-its-360/' },
    { label: 'Ahrefs — Gli AI Overview riducono i clic della prima posizione del 58%', url: 'https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/' },
    { label: 'Aggarwal et al., "GEO: Generative Engine Optimization", KDD 2024 (arXiv)', url: 'https://arxiv.org/abs/2311.09735' },
  ],
};

export default article;
