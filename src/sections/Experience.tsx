export default function Experience() {
  const currentRoles = [
    {
      role: "Systems Software Engineer",
      company: "Beyondsoft Singapore",
      type: "Remote",
      focus: "Systems and desktop software engineering",
    },
    {
      role: "Offensive Security Engineer",
      company: "Confidential Company",
      type: "Project-based",
      focus: "Attack simulation, reverse engineering, and exploit analysis",
    },
  ];

  const pastExperiences = [
    {
      role: "Penetration Tester (Independent)",
      company: "Self-directed Projects",
      type: "Project-based",
      focus:
        "Performed web and network penetration testing, validated findings, and delivered actionable reports with remediation guidance.",
    },
    {
      role: "Freelance Web Developer",
      company: "Independent Clients",
      type: "Freelance - Previous",
      focus:
        "Built and maintained responsive web applications while strengthening architecture, debugging, and client communication skills.",
    },
    {
      role: "Game Security Research (Reverse Engineering)",
      company: "Independent Research",
      type: "Research - Previous",
      focus:
        "Analyzed game clients and anti-cheat behavior to understand exploitation patterns and strengthen software integrity perspectives.",
    },
  ];

  return (
    <section id="experience" className="section-shell" data-reveal>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">Experience</h2>

        <div className="space-y-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-lime-200 mb-4">
              Current Roles
            </p>
            <div className="space-y-6">
              {currentRoles.map((exp) => (
                <div key={exp.role} className="glass-card hover-glow p-6 md:p-7" data-reveal>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-xl font-semibold text-zinc-100">{exp.role}</p>
                    <span className="text-zinc-500">at</span>
                    <p className="text-xl text-zinc-200">{exp.company}</p>
                  </div>

                  <p className="text-cyan-200/90 mt-3 text-sm uppercase tracking-[0.14em]">
                    {exp.type}
                  </p>

                  <p className="text-zinc-300 mt-2">{exp.focus}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-200 mb-4">
              Past Experience
            </p>
            <div className="space-y-6">
              {pastExperiences.map((exp) => (
                <div key={exp.role} className="glass-card hover-glow p-6 md:p-7" data-reveal>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-xl font-semibold text-zinc-100">{exp.role}</p>
                    <span className="text-zinc-500">at</span>
                    <p className="text-xl text-zinc-200">{exp.company}</p>
                  </div>

                  <p className="text-cyan-200/90 mt-3 text-sm uppercase tracking-[0.14em]">
                    {exp.type}
                  </p>

                  <p className="text-zinc-300 mt-2">{exp.focus}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-lime-300/30 bg-lime-300/10 p-6 text-lime-100">
            Engineering principle: ship systems that stay reliable in production,
            then challenge them with an attacker mindset to expose hidden risk
            before real incidents happen.
          </div>
        </div>
      </div>
    </section>
  );
}
