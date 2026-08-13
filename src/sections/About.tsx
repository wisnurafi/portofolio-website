import EvidenceBoard from "@/components/evidence/EvidenceBoard";
import EvidenceCard from "@/components/evidence/EvidenceCard";
import EvidencePhoto from "@/components/evidence/EvidencePhoto";
import SectionFrame from "@/components/evidence/SectionFrame";
import Avatar from "@/components/visuals/Avatar";

const principles = [
  "I trust a bug after I can reproduce it twice.",
  "A finding is not finished until the fix is obvious.",
  "No source code is still fine. Behavior leaves clues.",
];

// status is the semantic signal that earns a colored accent on each dossier item.
// everything else in this section sits on the section's mono-amber identity.
const dossierItems = [
  { label: "Name", value: "Wisnu Rafi", status: "CONFIRMED" as const },
  { label: "Day work", value: "Systems Software Engineer", detail: "BeyondSoft Singapore", status: "ACTIVE" as const },
  { label: "Security work", value: "Offensive Security Engineer", detail: "Private clients", status: "ACTIVE" as const },
  { label: "Main lane", value: "Reverse engineering and red team", status: "CLASSIFIED" as const },
];

export default function About() {
  return (
    <SectionFrame
      sectionId="about"
      fileNumber="DOSSIER // 01"
      fileLabel="About Wisnu"
      accent="amber"
      classification="CONFIDENTIAL"
      date="2026.08.13"
    >
      <EvidenceBoard className="items-start">
        <EvidencePhoto
          rotate={-2}
          colSpan="lg:col-span-4"
          className="flex items-center justify-center"
          caption="profile sketch · last seen debugging"
          tape="mask"
          tapeColor="amber"
          tapeSide="top-left"
        >
          <Avatar pose="watching" animated className="h-52 w-52" />
        </EvidencePhoto>

        {dossierItems.map((item, i) => (
          <EvidenceCard
            key={item.label}
            variant="accent"
            accent={
              item.status === "CLASSIFIED"
                ? "red"
                : item.status === "ACTIVE"
                  ? "slate"
                  : "amber"
            }
            rotate={i % 2 === 0 ? 0.8 : -0.8}
            colSpan="lg:col-span-4"
            pin={i % 2 === 0 ? "left" : "right"}
            damage={i === 0 ? "torn" : i === 3 ? "creased" : "none"}
            tape={i === 1 ? "torn" : false}
            tapeColor={
              item.status === "CLASSIFIED"
                ? "red"
                : item.status === "ACTIVE"
                  ? "slate"
                  : "amber"
            }
            tapeSide={i % 2 === 0 ? "top-left" : "top-right"}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="body-note">{item.label}</span>
              <span
                className={`status-tag ${
                  item.status === "CLASSIFIED"
                    ? "status-tag-red"
                    : item.status === "ACTIVE"
                      ? "status-tag-slate"
                      : "status-tag-amber"
                }`}
              >
                {item.status}
              </span>
            </div>
            <p className="mt-2 text-lg font-black uppercase tracking-wide text-foreground">
              {item.value}
            </p>
            {item.detail ? (
              <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {item.detail}
              </p>
            ) : null}
          </EvidenceCard>
        ))}

        {/* Field notes — mono-amber, same as section identity */}
        <EvidenceCard
          variant="mono"
          accent="amber"
          rotate={-0.5}
          colSpan="lg:col-span-8"
          damage="crumpled"
          tape
          tapeColor="amber"
        >
          <p className="body-note mb-3">FIELD NOTES</p>
          <p className="body-copy-sm">
            I am the kind of engineer who gets curious when something only breaks for one user,
            on one machine, at the worst possible time. I like messy problems because they force
            the real story out of the system.
          </p>
        </EvidenceCard>

        {/* House rules — same mono identity, uses a rule-mark instead of a red border */}
        <EvidenceCard
          variant="mono"
          accent="amber"
          rotate={1.2}
          colSpan="lg:col-span-4"
          pin="right"
        >
          <p className="body-note mb-3">
            <span className="text-red">HOW I WORK</span>
            <span className="ml-2 text-[0.55rem] text-muted-foreground/60">
              [ practical ]
            </span>
          </p>
          <ul className="space-y-3">
            {principles.map((rule) => (
              <li
                key={rule}
                className="border-l-2 border-amber/40 pl-3 font-mono text-xs uppercase leading-relaxed tracking-wide text-foreground/80"
              >
                {rule}
              </li>
            ))}
          </ul>
        </EvidenceCard>
      </EvidenceBoard>
    </SectionFrame>
  );
}
