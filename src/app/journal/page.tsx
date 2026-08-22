import Link from "next/link";
import { posts } from "@/lib/data";
import { Reveal } from "@/components/motion";

export const metadata = {
  title: "Journal",
  description: "Notes on craft, business and running a small studio.",
};

export default function JournalPage() {
  return (
    <>
      <header className="px-5 pb-16 pt-36 md:px-10 md:pt-48">
        <p className="label mb-8">( Journal )</p>
        <h1 className="max-w-6xl font-serif text-[clamp(2.8rem,8vw,7.5rem)] font-light leading-[1] tracking-tightest text-balance">
          Notes on craft,
          <br />
          commerce & <em className="italic">conviction.</em>
        </h1>
      </header>

      <section className="px-5 pb-24 md:px-10">
        {/* Featured article */}
        <Reveal>
          <Link
            href={`/journal/${posts[0].slug}`}
            className="group block border-y border-line py-14 md:py-20"
          >
            <p className="label mb-6 opacity-60">
              Latest — {posts[0].category} · {posts[0].readingTime}
            </p>
            <h2 className="max-w-5xl font-serif text-[clamp(2rem,5.5vw,4.75rem)] font-light leading-[1.05] tracking-tightest transition-transform duration-700 ease-out group-hover:translate-x-3">
              {posts[0].title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed opacity-60">
              {posts[0].excerpt}
            </p>
          </Link>
        </Reveal>

        <ul>
          {posts.slice(1).map((p, i) => (
            <li key={p.slug} className="border-b border-line">
              <Link
                href={`/journal/${p.slug}`}
                className="group grid items-baseline gap-2 py-8 md:grid-cols-12 md:py-10"
              >
                <span className="label opacity-60 md:col-span-2">
                  {String(i + 2).padStart(2, "0")} · {p.category}
                </span>
                <span className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-light tracking-tightest transition-transform duration-500 ease-out group-hover:translate-x-3 md:col-span-8">
                  {p.title}
                </span>
                <span className="label text-right opacity-60 md:col-span-2">
                  {p.date} · {p.readingTime}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
