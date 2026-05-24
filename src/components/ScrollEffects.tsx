"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    for (const el of elements) {
      el.classList.add("reveal");
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
