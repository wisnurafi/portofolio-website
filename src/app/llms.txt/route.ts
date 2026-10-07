export const dynamic = "force-static";

const LLMS_TXT = `# wisnu.rafi

> Portfolio of Wisnu Rafi, Security Engineer at BeyondSoft Singapore.
> "I trust a bug after I can reproduce it twice."

## About

Wisnu Rafi is a Security Engineer at BeyondSoft Singapore, based in Jakarta, Indonesia.
Background: backend engineering, desktop app development, game security research,
and systems software engineering. Focus: reverse engineering and red teaming.

## Work

Six shipped projects:

- Uninstra: open-source deep uninstaller and cleanup tool for Windows (C#, WPF, .NET 9).
- GTKYD App: local-first Windows device inspector with explainable health scoring (C#, WinUI 3).
- Win Memory Cleaner: lightweight WPF RAM optimizer driving native Windows memory routines (C#, Win32).
- Senator External: Roblox external overlay V2 rewrite in C++ with DirectX 11 overlay via Dear ImGui. Research only.
- My Kait: Discord webhook manager with templates, scheduled messages, multi-webhook sending, and REST API (Next.js, TypeScript). Live at https://my-kait.vercel.app
- SentinelX: USB malware scanning and forensic tool in Python. Scans removable drives and Android over ADB.

All projects: https://github.com/wisnurafi

## Contact

- Email: wsnfii60@gmail.com
- GitHub: https://github.com/wisnurafi
`;

export async function GET() {
  return new Response(LLMS_TXT, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
