import EvidenceBoard from "@/components/evidence/EvidenceBoard";
import EvidenceCard from "@/components/evidence/EvidenceCard";
import SectionFrame from "@/components/evidence/SectionFrame";
import ContactForm from "@/components/forms/ContactForm";
import Avatar from "@/components/visuals/Avatar";
import { AtSign, Code2, Mail, MessageCircle } from "lucide-react";

const contacts = [
  { label: "Email", href: "mailto:wsnfii60@gmail.com", value: "wsnfii60@gmail.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/wisnurafi", value: "wisnurafi", icon: Code2 },
  { label: "Instagram", href: "https://instagram.com/wisnurafi_", value: "@wisnurafi_", icon: AtSign },
  { label: "Discord", href: "https://discord.com/users/1063828230601183383", value: "noobraze_", icon: MessageCircle },
];

export default function Contact() {
  return (
    <SectionFrame
      sectionId="contact"
      fileNumber="COMMS // 06"
      fileLabel="Send something interesting"
      accent="red"
      classification="TOP SECRET"
      date="2026.08.13"
    >
      <EvidenceBoard className="items-start">
        <EvidenceCard
          accent="red"
          rotate={-1}
          colSpan="lg:col-span-5"
          damage="creased"
          tape
        >
          <span className="status-tag status-tag-red mb-3 inline-flex">OPEN TO TALK</span>
          <p className="mb-4 text-xl font-black uppercase leading-tight text-foreground md:text-2xl">
            If you have a weird bug, a security question, or a serious build idea, send it over.
          </p>
          <div className="flex items-center gap-4">
            <Avatar pose="alert" animated className="h-14 w-14" />
            <p className="font-mono text-xs font-black uppercase tracking-[0.1em] text-red">
              Helpful context: what happened, where it runs, and what you already tried.
            </p>
          </div>
        </EvidenceCard>

        <EvidenceCard
          accent="amber"
          rotate={0.7}
          colSpan="lg:col-span-4"
        >
          <p className="body-note mb-3">DIRECT CHANNELS</p>
          <div className="grid gap-2">
            {contacts.map((item) => {
              const Icon = item.icon;
              const external = !item.href.startsWith("mailto:");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="group flex min-w-0 items-center justify-between gap-3 border border-border bg-muted p-2.5 transition-all hover:-translate-y-0.5 hover:border-amber/40"
                >
                  <span className="flex min-w-0 items-center gap-2">
                    <Icon className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-amber" />
                    <span className="truncate font-mono text-xs font-bold uppercase tracking-wide text-foreground">
                      {item.value}
                    </span>
                  </span>
                  <span className="shrink-0 font-mono text-[0.55rem] font-black uppercase tracking-[0.1em] text-amber sm:tracking-[0.12em]">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>
        </EvidenceCard>

        <EvidenceCard
          accent="slate"
          rotate={-0.5}
          colSpan="lg:col-span-3"
          damage="torn"
        >
          <p className="body-note mb-3">RESPONSE</p>
          <p className="text-sm leading-relaxed text-foreground/80">
            I usually reply faster when the message is specific. Screenshots, logs, repro steps,
            or a short context dump help a lot.
          </p>
          <div className="mt-4 border-t border-border pt-3">
            <p className="font-mono text-xs uppercase tracking-wider text-slate">
              status: listening
            </p>
          </div>
        </EvidenceCard>

        <EvidenceCard
          accent="amber"
          rotate={0.3}
          colSpan="lg:col-span-12"
        >
          <p className="body-note mb-4">MESSAGE</p>
          <ContactForm />
        </EvidenceCard>
      </EvidenceBoard>
    </SectionFrame>
  );
}
