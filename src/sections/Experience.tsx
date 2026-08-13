import EvidenceBoard from "@/components/evidence/EvidenceBoard";
import EvidenceCard from "@/components/evidence/EvidenceCard";
import SectionFrame from "@/components/evidence/SectionFrame";
import Avatar from "@/components/visuals/Avatar";
import { cn } from "@/lib/utils";

const cases = [
  {
    id: "CASE 01",
    title: "The one machine problem",
    aside: "One user, one machine, clean everywhere else.",
    panels: [
      "A desktop app crashed for exactly one user while every test machine looked fine.",
      "The dump pointed to an access violation that only showed up with a specific locale and timing window.",
      "I narrowed it down to init order, wrote a repro, and made the fix path small enough to act on.",
    ],
    tone: "amber" as const,
  },
  {
    id: "CASE 02",
    title: "The auth check that was not enough",
    aside: "The check existed. The trust model did not.",
    panels: [
      "The endpoint had an auth check, so it looked safe at first glance.",
      "A replayed request exposed a branch after the check that still trusted user controlled state.",
      "I proved the impact end to end, documented the boundary issue, and made the priority obvious.",
    ],
    tone: "red" as const,
  },
];

// Field log uses Now/Past as the only color signal — magenta/amber semantic.
// Inside each entry, no per-card accent — just label color.
const logs = [
  { tag: "Now" as const, role: "Systems Software Engineer", company: "BeyondSoft Singapore", labelClass: "text-amber" },
  { tag: "Now" as const, role: "Offensive Security Engineer", company: "Private clients", labelClass: "text-red" },
  { tag: "Past" as const, role: "Independent Penetration Tester", company: "Web and network", labelClass: "text-slate" },
  { tag: "Past" as const, role: "Game Security Research", company: "Client integrity and RE", labelClass: "text-amber" },
];

const TAG_MAP: Record<string, string> = {
  Now: "status-tag-amber",
  Past: "status-tag-slate",
};

export default function Experience() {
  return (
    <SectionFrame
      sectionId="experience"
      fileNumber="CASE FILES // 03"
      fileLabel="Work in real situations"
      accent="amber"
      classification="CONFIDENTIAL"
      date="2026.08.13"
    >
      <EvidenceBoard className="items-start">
        {cases.map((c, ci) => (
          <EvidenceCard
            key={c.id}
            variant="accent"
            accent={c.tone}
            rotate={ci % 2 === 0 ? -0.8 : 0.8}
            colSpan="lg:col-span-6"
            damage={ci === 0 ? "creased" : "torn"}
            tape={ci === 0}
            tapeColor={c.tone}
          >
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="status-tag status-tag-amber">{c.id}</span>
              <h3 className="text-base font-black uppercase tracking-wide text-foreground">
                {c.title}
              </h3>
            </div>
            <div className="space-y-3">
              {c.panels.map((p, j) => (
                <div
                  key={j}
                  className={cn(
                    "border-l-2 pl-3",
                    j === 2 ? "border-amber/60" : "border-border",
                  )}
                >
                  <span className="body-note block">STEP 0{j + 1}</span>
                  <p className="mt-1 body-copy-sm">{p}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 font-mono text-xs font-black uppercase tracking-[0.1em] text-slate">
              &gt; {c.aside}
            </p>
          </EvidenceCard>
        ))}

        {/* Field log — single magenta identity, color reserved for Now/Past markers */}
        <EvidenceCard
          variant="mono"
          accent="amber"
          rotate={-0.4}
          colSpan="lg:col-span-12"
          damage="crumpled"
        >
          <div className="mb-5 flex items-center justify-between border-b border-white/5 pb-3">
            <p className="font-mono text-[0.65rem] font-black uppercase tracking-[0.18em] text-muted-foreground">
              WORK LOG
            </p>
            <Avatar pose="smug" animated className="h-10 w-10" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {logs.map((log, i) => (
              <div
                key={log.role}
                className="evidence-card-mono evidence-card-mono-magenta p-3"
                style={{ transform: `rotate(${i % 2 === 0 ? 0.6 : -0.6}deg)` }}
              >
                <span
                  className={cn(
                    "status-tag text-[0.55rem]",
                    TAG_MAP[log.tag],
                  )}
                >
                  {log.tag}
                </span>
                <p
                  className={cn(
                    "mt-2 text-sm font-black uppercase leading-tight",
                    log.labelClass,
                  )}
                >
                  {log.role}
                </p>
                <p className="mt-1 font-mono text-[0.6rem] font-bold uppercase tracking-[0.1em] text-muted-foreground">
                  {log.company}
                </p>
              </div>
            ))}
          </div>
        </EvidenceCard>
      </EvidenceBoard>
    </SectionFrame>
  );
}
