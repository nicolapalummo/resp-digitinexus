import type { Article } from '../../types';

const article: Article = {
  id: 70,
  title: 'How to measure an ad campaign: the metrics that matter',
  metaTitle: 'Ad Campaign Metrics That Actually Matter | DigitiNexus',
  slug: 'ad-campaign-metrics',
  locale: 'en',
  altLocaleSlug: 'metriche-campagne-ads',
  metaDescription:
    'Which ad campaign metrics actually matter (cost per lead, ROAS, conversion rate), which ones are vanity metrics, and how to read a report that tells the truth.',
  capsule:
    'The metrics that matter measure business results: cost per lead or acquisition, conversion rate, and return on ad spend. Likes and views, on their own, are vanity metrics: they tell you people saw the ad, not whether it brought you a single customer. Judge campaigns on what they cost and what they bring back.',
  keywordPrimary: 'ad campaign metrics',
  keywordsSecondary: ['online advertising KPIs', 'ROAS CPA CTR'],
  cluster: 'c8',
  intent: 'I·MOFU',
  authorId: 'filippo-gentili',
  publishDate: '2026-08-09',
  updatedDate: '2026-08-09',
  status: 'published',
  cover: {
    src: '/blog/covers/metriche-campagne-ads-en.webp',
    alt: 'Ad campaign metrics: cost per lead, conversion rate, and ROAS on an advertising report',
  },
  body: [
    { type: 'h2', text: 'Business metrics vs. vanity metrics: what should you look at?' },
    {
      type: 'p',
      lead: true,
      text: 'The ad campaign metrics that matter measure business results: how many leads or sales the campaign brought in, and at what cost. Vanity metrics measure attention: likes, followers, views, reach. The first group tells you whether the advertising is working; the second, on its own, only tells you somebody saw it.',
    },
    {
      type: 'p',
      text: 'Vanity metrics are seductive because they grow so easily. Give any campaign enough budget and it will rack up views and a handful of likes: that is the natural byproduct of simply being out there. But a campaign can reach thousands of people and not bring in a single customer. If your end-of-month report only talks about reach and engagement, you still know nothing about the thing you actually care about.',
    },
    {
      type: 'p',
      text: 'That does not mean ignoring them entirely. Impressions, reach, and engagement are useful as **diagnostic signals**: they help you see whether the ad is being shown and whether it grabs attention. The point is not to treat them as the final grade. The final grade comes from leads, sales, and what each one cost you.',
    },
    {
      type: 'list',
      items: [
        '**Business metrics**: cost per lead or acquisition, conversion rate, return on ad spend.',
        '**Diagnostic metrics**: CTR, cost per click, frequency. They tell you where to intervene.',
        '**Vanity metrics**: likes, followers, views. On their own, they do not justify a dollar of budget.',
      ],
    },

    { type: 'h2', text: 'What are the key metrics (CPA, conversion rate, ROAS)?' },
    {
      type: 'p',
      lead: true,
      text: 'There are three key metrics: cost per acquisition (what you pay for each lead or customer), conversion rate (how many visitors take the action you want), and ROAS (how much revenue every dollar of ad spend generates). Together they answer the only question that counts: is the campaign paying for itself?',
    },
    {
      type: 'p',
      text: 'The **cost per acquisition (CPA)** is your ad spend divided by the number of conversions: if you invest a budget and receive a certain number of quote requests, the CPA is what each one cost you on average. It is the most concrete metric for anyone selling services, because it compares directly against what a client is worth to you. A CPA that looks steep for a coffee shop can be a bargain for a law firm signing five-figure engagements.',
    },
    {
      type: 'p',
      text: 'The **conversion rate** is the percentage of visitors who take the desired action: filling out the form, booking a call, buying. It measures the quality of the page and the offer, not the ad. **ROAS** (return on ad spend) is the ratio of revenue generated to ad spend: a ROAS of 4 means four dollars in revenue for every dollar invested. It is the benchmark metric for ecommerce, where every sale has a measurable value.',
    },
    {
      type: 'table',
      caption: 'The key campaign metrics side by side',
      headers: ['Metric', 'What it measures', 'What it is for'],
      rows: [
        ['CPA (cost per acquisition)', 'What you pay for each lead or customer', 'Seeing whether the cost is sustainable for your margins'],
        ['Conversion rate', 'How many visitors take the action', 'Evaluating the landing page and the offer'],
        ['ROAS', 'Revenue generated per dollar spent', 'Seeing whether the campaign pays for itself (ecommerce)'],
        ['CTR', 'How many people see the ad and click', 'Diagnosing the ad and the audience, not the result'],
      ],
    },
    {
      type: 'p',
      text: 'What counts as a "good" CPA is not a universal number: it depends on what a client is worth to your business and on your margins. It is the same reasoning that drives your initial investment, and we walk through it in [how much ad budget you actually need](/en/blog/how-much-ad-budget).',
    },

    { type: 'h2', text: 'Why should you measure the funnel stage by stage?' },
    {
      type: 'p',
      lead: true,
      text: 'You measure the funnel stage by stage because the final number, on its own, does not tell you where the problem is. Between the ad and the customer there are distinct steps: view, click, page visit, contact. Measuring each step shows you exactly where traffic is leaking and what you need to fix.',
    },
    {
      type: 'p',
      text: 'Every leaky stage tells a different story. If few people click the ad (low CTR), the problem is the message or the audience: the promise does not interest the people seeing it. If the clicks come but nobody leaves their contact info, the problem is the landing page or the offer: the ad promised something the page does not deliver. If leads come in but never become clients, the problem is downstream: qualification, response time, follow-up.',
    },
    {
      type: 'p',
      text: 'Without this stage-by-stage reading, you end up "fixing" the wrong thing: rewriting the ad when the page was the problem, or rebuilding the page when the audience was off. Say a CPA firm in Chicago runs ads that get plenty of clicks but no consultation requests: new ad creative will not save a landing page that buries the booking form. The full picture of how ad, website, and measurement work together is in our guide to the [funnel between your website and your ads](/en/blog/website-and-ads-funnel).',
    },

    { type: 'h2', text: 'How often should you check the data?' },
    {
      type: 'p',
      lead: true,
      text: 'Check the data regularly, but make decisions over longer windows. Ad platforms go through a learning phase: they need to accumulate conversions to figure out who should see your ads. Overhauling the campaign every day resets that learning back to square one.',
    },
    {
      type: 'p',
      text: 'The most common mistake is judging too early. In the first days the numbers bounce around: one great day and one terrible day mean nothing, they are statistical noise. With only a handful of conversions on the board, any conclusion is a coin flip. It takes the patience to let data accumulate, and the discipline not to touch everything at the first disappointing result: optimizing too early is one of the most frequent [ad budget mistakes](/en/blog/ad-budget-mistakes).',
    },
    {
      type: 'p',
      text: 'A healthy cadence, in our experience, looks like this: a frequent glance to catch obvious anomalies (runaway spend, a paused campaign, a broken form), a weekly read to understand the trend, and structural decisions on a monthly basis, once the numbers are solid enough to separate a trend from a fluctuation.',
    },

    { type: 'h2', text: 'What does a clear report look like?' },
    {
      type: 'p',
      lead: true,
      text: 'A clear report starts from business results and answers four questions: how much did we spend, how many leads or sales did we get, what did each one cost, and what are we changing next month. If the report you receive only talks about impressions and reach, you have every right to ask for more.',
    },
    {
      type: 'p',
      text: 'A report is not paperwork; it is the tool you use to decide whether to keep investing. That is why it has to be readable by someone who does not run ads for a living: essential numbers, a comparison with the previous period, and a plain-language explanation of what was tested and what was learned. Pages of charts without a conclusion are an elegant way of saying nothing.',
    },
    {
      type: 'list',
      items: [
        'Spend for the period, compared with the previous period.',
        'Conversions won (leads, bookings, sales) and the cost of each.',
        'What was tested and what was learned.',
        'Proposed next steps, and the reasoning behind them.',
      ],
    },
    {
      type: 'p',
      text: 'All of this assumes the measurement itself is done right: if conversions are not tracked correctly, even the prettiest report tells the wrong story. How to set up pixels and events while respecting user consent is covered in [privacy-compliant conversion tracking](/en/blog/privacy-compliant-conversion-tracking).',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'The most useful question to ask whoever runs your campaigns is a single one: "what does a lead cost me today, and what are we doing to bring that down?". If the answer is vague, the problem is not the data.',
    },
    {
      type: 'cta',
      text: 'Want to know whether your campaigns are actually paying off? Let us look at the numbers together, separate the metrics that matter from the vanity metrics, and tell you what to fix first.',
      label: 'Book a call',
      href: 'https://calendly.com/digitinexus/30min',
    },
  ],
  faq: [
    {
      q: 'What is ROAS?',
      a: 'ROAS (return on ad spend) is the ratio of revenue generated by a campaign to what you spent on it: a ROAS of 4 means four dollars in revenue for every dollar invested. It is the benchmark for ecommerce; if you sell services, thinking in cost per lead is usually more practical.',
    },
    {
      q: 'How many conversions do you need to know if a campaign works?',
      a: 'There is no magic threshold, but with only a few conversions every conclusion is a gamble: small numbers bounce around too much. The practical rule is to judge over weeks, not days, and let conversions accumulate until you can tell a real trend from a random fluctuation.',
    },
    {
      q: 'Do likes and views count for anything?',
      a: 'As diagnostic signals, yes: they tell you the ad is being shown and grabbing attention. As a measure of results, no: a campaign can collect thousands of views without bringing in a single customer. Use them to figure out where to intervene, never to decide whether a campaign deserves more budget.',
    },
    {
      q: 'How often should you read a report?',
      a: 'Frequent checks only exist to catch obvious anomalies, like runaway spend or a broken form. The real read is weekly, to follow the trend, and structural decisions happen monthly, once the data is solid enough to justify a change of course.',
    },
  ],
  internalLinks: [
    { slug: 'website-and-ads-funnel', anchor: 'The funnel between your website and your ads' },
    { slug: 'how-much-ad-budget', anchor: 'How much ad budget you actually need' },
    { slug: 'ad-budget-mistakes', anchor: 'Ad budget mistakes that burn your money' },
    { slug: 'privacy-compliant-conversion-tracking', anchor: 'Privacy-compliant conversion tracking' },
  ],
  sources: [],
};

export default article;
