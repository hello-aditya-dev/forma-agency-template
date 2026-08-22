"use client";

import { useState } from "react";
import { site } from "@/lib/data";

const budgets = ["€25–50k", "€50–100k", "€100–250k", "€250k+"];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", budget: budgets[1], message: "" });

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
    `New project — ${form.company || form.name}`
  )}&body=${encodeURIComponent(
    `${form.message}\n\n—\n${form.name}${form.company ? `, ${form.company}` : ""}\nBudget: ${form.budget}`
  )}`;

  const field =
    "w-full border-b border-line bg-transparent py-3 text-base outline-none transition-colors placeholder:text-ink/30 focus:border-accent";

  return (
    <>
      <header className="px-5 pb-16 pt-36 md:px-10 md:pt-48">
        <p className="label mb-8">( Contact )</p>
        <h1 className="max-w-6xl font-serif text-[clamp(2.8rem,8vw,7.5rem)] font-light leading-[1] tracking-tightest text-balance">
          Tell us what
          <br />
          you're <em className="italic">building.</em>
        </h1>
      </header>

      <section className="grid gap-16 px-5 pb-24 md:grid-cols-12 md:px-10">
        <div className="md:col-span-7">
          <div className="space-y-10">
            <div className="grid gap-10 sm:grid-cols-2">
              <label className="block">
                <span className="label mb-2 block">Your name *</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ada Lovelace"
                  className={field}
                />
              </label>
              <label className="block">
                <span className="label mb-2 block">Email *</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="ada@company.com"
                  className={field}
                />
              </label>
            </div>
            <div className="grid gap-10 sm:grid-cols-2">
              <label className="block">
                <span className="label mb-2 block">Company</span>
                <input
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="Company or project"
                  className={field}
                />
              </label>
              <label className="block">
                <span className="label mb-2 block">Budget</span>
                <select
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className={`${field} cursor-pointer appearance-none`}
                >
                  {budgets.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="block">
              <span className="label mb-2 block">Project *</span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="A few honest sentences beat a formal brief."
                className={`${field} resize-none`}
              />
            </label>
            <a
              href={mailto}
              onClick={(e) => {
                if (!form.name || !form.email || !form.message) {
                  e.preventDefault();
                  alert("Name, email and project are required.");
                }
              }}
              className="inline-block bg-ink px-10 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition-colors hover:bg-accent"
            >
              Send inquiry ⟶
            </a>
          </div>
        </div>

        <aside className="space-y-12 border-t border-line pt-10 md:col-span-4 md:col-start-9 md:border-l md:border-t-0 md:pl-10 md:pt-0">
          <div>
            <p className="label mb-4">Direct</p>
            <a href={`mailto:${site.email}`} className="link-line block py-1 text-lg">
              {site.email}
            </a>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="link-line block py-1 text-lg">
              {site.phone}
            </a>
          </div>
          {site.locations.map((l) => (
            <div key={l.city}>
              <p className="label mb-3">{l.city}</p>
              <p className="text-sm leading-relaxed opacity-60">{l.detail}</p>
            </div>
          ))}
          <div>
            <p className="label mb-3">Response time</p>
            <p className="text-sm leading-relaxed opacity-60">
              Every inquiry is read by a partner. Expect a reply within two
              business days.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
