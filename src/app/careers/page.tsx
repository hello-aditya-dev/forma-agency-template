import Link from "next/link";
import { jobs } from "@/lib/data";
import { Reveal } from "@/components/motion";

export const metadata = {
  title: "Careers",
  description:
    "We hire slowly, for taste, and keep a short bench. See open roles at FORMA.",
};

export default function CareersPage() {
  return (
    <>
      <header className="px-5 pb-16 pt-36 md:px-10 md:pt-48">
        <p className="label mb-8">( Careers )</p>
        <h1 className="max-w-6xl font-serif text-[clamp(2.8rem,8vw,7.5rem)] font-light leading-[1] tracking-tightest text-balance">
          We hire slowly,
          <br />
          for <em className="italic">taste.</em>
        </h1>
      </header>

      <section className="grid gap-16 px-5 pb-24 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <Reveal>
            <p className="font-serif text-[clamp(1.4rem,2.4vw,2rem)] font-light leading-[1.35] tracking-tight">
              No ping-pong tables, no mandatory fun. A small senior team, real
              ownership, and clients who expect your best work.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <ul className="mt-10 space-y-3 border-t border-line pt-8 text-sm leading-relaxed opacity-70">
              <li>→ Four-day summer weeks, every July and August</li>
              <li>→ €2,000 annual craft budget — books, courses, conferences</li>
              <li>→ 20% of your time reserved for self-directed work</li>
              <li>→ Profit share after year one</li>
              <li>→ Studios in Amsterdam & London, remote-friendly across EU</li>
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-md text-sm leading-relaxed opacity-60">
              Nothing matching? We keep a short bench of people we'd hire the
              moment a seat opens. Send three projects you're proud of to{" "}
              <a href="mailto:talent@forma.studio" className="link-line">
                talent@forma.studio
              </a>
              .
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <p className="label mb-8">Open roles</p>
          <ul>
            {jobs.map((j) => (
              <li key={j.title} className="border-t border-line last:border-b">
                <Link
                  href={`mailto:talent@forma.studio?subject=${encodeURIComponent(`Application — ${j.title}`)}`}
                  className="group grid gap-3 py-8 md:grid-cols-9 md:items-baseline"
                >
                  <h2 className="font-serif text-2xl font-light tracking-tight transition-transform duration-500 ease-out group-hover:translate-x-2 md:col-span-5">
                    {j.title}
                  </h2>
                  <span className="label opacity-60 md:col-span-2">{j.location}</span>
                  <span className="label text-right opacity-60 md:col-span-2">{j.type}</span>
                  <p className="text-sm leading-relaxed opacity-50 md:col-span-9">{j.blurb}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
