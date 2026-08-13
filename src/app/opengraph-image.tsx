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
            "radial-gradient(circle at 15% 20%, rgba(201, 151, 63,0.15), transparent 35%), radial-gradient(circle at 90% 10%, rgba(127, 174, 158,0.10), transparent 30%), #030405",
          color: "#d8cfc4",
          padding: "64px",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "12px",
            fontSize: 22,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#c9973f",
          }}
        >
          <span>Systems Software Engineer</span>
          <span style={{ color: "#b3554a" }}>{"//"}</span>
          <span>Offensive Security Engineer</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1
            style={{
              margin: 0,
              fontSize: 86,
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#d8cfc4",
            }}
          >
            Wisnu Rafi
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: "920px",
              fontSize: 32,
              lineHeight: 1.3,
              color: "#7a7369",
            }}
          >
            Building resilient low-level systems and improving software security through offensive
            engineering and reverse analysis.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            fontSize: 22,
            color: "#7fae9e",
          }}
        >
          <span>github.com/wisnurafi</span>
          <span style={{ color: "#7a7369" }}>{"//"}</span>
          <span>instagram.com/wisnurafi_</span>
        </div>
      </div>
    ),
    size,
  );
}
