import { ChapterHeader, ComicPanel, Sfx, SpeechBubble, AvatarBeat } from "@/components/comic";

// NOTE: case stories below are believable placeholders — Wisnu, swap the
// [REDACTED]/detail bits for real (redacted-OK) specifics when ready.
const cases = [
  {
    id: "CASE-01",
    tone: "cyan" as const,
    pose: "alert" as const,
    sfx: "CRASH.",
    sfxTone: "magenta" as const,
    title: "The crash that only happened on one machine",
    aside: "One user. One box. Clean everywhere else.",
    panels: [
      "Desktop app died for exactly one user. Clean on every test box.",
      "Pulled the dump: access violation past a user-mode boundary, only under a specific locale + timing window.",
      "Reduced it to a race in init order. Wrote the repro + the one-line fix path.",
    ],
  },
  {
    id: "CASE-02",
    tone: "magenta" as const,
    pose: "smug" as const,
    sfx: "BYPASS.",
    sfxTone: "lime" as const,
    title: "The auth check that was technically there",
    aside: "The check ran. It just didn't matter.",
    panels: [
      "Endpoint had an auth check. On paper, locked.",
      "Replayed a packet, flipped one branch after the check — server happily answered.",
      "Proved impact end to end before it became a ticket. Fix priority: now.",
    ],
  },
];

const logs = [
  { tag: "Now", role: "Systems Software Engineer", company: "Beyondsoft Singapore", tone: "lime" },
  { tag: "Now", role: "Offensive Security Engineer", company: "Confidential", tone: "magenta" },
  { tag: "Past", role: "Independent Penetration Tester", company: "Web + network", tone: "cyan" },
  { tag: "Past", role: "Game Security Research", company: "Client integrity / RE", tone: "yellow" },
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell" data-reveal>
      <ChapterHeader
        code="CH.03"
        kicker="Case files"
        title="Not a tidy timeline. Recurring case files."
      />

      <div className="grid gap-8">
        {cases.map((c, i) => (
          <div key={c.id} data-reveal>
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="comic-chapter-code">{c.id}</span>
              <h3 className="text-lg font-black uppercase tracking-wide text-zinc-50">
                {c.title}
              </h3>
              <Sfx size="sm" tone={c.sfxTone} tilt={-4} className="ml-auto">
                {c.sfx}
              </Sfx>
            </div>
            <div className="comic-page" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
              {c.panels.map((p, j) => (
                <div
                  key={j}
                  className={`panel panel-dots ${
                    i % 2 === 0 ? "panel-paper" : "panel-ink"
                  }`}
                  style={{ gridColumn: "span 1 / span 1" }}
                  data-reveal-child
                >
                  <span className="panel-num">{`0${j + 1}`}</span>
                  <p
                    className={`text-sm font-bold leading-6 ${
                      i % 2 === 0 ? "text-zinc-800" : "text-zinc-200"
                    }`}
                  >
                    {p}
                  </p>
                  {j === 0 ? (
                    <AvatarBeat
                      pose={c.pose}
                      className="mt-4 self-start"
                      avatarClassName="max-w-[72px]"
                    />
                  ) : null}
                  {j === c.panels.length - 1 ? (
                    <SpeechBubble tone={c.tone} className="mt-4">
                      {c.aside}
                    </SpeechBubble>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <ComicPanel tone="lime" className="mt-10 p-5 md:p-7" data-reveal>
        <p className="comic-label">Field log</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {logs.map((log) => (
            <div
              key={log.role}
              className="flex items-center gap-3 border-[3px] border-zinc-950 bg-zinc-100 p-3 text-zinc-950 shadow-[4px_4px_0_#020617]"
              data-reveal-child
            >
              <span className={`action-tag action-tag-${log.tone}`}>{log.tag}</span>
              <div className="min-w-0">
                <p className="truncate text-sm font-black uppercase leading-tight">
                  {log.role}
                </p>
                <p className="truncate font-mono text-[0.7rem] font-bold uppercase tracking-[0.12em] text-zinc-600">
                  {log.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ComicPanel>
    </section>
  );
}
