"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

// A detective's evidence room. One grey wall, scarred by years of cases:
// pin holes, torn polaroids, red yarn between clues, coffee rings, water
// stains, hairline cracks. A failing fluorescent tube flickers from the left.
// Dust drifts through the beam. The wall tells the story; the tech is only
// what the operator brought in.

function getReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getServerSnapshot() {
  return false;
}

type Pool = {
  x: number;
  y: number;
  r: number;
  warm: string;
  core: string;
};

const WARM: Record<string, [string, string]> = {
  amber: ["rgba(201, 151, 63, 0.10)", "rgba(224, 190, 130, 0.08)"],
  cyan: ["rgba(127, 174, 158, 0.08)", "rgba(170, 210, 198, 0.07)"],
  red: ["rgba(179, 85, 74, 0.08)", "rgba(212, 150, 140, 0.07)"],
  magenta: ["rgba(156, 111, 142, 0.07)", "rgba(196, 160, 184, 0.06)"],
};

const WALL = {
  base: "#2a2a2a",
  patchLight: "#303030",
  patchDark: "#242424",
  crackDark: "rgba(12, 12, 12,",
  crackLight: "rgba(145, 145, 145,",
  stain: "rgba(15, 15, 15,",
  scuff: "rgba(18, 18, 18,",
  pinShadow: "rgba(8, 8, 8,",
  photoShadow: "rgba(10, 10, 10,",
  yarn: "rgba(179, 85, 74,",
  chalk: "rgba(180, 180, 180,",
};

export default function BoardWall() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getServerSnapshot,
  );

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let cracks: { pts: { x: number; y: number }[]; w: number }[] = [];
    let stains: { x: number; y: number; rx: number; ry: number; a: number }[] = [];
    let scuffs: { x: number; y: number; w: number; h: number; a: number }[] = [];
    let patches: { x: number; y: number; r: number; tone: string; a: number }[] = [];
    let pinholes: { x: number; y: number; r: number; a: number }[] = [];
    let ghostPhotos: { x: number; y: number; w: number; h: number; rot: number; a: number; tape: boolean }[] = [];
    let coffeeRings: { x: number; y: number; r: number; a: number }[] = [];
    let chalkMarks: { x: number; y: number; text: string; size: number; rot: number; a: number }[] = [];
    let yarnClusters: { pins: { x: number; y: number }[] }[] = [];
    let motes: { x: number; y: number; r: number; vx: number; vy: number; phase: number; a: number }[] = [];

    const buildWall = () => {
      const rng = mulberry32(0xced1);

      cracks = [];
      const crackCount = Math.max(5, Math.floor(width / 320));
      for (let i = 0; i < crackCount; i++) {
        const pts = [{ x: rng() * width, y: -10 + rng() * 40 }];
        let x = pts[0].x;
        let y = pts[0].y;
        const len = 140 + rng() * (height * 0.62);
        const steps = Math.floor(len / 12);
        for (let s = 0; s < steps; s++) {
          x += (rng() - 0.5) * 20;
          y += 9 + rng() * 7;
          pts.push({ x, y });
        }
        cracks.push({ pts, w: 0.35 + rng() * 0.65 });
      }

      stains = [];
      const stainCount = Math.max(4, Math.floor(width / 460));
      for (let i = 0; i < stainCount; i++) {
        stains.push({
          x: rng() * width,
          y: rng() * height * 0.42,
          rx: 110 + rng() * 260,
          ry: 160 + rng() * 380,
          a: 0.05 + rng() * 0.06,
        });
      }

      scuffs = [];
      const scuffCount = Math.max(6, Math.floor(width / 220));
      for (let i = 0; i < scuffCount; i++) {
        scuffs.push({
          x: rng() * width,
          y: height * 0.55 + rng() * (height * 0.45),
          w: 40 + rng() * 140,
          h: 2 + rng() * 6,
          a: 0.04 + rng() * 0.08,
        });
      }

      patches = [];
      const patchCount = Math.max(8, Math.floor(width / 180));
      for (let i = 0; i < patchCount; i++) {
        patches.push({
          x: rng() * width,
          y: rng() * height,
          r: 80 + rng() * 260,
          tone: rng() > 0.5 ? WALL.patchLight : WALL.patchDark,
          a: 0.04 + rng() * 0.08,
        });
      }

      pinholes = [];
      const pinCount = Math.floor((width * height) / 26000);
      for (let i = 0; i < pinCount; i++) {
        pinholes.push({
          x: rng() * width,
          y: rng() * height,
          r: 0.5 + rng() * 1.0,
          a: 0.12 + rng() * 0.22,
        });
      }

      ghostPhotos = [];
      const photoCount = Math.max(8, Math.floor(width / 180));
      for (let i = 0; i < photoCount; i++) {
        const w = 38 + rng() * 70;
        const h = 42 + rng() * 85;
        ghostPhotos.push({
          x: rng() * width,
          y: rng() * height,
          w,
          h,
          rot: (rng() - 0.5) * 22,
          a: 0.08 + rng() * 0.1,
          tape: rng() > 0.3,
        });
      }

      coffeeRings = [];
      const ringCount = Math.max(4, Math.floor(width / 420));
      for (let i = 0; i < ringCount; i++) {
        coffeeRings.push({
          x: rng() * width,
          y: height * 0.45 + rng() * (height * 0.55),
          r: 28 + rng() * 48,
          a: 0.05 + rng() * 0.07,
        });
      }

      chalkMarks = [];
      const chalkCount = Math.max(4, Math.floor(width / 480));
      const codes = ["CASE #734", "X-17", "NO ALIBI", "WITNESS", "?", "07.14", "RE: RT"];
      for (let i = 0; i < chalkCount; i++) {
        chalkMarks.push({
          x: rng() * width,
          y: height * 0.15 + rng() * (height * 0.7),
          text: codes[Math.floor(rng() * codes.length)],
          size: 10 + rng() * 18,
          rot: (rng() - 0.5) * 10,
          a: 0.04 + rng() * 0.05,
        });
      }

      // red yarn clusters: small groups of pins connected like a real evidence board
      yarnClusters = [];
      const clusterCount = Math.max(3, Math.floor(width / 420));
      for (let i = 0; i < clusterCount; i++) {
        const cx = rng() * width;
        const cy = rng() * height;
        const pins: { x: number; y: number }[] = [];
        const pinN = 3 + Math.floor(rng() * 4);
        for (let p = 0; p < pinN; p++) {
          pins.push({
            x: cx + (rng() - 0.5) * 220,
            y: cy + (rng() - 0.5) * 180,
          });
        }
        yarnClusters.push({ pins });
      }

      motes = [];
      const moteCount = Math.floor((width * height) / 14000);
      for (let i = 0; i < moteCount; i++) {
        motes.push({
          x: rng() * width,
          y: rng() * height,
          r: 0.3 + rng() * 1.4,
          vx: (rng() - 0.5) * 0.12,
          vy: -(0.02 + rng() * 0.08),
          phase: rng() * Math.PI * 2,
          a: 0.12 + rng() * 0.35,
        });
      }
    };

    let pools: Pool[] = [];
    const measure = () => {
      const nodes = Array.from(
        document.querySelectorAll<HTMLElement>("[data-wall-pool]"),
      );
      pools = nodes.map((el) => {
        const r = el.getBoundingClientRect();
        const accent = el.dataset.wallPool || "amber";
        const [warm, core] = WARM[accent] ?? WARM.amber;
        return {
          x: r.left + r.width / 2,
          y: r.top + r.height / 2 + r.height * 0.18,
          r: Math.max(r.width, r.height) * 0.95 + 110,
          warm,
          core,
        };
      });
    };

    const mouse = { x: -1000, y: -1000 };
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildWall();
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("scroll", measure, { passive: true });
    resize();
    measure();
    const late = window.setTimeout(measure, 1200);

    // concrete/plaster grain tile
    const grainTile = document.createElement("canvas");
    grainTile.width = 280;
    grainTile.height = 280;
    {
      const g = grainTile.getContext("2d");
      if (g) {
        const rng = mulberry32(0x9a1f);
        g.fillStyle = WALL.base;
        g.fillRect(0, 0, 280, 280);
        for (let i = 0; i < 12000; i++) {
          const v = rng();
          g.fillStyle =
            v > 0.5
              ? `rgba(200, 200, 200, ${0.01 + rng() * 0.025})`
              : `rgba(0, 0, 0, ${0.04 + rng() * 0.1})`;
          g.fillRect(rng() * 280, rng() * 280, 1 + rng() * 1.6, 1 + rng() * 1.6);
        }
        // plaster pits
        for (let i = 0; i < 40; i++) {
          g.beginPath();
          g.arc(rng() * 280, rng() * 280, 0.6 + rng() * 2.0, 0, Math.PI * 2);
          g.fillStyle = `rgba(0,0,0,${0.12 + rng() * 0.18})`;
          g.fill();
        }
        // brush stroke marks
        for (let i = 0; i < 18; i++) {
          const bx = rng() * 280;
          const by = rng() * 280;
          const bw = 20 + rng() * 80;
          const bh = 2 + rng() * 4;
          g.fillStyle = `rgba(255,255,255,${0.015 + rng() * 0.02})`;
          g.fillRect(bx, by, bw, bh);
        }
      }
    }

    // torn edge tile for polaroids
    const tornTile = document.createElement("canvas");
    tornTile.width = 64;
    tornTile.height = 64;
    {
      const g = tornTile.getContext("2d");
      if (g) {
        g.fillStyle = "rgba(10,10,10,0.5)";
        g.fillRect(0, 0, 64, 64);
      }
    }

    const start = performance.now();

    const litAt = (x: number, y: number) => {
      let lit = 0;
      for (const p of pools) {
        const d = Math.hypot(x - p.x, y - p.y);
        if (d < p.r) lit = Math.max(lit, 1 - d / p.r);
      }
      const md = Math.hypot(x - mouse.x, y - mouse.y);
      if (md < 300) lit = Math.max(lit, (1 - md / 300) * 0.85);
      return lit;
    };

    const flicker = (t: number) => {
      // failing fluorescent tube: mostly steady with occasional dim flickers
      const base = 1;
      const f1 = Math.sin(t * 23) * 0.03;
      const f2 = Math.sin(t * 47) * 0.02;
      const f3 = Math.sin(t * 3.7) > 0.92 ? -0.12 : 0;
      return Math.max(0.75, base + f1 + f2 + f3);
    };

    const draw = (now: number) => {
      if (document.hidden) {
        animationId = requestAnimationFrame(draw);
        return;
      }
      const t = (now - start) / 1000;
      ctx.clearRect(0, 0, width, height);

      // base concrete
      ctx.fillStyle = WALL.base;
      ctx.fillRect(0, 0, width, height);

      // large irregular patches
      for (const p of patches) {
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        g.addColorStop(0, p.tone);
        g.addColorStop(1, "rgba(42,42,42,0)");
        ctx.globalAlpha = p.a;
        ctx.fillStyle = g;
        ctx.fillRect(p.x - p.r, p.y - p.r, p.r * 2, p.r * 2);
      }
      ctx.globalAlpha = 1;

      // directional desk lamp from upper-left with flicker
      const fl = flicker(t);
      const lampX = width * 0.12;
      const lampY = -height * 0.12;
      const lampReach = Math.max(width, height) * 1.15;
      const bulb = ctx.createRadialGradient(lampX, lampY, 0, lampX, lampY, lampReach);
      bulb.addColorStop(0, `rgba(201, 151, 63, ${0.055 * fl})`);
      bulb.addColorStop(0.3, `rgba(160, 160, 160, ${0.022 * fl})`);
      bulb.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = bulb;
      ctx.fillRect(0, 0, width, height);

      // water stains
      for (const s of stains) {
        const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.ry);
        g.addColorStop(0, `${WALL.stain} ${s.a})`);
        g.addColorStop(0.7, `${WALL.stain} ${s.a * 0.55})`);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.scale(1, s.ry / s.rx);
        ctx.translate(-s.x, -s.y);
        ctx.fillStyle = g;
        ctx.fillRect(s.x - s.rx, s.y - s.rx, s.rx * 2, s.rx * 2);
        ctx.restore();
      }

      // light pools from evidence cards
      for (const p of pools) {
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        g.addColorStop(0, p.warm);
        g.addColorStop(0.55, p.core);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(p.x - p.r, p.y - p.r, p.r * 2, p.r * 2);
      }

      // desk-lamp cursor follow
      if (mouse.x > 0) {
        const lamp = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 300);
        lamp.addColorStop(0, "rgba(232, 222, 205, 0.055)");
        lamp.addColorStop(0.6, "rgba(201, 151, 63, 0.022)");
        lamp.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = lamp;
        ctx.fillRect(mouse.x - 300, mouse.y - 300, 600, 600);
      }

      // concrete grain + brush strokes
      const grainPattern = ctx.createPattern(grainTile, "repeat");
      if (grainPattern) {
        ctx.globalAlpha = 0.6;
        ctx.fillStyle = grainPattern;
        ctx.fillRect(0, 0, width, height);
        ctx.globalAlpha = 1;
      }

      // chalk marks / case writing
      ctx.font = '900 14px "Geist Mono", monospace';
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      for (const c of chalkMarks) {
        const lit = litAt(c.x, c.y);
        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate((Math.PI / 180) * c.rot);
        ctx.font = `900 ${c.size}px "Geist Mono", monospace`;
        ctx.fillStyle = `${WALL.chalk} ${(c.a + lit * 0.15).toFixed(3)})`;
        ctx.fillText(c.text, 0, 0);
        ctx.restore();
      }

      // ghost photos with tape
      for (const ph of ghostPhotos) {
        const cx = ph.x + ph.w / 2;
        const cy = ph.y + ph.h / 2;
        const lit = litAt(cx, cy);
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate((Math.PI / 180) * ph.rot);
        // torn-ish paper shadow
        ctx.fillStyle = `${WALL.photoShadow} ${(ph.a + lit * 0.12).toFixed(3)})`;
        ctx.fillRect(-ph.w / 2, -ph.h / 2, ph.w, ph.h);
        // inner "image" area slightly darker
        ctx.fillStyle = `rgba(8,8,8,${(ph.a * 0.8 + lit * 0.08).toFixed(3)})`;
        ctx.fillRect(-ph.w / 2 + 4, -ph.h / 2 + 4, ph.w - 8, ph.h - 14);
        if (ph.tape) {
          ctx.fillStyle = `rgba(255,255,255,${0.025 + lit * 0.04})`;
          ctx.fillRect(-ph.w / 2 + 6, -ph.h / 2 - 3, 16, 5);
          ctx.fillRect(ph.w / 2 - 22, -ph.h / 2 - 3, 16, 5);
        }
        ctx.restore();
      }

      // pinholes
      for (const p of pinholes) {
        const lit = litAt(p.x, p.y);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${WALL.pinShadow} ${(p.a + lit * 0.2).toFixed(3)})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p.x - 0.3, p.y - 0.3, p.r * 0.7, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(90,90,90,${(0.04 + lit * 0.08).toFixed(3)})`;
        ctx.fill();
      }

      // red yarn connecting clue clusters — organic, loose
      for (const cluster of yarnClusters) {
        const pins = cluster.pins;
        for (let i = 0; i < pins.length; i++) {
          for (let j = i + 1; j < pins.length; j++) {
            const a = pins[i];
            const b = pins[j];
            const midX = (a.x + b.x) / 2;
            const midY = (a.y + b.y) / 2 + Math.hypot(b.x - a.x, b.y - a.y) * 0.08;
            const lit = litAt(midX, midY);
            const sag = Math.sin(t * 0.8 + a.x * 0.02) * 1.5;

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.quadraticCurveTo(midX, midY + sag, b.x, b.y);
            ctx.strokeStyle = `${WALL.yarn} ${(0.14 + lit * 0.28).toFixed(3)})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      // coffee rings
      for (const r of coffeeRings) {
        const lit = litAt(r.x, r.y);
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        ctx.strokeStyle = `${WALL.stain} ${(r.a + lit * 0.08).toFixed(3)})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r * 0.72, 0, Math.PI * 2);
        ctx.strokeStyle = `${WALL.stain} ${(r.a * 0.7 + lit * 0.05).toFixed(3)})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // scuff marks near the floor
      for (const s of scuffs) {
        const lit = litAt(s.x, s.y);
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate((Math.PI / 180) * ((Math.random() - 0.5) * 4));
        const g = ctx.createLinearGradient(-s.w / 2, 0, s.w / 2, 0);
        g.addColorStop(0, "rgba(42,42,42,0)");
        g.addColorStop(0.5, `${WALL.scuff} ${s.a + lit * 0.06})`);
        g.addColorStop(1, "rgba(42,42,42,0)");
        ctx.fillStyle = g;
        ctx.fillRect(-s.w / 2, -s.h / 2, s.w, s.h);
        ctx.restore();
      }

      // hairline cracks
      for (const c of cracks) {
        const mid = c.pts[Math.floor(c.pts.length / 2)];
        const lit = litAt(mid.x, mid.y);
        const alpha = 0.04 + lit * 0.32;
        ctx.beginPath();
        ctx.moveTo(c.pts[0].x, c.pts[0].y);
        for (const p of c.pts) ctx.lineTo(p.x, p.y);
        ctx.strokeStyle = `${WALL.crackDark} ${alpha.toFixed(3)})`;
        ctx.lineWidth = c.w;
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(c.pts[0].x + 0.8, c.pts[0].y);
        for (const p of c.pts) ctx.lineTo(p.x + 0.8, p.y);
        ctx.strokeStyle = `${WALL.crackLight} ${(lit * 0.07).toFixed(3)})`;
        ctx.lineWidth = c.w * 0.6;
        ctx.stroke();
      }

      // dust motes
      for (const m of motes) {
        m.x += m.vx + Math.sin(t * 0.5 + m.phase) * 0.08;
        m.y += m.vy;
        if (m.y < -10) { m.y = height + 10; m.x = Math.random() * width; }
        if (m.x < -10) m.x = width + 10;
        if (m.x > width + 10) m.x = -10;

        const lit = litAt(m.x, m.y);
        const twinkle = Math.sin(t * 1.1 + m.phase) * 0.5 + 0.5;
        const alpha = m.a * (0.03 + lit * 0.55) * (0.4 + twinkle * 0.6);
        if (alpha < 0.008) continue;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(228, 226, 222, ${alpha.toFixed(3)})`;
        ctx.fill();
      }

      // room vignette
      const vig = ctx.createRadialGradient(
        width * 0.5, height * 0.42, Math.min(width, height) * 0.3,
        width * 0.5, height * 0.42, Math.max(width, height) * 0.78,
      );
      vig.addColorStop(0, "rgba(0,0,0,0)");
      vig.addColorStop(1, "rgba(0,0,0,0.52)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, width, height);

      // ceiling and floor falloff
      const topBottom = ctx.createLinearGradient(0, 0, 0, height);
      topBottom.addColorStop(0, "rgba(0,0,0,0.36)");
      topBottom.addColorStop(0.12, "rgba(0,0,0,0)");
      topBottom.addColorStop(0.88, "rgba(0,0,0,0)");
      topBottom.addColorStop(1, "rgba(0,0,0,0.42)");
      ctx.fillStyle = topBottom;
      ctx.fillRect(0, 0, width, height);

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      window.clearTimeout(late);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("scroll", measure);
      cancelAnimationFrame(animationId);
    };
  }, [reduced]);

  if (reduced) {
    return (
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-[12] h-full w-full"
        style={{
          background:
            "radial-gradient(circle at 12% -12%, rgba(80,80,80,0.14), transparent 55%), #2a2a2a",
        }}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-[12] h-full w-full"
    />
  );
}

function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
