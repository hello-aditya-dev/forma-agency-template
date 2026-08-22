import { ReactNode } from "react";
import { MaskLine } from "@/components/motion";

export function SectionHead({
  kicker,
  children,
  dark = false,
}: {
  kicker: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className={dark ? "text-paper" : ""}>
      <p className="label mb-8">{kicker}</p>
      <h2 className="font-serif text-[clamp(2.2rem,5.5vw,4.75rem)] font-light leading-[1.05] tracking-tightest text-balance">
        {children}
      </h2>
    </div>
  );
}

export { MaskLine };
