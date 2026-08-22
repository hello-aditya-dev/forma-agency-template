import Link from "next/link";
import {
  caseStudies,
  clients,
  featuredCaseSlug,
  getCase,
  processSteps,
  services,
  testimonials,
  posts,
} from "@/lib/data";
import { CaseCard } from "@/components/case-card";
import { Artwork } from "@/components/artwork";
import { Marquee, MaskLine, Reveal } from "@/components/motion";

export default function HomePage() {
  const featured = getCase(featuredCaseSlug)!;
  const selected = caseStudies.filter((c) => c.slug !== featuredCaseSlug).slice(0, 3);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="flex min-h-[100svh] flex-col justify-between px-5 pb-8 pt-32 md:px-10 md:pt-40">
        <p className="label">
          Independent digital studio — Amsterdam · London · New York
        </p>

        <h1 className="mt-10 font-serif text-[clamp(3.2rem,11vw,11rem)] font-light leading-[0.98] tracking-tightest">
          <MaskLine>We build brands</MaskLine>
          <MaskLine delay={0.1}>
            people <em className="italic">remember.</em>
          </MaskLine>
        </h1>

        <div className="mt-12 flex flex-col justify-between gap-6 border-t border-line pt-6 md:flex-row md:items-end">
          <Reveal delay={0.25} y={16}>
            <p className="max-w-md text-base leading-relaxed opacity-70">
              FORMA partners with ambitious companies on strategy, brand and
              digital products. Fewer projects, deeper work, outcomes you can
              measure.
            </p>
          </Reveal>
          <Reveal delay={0.35} y={16}>
            <div className="flex items-center gap-10">
              <Link
                href="/work"
                className="link-line font-mono text-[11px] uppercase tracking-[0.18em]"
              >
                Selected work ↓
              </Link>
              <Link
                href="/contact"
                className="link-line font-mono text-[11px] uppercase tracking-[0.18em]"
              >
                Start a project →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Selected work ────────────────────────────── */}
      <section className="px-5 py-20 md:px-10 md:py-32">
        <div className="mb-14 flex items-baseline justify-between">
          <p className="label">(01) — Selected work</p>
          <Link href="/work" className="label link-line opacity-100 underline underline-offset-4">
            All projects
          </Link>
        </div>

        <div className="space-y-24 md:space-y-36">
          {selected.map((c, i) => (
            <Reveal key={c.slug}>
              <div className={i % 2 === 1 ? "md:w-8/12 md:ml-auto" : "md:w-10/12"}>
                <CaseCard c={c} index={i} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Capabilities ─────────────────────────────── */}
      <section className="px-5 py-20 md:px-10 md:py-32">
        <p className="label mb-14">(02) — Capabilities</p>
        <ul>
          {services.map((s, i) => (
            <li key={s.slug} className="border-t border-line last:border-b">
              <Link
                href={`/services/${s.slug}`}
                className="group flex items-baseline justify-between py-6 transition-colors md:py-8"
              >
                <span className="flex items-baseline gap-6">
                  <span className="label w-8 shrink-0">({s.index})</span>
                  <span className="font-serif text-[clamp(2rem,5.5vw,4.5rem)] font-light leading-none tracking-tightest transition-transform duration-500 ease-out group-hover:translate-x-4">
                    {s.title}
                  </span>
                </span>
                <span className="hidden max-w-xs text-right text-sm leading-snug opacity-0 transition-opacity duration-500 group-hover:opacity-60 lg:block">
                  {s.tagline}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Studio statement ─────────────────────────── */}
      <section className="bg-ink px-5 py-24 text-paper md:px-10 md:py-40">
        <p className="label mb-12 opacity-50">(03) — The studio</p>
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="font-serif text-[clamp(1.6rem,3.6vw,3rem)] font-light leading-[1.28] tracking-tight text-balance">
              We are a small studio with a narrow belief:{" "}
              <em className="italic text-accent">taste compounds.</em>{" "}
              Every project we take either sharpens it or dilutes it — so we
              take few. No account layers, no juniors learning on your budget.
              The people in the pitch are the people on the project, and the
              work is judged by one standard only: would we put our name on it?
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href="/about"
              className="link-line mt-12 inline-block font-mono text-[11px] uppercase tracking-[0.18em]"
            >
              More about the studio →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Client logos ─────────────────────────────── */}
      <section className="border-y border-line px-5 py-14 md:px-10">
        <Marquee items={clients} />
      </section>

      {/* ── Featured case study ──────────────────────── */}
      <section className="relative">
        <Link href={`/work/${featured.slug}`} className="group block">
          <Artwork
            variant={featured.variant}
            colors={featured.palette}
            className="aspect-[16/10] w-full transition-transform duration-[1600ms] ease-out group-hover:scale-[1.03] md:aspect-[21/9]"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/55 via-transparent to-transparent p-5 md:p-10">
            <div className="text-white">
              <p className="label mb-4 opacity-80">
                Featured case — {featured.client}
              </p>
              <h3 className="max-w-4xl font-serif text-[clamp(2rem,5vw,4.5rem)] font-light leading-[1.02] tracking-tightest">
                {featured.title}
              </h3>
              <span className="link-line mt-6 inline-block font-mono text-[11px] uppercase tracking-[0.18em]">
                Read the story ⟶
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* ── Process ──────────────────────────────────── */}
      <section className="px-5 py-20 md:px-10 md:py-32">
        <div className="mb-14 flex items-baseline justify-between">
          <p className="label">(04) — How we work</p>
          <p className="label hidden opacity-50 md:block">Five steps, no theatre</p>
        </div>
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-5">
          {processSteps.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.07}>
              <div className="border-t border-line pt-5">
                <p className="label mb-4">{p.step}</p>
                <h3 className="font-serif text-xl font-normal tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed opacity-60">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────── */}
      <section className="border-y border-line px-5 py-20 md:px-10 md:py-32">
        <p className="label mb-14">(05) — Word of mouth</p>
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.08}>
              <figure className="flex h-full flex-col justify-between border-l border-line pl-6">
                <blockquote className="font-serif text-lg font-light italic leading-snug tracking-tight">
                  “{t.quote}”
                </blockquote>
                <figcaption className="label mt-8">
                  {t.author}
                  <br />
                  <span className="opacity-60">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Journal ──────────────────────────────────── */}
      <section className="px-5 py-20 md:px-10 md:py-32">
        <div className="mb-14 flex items-baseline justify-between">
          <p className="label">(06) — Journal</p>
          <Link href="/journal" className="label link-line opacity-100 underline underline-offset-4">
            All articles
          </Link>
        </div>
        <ul>
          {posts.slice(0, 3).map((p) => (
            <li key={p.slug} className="border-t border-line last:border-b">
              <Link
                href={`/journal/${p.slug}`}
                className="group grid items-baseline gap-2 py-7 md:grid-cols-12 md:py-9"
              >
                <span className="label opacity-60 md:col-span-2">
                  {p.category} · {p.readingTime}
                </span>
                <span className="font-serif text-2xl font-light tracking-tight transition-transform duration-500 ease-out group-hover:translate-x-3 md:col-span-8 md:text-3xl">
                  {p.title}
                </span>
                <span className="label text-right opacity-60 md:col-span-2">
                  {p.date}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
