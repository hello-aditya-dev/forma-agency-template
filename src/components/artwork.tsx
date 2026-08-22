"use client";

import { useId } from "react";

type Variant = "orbit" | "arc" | "waves" | "grid" | "halftone" | "blocks";

export function Artwork({
  variant,
  colors,
  className,
}: {
  variant: Variant;
  colors: [string, string];
  className?: string;
}) {
  const uid = useId().replace(/[:]/g, "");
  const [c1, c2] = colors;

  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label="Abstract project artwork"
    >
      <defs>
        <linearGradient id={`g-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={c1} />
          <stop offset="100%" stopColor={c2} />
        </linearGradient>
        <radialGradient id={`r-${uid}`} cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor={c1} />
          <stop offset="100%" stopColor={c2} />
        </radialGradient>
        <filter id={`n-${uid}`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <pattern
          id={`d-${uid}`}
          width="14"
          height="14"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="3" cy="3" r="2" fill={c1} />
        </pattern>
      </defs>

      <rect width="800" height="600" fill={`url(#g-${uid})`} />

      {variant === "orbit" && (
        <>
          <circle cx="560" cy="180" r="260" fill={`url(#r-${uid})`} opacity="0.9" />
          <circle cx="240" cy="430" r="150" fill="none" stroke="#fff" strokeWidth="1" opacity="0.5" />
          <circle cx="240" cy="430" r="220" fill="none" stroke="#fff" strokeWidth="0.5" opacity="0.3" />
          <circle cx="240" cy="430" r="8" fill="#fff" />
        </>
      )}

      {variant === "arc" && (
        <>
          <path d="M -100 600 A 500 500 0 0 1 900 600" fill="none" stroke="#fff" strokeWidth="1" opacity="0.4" />
          <path d="M -60 600 A 460 460 0 0 1 860 600" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.55" />
          <path d="M -20 600 A 420 420 0 0 1 820 600" fill="none" stroke="#fff" strokeWidth="2" opacity="0.7" />
          <circle cx="400" cy="380" r="90" fill={`url(#r-${uid})`} opacity="0.85" />
        </>
      )}

      {variant === "waves" && (
        <>
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              d={`M -50 ${300 + i * 55} C 200 ${200 + i * 55}, 450 ${420 + i * 40}, 850 ${260 + i * 50}`}
              fill="none"
              stroke="#fff"
              strokeWidth={i % 2 ? "1" : "2"}
              opacity={0.25 + i * 0.12}
            />
          ))}
          <circle cx="640" cy="170" r="120" fill={`url(#r-${uid})`} opacity="0.9" />
        </>
      )}

      {variant === "grid" && (
        <>
          {Array.from({ length: 11 }).map((_, i) => (
            <line key={`v${i}`} x1={80 * i} y1="0" x2={80 * i} y2="600" stroke="#fff" strokeWidth="0.6" opacity="0.28" />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={80 * i} x2="800" y2={80 * i} stroke="#fff" strokeWidth="0.6" opacity="0.28" />
          ))}
          <rect x="320" y="160" width="240" height="240" fill={`url(#r-${uid})`} opacity="0.92" />
          <circle cx="160" cy="440" r="56" fill="#fff" opacity="0.9" />
        </>
      )}

      {variant === "halftone" && (
        <>
          <rect x="0" y="300" width="800" height="300" fill={`url(#d-${uid})`} opacity="0.5" />
          <circle cx="230" cy="230" r="190" fill={`url(#r-${uid})`} />
          <rect x="470" y="330" width="220" height="220" fill="#fff" opacity="0.16" />
        </>
      )}

      {variant === "blocks" && (
        <>
          <rect x="90" y="120" width="280" height="360" fill={`url(#r-${uid})`} opacity="0.95" />
          <rect x="370" y="240" width="340" height="240" fill="#fff" opacity="0.18" />
          <line x1="370" y1="240" x2="710" y2="480" stroke="#fff" strokeWidth="1" opacity="0.5" />
          <circle cx="620" cy="140" r="70" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.7" />
        </>
      )}

      {/* unified grain pass */}
      <rect width="800" height="600" filter={`url(#n-${uid})`} opacity="0.07" />
    </svg>
  );
}
