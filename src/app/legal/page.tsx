import { Reveal } from "@/components/motion";

export const metadata = {
  title: "Legal",
  description: "Privacy policy and terms of service.",
};

const privacy = [
  "This is placeholder copy for your privacy policy. Replace it with counsel-reviewed text that reflects how your studio actually collects, stores and processes personal data before going live.",
  "We collect only the information visitors choose to share — typically a name, an email address and project details submitted through the contact form. This information is used solely to respond to inquiries.",
  "We do not sell, rent or trade personal information to third parties. Analytics, if enabled, run without cookies or personal identifiers by default.",
  "Visitors may request access to, correction of, or deletion of their personal data at any time by writing to the contact address published on this site. Requests are honoured within statutory timeframes.",
];

const terms = [
  "This is placeholder copy for your terms of service. Replace it with counsel-reviewed text appropriate to your jurisdiction before launch.",
  "All content on this website — including case study copy, artwork, and design assets — is provided for demonstration purposes in this template and remains the property of its creators until licensed otherwise.",
  "Use of this website does not create a client relationship. Engagement terms are established exclusively through signed agreements.",
  "Liability for use of this website is limited to the fullest extent permitted by applicable law.",
];

export default function LegalPage() {
  return (
    <article className="mx-auto max-w-4xl px-5 pb-32 pt-36 md:pt-48">
      <p className="label mb-8">( Legal )</p>
      <h1 className="font-serif text-[clamp(2.6rem,7vw,6rem)] font-light leading-[1] tracking-tightest">
        The fine print,
        <br />
        <em className="italic">in plain sight.</em>
      </h1>

      <p className="mt-8 border-l-2 border-accent pl-5 text-sm leading-relaxed opacity-60">
        Template note: the following pages contain placeholder legal text.
        Replace them with your own counsel-reviewed policies before publishing.
      </p>

      <section className="mt-20">
        <h2 className="border-t border-line pt-6 font-serif text-3xl font-light tracking-tight">
          Privacy Policy
        </h2>
        <div className="mt-8 space-y-6 leading-relaxed opacity-75">
          {privacy.map((para, i) => (
            <Reveal key={i} y={12}>
              <p>{para}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="border-t border-line pt-6 font-serif text-3xl font-light tracking-tight">
          Terms of Service
        </h2>
        <div className="mt-8 space-y-6 leading-relaxed opacity-75">
          {terms.map((para, i) => (
            <Reveal key={i} y={12}>
              <p>{para}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <p className="mt-20 label">Last updated — August 2026</p>
    </article>
  );
}
