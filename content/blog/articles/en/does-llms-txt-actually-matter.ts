import type { Article } from '../../types';

const article: Article = {
  id: 24,
  title: 'Does an llms.txt File Actually Get You Cited by AI? The Data',
  metaTitle: 'Does llms.txt Actually Matter for AI? The Data | DigitiNexus',
  slug: 'does-llms-txt-actually-matter',
  locale: 'en',
  altLocaleSlug: 'llms-txt-serve-davvero',
  metaDescription:
    'Does an llms.txt file actually get you cited by AI? Google says it ignores the file, and the real-world data agrees. Here is what to do instead.',
  capsule:
    'Right now, llms.txt does not earn citations. Google says none of its AI systems use the file, and studies of real bot traffic find it is almost never read. It is an optional add-on, not a priority. The work that moves the needle is citable content, schema markup, and authority.',
  keywordPrimary: 'llms.txt',
  keywordsSecondary: ['does llms.txt work', 'llms.txt for AI', 'llms.txt file'],
  cluster: 'c3',
  intent: 'I·TOFU',
  authorId: 'filippo-gentili',
  publishDate: '2026-07-27',
  updatedDate: '2026-07-27',
  status: 'published',
  cover: {
    src: '/blog/covers/llms-txt-serve-davvero-en.webp',
    alt: 'An llms.txt file in a site root: does it actually get you cited by AI?',
  },
  body: [
    { type: 'h2', text: 'What is the llms.txt file?' },
    {
      type: 'p',
      lead: true,
      text: '**llms.txt** is a plain text file, written in Markdown, that you place in your site root (at `yoursite.com/llms.txt`) to give AI a curated map of your most important content. The idea is to declare, in a clean and pre-summarized form, what you do and where the pages that matter live, so a language model can understand the site without downloading and stripping the raw HTML.',
    },
    {
      type: 'p',
      text: 'The proposal came out in mid-2024 from Jeremy Howard, co-founder of Answer.AI, and it borrows its logic from the old `robots.txt`: a conventional, machine-readable file that always sits in the same place. The difference is the audience. robots.txt tells search engine crawlers what they may visit; llms.txt wants to tell language models which content to read first, already cleaned of menus, banners, and code.',
    },
    {
      type: 'p',
      text: 'On paper it is elegant. A law firm could list its practice areas and links to the key pages in a few lines; a CPA could point to services and the most current tax guides. The question, though, is not whether the idea is sensible. It is whether anyone on the other end actually reads the file.',
    },

    { type: 'h2', text: 'Does it actually work? What the data says' },
    {
      type: 'p',
      lead: true,
      text: 'No, today it does not work as a tool for getting cited. No major AI system says it uses llms.txt, Google has confirmed it ignores the file, and measurements of real bot traffic back that up: the file gets touched in a tiny fraction of requests. It is a proposed standard, not an adopted one.',
    },
    {
      type: 'p',
      text: 'The clearest position comes from Google. John Mueller, a Search Advocate at the company, compared llms.txt to the old "keywords" meta tag: something sites can fill in, but that the systems do not use to decide what to show or cite. Neither Google nor, as of now, the other major model providers have announced official support. In practice you are writing a file the intended reader has never promised to open.',
    },
    {
      type: 'p',
      text: 'The field data points the same way. A large-scale analysis by Ahrefs of more than 130,000 sites found that 97% of the llms.txt files in the wild are never read by any bot at all. The crawlers keep reading the normal HTML pages and almost entirely skip the dedicated file. The standard exists; the adoption does not.',
    },
    {
      type: 'table',
      caption: 'llms.txt: what the sources and measurements say (2026)',
      headers: ['Source', 'Finding', 'What it means'],
      rows: [
        ['Google (John Mueller)', 'No AI system uses it', 'Compared to meta keywords: ignored'],
        ['Real bot traffic', 'File touched in a tiny share of requests', 'Crawlers read the HTML, not the file'],
        ['Ahrefs', '97% of files never read', 'Almost no bot opens llms.txt'],
      ],
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'The standard could be adopted later: a public, conventional file is easy to support. But a marketing decision is made on today\'s data, not a maybe. And today, llms.txt does not earn citations.',
    },

    { type: 'h2', text: 'Is it worth implementing anyway?' },
    {
      type: 'p',
      lead: true,
      text: 'Only if it costs you almost nothing and does not pull you away from what actually works. llms.txt is a text file: creating it takes little time and does not harm the site. As a small bet on possible future adoption, fine. The problem starts when you treat it as a visibility lever, because right now it is not one.',
    },
    {
      type: 'p',
      text: 'The real risk is not the file itself, it is the opportunity cost. The hours spent curating and updating an llms.txt are hours taken from work that has measurable impact: making pages citable, marking content up with structured data, building authority. For a small business with limited time and budget, putting llms.txt ahead of that work means optimizing the wrong thing.',
    },
    {
      type: 'p',
      text: 'There is also a maintenance problem. A file that lists your main pages goes stale: you change a service, rewrite a guide, move a URL, and the llms.txt falls behind. A document out of sync with the real site, even if it were read one day, would describe an old version of you. Better no file than a file that lies.',
    },

    { type: 'h2', text: 'What should you do instead?' },
    {
      type: 'p',
      lead: true,
      text: 'Invest in the signals AI actually uses today: content written to be extracted, structured data, and recognizable authority. These are the three levers that, unlike llms.txt, have a verifiable effect on how often you get picked up and cited by generative systems. The dedicated file is an optional add-on. This is the real work.',
    },
    {
      type: 'p',
      text: 'The first move is the content. AI reads your HTML pages, so those pages have to answer clearly and self-sufficiently: a tight sentence up front that gives the answer, then the development. That is the answer-capsule method, which makes a paragraph extractable and quotable without the context around it. The full framework for getting picked up by generative engines, and how it differs from classic SEO, is in the [guide to Generative Engine Optimization](/en/blog/generative-engine-optimization).',
    },
    {
      type: 'p',
      text: 'The second move is technical. Structured data (schema markup) declares, in a machine-readable way, what a page contains: who the author is, what the questions and answers are, what entities you cover. It is the standard, already-supported way to give AI context, instead of a file nobody opens. The detail is in the [guide to schema markup for AI](/en/blog/schema-markup-for-ai).',
    },
    {
      type: 'list',
      items: [
        '**Citable content:** an answer capsule at the start of every section, short and self-contained, so the AI can repeat it whole.',
        '**Structured data:** Article + FAQPage + Person schema to declare content, questions, and author in a machine-readable way.',
        '**Authority:** a bylined author with credentials, cited sources, and a consistent identity across the web raise the trust of generative systems.',
        '**Organic top 10:** AI pulls its sources from well-ranked pages, so SEO stays the ticket in.',
      ],
    },
    {
      type: 'p',
      text: 'Where classic SEO still earns its keep in 2026, and why it remains the foundation under all of this, is laid out in the [guide to SEO in 2026](/en/blog/seo-in-2026). That is where the energy belongs, not in a file that today stays a dead letter.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Quick test: before curating an llms.txt, copy one of your paragraphs, paste it alone into a chat, and ask whether it answers a specific question without the surrounding context. If the answer is no, that is where to work first.',
    },
    {
      type: 'cta',
      text: 'Want a site that is genuinely ready for AI, with citable content and schema markup in the right places? We build it that way, in 1 to 4 weeks.',
      label: "Let's talk",
      href: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ',
    },
  ],
  faq: [
    {
      q: 'Does llms.txt help your Google ranking?',
      a: 'No. Google has stated it does not use the llms.txt file for ranking or for generated answers: John Mueller compared it to the old meta keywords tag, fillable but ignored. It has no effect on organic ranking, direct or indirect. Content, structured data, and authority are what count.',
    },
    {
      q: 'Do AIs actually read the llms.txt file?',
      a: 'Almost never. An Ahrefs analysis of more than 130,000 sites found that 97% of llms.txt files are never read, and Google says none of its AI systems use the file. Crawlers keep reading the normal HTML pages instead of the dedicated file.',
    },
    {
      q: 'Does not having an llms.txt hurt me?',
      a: 'No, not having one carries no penalty. It is not a required file or a standard officially supported by the major AI systems. Its absence takes nothing from your visibility: what matters is that your HTML pages are clear, citable, and marked up with the right structured data.',
    },
    {
      q: 'Where does the llms.txt file go?',
      a: 'In the site root, reachable at yoursite.com/llms.txt, the same way robots.txt works. It is a Markdown text file listing your main content with links. Creating it is simple, but remember almost no bot opens it today: it does not replace work on content and schema.',
    },
  ],
  internalLinks: [
    { slug: 'generative-engine-optimization', anchor: 'Generative Engine Optimization (GEO)' },
    { slug: 'schema-markup-for-ai', anchor: 'Schema markup for AI' },
    { slug: 'seo-in-2026', anchor: 'SEO in 2026' },
  ],
  sources: [
    { label: 'Ahrefs — llms.txt study (97% of files never read, 130K+ sites)', url: 'https://ahrefs.com/blog/llmstxt-study/' },
  ],
};

export default article;
