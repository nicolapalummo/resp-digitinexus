import type { Article } from '../../types';

const article: Article = {
  id: 69,
  title: 'Retargeting: how to win back visitors who left without converting',
  metaTitle: 'How Retargeting Works: Win Back Lost Visitors | DigitiNexus',
  slug: 'how-retargeting-works',
  locale: 'en',
  altLocaleSlug: 'retargeting-come-funziona',
  metaDescription:
    'How retargeting shows your ads to people who visited your site without converting, and brings them back to the decision. Benefits, limits, and privacy.',
  capsule:
    'Retargeting shows your ads to people who already visited your website without converting: a warmer audience, often lower costs per result, and a higher chance of conversion. It runs on a pixel and behavioral events, needs enough traffic to work, and requires privacy-compliant tracking with proper user consent.',
  keywordPrimary: 'how retargeting works',
  keywordsSecondary: ['remarketing', 'win back website visitors'],
  cluster: 'c8',
  intent: 'I-C·MOFU',
  authorId: 'filippo-gentili',
  publishDate: '2026-08-02',
  updatedDate: '2026-08-02',
  status: 'published',
  cover: {
    src: '/blog/covers/retargeting-come-funziona-en.webp',
    alt: 'How retargeting works: winning back website visitors who left without converting',
  },
  body: [
    { type: 'h2', text: 'What is retargeting (and why does it work)?' },
    {
      type: 'p',
      lead: true,
      text: 'Retargeting is the advertising technique that shows your ads to people who already visited your website without taking the action you wanted: a purchase, a quote request, a booking. Instead of talking to strangers, you talk to people who already know you and who proved their interest with a concrete behavior.',
    },
    {
      type: 'p',
      text: 'You will also see it called **remarketing**: it is the same thing, only the label changes from platform to platform. The principle is identical on Meta, Google, TikTok, or LinkedIn: the system recognizes who passed through your site and puts a message back in front of them over the following days, while they browse elsewhere.',
    },
    {
      type: 'p',
      text: 'Why does it work? Because most people do not decide on the first visit. Someone lands on your site, compares options, gets distracted, puts it off. Retargeting works precisely on this "warm" audience: they are past the discovery phase, they just need the final nudge. That is why, for the same budget, costs per result are often lower than campaigns aimed at cold audiences.',
    },
    {
      type: 'p',
      text: 'In the bigger picture of a strategy, retargeting is the bottom of the path: it harvests what your discovery campaigns and your website have planted. You will find the complete framework in the guide to the [funnel between your website and ads](/en/blog/website-and-ads-funnel).',
    },

    { type: 'h2', text: 'How do you build a retargeting audience?' },
    {
      type: 'p',
      lead: true,
      text: 'A retargeting audience is built with three tools: the pixel (or tag) installed on your site, the events that record behaviors, and lists you upload manually, such as contacts you already have. The platform uses these signals to create groups of people to reach again with your ads.',
    },
    {
      type: 'p',
      text: 'The **pixel** is a small piece of code the ad platforms give you to place on your site: it records visits and matches them, anonymously on your end, to user accounts on the platform. **Events** add the detail: not just "visited the site," but "viewed the pricing page," "added to cart," "started filling out the contact form."',
    },
    {
      type: 'list',
      items: [
        '**Visitors of a specific page**: people who looked at one particular service or product.',
        '**Abandoned carts**: people who added to cart but never completed the purchase.',
        '**Unsent forms**: people who opened the contact page without writing.',
        '**Customer lists**: contacts you already have, useful for dedicated offers or to exclude them from campaigns.',
        '**Social interactions**: people who watched a video or engaged with your profile, even without visiting the site.',
      ],
    },
    {
      type: 'p',
      text: 'The time window matters too: you can decide whether to reach people who visited in the last 7, 30, or 90 days. The more recent the visit, the more alive the interest. One caution: all of this runs on browsing data, so tracking has to respect user consent and applicable privacy laws. We cover the how in the guide to [privacy-compliant conversion tracking](/en/blog/privacy-compliant-conversion-tracking).',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Install the pixel and the events before launching any campaign, even if retargeting comes later. The audience builds up over time: start today, and in a month you will already have a list of visitors ready to use.',
    },

    { type: 'h2', text: 'What should you show people who visited without converting?' },
    {
      type: 'p',
      lead: true,
      text: 'People who already know you do not need a full reintroduction: they need one of three messages, depending on what held them back. A reminder if they simply got distracted, an incentive if the hesitation is about price, and concrete proof if the hesitation is about trust.',
    },
    {
      type: 'p',
      text: 'The **reminder** is the simplest format and often the most effective: you show the product left in the cart or the service they browsed, with a direct invitation to finish. You do not have to persuade anyone, you just bring the person back to the exact point where they stopped.',
    },
    {
      type: 'p',
      text: 'The **incentive** comes into play when the brake is price or urgency: a dedicated offer, a real deadline, an advantage for completing by a certain date. Use it sparingly: if every visitor gets an automatic discount, you are training your audience to abandon the cart on purpose.',
    },
    {
      type: 'p',
      text: 'The **proof** answers the trust question: reviews, real cases, answers to the most common objections. It is the right message for services and high-stakes purchases, where the decision takes days. Think of a CPA firm in Chicago: the prospect who read the services page will not book after one banner, but a testimonial or a clear answer to "how does the first meeting work?" can close the gap. On Meta, this back-and-forth between discovery and return is natural: see how to set it up in [Meta Ads from discovery to retargeting](/en/blog/meta-ads-discovery-retargeting).',
    },
    {
      type: 'table',
      caption: 'What to show based on what held the visitor back',
      headers: ['The likely brake', 'The right message', 'Example'],
      rows: [
        ['They got distracted', 'Direct reminder', 'The product left in the cart, with an invitation to finish'],
        ['Doubt about price', 'Incentive with a deadline', 'A dedicated offer valid for a few days'],
        ['Doubt about trust', 'Proof and reassurance', 'Reviews, real cases, clear guarantees'],
        ['Still comparing', 'A concrete difference', 'What sets you apart from the alternatives they are weighing'],
      ],
    },

    { type: 'h2', text: 'What are the limits (and the privacy rules)?' },
    {
      type: 'p',
      lead: true,
      text: 'Retargeting has three limits to respect: tracking has to comply with privacy laws and honor user consent, frequency has to stay reasonable so you do not become intrusive, and the site needs enough traffic for the audience to reach a useful size. Ignore them and you get ineffective campaigns, or worse, non-compliant ones.',
    },
    {
      type: 'p',
      text: 'The first limit is legal. The pixel collects browsing data, so it falls under privacy regulations: state privacy laws in the US (California\'s CCPA/CPRA being the best known), and consent-based rules like the GDPR if you serve visitors in Europe. In practice: your privacy policy must describe the tracking, opt-out and consent choices must be honored, and people who decline do not enter your audiences. Your retargeting pool will be smaller than your real traffic, and that is how it should be. The practical rules are in the guide to [privacy-compliant conversion tracking](/en/blog/privacy-compliant-conversion-tracking).',
    },
    {
      type: 'p',
      text: 'The second limit is common sense: **frequency**. If the same person sees your ad dozens of times, the effect flips: from useful reminder to annoying presence. The platforms let you cap repetitions and exclude people who already converted: always use both, and keep existing customers out of your win-back campaigns.',
    },
    {
      type: 'p',
      text: 'The third limit is audience size. With only a handful of visits per month, retargeting struggles: the audience is too small for the algorithms to work well, and the budget burns on a few people. In that case the priority is driving more qualified traffic to the site first, and turning on retargeting after.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: 'A simple rule so you never "chase" anyone: whoever converts leaves the audience, and whoever does not convert after weeks of exposure gets let go. Retargeting recovers the undecided; it does not turn a no into a yes through repetition.',
    },
    {
      type: 'cta',
      text: 'Getting visits but few inquiries? Let us look at your visitors\' path together and figure out whether, and how, a retargeting setup can bring them back to the decision.',
      label: 'Book a free call',
      href: 'https://calendly.com/digitinexus/30min',
    },
  ],
  faq: [
    {
      q: 'Is retargeting intrusive?',
      a: 'It becomes intrusive when it is run badly: the same creative repeated endlessly, no frequency cap, ads served to people who already bought. Run well, it is a useful reminder: it reaches only people who showed interest, with relevant messages and a ceiling on repetitions. Exclusions and variety in the content make the difference.',
    },
    {
      q: 'Do you need a lot of traffic for retargeting?',
      a: 'You need enough traffic to build audiences of a useful size: with a few dozen visits per month, the platforms struggle to optimize and results stay weak. If your site gets little traffic, invest in discovery campaigns or Google first, and turn on retargeting once the audience has built up.',
    },
    {
      q: 'Does retargeting cost less than other campaigns?',
      a: 'Often yes, relative to results: the audience is smaller and more likely to convert, so the cost per conversion tends to be lower than campaigns aimed at cold audiences. But it does not live on its own: without discovery campaigns or organic traffic feeding the site, the pool of people to win back dries up.',
    },
    {
      q: 'Is retargeting compliant with privacy laws?',
      a: 'It can be, as long as tracking respects the rules that apply to your visitors: honoring consent and opt-out choices, describing pixel use in your privacy policy, and excluding people who declined from your audiences. Requirements vary by state and country. This is general information, not legal advice: always verify the current rules for your situation.',
    },
  ],
  internalLinks: [
    { slug: 'website-and-ads-funnel', anchor: 'The funnel between your website and ads: the complete guide' },
    { slug: 'meta-ads-discovery-retargeting', anchor: 'Meta Ads: from discovery to retargeting' },
    { slug: 'privacy-compliant-conversion-tracking', anchor: 'Privacy-compliant conversion tracking' },
  ],
  sources: [],
};

export default article;
