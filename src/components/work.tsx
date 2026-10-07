"use client";

import { useState } from "react";
import Reveal from "@/components/reveal";
import { projects } from "@/lib/data";

export default function Work() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Reveal id="work">
      <section className="panel">
        <span className="panel-label">work</span>
        <h2>
          Shipped, <span className="acc">not shelved</span>
        </h2>
        <p className="lede">Six builds. Select one to inspect.</p>
        <div className="rows">
          {projects.map((p, i) => {
            const isOpen = open === i;
            const idx = String(i + 1).padStart(2, "0");
            return (
              <div className={`row wrow${isOpen ? " open" : ""}`} key={p.title}>
                <button
                  className="whead"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="idx">{idx}</span>
                  <span className="nm">
                    {p.title}
                    <small>{p.blurb}</small>
                  </span>
                  <span className="meta">
                    <b>{p.status}</b> · {p.meta}
                  </span>
                  <span className="arr">+</span>
                </button>
                <div className="wbody">
                  <div className="wbody-inner">
                    <div className="wshot">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.image} alt={p.title} />
                    </div>
                    <div className="winfo">
                      <p>{p.description}</p>
                      <div className="wtags">
                        {p.tags.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                      <div className="wlinks">
                        <a href={p.repo} target="_blank" rel="noreferrer">
                          repository ↗
                        </a>
                        {p.live ? (
                          <a href={p.live} target="_blank" rel="noreferrer">
                            live site ↗
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Reveal>
  );
}
