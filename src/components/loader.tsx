"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [hide, setHide] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHide(true), 650);
    const t2 = setTimeout(() => setGone(true), 1250);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <div id="loader" className={hide ? "done" : ""}>
      <div className="load-box">
        loading portfolio<span className="cur" />
      </div>
    </div>
  );
}
