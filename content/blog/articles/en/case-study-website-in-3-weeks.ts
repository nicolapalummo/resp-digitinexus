import type { Article } from '../../types';

const article: Article = {
  id: 10,
  title: 'Case study: a website delivered in 3 weeks',
  metaTitle: 'Case Study: A Website Delivered in 3 Weeks | DigitiNexus',
  slug: 'case-study-website-in-3-weeks',
  locale: 'en',
  altLocaleSlug: 'case-study-sito-3-settimane',
  metaDescription:
    'A behind-the-scenes look at how we design and launch a quality website in three weeks, phase by phase, with the method that makes the speed possible.',
  capsule:
    'In three weeks we took a full website live: week one for brief and design, week two for development, week three for content, testing, and launch. The speed came from the method, not from cutting corners on quality.',
  keywordPrimary: 'website case study',
  keywordsSecondary: ['website delivered in 3 weeks', 'web project example'],
  cluster: 'c1',
  intent: 'C·BOFU',
  authorId: 'nicola-palummo',
  publishDate: '2026-09-30',
  updatedDate: '2026-09-30',
  status: 'draft',
  cover: {
    src: '/blog/covers/case-study-sito-3-settimane-en.webp',
    alt: 'Case study of a website delivered in three weeks: the process phase by phase',
  },
  body: [
    { type: 'h2', text: 'What was the starting point?' },
    {
      type: 'p',
      lead: true,
      text: 'The client had a dated website that no longer reflected the real value of the business: slow, unclear about its services, and nearly invisible on mobile. They needed a credible online presence fast, without settling for a rushed, half-baked result.',
    },
    {
      type: 'p',
      text: 'This is the most common scenario among the businesses that reach out to us. They are not starting from zero, they are starting from something that works against them. An old website signals neglect before a visitor reads a single line, and every extra week with that kind of digital business card is a quiet cost in credibility and missed leads. The client\'s ask was not "build us a website", it was "fix this problem, and fast".',
    },
    {
      type: 'callout',
      variant: 'placeholder',
      text: 'PLACEHOLDER (real data to confirm): the client name or industry, and the precise starting state (existing dated site, first website, MVP). Add only verifiable details provided by DigitiNexus.',
    },

    { type: 'h2', text: 'What were the goals and constraints?' },
    {
      type: 'p',
      lead: true,
      text: 'The goal was a clear, fast, polished website that conveyed authority and made it easy to get in touch. The main constraint was time: a tight window, tied to a real business need, by which the site had to be live and fully working.',
    },
    {
      type: 'p',
      text: 'A tight deadline is not a problem in itself. It becomes one when there is no method to carry it. The difference between a deadline met and one missed is almost always decided before a single line of code is written, in how you organize phases, content, and approvals. That is why the first thing we did was not design. It was defining precisely what to include and what to leave out.',
    },
    {
      type: 'list',
      items: [
        '**Clarity:** services explained plainly, understandable in a few seconds.',
        '**Speed:** a site that loads fast and works well on a phone.',
        '**Authority:** a design that signals professionalism without slowing the page down.',
        '**Easy contact:** direct paths toward reaching out.',
      ],
    },
    {
      type: 'callout',
      variant: 'placeholder',
      text: 'PLACEHOLDER (real data to confirm): the exact length of the agreed window, any budget, and the numeric goals set with the client. No invented figures: use only the real data from the project.',
    },

    { type: 'h2', text: 'How did the process go week by week?' },
    {
      type: 'p',
      lead: true,
      text: 'The work ran across three weeks: the first for brief and design, the second for development, the third for content, testing, and launch. The phases were not rigidly single-file. Wherever possible they overlapped, because waiting for one to close before opening the next is the first waste to eliminate.',
    },
    {
      type: 'table',
      caption: 'The project planned across three weeks.',
      headers: ['Week', 'What happened'],
      rows: [
        ['Week 1', 'Brief, scope definition, page structure, and design of the key screens'],
        ['Week 2', 'Site development, responsive setup, first integrations, and a shared review'],
        ['Week 3', 'Content entry, refinements, device testing, baseline SEO, and launch'],
      ],
    },
    {
      type: 'p',
      text: 'In week one we agreed on the scope and designed the most important pages, so we could approve the visual direction before building anything. In week two, while we built the already-approved pages, the client prepared the missing copy. That overlap between our development and their content gathering is the reason three weeks of real work did not turn into three weeks of waiting in line.',
    },
    {
      type: 'p',
      text: 'In week three we dropped in the final content and ran the last tests in parallel, instead of pushing them to the very end. This is the same playbook we describe in [how we build a site in 1–4 weeks](/en/blog/website-in-1-to-4-weeks): the method does not change with the client, what changes is how much work you fit inside it.',
    },

    { type: 'h2', text: 'What made the speed possible?' },
    {
      type: 'p',
      lead: true,
      text: 'The speed came from four factors working together: a clear scope set on day one, content gathered on time, a single decision-maker on the client side, and a dedicated team on ours. Remove even one and three weeks would not have been realistic.',
    },
    {
      type: 'list',
      items: [
        '**Clear scope:** we defined from the start which pages and features to include, avoiding the requests that pile up mid-project and push the deadline back.',
        '**Content ready on time:** copy and images gathered during development, not in fits and starts. Late content is the number-one cause of project delays.',
        '**Single decision-maker:** one person approved, so requests never contradicted each other and no decision sat in limbo.',
        '**Dedicated team:** the people on the project were not juggling ten others, which kept the work focused and continuous.',
      ],
    },
    {
      type: 'p',
      text: 'The lever that mattered most was the collaboration on content. When copy and photos arrive in the right windows, development never stops to wait. It is the same logic we dig into in [how long it takes to build a website](/en/blog/how-long-to-build-a-website): the bottleneck is almost never the person building the site, it is the flow of information and decisions that has to reach them in time.',
    },

    { type: 'h2', text: 'Which design and technical choices made the difference?' },
    {
      type: 'p',
      lead: true,
      text: 'We worked on three fronts: a structure that leads straight to the key message, a clean design consistent with the client\'s identity, and a technical foundation tuned for speed and mobile. These are the choices that separate a site made fast from a site made well in a short time.',
    },
    {
      type: 'p',
      text: 'On design, we leaned on clarity over decoration: an orderly visual hierarchy, readable copy, obvious paths toward contact. A [premium design](/en/blog/premium-website-design) is not "prettier", it is consistent, readable, and goal-oriented: it is what turns a visitor into a lead. On the technical side, we treated speed and mobile rendering as requirements, not as finishing touches to defer. A site that is slow or hard to use on a phone loses leads regardless of how good it looks.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Our method speeds up the dead time, not the finishing work. Design, performance, and baseline SEO stay fully handled before launch. That is what separates a fast delivery from a rushed one.',
    },

    { type: 'h2', text: 'What results did the new website bring?' },
    {
      type: 'p',
      lead: true,
      text: 'The site went live by the agreed deadline, with consistent rendering on desktop and mobile and a solid technical base. Measurable business results (inquiries, leads, load speed before and after) should be reported only once confirmed by the real data from the project.',
    },
    {
      type: 'callout',
      variant: 'placeholder',
      text: 'PLACEHOLDER (real data to confirm): before/after project metrics (load time, leads or inquiries over the period, traffic, conversions). Add only verifiable numbers provided by DigitiNexus. No estimated or invented percentages or figures.',
    },
    {
      type: 'callout',
      variant: 'placeholder',
      text: 'PLACEHOLDER (real data to confirm): a direct client quote about the experience and the result. To be added as a quote block with the name or role, only if authorized and real.',
    },
    {
      type: 'p',
      text: 'Until those numbers are confirmed, we stick to what is verifiable: the deadline was met, and the site shipped polished on design, performance, and baseline SEO. At DigitiNexus we do not publish numbers we cannot prove, because a result that cannot be tied to a real case is worth less than no number at all.',
    },

    { type: 'h2', text: 'What can you replicate from this project?' },
    {
      type: 'p',
      lead: true,
      text: 'Three lessons hold for any website with a tight deadline: lock the scope on day one, prepare the content before development, and put approvals in one person\'s hands. These are the conditions that turn a fast delivery from a risky promise into a predictable result.',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Decide what to include up front:** a clear scope keeps out the requests that pile up mid-project and push the date back.',
        '**Gather content first:** copy and photos ready during development are the lever that moves the delivery date the most.',
        '**Name one decision-maker:** a single person approving keeps reviews focused and consistent.',
      ],
    },
    {
      type: 'p',
      text: 'If your starting point is different, the timeline changes, not the method. To size up a realistic budget and duration first, read [how much a website costs](/en/blog/how-much-does-a-website-cost) and [how long it takes to build a website](/en/blog/how-long-to-build-a-website): time and investment are best judged together.',
    },
    {
      type: 'cta',
      text: 'Have a deadline and want a premium website in a few weeks? We will tell you right away whether it is doable and with which dates.',
      label: 'Let\'s talk',
      href: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ',
    },
  ],
  faq: [
    {
      q: 'Can any website be built in 3 weeks?',
      a: 'No, it depends on the project. A landing page or a well-defined brochure site fits, as long as content and approvals arrive on time. A large online store or a complex portal needs longer, because the volume of work and testing grows. Forcing those into three weeks would make them fragile, not fast.',
    },
    {
      q: 'What did the client need to do to stay on schedule?',
      a: 'Three things: content ready during development, fast feedback gathered in precise windows, and a single decision-maker. Late content is the number-one cause of project delays, so preparing it early is the move that matters most. Without these conditions, no method holds a tight deadline.',
    },
    {
      q: 'Did quality suffer?',
      a: 'No, because the speed acted on dead time, not on the finishing work. Premium design, performance, and baseline SEO were handled before launch, not deferred. A fast delivery only hurts quality when it skips steps. Here every step happened, focused inside a defined process with no wasted waiting.',
    },
    {
      q: 'How much did the project cost?',
      a: 'Cost depends on pages, content, and design customization, so there is no single price that fits every case. To orient yourself on real ranges and what drives a quote, read our guide on how much a website costs. Timeline and budget are always best weighed together, not separately.',
    },
  ],
  internalLinks: [
    { slug: 'website-in-1-to-4-weeks', anchor: 'Website in 1–4 weeks: how it is possible' },
    { slug: 'how-long-to-build-a-website', anchor: 'How long it takes to build a website' },
    { slug: 'how-much-does-a-website-cost', anchor: 'How much a website costs in 2026' },
    { slug: 'premium-website-design', anchor: 'What a premium design is' },
  ],
  sources: [],
  hasBlockingPlaceholder: true,
};

export default article;
