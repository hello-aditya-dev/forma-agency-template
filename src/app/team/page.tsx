import Link from "next/link";
import { team } from "@/lib/data";
import { Reveal } from "@/components/motion";

export const metadata = {
  title: "Team",
  description:
    "Eleven people across Amsterdam, London and New York. The people who pitch are the people who deliver.",
};

const palette: [string, string][] = [
  ["#C96F4A", "#2E1F1A"],
  ["#0E1B4D", "#4D7CFE"],
  ["#123B2E", "#7FB69B"],
  ["#101010", "#B8F04A"],
];

export default function TeamPage() {
  return (
    <>
      <header className="px-5 pb-16 pt-36 md:px-10 md:pt-48">
        <p className="label mb-8">( People )</p>
        <h1 className="max-w-6xl font-serif text-[clamp(2.8rem,8vw,7.5rem)] font-light leading-[1] tracking-tightest text-balance">
          The people in the pitch
          <br />
          are the people on <em className="italic">the project.</em>
        </h1>
      </header>

      <section className="px-5 pb-24 md:px-10">
        <ul className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => {
            const [c1, c2] = palette[i % palette.length];
            const initials = m.name
              .split(" ")
              .map((w) => w[0])
              .join("");
            return (
              <Reveal key={m.name} delay={(i % 4) * 0.06}>
                <li className="group">
                  <div
                    className="relative flex aspect-[4/5] items-end overflow-hidden p-5 transition-opacity duration-500"
                    style={{ background: `linear-gradient(160deg, ${c1}, ${c2})` }}
                  >
                    <span className="absolute inset-0 flex items-center justify-center font-serif text-[clamp(4rem,9vw,7rem)] font-light italic leading-none text-white/90 transition-transform duration-700 ease-out group-hover:scale-105">
                      {initials}
                    </span>
                    <span className="label relative z-10 bg-paper px-2 py-1 !opacity-100 text-ink">
                      ({String(i + 1).padStart(2, "0")})
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-light tracking-tight">
                    {m.name}
                  </h3>
                  <p className="label mt-2">{m.role}</p>
                  <p className="mt-2 text-sm leading-relaxed opacity-60">
                    {m.focus}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ul>

        <Reveal>
          <div className="mt-24 border-t border-line pt-14 text-center">
            <h2 className="mx-auto max-w-3xl font-serif text-[clamp(1.8rem,4vw,3.25rem)] font-light leading-[1.15] tracking-tightest text-balance">
              We hire slowly, for taste, and keep a short bench.
            </h2>
            <Link
              href="/careers"
              className="link-line mt-8 inline-block font-mono text-[11px] uppercase tracking-[0.18em]"
            >
              Open roles ⟶
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
