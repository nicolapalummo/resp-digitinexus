import type { Article } from '../../types';

const article: Article = {
  id: 50,
  title: 'Effective Prompts for Work: A Practical Guide for Non-Experts',
  metaTitle: 'Effective Prompts for Work: A Practical Guide | DigitiNexus',
  slug: 'effective-prompts-for-work',
  altLocaleSlug: 'prompt-efficaci-lavoro',
  locale: 'en',
  metaDescription:
    'How to write prompts that produce useful answers: role, context, task, and format, with ready-to-use templates for everyday work.',
  capsule:
    'A good prompt gives the AI a role, the context, a clear task, and the output format. The more specific you are, the better the answer: vague in, vague out.',
  keywordPrimary: 'how to write effective prompts',
  keywordsSecondary: ['prompt engineering', 'ChatGPT prompts for work'],
  cluster: 'c7',
  intent: 'I·MOFU',
  authorId: 'nicola-palummo',
  publishDate: '2026-07-10',
  updatedDate: '2026-07-10',
  status: 'published',
  cover: {
    src: '/blog/covers/prompt-efficaci-lavoro-en.webp',
    alt: 'How to write effective prompts for work: role, context, task, and format',
  },
  body: [
    { type: 'h2', text: 'What is a prompt and why does it matter?' },
    {
      type: 'p',
      lead: true,
      text: 'A prompt is the instruction you give an AI to get an answer. It is not a magic formula: the quality of your request decides the quality of the result. Ask something vague and you get a vague answer; describe exactly what you want and the AI follows you. Knowing how to write a good prompt is the difference between a tool that wastes your time and one that saves it.',
    },
    {
      type: 'callout',
      variant: 'info',
      text: '**Prompt:** the plain-language request you send to an AI assistant. It can be a question, an instruction, or a complete task. The AI cannot read your mind: it works only with what you write, so anything you take for granted stays out of the answer.',
    },
    {
      type: 'p',
      text: 'The most common mistake is treating the AI like a search engine, typing two words and expecting the perfect answer. It works far better if you treat it like a sharp new hire on their first morning: they do not know the context, who you are writing for, or what tone to use. The more you explain, the less they have to guess. And when they guess, they get it wrong.',
    },
    {
      type: 'p',
      text: 'The good news is that you do not need technical jargon or any understanding of how the models work under the hood. You need clarity, the same clarity you would use to hand a task to a person. If you can write a clear work email, you already have half the skills you need to write a good prompt. For the bigger picture on where these tools fit, see our overview of [AI for businesses](/blog/ai-for-businesses).',
    },

    { type: 'h2', text: 'What are the four ingredients of an effective prompt?' },
    {
      type: 'p',
      lead: true,
      text: 'An effective prompt has four parts: the role (who the AI should be), the context (the situation and the details that matter), the task (what it should do exactly), and the format (how you want the answer). The sharper these four points are, the more on-target the answer will be. Keep this as your mental checklist every time you open a chat for work.',
    },
    {
      type: 'list',
      items: [
        '**Role:** tell the AI who to play. "Act as an experienced sales consultant" produces a different result from a generic request, because it shapes the tone, the vocabulary, and the point of view.',
        '**Context:** give the background. Who the message is for, what the goal is, what has already happened. Without context the AI fills the gaps with assumptions, and it often misses the mark.',
        '**Task:** spell out what it should do, with a clear verb: summarize, rewrite, translate, list, compare. An ambiguous task gives you an ambiguous answer.',
        '**Format:** state how you want the output. An email, a bulleted list, a table, three options to choose from, 100 words max. The format saves you the cleanup work.',
      ],
    },
    {
      type: 'p',
      text: 'Put them together. Instead of writing "draft me an email for a client," try this: "Act as the sales lead at a professional services firm (role). A long-standing client has asked for a 20% discount we cannot offer (context). Write an email that says no without straining the relationship and proposes an alternative (task). Warm, direct tone, 120 words max (format)." The second version gives you a text that is nearly ready to send.',
    },
    {
      type: 'callout',
      variant: 'tip',
      text: 'You do not have to force all four ingredients into every prompt. For a simple task, task and format are enough. But when the answer comes back generic or off-target, almost always one of these four is missing: run back through them like a checklist.',
    },

    { type: 'h2', text: 'What are the most common mistakes?' },
    {
      type: 'p',
      lead: true,
      text: 'The two mistakes that wreck a prompt most often are vagueness and overload. A prompt that is too generic leaves the AI too many choices, and you get an average answer that is good for no one. A prompt that asks for ten things at once confuses the AI: it does two well and the rest poorly. Specificity and one request at a time are the two rules that improve your results right away.',
    },
    {
      type: 'p',
      text: 'Vagueness is sneaky because it feels like efficiency. "Improve this text" does not say what improving means: shorter? More formal? More persuasive? The AI chooses for you, and it rarely picks what you had in mind. Swap vague adjectives for criteria: "make it 30% shorter and more formal, keeping the three key points."',
    },
    {
      type: 'p',
      text: 'Overload is the opposite mistake: writing a prompt that asks the AI to analyze a market, write a plan, draft three emails, and build a presentation, all at once. Break it up instead: one task per message. Get the analysis, check it, then move to the plan built on top of it. Working in small steps gives you sturdier results and lets you correct course before an error spreads.',
    },
    {
      type: 'list',
      items: [
        '**Too vague:** "write something about our service" → better: "write an 80-word paragraph that explains service X to a small business owner, focused on the time it saves."',
        '**Too many requests:** "analyze, rewrite, translate, and format" → better: one request at a time, building on the previous result.',
        '**No example:** when you have a specific style in mind, show it instead of describing it in words.',
      ],
    },

    { type: 'h2', text: 'What are some practical prompts for work?' },
    {
      type: 'p',
      lead: true,
      text: 'The most useful prompts in everyday work cover three recurring jobs: writing emails, summarizing long documents, and drafting copy. The same structure applies to each one: role, context, task, format. Below are three ready templates to adapt, without ever pasting confidential or personal data into the chat.',
    },
    {
      type: 'p',
      text: '**Reply email.** "Act as an assistant at a firm. I received this request from a prospect [paste the text, no identifying details]. Write a reply that thanks them, answers the main question, and proposes a discovery call. Professional, warm tone, 120 words max." You get a solid draft that you then finish with your signature and the real details.',
    },
    {
      type: 'p',
      text: '**Document summary.** "Act as an analyst. Summarize the text below in 5 bullet points, surfacing only the action items and the deadlines. Skip the introductory parts. [text]." This works for meeting notes, standard contracts, and reports: the AI pulls out the essentials so you avoid reading twenty pages to find the three lines that matter.',
    },
    {
      type: 'p',
      text: '**Copy draft.** "Act as a copywriter. I need to present service X (description: ...) to small businesses that have no time to waste. Write me 3 versions of a headline and subhead, each with a different angle: time, cost, simplicity. 15 words max per headline." Having several variants gives you material to pick from and combine, instead of a single take-it-or-leave-it option.',
    },
    {
      type: 'callout',
      variant: 'warning',
      text: 'Never paste confidential or personal data into the chat: client names, Social Security numbers, sensitive information, anything covered by confidentiality. Anonymize before you ask, and check how a given tool handles and retains what you submit. Once a prompt reliably does the job, you can wire it into a repeatable [no-code AI automation](/blog/no-code-ai-automation) so it runs the same way every time.',
    },

    { type: 'h2', text: 'How do you fix a prompt that is not working?' },
    {
      type: 'p',
      lead: true,
      text: 'When the answer falls short, do not rewrite everything from scratch: correct it and try again. Working with AI is iterative, a conversation. You say what is off ("too formal," "missing the point on costs," "cut it in half") and the AI refines. Two or three passes are usually enough to land the right result, and they are far faster than starting over.',
    },
    {
      type: 'p',
      text: 'The most powerful lever, when the style is off, is to give an example. Describing a tone in words is hard; showing it is instant. Paste an email you wrote in the past and ask the AI to "use this style." It picks up rhythm, vocabulary, and level of formality from one sample far better than from ten adjectives. A good example beats a long list of instructions.',
    },
    {
      type: 'p',
      text: 'One rule never changes: reread and verify before you use what the AI produces. The models can present wrong information with a confident tone, especially on names, numbers, and data. For why this happens and how to keep it in check, we wrote about [why AI makes things up](/blog/ai-hallucinations). The prompt does the heavy lifting, but the responsibility for what you publish stays with you.',
    },
    {
      type: 'cta',
      text: 'Want to find where AI can actually save you time in your day-to-day work? We start from your processes and pin down the concrete uses, no hype.',
      label: "Let's talk",
      href: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ',
    },
  ],
  faq: [
    {
      q: 'Do you need special language to write prompts?',
      a: 'No. There are no magic words or secret codes. You write in plain language, the way you would when handing a task to a coworker. What counts is clarity: saying who, what, in which context, and in what format. If you can explain yourself well out loud or in writing, you already have the skills to write effective prompts.',
    },
    {
      q: 'Should you write prompts in everyday language or technical terms?',
      a: 'Plain everyday language works best for most work. Today\'s models handle natural phrasing well and let you express nuance more easily. Technical wording helps in very specific cases, but for emails, summaries, and drafts, writing the way you normally speak is the most natural choice and produces results better suited to your context.',
    },
    {
      q: 'Can you give the AI examples to get better results?',
      a: 'Yes, and it is one of the most effective strategies. Showing an example of the style or format you want works better than describing it in words. Paste an email you already wrote, a template text, or an ideal output and ask the AI to follow it. It picks up tone and structure from a sample far more precisely than from a set of abstract instructions.',
    },
    {
      q: 'Do the same rules apply to every AI model?',
      a: 'Yes, for the most part. Role, context, task, and format work with any conversational assistant, because they match how these tools operate. Details and advanced features change from one model to the next, but the basics of a good prompt stay the same everywhere. Learn them once and they serve you across every tool.',
    },
  ],
  internalLinks: [
    { slug: 'ai-for-businesses', anchor: 'AI for businesses' },
    { slug: 'ai-hallucinations', anchor: 'Why AI makes things up' },
    { slug: 'no-code-ai-automation', anchor: 'No-code AI automation' },
  ],
  sources: [],
};

export default article;
