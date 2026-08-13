"use client";

import { useSyncExternalStore } from "react";

function getReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getServerSnapshot() {
  return false;
}

export default function NoiseOverlay() {
  const reduced = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, getServerSnapshot);

  return (
    <>
      <svg
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[9997] h-full w-full opacity-[0.045]"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[9996] h-full w-full"
        style={{
          background:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.22) 0 1px, transparent 1px 2px)",
          opacity: 0.08,
        }}
      />
      {!reduced && (
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[9995] h-full w-full"
          style={{
            background:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.015) 0 1px, transparent 1px 3px)",
            opacity: 0.35,
          }}
        />
      )}
    </>
  );
}
