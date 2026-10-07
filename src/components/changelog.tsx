"use client";

import { useState } from "react";
import Reveal from "@/components/reveal";
import { changelog } from "@/lib/data";

export default function Changelog() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Reveal id="changelog">
      <section className="panel">
        <span className="panel-label">changelog</span>
        <h2>
          Release notes, <span className="acc">for a person</span>
        </h2>
        <p className="lede">Every entry shipped something real. Select one for highlights.</p>
        <div className="rows">
          {changelog.map((c, i) => {
            const isOpen = open === i;
            return (
              <div className={`row clrow${isOpen ? " open" : ""}`} key={c.version}>
                <button
                  className="chead"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className={`ver${c.active ? "" : " old"}`}>{c.version}</span>
                  <span className="ct">{c.title}</span>
                  <span className="carr">+</span>
                </button>
                <div className="cbody">
                  <ul className="cbody-inner">
                    {c.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Reveal>
  );
}
