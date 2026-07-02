import type { Article } from '../../types';

const article: Article = {
  id: 25,
  title: 'Core SEO in 2026: What Still Matters (and What Does Not)',
  metaTitle: 'Core SEO in 2026: What Still Matters | DigitiNexus',
  slug: 'seo-in-2026',
  locale: 'en',
  altLocaleSlug: 'seo-2026',
  metaDescription:
    'What actually matters in 2026 SEO between AI Overviews and GEO: the fundamentals that still work and the practices to drop today.',
  capsule:
    'In 2026, core SEO is still the foundation: useful content, search intent, a clean technical structure, and links. AI engines mostly cite pages that already rank well, so SEO is not dead. What changed is the prize you build on top of it. Get the fundamentals right first, then optimize those same pages to be quoted inside AI answers.',
  keywordPrimary: 'seo 2026',
  keywordsSecondary: ['seo fundamentals', 'core seo', 'search engine optimization basics'],
  cluster: 'c3',
  intent: 'I·TOFU',
  authorId: 'filippo-gentili',
  publishDate: '2026-09-30',
  updatedDate: '2026-09-30',
  status: 'published',
  cover: {
    src: '/blog/covers/seo-2026-en.webp',
    alt: 'Core SEO in 2026: the fundamentals that still work between AI Overviews and GEO',
  },
  body: [
    { type: 'h2', text: 'Is SEO still worth it in 2026?' },
    {
      type: 'p',
      lead: true,
      text: 'Yes, more than it looks. AI tools like ChatGPT and Google AI Overviews do not invent the sources they cite: they pull them, in large part, from pages that already rank well in organic results. To be cited, you first have to be found. SEO is not dead. It became the ticket in.',
    },
    {
      type: 'p',
      text: 'The confusion comes from treating "SEO" as a synonym for "clicks from Google". Clicks are down, that part is true: AI Overviews answer right on the results page, and many searches no longer send any traffic to your site. But the work that gets you to the top of the results is exactly the work that makes you a candidate to be cited by AI. The final prize changes, not the work it takes to get there.',
    },
    {
      type: 'p',
      text: 'There is also a fact that puts the much-announced death of Google in perspective. Despite the rise of ChatGPT and Perplexity, Google is still by far the most used search engine in the world. AI adds to how people search, it does not replace it wholesale. Ignoring classic SEO in 2026 means giving up both channels at once: the search results and the citations that come out of them.',
    },
    {
      type: 'p',
      text: 'One pattern is worth naming. The majority of US Google searches now end without a click to the open web: people get the answer on the results page and move on. That is a reason to optimize for citations, not a reason to abandon the work that earns rankings in the first place.',
    },
    {
      type: 'p',
      text: 'This article separates the three things people keep mixing up: what part of SEO still works the same way, what changed because of AI, and what you can stop doing today with no regrets.',
    },

    { type: 'h2', text: 'Which SEO fundamentals still work?' },
    {
      type: 'p',
      lead: true,
      text: 'The same ones as always, because they answer a human need that does not change: finding a reliable answer fast. The five pillars are search intent, useful content, site structure, technical base, and links. They are the foundation everything sits on, including the optimizations for AI.',
    },
    {
      type: 'p',
      text: 'Search intent is the real question behind the words someone types. "How much does a website cost" and "web design agency near me" look similar but hide different needs: one person wants a price, the other wants a vendor. Answering the right need, with the right page, is the first thing Google rewards and the first thing an AI checks before it cites you.',
    },
    {
      type: 'list',
      items: [
        '**Search intent:** figure out what the searcher actually wants and give exactly that answer, not the answer you wish you could give.',
        '**Useful content:** pages written for people, complete and original. It is the heart of Google\'s "helpful content" guidance, which rewards content that helps and demotes content that pads.',
        '**Site structure:** a clear hierarchy, readable URLs, internal links that connect related pages. It helps both the people browsing and the crawlers indexing.',
        '**Technical base:** a fast, mobile-first, indexable site. Core Web Vitals (the metrics Google uses to measure loading speed and stability) stay a signal.',
        '**Links:** mentions and links from credible sites. They remain a vote of confidence that feeds both rankings and authority in the eyes of AI.',
      ],
    },
    {
      type: 'p',
      text: 'The new part is not that these pillars changed. It is that they now work twice. A useful, well-structured page ranks on Google and, at the same time, becomes quotable material for AI. Anyone who built solid foundations in past years does not have to start over: they just have to sharpen how they write the answers.',
    },

    { type: 'h2', text: 'What changed in SEO because of AI?' },
    {
      type: 'p',
      lead: true,
      text: 'The end goal changed, not the fundamentals. Ranking used to be enough to earn the click. Today GEO and AEO sit on top of that work: optimizing content so it gets cited inside AI answers, even when the user clicks no site at all. It is a layer above SEO, not a replacement for it.',
    },
    {
      type: 'p',
      text: 'GEO (Generative Engine Optimization) is the set of techniques that get you cited in answers generated by AI like ChatGPT, Gemini, and Google AI Overviews. AEO (Answer Engine Optimization) is its close cousin: optimizing for engines that give direct answers. In practice they overlap heavily, and the principle is the same: answer the exact question immediately, in a short, self-contained way.',
    },
    {
      type: 'p',
      text: 'The concrete difference in how you write is small but real. AI does not cite a whole page, it extracts a single passage and rewrites it. So every section has to open with a short answer that makes sense out of context, before the deep dive. The academic study by **Aggarwal et al. (KDD 2024)** found that techniques like citing sources, adding quotes, and including statistics can boost visibility in generative engines **by up to 40%** ([arXiv](https://arxiv.org/abs/2311.09735)). The full picture is in the [guide to Generative Engine Optimization](/en/blog/generative-engine-optimization).',
    },
    {
      type: 'p',
      text: 'The second change is Google AI Overviews, the AI-generated answer boxes at the top of the results. Where they appear, they capture much of the attention and cut clicks to sites: according to Ahrefs, the click-through rate of the top organic result drops sharply when an AI Overview shows up. How much it matters depends heavily on your sector, so it pays to understand how often they appear in yours before deciding where to invest. The detail is in the [guide to Google AI Overviews](/en/blog/google-ai-overviews).',
    },

    { type: 'h2', text: 'Which SEO practices should you drop in 2026?' },
    {
      type: 'p',
      lead: true,
      text: 'Drop anything that inflates the page without helping the reader. The three to cut today are keyword stuffing, thin content, and empty padding. Google explicitly demotes these with its "helpful content" guidance, and AI simply does not cite them, because there is nothing worth extracting.',
    },
    {
      type: 'p',
      text: 'Keyword stuffing is the obsessive repetition of a keyword in the text, in the hope of "telling Google" what the page is about. Today it backfires: engines understand meaning, they do not count occurrences. A page that repeats "cheap website" twenty times reads like spam to a human and to a machine. Better to write it once, in the right spot, and spend the energy on the content.',
    },
    {
      type: 'list',
      items: [
        '**Keyword stuffing:** repeating the keyword until the text reads unnaturally. Replace it with normal language and synonyms.',
        '**Thin content:** short, generic pages built only to rank. They add no value and now hurt you.',
        '**Padded text:** stretching a page with preambles and empty sentences to hit a word count. Length should come from coverage, not filler.',
        '**Low-quality paid links:** buying links from shady networks. They risk penalties and build no real authority.',
        '**Aggressive technical tricks:** hidden text, cloaking, doorway pages. These belong to another era and are still risky today.',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'The rule that sums them all up: if you do something for the engine and not for the person, it is probably a practice to drop. Write for the reader, and the engines (including the AI ones) follow.',
    },

    { type: 'h2', text: 'Where do you start with SEO in 2026?' },
    {
      type: 'p',
      lead: true,
      text: 'Start with an essential on-page checklist, before you think about GEO or link building. On-page means everything you control inside the page: title, structure, content, technical base. It is the part you fully control and the one that pays off fastest, because it does not depend on other sites.',
    },
    {
      type: 'p',
      text: 'Order matters. A clean technical base and content that answers real questions come before any optimization for AI, because GEO builds on pages that are already solid. There is no point polishing quotable capsules on a slow site that Google struggles to index. Fix the foundations, then level up.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**One intent per page:** decide which question each page answers, and answer only that one.',
        '**Clear title and meta:** one H1 with the primary keyword, a title under 60 characters, a useful description under 155.',
        '**Answer up front:** put the answer in the first paragraphs, then develop it. It serves the reader and the engine that cites you.',
        '**Question-based structure:** subheads that are real questions, with the answer right below. It helps scanning and citation.',
        '**Technical base in order:** a fast, mobile-first, indexable site, with clean URLs and internal links.',
        '**Schema markup:** mark up the article, FAQ, and author in JSON-LD so engines understand the structure.',
      ],
    },
    {
      type: 'p',
      text: 'Two pieces deserve their own deep dive. To make your content readable in a structured way by AI, start from the [guide to schema markup for AI](/en/blog/schema-markup-for-ai). And if you serve a local area, the [guide to local SEO](/en/blog/local-seo) explains how to get found by people searching for a service near them, a place where classic SEO still keeps a lot of weight.',
    },
    {
      type: 'cta',
      text: 'Want a website built on solid SEO foundations and ready to be cited by AI? We build it schema-ready, in 1–4 weeks.',
      label: "Let's talk",
      href: 'https://calendly.com/digitinexus/30min',
    },
  ],
  faq: [
    {
      q: 'Is SEO dead in 2026?',
      a: 'No. Clicks from Google are down because of AI Overviews, but the SEO work that gets you to the top is the same work that makes you quotable by AI, which pulls sources from pages that already rank well. SEO does not vanish: it becomes the foundation you build GEO on.',
    },
    {
      q: 'Should I invest in SEO or GEO?',
      a: 'It is not either-or: GEO leans on SEO. AI mostly cites pages already high in the results, so without a solid SEO base you have nothing to get cited. Build the fundamentals first (content, structure, technical), then sharpen the content so it is quotable.',
    },
    {
      q: 'Do links still matter for rankings?',
      a: 'Yes. Links from credible sites remain a trust signal that helps both rankings and authority in the eyes of AI. Quality beats quantity: a few links from relevant sources are worth more than many bought from low-quality networks, which risk penalties.',
    },
    {
      q: 'How long does SEO take to show results?',
      a: 'SEO is not instant: it usually takes months of content published consistently and authority that grows. On-page technical fixes show faster effects, while rankings and AI citations mature over time. It is a long-term investment, not a switch you flip.',
    },
    {
      q: 'Do I have to rewrite my whole site for 2026 SEO?',
      a: 'Almost never. If you have solid foundations, start with the pages that already rank and rewrite them with the answer up front and sourced data. It is the fastest way to turn rankings you already have into AI citations you do not have yet, without redoing everything.',
    },
  ],
  internalLinks: [
    { slug: 'generative-engine-optimization', anchor: 'Generative Engine Optimization (GEO)' },
    { slug: 'google-ai-overviews', anchor: 'Google AI Overviews' },
    { slug: 'schema-markup-for-ai', anchor: 'Schema markup for AI' },
    { slug: 'local-seo', anchor: 'Local SEO to get found nearby' },
  ],
  sources: [
    { label: 'Aggarwal et al., "GEO: Generative Engine Optimization", KDD 2024 (arXiv)', url: 'https://arxiv.org/abs/2311.09735' },
    { label: 'Google Search Central — Creating helpful, reliable, people-first content', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
    { label: 'Ahrefs — AI Overviews are correlated with a lower CTR for the top-ranking page', url: 'https://ahrefs.com/blog/ai-overviews-reduce-clicks/' },
    { label: 'SparkToro — 58.5% of US Google searches ended in zero clicks (2024)', url: 'https://sparktoro.com/blog/2024-zero-click-search-study-for-every-1000-us-google-searches-only-374-clicks-go-to-the-open-web-in-the-eu-its-360/' },
  ],
};

export default article;
