"use client";

import { cn } from "@/lib/utils";

type RadarScanProps = {
  className?: string;
  size?: number;
};

export default function RadarScan({ className, size = 320 }: RadarScanProps) {
  return (
    <div
      className={cn("relative flex items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 320 320"
        fill="none"
        aria-hidden
        className="absolute inset-0"
      >
        <defs>
          <radialGradient id="radar-gradient" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="rgba(34, 211, 238, 0.35)" />
            <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
          </radialGradient>
        </defs>

        <circle cx="160" cy="160" r="150" stroke="rgba(34,211,238,0.12)" strokeWidth="1" />
        <circle cx="160" cy="160" r="110" stroke="rgba(34,211,238,0.10)" strokeWidth="1" />
        <circle cx="160" cy="160" r="70" stroke="rgba(34,211,238,0.08)" strokeWidth="1" />
        <line x1="160" y1="10" x2="160" y2="310" stroke="rgba(34,211,238,0.10)" strokeWidth="1" />
        <line x1="10" y1="160" x2="310" y2="160" stroke="rgba(34,211,238,0.10)" strokeWidth="1" />

        <g className="animate-radar-sweep" style={{ transformOrigin: "160px 160px" }}>
          <path
            d="M160 160 L160 10 A150 150 0 0 1 310 160 Z"
            fill="url(#radar-gradient)"
            opacity="0.6"
          />
        </g>
      </svg>
    </div>
  );
}
