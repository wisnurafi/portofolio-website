"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about", short: "01", accent: "amber" },
  { label: "Expertise", href: "#expertise", short: "02", accent: "amber" },
  { label: "Experience", href: "#experience", short: "03", accent: "slate" },
  { label: "Stack", href: "#stack", short: "04", accent: "slate" },
  { label: "Projects", href: "#projects", short: "05", accent: "amber" },
  { label: "Contact", href: "#contact", short: "06", accent: "red" },
] as const;

type Accent = (typeof navItems)[number]["accent"];

const ACCENT_BG: Record<Accent, string> = {
  amber: "bg-amber",
  slate: "bg-slate",
  red: "bg-red",
};

const ACCENT_TEXT: Record<Accent, string> = {
  amber: "text-amber",
  slate: "text-slate",
  red: "text-red",
};

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
}

function useActiveSection() {
  const [active, setActive] = useState<string>("about");
  useEffect(() => {
    const ids = navItems.map((i) => i.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { threshold: [0.15, 0.35, 0.6], rootMargin: "-12% 0px -45% 0px" },
    );

    for (const el of els) observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return active;
}

function useClock() {
  // Placeholder deterministik supaya SSR & render pertama client identik
  // (menghindari hydration mismatch). Jam asli baru di-set setelah mount.
  const [time, setTime] = useState("--:--:-- UTC");
  useEffect(() => {
    const tick = () => setTime(formatTime(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);
  return time;
}

function formatTime(d: Date) {
  return d.toISOString().slice(11, 19) + " UTC";
}

export default function TopNav() {
  const [open, setOpen] = useState(false);
  const progress = useScrollProgress();
  const activeId = useActiveSection();
  const time = useClock();
  const activeItem =
    navItems.find((i) => i.href.slice(1) === activeId) ?? navItems[0];

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        )}
      >
        {/* progress strip under nav */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/6"
          aria-hidden
        >
          <div
            className={cn("h-px transition-[width] duration-150", ACCENT_BG[activeItem.accent])}
            style={{ width: `${progress * 100}%`, boxShadow: "0 0 6px currentColor" }}
          />
        </div>

        <div className="relative border-b border-white/8 bg-background/85 backdrop-blur-md">
          <div className="mx-auto flex h-14 max-w-[1600px] items-center gap-3 px-3 md:h-16 md:px-6 lg:gap-6">
            {/* brand */}
            <a
              href="#top"
              className="group flex shrink-0 items-center gap-2.5"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className={cn(
                    "absolute inset-0 animate-glow-pulse rounded-full",
                    ACCENT_BG[activeItem.accent],
                  )}
                />
                <span
                  className={cn(
                    "relative h-2.5 w-2.5 rounded-full ring-1 ring-white/30",
                    ACCENT_BG[activeItem.accent],
                  )}
                />
              </span>
              <span className="font-mono text-[0.7rem] font-black uppercase tracking-[0.18em] text-foreground transition-colors group-hover:text-amber md:text-xs">
                EVIDENCE BOARD
              </span>
              <span className="hidden font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground lg:inline">
                :: WISNU
              </span>
            </a>

            {/* nav rail */}
            <nav className="hidden flex-1 items-center justify-center lg:flex">
              <ul className="flex items-center gap-0.5 border border-white/8 bg-black/30 px-1.5 py-1">
                {navItems.map((item) => {
                  const isActive = item.href.slice(1) === activeId;
                  return (
                    <li key={item.href} className="relative">
                      <a
                        href={item.href}
                        className={cn(
                          "group relative flex items-center gap-2 px-3 py-1.5 font-mono text-[0.62rem] font-black uppercase tracking-[0.14em] transition-all duration-200",
                          isActive
                            ? cn(ACCENT_TEXT[item.accent])
                            : "text-muted-foreground hover:text-foreground",
                        )}
                      >
                        <span
                          className={cn(
                            "font-black opacity-60",
                            isActive && "opacity-100",
                          )}
                        >
                          {item.short}
                        </span>
                        <span>{item.label}</span>
                        {isActive && (
                          <span
                            aria-hidden
                            className={cn(
                              "absolute -bottom-1 left-3 right-3 h-px",
                              ACCENT_BG[item.accent],
                            )}
                            style={{ boxShadow: "0 0 8px currentColor" }}
                          />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* HUD strip */}
            <div className="ml-auto hidden items-center gap-3 lg:flex">
              <span className="hidden font-mono text-[0.58rem] uppercase tracking-[0.16em] text-muted-foreground xl:inline">
                <span className="text-amber">SEC</span>{" // "}
                <span className="text-foreground/90">{activeItem.short}</span>{" "}
                {activeItem.label.toUpperCase()}
              </span>

              <div className="hidden h-3 w-px bg-white/10 xl:block" />

              <span className="hidden items-center gap-1.5 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-slate xl:flex">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 animate-glow-pulse rounded-full bg-slate" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-slate" />
                </span>
                <span className="text-foreground/80">{time}</span>
              </span>

              <div className="hidden h-3 w-px bg-white/10 xl:block" />

              <span className="border border-amber/40 bg-amber/10 px-2 py-1 font-mono text-[0.55rem] font-black uppercase tracking-[0.18em] text-amber">
                <span className="hidden lg:inline">TOP SECRET</span>
                <span className="lg:hidden">SECRET</span>
              </span>
            </div>

            {/* mobile trigger */}
            <button
              type="button"
              className="ml-auto flex h-9 w-9 items-center justify-center border border-white/10 text-muted-foreground transition-colors hover:border-amber/40 hover:text-amber lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={cn(
            "overflow-hidden border-b border-white/8 bg-background/95 backdrop-blur-md transition-all duration-300 lg:hidden",
            open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <nav className="px-3 py-3">
            <ul className="grid grid-cols-1 gap-2 min-[380px]:grid-cols-2">
              {navItems.map((item) => {
                const isActive = item.href.slice(1) === activeId;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "relative flex items-center justify-between border bg-card/80 px-3 py-2.5 transition-all",
                        isActive
                          ? cn("border-current", ACCENT_TEXT[item.accent])
                          : "border-white/8 text-muted-foreground hover:border-white/20 hover:text-foreground",
                      )}
                    >
                      <span className="flex items-center gap-2">
                        <span className="font-mono text-[0.6rem] font-black opacity-70">
                          {item.short}
                        </span>
                        <span className="font-mono text-[0.62rem] font-black uppercase tracking-[0.14em]">
                          {item.label}
                        </span>
                      </span>
                      {isActive && (
                        <span
                          aria-hidden
                          className={cn("h-1.5 w-1.5 rounded-full", ACCENT_BG[item.accent])}
                          style={{ boxShadow: "0 0 6px currentColor" }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-3 flex items-center justify-between border border-white/8 bg-black/40 px-3 py-2">
              <span className="flex items-center gap-1.5 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-slate">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 animate-glow-pulse rounded-full bg-slate" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-slate" />
                </span>
                {time}
              </span>
              <span className="border border-amber/40 bg-amber/10 px-2 py-0.5 font-mono text-[0.55rem] font-black uppercase tracking-[0.18em] text-amber">
                TOP_SECRET
              </span>
            </div>
          </nav>
        </div>
      </header>

      {/* spacer so content isn't hidden behind fixed nav */}
      <div className="h-14 md:h-16" />
    </>
  );
}
