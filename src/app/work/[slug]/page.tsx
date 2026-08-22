import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, getCase } from "@/lib/data";
import { Artwork } from "@/components/artwork";
import { Storyteller } from "@/components/storyteller";
import { Reveal } from "@/components/motion";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return {};
  return { title: `${c.client} — ${c.title}`, description: c.summary };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();

  const next =
    caseStudies[(caseStudies.findIndex((x) => x.slug === slug) + 1) % caseStudies.length];

  return (
    <article>
      {/* Hero */}
      <header className="px-5 pb-14 pt-36 md:px-10 md:pt-48">
        <p className="label mb-8">
          {c.client} · {c.sector} · {c.year}
        </p>
        <h1 className="max-w-6xl font-serif text-[clamp(2.8rem,8vw,7.5rem)] font-light leading-[1] tracking-tightest text-balance">
          {c.title}
        </h1>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed opacity-70">
            {c.summary}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-2">
            {c.categories.map((cat) => (
              <li key={cat} className="label">
                {cat}
              </li>
            ))}
          </ul>
        </Reveal>
      </header>

      <Artwork variant={c.variant} colors={c.palette} className="aspect-[16/9] w-full md:aspect-[21/9]" />

      <Storyteller c={c} />

      {/* Next project */}
      <Link href={`/work/${next.slug}`} className="group block border-t border-line px-5 py-20 md:px-10 md:py-32">
        <p className="label mb-6">Next project</p>
        <h2 className="font-serif text-[clamp(2.4rem,7vw,6.5rem)] font-light leading-[1] tracking-tightest transition-transform duration-700 ease-out group-hover:translate-x-4">
          {next.client}
          <span className="text-accent"> ⟶</span>
        </h2>
      </Link>
    </article>
  );
}
