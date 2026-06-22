import { ActionTag, Sfx } from "@/components/comic";
import Avatar from "@/components/Avatar";
import { ArrowUpRight, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="px-4 pt-24 md:px-8 md:pt-28">
      <div className="mx-auto max-w-6xl" data-reveal>
        <div className="mb-4 flex flex-wrap items-center gap-3" data-reveal-child>
          <ActionTag tone="lime">Issue 01</ActionTag>
          <span className="font-mono text-xs font-black uppercase tracking-[0.18em] text-zinc-400">
            Wisnu Rafi // Systems Engineer &amp; Offensive Security Engineer
          </span>
        </div>

        <div className="comic-page">
          {/* Panel 1 — splash: title */}
          <div
            className="panel panel-4 panel-tall panel-ink panel-dots justify-between"
            data-reveal-child
          >
            <span className="panel-num">01</span>
            <p className="comic-kicker">Cold open</p>
            <h1 className="mt-4 text-5xl font-black uppercase leading-[0.85] tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl">
              I break it
              <span className="block text-cyan-300 [text-shadow:5px_5px_0_#020617]">
                on purpose
              </span>
              <span className="block text-lime-300 [text-shadow:5px_5px_0_#020617]">
                then explain why
              </span>
            </h1>
            <p className="mt-6 max-w-md text-base font-bold leading-7 text-zinc-300">
              Systems software by day, offensive security on contract. I live in
              crash dumps, disassembly, and traffic that does not add up. If your
              system does something it swears it cannot, that is my favorite kind
              of ticket.
            </p>
          </div>

          {/* Panel 2 — character: avatar */}
          <div
            className="panel panel-2 panel-tall panel-paper items-center justify-center"
            data-reveal-child
          >
            <span className="panel-num">02</span>
            <Avatar pose="watching" className="w-full max-w-[220px]" />
            <div className="panel-caption mt-4 w-full text-center">
              The one they call when source code lies.
            </div>
          </div>

          {/* Panel 3 — SFX strip */}
          <div
            className="panel panel-3 panel-magenta panel-dots items-start justify-center"
            data-reveal-child
          >
            <span className="panel-num">03</span>
            <Sfx size="lg" tone="ink" tilt={-3}>SEGFAULT.</Sfx>
            <p className="mt-3 font-mono text-xs font-black uppercase tracking-[0.14em] text-zinc-900">
              Most people see a crash. I see a map.
            </p>
          </div>

          {/* Panel 4 — CTA */}
          <div
            className="panel panel-3 panel-cyan panel-dots justify-between"
            data-reveal-child
          >
            <span className="panel-num">04</span>
            <p className="text-lg font-black uppercase leading-tight text-zinc-950">
              Got something that should not be possible?
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-[3px] border-zinc-950 bg-zinc-950 px-5 py-3 text-sm font-black uppercase text-lime-300 shadow-[5px_5px_0_rgba(2,6,23,0.4)] transition-transform hover:-translate-y-0.5"
              >
                Send the brief
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/wisnurafi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border-[3px] border-zinc-950 bg-zinc-100 px-5 py-3 text-sm font-black uppercase text-zinc-950 shadow-[5px_5px_0_rgba(2,6,23,0.4)] transition-transform hover:-translate-y-0.5"
              >
                <Code2 className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
