const navItems = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function TopNav() {
  return (
    <div className="fixed top-4 left-1/2 z-50 -translate-x-1/2 px-3 sm:px-0">
      <nav className="glass-card hover-glow rounded-full px-3 sm:px-4 py-2">
        <ul className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="inline-flex rounded-full px-3 py-1.5 text-sm text-zinc-200 hover:bg-white/10 hover:text-cyan-100 transition-colors duration-300"
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
