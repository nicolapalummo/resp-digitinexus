import type { Article } from '../../types';

const article: Article = {
  id: 2,
  title: 'How long does it take to build a website? Real timelines',
  metaTitle: 'How Long Does It Take to Build a Website? | DigitiNexus',
  slug: 'how-long-to-build-a-website',
  locale: 'en',
  altLocaleSlug: 'quanto-tempo-fare-sito-web',
  metaDescription:
    'How long it really takes to build a website: realistic timelines for landing pages, brochure sites, and online stores, plus what makes a project run late.',
  capsule:
    'A professional website usually takes 2 to 6 weeks. A landing page can go live in a few days, a brochure site in 2 to 4 weeks, and an online store in 4 to 8 weeks; a large portal can run much longer. What moves the calendar is rarely the code, but how fast decisions get made and content gets delivered.',
  keywordPrimary: 'how long does it take to build a website',
  keywordsSecondary: ['website build timeline', 'how long to make a website'],
  cluster: 'c1',
  intent: 'I/C·MOFU',
  authorId: 'nicola-palummo',
  publishDate: '2026-06-08',
  updatedDate: '2026-06-08',
  status: 'published',
  cover: {
    src: '/blog/covers/quanto-tempo-fare-sito-web-en.webp',
    alt: 'How long it takes to build a website: realistic timelines for landing pages, brochure sites, and online stores',
  },
  body: [
    { type: 'h2', text: 'How long does it really take to build a website?' },
    {
      type: 'p',
      lead: true,
      text: 'On average it takes **2 to 6 weeks** for a professional website. A landing page comes together in a few days; a brochure site in 2–4 weeks; an online store in 4–8 weeks; a portal or complex project can run anywhere from 8 to 24 weeks. The timeline grows with the number of pages, features, and decisions involved.',
    },
    {
      type: 'table',
      caption: 'Indicative timelines by project type.',
      headers: ['Project type', 'Typical timeline'],
      rows: [
        ['Landing page', 'A few days to 1 week'],
        ['Professional brochure site', '2–4 weeks'],
        ['E-commerce', '4–8 weeks'],
        ['Portal or complex project', '8–24 weeks'],
      ],
    },
    {
      type: 'p',
      text: 'The difference is not just about how skilled the builder is. It comes down to how many decisions and how much content the project needs. The bigger the project, the more coordination it takes: every extra page is a structure to plan, copy to write, and a design to approve. A five-page brochure site is not half the work of a ten-page one, because a lot of the hours go into the early strategy and the final testing, which stay fixed no matter how many pages there are.',
    },
    {
      type: 'p',
      text: 'The reverse is true too: a project with content already in hand, a defined brand, and a single point of contact can land at the low end of the range. So when you read a timeline, do not look only at the number, look at what pushes it up or down. If you want to see how these timelines translate into budget, you will find it all in [how much a website costs](/en/blog/how-much-does-a-website-cost).',
    },

    { type: 'h2', text: 'What are the phases of a web project, and how long does each take?' },
    {
      type: 'p',
      lead: true,
      text: 'A website moves through five phases: brief and strategy, design, development, content, and finally testing and launch. Each has its own timing and they often overlap. On a brochure site, the whole thing usually spreads across 2–4 weeks.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Brief and strategy (2–4 days):** you define goals, structure, and the content you will need. This is the phase that prevents rework later.',
        '**Design (3–6 days):** wireframes and visual design for the key pages, through to approval.',
        '**Development (5–10 days):** turning the design into a real site that is responsive and fast.',
        '**Content (in parallel):** copy, photos, and video. This is often where a project slows down.',
        '**Testing and launch (2–3 days):** checks across devices, speed, baseline SEO, then publishing.',
      ],
    },
    {
      type: 'p',
      text: 'The days above are orders of magnitude, not promises: they show you where the time goes. Development looks like the heaviest phase, but what really moves the real-world calendar is the brief, which eliminates rework when it is done well, and the content, which only moves in parallel if the client delivers it on time. To see how the phases fit together in practice, read [how we build a site in 1–4 weeks](/en/blog/website-in-1-to-4-weeks).',
    },

    { type: 'h2', text: 'What slows a website down?' },
    {
      type: 'p',
      lead: true,
      text: 'The number-one cause of delays is not technical: it is content arriving late from the client. Right behind it come endless revisions and the absence of a single decision-maker. In all three cases the problem is not the code, it is the approval flow.',
    },
    {
      type: 'p',
      text: 'Copy, photos, and materials are the fuel of the project: without them, development stalls even when the site is nearly done. A typical example: the structure is live, the design is approved, but the product pages stay empty because the client has not sent descriptions and photos yet. The site is technically ready and still cannot go live, and every day of waiting is a day of delay that has nothing to do with the builder.',
    },
    {
      type: 'list',
      items: [
        '**Late content:** the most common cause. Without final copy and images, the pages stay skeletons.',
        '**Endless revisions:** design changes after approval, one at a time, stretch out every cycle.',
        '**No single decision-maker:** when every choice passes through several people, each round of feedback takes days instead of hours.',
      ],
    },
    {
      type: 'p',
      text: 'Deciding up front who approves, and within how many days, usually removes most of the delays. You do not need to work faster, you need to cut the waiting between one phase and the next.',
    },

    { type: 'h2', text: 'How do you shorten the timeline without losing quality?' },
    {
      type: 'p',
      lead: true,
      text: 'You shorten the timeline with a defined process and content ready at the start, not by cutting corners on the design. Speed comes from method: stages with dates, a single point of contact, and materials delivered before development begins.',
    },
    {
      type: 'p',
      text: 'At DigitiNexus we usually deliver a polished brochure site in three weeks, once the content is ready and feedback is quick. The process runs week by week, so you always know where we are and development never stalls waiting on a piece of copy or an approval.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Week 1, kickoff and design:** brief and strategy, page architecture, wireframes and design for the key pages, gathering and organizing content.',
        '**Week 2, development:** building the pages, a mobile-first and responsive approach, integrations such as forms, analytics, and an optional CRM, micro-animations.',
        '**Week 3, content, testing, and launch:** final content, performance optimization (Core Web Vitals), baseline SEO and schema, testing across devices, review, and go-live.',
      ],
    },
    {
      type: 'p',
      text: 'The three weeks are for a brochure site. A landing page, with content in hand, comes together in a few working days, usually 3–5. An online store or a larger portal takes much longer, from 6 to 12 weeks and beyond, as products, payments, integrations, and management pile up. And the calendar only stays realistic when we keep the three things that cause slippage under control: content delivered late, excessive revisions, and a scope that shifts mid-project. We walk through how it works in [a website in 1–4 weeks](/en/blog/website-in-1-to-4-weeks).',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'The simplest way to shorten the timeline is free: prepare your copy, photos, and logo before you sign, and name one person who approves. On their own, these two moves remove the first and third most common causes of delay.',
    },

    { type: 'h2', text: 'How long for a landing page, brochure site, or online store?' },
    {
      type: 'p',
      lead: true,
      text: 'A landing page goes live in a few days, a brochure site in 2–4 weeks, and an online store in 4–8 weeks depending on the catalog and integrations. The distance between those three timelines tells you how many decisions and features separate one project from the next.',
    },
    {
      type: 'list',
      items: [
        '**Landing page:** one page, one goal. Fast to build because there are few decisions and the content is concentrated.',
        '**Brochure site:** more pages and more content, but a linear structure. Across 2–4 weeks the deciding factor is how quickly the copy arrives.',
        '**E-commerce:** products, payments, shipping, and management. More features and more integrations push toward 4–8 weeks, and with large catalogs even beyond.',
      ],
    },
    {
      type: 'p',
      text: 'For a brochure site, budget matters as much as time. Timelines and costs have to be read together, because a more involved project takes both more weeks and more investment. You will find the full picture in [how much a website costs](/en/blog/how-much-does-a-website-cost).',
    },

    { type: 'h2', text: 'Do timelines differ between an agency and a freelancer?' },
    {
      type: 'p',
      lead: true,
      text: 'They can, but not because of the label. A freelancer has fewer internal handoffs and responds fast, but handles one project at a time; an agency with a dedicated team can work several phases in parallel. What decides the real timeline is the method, not the size of the shop.',
    },
    {
      type: 'p',
      text: 'A freelancer is often quicker on the small decisions, because you talk directly to the person building the site. An agency tends to win on larger projects, where design, development, and content can move together instead of in line. In both cases, what really shifts the calendar is whether there is a clear process and whether the content arrives on time, two factors that have nothing to do with the legal form of who does the work. When you compare quotes, look at how the workflow is described: we explain it in [how to read a website quote](/en/blog/how-to-read-a-website-quote).',
    },
    {
      type: 'cta',
      text: 'Want to know how long it would take to deliver your site? We give you a realistic estimate with specific dates.',
      label: 'Book a call',
      href: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ',
    },
  ],
  faq: [
    {
      q: 'Can you build a website in a week?',
      a: 'For a landing page or a very lean site, yes, if the content is already in hand and decisions move fast. A complete brochure site usually takes 2–4 weeks: one week is realistic only for simple, well-prepared projects.',
    },
    {
      q: 'Why is my project running late?',
      a: 'In most cases because content is missing or approvals take too many handoffs. Development may be ready, but without final copy and photos the site cannot go live. A single decision-maker and content prepared in advance cut delays sharply.',
    },
    {
      q: 'How much does content affect the timeline?',
      a: 'A lot: content is the number-one cause of delays. If copy, photos, and materials arrive late or keep changing, every later phase slips. Preparing your content ahead of time is the simplest way to shorten the timeline.',
    },
    {
      q: 'Do timelines differ between an agency and a freelancer?',
      a: 'They can. A freelancer has fewer internal handoffs but handles one project at a time; an agency with a dedicated team can move several phases in parallel. The method and availability matter more than the agency-or-freelancer label.',
    },
  ],
  internalLinks: [
    { slug: 'how-much-does-a-website-cost', anchor: 'How much a website costs' },
    { slug: 'website-in-1-to-4-weeks', anchor: 'A website in 1–4 weeks' },
    { slug: 'how-to-read-a-website-quote', anchor: 'How to read a website quote' },
  ],
  sources: [],
};

export default article;
