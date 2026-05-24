import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Wisnu Rafi - Systems and Offensive Security Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at 15% 20%, rgba(47,186,222,0.35), transparent 35%), radial-gradient(circle at 90% 10%, rgba(140,214,66,0.3), transparent 30%), #0f172a",
          color: "#e5e7eb",
          padding: "64px",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "12px",
            fontSize: 24,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#a5f3fc",
          }}
        >
          <span>Systems Software Engineer</span>
          <span style={{ color: "#bef264" }}>•</span>
          <span>Offensive Security Engineer</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1
            style={{
              margin: 0,
              fontSize: 82,
              lineHeight: 1,
              fontWeight: 700,
              letterSpacing: "-0.03em",
            }}
          >
            Wisnu Rafi
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: "920px",
              fontSize: 34,
              lineHeight: 1.3,
              color: "#d1d5db",
            }}
          >
            Building resilient low-level systems and improving software security
            through offensive engineering and reverse analysis.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            fontSize: 24,
            color: "#9ca3af",
          }}
        >
          <span>github.com/wisnurafi</span>
          <span>•</span>
          <span>instagram.com/wisnurafi_</span>
        </div>
      </div>
    ),
    size,
  );
}
