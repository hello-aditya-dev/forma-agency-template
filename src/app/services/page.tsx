import Link from "next/link";
import { services } from "@/lib/data";
import { Reveal } from "@/components/motion";

export const metadata = {
  title: "Services",
  description:
    "Strategy, brand identity, digital design, development and motion — one team, end to end.",
};

export default function ServicesPage() {
  return (
    <>
      <header className="px-5 pb-16 pt-36 md:px-10 md:pt-48">
        <p className="label mb-8">( Services )</p>
        <h1 className="max-w-6xl font-serif text-[clamp(2.8rem,8vw,7.5rem)] font-light leading-[1] tracking-tightest text-balance">
          Five disciplines.
          <br />
          <em className="italic">One</em> accountable team.
        </h1>
      </header>

      <section className="px-5 pb-24 md:px-10">
        <ul>
          {services.map((s, i) => (
            <li key={s.slug} className="border-t border-line last:border-b">
              <Link
                href={`/services/${s.slug}`}
                className="group grid gap-4 py-10 md:grid-cols-12 md:items-baseline md:py-14"
              >
                <span className="label md:col-span-1">({s.index})</span>
                <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] font-light leading-none tracking-tightest transition-transform duration-500 ease-out group-hover:translate-x-3 md:col-span-5">
                  {s.title}
                </h2>
                <p className="max-w-md text-sm leading-relaxed opacity-60 md:col-span-5">
                  {s.tagline}
                </p>
                <span
                  aria-hidden
                  className="hidden text-2xl transition-transform duration-500 ease-out group-hover:translate-x-2 md:col-span-1 md:block md:text-right"
                >
                  ⟶
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Reveal>
          <p className="mt-16 max-w-xl text-base leading-relaxed opacity-70">
            Every engagement is led by a partner and staffed by the people who
            pitched it. We take on a limited number of projects per quarter —
            <Link href="/contact" className="link-line ml-1">
              tell us about yours →
            </Link>
          </p>
        </Reveal>
      </section>
    </>
  );
}
