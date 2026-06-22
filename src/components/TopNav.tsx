const navItems = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export default function TopNav() {
  return (
    <div className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5">
      <nav className="mx-auto flex w-full max-w-4xl items-center justify-between border-2 border-zinc-950 bg-zinc-100 px-3 py-2 text-zinc-950 shadow-[5px_5px_0_#020617] sm:px-4">
        <a
          href="#top"
          className="hidden font-mono text-xs font-black uppercase tracking-[0.16em] transition-colors hover:text-cyan-700 sm:inline-flex"
        >
          WR / ABOUT ME
        </a>
        <ul className="mx-auto flex min-w-0 items-center gap-1 overflow-x-auto sm:mx-0 sm:gap-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="inline-flex whitespace-nowrap px-2.5 py-1.5 font-mono text-[0.68rem] font-black uppercase tracking-[0.12em] transition-colors duration-200 hover:bg-cyan-300 sm:px-3"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
