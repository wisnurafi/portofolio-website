"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (!elements.length) return;

    let lastScrollY = window.scrollY;
    let scrollDirection: "down" | "up" = "down";

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollDirection = currentScrollY >= lastScrollY ? "down" : "up";
      lastScrollY = currentScrollY;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const target = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            target.classList.remove("reveal-from-up", "reveal-from-down");
            target.classList.add(
              "is-visible",
              scrollDirection === "down" ? "reveal-from-down" : "reveal-from-up",
            );
          } else {
            target.classList.remove("is-visible");
          }
        }
      },
      { threshold: 0.16, rootMargin: "-8% 0px -8% 0px" },
    );

    for (const el of elements) {
      el.classList.add("reveal", "reveal-from-down");
      const children = Array.from(
        el.querySelectorAll<HTMLElement>("[data-reveal-child]"),
      );

      children.forEach((child, index) => {
        child.classList.add("reveal-child");
        child.style.setProperty("--reveal-delay", `${index * 90}ms`);
      });

      observer.observe(el);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return null;
}
