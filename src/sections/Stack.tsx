import EvidenceBoard from "@/components/evidence/EvidenceBoard";
import EvidenceCard from "@/components/evidence/EvidenceCard";
import SectionFrame from "@/components/evidence/SectionFrame";
import { Cpu, Hammer, Code, TerminalSquare } from "lucide-react";

const groups = [
  {
    title: "Reverse engineering",
    note: "The tools I reach for when source is missing or the behavior feels suspicious.",
    tools: ["IDA Pro", "Ghidra", "x64dbg", "OllyDbg"],
    icon: Cpu,
  },
  {
    title: "Building",
    note: "Languages I use when the thing needs to actually ship.",
    tools: ["C / C++", "Rust", "Python", "C#"],
    icon: Hammer,
  },
  {
    title: "Editors",
    note: "Comfortable workspaces for low level code, desktop apps, and quick experiments.",
    tools: ["IntelliJ IDEA", "Visual Studio 2022", "VS Code"],
    icon: Code,
  },
  {
    title: "Systems",
    note: "The environments I debug, test, break, and fix things in.",
    tools: ["Kali Linux", "RHEL", "Windows"],
    icon: TerminalSquare,
  },
];

// Single accent per section — color used as identity, not per-card variation.
export default function Stack() {
  return (
    <SectionFrame
      sectionId="stack"
      fileNumber="LOADOUT // 04"
      fileLabel="Tools I actually use"
      accent="slate"
      classification="PUBLIC"
      date="2026.08.13"
    >
      <EvidenceBoard className="items-start">
        {groups.map((g, i) => {
          const Icon = g.icon;
          return (
            <EvidenceCard
              key={g.title}
              variant="mono"
              accent="slate"
              rotate={i % 2 === 0 ? 0.9 : -0.9}
              colSpan={i === 0 ? "lg:col-span-6" : "lg:col-span-3"}
              pin={i % 2 === 0 ? "left" : "right"}
              damage={i === 1 ? "torn" : i === 3 ? "creased" : "none"}
              tape={i === 2}
            >
              <div className="mb-3 flex items-center gap-3">
                <Icon className="h-5 w-5 text-slate" />
                <p className="font-mono text-[0.65rem] font-black uppercase tracking-[0.18em] text-muted-foreground">
                  {g.title}
                </p>
              </div>
              {g.note ? (
                <p className="mb-3 font-mono text-[0.7rem] uppercase leading-relaxed tracking-[0.06em] text-foreground/70">
                  {g.note}
                </p>
              ) : null}
              <div className="flex flex-wrap gap-2">
                {g.tools.map((tool) => (
                  <span
                    key={tool}
                    className="border border-slate/15 bg-slate/[0.04] px-3 py-1.5 font-mono text-xs font-black uppercase tracking-wide text-foreground/85"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </EvidenceCard>
          );
        })}
      </EvidenceBoard>
    </SectionFrame>
  );
}
