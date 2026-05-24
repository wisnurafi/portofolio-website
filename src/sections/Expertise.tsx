const expertise = [
  "Systems Programming & Performance Tuning",
  "Offensive Security Testing",
  "Reverse Engineering & Binary Analysis",
  "Desktop Application Engineering",
  "Game Security Research",
  "Network Protocol Analysis",
  "Low-Level Software Architecture",
];

export default function Expertise() {
  return (
    <section id="expertise" className="section-shell" data-reveal>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">Expertise</h2>

        <div className="grid md:grid-cols-2 gap-5">
          {expertise.map((item, index) => (
            <div
              key={item}
              className="glass-card hover-glow p-6 hover:-translate-y-1"
              data-reveal
            >
              <p className="text-sm uppercase tracking-[0.15em] text-zinc-500 mb-3">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="text-lg text-zinc-100">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
