import { ArrowUp, AtSign, Code2, Mail, MessageCircle, ShieldCheck } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const channels = [
  { label: "Email", value: "wsnfii60@gmail.com", href: "mailto:wsnfii60@gmail.com", icon: Mail },
  { label: "GitHub", value: "wisnurafi", href: "https://github.com/wisnurafi", icon: Code2 },
  { label: "Instagram", value: "@wisnurafi_", href: "https://instagram.com/wisnurafi_", icon: AtSign },
  { label: "Discord", value: "noobraze_", href: "https://discord.com/users/1063828230601183383", icon: MessageCircle },
];

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-background/90">
      <div className="mx-auto max-w-[1600px] px-3 py-10 sm:px-4 sm:py-12 md:px-8 md:py-14">
        <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] lg:grid-cols-[1.1fr_0.7fr_1fr] lg:gap-10">
          <section className="min-w-0">
            <p className="mb-3 font-mono text-[0.6rem] font-black uppercase tracking-[0.18em] text-amber">
              CASE ARCHIVE // END OF TRANSMISSION
            </p>
            <h2 className="section-heading max-w-sm text-foreground">
              Built for weird bugs, hard evidence, and clear fixes.
            </h2>
            <p className="body-copy-sm mt-3 max-w-xl text-muted-foreground">
              Systems software, reverse engineering, and offensive security
              documented cleanly enough that the next person knows where to aim.
            </p>
            <a
              href="#top"
              className="mt-5 inline-flex min-h-10 items-center gap-2 border border-amber/35 bg-amber/10 px-4 py-2 font-mono text-[0.65rem] font-black uppercase tracking-[0.12em] text-amber transition-all hover:-translate-y-0.5 hover:border-amber hover:bg-amber hover:text-background"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </section>

          <nav aria-label="Footer navigation" className="min-w-0">
            <h3 className="mb-3 font-mono text-[0.6rem] font-black uppercase tracking-[0.18em] text-muted-foreground">
              Index
            </h3>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-2">
              {quickLinks.map((item, index) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group flex min-h-10 items-center gap-2 border border-white/8 bg-white/[0.03] px-3 py-2 font-mono text-[0.65rem] font-black uppercase tracking-[0.12em] text-foreground/75 transition-all hover:-translate-y-0.5 hover:border-amber/40 hover:text-amber"
                  >
                    <span className="text-[0.55rem] text-muted-foreground group-hover:text-amber/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="truncate">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section className="min-w-0 md:col-span-2 lg:col-span-1">
            <h3 className="mb-3 font-mono text-[0.6rem] font-black uppercase tracking-[0.18em] text-muted-foreground">
              Open channels
            </h3>
            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {channels.map((item) => {
                const Icon = item.icon;
                const external = !item.href.startsWith("mailto:");
                return (
                  <li key={item.label} className="min-w-0">
                    <a
                      href={item.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                      className="group flex min-h-11 min-w-0 items-center gap-2 border border-white/8 bg-black/25 px-3 py-2 transition-all hover:-translate-y-0.5 hover:border-slate/50"
                      aria-label={`${item.label}: ${item.value}`}
                    >
                      <Icon className="h-4 w-4 shrink-0 text-slate transition-colors group-hover:text-foreground" />
                      <span className="flex min-w-0 flex-col">
                        <span className="font-mono text-[0.54rem] font-black uppercase tracking-[0.14em] text-muted-foreground">
                          {item.label}
                        </span>
                        <span className="truncate text-xs font-bold text-foreground/85">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>

        <div className="mt-10 flex min-w-0 flex-col gap-3 border-t border-white/8 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="min-w-0 font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">
            {"\u00A9"} 2026 Wisnu Rafi. All rights reserved.
          </p>
          <p className="flex min-w-0 flex-wrap items-center gap-2 font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-slate" />
            <span>Status: available for serious work</span>
            <span className="hidden text-amber sm:inline">{"//"}</span>
            <span className="text-amber">No leaked evidence</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
