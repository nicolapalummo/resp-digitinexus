import type { Article } from '../../types';

const article: Article = {
  id: 14,
  title: 'Why a slow website costs you customers: Core Web Vitals explained',
  metaTitle: 'Slow Site = Lost Customers: Core Web Vitals | DigitiNexus',
  slug: 'core-web-vitals-fast-website',
  locale: 'en',
  altLocaleSlug: 'core-web-vitals-sito-veloce',
  metaDescription:
    'Why site speed affects customers and rankings: what the Core Web Vitals (LCP, INP, CLS) are and how to improve them, explained in plain English.',
  capsule:
    'A slow website loses visitors and rankings: the Core Web Vitals measure loading, responsiveness, and visual stability. Improving them helps conversions and your position on Google, and the most common fixes (lighter images, better hosting, less code) are well within reach.',
  keywordPrimary: 'fast website',
  keywordsSecondary: ['core web vitals', 'website speed', 'slow website'],
  cluster: 'c2',
  isPillar: false,
  intent: 'I·MOFU',
  authorId: 'nicola-palummo',
  publishDate: '2026-09-14',
  updatedDate: '2026-09-14',
  status: 'published',
  cover: {
    src: '/blog/covers/core-web-vitals-sito-veloce-en.webp',
    alt: 'Core Web Vitals explained: LCP, INP, and CLS, the three metrics Google uses to measure a website\'s speed and stability',
  },
  body: [
    { type: 'h2', text: 'Why does website speed actually matter?' },
    {
      type: 'p',
      lead: true,
      text: 'Speed matters because it acts before anything else: if the page makes someone wait, they leave before they read your message, see your proof, or find the button to contact you. A slow site does not convert poorly, it converts what no one ever saw. Speed is not a detail for technical people, it is the first condition for the rest of your site to have a chance.',
    },
    {
      type: 'p',
      text: 'The wait hurts most on the phone, where the majority of people land and where the connection is least stable. Someone looking for a CPA or an attorney from their phone, in a hurry, does not wait for the page to finish assembling itself: they go back to the Google results and open the next site. That person was not less interested. You lost them to a problem that had nothing to do with the quality of your work.',
    },
    {
      type: 'p',
      text: 'The link between speed and conversions is easy to grasp: every second of waiting is one more chance to reconsider, get distracted, or change pages. Google research on the topic is blunt: a 0.1 second improvement in mobile load time lifted real business metrics, with retail shoppers spending 9.2% more and travel sites seeing 10% higher booking rates (Google, Milliseconds Make Millions). A site that shows up fast keeps the person while their attention is highest, which is right away.',
    },

    { type: 'h2', text: 'What are the Core Web Vitals (LCP, INP, CLS)?' },
    {
      type: 'p',
      lead: true,
      text: 'The Core Web Vitals are three public metrics Google uses to measure the quality of a page\'s experience: LCP measures how long the main content takes to appear, INP measures how responsive the page is to your taps, and CLS measures how stable the page stays instead of "jumping" while it loads. Together they tell you whether the experience is fast, responsive, and stable, the three things a person actually feels.',
    },
    {
      type: 'p',
      text: 'The term is worth breaking down, because it anchors the whole guide. **Core Web Vitals** is the set of indicators Google chose as the central signals of user experience, measured on real-world data from the people who visit your site. They are not impressions, they are numbers anyone can verify, for free, on their own domain. Each of the three answers a question the visitor asks without realizing it.',
    },
    {
      type: 'list',
      items: [
        '**LCP (Largest Contentful Paint)**: "how long until it shows up?" The time the main element (usually the large image or the headline) takes to become visible. Good is under 2.5 seconds.',
        '**INP (Interaction to Next Paint)**: "does it respond when I tap?" The delay between your tap or click and the page\'s visible reaction. Good is under 200 milliseconds.',
        '**CLS (Cumulative Layout Shift)**: "does it stay put?" How much elements move while the page loads, those jumps that make you click the wrong thing. Good is under 0.1.',
      ],
    },
    {
      type: 'p',
      text: 'Those thresholds are the ones Google publishes: above them, the experience drops from "good" to "needs improvement" or "poor". A concrete case makes CLS click: you are about to tap "Book now" and at the last second a banner loads and pushes the button down, so you tap the wrong thing. That small jump, multiplied across every visitor, is friction that pushes people away at the exact moment of action. The Core Web Vitals put a number on these micro-frustrations.',
    },

    { type: 'h2', text: 'How do you measure your site\'s speed?' },
    {
      type: 'p',
      lead: true,
      text: 'You measure speed with two free Google tools: PageSpeed Insights to analyze a single page on the spot, and Search Console to see how every page of the site behaves over time, on real visitor data. All you need is the site address and a few minutes: you get a score, the three Core Web Vitals, and a list of what is slowing things down.',
    },
    {
      type: 'p',
      text: 'The fastest route is to paste a page address into PageSpeed Insights: it returns two snapshots, the lab test (a simulated run) and the field data (real numbers collected from Chrome users, where available). For a professional firm, it pays to test the pages that truly matter: the home page, the services page, and the contact page, which is the path that leads to a consultation request.',
    },
    {
      type: 'p',
      text: 'Search Console adds the big-picture view: in the page experience section you can see how many of your URLs come back "good", "needs improvement", or "poor", grouped by issue. Passing all three is not a given: only 43% of sites had good Core Web Vitals for INP on mobile in 2024 (HTTP Archive Web Almanac 2024), so this is a real bar, not a formality. Measuring before you touch the code keeps you from optimizing what already works and ignoring the real bottleneck.',
    },

    { type: 'h2', text: 'What are the most common causes of a slow site?' },
    {
      type: 'p',
      lead: true,
      text: 'The most frequent causes are three: oversized images, weak hosting, and too much code or too many plugins. In the vast majority of cases, a site is slow for these reasons, not because of its complexity. The good news is that they are all fixable, and often the biggest one, images, is also the simplest to solve.',
    },
    {
      type: 'p',
      text: 'Images are almost always the first culprit. A photo uploaded at full camera resolution can weigh several megabytes and on its own drags down LCP: the browser has to download the whole thing before the page looks ready. The same goes for background videos and carousels stuffed with uncompressed images, common on sites that want to "make a splash" and end up making the visitor wait.',
    },
    {
      type: 'p',
      text: 'Hosting is the second cause: a cheap server shared with hundreds of other sites responds slowly to requests, and that delay stacks onto everything else. The third is excess code, typical of sites built by piling up plugins and themes full of features no one uses: every add-on loads scripts the browser has to run, and many of those slow down responsiveness, hurting INP. The more a site is assembled in layers, the heavier it gets, without anyone noticing until it is too late.',
    },

    { type: 'h2', text: 'How do you improve Core Web Vitals without sacrificing design?' },
    {
      type: 'p',
      lead: true,
      text: 'You improve the Core Web Vitals by working on the causes: compress and resize images, choose adequate hosting, strip out useless code and plugins, and put content ahead of decorative effects. Speed is not bought with a last-minute trick, it is designed in from the start. And a fast site is not a bare site: polished design and speed coexist, you just have to set the right priorities.',
    },
    {
      type: 'p',
      text: 'Optimizing images is the move with the best effort-to-result ratio. It means exporting them at the size they actually appear (you do not need a 4000-pixel photo for a 600-pixel-wide slot), compressing them, and using modern formats like WebP, which weigh far less at the same visual quality. On the home page of a photo-heavy firm, this alone can move LCP from "poor" to "good" without removing a single image.',
    },
    {
      type: 'p',
      text: 'The other moves round it out: hosting sized to your real traffic, lean code instead of a stack of plugins, and the discipline to reserve space for elements that load later, so the page does not "jump" and CLS stays low. This is where the starting choice weighs in: a custom-built site is born optimized, while a template filled in a hurry drags in weight you will never use. We covered this comparing [a custom site and a template](/en/blog/custom-website-vs-template), where performance is one of the advantages of a project designed from scratch.',
    },
    {
      type: 'p',
      text: 'Speed, finally, works alongside the other elements that make a site effective. A fast but confusing site does not convert, and a clear but slow one never gets seen: both things count. You will find the other elements that turn a visit into a contact in [the UX elements of a website that converts](/en/blog/website-that-converts), and the reason all of this has to be thought through from the phone first in [why your site should be designed mobile-first](/en/blog/mobile-first-website).',
    },
    {
      type: 'cta',
      text: 'Want to know how fast your site really is and what is holding it back, or start from a project already optimized for the Core Web Vitals? We look at it together on real data, no runaround.',
      label: 'Let\'s talk',
      href: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ',
    },
  ],
  faq: [
    {
      q: 'How fast should a website load?',
      a: 'As a benchmark, the main content should appear within 2.5 seconds (Google\'s "good" LCP threshold), and ideally under 2. But more than the exact number, perception is what counts: the page has to feel ready fast, especially on a phone and on mobile networks, where the wait hurts most.',
    },
    {
      q: 'Are Core Web Vitals a Google ranking factor?',
      a: 'Yes, they are part of the signals Google uses to judge page experience and they affect rankings, especially between pages of similar relevance. They are not the main factor (content stays central), but with comparable content a fast, stable page has an edge over a slow one.',
    },
    {
      q: 'Is WordPress always slow?',
      a: 'No. WordPress can be fast or slow depending on how it is built: the slowness almost always comes from too many plugins, heavy themes, unoptimized images, and cheap hosting, not from the platform itself. A well-built WordPress site, with lean code and light images, passes the Core Web Vitals comfortably.',
    },
    {
      q: 'How do I test my site\'s speed?',
      a: 'Paste a page address into Google PageSpeed Insights: you get the score, the three Core Web Vitals, and a list of issues, for free. For the big-picture view across every page, use Search Console, in the page experience section, which works on your real visitor data.',
    },
  ],
  internalLinks: [
    { slug: 'custom-website-vs-template', anchor: 'Custom website vs. template' },
    { slug: 'website-that-converts', anchor: 'The UX elements of a website that converts' },
    { slug: 'mobile-first-website', anchor: 'Mobile-first: designing the site from the phone' },
  ],
  sources: [
    {
      label: 'Google web.dev — Milliseconds Make Millions',
      url: 'https://web.dev/case-studies/milliseconds-make-millions',
    },
    {
      label: 'HTTP Archive — Web Almanac 2024, Performance',
      url: 'https://almanac.httparchive.org/en/2024/performance',
    },
  ],
};

export default article;
