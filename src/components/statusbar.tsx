"use client";

import { useEffect, useState } from "react";

const SECTIONS = ["profile", "changelog", "expertise", "work", "stack", "contact"];

const FIXED_ABBR: Record<string, string> = {
  "Asia/Jakarta": "wib",
  "Asia/Makassar": "wita",
  "Asia/Jayapura": "wit",
  "Asia/Singapore": "sgt",
  "Asia/Kuala_Lumpur": "myt",
};

function tzAbbr(zone: string): string {
  if (FIXED_ABBR[zone]) return FIXED_ABBR[zone];
  try {
    const parts = new Intl.DateTimeFormat("en", {
      timeZone: zone,
      timeZoneName: "short",
    }).formatToParts(new Date());
    for (const p of parts) {
      if (p.type === "timeZoneName") return p.value.toLowerCase();
    }
  } catch {
    /* ignore */
  }
  return "";
}

export default function StatusBar() {
  const [time, setTime] = useState("--:--:--");
  const [tz, setTz] = useState("local");
  const [active, setActive] = useState("");

  useEffect(() => {
    let visitorTz: string | null = null;
    let abbr = "local";
    try {
      visitorTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (visitorTz) abbr = tzAbbr(visitorTz) || "local";
    } catch {
      /* ignore */
    }

    const tick = () => {
      try {
        setTime(
          new Intl.DateTimeFormat("en-GB", {
            timeZone: visitorTz ?? undefined,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
          }).format(new Date()),
        );
        setTz(abbr);
      } catch {
        /* ignore */
      }
    };
    tick();
    const id = setInterval(tick, 1000);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s);
      if (el) io.observe(el);
    });

    return () => {
      clearInterval(id);
      io.disconnect();
    };
  }, []);

  return (
    <div className="statusbar">
      <div className="wrap sb-inner">
        <span className="win">
          <i>●</i> main
        </span>
        <span className="sbnav">
          {SECTIONS.map((s) => (
            <a key={s} href={`#${s}`} className={active === s ? "on" : ""}>
              {s}
            </a>
          ))}
        </span>
        <span className="right">
          <span>
            <b>{time}</b> {tz}
          </span>
          <span>utf-8</span>
          <span>v2.3</span>
        </span>
      </div>
    </div>
  );
}
