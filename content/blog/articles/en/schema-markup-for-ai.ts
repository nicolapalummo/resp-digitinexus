import type { Article } from '../../types';

const article: Article = {
  id: 21,
  title: 'Schema Markup AI Understands: Article, FAQPage, Person',
  metaTitle: 'Schema Markup for AI: A Practical Guide | DigitiNexus',
  slug: 'schema-markup-for-ai',
  locale: 'en',
  altLocaleSlug: 'schema-markup-ai',
  metaDescription:
    'Which JSON-LD schema types help Google and AI understand your content: Article, FAQPage, Person, and Organization, with practical examples.',
  capsule:
    'Schema markup is JSON-LD code that explains your content to search engines and AI. The most useful types are Article, FAQPage, Person, and Organization: they make a page easier for machines to read and easier to extract inside AI-generated answers.',
  keywordPrimary: 'schema markup',
  keywordsSecondary: ['json-ld faq', 'structured data', 'structured data SEO'],
  cluster: 'c3',
  intent: 'I·MOFU',
  authorId: 'filippo-gentili',
  publishDate: '2026-08-17',
  updatedDate: '2026-08-17',
  status: 'published',
  cover: {
    src: '/blog/covers/schema-markup-ai-en.webp',
    alt: 'Schema markup in JSON-LD: the structured data that explains a web page to Google and AI',
  },
  body: [
    { type: 'h2', text: 'What is schema markup (and why does it help AI)?' },
    {
      type: 'p',
      lead: true,
      text: 'Schema markup is a block of code, usually in **JSON-LD** format, that explicitly describes what a page contains: who wrote it, what the title is, which questions and answers it holds. It does not change what the visitor sees. It talks to machines. Search engines and AI read it to understand the page without having to guess.',
    },
    {
      type: 'p',
      text: 'The difference shows up in extraction. An AI that generates an answer has to pull pieces of text from several sources and recombine them reliably. When your page declares "this is an article, this is the author, these are the FAQs," that extraction gets safer: the model knows where to look and what it is reading, instead of inferring structure from raw HTML. Clear markup means content that is easier to cite correctly, including inside answers like [Google AI Overviews](/en/blog/google-ai-overviews).',
    },
    {
      type: 'p',
      text: 'The vocabulary comes from Schema.org, the shared standard backed by Google, Microsoft, and the other major engines. You pick the "types" that describe your content (Article, FAQPage, Person, Organization) and declare them in code. For a bylined blog post with a block of frequently asked questions, those four cover most of the work. The other types are for more specific cases.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'Schema markup does not guarantee a better ranking: it helps engines and AI understand and present your content more accurately. It is an accelerator of comprehension, not a ranking shortcut.',
    },

    { type: 'h2', text: 'Article and BlogPosting: how do you mark up an article?' },
    {
      type: 'p',
      lead: true,
      text: 'Article (or its variant BlogPosting) is the base schema for any editorial page. It declares that the page is an article and describes its key attributes: title, author, publish and update dates, image, publisher. It is the first type to add, because it gives engines and AI the minimum context to treat the page as authoritative, dated content.',
    },
    {
      type: 'p',
      text: 'The fields that matter most are few and concrete. `headline` for the title, `author` linked to a real person, `datePublished` and `dateModified` for freshness, `image` and `publisher` for brand identity. The update date in particular is a signal AI uses to favor recent content on topics that change fast, like SEO or regulations.',
    },
    {
      type: 'list',
      items: [
        '`@type`: "Article" or "BlogPosting" for blog posts.',
        '`headline`: the page title, consistent with the H1.',
        '`author`: linked to a Person block (see below), not just a plain-text name.',
        '`datePublished` and `dateModified`: publish date and last update.',
        '`image` and `publisher`: the cover image and the publisher identity.',
      ],
    },
    {
      type: 'p',
      text: 'A practical example: for a CPA firm guide on a tax-filing deadline, marking `dateModified` with the date of the last revision signals that the content is current for this year. On a topic where stale information is wrong information, that is exactly the detail that pushes an AI to trust your page over an undated competitor.',
    },

    { type: 'h2', text: 'FAQPage: how do you structure questions and answers?' },
    {
      type: 'p',
      lead: true,
      text: 'FAQPage marks up a block of questions and answers as exactly that, declaring "this is a question, this is its answer." It is the schema that helps extraction the most: each Q&A pair is already a self-contained unit, precisely the format an AI looks for when it needs to return a tight answer to a specific question.',
    },
    {
      type: 'p',
      text: 'The logic is simple: marking up FAQs helps engines and AI recognize and isolate question-answer pairs, which is associated with a higher chance of seeing them reused in generated answers. The reason is structural. An AI answering "do I need a plugin for schema?" would rather draw from a block already labeled as a question with its answer than carve the meaning out of a flowing paragraph. You hand it the piece ready to go.',
    },
    {
      type: 'p',
      text: 'For this to work, two rules. First: the marked-up questions and answers must be genuinely visible on the page, not hidden in the code alone (Google Search Central treats markup that does not match visible content as spam). Second: write short, complete answers of 40 to 55 words that make sense read on their own. It is the same principle as citable capsules: each answer is a unit the AI can repeat without cutting anything.',
    },
    {
      type: 'list',
      items: [
        '`@type`: "FAQPage" for the container, "Question" for each question, "Answer" for the response.',
        '`name`: the text of the question, phrased the way a user would search for it.',
        '`acceptedAnswer`: the answer, short and self-contained (40–55 words).',
        'Consistency is mandatory: every marked-up Q&A must appear visibly on the page.',
      ],
    },
    {
      type: 'p',
      text: 'The method for writing answers AI is happy to reuse, which applies to FAQs and ordinary paragraphs alike, is laid out in the [GEO guide](/en/blog/generative-engine-optimization).',
    },

    { type: 'h2', text: 'Person and Organization: how do you connect author and brand?' },
    {
      type: 'p',
      lead: true,
      text: 'Person describes the author as a real entity; Organization describes the brand that publishes. Together they tell engines and AI "this content has a recognizable name and byline." It is the step that ties the page to a consistent identity, and that matters more and more because AI favors signed, identifiable sources over anonymous content.',
    },
    {
      type: 'p',
      text: 'The decisive field is `sameAs`: the list of public profiles that confirm the identity (LinkedIn, a personal site, professional profiles). By linking the author to their profiles and the brand to its channels, you build what is called entity consistency: the same name, the same credentials, everywhere. It is the signal that lets an engine understand that the "DigitiNexus" in your article is the same company it finds elsewhere, not a namesake.',
    },
    {
      type: 'list',
      items: [
        '`Person`: `name`, `jobTitle`, `url` of the author profile, and `sameAs` to public profiles.',
        '`Organization`: `name`, `logo`, `url`, and `sameAs` to the brand\'s official channels.',
        'Link the Article\'s `author` to the Person block: a real byline, not a generic name.',
        'Keep name, role, and profiles identical across every page: that is entity consistency.',
      ],
    },
    {
      type: 'p',
      text: 'This work is the foundation of perceived authority. The full picture, with the link between author, credentials, and AI trust, is in the [guide to E-E-A-T and author authority](/en/blog/e-e-a-t-and-author-authority).',
    },

    { type: 'h2', text: 'DefinedTerm and HowTo: glossaries and procedures?' },
    {
      type: 'p',
      lead: true,
      text: 'DefinedTerm and HowTo are specialized schemas for two recurring content types: definitions and step-by-step procedures. DefinedTerm marks up a term and its definition, useful for glossaries; HowTo marks up a procedure with its steps. Both do one thing: make even more explicit a piece of content that already lends itself to being extracted as a unit.',
    },
    {
      type: 'p',
      text: 'DefinedTerm is valuable when you define technical entities. If an article explains what Core Web Vitals or GEO are, marking the definition as DefinedTerm turns it into a recognizable unit, exactly what an AI looks for when it has to answer "what is...". For a professional services firm, a glossary of industry terms marked up this way becomes a clean source AI draws definitions from.',
    },
    {
      type: 'p',
      text: 'HowTo follows the same logic for procedures. A "how to do X in five steps" guide marked up with HowTo declares the sequence of steps, and AI more readily reuses a procedure that is already structured. The usual rule applies: only mark up what is genuinely visible and ordered on the page. Schema describes the content, it does not replace it.',
    },

    { type: 'h2', text: 'Which schema markup mistakes should you avoid?' },
    {
      type: 'p',
      lead: true,
      text: 'The worst mistake is marking up content that does not exist on the page. If you declare FAQs in the JSON-LD but those questions are not visible to the user, Google treats it as structured spam and may penalize you. Schema must always mirror what the page actually shows: it is a faithful description, not a trick to pad the code.',
    },
    {
      type: 'p',
      text: 'The second mistake is inconsistent data. A different author name between Article and Person, an update date that does not match, an organization declared two different ways: these are all cracks that weaken a machine\'s trust. AI rewards entity consistency, so every declared value has to line up everywhere, from the page to the markup to the profiles linked with `sameAs`.',
    },
    {
      type: 'list',
      items: [
        '**Markup not visible on the page:** FAQs or content declared in the code but absent for the user. Possible penalty.',
        '**Inconsistent data:** author name, dates, or brand that differ across schema, page, and public profiles.',
        '**Wrong type:** marking a product page as Article, or a page that is not in Q&A form as FAQPage.',
        '**Missing required fields:** an incomplete schema gets ignored or flagged as an error.',
        '**"Abandoned" schema:** update dates never touched, which makes the content look stale.',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Before publishing, validate every page with Google\'s Rich Results Test and the Schema.org validator. They tell you whether the schema is correct, whether required fields are present, and whether the markup matches the visible content.',
    },
    {
      type: 'p',
      text: 'Schema markup is one of the building blocks of visibility in generated answers, but it does not work alone: it makes sense inside a wider strategy. The full picture is in the [guide to Generative Engine Optimization](/en/blog/generative-engine-optimization), where you see how it combines with capsules, sourced data, and author authority.',
    },
    {
      type: 'cta',
      text: 'Want a website that is ready for Google and AI, with correct schema markup on every page? We build it schema-ready and citable, in 1–4 weeks.',
      label: "Let's talk",
      href: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ',
    },
  ],
  faq: [
    {
      q: 'Does schema markup improve my Google ranking?',
      a: 'Not directly. Schema is not a ranking factor: it helps engines and AI understand content better and can enable rich results. The effect on ranking is indirect, because a page that is easier to understand and more clickable tends to perform better over time.',
    },
    {
      q: 'JSON-LD or microdata?',
      a: 'JSON-LD. It is the format Google recommends because it keeps the schema separate from the HTML, in a single block that is easy to manage and validate. Microdata, woven into the page code, is more fragile and harder to maintain. For a new site, always use JSON-LD.',
    },
    {
      q: 'Do I need a plugin to add schema?',
      a: 'It depends on the platform. On WordPress many plugins generate schema automatically, but they need checking because they often produce incomplete or inconsistent markup. On a custom site, schema is written directly in the code, with full control over the fields and over the match with visible content.',
    },
    {
      q: 'How do I test whether my schema works?',
      a: 'With two free tools: Google\'s Rich Results Test checks whether the page is eligible for rich results, and the Schema.org validator checks the code for correctness. Both flag missing fields and errors. Also confirm the markup matches the content that is actually visible.',
    },
  ],
  internalLinks: [
    { slug: 'generative-engine-optimization', anchor: 'Generative Engine Optimization (GEO)' },
    { slug: 'google-ai-overviews', anchor: 'Google AI Overviews' },
    { slug: 'e-e-a-t-and-author-authority', anchor: 'E-E-A-T and author authority' },
  ],
  sources: [
    { label: 'Schema.org — shared vocabulary for structured data', url: 'https://schema.org/' },
    { label: 'Google Search Central — Intro to structured data markup', url: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data' },
    { label: 'Google Search Central — Structured data general guidelines', url: 'https://developers.google.com/search/docs/appearance/structured-data/sd-policies' },
  ],
};

export default article;
