import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPost, posts } from "@/lib/data";
import { Reveal } from "@/components/motion";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return { title: p.title, description: p.excerpt };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();

  const others = posts.filter((x) => x.slug !== slug).slice(0, 2);

  return (
    <article>
      <header className="mx-auto max-w-4xl px-5 pb-16 pt-36 md:pt-48">
        <p className="label mb-8">
          {p.category} · {p.date} · {p.readingTime}
        </p>
        <h1 className="font-serif text-[clamp(2.4rem,6vw,5rem)] font-light leading-[1.05] tracking-tightest text-balance">
          {p.title}
        </h1>
        <Reveal delay={0.15}>
          <p className="mt-8 font-serif text-xl font-light italic leading-relaxed opacity-70">
            {p.excerpt}
          </p>
        </Reveal>
      </header>

      <div className="mx-auto max-w-2xl space-y-8 px-5 pb-24 text-lg leading-[1.75] opacity-80 md:pb-32">
        {p.body.map((para, i) => (
          <Reveal key={i} delay={Math.min(i * 0.04, 0.2)} y={14}>
            <p>{para}</p>
          </Reveal>
        ))}
      </div>

      {/* More reading */}
      <section className="border-t border-line px-5 py-16 md:px-10 md:py-24">
        <p className="label mb-10">Keep reading</p>
        <div className="grid gap-12 md:grid-cols-2">
          {others.map((o) => (
            <Link key={o.slug} href={`/journal/${o.slug}`} className="group block border-t border-line pt-6">
              <span className="label opacity-60">{o.category}</span>
              <h3 className="mt-3 font-serif text-2xl font-light tracking-tight transition-transform duration-500 ease-out group-hover:translate-x-2">
                {o.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed opacity-60">{o.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
