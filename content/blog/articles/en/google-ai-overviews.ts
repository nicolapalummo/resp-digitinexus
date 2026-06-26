import type { Article } from '../../types';

const article: Article = {
  id: 20,
  title: 'Google AI Overviews: what they are and how much they cut your clicks',
  metaTitle: 'Google AI Overviews: What They Are | DigitiNexus',
  slug: 'google-ai-overviews',
  locale: 'en',
  altLocaleSlug: 'ai-overview-google-italia',
  metaDescription:
    'What Google AI Overviews are, how they reshape clicks and organic traffic in 2026, and how to stay visible by getting cited inside the AI answer.',
  capsule:
    'Google AI Overviews are the AI-generated answers that sit at the top of the results page, above the classic links. They now appear across many informational searches and sharply cut clicks: when an AI summary shows up, users click a traditional result far less often, so ranking first no longer guarantees the visit.',
  keywordPrimary: 'google ai overviews',
  keywordsSecondary: ['zero click search', 'ai overview ctr'],
  cluster: 'c3',
  intent: 'I·TOFU',
  authorId: 'filippo-gentili',
  publishDate: '2026-07-13',
  updatedDate: '2026-07-13',
  status: 'published',
  cover: {
    src: '/blog/covers/ai-overview-google-italia-en.webp',
    alt: 'Google AI Overviews: the AI-generated answer that sits at the top of the search results, above the classic links',
  },
  body: [
    { type: 'h2', text: 'What are Google AI Overviews?' },
    {
      type: 'p',
      lead: true,
      text: 'A **Google AI Overview** is the AI-generated answer that Google shows at the top of the results page, above the classic blue links. It pulls from several sources to summarize the answer to a question in a few lines, and it usually cites a handful of sites. It is the most visible change to search in years.',
    },
    {
      type: 'p',
      text: 'In practice, when you search on Google you increasingly do not get ten links right away: you get a box with an answer already written for you. The links to the pages the AI drew from sit below or off to the side. The user reads the summary and, in many cases, already has what they came for without opening a single website.',
    },
    {
      type: 'p',
      text: 'AI Overviews show up mostly on informational searches, the ones that start with "how", "what", "how long", or "why". Someone searching "how long does a kitchen remodel take" or "what do I need to start an LLC" has a good chance of seeing a generated answer before they even scroll. They are far less common on branded or transactional searches, where the user already knows where they want to land.',
    },

    { type: 'h2', text: 'How common are AI Overviews now?' },
    {
      type: 'p',
      lead: true,
      text: 'They are the norm on informational searches, not the exception, and their real impact shows up in the clicks. According to the Pew Research Center (2025), when an AI summary appears users click a traditional result on just 8% of visits, versus 15% when no summary is present, and only 1% click a link inside the summary itself.',
    },
    {
      type: 'p',
      text: 'The bigger picture is a search results page that increasingly answers the question on the spot. According to SparkToro\'s zero-click research, 58.5% of US Google searches end without a click to the open web. AI Overviews accelerate that pattern: they put a finished answer where the user is already looking, so there is less reason to leave the page.',
    },
    {
      type: 'table',
      caption: 'How an AI summary changes clicks (Pew Research Center, 2025).',
      headers: ['Search result', 'Click a traditional link', 'Click inside the AI summary'],
      rows: [
        ['Results with an AI summary', '8% of visits', '1% of visits'],
        ['Results without an AI summary', '15% of visits', 'n/a'],
      ],
    },
    {
      type: 'p',
      text: 'The practical takeaway is simple: before you estimate the impact on your own traffic, you need to know how often AI Overviews show up on the searches your customers actually run. A CPA who ranks for narrow tax questions sees fewer of them than a contractor who catches broad "how to" searches, but the direction is the same for everyone. The share keeps climbing.',
    },

    { type: 'h2', text: 'What do AI Overviews change for your traffic?' },
    {
      type: 'p',
      lead: true,
      text: 'They change the fact that ranking first is no longer enough. When an AI Overview appears, the user often finds the answer on the results page and never clicks: the majority of US Google searches already end in zero clicks. If your site is not cited inside the generated answer, for those users your business effectively does not exist, even when you technically rank at the top.',
    },
    {
      type: 'p',
      text: 'The effect on clicks is measurable. The Pew data above shows the click-through rate roughly halving once an AI summary is present, from 15% to 8% of visits. Translated: a top organic position is worth far less than it was before AI summaries arrived. Sitting at number one buys you a chance to be cited, not the guaranteed visit it used to be.',
    },
    {
      type: 'p',
      text: 'This does not mean organic traffic disappears. It means it changes composition: the people who do click arrive with sharper intent, because they have already read the summary and want to go deeper or take action. You keep less traffic, but more qualified. The real problem hits businesses that live on high-volume informational searches: there the lost clicks are concrete, and you have to make them up on other fronts.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'If most of your traffic comes from broad informational searches, check how your organic clicks have trended over the last few months in Google Search Console. A drop in clicks at the same ranking position is the classic signature of the AI Overview effect.',
    },

    { type: 'h2', text: 'How do you stay visible with AI Overviews?' },
    {
      type: 'p',
      lead: true,
      text: 'Staying visible means aiming to be cited inside the answer, not just to rank below it. That is the work of GEO (Generative Engine Optimization), the set of techniques for getting picked up by AI engines. The good news: the sources cited in AI Overviews almost always come from the organic top 10. SEO does not disappear, it becomes the ticket to entry.',
    },
    {
      type: 'p',
      text: 'The mechanism works in two stages. First you have to be in the group of well-ranked pages Google draws its sources from, and that is still classic SEO. Then, among those pages, the AI chooses who to quote: and here what matters is how clearly, concisely, and credibly your content answers the question. A page that opens with a tight, self-contained sentence is easier to extract and quote than one that circles the point for three paragraphs.',
    },
    {
      type: 'p',
      text: 'A concrete example. For "how long does it take to build a website" you answer badly with three paragraphs of preamble and well with one sharp opening line ("A custom brochure site takes 1 to 4 weeks, depending on pages and content"), followed by the detail. The second version is a complete capsule the AI can quote without cutting anything. The full method is in the [guide to Generative Engine Optimization](/en/blog/generative-engine-optimization).',
    },
    {
      type: 'list',
      items: [
        '**Organic top 10:** without a strong ranking you do not even make the candidate sources. SEO stays the foundation.',
        '**Answer capsule up top:** a short, self-contained sentence that answers the question right away, clear even when pulled out on its own.',
        '**One sourced data point per section:** dated numbers and percentages with a verifiable link raise your odds of being quoted.',
        '**Author and authority:** AI engines favor recognizable sources with a named author and a consistent entity.',
      ],
    },
    {
      type: 'p',
      text: 'The base SEO context all of this rests on, in 2026, is in the [guide to SEO in 2026](/en/blog/seo-in-2026): that is the foundation visibility inside AI Overviews is built on.',
    },

    { type: 'h2', text: 'What should you do now?' },
    {
      type: 'p',
      lead: true,
      text: 'Start from the pages that already rank and rewrite them to be cited. Since most AI citations come from the top 10, the fastest move is to take the content Google already rewards and give it answer capsules, sourced data, and schema markup. It is the quickest way to turn rankings you already have into citations you do not have yet.',
    },
    {
      type: 'p',
      text: 'Academic research backs this up: the study by Aggarwal et al. (KDD 2024) shows that citing sources, adding statistics, and including quotations can raise visibility in generative engines by up to 40% ([arXiv](https://arxiv.org/abs/2311.09735)). No tricks required: just write so every passage is extractable, verifiable, and signed.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'In Search Console, find which informational queries are losing clicks at the same ranking: those are where AI Overviews weigh most.',
        'Rewrite those pages with a short, self-contained answer capsule at the top.',
        'Add one sourced data point per section and mark up questions and answers with [schema markup](/en/blog/schema-markup-for-ai) (Article + FAQPage).',
        'Sign your content with a real author and link a public profile, to strengthen authority.',
        'Run your customers\' typical questions through Google and the AI tools, and check whether you show up among the sources.',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Quick test: copy one of your paragraphs, paste it on its own into a chat, and ask "does this answer a specific question without the surrounding context?". If the answer is no, rewrite it as a capsule. That is how you become quotable.',
    },
    {
      type: 'cta',
      text: 'Want a website built to rank on Google and get cited by AI Overviews? We build it schema-ready and quotable, in 1 to 4 weeks.',
      label: 'Let\'s talk',
      href: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ',
    },
  ],
  faq: [
    {
      q: 'Do AI Overviews cost you traffic?',
      a: 'Yes, on informational traffic. When a generated answer appears, many users do not click: the majority of US Google searches are zero-click, and click-through on the results roughly halves. You keep less traffic, but more qualified, because the people who click have sharper intent.',
    },
    {
      q: 'Can I turn off AI Overviews for my site?',
      a: 'No. You cannot stop Google from showing an AI Overview for the queries that involve you: it is a feature of the search engine, not of your site. All you can do is work to be among the sources cited inside the answer, instead of being left out.',
    },
    {
      q: 'How do I get cited in an AI Overview?',
      a: 'You need to be in the organic top 10, since that is where Google pulls its sources, and you need quotable content: answer capsules up top, sourced data, and schema markup. The more clearly and credibly your page answers, the likelier the AI is to quote it.',
    },
    {
      q: 'Which searches show AI Overviews?',
      a: 'Mostly informational searches ("how", "what", "how long"). They are far less common on branded or transactional queries, where the user already knows where they want to go. On sensitive topics like health, money, or law, Google tends to show them more cautiously.',
    },
  ],
  internalLinks: [
    { slug: 'generative-engine-optimization', anchor: 'Generative Engine Optimization (GEO)' },
    { slug: 'schema-markup-for-ai', anchor: 'Schema markup for AI' },
    { slug: 'seo-in-2026', anchor: 'SEO in 2026' },
  ],
  sources: [
    {
      label: 'Pew Research Center — Google users are less likely to click on links when an AI summary appears (2025)',
      url: 'https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/',
    },
    {
      label: 'SparkToro — Zero-Click Search Study (58.5% of US Google searches end without a click)',
      url: 'https://sparktoro.com/blog/2024-zero-click-search-study-for-every-1000-us-google-searches-only-374-clicks-go-to-the-open-web-in-the-eu-its-360/',
    },
    {
      label: 'Ahrefs — How AI Overviews affect click-through rates',
      url: 'https://ahrefs.com/blog/ai-overviews-reduce-clicks/',
    },
    {
      label: 'Aggarwal et al., "GEO: Generative Engine Optimization", KDD 2024 (arXiv)',
      url: 'https://arxiv.org/abs/2311.09735',
    },
  ],
};

export default article;
