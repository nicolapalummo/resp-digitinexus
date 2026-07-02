import type { Article } from '../../types';

const article: Article = {
  id: 35,
  title: 'How to get recommended when clients ask AI for a professional',
  metaTitle: 'Getting Found by AI as a Professional | DigitiNexus',
  slug: 'getting-found-by-ai-as-a-professional',
  locale: 'en',
  altLocaleSlug: 'farsi-trovare-ai-professionista',
  metaDescription:
    'More clients ask ChatGPT for an attorney or a CPA. Here is how to structure your website and online presence so AI engines recommend you in your area.',
  capsule:
    'To get recommended by AI when someone asks for "a good CPA in Chicago", you need a website that is clear by service and location, real reviews, consistent external citations, and structured data that ties your name, your firm, and your expertise into a single, verifiable identity.',
  keywordPrimary: 'get recommended by AI professional',
  keywordsSecondary: ['show up on ChatGPT for a firm', 'AI recommends a professional'],
  cluster: 'c4',
  isPillar: false,
  intent: 'I·TOFU',
  authorId: 'nicola-palummo',
  publishDate: '2026-07-15',
  updatedDate: '2026-07-15',
  status: 'published',
  cover: {
    src: '/blog/covers/farsi-trovare-ai-professionista-en.webp',
    alt: 'How to get recommended by ChatGPT when a client looks for an attorney, a CPA, or an architect',
  },
  body: [
    { type: 'h2', text: 'Do AI assistants really recommend a local professional?' },
    {
      type: 'p',
      lead: true,
      text: 'Yes, and more and more often. When someone asks ChatGPT "which CPA should I pick for my LLC in Austin" or "I need an employment attorney for a wrongful termination in Denver", the AI answers with criteria, and sometimes with names. To appear in those answers you have to be visible, consistent, and citable in the sources the AI reads.',
    },
    {
      type: 'p',
      text: 'This is a new behavior, but it is growing fast, especially for high-stakes topics. The search results page itself is already answering more of the question: when an AI summary appears at the top, people click a traditional result on just 8% of visits, compared with 15% when there is no summary, and they click a link inside the summary on only about 1% of visits (Pew Research Center). The person looking for help with their taxes or a legal matter often starts with a question to an AI before they open ten browser tabs.',
    },
    {
      type: 'p',
      text: 'Translated: the CPA who wants new clients and the attorney who owns a city have to think not just about Google but about how the AI reconstructs "who is good and trustworthy" for that service in that area. AI does not invent trust. It gathers trust from the signals it finds online. If those signals about you are clear, consistent, and verifiable, you have a far better shot at landing in the group it recommends.',
    },

    { type: 'h2', text: 'How do AI engines decide who to recommend?' },
    {
      type: 'p',
      lead: true,
      text: 'AI recommends whoever looks credible across multiple sources that agree with each other. Three signals carry more weight than the rest: the sources that cite you (your site, the state bar or licensing board, directories, articles), entity consistency (the same name, address, and specialty everywhere), and trust signals (real reviews, a Google Business Profile, verifiable credentials).',
    },
    {
      type: 'p',
      text: 'Consistency is the crux. An AI rebuilds who you are by piecing together scattered fragments: if your site says "Rossi Law Group", the state bar lists "Mario Rossi", a directory shows "M. Rossi, Esq.", and your Google Business Profile carries a different address, those fragments never fuse into one trustworthy entity. When name, firm, office, and practice areas match everywhere, the AI has a solid identity to recommend. The academic GEO study (Aggarwal et al., KDD 2024) found that citing sources, statistics, and quotations can lift visibility in generative engines by up to 40%: authoritative proof counts more than marketing copy.',
    },
    {
      type: 'list',
      items: [
        '**Sources that cite you:** your website, your bar or board license, reputable industry directories, articles or interviews you appear in.',
        '**Entity consistency:** the same name, address, phone, and specialty on every platform, with no conflicting versions.',
        '**Trust signals:** authentic reviews, a well-kept Google Business Profile, and clearly visible credentials and licensure.',
      ],
    },

    { type: 'h2', text: 'How do I optimize my firm\'s website for AI?' },
    {
      type: 'p',
      lead: true,
      text: 'Build a clear page for each combination of service and location, written in the client\'s language, with a short answer up top and a frequently-asked-questions section. AI engines read and cite content that answers directly and verifiably: a well-structured page is easier to understand, extract, and recommend.',
    },
    {
      type: 'p',
      text: 'Structure matters as much as content. The attorney who dedicates a page to "family law in Denver" and opens with two lines that answer right away ("I handle separations, divorce, and custody in the Denver metro area") hands the AI a clean block to quote. The CPA who explains "S-corp vs. LLC: which is better for a small business in 2026" with a crisp answer at the top and the common questions underneath becomes the natural source when someone asks for advice on entity choice. It is the citable-capsule method: a short, self-contained answer before the deeper explanation, which also feeds the broader [Generative Engine Optimization](/en/blog/generative-engine-optimization) approach.',
    },
    {
      type: 'p',
      text: 'For legal and financial topics there is one more reason to invest in this content: these are areas where the reliability of the source weighs heavily, and that is exactly where the AI is most selective about who it cites. The foundation stays your firm\'s website, and how it should be structured is covered in [the professional services firm website](/en/blog/professional-services-firm-website).',
    },

    { type: 'h2', text: 'Are reviews and local presence enough?' },
    {
      type: 'p',
      lead: true,
      text: 'No, but they are a pillar. Real reviews and a well-kept Google Business Profile are among the strongest trust signals AI gathers when deciding who to recommend in an area. On their own they are not enough (you also need a clear site and consistent external citations), but without them it is hard to break into the group of suggested names.',
    },
    {
      type: 'p',
      text: 'Local presence is the ground where a firm\'s searches are won: "CPA in Chicago", "divorce attorney in Seattle". A complete Google Business Profile (address, hours, practice areas, real photos) and authentic client reviews tell the AI that you genuinely exist, work in that city, and have a verifiable reputation. For someone choosing who to trust with a sensitive matter, reviews carry more weight than any slogan, and they reinforce the same authority that [E-E-A-T for professional services](/en/blog/e-e-a-t-for-professional-services) is built on.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'No fake or inflated reviews. Beyond violating platform policies and FTC guidance on deceptive endorsements, they are a reputational risk and, for some regulated professions, an ethics problem with the state bar or board. AI rewards consistency over time, not suspicious spikes: a handful of real, steady reviews beats a pile of identical ones.',
    },

    { type: 'h2', text: 'What do external citations do?' },
    {
      type: 'p',
      lead: true,
      text: 'External citations are mentions of your name and your firm outside your own site: the state bar or licensing board, industry directories, articles, interviews, speaking engagements. They confirm to the AI that you are a real, recognized entity, not just a website talking about itself. The more consistent they are, the more they reinforce trust.',
    },
    {
      type: 'p',
      text: 'Here the golden rule is consistency of name, address, and specialty. The attorney listed with the state bar, on one or two serious legal directories, and named in an article builds a web of confirmations the AI can follow. The CPA whose state board of accountancy license and AICPA membership use the same firm name shown on the site gives the AI an identity with no contradictions. Every consistent mention is a brick; every conflicting version (different abbreviations, old addresses) is a crack that weakens the whole.',
    },
    {
      type: 'list',
      items: [
        '**License and credentials:** your official state bar, board, or AICPA listing, using the exact name you use on your site.',
        '**Reputable industry directories:** a few serious ones, always with data identical to your website.',
        '**Articles and interviews:** content where you are named by name strengthens perceived authority.',
      ],
    },

    { type: 'h2', text: 'Which structured data do professionals need?' },
    {
      type: 'p',
      lead: true,
      text: 'You need structured data that describes who you are in a language machines read without ambiguity: the Person schema for the professional, Organization (or LegalService) for the firm, and the sameAs property that links your site to your official profiles. It is the most direct way to tell the AI "this person, this firm, this expertise are the same entity".',
    },
    {
      type: 'p',
      text: 'Structured data is code invisible to the reader but crystal clear to Google and to AI: it translates "Mario Rossi, Esq., employment law, Denver, licensed by the state bar" into linked, reliable information. The sameAs property in particular unites your site, your bar or board profile, your Google Business Profile, and your professional pages into a single identity: it is what stops the AI from confusing you with a namesake or treating you as two separate entities. Done right, it is the technical backbone of the authority covered in [E-E-A-T for professional services](/en/blog/e-e-a-t-for-professional-services).',
    },
    {
      type: 'p',
      text: 'Examples of prompts a client would type into ChatGPT today to find you: "recommend a CPA in Chicago who handles LLCs and small business taxes", "which attorney should I pick for a wrongful termination case in Denver", "find me an architect in Austin to remodel a home". In each one the AI is hunting for a clear entity by service and location, backed by proof of trust. If your site, reviews, citations, and structured data all tell the same consistent story, you are a natural candidate for the answer.',
    },
    {
      type: 'cta',
      text: 'Want a website that gets you recommended by AI when a client looks for a professional in your area? We build custom sites for firms, ready for GEO.',
      label: 'Let\'s talk',
      href: 'https://calendly.com/digitinexus/30min',
    },
  ],
  faq: [
    {
      q: 'Does ChatGPT really recommend local professionals?',
      a: 'Yes, more and more often. When a user asks for an attorney or a CPA in a city, the AI answers with criteria and sometimes with names, reconstructed from the sources it finds online. To appear you have to be visible, consistent, and citable, with clear trust signals for that service and that area.',
    },
    {
      q: 'Are reviews enough to get recommended by AI?',
      a: 'No, but they are a pillar. Real reviews and a well-kept Google Business Profile are among the strongest trust signals AI gathers. On their own they are not enough: you also need a clear site by service and location, consistent external citations, and structured data linking your name, firm, and expertise.',
    },
    {
      q: 'Do I need a blog to get cited by AI?',
      a: 'It helps a lot. Content that answers your clients\' real questions, with a short answer up top and frequently-asked questions below, is the easiest to extract and cite. You do not need to write a lot: you need to answer well the questions your clients already ask, one per page.',
    },
    {
      q: 'How do I check whether AI cites me?',
      a: 'Run the prompts a client would use yourself, like "recommend a CPA in Chicago for an LLC", across several assistants. See if you show up, under what name, and with which sources. Repeat the check over time: answers change, and the consistency of your signals moves the result.',
    },
  ],
  internalLinks: [
    { slug: 'generative-engine-optimization', anchor: 'Generative Engine Optimization' },
    { slug: 'e-e-a-t-for-professional-services', anchor: 'E-E-A-T for professional services' },
    { slug: 'professional-services-firm-website', anchor: 'The professional services firm website' },
  ],
  sources: [
    { label: 'Pew Research Center: Google users are less likely to click on links when an AI summary appears (a traditional result is clicked on 8% of visits with an AI summary vs 15% without; 1% click inside the summary)', url: 'https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/' },
    { label: 'Aggarwal et al., "GEO: Generative Engine Optimization", KDD 2024 (citing sources, statistics, and quotations can boost visibility in generative engines by up to 40%)', url: 'https://arxiv.org/abs/2311.09735' },
  ],
};

export default article;
