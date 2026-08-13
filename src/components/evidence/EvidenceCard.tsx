import { cn } from "@/lib/utils";

type Accent = "amber" | "slate" | "red" | "magenta";
type Damage = "torn" | "creased" | "crumpled" | "none";

type EvidenceCardProps = {
  children: React.ReactNode;
  className?: string;
  accent?: Accent;
  variant?: "accent" | "mono";
  rotate?: number;
  colSpan?: string;
  pin?: "center" | "left" | "right";
  tape?: boolean | "torn" | "mask";
  tapeColor?: Accent | "white";
  tapeSide?: "top" | "top-left" | "top-right";
  damage?: Damage;
};

export default function EvidenceCard({
  children,
  className,
  accent = "amber",
  variant = "accent",
  rotate = 0,
  colSpan = "lg:col-span-4",
  pin = "center",
  tape = false,
  tapeColor = "white",
  tapeSide = "top",
  damage = "none",
}: EvidenceCardProps) {
  const pinClass = {
    center: "left-1/2 -translate-x-1/2",
    left: "left-5",
    right: "right-5",
  };

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

  const baseClass = variant === "mono" ? "evidence-card-mono" : "evidence-card";

  return (
    <div
      className={cn(
        baseClass,
        `${baseClass}-${accent}`,
        "col-span-full sm:col-span-1",
        colSpan,
        "group card-lift",
        damage === "torn" && "paper-torn",
        className,
      )}
      style={{
        transform: `rotate(${rotate}deg)`,
        ["--note-rotate" as string]: `${rotate}deg`,
      }}
      data-wall-pool={accent}
      data-reveal-child
    >
      <span className="paper-fibers" aria-hidden />
      <span className="paper-ink" aria-hidden />
      <span className="paper-edge-wear" aria-hidden />
      {damage === "creased" && <span className="paper-crease" aria-hidden />}
      {damage === "crumpled" && <span className="paper-crumple" aria-hidden />}
      {damage === "torn" && <span className="paper-crumple" aria-hidden />}
      <span className="dog-ear" aria-hidden />
      <span className={cn("board-pin top-2 z-10", `board-pin-${accent}`, pinClass[pin])} />
      {tape && (
        <span
          className={cn(tapeBase, tapeColorClass, tapePos[tapeSide])}
          aria-hidden
        />
      )}
      <div className="relative z-[2]">{children}</div>
    </div>
  );
}
