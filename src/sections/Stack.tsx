const stack = [
  "C/C++",
  "Rust",
  "Python",
  "C#",
  "Windows Internals",
  "Linux",
  "Reverse Engineering",
  "Binary Analysis",
  "Network Analysis",
  "Ghidra",
  "IDA Pro",
  "x64dbg",
  "Git",
];
export default function Stack() {
  return (
    <section className="section-shell">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">Tech Stack</h2>

        <div className="flex flex-wrap gap-3">
          {stack.map((tech) => (
            <div
              key={tech}
              className="px-4 py-2.5 rounded-xl border border-white/20 bg-white/5 text-zinc-200 hover:border-cyan-300/50 hover:text-cyan-100 transition"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
