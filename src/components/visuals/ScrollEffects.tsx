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
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add("is-visible");
          } else {
            target.classList.remove("is-visible");
          }
        }
      },
      { threshold: 0.12, rootMargin: "-6% 0px -6% 0px" },
    );

    for (const el of elements) {
      el.classList.add("reveal");
      const children = Array.from(
        el.querySelectorAll<HTMLElement>("[data-reveal-child]"),
      );

      children.forEach((child, index) => {
        child.classList.add("reveal-child");
        child.style.setProperty("--reveal-delay", `${index * 80}ms`);
      });

      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
