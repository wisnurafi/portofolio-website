export type Project = {
  title: string;
  blurb: string;
  description: string;
  tags: string[];
  status: "live" | "wip";
  meta: string;
  image: string;
  repo: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "Uninstra",
    blurb: "deep uninstaller & cleanup for Windows",
    description:
      "Open-source deep uninstaller and cleanup tool for Windows. Evidence-based leftover detection with multi-signal confidence scoring: orphaned registry keys, stale shell extensions, residual AppData. Offline-first, zero telemetry.",
    tags: ["csharp", "wpf", "dotnet9", "clean-arch", "sqlite"],
    status: "live",
    meta: "desktop · c#",
    image:
      "https://opengraph.githubassets.com/1fa5442b8939f1a0e3971ec89d6373fbe7b121bb5b9a4648aab5ced2ee1ddaa2/wisnurafi/uninstra",
    repo: "https://github.com/wisnurafi/uninstra",
  },
  {
    title: "GTKYD App",
    blurb: "local-first Windows device inspector",
    description:
      "Local-first Windows device inspector: hardware, storage, battery, drivers, security, network. Health scoring with explainable rules, scan history, snapshot diff, JSON/CSV/PDF export.",
    tags: ["csharp", "winui3", "dotnet9", "mvvm", "sqlite"],
    status: "live",
    meta: "desktop · winui3",
    image:
      "https://opengraph.githubassets.com/160901692ae89fdcf15c6950ec347360df967033f26cda5837914043e86c1495/wisnurafi/GTKYD-app",
    repo: "https://github.com/wisnurafi/GTKYD-app",
  },
  {
    title: "Win Memory Cleaner",
    blurb: "lightweight RAM optimizer · 25+ locales",
    description:
      "Lightweight WPF RAM optimizer driving native Windows memory routines: Standby List, Modified Page List, Working Set. Tray-resident, global hotkey, auto-threshold, 25+ locales.",
    tags: ["csharp", "wpf", "mvvm", "win32"],
    status: "live",
    meta: "desktop · win32",
    image:
      "https://opengraph.githubassets.com/b14a6dfb83bed77dec506e27aedff506c9d127b3c992113871406644a7664b1b/wisnurafi/win-memory-cleaner",
    repo: "https://github.com/wisnurafi/win-memory-cleaner",
  },
  {
    title: "Senator External",
    blurb: "roblox external overlay · v2 rewrite",
    description:
      "V2 rewrite of the Roblox external overlay, rebuilt from scratch in C++ with a DirectX 11 overlay rendered through Dear ImGui. Modular feature system (aimbot, ESP, movement) with per-game support profiles. Reads process memory, injects nothing. Research only.",
    tags: ["cpp", "imgui", "d3d11", "game-re"],
    status: "live",
    meta: "security · c++",
    image:
      "https://opengraph.githubassets.com/c6ba4aa79a78e0852bf57f06dd2e7d8511c4d96c0c1d50ad3c1f69a70bd50fc4/wisnurafi/senator-external-new",
    repo: "https://github.com/wisnurafi/senator-external-new",
  },
  {
    title: "My Kait",
    blurb: "discord webhook manager",
    description:
      "Discord webhook manager: templates with custom variables, scheduled messages, multi-webhook sending, REST API, and an admin dashboard. Built for real daily ops.",
    tags: ["nextjs", "typescript", "supabase", "drizzle"],
    status: "live",
    meta: "web · next.js",
    image:
      "https://opengraph.githubassets.com/68c018e86aa25c15f4048a4a2197d24e64b116e3ba7ba3cbc3c9c59bb1a93481/wisnurafi/my-kait",
    repo: "https://github.com/wisnurafi/my-kait",
    live: "https://my-kait.vercel.app",
  },
  {
    title: "SentinelX",
    blurb: "usb malware scanner & forensics",
    description:
      "USB malware scanning and forensic tool in Python. Scans removable drives and Android devices over ADB with explainable verdicts, confirm-before-quarantine, and SQLite reporting. Researcher-oriented: no kernel driver, no cloud.",
    tags: ["python", "forensics", "sqlite", "usb"],
    status: "live",
    meta: "security · python",
    image:
      "https://opengraph.githubassets.com/b49916c6615d55aa762b5af024758e97eb58df95395d72d787630f9f638c92b8/wisnurafi/sentinelx",
    repo: "https://github.com/wisnurafi/sentinelx",
  },
];

export type ChangelogEntry = {
  version: string;
  title: string;
  active: boolean;
  highlights: string[];
};

export const changelog: ChangelogEntry[] = [
  {
    version: "v1.0",
    title: "Backend Engineer",
    active: false,
    highlights: [
      "Backend systems and APIs",
      "Data flows, auth, and the parts nobody sees until they break",
      "Learned to respect production early",
    ],
  },
  {
    version: "v1.5",
    title: "Desktop App Developer",
    active: false,
    highlights: [
      "Windows desktop apps, end to end",
      "UI, installers, and software strangers install",
      "Where the systems career started",
    ],
  },
  {
    version: "v2.0",
    title: "Game Security Research",
    active: false,
    highlights: [
      "Client integrity and anti-tamper research",
      "Reading binaries became a daily practice",
      "Behavior on screen did not add up, so I went one layer deeper",
    ],
  },
  {
    version: "v2.1",
    title: "System Software Engineer",
    active: false,
    highlights: [
      "Desktop and systems software in production",
      "Win32 and native APIs, every day",
      "Installers people trust with their machines",
    ],
  },
  {
    version: "v2.2 · now",
    title: "Security Engineer · BeyondSoft Singapore",
    active: true,
    highlights: [
      "Security engineering at BeyondSoft Singapore",
      "Offensive mindset, defensive impact",
      "RE and systems background, applied where it counts",
    ],
  },
];

export const expertise: { name: string; desc: string }[] = [
  {
    name: "Reading crashes",
    desc: "Backward through state, input, memory and timing until the weird branch shows itself.",
  },
  {
    name: "Proving impact",
    desc: "Clean, repeatable, safe-to-explain proof. No scary wording without one.",
  },
  {
    name: "Reading binaries",
    desc: "Disassembly, debugger state, traces. Rebuilding the picture when source will not talk.",
  },
  {
    name: "Desktop weirdness",
    desc: "UI state, native calls, permissions, registry. Separating noise from the actual bug.",
  },
  {
    name: "Reading traffic",
    desc: "Packets and trust boundaries. Until the gap between two systems is visible.",
  },
  {
    name: "Writing the fix path",
    desc: "Clear repro, real impact, priority, a practical direction to patch.",
  },
];

export const stackGroups: { name: string; note: string; tools: string[] }[] = [
  {
    name: "Reverse engineering",
    note: "when source is missing or behavior feels suspicious",
    tools: ["IDA Pro", "Ghidra", "x64dbg", "WinDbg", "Binary Ninja", "Radare2", "OllyDbg"],
  },
  {
    name: "Building",
    note: "languages I ship with",
    tools: ["C / C++", "Rust", "Python", "C#", "TypeScript"],
  },
  {
    name: "Editors",
    note: "daily drivers",
    tools: ["Neovim", "VS Code", "Visual Studio 2022", "IntelliJ IDEA"],
  },
  {
    name: "Systems",
    note: "where things get debugged and broken",
    tools: ["Windows", "Kali Linux", "Parrot OS"],
  },
];
