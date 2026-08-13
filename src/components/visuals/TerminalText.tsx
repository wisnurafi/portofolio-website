"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type TerminalTextProps = {
  lines: string[];
  className?: string;
  lineClassName?: string;
  prefix?: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
  showCursor?: boolean;
};

export default function TerminalText({
  lines,
  className,
  lineClassName,
  prefix = ">",
  speed = 32,
  delay = 300,
  loop = false,
  showCursor = true,
}: TerminalTextProps) {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);

  const linesRef = useRef(lines);
  const currentLineRef = useRef(currentLine);
  const currentCharRef = useRef(currentChar);

  useEffect(() => {
    linesRef.current = lines;
  }, [lines]);

  useEffect(() => {
    currentLineRef.current = currentLine;
  }, [currentLine]);

  useEffect(() => {
    currentCharRef.current = currentChar;
  }, [currentChar]);

  useEffect(() => {
    if (!lines.length) return;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        const lineIndex = currentLineRef.current;
        const charIndex = currentCharRef.current;
        const currentLines = linesRef.current;

        if (lineIndex >= currentLines.length) {
          clearInterval(interval);
          return;
        }

        const line = currentLines[lineIndex];

        if (charIndex < line.length) {
          setCurrentChar(charIndex + 1);
          return;
        }

        // line finished
        setDisplayed((d) => {
          const next = [...d];
          next[lineIndex] = line;
          return next;
        });

        if (lineIndex < currentLines.length - 1) {
          setCurrentLine(lineIndex + 1);
          setCurrentChar(0);
          return;
        }

        if (loop) {
          setDisplayed([]);
          setCurrentLine(0);
          setCurrentChar(0);
          return;
        }

        setDone(true);
        clearInterval(interval);
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [lines.length, speed, delay, loop]);

  return (
    <div className={cn("font-mono", className)}>
      {lines.map((line, i) => {
        const isActive = i === currentLine;
        const text = displayed[i] ?? (isActive ? line.slice(0, currentChar) : "");
        return (
          <div
            key={`${i}-${line}`}
            className={cn(
              "flex items-start gap-2",
              i > currentLine && !displayed[i] && "opacity-0",
              lineClassName,
            )}
          >
            <span className="shrink-0 text-cyan-glow/70 select-none">{prefix}</span>
            <span className="whitespace-pre-wrap break-words">
              {text}
              {isActive && showCursor && !done && (
                <span className="ml-0.5 inline-block h-4 w-2 animate-cursor bg-current align-middle" />
              )}
            </span>
          </div>
        );
      })}
    </div>
  );
}
