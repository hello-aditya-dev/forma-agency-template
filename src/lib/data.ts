export const site = {
  name: "FORMA",
  tagline: "Digital experiences for companies going somewhere.",
  email: "hello@forma.studio",
  phone: "+31 20 240 8800",
  locations: [
    { city: "Amsterdam", detail: "Herengracht 420" },
    { city: "London", detail: "18 Hoxton Square" },
    { city: "New York", detail: "By appointment" },
  ],
  socials: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "X / Twitter", href: "#" },
    { label: "Awwwards", href: "#" },
  ],
};

export type Category = "Branding" | "Digital" | "Strategy" | "Development";

export interface CaseStudy {
  slug: string;
  client: string;
  title: string;
  sector: string;
  year: string;
  categories: Category[];
  summary: string;
  palette: [string, string];
  variant: "orbit" | "arc" | "waves" | "grid" | "halftone" | "blocks";
  metrics: { value: string; label: string }[];
  challenge: { heading: string; body: string };
  approach: { heading: string; body: string };
  solution: { heading: string; body: string };
  result: { heading: string; body: string };
  testimonial: { quote: string; name: string; role: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "halcyon-hotels",
    client: "Halcyon Hotels & Resorts",
    title: "A quiet identity for loud hospitality",
    sector: "Hospitality",
    year: "2025",
    categories: ["Branding"],
    summary:
      "Rebranding a 38-property collection around the one thing boutique hotels can't fake: atmosphere.",
    palette: ["#C96F4A", "#2E1F1A"],
    variant: "arc",
    metrics: [
      { value: "+212%", label: "Direct bookings YoY" },
      { value: "38", label: "Properties rebranded" },
      { value: "9 wks", label: "Brief to launch" },
    ],
    challenge: {
      heading: "Thirty-eight properties, thirty-eight identities.",
      body: "Halcyon had grown by acquisition. Every hotel kept its own logo, its own tone of voice, its own booking flow. Guests loved the hotels and ignored the brand — OTA bookings dominated because nobody could tell a Halcyon property from an independent one.",
    },
    approach: {
      heading: "Find the feeling that repeats.",
      body: "We stayed in six properties across three continents and interviewed guests between check-out and breakfast. The pattern wasn't visual at all — it was the pause. Every Halcyon space is engineered around a moment of stillness. We built the identity from that observation instead of from a mood board.",
    },
    solution: {
      heading: "One voice, expressed thirty-eight ways.",
      body: "A typographic system with a single serif wordmark, an editorial tone of voice, and a colour logic each property can own without breaking the family. Photography direction replaced stock warmth with long exposures and empty frames. The booking experience was redesigned around fewer, larger decisions.",
    },
    result: {
      heading: "The brand now books rooms.",
      body: "Direct bookings more than tripled within a year. Halcyon's brand team ships property-level campaigns in days using the system, and the group's valuation story changed from 'real estate portfolio' to 'hospitality brand'.",
    },
    testimonial: {
      quote:
        "FORMA didn't hand us a logo. They handed us a point of view we could run a company on.",
      name: "Elena Marsh",
      role: "Chief Marketing Officer, Halcyon",
    },
  },
  {
    slug: "vanta-mobility",
    client: "Vanta Mobility",
    title: "Urban transit, reimagined as a product",
    sector: "Mobility",
    year: "2025",
    categories: ["Digital", "Development"],
    summary:
      "Designing and building the app behind Europe's fastest-growing e-moped network.",
    palette: ["#0E1B4D", "#4D7CFE"],
    variant: "orbit",
    metrics: [
      { value: "4.8★", label: "App Store rating" },
      { value: "2.1M", label: "Monthly riders" },
      { value: "−31%", label: "Support tickets" },
    ],
    challenge: {
      heading: "A utility app fighting for love.",
      body: "Vanta's riders unlocked vehicles through an app people opened for eleven seconds and resented every one of them. Ratings were slipping, onboarding leaked users at the payment step, and every new city launch exposed the same cracks at scale.",
    },
    approach: {
      heading: "Design the ride, not the unlock screen.",
      body: "We mapped the full journey from 'thinking about going' to 'arriving' and found Vanta owned only a sliver of it. So we designed outward: route preview before unlock, ride stats after arrival, and a home screen that earns its place on a phone instead of renting it.",
    },
    solution: {
      heading: "A native product system, shipped in public.",
      body: "A rebuilt React Native app with a motion language tuned for one-handed use, offline-tolerant flows, and an engineering architecture that lets a two-person team ship a new city in under a week. Every animation exists to answer a question, never to decorate one.",
    },
    result: {
      heading: "From tolerated to top-rated.",
      body: "Ratings recovered to 4.8 stars across both stores. Support volume fell by a third as flows stopped generating questions. Vanta now demos the app to city councils as part of its bid process — the product became the pitch.",
    },
    testimonial: {
      quote:
        "They moved our core metric more than two years of growth team experiments combined.",
      name: "Jonas Feld",
      role: "VP Product, Vanta Mobility",
    },
  },
  {
    slug: "meridian-capital",
    client: "Meridian Capital",
    title: "Positioning a century-old firm for its second century",
    sector: "Finance",
    year: "2024",
    categories: ["Strategy"],
    summary:
      "A positioning and narrative program for an investment firm entering institutional wealth management.",
    palette: ["#123B2E", "#7FB69B"],
    variant: "grid",
    metrics: [
      { value: "$2.4B", label: "New AUM in 12 months" },
      { value: "3", label: "Institutional mandates won" },
      { value: "68%", label: "Faster pitch cycles" },
    ],
    challenge: {
      heading: "Trusted by families, invisible to institutions.",
      body: "Meridian had managed generational wealth quietly for ninety years. The firm's new growth strategy required institutional mandates — but its story read like a private bank's brochure and its materials varied by whichever partner last edited them.",
    },
    approach: {
      heading: "Strategy before stationery.",
      body: "Twelve weeks of partner interviews, LP conversations and competitive teardowns produced one uncomfortable finding: Meridian's real differentiator was patience — a holding period measured in decades. Everything else in the category claimed performance. Nobody could credibly claim time.",
    },
    solution: {
      heading: "'Capital with a longer clock.'",
      body: "A positioning built around temporal advantage: narrative, messaging architecture, pitch templates, and an editorial design language that feels more like a trust document than a fund deck. Institutional materials were rebuilt so every claim traces to a number.",
    },
    result: {
      heading: "The story closed the room.",
      body: "Three institutional mandates were signed within twelve months — the firm's first ever. Partners report pitch meetings start further ahead because the positioning does the qualifying for them.",
    },
    testimonial: {
      quote:
        "For the first time in ninety years, we sound like what we actually are. It turns out that wins deals.",
      name: "Charles Adeyemi",
      role: "Managing Partner, Meridian Capital",
    },
  },
  {
    slug: "fieldnote",
    client: "Fieldnote",
    title: "A research platform built for speed",
    sector: "SaaS",
    year: "2024",
    categories: ["Development", "Digital"],
    summary:
      "Design-engineering a collaborative research tool used by 12,000 academics and analysts.",
    palette: ["#101010", "#B8F04A"],
    variant: "blocks",
    metrics: [
      { value: "0.4s", label: "Median page load" },
      { value: "99.99%", label: "Uptime since launch" },
      { value: "12k", label: "Researchers onboarded" },
    ],
    challenge: {
      heading: "Powerful software, punishing experience.",
      body: "Fieldnote's underlying engine was world-class; the interface wrapped around it was not. Researchers lost work, waited seconds for views that should be instant, and routed around the product with spreadsheets — the worst kind of compliment.",
    },
    approach: {
      heading: "Treat latency as a design material.",
      body: "We instrumented everything first. The data showed three interactions consumed 80% of user time, so we set a hard budget — every critical interaction under half a second — and designed within it rather than hoping performance would arrive later.",
    },
    solution: {
      heading: "An editor that keeps up with thinking.",
      body: "A rebuilt front end with optimistic updates, local-first sync, and keyboard-first navigation. The design system encodes density as a feature: more signal per screen, zero decoration. Shipped incrementally against real usage data over fourteen weeks.",
    },
    result: {
      heading: "Spreadsheets went back to being spreadsheets.",
      body: "Daily active usage tripled. The team's own benchmark suite is now part of their sales conversation — prospects watch the profiler, not the pitch deck.",
    },
    testimonial: {
      quote:
        "The rare agency where the engineers have taste and the designers read benchmarks.",
      name: "Dr. Lena Hoffmann",
      role: "Co-founder, Fieldnote",
    },
  },
  {
    slug: "oro-atelier",
    client: "ORO Atelier",
    title: "An identity cut like the jewelry it represents",
    sector: "Luxury goods",
    year: "2023",
    categories: ["Branding"],
    summary:
      "Brand identity and e-commerce experience for a Copenhagen jewelry house going global.",
    palette: ["#171310", "#D4AF6A"],
    variant: "halftone",
    metrics: [
      { value: "+64%", label: "Average order value" },
      { value: "3", label: "Flagship stores opened" },
      { value: "1", label: "Vogue feature" },
    ],
    challenge: {
      heading: "Craftsmanship that photographed like costume jewelry.",
      body: "ORO's pieces earned devoted word-of-mouth but looked interchangeable online next to fast-fashion competitors. The website flattened the work, and wholesale partners priced accordingly.",
    },
    approach: {
      heading: "Slow the eye down.",
      body: "Jewelry buying is tactile; screens are not. We studied how customers behaved in the physical atelier — the tilt toward light, the two-handed inspection — and translated those gestures into digital equivalents instead of adding another carousel.",
    },
    solution: {
      heading: "A gallery, not a shop.",
      body: "An identity built on negative space and a bespoke serif, paired with an e-commerce experience where products are lit, cropped and paced like editorial photography. Macro-zoom interactions let customers inspect settings the way they would in-hand.",
    },
    result: {
      heading: "Priced like the work it is.",
      body: "Average order value rose 64% post-launch. ORO opened flagship stores in three cities, and the site's imagery direction now leads their print campaigns — one visual language, everywhere.",
    },
    testimonial: {
      quote:
        "Our pieces finally look online the way they feel in your hands. That sentence alone paid for the project.",
      name: "Astrid Meyer",
      role: "Founder, ORO Atelier",
    },
  },
  {
    slug: "northbeam-festival",
    client: "Northbeam Festival",
    title: "A festival platform that sells out in hours",
    sector: "Culture",
    year: "2023",
    categories: ["Digital"],
    summary:
      "Identity, website and ticketing experience for Scandinavia's largest light-art festival.",
    palette: ["#3B1D5E", "#B79CFF"],
    variant: "waves",
    metrics: [
      { value: "42k", label: "Tickets sold in 6 hours" },
      { value: "180k", label: "Peak concurrent streams" },
      { value: "97%", label: "Returning attendees" },
    ],
    challenge: {
      heading: "Demand the infrastructure couldn't survive.",
      body: "Northbeam's ticket releases crashed its platform twice in three years. The festival's identity — literally made of light — was rendered as a generic event template. Press coverage outgrew the brand's ability to host it.",
    },
    approach: {
      heading: "Build for the spike, design for the season.",
      body: "Traffic arrives in a six-hour thunderstorm once a year and lingers gently for months. We architected for the storm and art-directed for the calm, treating these as one brief instead of two vendors' scopes.",
    },
    solution: {
      heading: "Light, rendered responsibly.",
      body: "A gradient-driven identity system generated procedurally in code — no two visits render identically — atop a static-first, edge-cached ticketing journey that survived 180k concurrent visitors without breaking a sweat.",
    },
    result: {
      heading: "Six hours, gone.",
      body: "The 2023 release sold out in six hours with zero downtime. The procedural identity now extends to projections on-site, making the festival's digital and physical presence literally the same system.",
    },
    testimonial: {
      quote:
        "Ticket day used to be our scariest night of the year. Now it's our best marketing asset.",
      name: "Mikkel Sørensen",
      role: "Director, Northbeam Festival",
    },
  },
];

export const featuredCaseSlug = "halcyon-hotels";

export function getCase(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export interface Service {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  intro: string;
  body: string[];
  deliverables: string[];
}

export const services: Service[] = [
  {
    slug: "strategy",
    index: "01",
    title: "Strategy",
    tagline: "Deciding what not to do.",
    intro:
      "Before a single pixel, we make the decisions that make everything else easier: who you are, who it's for, and what has to be true for the work to matter.",
    body: [
      "Strategy at FORMA is not a deck delivered and forgotten. It's a set of operating decisions — positioning, audience, proof — that every later artifact must obey. We'd rather kill a beautiful idea that serves the wrong goal than defend it in review.",
      "Engagements run short and sharp: weeks, not quarters. You get language you can repeat verbatim in a board meeting, and criteria you can judge work against without us in the room.",
    ],
    deliverables: [
      "Positioning & narrative",
      "Audience & market research",
      "Messaging architecture",
      "Naming & verbal identity",
      "Content strategy",
      "Roadmapping",
    ],
  },
  {
    slug: "brand",
    index: "02",
    title: "Brand Identity",
    tagline: "Identities built to compound.",
    intro:
      "We design identities as systems — not logos, but languages that stay coherent from a favicon to a forty-foot facade, and keep earning equity years later.",
    body: [
      "A strong identity is a small vocabulary used relentlessly well. We build systems your team can actually operate: clear rules, generous examples, and components that flex without dissolving.",
      "Every identity ships with the unglamorous half most studios skip — guidelines people read, templates people use, and artwork files named so the next designer doesn't start from archaeology.",
    ],
    deliverables: [
      "Visual identity systems",
      "Logotype & typography",
      "Art direction",
      "Design guidelines",
      "Collateral & packaging",
      "Brand launches",
    ],
  },
  {
    slug: "digital",
    index: "03",
    title: "Digital Design",
    tagline: "Websites and products people remember.",
    intro:
      "Web, product and commerce design with an editorial sensibility — interfaces with a point of view, engineered to convert without shouting.",
    body: [
      "Most websites inform. The ones we remember persuade. We design digital experiences the way editors design magazines: hierarchy first, restraint always, and typography doing more work than decoration ever could.",
      "Whether it's a marketing site or a daily-use product, we prototype at fidelity early, test with real humans, and hand off designs developers don't need to interpret.",
    ],
    deliverables: [
      "Website design",
      "Product & UX design",
      "E-commerce experiences",
      "Design systems",
      "Prototyping & testing",
      "Conversion optimization",
    ],
  },
  {
    slug: "development",
    index: "04",
    title: "Development",
    tagline: "Engineering as a design discipline.",
    intro:
      "Performance budgets, accessibility standards and animation that survives contact with production. We build what we design, so nothing gets lost in translation.",
    body: [
      "We hold engineering to the same standard as design: fast by default, accessible without compromise, and maintainable by teams who weren't in the room. Our sites score green because speed was a requirement, not a retrofit.",
      "Stack-agnostic but opinionated — modern frameworks, edge deployment, and content systems your marketers can drive without filing tickets.",
    ],
    deliverables: [
      "Front-end development",
      "Next.js & headless builds",
      "Creative development",
      "CMS implementation",
      "Performance optimization",
      "Technical SEO",
    ],
  },
  {
    slug: "motion",
    index: "05",
    title: "Motion",
    tagline: "Movement with intent.",
    intro:
      "Animation that answers questions — where did that come from, where did it go, what do I do now. Motion as meaning, never confetti.",
    body: [
      "Good motion design is invisible; it just makes interfaces feel inevitable. We define timing curves, choreography rules and physics the way type foundries define weights — systematically, so every future animation inherits the grammar.",
      "From micro-interactions to launch films, everything we animate obeys one rule: if removing it makes the experience unclear, it stays. If removing it changes nothing, it goes.",
    ],
    deliverables: [
      "Interaction & UI motion",
      "Motion identity systems",
      "Launch & brand films",
      "Prototyping (Lottie/Rive)",
      "Scroll choreography",
      "Sound direction",
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  readingTime: string;
  excerpt: string;
  body: string[];
}

export const posts: Post[] = [
  {
    slug: "notes-on-restraint",
    title: "Notes on restraint",
    date: "May 2026",
    category: "Craft",
    readingTime: "4 min",
    excerpt:
      "The best work we've shipped was mostly subtraction. On editing as the highest design skill.",
    body: [
      "Every project starts by accumulating. Stakeholders add. References inspire. Features arrive with adjectives attached — just one more section, one more badge, one more banner. By week three the original idea is buried under its own enthusiasm.",
      "Then someone edits. A section dies. A colour gets deleted. The navigation drops from seven items to four, and suddenly — without anything being added — the whole thing works. Everyone in the room feels it. The work didn't improve because we made it better. It improved because we made it less.",
      "Restraint isn't minimalism as an aesthetic. Minimalism photographs well; restraint pays invoices. A restrained site loads faster, reads clearer, converts harder, and costs less to maintain. Restraint is generosity toward the visitor's attention.",
      "The hard part is that subtraction happens late, when everyone is tired and invested. Which is why we schedule the killing floor: a standing agenda item where the only allowed question is 'what can go?' Ideas defended there earn their place. Everything else was decoration.",
      "Taste, ultimately, is the accumulated memory of things you regretted adding.",
    ],
  },
  {
    slug: "pricing-is-positioning",
    title: "Pricing is positioning",
    date: "March 2026",
    category: "Business",
    readingTime: "6 min",
    excerpt:
      "Your rate card says more about your studio than your portfolio does. What we learned raising ours three times.",
    body: [
      "When we started FORMA, we priced to win. Low enough that saying yes was easy, high enough to signal we weren't desperate — which, honestly, we were. The clients this attracted taught us an expensive lesson: price is the first act of positioning, and buyers believe it completely.",
      "Cheap prices attract people evaluating on cheapness. They negotiate hardest, respect least, and leave fastest. Not because they're bad people — because the transaction itself told them what kind of relationship this was.",
      "Raising rates is terrifying right up until it isn't. The first increase lost us two prospects and improved every remaining engagement overnight. Clients paying properly push back on ideas less politely and implement them far more faithfully. Scarcity of budget had been masquerading as simplicity of vision.",
      "Here's the mechanic nobody says out loud: when you price high, you buy yourself the room to do the work properly. Research time. Prototype fidelity. The third revision that actually lands. Studios charging too little aren't humble — they're subsidizing worse outcomes with their own evenings.",
      "Price is also self-selection, which saves everyone pain. The briefs that scare you off at your real rate would have exhausted you at your old one. Say the number. Let it filter.",
      "We still lose work on price. Sometimes the loss stings — usually when the project would have been fun. But a studio is a compounding machine, and every properly-priced project compounds faster than two discounted ones. The math is boring. The math wins.",
    ],
  },
  {
    slug: "why-we-show-process",
    title: "Why we show process, not just polish",
    date: "January 2026",
    category: "Studio",
    readingTime: "3 min",
    excerpt:
      "Case studies usually end where the interesting part begins. A note on showing our working.",
    body: [
      "Portfolio culture rewards the screenshot: the hero image, the metric, the launch tweet. All fine. None of it explains why the work is any good — which is the only question a serious buyer is asking.",
      "So our case studies are structured as arguments. Challenge, approach, solution, result — not as a format inherited from slide decks, but because that's genuinely the order decisions happened in. The reader should finish able to reconstruct our thinking, not just admire our output.",
      "There's a commercial reason too. Buyers of high-value work aren't purchasing pixels; they're purchasing judgment. Process is how judgment becomes visible. Anyone can claim taste. Showing what you killed, and why, is the receipt.",
    ],
  },
  {
    slug: "typography-does-the-talking",
    title: "Typography does the talking",
    date: "November 2025",
    category: "Craft",
    readingTime: "5 min",
    excerpt:
      "Ninety percent of web design is typography wearing a trench coat. Notes on type as interface.",
    body: [
      "Strip a great website to its skeleton and you find type: scale, rhythm, spacing. Colour and imagery change seasonally; typography is the load-bearing wall. Studios that treat fonts as garnish build sites that feel wrong in ways they can't diagnose.",
      "Our rule of thumb: before adding any element, ask whether typography can solve it. Labels instead of icons. Weight instead of boxes. Whitespace instead of dividers. Most interface chrome is apology for weak type systems.",
      "On the web specifically, the craft lives in the unglamorous variables — line length, leading, optical sizes, tabular figures in tables. Get those right and a page with zero images can feel luxurious. Get them wrong and a million-dollar brand reads like a term paper.",
      "Variable fonts changed the economics. One file, infinite weights, real optical sizing — there has never been a cheaper moment to take typography seriously. The excuse 'we'll refine type later' expired around 2019.",
    ],
  },
  {
    slug: "hiring-for-taste",
    title: "Hiring for taste",
    date: "September 2025",
    category: "Studio",
    readingTime: "4 min",
    excerpt:
      "Skills can be taught in months. Taste takes years — so we interview for it deliberately.",
    body: [
      "Tools change yearly. Craft fundamentals change slowly. But taste — knowing which of two good options is better, and being able to say why in one sentence — barely responds to training at all. So it's the thing we hire for.",
      "Our interviews contain no whiteboards. We walk through a candidate's past work and ask them to criticize it. Designers who can't critique their own portfolio haven't developed the judgment our clients are buying; they've developed dexterity.",
      "The second test: give feedback on something genuinely ambiguous. Weak candidates optimize to please the room. Strong candidates disagree with the room, kindly, with reasons. Studios die from pleasers; clients can hire pleasers anywhere.",
      "None of this is a shortcut around skill. It's a bet on sequencing — hire taste, train tools, and ten years later the studio still argues about kerning in the good way.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export const team = [
  { name: "Mara Lindqvist", role: "Founder & Creative Director", focus: "Brand systems, art direction" },
  { name: "Jonas Beck", role: "Partner, Strategy", focus: "Positioning, research" },
  { name: "Priya Nair", role: "Design Director", focus: "Digital product, design systems" },
  { name: "Tomás Rivera", role: "Head of Engineering", focus: "Next.js, performance" },
  { name: "Amara Osei", role: "Senior Brand Designer", focus: "Identity, typography" },
  { name: "Felix Duarte", role: "Motion Lead", focus: "Interaction, film" },
  { name: "Ingrid Sørensen", role: "Executive Producer", focus: "Delivery, clients" },
  { name: "David Kim", role: "Product Designer", focus: "UX, prototyping" },
];

export const testimonials = [
  {
    quote:
      "FORMA operates like your best employee: they care about the outcome, not the invoice line.",
    author: "Sarah Chen",
    role: "CEO, Fieldnote",
  },
  {
    quote:
      "The rare studio that will tell you the idea is wrong before they bill you for executing it.",
    author: "Marcus Webb",
    role: "CMO, Vanta Mobility",
  },
  {
    quote:
      "Every deliverable arrived considered, complete and on time. In fifteen years of hiring agencies, that combination is nearly mythical.",
    author: "Charlotte Bergström",
    role: "Brand Director, Halcyon",
  },
  {
    quote:
      "They raised our ambitions and then met them. I didn't know agencies still did that.",
    author: "Daniel Okafor",
    role: "Founder, Northbeam Festival",
  },
];

export const clients = [
  "HALCYON",
  "VANTA",
  "MERIDIAN",
  "FIELDNOTE",
  "ORO ATELIER",
  "NORTHBEAM",
  "ASTER HEALTH",
  "COBALT & CO",
  "LUMEN LABS",
  "PALLAS GROUP",
  "RIVE STUDIO",
  "SUNDIAL",
];

export const awards = [
  { year: "2026", award: "Awwwards — Site of the Day", project: "Vanta Mobility" },
  { year: "2025", award: "FWA — Site of the Day", project: "Northbeam Festival" },
  { year: "2025", award: "D&AD — Wood Pencil", project: "ORO Atelier" },
  { year: "2024", award: "CSSDA — Website of the Year, Nominee", project: "Fieldnote" },
  { year: "2024", award: "Awwwards — Developer Award", project: "Fieldnote" },
  { year: "2023", award: "European Design Awards — Silver", project: "Meridian Capital" },
];

export const jobs = [
  {
    title: "Senior Brand Designer",
    location: "Amsterdam / Hybrid",
    type: "Full-time",
    blurb:
      "Lead identity systems for clients who expect the work to outlive the engagement.",
  },
  {
    title: "Design Engineer",
    location: "Remote (EU)",
    type: "Full-time",
    blurb:
      "Live in the seam between Figma and production. TypeScript, motion, opinions.",
  },
  {
    title: "Strategist",
    location: "London / Hybrid",
    type: "Full-time",
    blurb:
      "Turn founder intuition into language a board can repeat verbatim.",
  },
];

export const principles = [
  {
    title: "Taste is a business asset",
    body: "Discernment compounds like capital. We invest in it deliberately and treat it as our core inventory.",
  },
  {
    title: "Fewer, better projects",
    body: "We cap concurrent engagements. Depth beats volume — for the work, and for the people doing it.",
  },
  {
    title: "Craft compounds",
    body: "Small refinements accumulate into unfair advantages. There is no detail beneath improving.",
  },
  {
    title: "Process over heroics",
    body: "Great work shouldn't require a heroic quarter. Systems beat sprints, and sleep beats crunch.",
  },
  {
    title: "Say the true thing",
    body: "Even when it costs us the project. Especially when it costs us the project.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Immerse",
    body: "Weeks inside your business — interviews, audits, archaeology. We learn the industry well enough to argue with you about it.",
  },
  {
    step: "02",
    title: "Define",
    body: "Positioning, strategy and success criteria agreed before design begins. The brief becomes a contract with reality.",
  },
  {
    step: "03",
    title: "Design",
    body: "Concepts explored wide, refined ruthlessly. You see thinking, not theatre — directions argued, not decorated.",
  },
  {
    step: "04",
    title: "Build",
    body: "Designed and engineered by the same team. Performance budgets enforced, accessibility non-negotiable.",
  },
  {
    step: "05",
    title: "Launch & beyond",
    body: "Shipping is the midpoint. We measure, iterate, and stay available — most clients renew annually.",
  },
];
