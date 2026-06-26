import type { Article } from '../../types';

const article: Article = {
  id: 18,
  title: 'Website accessibility: what it is and why it pays off (ADA and WCAG)',
  metaTitle: 'Website Accessibility: ADA & WCAG Explained | DigitiNexus',
  slug: 'website-accessibility-ada',
  locale: 'en',
  altLocaleSlug: 'accessibilita-sito-web',
  metaDescription:
    'What website accessibility is, why it improves experience and SEO, and how the ADA and WCAG fit in. A practical, plain-English introduction.',
  capsule:
    'Website accessibility means building a site that anyone can use, including people with disabilities. It widens your audience, strengthens SEO because accessible markup is exactly what search engines read best, and builds trust. For some organizations it is also a legal expectation under the ADA, measured against the WCAG standard, so treat it as a quality baseline, not an afterthought.',
  keywordPrimary: 'website accessibility',
  keywordsSecondary: ['ADA compliance', 'WCAG', 'accessible website'],
  cluster: 'c2',
  isPillar: false,
  intent: 'I·TOFU',
  authorId: 'nicola-palummo',
  publishDate: '2026-10-23',
  updatedDate: '2026-10-23',
  status: 'published',
  cover: {
    src: '/blog/covers/accessibilita-sito-web-en.webp',
    alt: 'Website accessibility: what it is, why it pays off, and practical WCAG principles like contrast, alt text, and keyboard navigation',
  },
  body: [
    { type: 'h2', text: 'What is website accessibility?' },
    {
      type: 'p',
      lead: true,
      text: 'Website accessibility is the practice of building a site that anyone can use, including people with visual, hearing, motor, or cognitive disabilities. It means pages that work for someone navigating with a screen reader (software that reads the page aloud), with the keyboard alone, with a magnified screen, or with the sound off. An accessible site does not demand special ability to be used. It adapts to the person, not the other way around.',
    },
    {
      type: 'p',
      text: 'The point to settle right away is that accessibility is not a concern for a small minority. It covers people with a permanent disability, but also anyone with a temporary limitation (an arm in a cast, an eye patch) or a situational one: reading your phone in bright sun, watching a video without being able to turn on the audio, browsing one-handed on a slow connection on the bus. In every one of those cases the same technical choices decide whether a site works or shuts people out.',
    },
    {
      type: 'p',
      text: 'Far more people benefit from accessibility than you might guess: someone with low vision who enlarges the text, someone using a screen reader, someone who cannot use a mouse and moves through the page with the Tab key, someone with a cognitive difficulty who needs plain language, plus anyone browsing in less than ideal conditions. Building for accessibility means designing for the real person, not for the ideal case of someone on a perfect computer in a quiet room.',
    },

    { type: 'h2', text: 'Why does accessibility pay off beyond ethics?' },
    {
      type: 'p',
      lead: true,
      text: 'Making a site accessible pays off for three concrete reasons, on top of the ethical one: you widen the audience that can use it and become customers, you improve SEO because good accessibility practices overlap with the signals search engines reward, and you strengthen your brand reputation. It is not a cost for the few. It is quality that benefits every visitor.',
    },
    {
      type: 'p',
      text: 'The first payoff is audience. A site that locks out people who use a screen reader or cannot use a mouse loses those contacts before they even read your offer. People with some form of disability are a substantial share of the US population, and to them you add anyone browsing in difficult conditions. Most sites are not there yet either: according to WebAIM, 95.9% of home pages had detected WCAG failures, averaging 56.1 errors per page. Every avoidable barrier is a person who leaves for a more polished competitor without ever telling you why.',
    },
    {
      type: 'p',
      text: 'The second payoff is SEO, because many accessibility practices line up with the signals Google evaluates. A clean heading structure, descriptive alternative text on images, consistent navigation, and a fast page all help the screen reader and, at the same time, help the engine understand and index the content. It is the same principle by which a [website that converts](/en/blog/website-that-converts) and an accessible one end up resembling each other: both put clarity first. The third payoff is reputation: a site that works for everyone signals care, and visible care transfers to how people judge your work.',
    },

    { type: 'h2', text: 'Is website accessibility required by law?' },
    {
      type: 'p',
      lead: true,
      text: 'Sometimes yes. In the US, web accessibility intersects with the Americans with Disabilities Act (ADA), the federal civil-rights law, and is measured against WCAG, the Web Content Accessibility Guidelines published by the W3C. In 2024 the Department of Justice issued a rule under ADA Title II setting WCAG 2.1 Level AA as the technical standard for state and local government websites (ADA.gov, 2024). For private businesses, which fall under Title III, the picture is less settled, which makes a specific check essential.',
    },
    {
      type: 'p',
      text: 'The technical reference itself keeps moving. WCAG 2.2 became a W3C Recommendation on December 12, 2024 (W3C), the current version of the international guidelines that turn "usable by everyone" into testable criteria, organized into conformance levels A, AA, and AAA. The 2024 Title II rule points to WCAG 2.1 Level AA specifically, and it applies to government entities, not to private companies. So the right question is not "is accessibility required?" but "is it required for my organization, and against which version?".',
    },
    {
      type: 'p',
      text: 'For private businesses the answer is genuinely fact-dependent. Courts have widely treated business websites as covered by ADA Title III, and plaintiffs routinely cite WCAG as the benchmark even though the statute names no specific technical standard for private sites. Litigation over digital accessibility has become common: according to UsableNet, more than 4,000 ADA digital-accessibility lawsuits were filed in 2024. Whether and how Title III applies to your particular site, and what conformance target makes sense, depends on your facts.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Whether your business website is legally required to meet a specific accessibility standard under ADA Title III depends on your particular situation and on how courts in your jurisdiction read the law, which is still evolving. Before you draw conclusions about your site, consult qualified counsel to assess your obligations. This guide is general information, not legal advice, and does not substitute for a compliance review of your specific case.',
    },
    {
      type: 'p',
      text: 'One observation holds regardless of any obligation: even where the law imposes nothing on you today, building an accessible site protects you against future problems (standards and scope tend to broaden over time) and gives you the audience, SEO, and reputation gains above from day one. Treating accessibility as a quality criterion, rather than a chore to defer, is the choice that ages best.',
    },

    { type: 'h2', text: 'What are the practical WCAG principles?' },
    {
      type: 'p',
      lead: true,
      text: 'The technical reference for web accessibility is WCAG, the international guidelines that translate "usable by everyone" into concrete requirements. In practice they come down to a handful of checks you can verify even without being a developer: adequate text contrast, alternative text on images, full keyboard navigation, and an orderly page structure. You do not need complicated tools for the basic checks.',
    },
    {
      type: 'p',
      text: 'Contrast is the first check. Text has to stand out clearly from its background: the trendy light-gray-on-white is refined on the designer\'s monitor and unreadable for someone with low vision or reading in sunlight. Alternative text (the "alt text" a screen reader announces in place of an image) is the second: every image that carries information needs a text description, so a screen reader user understands what it shows and, as a side effect, the search engine indexes it better.',
    },
    {
      type: 'p',
      text: 'Keyboard navigation is the third principle: it must be possible to reach and activate every link, button, and form field using only the Tab and Enter keys, without a mouse. Structure is the fourth: headings in hierarchical order, clear labels on form fields, and links that say where they lead instead of a generic "click here." These are the same details that make a site orderly and fast, which is why accessibility and [technical performance](/en/blog/core-web-vitals-fast-website) reinforce each other.',
    },
    {
      type: 'list',
      items: [
        '**Contrast**: text and background with sharp contrast, readable even with low vision or in full daylight.',
        '**Alternative text**: every informative image has a description a screen reader can read aloud.',
        '**Keyboard navigation**: links, buttons, and forms reachable and operable with the Tab key alone.',
        '**Structure**: ordered headings, clear field labels, and links that explain their destination.',
        '**Captions and transcripts**: video and audio paired with text for people who cannot listen.',
      ],
    },

    { type: 'h2', text: 'How do you get started on your site\'s accessibility?' },
    {
      type: 'p',
      lead: true,
      text: 'You start with an audit, a check of the current state, then fix things by priority: first the barriers that block use of the site entirely, then the smaller improvements. You do not need to rewrite everything at once. A few checks anyone can run are enough to see where you stand and which fixes have the biggest impact on the real people using the site.',
    },
    {
      type: 'p',
      text: 'The basic checks you can do today. Try navigating your site using only the Tab key, without touching the mouse: can you reach and activate every link and button? Confirm that important images have alternative text. Check the contrast of your text, especially on faint grays. Open a page on your phone and try to read it without zooming. Those four tests alone tell you whether there are obvious barriers to remove right away.',
    },
    {
      type: 'p',
      text: 'From there you set a priority order: first what stops a person from completing an action (filling out a form, reaching your contact details, reading a key piece of information), then the refinements. It is the same method we use to judge whether and when to fix an existing site: start from the problems that cost you customers, not from formal perfection. If you are planning a new site, building in accessibility from the start costs far less than chasing it later, and it is part of the same decision as choosing a [custom build over a template](/en/blog/custom-website-vs-template).',
    },
    {
      type: 'cta',
      text: 'Want to know whether your site is accessible and which fixes come first, or start from a project built for everyone from day one? We will walk through it with concrete examples, no needless jargon.',
      label: 'Let\'s talk',
      href: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ',
    },
  ],
  faq: [
    {
      q: 'What is the difference between the ADA and WCAG?',
      a: 'The ADA is the US federal civil-rights law that prohibits disability discrimination. WCAG (Web Content Accessibility Guidelines) is the technical standard from the W3C that defines what an accessible page looks like. Courts and regulators often use WCAG as the yardstick for measuring whether a site meets ADA expectations.',
    },
    {
      q: 'Is accessibility required for every business?',
      a: 'Not in the same way for everyone. The 2024 ADA Title II rule sets WCAG 2.1 Level AA for state and local governments. For private businesses under Title III the requirements are less settled and fact-dependent. Consult qualified counsel about your situation. This is general information, not legal advice.',
    },
    {
      q: 'Does accessibility help SEO?',
      a: 'Yes, because many accessibility practices overlap with the signals Google rewards: an orderly heading structure, alternative text on images, consistent navigation, and fast pages. Working on accessibility almost always improves how search engines index and understand your content as well, so the two efforts pull in the same direction.',
    },
    {
      q: 'Is making a site accessible expensive?',
      a: 'It depends on your starting point, but it is far cheaper than people assume when built in from the start. On an existing site you work by priority, fixing the serious barriers first. Adding accessibility to a new project costs very little extra; retrofitting it later costs much more.',
    },
    {
      q: 'Where do I start making my site accessible?',
      a: 'With an audit of the current state. Then run a few basic checks: navigate with the Tab key alone, verify alternative text on images, check text contrast, and read a page on your phone. From there, set priorities, starting with the barriers that stop someone from completing an action.',
    },
  ],
  internalLinks: [
    { slug: 'website-that-converts', anchor: 'How to build a website that converts' },
    { slug: 'core-web-vitals-fast-website', anchor: 'Core Web Vitals: why a slow site costs you customers' },
    { slug: 'custom-website-vs-template', anchor: 'Custom website vs template' },
  ],
  sources: [
    { label: 'W3C — Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation, 12 December 2024', url: 'https://www.w3.org/TR/WCAG22/' },
    { label: 'ADA.gov — 2024 ADA Title II Web Rule (WCAG 2.1 Level AA for state and local governments)', url: 'https://www.ada.gov/resources/2024-03-08-web-rule/' },
    { label: 'WebAIM — The WebAIM Million 2026 (95.9% of home pages had detected WCAG failures, avg 56.1 errors per page)', url: 'https://webaim.org/projects/million/' },
    { label: 'UsableNet — 2024 Year-End Digital Accessibility Lawsuit Report (over 4,000 ADA lawsuits filed in 2024)', url: 'https://blog.usablenet.com' },
  ],
};

export default article;
