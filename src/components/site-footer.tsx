"use client";

import Link from "next/link";
import { site } from "@/lib/data";
import { MaskLine } from "@/components/motion";

const menu = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "Studio" },
  { href: "/team", label: "Team" },
  { href: "/journal", label: "Journal" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="px-5 pb-10 pt-24 md:px-10 md:pt-36">
        <p className="label mb-8 opacity-50">( Next )</p>

        <h2 className="font-serif text-[clamp(2.8rem,8vw,7.5rem)] font-light leading-[1.02] tracking-tightest">
          <MaskLine>Have work</MaskLine>
          <MaskLine delay={0.08}>
            going <em className="italic text-accent">somewhere?</em>
          </MaskLine>
        </h2>

        <a
          href={`mailto:${site.email}`}
          className="link-line mt-10 inline-block font-serif text-[clamp(1.4rem,3.5vw,2.75rem)] font-light tracking-tight"
        >
          {site.email}
        </a>

        <div className="mt-20 grid gap-12 border-t border-paper/15 pt-12 md:grid-cols-4">
          <div>
            <p className="label mb-6 opacity-50">Menu</p>
            <ul className="space-y-3">
              {menu.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link-line text-sm opacity-80">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label mb-6 opacity-50">Social</p>
            <ul className="space-y-3">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="link-line text-sm opacity-80">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="label mb-6 opacity-50">Studios</p>
            <ul className="space-y-3">
              {site.locations.map((l) => (
                <li key={l.city} className="flex justify-between text-sm opacity-80 md:max-w-xs">
                  <span>{l.city}</span>
                  <span className="opacity-60">{l.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-paper/15 pt-6 text-[11px] uppercase tracking-[0.18em] opacity-60 md:flex-row">
          <p>© {new Date().getFullYear()} FORMA®. All rights reserved.</p>
          <p>The website system for studios that sell high-value work.</p>
          <a href="#top" className="link-line w-max">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
