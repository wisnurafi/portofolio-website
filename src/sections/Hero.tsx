import EvidenceBoard from "@/components/evidence/EvidenceBoard";
import EvidenceCard from "@/components/evidence/EvidenceCard";
import EvidencePhoto from "@/components/evidence/EvidencePhoto";
import AsciiAvatar from "@/components/visuals/AsciiAvatar";
import DecodedText from "@/components/visuals/DecodedText";
import RadarScan from "@/components/visuals/RadarScan";
import TerminalText from "@/components/visuals/TerminalText";
import { ArrowUpRight, ShieldAlert, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="wall-section min-h-[calc(100svh-3rem)]" data-reveal>
      <EvidenceBoard className="items-start" withStrings={false}>
        {/* Main statement */}
        <EvidenceCard
          accent="amber"
          rotate={-1.2}
          colSpan="lg:col-span-7"
          damage="creased"
          className="sm:col-span-2"
          data-reveal-child
        >
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="status-tag status-tag-amber">RED TEAM</span>
            <span className="status-tag status-tag-slate">SYSTEMS</span>
            <span className="body-note">case file · wisnu · 0x7a3f</span>
          </div>

          <h1 className="display-heading mb-6 text-foreground">
            <DecodedText delay={200}>I build software</DecodedText>
            <span className="block text-amber [text-shadow:0_0_44px_rgba(201,151,63,0.28)]">
              <DecodedText delay={600}>break assumptions</DecodedText>
            </span>
            <span className="block text-slate [text-shadow:0_0_44px_rgba(122,138,153,0.22)]">
              <DecodedText delay={1000}>and make fixes clear</DecodedText>
            </span>
          </h1>

          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="action-button">
              <ShieldAlert className="h-4 w-4" />
              Send a case
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/wisnurafi"
              target="_blank"
              rel="noreferrer"
              className="ghost-button"
            >
              GitHub
            </a>
          </div>
        </EvidenceCard>

        {/* Operator photo */}
        <EvidencePhoto
          rotate={2.5}
          colSpan="lg:col-span-5"
          className="sm:col-span-2 lg:col-start-8 flex items-center justify-center"
          caption="profile sketch · usually online"
          tape="mask"
          tapeColor="amber"
          tapeSide="top-right"
        >
          <div className="relative flex items-center justify-center">
            <RadarScan size={260} className="absolute opacity-25" />
            <AsciiAvatar className="relative z-10 h-56 w-56 sm:h-64 sm:w-64" />
          </div>
        </EvidencePhoto>

        {/* Live trace note */}
        <EvidenceCard
          accent="slate"
          rotate={0.8}
          colSpan="lg:col-span-5"
          pin="left"
          damage="crumpled"
        >
          <div className="mb-2 flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-glow-pulse bg-slate" />
            <span className="body-note">current rhythm</span>
          </div>
          <TerminalText
            lines={[
              "Most days I ship desktop and systems software that has to behave in the real world.",
              "On the security side, I reverse things, read dumps, and follow weird traffic until it makes sense.",
              "If a system says something cannot happen, I like checking that claim myself.",
            ]}
            speed={26}
            delay={1400}
          />
        </EvidenceCard>

        {/* Quick stats */}
        <EvidenceCard
          accent="red"
          rotate={-0.6}
          colSpan="lg:col-span-3"
          pin="right"
          damage="torn"
        >
          <p className="body-note mb-2">FOCUS</p>
          <p className="text-3xl font-black text-red">RE / RT</p>
          <p className="mt-1 text-xs font-black uppercase tracking-wider text-muted-foreground">
            reverse engineering and red team
          </p>
        </EvidenceCard>

        <EvidenceCard
          accent="amber"
          rotate={1.1}
          colSpan="lg:col-span-4"
          pin="center"
        >
          <p className="body-note mb-2">STATUS</p>
          <p className="flex items-center gap-2 text-lg font-black uppercase text-amber">
            <Cpu className="h-4 w-4" />
            Available for serious work
          </p>
          <p className="mt-1 text-xs font-black uppercase tracking-wider text-muted-foreground">
            BeyondSoft Singapore and private security work
          </p>
        </EvidenceCard>

      </EvidenceBoard>
    </section>
  );
}
