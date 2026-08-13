import { cn } from "@/lib/utils";

type EvidencePhotoProps = {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
  colSpan?: string;
  caption?: string;
  tape?: boolean | "torn" | "mask";
  tapeColor?: "amber" | "slate" | "red" | "magenta" | "white";
  tapeSide?: "top" | "top-left" | "top-right";
  pinColor?: "amber" | "slate" | "red" | "magenta";
};

export default function EvidencePhoto({
  children,
  className,
  rotate = 0,
  colSpan = "lg:col-span-4",
  caption,
  tape = false,
  tapeColor = "white",
  tapeSide = "top",
  pinColor = "amber",
}: EvidencePhotoProps) {
  const tapeBase =
    tape === "torn"
      ? "tape-piece tape-piece-torn h-5 w-16"
      : tape === "mask"
        ? "tape-piece tape-piece-mask h-5 w-16"
        : "tape-piece";

  const tapeColorClass =
    tapeColor === "white"
      ? "bg-white/8"
      : `tape-${tapeColor}`;

  const tapePos = {
    top: "-top-2 left-1/2 -translate-x-1/2 rotate-[-2deg]",
    "top-left": "-top-2 left-3 rotate-[-6deg]",
    "top-right": "-top-2 right-3 rotate-[5deg]",
  };

  return (
    <div
      className={cn("evidence-photo group card-lift", colSpan, className)}
      style={{
        transform: `rotate(${rotate}deg)`,
        ["--note-rotate" as string]: `${rotate}deg`,
      }}
      data-wall-pool="amber"
      data-reveal-child
    >
      <span className="paper-fibers" aria-hidden />
      <span className="paper-ink" aria-hidden />
      <span className="paper-edge-wear" aria-hidden />
      <span className="dog-ear" aria-hidden />
      <span className={cn("board-pin left-1/2 top-3 z-10 -translate-x-1/2", `board-pin-${pinColor}`)} />
      {tape && (
        <span
          className={cn(tapeBase, tapeColorClass, tapePos[tapeSide])}
          aria-hidden
        />
      )}
      <div className="relative z-[2]">{children}</div>
      {caption ? (
        <p className="relative z-[2] mt-2 px-2 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-muted-foreground">
          {caption}
        </p>
      ) : null}
    </div>
  );
}
