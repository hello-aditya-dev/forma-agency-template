"use client";

import Link from "next/link";
import { Artwork } from "@/components/artwork";
import type { CaseStudy } from "@/lib/data";

export function CaseCard({
  c,
  index,
}: {
  c: CaseStudy;
  index?: number;
}) {
  return (
    <Link href={`/work/${c.slug}`} className="group block">
      <div className="relative overflow-hidden bg-ink">
        <Artwork
          variant={c.variant}
          colors={c.palette}
          className="aspect-[16/10] w-full transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/35 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        <span className="absolute left-5 top-5 bg-paper px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink">
          {c.categories[0]}
        </span>
        {index !== undefined && (
          <span className="absolute right-5 top-5 font-mono text-[11px] text-white/80">
            ({String(index + 1).padStart(2, "0")})
          </span>
        )}
      </div>

      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <p className="label mb-3">
            {c.client} · {c.year}
          </p>
          <h3 className="font-serif text-[clamp(1.6rem,3.2vw,2.6rem)] font-light leading-[1.1] tracking-tightest">
            {c.title}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed opacity-60">
            {c.summary}
          </p>
        </div>
        <span
          aria-hidden
          className="mt-2 hidden shrink-0 text-2xl transition-transform duration-500 ease-out group-hover:translate-x-2 md:block"
        >
          ⟶
        </span>
      </div>
    </Link>
  );
}
