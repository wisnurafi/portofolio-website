const EmailIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
    <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.7" />
    <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
    <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.57v-2.17c-3.35.73-4.06-1.62-4.06-1.62-.55-1.4-1.35-1.78-1.35-1.78-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.24 1.86 1.24 1.08 1.86 2.84 1.32 3.53 1 .11-.79.42-1.32.76-1.63-2.68-.3-5.5-1.35-5.5-5.97 0-1.31.47-2.39 1.24-3.24-.12-.31-.54-1.55.12-3.23 0 0 1-.32 3.3 1.24a11.5 11.5 0 0 1 6 0c2.29-1.56 3.29-1.24 3.29-1.24.67 1.68.25 2.92.12 3.23.78.85 1.24 1.93 1.24 3.24 0 4.63-2.82 5.66-5.5 5.96.43.38.82 1.11.82 2.24v3.31c0 .31.22.69.82.57A12 12 0 0 0 12 .5" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
  </svg>
);

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
    <path d="M20.3 5.8a16 16 0 0 0-4-1.25l-.19.37a14.2 14.2 0 0 1 3.65 1.17 12.9 12.9 0 0 0-7.7 0 14.2 14.2 0 0 1 3.65-1.17l-.2-.37a16 16 0 0 0-4 1.25C8.1 9.2 7.3 12.5 7.6 15.7a16.1 16.1 0 0 0 4.9 2.5l.4-.7c-.9-.3-1.8-.8-2.5-1.4l.2-.15c1.5.7 3.2.7 4.7 0l.2.15c-.7.6-1.6 1.1-2.5 1.4l.4.7a16.1 16.1 0 0 0 4.9-2.5c.4-3.6-.7-6.8-2.8-9.9ZM10.5 13.8c-.6 0-1-.5-1-1.2 0-.6.4-1.2 1-1.2.6 0 1 .5 1 1.2 0 .7-.4 1.2-1 1.2Zm3 0c-.6 0-1-.5-1-1.2 0-.6.4-1.2 1-1.2.6 0 1 .5 1 1.2 0 .7-.4 1.2-1 1.2Z" />
  </svg>
);

const contacts = [
  {
    label: "Email",
    href: "mailto:wsnfii60@gmail.com",
    value: "wsnfii60@gmail.com",
    icon: EmailIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/wsnrfidev",
    value: "wsnrfidev",
    icon: GithubIcon,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/wisnurafi_",
    value: "@wisnurafi_",
    icon: InstagramIcon,
  },
  {
    label: "Discord",
    href: "https://discord.com/users/1063828230601183383",
    value: "noobraze_",
    icon: DiscordIcon,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell" data-reveal>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Contact</h2>

        <div className="glass-card hover-glow p-6 md:p-8" data-reveal>
          <p className="text-zinc-300 max-w-2xl mb-7">
            Interested in systems engineering, offensive security, or low-level software collaboration?
         </p>
         <p className="text-zinc-300 max-w-2xl mb-7">
            Feel free to reach out.
         </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {contacts.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  className="group rounded-xl border border-white/15 bg-white/5 p-4 hover-glow hover:border-cyan-300/45 transition"
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                >
                  <div className="flex items-center gap-3 text-cyan-100">
                    <Icon />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <p className="mt-2 text-zinc-300 group-hover:text-zinc-100 transition-colors">
                    {item.value}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
