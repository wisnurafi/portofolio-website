export default function About() {
  return (
    <section id="about" className="section-shell" data-reveal>
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">About</h2>
          <p className="text-zinc-300 leading-relaxed text-lg">
            I design and build software systems that need to be fast, stable,
            and hard to break. In simple terms, I make critical applications
            run reliably under real-world pressure, from core logic to
            low-level behavior.
          </p>
          <p className="text-zinc-400 leading-relaxed text-lg mt-4">
            I also work as an offensive security engineer, where I simulate how
            attackers think, find weak points before they are exploited, and
            turn those findings into practical fixes for engineering teams.
          </p>
        </div>

        <div className="glass-card hover-glow p-6" data-reveal>
          <p className="text-sm uppercase tracking-[0.17em] text-cyan-100/80">
            Current Focus
          </p>
          <ul className="mt-4 space-y-3 text-zinc-200">
            <li>Building high-performance systems with reliable behavior</li>
            <li>Running offensive security assessments and writing clear remediation plans</li>
            <li>Reverse engineering software to understand risk and improve resilience</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
