import type { Article } from '../../types';

const article: Article = {
  id: 6,
  title: 'How to Read a Website Quote (Line by Line)',
  metaTitle: 'How to Read a Website Quote | DigitiNexus',
  slug: 'how-to-read-a-website-quote',
  locale: 'en',
  altLocaleSlug: 'come-leggere-preventivo-sito-web',
  metaDescription:
    'A line-by-line guide to a website quote: what belongs in it, the vague items to clarify, and the right questions to ask before you sign.',
  capsule:
    'A solid website quote spells out every line: design, development, content, integrations, basic SEO, training, and recurring costs. Vague items like "optimization" or "extras" should always be clarified before you sign.',
  keywordPrimary: 'website quote',
  keywordsSecondary: ['what a website estimate includes', 'understanding a website quote'],
  cluster: 'c1',
  intent: 'C·MOFU',
  authorId: 'filippo-gentili',
  publishDate: '2026-08-12',
  updatedDate: '2026-08-12',
  status: 'published',
  cover: {
    src: '/blog/covers/come-leggere-preventivo-sito-web-en.webp',
    alt: 'How to read a website quote: a glossary of line items, the vague entries to clarify, and the questions to ask before you sign',
  },
  body: [
    { type: 'h2', text: 'What should a website quote contain?' },
    {
      type: 'p',
      lead: true,
      text: 'A serious quote reads line by line: it tells you what each row does, not just what it costs. The items that cannot be missing are **design**, **development**, **content**, **integrations**, **basic SEO**, **training**, and the **recurring costs** (domain, hosting, maintenance). If one of these is missing or buried in a generic "all included," that is the first signal to clarify before you sign.',
    },
    {
      type: 'p',
      text: 'The difference between a good quote and a risky one is not the final price, it is the **transparency of the line items**. A clear document lets you compare two offers on the same footing and see where your money actually goes. A vague one forces you to simply trust, and the surprises usually show up after you sign. Below is a glossary of the items to recognize in any quote, what they really mean, and what to ask when you read them.',
    },
    {
      type: 'table',
      caption: 'Glossary of website quote line items: what they mean and what to ask.',
      headers: ['Line item', 'What it means', 'What to ask'],
      rows: [
        ['Design / UI-UX', 'The visual and experience design: layout, colors, and page structure.', 'Is it custom or built from a template? How many screens are planned?'],
        ['Development', 'The actual technical build: the code or the assembly on the chosen platform.', 'On what technology or CMS? Will you be able to update the site yourself?'],
        ['Content', 'Copy, images, and page layout.', 'Does the developer write the copy or do I supply it? Are images included?'],
        ['Integrations', 'Connections to outside tools: contact form, booking, CRM, payments, newsletter.', 'Which integrations are included? Do I pay for third-party service licenses separately?'],
        ['Basic SEO', 'Initial technical setup: titles, meta tags, structure, speed, indexing.', 'What exactly does "basic SEO" cover? Is it one-time or ongoing?'],
        ['Training', 'The handoff to learn how to manage and update the site on your own.', 'How many hours? Is it included or a separate line? Is there a written guide?'],
        ['Recurring costs', 'The yearly expenses: domain, hosting, any maintenance and licenses.', 'What do I pay each year after launch? Are these clearly stated in the quote?'],
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Read a quote like a grocery list, not a total. For each row ask: what does it do, who performs it, is it one-time or yearly. If an item cannot answer those three questions, it is an item to clarify before you sign.',
    },

    { type: 'h2', text: 'Which vague items should you always clarify?' },
    {
      type: 'p',
      lead: true,
      text: 'Three phrases show up again and again in quotes and sound reassuring, but they often mean nothing until you define them: **"SEO"**, **"responsive"**, and **"unlimited revisions."** They are umbrella words that can cover very little or a great deal. Asking what they actually contain is not distrust, it is how you compare two offers on the same yardstick.',
    },
    {
      type: 'p',
      text: '**"SEO"** is the most ambiguous. It can mean basic technical optimization (titles, meta tags, structure, speed, sitemap), or an ongoing ranking effort with content and links over time: two very different things in effort and value. Always ask whether it is one-time or recurring, and what it covers row by row. **"Responsive"** should be the standard, not a paid extra: a site that adapts to phones and tablets is the bare minimum in 2026, and it should be taken for granted, not sold as an option.',
    },
    {
      type: 'p',
      text: '**"Unlimited revisions"** is the riskiest phrase, because a scope that does not exist always gets paid for somewhere. In practice it turns into timelines that stretch out or a price padded up front to cover the unknown. Better to set a clear number of revision rounds (say two or three) with rules on what counts as a revision versus a new request that falls outside the original quote.',
    },
    {
      type: 'list',
      items: [
        '**"SEO"** → ask: is it one-time technical optimization or ongoing work? What does it cover in detail?',
        '**"Responsive"** → it should be included by default: if it is a separate line, ask why.',
        '**"Unlimited revisions"** → better a defined number of rounds, with rules on what counts as a revision.',
        '**"Optimization" / "extras" / "miscellaneous"** → catch-all items with no detail: ask to break them out row by row.',
        '**"Professional site" / "turnkey"** → these say nothing about what is included: only the list of line items counts.',
      ],
    },

    { type: 'h2', text: 'What is included and what is not in a quote?' },
    {
      type: 'p',
      lead: true,
      text: 'The decisive question is not what the site costs, it is what gets left out. Three items often end up "separate" without it being obvious: **content** (copy and images), **hosting**, and **maintenance**. If they are not written into the quote, they are almost never included, and they become a cost you discover later. Always ask for an explicit list of what is covered and what is not.',
    },
    {
      type: 'p',
      text: 'Content is where half the misunderstandings happen. Many quotes assume you supply the copy and photos: if you are not ready to write them, the project stalls or you pay a copywriter separately. On hosting and maintenance, the recurring-cost rule applies: a site has a yearly expense to stay online (domain, hosting) and a possible one for updates and security. An honest quote states both, even when they fall on you.',
    },
    {
      type: 'p',
      text: 'This is exactly where the most frequent surprises hide. We collected them in the guide to the [hidden costs of a website](/en/blog/hidden-website-costs): read it before you sign, so you know which items to insist on in writing. To gauge what is reasonable to spend and why two offers can diverge so much, start from the [guide to how much a website costs](/en/blog/how-much-does-a-website-cost), the reference point from which to read any quote.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Be wary of any quote without a single recurring-cost line. A live site always has at least a domain and hosting to renew each year: if the document does not mention them, they are either hidden or you will be billed for them later. Insist that the "what I pay every year" be in writing.',
    },

    { type: 'h2', text: 'Who owns the site, the domain, and the code?' },
    {
      type: 'p',
      lead: true,
      text: 'You should own the **domain**, the **accounts** (hosting, analytics, any services), and the **content**, and be able to take the **site** with you if you change providers. This is the most overlooked part of a quote and the most important: a site you cannot move is not really yours. Verify ownership and portability before you sign, not after.',
    },
    {
      type: 'p',
      text: 'The real risk is getting locked in. If the domain is registered under the provider\'s name, or the site lives on a closed proprietary platform you do not have access to, switching partners becomes hard or expensive. A solo professional who has built a reputation around their own domain cannot afford to lose it: they need to be the registered owner, with the credentials in hand. The same goes for a small business that will eventually want to grow the site with another team.',
    },
    {
      type: 'p',
      text: 'Portability matters no matter who you choose, freelancer or agency. We cover it in the guide on [an agency vs. a freelancer for your website](/en/blog/web-agency-vs-freelancer): the real difference is not the label, it is how many guarantees and how much ownership the contract leaves you.',
    },
    {
      type: 'list',
      items: [
        '**Domain**: registered in your name, with the registrar credentials in your hands.',
        '**Accounts and access**: hosting, email, analytics, and services owned by you or accessible to you.',
        '**Content**: copy, images, and logo stay your property, reusable elsewhere.',
        '**Code and portability**: you can move the site to another host or team without being held hostage by a closed platform.',
      ],
    },

    { type: 'h2', text: 'What questions should you ask before signing a quote?' },
    {
      type: 'p',
      lead: true,
      text: 'Before you sign, ask seven questions that turn a vague quote into a clear document. They surface what is included, who does what, in how much time, and who owns the result. If the provider answers precisely, that is a good sign; if they dance around the line items, you have learned a lot before spending a dime.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'What does **each line item** cover in detail, and what is explicitly **left out**?',
        'Do I supply the **content** (copy and images) or do you produce it? Is it in the price?',
        'What does **"SEO"** mean here: one-time technical optimization or ongoing work?',
        'What are the **recurring yearly costs** (domain, hosting, maintenance) and what do I pay after launch?',
        'How many **revision rounds** are included, and what counts as a revision versus a new request?',
        'In **how much time** do you deliver, and what does hitting that date depend on?',
        'Who owns the **domain, code, and content**, and can I take them with me if I switch providers?',
      ],
    },
    {
      type: 'p',
      text: 'The sharper and more written-down the answers, the more reliable the quote. A CPA weighing two offers for the firm\'s site should not pick the cheapest, but the one that states precisely what they will receive and what they will pay each year.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Print these seven questions and bring them to the first meeting. A serious provider welcomes them, because a clear quote benefits them too: it cuts misunderstandings and rework. Anyone who dodges or downplays them is telling you something important about the relationship you will have after you sign.',
    },
    {
      type: 'cta',
      text: 'Have a quote in hand and want to know whether the line items add up? Send it over and we will read it together, line by line, no strings attached: we will tell you what to ask before you sign.',
      label: 'Let\'s talk',
      href: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ',
    },
  ],
  faq: [
    {
      q: 'Why are two quotes for the same site so different?',
      a: 'Because they cover different things, even when they look alike. One may include content, integrations, and training; the other only the visual assembly. The final price tells you little: compare the line items one by one. The real difference is always in what is included and what is left out.',
    },
    {
      q: 'Do "unlimited revisions" really exist?',
      a: 'In practice, no: a scope that does not exist still gets paid for, in timelines that stretch out or a price padded up front. Better a clear number of revision rounds, with rules on what counts as a revision versus a new request that falls outside the original quote.',
    },
    {
      q: 'Is the domain included in the website quote?',
      a: 'Not always, and it needs checking. The domain has a separate yearly cost and should be registered in your name, not the provider\'s. If the quote does not mention it, ask whether it is included, who the registered owner is, and what you will pay to renew it each year.',
    },
    {
      q: 'Can I negotiate a website quote?',
      a: 'Yes, but negotiate on scope, not just price. You can drop items you do not need now, supply the content yourself to lower the cost, or push integrations to a later phase. Cutting the price without touching what is included usually means getting less without noticing.',
    },
  ],
  internalLinks: [
    { slug: 'how-much-does-a-website-cost', anchor: 'How much a website costs' },
    { slug: 'hidden-website-costs', anchor: 'Hidden website costs' },
    { slug: 'web-agency-vs-freelancer', anchor: 'Agency or freelancer?' },
  ],
  sources: [],
};

export default article;
