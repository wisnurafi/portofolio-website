import EvidenceBoard from "@/components/evidence/EvidenceBoard";
import EvidenceCard from "@/components/evidence/EvidenceCard";
import SectionFrame from "@/components/evidence/SectionFrame";
import { Terminal, ScanLine, Binary, Monitor, Network, FileText } from "lucide-react";

const skills = [
  {
    n: "T 01",
    title: "Reading crashes",
    body: "I start with the symptom, then work backward through state, input, memory, and timing until the weird branch finally shows itself.",
    icon: Terminal,
  },
  {
    n: "T 02",
    title: "Proving impact",
    body: "I do not stop at scary wording. If the risk is real, I want a clean proof that is clear, repeatable, and safe to explain.",
    icon: ScanLine,
  },
  {
    n: "T 03",
    title: "Reading binaries",
    body: "When source is missing or not telling the full truth, I use disassembly, debugger state, traces, and behavior to rebuild the picture.",
    icon: Binary,
  },
  {
    n: "T 04",
    title: "Desktop weirdness",
    body: "UI state, native calls, permissions, registry, and latency love blaming each other. I separate the noise from the actual bug.",
    icon: Monitor,
  },
  {
    n: "T 05",
    title: "Reading traffic",
    body: "When the bug lives between two systems, I look at packets, protocol assumptions, and trust boundaries until the gap is visible.",
    icon: Network,
  },
  {
    n: "T 06",
    title: "Writing the fix path",
    body: "I turn messy evidence into something useful for the next person. Clear repro, real impact, priority, and a practical direction to patch.",
    icon: FileText,
  },
];

// One hero card (the most fundamental skill) gets full accent.
// All other cards sit on a single muted hue — color used as hierarchy, not decoration.
const HERO_INDEX = 0;

export default function Expertise() {
  return (
    <SectionFrame
      sectionId="expertise"
      fileNumber="CAPABILITIES // 02"
      fileLabel="Problems I like solving"
      accent="amber"
      classification="INTERNAL"
      date="2026.08.13"
    >
      <EvidenceBoard className="items-start">
        {skills.map((s, i) => {
          const Icon = s.icon;
          const isHero = i === HERO_INDEX;
          return (
            <EvidenceCard
              key={s.n}
              variant={isHero ? "accent" : "mono"}
              accent="amber"
              rotate={i % 2 === 0 ? 0.7 : -0.7}
              colSpan={i === 0 || i === 3 ? "lg:col-span-5" : "lg:col-span-3"}
              pin={isHero ? "center" : i % 3 === 0 ? "left" : "right"}
              damage={i === 1 ? "torn" : i === 4 ? "creased" : isHero ? "crumpled" : "none"}
              tape={i === 2}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-[0.65rem] font-black uppercase tracking-[0.18em] text-muted-foreground">
                  {s.n}
                </span>
                <Icon
                  className={
                    isHero
                      ? "h-5 w-5 text-amber"
                      : "h-5 w-5 text-amber/55"
                  }
                />
              </div>
              <h3
                className={
                  isHero
                    ? "mb-2 text-xl font-black uppercase tracking-wide text-foreground md:text-2xl"
                    : "mb-2 text-lg font-black uppercase tracking-wide text-foreground"
                }
              >
                {s.title}
              </h3>
              <p className="body-copy-sm">{s.body}</p>
            </EvidenceCard>
          );
        })}
      </EvidenceBoard>
    </SectionFrame>
  );
}
