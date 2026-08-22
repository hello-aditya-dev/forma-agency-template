# FORMA® — Premium Digital Agency Template

**The website system for studios that sell high-value work.**

An editorial, motion-rich template for web agencies, brand studios, creative
studios, design studios, product studios and marketing agencies — built to
make your work feel expensive.

## Stack

- **Next.js 15** (App Router) + React 19
- **Tailwind CSS 3**
- **Framer Motion** — scroll reveals, mask lines, page choreography
- **Lenis** — buttery smooth scrolling
- Zero external image dependencies — a generative SVG artwork system stands in
  for photography, so the template ships fast and never shows a broken image

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Hero, selected work, capabilities, studio statement, client marquee, featured case, process, testimonials, journal |
| `/work` | Filterable project index (Branding / Digital / Strategy / Development) |
| `/work/[slug]` | Case Study Storyteller: Challenge → Approach → Solution → Result + metrics |
| `/services` | Five disciplines |
| `/services/[slug]` | Strategy · Brand · Digital · Development · Motion |
| `/about` | Manifesto, principles, approach, awards |
| `/team` | Team grid |
| `/journal`, `/journal/[slug]` | Editorial journal |
| `/contact` | Inquiry form (mailto-powered, no backend needed) |
| `/careers` | Open roles |
| `/legal` | Privacy + terms placeholders |
| `404` | Custom editorial not-found |

## The killer component

The **Case Study Storyteller** replaces "project + bullet points" with an
argument in four acts — Challenge, Approach, Solution, Result — each anchored
by large visuals, ending in a metrics band and client quote. The Solution act
includes an interactive pointer-reactive screen preview.

## Editing content ("the CMS")

Everything lives in one file: [`src/lib/data.ts`](src/lib/data.ts).

- Case studies (`caseStudies`) — including storyteller copy, metrics,
  testimonial, artwork palette + variant
- Services, journal posts, team, testimonials, clients, awards, jobs,
  principles, process steps
- Global site config (`site`) — name, email, phone, locations, socials

No database, no CMS account, no API keys. Swap the arrays and ship.
(Structured so you can later pipe the same shapes into any headless CMS.)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploying to Vercel

1. Push this repo to GitHub.
2. On [vercel.com/new](https://vercel.com/new), import the repository.
3. Framework preset auto-detects **Next.js** — accept defaults, deploy.

Or from the CLI:

```bash
npm i -g vercel
vercel --prod
```

## License

Template license: one license per end product. Replace all placeholder content
(client names, metrics, awards, legal text) before publishing a real site.
