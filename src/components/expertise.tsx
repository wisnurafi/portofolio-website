import Reveal from "@/components/reveal";
import { expertise } from "@/lib/data";

export default function Expertise() {
  return (
    <Reveal id="expertise">
      <section className="panel">
        <span className="panel-label">expertise</span>
        <h2>
          Six ways I get <span className="acc">answers</span>
        </h2>
        <p className="lede">Start from the symptom, follow the evidence.</p>
        <div className="rows">
          {expertise.map((e, i) => (
            <div className="row exrow" key={e.name}>
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="t">{e.name}</p>
                <p className="d">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
