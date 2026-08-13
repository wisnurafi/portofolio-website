import EvidenceBoard from "@/components/evidence/EvidenceBoard";
import ProjectCard from "@/components/evidence/ProjectCard";
import SectionFrame from "@/components/evidence/SectionFrame";

const projects: Array<{
  title: string;
  description: string;
  category: "desktop" | "website" | "cybersecurity";
  tags: string[];
  status: "live" | "wip" | "private";
  image?: string;
  repo?: string;
  live?: string;
}> = [
  // ─── Desktop App ───────────────────────────────────────────────────────
  {
    title: "Uninstra",
    description:
      "Open-source deep uninstaller & cleanup tool for Windows. Evidence-based leftover detection with multi-signal confidence scoring — orphaned registry keys, stale shell extensions, residual AppData. Offline-first, zero telemetry.",
    category: "desktop" as const,
    tags: ["csharp", "wpf", "dotnet9", "clean-arch", "sqlite"],
    status: "live" as const,
    image: "/projects/uninstra.svg",
    repo: "https://github.com/wisnurafi/uninstra",
  },
  {
    title: "GTKYD App",
    description:
      "Local-first Windows device inspector — hardware, storage, battery, drivers, security, network. Health scoring with explainable rules, scan history, snapshot diff, JSON/CSV/PDF export.",
    category: "desktop" as const,
    tags: ["csharp", "winui3", "dotnet9", "mvvm", "sqlite"],
    status: "live" as const,
    image: "/projects/gtkyd.png",
    repo: "https://github.com/wisnurafi/GTKYD-app",
  },
  {
    title: "Win Memory Cleaner",
    description:
      "Lightweight WPF RAM optimizer that triggers native Windows API memory cleanup routines — Standby List, Modified Page List, Working Set. System tray resident, global hotkey, auto-threshold, 25+ locales.",
    category: "desktop" as const,
    tags: ["csharp", "wpf", "mvvm", "win32"],
    status: "live" as const,
    image: "/projects/win-memory-cleaner.svg",
    repo: "https://github.com/wisnurafi/win-memory-cleaner",
  },

  // ─── Website ───────────────────────────────────────────────────────────
  {
    title: "Arnhemia Community",
    description:
      "Invite-only Valorant community platform — forum with categories/threads/reactions/bookmarks, ticketing system, role hierarchy, TOTP 2FA, Discord OAuth. Server-enforced RLS on every table.",
    category: "website" as const,
    tags: ["nextjs15", "react19", "supabase", "rls", "totp"],
    status: "live" as const,
    image: "/projects/arnhemia.svg",
    repo: "https://github.com/wisnurafi/arnhemia-community-website",
    live: "https://arnhemiawin.biz.id",
  },

  // ─── Cyber Security ────────────────────────────────────────────────────
  {
    title: "Senator — Roblox External",
    description:
      "User-mode external for Roblox game-security research. ESP with skeleton/box/aim-viewer, aimbot with per-axis prediction & hit-chance humanization, mesh chams via D3D11 reading the LRU mesh cache. Educational only.",
    category: "cybersecurity" as const,
    tags: ["cpp", "imgui", "d3d11", "game-re"],
    status: "wip" as const,
    image: "/projects/senator-esp.png",
    repo: "https://github.com/wisnurafi/senator-roblox-external",
  },
  {
    title: "WuWa Private Server",
    description:
      "Reverse-engineering oriented re-implementation of the Wuthering Waves game server. KCP gateway with custom packet handling, HTTP SDK server, protobuf protocol catalog, traffic analyzer for inspecting captured protocol dumps.",
    category: "cybersecurity" as const,
    tags: ["csharp", "dotnet8", "protobuf", "kcp", "game-re"],
    status: "wip" as const,
    image: "/projects/wuwa.svg",
    repo: "https://github.com/wisnurafi/wuwa-private-server",
  },
  {
    title: "Universal Runtime Analyzer",
    description:
      "Read-only Windows memory analysis framework. Process attach with graceful QUERY_LIMITED_INFORMATION fallback, PE parser, IDA-style pattern scanner, MSVC RTTI walk & vtable inference, VirtualQueryEx memory map, versioned JSON export.",
    category: "cybersecurity" as const,
    tags: ["cpp20", "win32", "imgui", "d3d11", "re"],
    status: "wip" as const,
    image: "/projects/ura.svg",
    repo: "https://github.com/wisnurafi/universal-runtime-analyzer",
  },
];

// Category totals used as section's only color signal — no rainbow filter chips.
const CATEGORY_TOTALS = projects.reduce<Record<string, number>>(
  (acc, p) => ({ ...acc, [p.category]: (acc[p.category] ?? 0) + 1 }),
  {},
);

const CATEGORY_ORDER: Array<{ key: string; label: string; dot: string }> = [
  { key: "desktop", label: "Desktop App", dot: "bg-amber" },
  { key: "website", label: "Website", dot: "bg-slate" },
  { key: "cybersecurity", label: "Cyber Security", dot: "bg-red" },
];

// Wide / narrow cadence: 4 + 3 + 3 + 4 + 3 + 3 + 4 = 24 cols ✓
// Static map (NOT a template string) — Tailwind JIT must see the class literals.
const COL_SPAN_PATTERN: readonly number[] = [4, 3, 3, 4, 3, 3, 4];
const COL_SPAN_CLASS: Record<number, string> = {
  4: "lg:col-span-4",
  3: "lg:col-span-3",
};

export default function Projects() {
  return (
    <SectionFrame
      sectionId="projects"
      fileNumber="ARCHIVE // 05"
      fileLabel="Operations archive"
      accent="amber"
      classification="INTERNAL"
      date="2026.08.13"
    >
      {/* Section index — counts only, not color chips */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-b border-white/5 pb-4 text-center">
        <span className="font-mono text-[0.6rem] font-black uppercase tracking-[0.18em] text-muted-foreground">
          Archive index
        </span>
        {CATEGORY_ORDER.map((c) => (
          <span
            key={c.key}
            className="flex items-center gap-1.5 font-mono text-[0.6rem] font-black uppercase tracking-[0.14em] text-foreground/70"
          >
            <span className={cn("h-1 w-1 rounded-full", c.dot)} />
            <span className="text-amber">{CATEGORY_TOTALS[c.key] ?? 0}</span>
            <span>{c.label}</span>
          </span>
        ))}
      </div>

      <EvidenceBoard className="items-start">
        {projects.map((p, i) => (
          <ProjectCard
            key={`${p.title}-${i}`}
            title={p.title}
            description={p.description}
            category={p.category}
            tags={p.tags}
            status={p.status}
            image={p.image}
            repo={p.repo}
            live={p.live}
            rotation={i % 2 === 0 ? 0.6 : -0.6}
            className={COL_SPAN_CLASS[COL_SPAN_PATTERN[i]]}
          />
        ))}
      </EvidenceBoard>
    </SectionFrame>
  );
}

// local cn — kept here so this file is self-contained after refactor
function cn(...args: Array<string | false | null | undefined>) {
  return args.filter(Boolean).join(" ");
}
