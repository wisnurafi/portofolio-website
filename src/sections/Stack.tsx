import { ChapterHeader, MotionLines, AvatarBeat, Sfx } from "@/components/comic";

const groups = [
  {
    n: "01",
    tone: "panel-ink",
    span: "panel-4",
    title: "Reverse engineering",
    note: "Where I live when source is missing.",
    tools: ["IDA Pro", "Ghidra", "x64dbg", "OllyDbg"],
    chip: "text-lime-300",
    dominant: true,
  },
  {
    n: "02",
    tone: "panel-rest",
    span: "panel-2",
    title: "Build",
    tools: ["C / C++", "Rust", "Python", "C#"],
    chip: "text-cyan-300",
  },
  {
    n: "03",
    tone: "panel-rest",
    span: "panel-3",
    title: "Editors",
    tools: ["IntelliJ IDEA", "Visual Studio 2022", "VS Code"],
    chip: "text-zinc-200",
  },
  {
    n: "04",
    tone: "panel-cyan",
    span: "panel-3",
    title: "Operating systems",
    tools: ["Kali Linux", "RHEL", "Windows"],
    chip: "text-lime-300",
  },
];

export default function Stack() {
  return (
    <section id="stack" className="section-shell" data-reveal>
      <ChapterHeader
        code="CH.04"
        kicker="Loadout"
        title="What I reach for when the easy answer runs out."
      />

      <div className="comic-page" data-reveal>
        {groups.map((g) => {
          const light = g.tone === "panel-cyan";
          return (
            <div
              key={g.n}
              className={`panel ${g.span} panel-dots ${g.tone} ${
                g.dominant ? "justify-between" : ""
              }`}
              data-reveal-child
            >
              <span className="panel-num">{g.n}</span>
              {g.dominant && <MotionLines />}

              {g.dominant ? (
                <Sfx size="md" tone="lime" tilt={-2} className="mb-3">
                  TOOLS UP.
                </Sfx>
              ) : null}

              <div>
                <p
                  className={`comic-label ${
                    light ? "text-zinc-800" : "text-zinc-400"
                  }`}
                >
                  {g.title}
                </p>
                {g.note ? (
                  <p className="mt-1 font-mono text-[0.7rem] font-bold uppercase tracking-[0.12em] text-zinc-500">
                    {g.note}
                  </p>
                ) : null}
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.tools.map((tool) => (
                    <span
                      key={tool}
                      className={`border-[3px] border-zinc-950 bg-zinc-950 px-3 py-1.5 font-mono text-xs font-black uppercase ${g.chip} shadow-[3px_3px_0_rgba(2,6,23,0.4)]`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {g.dominant ? (
                <AvatarBeat
                  pose="smug"
                  caption="The kit doesn't lie. People do."
                  className="mt-6 self-end"
                  avatarClassName="max-w-[96px]"
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
