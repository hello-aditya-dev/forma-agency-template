"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/data";

const primary = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "Studio" },
  { href: "/journal", label: "Journal" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-5 py-5 md:px-10 md:py-7">
          <Link
            href="/"
            className="text-[15px] font-semibold tracking-tightest text-white"
          >
            FORMA<span className="align-super text-[9px]">®</span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {primary.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`link-line font-mono text-[11px] uppercase tracking-[0.18em] text-white ${
                  pathname.startsWith(l.href) ? "opacity-100" : "opacity-60"
                } hover:opacity-100`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-white"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink px-5 pb-8 pt-28 text-paper md:px-10"
          >
            <nav className="flex flex-col">
              {[...primary, { href: "/contact", label: "Contact" }].map(
                (l, i) => (
                  <span key={l.href} className="block overflow-hidden border-b border-paper/10">
                    <motion.span
                      className="group flex items-baseline justify-between py-1"
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "110%" }}
                      transition={{
                        duration: 0.7,
                        delay: 0.15 + i * 0.06,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <Link
                        href={l.href}
                        className="font-serif text-[clamp(3rem,9vw,7rem)] font-light leading-[1.05] tracking-tightest transition-transform duration-500 ease-out group-hover:translate-x-4"
                      >
                        {l.label}
                      </Link>
                      <span className="label hidden opacity-40 md:block">
                        (0{i + 1})
                      </span>
                    </motion.span>
                  </span>
                )
              )}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between"
            >
              <a
                href={`mailto:${site.email}`}
                className="link-line w-max text-lg"
              >
                {site.email}
              </a>
              <p className="label max-w-xs leading-relaxed">
                {site.locations.map((l) => l.city).join(" · ")}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
