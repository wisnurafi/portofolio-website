"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type DecodedTextProps = {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "p";
  delay?: number;
};

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

export default function DecodedText({
  children,
  className,
  as: Tag = "span",
  delay = 0,
}: DecodedTextProps) {
  const [display, setDisplay] = useState("");
  const lockedRef = useRef<boolean[]>([]);
  const frameRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const chars = children.split("");
    const totalFrames = Math.max(40, chars.length * 7);
    lockedRef.current = new Array(chars.length).fill(false);
    frameRef.current = 0;

    const start = setTimeout(() => {
      const step = () => {
        const frame = frameRef.current;
        const progress = frame / totalFrames;
        const locked = lockedRef.current;

        const out = chars
          .map((char, i) => {
            if (char === " ") return " ";
            if (locked[i]) return char;

            const charProgress = i / chars.length;
            const settleThreshold = charProgress + 0.08;

            if (progress >= settleThreshold) {
              locked[i] = true;
              return char;
            }

            if (progress < charProgress) return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

            // transition zone: mostly glyphs, occasional real char hint
            return Math.random() > 0.78
              ? char
              : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("");

        const hasUnlockedChars = locked.some((v) => !v);
        const isDone = frame >= totalFrames || !hasUnlockedChars;

        setDisplay(isDone ? children : out);
        frameRef.current += 1;

        if (!isDone) {
          rafRef.current = requestAnimationFrame(step);
        }
      };

      rafRef.current = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(start);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [children, delay]);

  return (
    <Tag className={cn("inline-block", className)}>
      {display || children.split("").map(() => "\u00A0").join("")}
    </Tag>
  );
}
