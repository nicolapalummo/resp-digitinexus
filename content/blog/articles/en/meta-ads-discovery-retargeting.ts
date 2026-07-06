import type { Article } from '../../types';

const article: Article = {
  id: 67,
  title: 'Meta Ads: from discovery to retargeting',
  metaTitle: 'Meta Ads: From Discovery to Retargeting | DigitiNexus',
  slug: 'meta-ads-discovery-retargeting',
  locale: 'en',
  altLocaleSlug: 'meta-ads-scoperta-retargeting',
  metaDescription:
    'How Meta (Instagram/Facebook) creates demand with visual content and wins back visitors who did not convert, inside a complete funnel.',
  capsule:
    'Meta Ads is built for latent demand: it puts your offer in front of the right audience with visual content that stops the scroll, then uses retargeting to bring back people who visited your website without converting. Discovery fills the top of the funnel; retargeting closes the loop lower down.',
  keywordPrimary: 'meta ads instagram facebook',
  keywordsSecondary: ['instagram advertising', 'facebook ads', 'meta retargeting'],
  cluster: 'c8',
  intent: 'I-C·MOFU',
  authorId: 'filippo-gentili',
  publishDate: '2026-07-19',
  updatedDate: '2026-07-19',
  status: 'published',
  cover: {
    src: '/blog/covers/meta-ads-scoperta-retargeting-en.webp',
    alt: 'Meta Ads on Instagram and Facebook: from discovering new customers to retargeting people who already visited your website',
  },
  body: [
    { type: 'h2', text: 'Latent demand vs. active demand: what is the difference?' },
    {
      type: 'p',
      lead: true,
      text: 'Meta Ads works on **latent demand**: it shows your offer to people who are not searching for you, but who match your customer based on interests, behaviors, and characteristics. Google catches people who already have a problem and are typing it into a search box; Meta shows someone that their problem has a solution before they ever go looking for one.',
    },
    {
      type: 'p',
      text: 'That difference changes how you set up the entire campaign. On Google, the user arrives with clear intent and your ad only has to answer it. On Instagram and Facebook, the user is scrolling the feed to unwind: your ad has to stop them first, then spark curiosity, and only then send them to your website. For the full comparison between platforms, see [Meta, Google, or TikTok: which one to choose](/en/blog/meta-google-or-tiktok).',
    },
    {
      type: 'p',
      text: 'This is why Meta performs best inside a journey, not as a single shot: it introduces your offer to a new audience, then walks that audience toward a decision through multiple touches. It is the logic of the [funnel that connects your website and ads](/en/blog/website-and-ads-funnel): discovery at the top, retargeting further down.',
    },

    { type: 'h2', text: 'Why is the creative the real engine of Meta Ads?' },
    {
      type: 'p',
      lead: true,
      text: 'On Meta your ad does not compete with other ads: it competes with friends\' photos, creators\' reels, and videos from the brands the user follows. The creative that wins is the one that **stops the scroll** in the first moments: a striking image, a video that opens with the key point, copy that talks about the customer\'s problem instead of talking about you.',
    },
    {
      type: 'p',
      text: 'Targeting matters, but most of the optimization work today is done by the algorithm: you give it the signal (the creative and the objective) and it finds the people who respond. A campaign with a perfect audience and weak creative fizzles out; a creative that works expands the right audience on its own. In practice: the creative is the targeting.',
    },
    {
      type: 'list',
      items: [
        '**Short vertical videos**: the format that earns the most attention on reels and stories.',
        '**Images with one message**: a single clear benefit, not a flyer crammed into a square.',
        '**Copy that speaks to the customer**: their problem in the first line, your solution right after.',
        '**Multiple variations in testing**: there is no right creative on paper, you find it by trying.',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Never launch with a single creative: prepare at least three or four variations (different formats and messages) and let the results tell you which one actually pulls its weight.',
    },

    { type: 'h2', text: 'How does retargeting work on Meta?' },
    {
      type: 'p',
      lead: true,
      text: 'Retargeting shows your ads to people who have already interacted with you: they visited your website, watched a video, left a product in the cart. It is a **warm** audience that already knows you, which is why it converts more easily than people seeing you for the first time. We walk through how to build it step by step in [how retargeting works](/en/blog/how-retargeting-works).',
    },
    {
      type: 'p',
      text: 'The strength of retargeting is that it finishes what discovery starts. Few people buy or request a quote on first contact: they evaluate, compare, get distracted. Retargeting brings them back to the decision with a different message from the first one: a reminder, concrete proof (reviews, real projects), or an incentive to close.',
    },
    {
      type: 'table',
      caption: 'Discovery and retargeting compared on Meta',
      headers: ['', 'Discovery phase', 'Retargeting phase'],
      rows: [
        ['Audience', 'People who match your customer but do not know you', 'People who have already interacted with you'],
        ['Goal', 'Get known and drive visits', 'Bring non-converters back to the decision'],
        ['Message', 'The customer\'s problem and your solution', 'Reminder, social proof, incentive'],
        ['Temperature', 'Cold: you have to stop the scroll', 'Warm: you have to remove the last doubts'],
      ],
    },
    {
      type: 'p',
      text: 'One practical tip: keep an eye on how often the same people see your ad. Retargeting that chases too hard becomes annoying and works against the brand. A few well-differentiated messages, with a sensible time limit from the last visit, beat a barrage every time.',
    },

    { type: 'h2', text: 'How do you generate leads with Meta Ads?' },
    {
      type: 'p',
      lead: true,
      text: 'For lead generation on Meta you have two routes: **native lead forms**, which open inside Facebook and Instagram without leaving the app, and **traffic to a landing page** on your website, where the lead arrives better informed. Native forms bring more leads at a lower cost; the landing page brings leads that are, on average, more qualified.',
    },
    {
      type: 'p',
      text: 'The choice depends on what you sell and who handles the leads. If you have a simple offer and a fast sales process, the native form cuts friction and fills the calendar. If your service requires trust and explanation, like a CPA firm in Chicago or a custom service, the landing page filters out the merely curious and sets up the conversation: for those cases, see the full picture in [ads for professional firms](/en/blog/ads-for-professional-firms).',
    },
    {
      type: 'p',
      text: 'Whichever route you choose, the critical part is what happens next: a lead you reach quickly is worth far more than one left to go cold. Before you turn the campaign on, decide who responds, how fast, and with what message. It is the least visible part of the funnel, and it is the part that decides whether leads become customers.',
    },

    { type: 'h2', text: 'Privacy and tracking: what do you need to know?' },
    {
      type: 'p',
      lead: true,
      text: 'Retargeting and campaign optimization both rely on tracking: the **Meta pixel** (and server-side connections) record visits and actions on your website, but only with proper **consent and disclosure**. Without a compliant consent setup and a clear privacy policy, you cannot build retargeting audiences the right way, and privacy laws in a growing number of states now require it.',
    },
    {
      type: 'p',
      text: 'There is a practical side too, beyond the legal one: if consent is not collected and passed along correctly, the platform sees less data, your audiences shrink, and the algorithm optimizes worse. Compliant tracking and campaigns that perform go together, not against each other. How to set it all up the right way is in [privacy-compliant conversion tracking](/en/blog/privacy-compliant-conversion-tracking).',
    },
    {
      type: 'p',
      text: 'The full picture looks like this: Meta gets you discovered by people who do not know you, the creative stops the scroll, the website welcomes and convinces, and retargeting recovers the ones who were not ready yet. Each piece on its own does little; together, inside a well-designed funnel, they reinforce each other.',
    },
    {
      type: 'cta',
      text: 'Want to figure out whether Meta Ads makes sense for your business and how to fit it into a complete funnel, from discovery to retargeting? Let\'s talk: we will look at your goals, audience, and website together.',
      label: 'Book a free call',
      href: 'https://calendly.com/digitinexus/30min',
    },
  ],
  faq: [
    {
      q: 'Instagram or Facebook: which is better?',
      a: 'Usually you do not have to choose: Meta campaigns run on both platforms and the algorithm shifts budget to wherever it gets better results. Instagram tends to reach a younger, more visual audience; Facebook covers older and more local demographics. Start with both active and let the data decide, not gut feeling.',
    },
    {
      q: 'Do I absolutely need a video?',
      a: 'No, but it helps: short vertical video formats generally earn the most attention in the feed. You do not need an expensive production, you need a clear message in the first moments. Simple images with one well-written benefit work too, especially in retargeting. The rule is to test multiple formats and keep what performs.',
    },
    {
      q: 'What is retargeting?',
      a: 'Retargeting shows ads to people who have already interacted with you: a website visit, a video view, an abandoned cart. It is an audience that knows you and converts more easily than first-time viewers. It requires compliant tracking, with consent and disclosure handled properly under applicable privacy laws.',
    },
    {
      q: 'Does Meta Ads work for B2B services?',
      a: 'Yes, with the right expectations: on Meta you do not catch someone searching for a vendor today, you introduce your service to people who may need it tomorrow. It works well for building trust with useful content and for retargeting website visitors. For active demand, pair it with Google.',
    },
  ],
  internalLinks: [
    { slug: 'website-and-ads-funnel', anchor: 'The funnel that connects your website and ads' },
    { slug: 'meta-google-or-tiktok', anchor: 'Meta, Google, or TikTok: which platform to choose' },
    { slug: 'how-retargeting-works', anchor: 'Retargeting: how to win back visitors who did not convert' },
    { slug: 'privacy-compliant-conversion-tracking', anchor: 'Privacy-compliant conversion tracking' },
    { slug: 'ads-for-professional-firms', anchor: 'Ads for professional services firms' },
  ],
  sources: [],
};

export default article;
