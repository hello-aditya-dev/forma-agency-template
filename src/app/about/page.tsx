import Link from "next/link";
import { awards, principles } from "@/lib/data";
import { Artwork } from "@/components/artwork";
import { Reveal } from "@/components/motion";

export const metadata = {
  title: "Studio",
  description:
    "FORMA is an independent digital studio in Amsterdam, London and New York. Fewer projects, deeper work.",
};

export default function AboutPage() {
  return (
    <article>
      <header className="px-5 pb-14 pt-36 md:px-10 md:pt-48">
        <p className="label mb-8">( Studio )</p>
        <h1 className="max-w-6xl font-serif text-[clamp(2.8rem,7.5vw,7rem)] font-light leading-[1.02] tracking-tightest text-balance">
          A small studio, deliberately.
        </h1>
      </header>

      <Artwork variant="arc" colors={["#161412", "#FF4D00"]} className="aspect-[21/9] w-full" />

      {/* Manifesto */}
      <section className="px-5 py-20 md:px-10 md:py-32">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-light leading-[1.3] tracking-tight text-balance">
              FORMA was founded on an unfashionable idea: that a studio should
              be judged by the work it declines. We cap our client list, staff
              every project with senior people, and measure ourselves against
              one question —{" "}
              <em className="italic">would we sign this?</em> It costs us
              volume. It buys us the kind of portfolio that wins the next
              decade, not the next quarter.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-10 text-base leading-relaxed opacity-70 md:grid-cols-2">
            <Reveal delay={0.1}>
              <p>
                Founded in 2016 by designers who kept meeting inside other
                people's agencies, FORMA now counts eleven people across three
                cities — strategists, designers and engineers who sit in the
                same reviews and share the same accountability.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p>
                We work in six-week cycles with published criteria, so you
                always know what "done" means before we start. Most of our
                clients have been with us for years; several started as
                two-pager websites and grew into decade partnerships.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-y border-line px-5 py-20 md:px-10 md:py-32">
        <p className="label mb-14">( Principles )</p>
        <ul className="grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <li className="border-t border-line pt-6">
                <span className="label mb-4 block opacity-50">
                  ({String(i + 1).padStart(2, "0")})
                </span>
                <h3 className="font-serif text-2xl font-light tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed opacity-60">
                  {p.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Approach strip */}
      <section className="px-5 py-20 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] font-light leading-[1.05] tracking-tightest md:col-span-5">
            Our approach,
            <br />
            <em className="italic">in one line each.</em>
          </h2>
          <ol className="space-y-8 md:col-span-6 md:col-start-7">
            {[
              ["Listen first", "Two weeks of questions before a single answer."],
              ["Decide early", "Strategy agreed before pixels move. Reversals are expensive later."],
              ["Design wide", "Three directions argued honestly, not one dressed three ways."],
              ["Build it ourselves", "The team that designs ships. Nothing lost in translation."],
              ["Stay after launch", "Measurement and iteration are part of the engagement, not an upsell."],
            ].map(([title, body], i) => (
              <Reveal key={title} delay={i * 0.05}>
                <li className="flex gap-6 border-b border-line pb-8">
                  <span className="label shrink-0 opacity-50">
                    ({String(i + 1).padStart(2, "0")})
                  </span>
                  <div>
                    <h3 className="font-serif text-xl tracking-tight">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed opacity-60">{body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-ink px-5 py-20 text-paper md:px-10 md:py-32">
        <p className="label mb-14 opacity-50">( Recognition )</p>
        <ul>
          {awards.map((a, i) => (
            <li
              key={`${a.year}-${a.project}`}
              className="group grid items-baseline gap-1 border-t border-paper/15 py-6 last:border-b md:grid-cols-12"
            >
              <span className="label opacity-50 md:col-span-2">{a.year}</span>
              <span className="text-lg transition-transform duration-500 ease-out group-hover:translate-x-2 md:col-span-7">
                {a.award}
              </span>
              <span className="label text-right opacity-60 md:col-span-3">
                {a.project}
              </span>
            </li>
          ))}
        </ul>
        <Link href="/team" className="link-line mt-14 inline-block font-mono text-[11px] uppercase tracking-[0.18em]">
          Meet the team ⟶
        </Link>
      </section>
    </article>
  );
}
