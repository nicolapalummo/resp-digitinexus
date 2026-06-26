import type { Article } from '../../types';

const article: Article = {
  id: 11,
  title: 'Website cost calculator: estimate your price and timeline',
  metaTitle: 'Website Cost Calculator: Price & Timeline | DigitiNexus',
  slug: 'website-cost-calculator',
  locale: 'en',
  altLocaleSlug: 'calcolatore-costo-sito',
  metaDescription:
    'How website cost and timing are estimated from type, pages, and integrations: the reasoning behind a ballpark estimate, before you ever ask for a quote.',
  capsule:
    'A website\'s cost and timeline come down to three factors: the type of site (brochure site, online store, landing page), the number of pages, and the integrations you need. A ballpark estimate combines those three inputs; the real quote comes later, scoped to your specific project.',
  keywordPrimary: 'website cost calculator',
  keywordsSecondary: ['estimate website price', 'website price estimator'],
  cluster: 'c1',
  intent: 'C·MOFU',
  authorId: 'filippo-gentili',
  publishDate: '2026-10-14',
  updatedDate: '2026-10-14',
  status: 'published',
  cover: {
    src: '/blog/covers/calcolatore-costo-sito-en.webp',
    alt: 'Website cost calculator that estimates price and timeline from site type, number of pages, and integrations as the factors behind a ballpark estimate',
  },
  body: [
    {
      type: 'p',
      lead: true,
      text: 'A **website cost calculator** turns a few answers (what kind of site you need, how many pages, which features) into a ballpark estimate of price and timeline. It does not replace a quote: it gives you an order of magnitude before you talk to anyone, so you know what to expect. This page walks through how an estimate like that reasons, which factors push it up or down, and where the estimate ends and the real quote begins.',
    },
    {
      type: 'callout',
      variant: 'placeholder',
      text: 'Interactive calculator coming soon. We are building the tool that turns site type, pages, and integrations into a cost and timeline range in about a minute. In the meantime, here is the reasoning behind it: the same factors you would use to read a quote yourself.',
    },

    { type: 'h2', text: 'How will the calculator work?' },
    {
      type: 'p',
      lead: true,
      text: 'The calculator will ask three things: the **type** of site (brochure site, online store, landing page, portal), the **number of pages** or sections, and the **integrations** you need (booking, payments, a member area, multiple languages). From those answers combined, it returns an indicative cost range and a timeline estimate, meant as a starting point for the conversation, not a final figure.',
    },
    {
      type: 'p',
      text: 'The principle is simple: the more an answer pushes the project toward customization and complexity, the higher the estimate. A single landing page with a contact form sits at one end; a custom online store with a catalog, payments, and a connected back office sits at the other. Most projects live in the middle, and the value of the calculator is placing you in the right band before you ever sit down for a meeting.',
    },
    {
      type: 'p',
      text: 'The result will always be a **range**, not a single number, paired with a line that explains what drives it. An honest estimate also tells you what it depends on: that is what lets you see where you can act (by supplying your own content, say, or deferring an integration) to move the band.',
    },

    { type: 'h2', text: 'What data is the estimate based on?' },
    {
      type: 'p',
      lead: true,
      text: 'The estimate is based on **2026 market bands** for websites, not on a fixed price list. Cost and timing have no official statistical source to lean on: they vary by project type, provider, and region. That is why the calculator reasons in ranges and qualitatively, and for real numbers it points you to our reference guide on what a website costs.',
    },
    {
      type: 'p',
      text: 'In practice, there is market logic behind every answer. A brochure site starts from a modest base because the structure is well established; an online store or a portal demands more work on features, security, and management, so a higher band. The same levers apply to timing: less customization and ready-made content mean fast delivery, while integrations and revisions stretch the calendar. You will find the full references in the [guide to how much a website costs](/en/blog/how-much-does-a-website-cost) and the [guide to website timelines](/en/blog/how-long-to-build-a-website).',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'No figure on this page is passed off as a certified statistic. Cost and timing are working ranges, not data points: they exist to frame an order of magnitude, not to replace an analysis of your project.',
    },

    { type: 'h2', text: 'What makes cost and timing vary?' },
    {
      type: 'p',
      lead: true,
      text: 'Three levers move cost and timing more than any other: the **degree of customization**, the **content**, and the **integrations**. A site that starts from a template, with copy and photos already on hand and few features, is cheap and fast. A custom site, with content to produce from scratch and connections to outside services, costs more and takes more weeks. Knowing which lever you are leaning on tells you how to move the estimate.',
    },
    {
      type: 'p',
      text: '**Customization** is the first lever. A custom design, shaped around your brand identity, is worth more than an adapted template, but it weighs on cost and timing. The difference between the two paths, and when each one makes sense, is something we cover in the guide on [custom website vs. template](/en/blog/custom-website-vs-template).',
    },
    {
      type: 'p',
      text: '**Content** is the most underrated lever. If copy, images, and materials are ready, the work flows; if they have to be written and produced from scratch, the project stretches and the cost grows, because it is real work. **Integrations** are the third lever: a contact form weighs little, but booking, payments, a member area, multiple languages, or a connected CRM are features that have to be built and tested, and each one pushes the band higher.',
    },
    {
      type: 'list',
      items: [
        '**Type:** landing pages and brochure sites sit low; online stores and portals sit high.',
        '**Number of pages:** a few sections cost and take less; a catalog or a content-heavy site weighs more.',
        '**Customization:** adapted template (cheaper) versus custom design (more value, more time).',
        '**Content:** already on hand (fast) versus produced from scratch (more cost and weeks).',
        '**Integrations:** every outside feature (payments, booking, multiple languages, CRM) raises cost and timing.',
      ],
    },

    { type: 'h2', text: 'How should you read the result (and how much to trust it)?' },
    {
      type: 'p',
      lead: true,
      text: 'Read the result as a **band**, not a price. If it places you low, you have a lean, fast project; if it places you high, you are asking for customization or features that take work and time. The estimate is reliable for framing the order of magnitude, but it does not know the details of your case: real content, constraints, and goals will move it, and that is normal.',
    },
    {
      type: 'p',
      text: 'Treat the ends of the band as two concrete scenarios. The low end assumes you start from a proven base, with content ready and few integrations; the high end assumes custom design, content to produce, and more connected features. Figuring out which scenario looks like you already tells you where to act to stay in the band you have in mind, before you even ask for a quote.',
    },
    {
      type: 'p',
      text: 'An attorney who wants a restrained law firm site, with a few pages and a contact form, will stay low; a small services business that adds online booking, a member area, and a two-language version will move up a band, because every feature is more work to build and test. The estimate makes that link between your choices and the result visible, and that is its main use.',
    },

    { type: 'h2', text: 'How do you go from estimate to real quote?' },
    {
      type: 'p',
      lead: true,
      text: 'An estimate gives you the order of magnitude; a **quote** spells out, line by line, what you will receive and what you will pay, including every year. They are two different things: the estimate prepares you, the quote commits you. The move from one to the other happens through a conversation about your specific project, where the calculator\'s generic answers become concrete choices about design, content, and features.',
    },
    {
      type: 'p',
      text: 'When you receive the quote, read it like a shopping list, not a total: for each line, ask what it does, who handles it, and whether it is one-time or yearly. That is how you compare two offers on the same yardstick and avoid surprises after you sign. You will find the full glossary in the guide on [how to read a website quote](/en/blog/how-to-read-a-website-quote).',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Use the estimate to arrive prepared for the conversation, not to decide. The ballpark figure helps you see whether you are in the right band; the decision happens on the quote, where every line is in writing and you can ask what is in and what is out.',
    },
    {
      type: 'cta',
      text: 'Have a site in mind and want to go from a ballpark to a clear quote for your project? Tell us the type, pages, and integrations you are picturing: we will give you a realistic order of magnitude and what drives it, no obligation.',
      label: 'Let\'s talk',
      href: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ',
    },
  ],
  faq: [
    {
      q: 'Is the calculator estimate binding?',
      a: 'No. It is a ballpark estimate, not a quote or an order. It exists to give you an order of magnitude before you talk to anyone, so you arrive prepared. A commitment only happens with a signed quote, which spells out line by line what you receive and what you pay.',
    },
    {
      q: 'How accurate is an estimate made this way?',
      a: 'Accurate enough to frame the right band, not to lock in the final figure. It returns a range based on type, pages, and integrations. The exact number depends on your specific project, the content, and the design choices, and is defined only in the real quote.',
    },
    {
      q: 'Can I get a real quote instead of the estimate?',
      a: 'Yes. The estimate is the first step; the quote comes through a conversation about your project, where generic answers become concrete choices about design, content, and features. A short description of what you need and the site\'s goals is enough to get a clear, line-by-line offer.',
    },
    {
      q: 'Does this work for an online store too?',
      a: 'Yes. An online store is simply a type that moves the estimate up, because it adds a catalog, payments, order management, and security. The calculator treats it like any other case: the more features and customization you ask for, the higher the cost and timeline band it shows.',
    },
  ],
  internalLinks: [
    { slug: 'how-much-does-a-website-cost', anchor: 'How much a website costs' },
    { slug: 'how-to-read-a-website-quote', anchor: 'How to read a website quote' },
    { slug: 'how-long-to-build-a-website', anchor: 'How long to build a website' },
    { slug: 'custom-website-vs-template', anchor: 'Custom website or template' },
  ],
  sources: [],
};

export default article;
