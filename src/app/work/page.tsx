"use client";

import { useState } from "react";
import { caseStudies, type Category } from "@/lib/data";
import { CaseCard } from "@/components/case-card";
import { Reveal } from "@/components/motion";

const filters: ("All" | Category)[] = [
  "All",
  "Branding",
  "Digital",
  "Strategy",
  "Development",
];

export default function WorkPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible =
    active === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.categories.includes(active));

  return (
    <>
      <header className="px-5 pb-12 pt-36 md:px-10 md:pt-48">
        <p className="label mb-8">( Work )</p>
        <h1 className="max-w-6xl font-serif text-[clamp(2.8rem,8vw,7.5rem)] font-light leading-[1] tracking-tightest text-balance">
          Projects that had to <em className="italic">work</em> — and did.
        </h1>
      </header>

      <div className="sticky top-0 z-30 border-y border-line bg-paper/90 px-5 py-4 backdrop-blur-sm md:px-10">
        <ul className="flex flex-wrap gap-x-8 gap-y-2">
          {filters.map((f) => (
            <li key={f}>
              <button
                onClick={() => setActive(f)}
                className={`label transition-opacity ${
                  active === f ? "text-accent opacity-100" : "opacity-50 hover:opacity-100"
                }`}
              >
                {f}
              </button>
            </li>
          ))}
          <li className="ml-auto hidden font-mono text-[11px] uppercase tracking-[0.18em] opacity-40 md:block">
            {visible.length} projects
          </li>
        </ul>
      </div>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-x-10 gap-y-24 md:grid-cols-2 md:gap-y-32">
          {visible.map((c, i) => (
            <Reveal key={c.slug} className={i % 3 === 0 ? "" : "md:mt-16"}>
              <CaseCard c={c} />
            </Reveal>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="py-20 text-center font-serif text-2xl italic opacity-60">
            Nothing here yet.
          </p>
        )}
      </section>
    </>
  );
}
