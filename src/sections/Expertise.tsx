import { ChapterHeader, SpeechBubble, AvatarBeat, Sfx, MotionLines } from "@/components/comic";

const skills = [
  {
    n: "01",
    tone: "panel-cyan",
    span: "panel-4",
    title: "Crash reading",
    body: "Walk backward from the symptom — state, inputs, memory, timing, the branch that turned ugly. Out: a path that fires every time.",
    dark: false,
    dominant: true,
  },
  {
    n: "02",
    tone: "panel-magenta",
    span: "panel-2",
    title: "Exploit proof",
    body: "Scary wording, or does it actually move under pressure? Out: real impact, hard limits, fix priority.",
    dark: false,
  },
  {
    n: "03",
    tone: "panel-rest",
    span: "panel-3",
    title: "Binary reading",
    body: "Disassembly, traces, debugger state — for when source is missing, stale, or lying. Out: control-flow notes.",
    dark: true,
  },
  {
    n: "04",
    tone: "panel-rest",
    span: "panel-3",
    title: "Desktop weirdness",
    body: "UI state, native calls, latency, and user flow all blaming each other. Out: behavior that holds still.",
    dark: true,
  },
  {
    n: "05",
    tone: "panel-lime",
    span: "panel-3",
    title: "Traffic smell",
    body: "Read the wire and the protocol assumptions when the bug only shows up between two systems. Out: trust-boundary notes.",
    dark: false,
  },
  {
    n: "06",
    tone: "panel-yellow",
    span: "panel-3",
    title: "Fix notes",
    body: "Turn messy evidence into the smallest useful next step — patch, repro, ticket. Out: work someone can pick up cold.",
    dark: false,
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="section-shell" data-reveal>
      <ChapterHeader
        code="CH.02"
        kicker="Recurring panels"
        title="The situations I keep getting pulled into."
      />

      <div className="comic-page" data-reveal>
        {skills.map((s) => (
          <div
            key={s.n}
            className={`panel ${s.span} panel-dots ${s.tone} ${
              s.dominant ? "justify-between" : ""
            }`}
            data-reveal-child
          >
            <span className="panel-num">{s.n}</span>
            {s.dominant && <MotionLines />}

            {s.dominant ? (
              <div className="mb-4 flex items-start justify-between gap-3">
                <Sfx size="lg" tone="ink" tilt={-3}>
                  WHY?
                </Sfx>
                <AvatarBeat pose="alert" avatarClassName="max-w-[84px]" />
              </div>
            ) : null}

            <div>
              <h3
                className={`text-xl font-black uppercase tracking-wide ${
                  s.dark ? "text-zinc-50" : "text-zinc-950"
                } ${s.dominant ? "md:text-2xl" : ""}`}
              >
                {s.title}
              </h3>
              <p
                className={`mt-3 text-sm font-semibold leading-6 ${
                  s.dark ? "text-zinc-300" : "text-zinc-900"
                }`}
              >
                {s.body}
              </p>
            </div>

            {s.dominant ? (
              <SpeechBubble tone="paper" className="mt-6 max-w-xs">
                Source says it cannot. The crash says it did.
              </SpeechBubble>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
