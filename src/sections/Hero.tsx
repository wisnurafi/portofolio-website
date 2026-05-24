export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-6xl w-full mx-auto px-6 md:px-8 py-16">
        <div className="flex flex-wrap gap-3 fade-up">
          <span className="tag">Systems Software Engineer</span>
          <span className="tag !border-lime-300/35 !bg-lime-300/15 !text-lime-100">
            Offensive Security Engineer
          </span>
        </div>

        <h1 className="mt-6 text-5xl sm:text-6xl md:text-8xl font-semibold tracking-tight fade-up">
          Wisnu Rafi
        </h1>

        <p className="mt-6 max-w-3xl text-zinc-300 text-lg leading-relaxed fade-up">
          I build resilient low-level systems and dissect complex software behavior.
          My work sits at the intersection of systems engineering, reverse
          engineering, and offensive security assessments.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 fade-up">
          <a
            href="https://github.com/wsnrfidev"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-xl border border-cyan-300/45 bg-cyan-300/10 text-cyan-100 hover:bg-cyan-300/20 transition"
          >
            GitHub
          </a>

          <a
            href="#contact"
            className="px-5 py-3 rounded-xl bg-lime-300 text-zinc-950 hover:opacity-90 transition"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 fade-up">
          {[
            "Low-level Systems",
            "Reverse Engineering",
            "Security Assessments",
          ].map((item) => (
            <div key={item} className="glass-card px-5 py-4 text-zinc-200">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
