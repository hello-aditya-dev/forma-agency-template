"use client";

import { useRef, useState } from "react";
import { Artwork } from "@/components/artwork";
import type { CaseStudy } from "@/lib/data";

function Phase({
  index,
  label,
  heading,
  body,
  children,
  flip = false,
}: {
  index: string;
  label: string;
  heading: string;
  body: string;
  children: React.ReactNode;
  flip?: boolean;
}) {
  return (
    <section className="px-5 py-16 md:px-10 md:py-28">
      <div className="grid gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-3">
          <p className="label md:sticky md:top-28">
            ({index}) — {label}
          </p>
        </div>
        <div className={`md:col-span-9 ${flip ? "md:order-first" : ""}`}>
          <div className="relative overflow-hidden">{children}</div>
          <h3 className="mt-10 max-w-3xl font-serif text-[clamp(1.7rem,3.4vw,2.75rem)] font-light leading-[1.15] tracking-tightest text-balance">
            {heading}
          </h3>
          <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-70">
            {body}
          </p>
        </div>
      </div>
    </section>
  );
}

function InteractiveScreen({ c }: { c: CaseStudy }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setPos({
          x: ((e.clientX - r.left) / r.width) * 100,
          y: ((e.clientY - r.top) / r.height) * 100,
        });
      }}
      onMouseLeave={() => setPos({ x: 50, y: 50 })}
      className="relative aspect-video cursor-crosshair overflow-hidden bg-ink transition-colors"
      role="img"
      aria-label="Interactive product screen"
    >
      {/* browser chrome */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-white/25" />
        <span className="h-2 w-2 rounded-full bg-white/25" />
        <span className="h-2 w-2 rounded-full bg-white/25" />
        <span className="ml-4 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
          {c.slug.replace(/-/g, "")}.experience
        </span>
      </div>

      {/* pointer-reactive field */}
      <div
        className="absolute inset-0 transition-[background] duration-200"
        style={{
          background: `radial-gradient(600px circle at ${pos.x}% ${pos.y}%, ${c.palette[0]}, transparent 65%), linear-gradient(135deg, #161412, ${c.palette[1]})`,
        }}
      />

      {/* floating UI fragments */}
      <div
        className="absolute inset-0 p-6 pt-14 transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: `translate(${(pos.x - 50) * -0.03}px, ${(pos.y - 50) * -0.05}px)`,
        }}
      >
        <div className="flex h-full flex-col justify-between">
          <div className="flex items-start justify-between">
            <div className="h-2 w-24 rounded-full bg-white/30" />
            <div className="h-2 w-10 rounded-full bg-white/15" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="rounded-sm border border-white/10 bg-white/[0.04] p-3 backdrop-blur-sm"
              >
                <div className="mb-2 h-1.5 w-8 rounded-full bg-white/20" />
                <div
                  className="h-10 rounded-sm"
                  style={{
                    background: `linear-gradient(to top right, transparent, rgba(255,255,255,${
                      0.08 + i * 0.07
                    }))`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <span className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
        Move cursor — live preview
      </span>
    </div>
  );
}

export function Storyteller({ c }: { c: CaseStudy }) {
  return (
    <>
      <Phase index="01" label="Challenge" heading={c.challenge.heading} body={c.challenge.body}>
        <Artwork variant={c.variant} colors={c.palette} className="aspect-[21/9] w-full" />
      </Phase>

      <Phase index="02" label="Approach" heading={c.approach.heading} body={c.approach.body} flip>
        <Artwork variant={c.variant === "orbit" ? "waves" : "orbit"} colors={[c.palette[1], c.palette[0]]} className="aspect-[16/9] w-full md:w-3/4" />
      </Phase>

      <Phase index="03" label="Solution" heading={c.solution.heading} body={c.solution.body}>
        <InteractiveScreen c={c} />
      </Phase>

      <section className="bg-ink px-5 py-16 text-paper md:px-10 md:py-28">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <p className="label">(04) — Result</p>
          </div>
          <div className="md:col-span-9">
            <h3 className="max-w-3xl font-serif text-[clamp(1.7rem,3.4vw,2.75rem)] font-light leading-[1.15] tracking-tightest text-balance">
              {c.result.heading}
            </h3>
            <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-70">
              {c.result.body}
            </p>

            <div className="mt-16 grid grid-cols-1 gap-10 border-t border-paper/20 pt-10 sm:grid-cols-3">
              {c.metrics.map((m) => (
                <div key={m.label}>
                  <p className="font-serif text-[clamp(2.6rem,5vw,4.5rem)] font-light leading-none tracking-tightest text-accent">
                    {m.value}
                  </p>
                  <p className="label mt-3 opacity-60">{m.label}</p>
                </div>
              ))}
            </div>

            <figure className="mx-auto mt-24 max-w-3xl text-center">
              <blockquote className="font-serif text-[clamp(1.5rem,3vw,2.4rem)] font-light italic leading-snug tracking-tight">
                “{c.testimonial.quote}”
              </blockquote>
              <figcaption className="label mt-8 opacity-60">
                {c.testimonial.name} — {c.testimonial.role}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
