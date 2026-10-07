const links = [
  { href: "#profile", label: "profile" },
  { href: "#changelog", label: "changelog" },
  { href: "#expertise", label: "expertise" },
  { href: "#work", label: "work" },
  { href: "#stack", label: "stack" },
  { href: "#contact", label: "contact" },
];

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="wrap topbar-inner">
        <a className="brand" href="#top">
          wisnu<span className="br">.</span>rafi
        </a>
        <nav className="nav">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="work-chip">
          <span className="sq" />
          open for work
        </div>
      </div>
    </header>
  );
}
