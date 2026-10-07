import Reveal from "@/components/reveal";
import { stackGroups } from "@/lib/data";

export default function Stack() {
  return (
    <Reveal id="stack">
      <section className="panel">
        <span className="panel-label">stack</span>
        <h2>
          Tools I <span className="acc">actually</span> use
        </h2>
        <p className="lede">Installed, configured, reached for weekly.</p>
        <div className="sgrid">
          {stackGroups.map((g, i) => (
            <div className="scell" key={g.name}>
              <h4>
                <span className="n">S/{String(i + 1).padStart(2, "0")}</span>
                {g.name}
              </h4>
              <p>{g.note}</p>
              <p className="tools">
                {g.tools.map((t, j) => (
                  <span key={t}>
                    {j === 0 ? <b>{t}</b> : t}
                    {j < g.tools.length - 1 ? " · " : ""}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
