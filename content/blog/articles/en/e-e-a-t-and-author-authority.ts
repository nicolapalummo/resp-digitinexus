import type { Article } from '../../types';

const article: Article = {
  id: 22,
  title: 'E-E-A-T and Author Authority: Who Writes Matters (to AI Too)',
  metaTitle: 'E-E-A-T and Author Authority: Who Writes Matters | DigitiNexus',
  slug: 'e-e-a-t-and-author-authority',
  locale: 'en',
  altLocaleSlug: 'e-e-a-t-author-authority',
  metaDescription:
    'Why the author matters to Google and to AI: how to build author authority with a real byline, credentials, Person schema, and a consistent identity.',
  capsule:
    'Google and AI engines weigh who writes. An article signed by a named author with a real bio, relevant credentials, and a profile connected through Person schema gets treated as expert advice and cited far more readily than anonymous content that could have come from anyone.',
  keywordPrimary: 'e-e-a-t',
  keywordsSecondary: ['author authority', 'author expertise', 'article byline SEO'],
  cluster: 'c3',
  intent: 'I·MOFU',
  authorId: 'filippo-gentili',
  publishDate: '2026-09-02',
  updatedDate: '2026-09-02',
  status: 'published',
  cover: {
    src: '/blog/covers/e-e-a-t-author-authority-en.webp',
    alt: 'E-E-A-T and author authority: an author byline with bio and credentials that makes an article trustworthy to Google and to AI',
  },
  body: [
    { type: 'h2', text: 'What is E-E-A-T?' },
    {
      type: 'p',
      lead: true,
      text: '**E-E-A-T** is the acronym Google uses to sum up four quality signals in a piece of content: **Experience** (firsthand involvement), **Expertise** (technical skill), **Authoritativeness** (recognition from others), and **Trustworthiness** (overall reliability). It is not a score in the code. It is the lens human raters and algorithms use to judge whether you can trust whoever wrote a page.',
    },
    {
      type: 'p',
      text: 'The four parts answer different questions. Experience asks "did the author actually live this?": a review from someone who really used a product beats one written from a desk. Expertise asks "do they have the skill to speak on it?". Authoritativeness looks at outside recognition, meaning who else cites or confirms them. Trustworthiness, the most important of the four, covers the honesty of the page and the site as a whole: verifiable sources, transparency, real contact details.',
    },
    {
      type: 'p',
      text: 'E-E-A-T appears in Google\'s Search Quality Rater Guidelines, the document Google gives to the external raters who assess result quality. So it is not a ranking factor you flip on with a single field. It is a set of signals Google\'s systems approximate. It carries the most weight on YMYL topics ("Your Money or Your Life"): health, finance, and law, where wrong information does concrete harm.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'The first "E" (Experience) is Google\'s most recent addition to the model, which used to be just E-A-T. It flags how much firsthand experience counts: people who speak because they have done the thing, not only because they read about it.',
    },

    { type: 'h2', text: 'Why does the author matter to AI?' },
    {
      type: 'p',
      lead: true,
      text: 'Because an AI generating an answer has to decide which sources to trust, and a recognizable byline is one of the signals it uses. Content attributed to a real person, with verifiable skills and connected profiles, gets treated as expert advice and is more likely to be reused than an anonymous text that could have come from anyone.',
    },
    {
      type: 'p',
      text: 'The mechanism is the same one that drives citability in generative engines. The reference academic study on the topic (Aggarwal et al., "GEO", KDD 2024) measured that structuring content with cited sources, quotations, and statistics can boost visibility in AI answers by up to 40%. An identifiable author works in the same direction: it is a trust signal that makes the source safer to cite for a model that has to avoid spreading shaky information.',
    },
    {
      type: 'p',
      text: 'There is a practical reason too. When you ask ChatGPT or Perplexity for an opinion on a sensitive topic, the model tends to favor sources it can attribute and that hold up under scrutiny. An article on a tax deadline signed by a CPA, with their license and firm shown, is more citable than an identical but anonymous text. The author\'s identity is part of the proof that the information is reliable.',
    },

    { type: 'h2', text: 'How do you build author authority?' },
    {
      type: 'p',
      lead: true,
      text: '**Author authority** is the credibility an author builds over time as a recognizable source on a subject. You build it by showing who you are: a real bio with a photo, the credentials that justify the expertise, and a track record of signed articles that stay consistent on the topic. It is the difference between "an article on a company\'s site" and "an article written by that person, whose work you can see."',
    },
    {
      type: 'p',
      text: 'The building blocks are concrete and verifiable. A dedicated author page with full name, role, a real photo (not stock), and a bio that explains why this person can speak on the topic. Relevant credentials: degrees, professional licenses, years of experience in the field. A byline block at the foot of every article that ties the piece to the author and their page. The more these elements are consistent and provable, the more the byline counts.',
    },
    {
      type: 'list',
      items: [
        '**Author page** with bio, role, and a real photo, reachable from the articles.',
        '**Relevant credentials** for the topic: degrees, professional license, industry experience.',
        '**Consistent track record** of signed articles in the same area: the specialization shows.',
        '**Byline block** in every article tying the content to the person and their page.',
        '**Real photo**, not stock imagery: the identity has to be recognizable.',
      ],
    },
    {
      type: 'p',
      text: 'For a professional services firm this step is decisive, because the firm sells trust before it sells a service. An attorney who signs their guides with a name, a photo, and a state bar admission communicates authority in a way no anonymous text can. The full picture for professionals, with the specific signals to manage, is in the [E-E-A-T for professional services guide](/blog/e-e-a-t-for-professional-services).',
    },

    { type: 'h2', text: 'How do you connect the identity with Person schema and sameAs?' },
    {
      type: 'p',
      lead: true,
      text: 'You connect it by declaring the author as an entity in the code, using the **Person** schema, and linking it to their public profiles through the **sameAs** field. This is the technical step that turns a plain name into a verifiable identity: you tell Google and AI engines explicitly that the article\'s byline matches a real person, confirmed elsewhere on the web.',
    },
    {
      type: 'p',
      text: 'Person is the schema.org type that describes a person: name, role, and the URL of the author page. The `sameAs` field is the list of profiles that confirm that identity: LinkedIn, a personal site, professional directories, any publications. By connecting the Article\'s `author` to the Person block, and that block to its `sameAs` profiles, you build a chain a machine can follow and verify: this article, this person, these profiles that confirm them.',
    },
    {
      type: 'p',
      text: 'The detail makes the difference for AI, which trusts connected entities more readily than loose names. For the CPA in the example, a Person block pointing to their LinkedIn profile and their state board license lets a model confirm that the author exists, does that work, and is who they say they are. You will find the exact fields to fill in the [schema markup for AI guide](/blog/schema-markup-for-ai).',
    },

    { type: 'h2', text: 'What is entity consistency and why does it matter?' },
    {
      type: 'p',
      lead: true,
      text: 'Entity consistency is the rule that the same author (or brand) should appear with the same details everywhere on the web: same name, same role, same photo, same credentials. When these signals match across your site, LinkedIn, directories, and professional profiles, engines and AI understand they are looking at a single real entity, and trust grows. When they diverge, it cracks.',
    },
    {
      type: 'p',
      text: 'The problem with inconsistency is that it weakens the proof of identity. If you sign your site as "Mark Rivera, Attorney" and show up on LinkedIn as "M. Rivera" with a different role, a machine cannot be sure you are the same person, and when in doubt it discounts the signal. The same holds for the brand: company name, logo, and contact details have to match across the site, the Google Business Profile, and social profiles, or the entity looks fragmented.',
    },
    {
      type: 'list',
      items: [
        'Same **full name** for the author across the site, LinkedIn, directories, and publications.',
        'Same **role and credentials** everywhere: no diverging versions of the same profile.',
        'Same **photo** and same core bio, so the identity stays recognizable at a glance.',
        'For the brand: identical **name, logo, and contact details** across site, Google Business Profile, and social.',
      ],
    },
    {
      type: 'p',
      text: 'Entity consistency is the thread that ties the rest together: the byline, the credentials, the Person schema, and the `sameAs` links only work if they tell the same story everywhere. It is also one of the signals that leads AI to recommend one source over another. For how it fits into the broader picture of generative visibility, see the [Generative Engine Optimization guide](/blog/generative-engine-optimization).',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Run a periodic check: search your own name and your brand name, and confirm that name, role, photo, and contact details match across every platform. A single listing with outdated data is enough to break entity consistency.',
    },
    {
      type: 'cta',
      text: 'Want a site that shows Google and AI exactly who you are, with author bylines, Person schema, and a consistent identity on every page? That is how we build them, in 1-4 weeks.',
      label: 'Let\'s talk',
      href: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ',
    },
  ],
  faq: [
    {
      q: 'Do I need a real author, or is the agency name enough?',
      a: 'You need a real author. A brand signs the site, but AI engines and Google\'s raters reward content attributed to a person with verifiable expertise. An agency name alone is an anonymous entity. A personal byline, connected to public profiles, communicates experience and direct accountability.',
    },
    {
      q: 'How do I connect the author\'s LinkedIn profile?',
      a: 'Through the sameAs field of the Person schema: you list the LinkedIn URL there alongside the author\'s other public profiles. That link is what tells engines and AI that the article byline and the LinkedIn profile are the same person, making the identity verifiable.',
    },
    {
      q: 'Is E-E-A-T a direct ranking factor?',
      a: 'No. E-E-A-T is not a score in the code or a field you switch on. It is a concept from Google\'s Search Quality Rater Guidelines. Google\'s systems approximate it with many signals. Tending to it improves perceived quality, but there is no single switch that turns it on.',
    },
    {
      q: 'Do the author\'s credentials have to match the topic?',
      a: 'Yes, and that is the decisive part. A degree or experience counts as a signal only when it is relevant to the subject: an attorney is authoritative on law, not on tax filing. Show credentials that fit the article\'s topic, not a generic list that dilutes the specific expertise.',
    },
    {
      q: 'Can a small business build author authority?',
      a: 'Yes, and often more easily than a large one. All it takes is a real person who signs with a name, photo, and role, a well-kept author page, relevant credentials, and consistently connected profiles. Authority builds over time through signed articles on the same topic, not through company size.',
    },
  ],
  internalLinks: [
    { slug: 'generative-engine-optimization', anchor: 'Generative Engine Optimization (GEO)' },
    { slug: 'schema-markup-for-ai', anchor: 'Schema markup for AI: Person and Article' },
    { slug: 'e-e-a-t-for-professional-services', anchor: 'E-E-A-T for professional services' },
  ],
  sources: [
    { label: 'Aggarwal et al., "GEO: Generative Engine Optimization", KDD 2024 (arXiv)', url: 'https://arxiv.org/abs/2311.09735' },
    { label: 'Google Search Central — Creating helpful, reliable, people-first content (E-E-A-T)', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
    { label: 'schema.org — Person', url: 'https://schema.org/Person' },
  ],
};

export default article;
