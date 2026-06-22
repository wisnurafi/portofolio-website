import { ActionTag, ChapterHeader, AvatarBeat } from "@/components/comic";
import ContactForm from "@/components/ContactForm";
import { AtSign, Code2, Mail, MessageCircle } from "lucide-react";

const contacts = [
  { label: "Email", href: "mailto:wsnfii60@gmail.com", value: "wsnfii60@gmail.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/wisnurafi", value: "wisnurafi", icon: Code2 },
  { label: "Instagram", href: "https://instagram.com/wisnurafi_", value: "@wisnurafi_", icon: AtSign },
  { label: "Discord", href: "https://discord.com/users/1063828230601183383", value: "noobraze_", icon: MessageCircle },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell" data-reveal>
      <ChapterHeader
        code="CH.05"
        kicker="Last panel"
        title="Send me the ugly version."
      />

      <div className="comic-page" data-reveal>
        {/* Panel 1 — the brief */}
        <div className="panel panel-3 panel-ink panel-dots" data-reveal-child>
          <span className="panel-num">01</span>
          <ActionTag tone="yellow">Incoming brief</ActionTag>
          <p className="mt-5 text-2xl font-black uppercase leading-tight text-zinc-50 md:text-3xl">
            Broken builds. Behavior that makes no sense. A finding that needs a
            second pair of eyes. A binary that refuses to explain itself.
          </p>
          <div className="panel-caption mt-6">
            Do not polish it. Tell me what happened, what you expected, where it
            runs, and what you already tried.
          </div>
          <AvatarBeat
            pose="alert"
            caption="Send it broken. I prefer it that way."
            className="mt-6"
            avatarClassName="max-w-[96px]"
          />
        </div>

        {/* Panel 2 — channels */}
        <div className="panel panel-3 panel-paper" data-reveal-child>
          <span className="panel-num">02</span>
          <p className="comic-label text-zinc-600">Direct channels</p>
          <div className="mt-4 grid gap-3">
            {contacts.map((item) => {
              const Icon = item.icon;
              const external = !item.href.startsWith("mailto:");
              return (
                <a
                  key={item.label}
                  className="group flex items-center justify-between gap-4 border-[3px] border-zinc-950 bg-zinc-100 p-3 text-zinc-950 shadow-[4px_4px_0_#020617] transition-transform hover:-translate-y-1"
                  href={item.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <Icon className="h-5 w-5 shrink-0" />
                    <span className="truncate font-black">{item.value}</span>
                  </span>
                  <span className="font-mono text-xs font-black uppercase tracking-[0.14em] text-cyan-700">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Panel 3 — form, full width */}
        <div className="panel panel-6 panel-cyan panel-dots" data-reveal-child>
          <span className="panel-num">03</span>
          <p className="comic-label text-zinc-800">Drop the message here</p>
          <div className="mt-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
