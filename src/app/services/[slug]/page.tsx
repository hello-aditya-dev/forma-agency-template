import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getService, services } from "@/lib/data";
import { Artwork } from "@/components/artwork";
import { Reveal } from "@/components/motion";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return { title: s.title, description: s.intro };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  return (
    <article>
      <header className="px-5 pb-14 pt-36 md:px-10 md:pt-48">
        <p className="label mb-8">({s.index}) — Service</p>
        <h1 className="font-serif text-[clamp(2.8rem,8vw,7.5rem)] font-light leading-[1] tracking-tightest">
          {s.title}
        </h1>
        <Reveal delay={0.15}>
          <p className="mt-6 font-serif text-[clamp(1.3rem,2.6vw,2rem)] font-light italic opacity-80">
            {s.tagline}
          </p>
        </Reveal>
      </header>

      <Artwork
        variant={s.index === "01" ? "grid" : s.index === "02" ? "arc" : s.index === "03" ? "orbit" : s.index === "04" ? "blocks" : "waves"}
        colors={
          s.index === "01"
            ? ["#123B2E", "#7FB69B"]
            : s.index === "02"
            ? ["#C96F4A", "#2E1F1A"]
            : s.index === "03"
            ? ["#0E1B4D", "#4D7CFE"]
            : s.index === "04"
            ? ["#101010", "#B8F04A"]
            : ["#3B1D5E", "#B79CFF"]
        }
        className="aspect-[21/9] w-full"
      />

      <section className="grid gap-12 px-5 py-20 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-7">
          <Reveal>
            <p className="font-serif text-[clamp(1.4rem,2.6vw,2.1rem)] font-light leading-[1.35] tracking-tight text-balance">
              {s.intro}
            </p>
          </Reveal>
          <div className="mt-10 space-y-6 text-base leading-relaxed opacity-70">
            {s.body.map((para, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p>{para}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <aside className="md:col-span-4 md:col-start-9">
          <Reveal delay={0.1}>
            <div className="border-t border-line pt-6">
              <p className="label mb-6">What you get</p>
              <ul className="space-y-4">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-baseline gap-3 border-b border-line pb-4 text-sm">
                    <span className="text-accent">→</span>
                    {d}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="link-line mt-10 inline-block font-mono text-[11px] uppercase tracking-[0.18em]"
              >
                Start a conversation ⟶
              </Link>
            </div>
          </Reveal>
        </aside>
      </section>
    </article>
  );
}
