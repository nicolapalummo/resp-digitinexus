import type { Article } from '../types';

const article: Article = {
  id: 26,
  title: 'Local SEO: farsi trovare nella propria città (e dalle AI)',
  metaTitle: 'Local SEO: farsi trovare nella tua città | DigitiNexus',
  slug: 'local-seo',
  metaDescription:
    'Guida pratica alla local SEO: Google Business Profile, recensioni e segnali locali per farsi trovare in zona, anche dalle AI.',
  capsule:
    'La local SEO ti fa trovare da chi cerca un\'attività nella tua zona: profilo Google Business completo, recensioni, coerenza di nome e indirizzo e contenuti locali sono i fattori principali.',
  keywordPrimary: 'local seo',
  keywordsSecondary: ['farsi trovare in città', 'google business profile', 'seo locale'],
  cluster: 'c3',
  intent: 'I-C·MOFU',
  authorId: 'filippo-gentili',
  publishDate: '2026-10-12',
  updatedDate: '2026-10-12',
  status: 'published',
  cover: {
    src: '/blog/covers/local-seo.webp',
    alt: 'Local SEO: una ricerca di servizi nella propria città su Google Maps e tra le risposte delle AI',
  },
  body: [
    { type: 'h2', text: 'Cos\'è la local SEO e quando serve?' },
    {
      type: 'p',
      lead: true,
      text: 'La **local SEO** è l\'insieme delle azioni che ti fanno trovare da chi cerca un\'attività o un servizio nella propria zona. Quando qualcuno digita "commercialista vicino a me" o "avvocato a Bologna", Google mostra una mappa con tre o quattro attività in evidenza: finirci dentro è l\'obiettivo. Si gioca su profilo Google, recensioni e coerenza dei dati, non solo sul sito.',
    },
    {
      type: 'p',
      text: 'La differenza rispetto alla SEO classica è il peso della distanza. Una ricerca con intento locale viene filtrata in base a dove si trova chi cerca: lo stesso studio può essere primo per chi è a due chilometri e invisibile per chi è in un\'altra città. Per questo i segnali geografici, la mappa e i dati dell\'attività contano quanto, e spesso più, dei contenuti del sito.',
    },
    {
      type: 'p',
      text: 'Serve a qualunque attività con un raggio di azione definito: studi professionali, negozi, artigiani, ristoranti, servizi alla persona. Un commercialista che lavora soprattutto con imprese del proprio territorio ha tutto da guadagnare a presidiare le ricerche locali; un avvocato che riceve in studio idem. Anche chi opera in più città può fare local SEO, una zona alla volta, con pagine dedicate.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Local SEO e SEO "normale" non sono in alternativa: lavorano insieme. Il profilo Google e i segnali locali ti fanno emergere nella mappa, il sito ben fatto chiude la fiducia e converte la visita in contatto.',
    },

    { type: 'h2', text: 'Come ottimizzare il Google Business Profile?' },
    {
      type: 'p',
      lead: true,
      text: 'Il **Google Business Profile** è la scheda gratuita che mostra la tua attività su Google e Maps: nome, indirizzo, orari, telefono, recensioni e foto. È il fattore numero uno della local SEO, perché è ciò che compare nella mappa e nel pannello laterale. Rivendicarlo, completarlo in ogni campo e tenerlo aggiornato è il primo lavoro, prima ancora di toccare il sito.',
    },
    {
      type: 'p',
      text: 'Completo significa completo davvero, non solo nome e telefono. La categoria principale corretta orienta per quali ricerche compari: un avvocato che sceglie "Studio legale" e aggiunge le categorie secondarie pertinenti viene mostrato sulle query giuste. Descrizione, servizi elencati uno per uno, orari reali (festivi inclusi), area servita e foto recenti dei locali completano il quadro che Google usa per decidere se mostrarti.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Rivendica la scheda dal sito ufficiale di Google Business Profile e verifica la proprietà.',
        'Compila **ogni** campo: nome esatto, indirizzo, telefono, sito, orari (anche festivi).',
        'Scegli la **categoria principale** più precisa e aggiungi le secondarie pertinenti.',
        'Elenca i servizi uno per uno e scrivi una descrizione chiara di cosa fai e per chi.',
        'Carica foto reali e recenti: esterno, interno, team. Aggiornale nel tempo.',
        'Usa i **post** della scheda per novità, e tieni gli orari sempre veri.',
      ],
    },
    {
      type: 'p',
      text: 'Un dettaglio sottovalutato: rispondere alle domande e ai messaggi dalla scheda è un segnale di attività viva. Per un commercialista in piena stagione fiscale, tenere aggiornati orari e disponibilità evita la frustrazione di chi arriva e trova chiuso, ed evita anche le recensioni negative che ne seguono. La scheda non è un volantino statico: è un canale che va presidiato come si presidia il sito.',
    },
    {
      type: 'p',
      text: 'Il lavoro fine su scheda e recensioni, declinato per gli studi, è nella [guida a Recensioni e Google Business Profile](/blog/recensioni-google-business-profile-studi).',
    },

    { type: 'h2', text: 'Quanto contano le recensioni nelle Maps e nelle AI?' },
    {
      type: 'p',
      lead: true,
      text: 'Le recensioni contano molto, su due piani. Su Google Maps sono uno dei segnali con cui l\'algoritmo decide quali attività mostrare e in che ordine: quantità, voto medio, freschezza e presenza di risposte pesano sulla visibilità. Per le AI sono prove di fiducia leggibili: un\'attività con molte recensioni coerenti e recenti è più facile da citare come riferimento credibile per una zona.',
    },
    {
      type: 'p',
      text: 'Il valore non sta solo nel voto, ma nel testo. Recensioni che nominano il servizio ricevuto e la città ("ottimo studio legale a Modena per una pratica di successione") arricchiscono il profilo di parole e segnali geografici reali. È contenuto che né tu né nessun strumento può scrivere: nasce dai clienti veri, ed è proprio questa autenticità a renderlo prezioso per i motori e per i modelli che leggono il web.',
    },
    {
      type: 'p',
      text: 'La strategia sana è semplice: chiedere la recensione al momento giusto, a lavoro concluso e cliente soddisfatto, e rispondere sempre, anche alle negative, con tono professionale. Le risposte mostrano cura e danno contesto. Mai comprare recensioni o gonfiare il voto con account falsi: Google le rileva e le rimuove, e una scheda "ripulita" perde di colpo la fiducia costruita.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Crea un link breve alla tua scheda recensioni e mettilo nelle email di chiusura, nelle firme e su un piccolo QR in studio. Ridurre l\'attrito è il modo più efficace per trasformare un cliente contento in una recensione scritta.',
    },

    { type: 'h2', text: 'Cos\'è la coerenza NAP e perché le citazioni locali contano?' },
    {
      type: 'p',
      lead: true,
      text: 'NAP sta per **Name, Address, Phone**: nome, indirizzo e telefono dell\'attività. La coerenza NAP significa che questi tre dati compaiono identici ovunque, dal sito alla scheda Google alle directory di settore. È un fattore di local SEO perché Google incrocia le citazioni della tua attività in giro per il web: se i dati combaciano, la fiducia sale; se sono incoerenti, l\'algoritmo fatica a capire chi sei e dove sei.',
    },
    {
      type: 'p',
      text: 'Una **citazione locale** è qualunque menzione del tuo NAP su un altro sito: un albo professionale, una directory di categoria, le pagine gialle online, una mappa cittadina. Non serve riempirne il web a caso, ma essere presenti, con dati uniformi, dove ha senso per il tuo settore. Per un avvocato l\'ordine professionale, per un ristorante i portali di prenotazione: la pertinenza vale più del numero.',
    },
    {
      type: 'p',
      text: 'L\'errore tipico nasce dai dettagli: "Via Roma 10" in un posto e "V. Roma, 10" in un altro, due numeri di telefono diversi rimasti dopo un cambio, una vecchia sede mai aggiornata. Ogni discordanza è una crepa. Prima di costruire nuove citazioni, conviene fare un censimento di dove la tua attività è già citata e correggere o rimuovere i dati vecchi: la pulizia conta più dell\'aggiunta.',
    },
    {
      type: 'list',
      items: [
        'Definisci **un** formato ufficiale di nome, indirizzo e telefono e usalo identico ovunque.',
        'Aggiorna prima sito e scheda Google, poi le directory pertinenti al tuo settore.',
        'Elimina o correggi le vecchie citazioni con dati superati (sedi, numeri, nomi).',
        'Privilegia poche citazioni pertinenti e affidabili a tante generiche e abbandonate.',
      ],
    },

    { type: 'h2', text: 'Come usare i contenuti locali sul sito?' },
    {
      type: 'p',
      lead: true,
      text: 'I contenuti locali sono le pagine del sito che legano in modo esplicito i tuoi servizi a un luogo. Una pagina "Servizi per [zona]" o "Studio a [città]" dice a Google e alle AI dove operi e per chi, con parole reali e contesto geografico. Sono il ponte tra la scheda Google e il sito: completano i segnali locali con il contenuto approfondito che la scheda, da sola, non può ospitare.',
    },
    {
      type: 'p',
      text: 'La regola è una pagina per intento reale, non per parola chiave. Se servi davvero più zone o offri servizi distinti, ha senso una pagina dedicata a ciascuno, con testo originale che spiega cosa offri lì e per quali esigenze del territorio. Quello che non funziona è duplicare la stessa pagina cambiando solo il nome della città: Google riconosce le pagine vuote create solo per la ricerca, e non premia il riempitivo.',
    },
    {
      type: 'p',
      text: 'Il contenuto migliore nasce dal territorio vero. Un commercialista può scrivere su scadenze e bandi che riguardano le imprese della sua provincia; un avvocato su questioni ricorrenti tra i clienti della zona. Aggiungere indirizzo, mappa e riferimenti locali sulla pagina contatti, e marcare l\'attività con i dati strutturati corretti, rende il segnale geografico leggibile anche dalle macchine, non solo dalle persone.',
    },
    {
      type: 'list',
      items: [
        'Crea pagine per zona o servizio **solo** dove servi davvero, con testo originale.',
        'Inserisci indirizzo, mappa e orari sulla pagina contatti, coerenti con la scheda Google.',
        'Scrivi contenuti utili legati al territorio: scadenze, bandi, casi ricorrenti locali.',
        'Usa i **dati strutturati** (schema markup) per dichiarare a Google chi sei e dove operi.',
      ],
    },
    {
      type: 'p',
      text: 'Come marcare l\'attività e le pagine perché motori e AI le leggano senza ambiguità è nella [guida allo schema markup](/blog/schema-markup-ai).',
    },

    { type: 'h2', text: 'La local SEO aiuta a farsi trovare dalle AI?' },
    {
      type: 'p',
      lead: true,
      text: 'Sì, perché le AI generative attingono dalle stesse fonti su cui lavora la local SEO. Quando uno strumento risponde a "miglior commercialista a Verona", recupera informazioni da schede Google, recensioni, directory e siti con dati locali coerenti. Un\'attività con profilo completo, recensioni autentiche e NAP uniforme è più facile da riconoscere e citare come riferimento affidabile per quel luogo.',
    },
    {
      type: 'p',
      text: 'Il principio è lo stesso della GEO, la **Generative Engine Optimization**, cioè l\'ottimizzazione per essere citati dalle risposte generate dalle AI: i modelli premiano fonti chiare, coerenti e verificabili. La coerenza d\'entità, lo stesso nome con gli stessi dati ovunque, che già aiuta Google, aiuta anche le AI a non confonderti con un omonimo e a riportare informazioni corrette su di te.',
    },
    {
      type: 'p',
      text: 'In pratica non c\'è una local SEO "per Google" e una "per le AI": è lo stesso lavoro che serve a entrambe. Schede curate, recensioni vere, dati uniformi e contenuti locali utili sono i mattoni che ti rendono trovabile in mappa e citabile in una risposta generata. Il quadro completo, applicato ai professionisti, è nella [guida a farsi trovare con le AI](/blog/farsi-trovare-ai-professionista).',
    },
    {
      type: 'cta',
      text: 'Vuoi un sito che ti faccia trovare nella tua città e dalle AI, con scheda, dati locali e schema curati a dovere? Lo costruiamo così, in 1–4 settimane.',
      label: 'Parliamone',
      href: 'https://calendly.com/digitinexus/30min',
    },
  ],
  faq: [
    {
      q: 'La local SEO serve a chi non ha un negozio fisico?',
      a: 'Sì, se hai un\'area di servizio definita. Anche senza vetrina, puoi indicare nel Google Business Profile le zone che servi e creare pagine locali sul sito. Un consulente o un artigiano che lavora a domicilio si fa trovare per la propria provincia senza mostrare un indirizzo pubblico, scegliendo l\'opzione "area servita".',
    },
    {
      q: 'Quanto contano davvero le recensioni?',
      a: 'Molto. Quantità, voto medio, freschezza e risposte sono tra i segnali che Google usa per ordinare le attività nelle Maps, e le AI le leggono come prove di fiducia. Contano anche i testi: recensioni che nominano servizio e città arricchiscono il profilo. Vanno raccolte in modo autentico, mai comprate.',
    },
    {
      q: 'Il Google Business Profile è gratis?',
      a: 'Sì, creare e gestire il Google Business Profile è gratuito. Rivendichi la scheda, verifichi la proprietà e la compili senza costi. A pagamento sono solo gli annunci Google, che restano separati. Per la local SEO il lavoro vero è curare e aggiornare la scheda nel tempo, non spendere.',
    },
    {
      q: 'La local SEO aiuta a farsi trovare dalle AI?',
      a: 'Sì. Le AI generative attingono da schede Google, recensioni, directory e siti con dati locali coerenti. Un\'attività con profilo completo, recensioni autentiche e NAP uniforme è più facile da riconoscere e citare come riferimento per una zona. È lo stesso lavoro che ti fa emergere nelle mappe.',
    },
  ],
  internalLinks: [
    { slug: 'recensioni-google-business-profile-studi', anchor: 'Recensioni e Google Business Profile per studi' },
    { slug: 'farsi-trovare-ai-professionista', anchor: 'Farsi trovare con le AI' },
    { slug: 'schema-markup-ai', anchor: 'Schema markup che le AI capiscono' },
  ],
  sources: [],
};

export default article;
