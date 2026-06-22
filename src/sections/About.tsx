import { ChapterHeader, AvatarBeat } from "@/components/comic";

const principles = [
  "A bug is not real until I reproduce it twice.",
  "A finding is not done until the fix is obvious.",
  "No source code? The behavior still leaves prints.",
];

export default function About() {
  return (
    <section id="about" className="section-shell" data-reveal>
      <ChapterHeader
        code="CH.01"
        kicker="Origin story"
        title="I build the thing, then I hunt for how it breaks."
      />

      <div className="comic-page" data-reveal>
        {/* Panel 1 — narration */}
        <div className="panel panel-4 panel-yellow panel-dots" data-reveal-child>
          <span className="panel-num">01</span>
          <p className="comic-label text-zinc-800">Narration</p>
          <p className="mt-4 text-2xl font-black leading-snug text-zinc-950 md:text-3xl">
            I do not chase the happy path. I want the crash dump, the malformed
            packet, the branch nobody tested, the one box where everything falls
            over. That is where the truth lives.
          </p>
        </div>

        {/* Panel 2 — the loop */}
        <div className="panel panel-2 panel-ink panel-dots" data-reveal-child>
          <span className="panel-num">02</span>
          <p className="comic-kicker">The loop</p>
          <ol className="mt-4 space-y-2 font-mono text-sm font-bold text-zinc-200">
            <li>1 / Catch the failure</li>
            <li>2 / Shrink the repro</li>
            <li>3 / Trace the boundary</li>
            <li>4 / Write the fix path</li>
          </ol>
          <AvatarBeat
            pose="watching"
            caption="Origin: curiosity that wouldn't quit."
            className="mt-6"
            avatarClassName="max-w-[96px]"
          />
        </div>

        {/* Panel 3 — how I work, prose */}
        <div className="panel panel-3 panel-paper" data-reveal-child>
          <span className="panel-num">03</span>
          <p className="comic-label text-zinc-600">How I actually work</p>
          <p className="mt-4 text-base font-semibold leading-7 text-zinc-800">
            My day moves between systems code, desktop engineering, reverse
            engineering, and offensive work. No mysticism. I look at what is
            really happening, cut it down to a case that fires every time, then
            write the fix notes I would want handed to me.
          </p>
        </div>

        {/* Panel 4 — rules / speech */}
        <div className="panel panel-3 panel-lime panel-dots" data-reveal-child>
          <span className="panel-num">04</span>
          <p className="comic-label text-zinc-800">House rules</p>
          <div className="mt-4 space-y-2">
            {principles.map((line) => (
              <div
                key={line}
                className="border-[3px] border-zinc-950 bg-zinc-100 px-3 py-2 font-mono text-xs font-black uppercase leading-5 tracking-[0.1em] text-zinc-950"
              >
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
