import { cn } from "@/lib/utils";

type SectionFrameProps = {
  children: React.ReactNode;
  className?: string;
  accent?: "amber" | "slate" | "red" | "magenta";
  fileLabel: string;
  fileNumber: string;
  classification?: "PUBLIC" | "INTERNAL" | "CONFIDENTIAL" | "TOP SECRET";
  date?: string;
  sectionId?: string;
};

const ACCENT_BG: Record<string, string> = {
  amber: "bg-amber",
  slate: "bg-slate",
  red: "bg-red",
  magenta: "bg-magenta",
};

const ACCENT_TEXT: Record<string, string> = {
  amber: "text-amber",
  slate: "text-slate",
  red: "text-red",
  magenta: "text-magenta",
};

const ACCENT_HEX: Record<string, string> = {
  amber: "#c9973f",
  slate: "#7a8a99",
  red: "#a85e52",
  magenta: "#9c6f8e",
};

export default function SectionFrame({
  children,
  className,
  accent = "amber",
  fileLabel,
  fileNumber,
  classification = "INTERNAL",
  date,
  sectionId,
}: SectionFrameProps) {
  const stamp = classification.toUpperCase();
  const stampColor =
    classification === "TOP SECRET"
      ? "text-red"
      : classification === "CONFIDENTIAL"
        ? "text-amber"
        : classification === "INTERNAL"
          ? "text-cyan"
          : "text-muted-foreground";

  return (
    <section
      id={sectionId}
      className={cn("wall-section", className)}
      data-reveal
    >
      {/* folder tab + section header band */}
      <div className="relative mb-6 flex min-w-0 flex-wrap items-end gap-3 md:mb-10">
        {/* folder tab */}
        <div className="relative -mb-px min-w-0 max-w-full md:mb-0">
          <div
            className="relative max-w-full px-3 pb-2 pt-3 sm:px-4 md:px-5 md:pb-2.5 md:pt-3.5"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 100%, 12px 100%, 12px 14px, 0 14px)",
              backgroundColor: "rgba(20, 18, 16, 0.95)",
              borderTop: `2px solid var(--frame-accent)`,
              borderRight: "1px solid rgba(255,255,255,0.08)",
              borderLeft: "1px solid rgba(255,255,255,0.08)",
              boxShadow:
                "0 4px 14px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
              ["--frame-accent" as string]: ACCENT_HEX[accent],
            }}
          >
            <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
              <span
                className={cn("h-1.5 w-1.5 rounded-full", ACCENT_BG[accent])}
                style={{ boxShadow: "0 0 8px currentColor" }}
              />
              <span
                className={cn(
                  "font-mono text-[0.56rem] font-black uppercase tracking-[0.14em] sm:text-[0.6rem] sm:tracking-[0.18em]",
                  ACCENT_TEXT[accent],
                )}
              >
                {fileNumber}
              </span>
              <span className="text-[0.6rem] text-muted-foreground/50">{"//"}</span>
              <span className="min-w-0 truncate font-mono text-[0.56rem] uppercase tracking-[0.12em] text-muted-foreground sm:text-[0.6rem] sm:tracking-[0.14em]">
                {fileLabel}
              </span>
            </div>
          </div>
        </div>

        {/* divider line */}
        <div className="relative mb-3 hidden h-px flex-1 md:mb-4 md:block">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/6 to-transparent" />
        </div>

        {/* classification + date on right */}
        <div className="mb-3 hidden items-center gap-3 md:mb-4 md:flex">
          {date && (
            <span className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-muted-foreground/70">
              {date}
            </span>
          )}
          <span
            className={cn(
              "rounded-none border border-current px-2 py-1 font-mono text-[0.55rem] font-black uppercase tracking-[0.18em]",
              stampColor,
            )}
            style={{ opacity: 0.85 }}
          >
            {stamp}
          </span>
        </div>
      </div>

      {/* content area with cork backing */}
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-1 -z-[1] sm:-inset-3 md:-inset-4 cork-backing"
        >
          {/* corner pin cluster top-left */}
          <div className="absolute left-3 top-3 flex gap-1.5">
            <span
              className="h-2 w-2 rounded-full border border-white/15"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), rgba(0,0,0,0.55))",
                boxShadow: "0 1px 2px rgba(0,0,0,0.5)",
              }}
            />
            <span
              className="h-2 w-2 rounded-full border border-white/15"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), rgba(0,0,0,0.55))",
                boxShadow: "0 1px 2px rgba(0,0,0,0.5)",
              }}
            />
          </div>

          {/* single pin bottom-right */}
          <span
            className="absolute bottom-3 right-3 h-2 w-2 rounded-full border border-white/15"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), rgba(0,0,0,0.55))",
              boxShadow: "0 1px 2px rgba(0,0,0,0.5)",
            }}
          />

          {/* tape strips at corners */}
          <span
            aria-hidden
            className="absolute -left-2 top-12 h-5 w-12 rotate-[-8deg]"
            style={{
              background: "rgba(255,255,255,0.06)",
              boxShadow: "0 1px 3px rgba(0,0,0,0.4)",
              clipPath:
                "polygon(8% 0, 22% 14%, 40% 2%, 60% 12%, 80% 0, 100% 10%, 96% 38%, 100% 65%, 92% 88%, 100% 100%, 70% 96%, 48% 100%, 24% 94%, 0 100%, 6% 70%, 0 45%, 5% 20%)",
            }}
          />
          <span
            aria-hidden
            className="absolute -right-2 bottom-16 h-5 w-14 rotate-[6deg]"
            style={{
              background: "rgba(255,255,255,0.06)",
              boxShadow: "0 1px 3px rgba(0,0,0,0.4)",
              clipPath:
                "polygon(8% 0, 22% 14%, 40% 2%, 60% 12%, 80% 0, 100% 10%, 96% 38%, 100% 65%, 92% 88%, 100% 100%, 70% 96%, 48% 100%, 24% 94%, 0 100%, 6% 70%, 0 45%, 5% 20%)",
            }}
          />
        </div>

        {/* rotated stamp at bottom-right of frame */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-2 right-4 z-[1] hidden md:block"
          style={{
            transform: "rotate(-7deg)",
            opacity: 0.55,
          }}
        >
          <div
            className={cn(
              "border-2 px-3 py-1.5 font-mono text-[0.6rem] font-black uppercase tracking-[0.22em]",
              stampColor,
            )}
            style={{ borderColor: "currentColor" }}
          >
            {classification === "TOP SECRET"
              ? "TOP SECRET // DO NOT DISTRIBUTE"
              : classification === "CONFIDENTIAL"
                ? "CONFIDENTIAL // CASE FILE"
                : classification === "INTERNAL"
                  ? "INTERNAL // OPERATIONS"
                  : "PUBLIC RECORD"}
          </div>
        </div>

        {children}
      </div>
    </section>
  );
}
