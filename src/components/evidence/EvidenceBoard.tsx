"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type EvidenceBoardProps = {
  children: React.ReactNode;
  className?: string;
  withStrings?: boolean;
};

type Pin = {
  x: number;
  y: number;
  accent: string;
  id: string;
};

export default function EvidenceBoard({
  children,
  className,
  withStrings = true,
}: EvidenceBoardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [strings, setStrings] = useState<{ a: Pin; b: Pin; d: number }[]>([]);

  useEffect(() => {
    if (!withStrings) return;
    const board = ref.current;
    if (!board) return;

    const measure = () => {
      const cards = Array.from(
        board.querySelectorAll<HTMLElement>("[data-wall-pool]"),
      );
      const boardRect = board.getBoundingClientRect();
      const measured: Pin[] = cards.map((el, i) => {
        const r = el.getBoundingClientRect();
        return {
          x: r.left + r.width / 2 - boardRect.left,
          y: r.top + 14 - boardRect.top,
          accent: el.dataset.wallPool || "amber",
          id: `${el.tagName}-${i}-${Math.round(r.left)}-${Math.round(r.top)}`,
        };
      });
      // connect nearby pins with red yarn (max 2 per pin, max distance)
      const connections: { a: Pin; b: Pin; d: number }[] = [];
      const maxEdges = 2;
      for (let i = 0; i < measured.length; i++) {
        const edges = measured
          .map((b, j) => ({ b, j, d: Math.hypot(measured[i].x - b.x, measured[i].y - b.y) }))
          .filter((e) => e.j !== i && e.d > 40 && e.d < 320)
          .sort((m, n) => m.d - n.d)
          .slice(0, maxEdges);
        for (const e of edges) {
          const exists = connections.some(
            (c) =>
              (c.a.id === measured[i].id && c.b.id === e.b.id) ||
              (c.a.id === e.b.id && c.b.id === measured[i].id),
          );
          if (!exists) {
            connections.push({ a: measured[i], b: e.b, d: e.d });
          }
        }
      }
      setStrings(connections);
    };

    measure();
    const late = window.setTimeout(measure, 800);
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure, { passive: true });
    return () => {
      window.clearTimeout(late);
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure);
    };
  }, [children, withStrings]);

  return (
    <div ref={ref} className={cn("cork-board evidence-board", className)}>
      {withStrings && strings.length > 0 && (
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-[1] h-full w-full overflow-visible"
        >
          {strings.map((s, i) => {
            const midX = (s.a.x + s.b.x) / 2;
            const midY = (s.a.y + s.b.y) / 2 + s.d * 0.08;
            return (
              <path
                key={`${s.a.id}-${s.b.id}-${i}`}
                d={`M ${s.a.x} ${s.a.y} Q ${midX} ${midY} ${s.b.x} ${s.b.y}`}
                className="yarn-line"
              />
            );
          })}
        </svg>
      )}
      {children}
    </div>
  );
}
