import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[100svh] flex-col items-start justify-center px-5 md:px-10">
      <p className="label mb-8">( Error 404 )</p>
      <h1 className="font-serif text-[clamp(3rem,10vw,9rem)] font-light leading-[1] tracking-tightest">
        This page went
        <br />
        <em className="italic text-accent">somewhere else.</em>
      </h1>
      <p className="mt-8 max-w-md text-base leading-relaxed opacity-70">
        The link may be old, or the work may have moved on. Either way, the way
        back is short.
      </p>
      <Link
        href="/"
        className="link-line mt-10 font-mono text-[11px] uppercase tracking-[0.18em]"
      >
        ← Back to start
      </Link>
    </section>
  );
}
