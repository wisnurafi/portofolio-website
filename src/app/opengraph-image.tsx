import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "wisnu.rafi - Security Engineer";
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
          background: "#2b2b2b",
          color: "#f2f2f2",
          padding: "64px 72px",
          fontFamily: "monospace",
          border: "2px solid #4a4a4a",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: "0.2em",
            color: "#8a8a8a",
          }}
        >
          <span>
            wisnu<span style={{ color: "#b48ae0" }}>.</span>rafi
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <p
            style={{
              margin: 0,
              fontSize: 64,
              lineHeight: 1.15,
              fontWeight: 400,
              letterSpacing: "-0.02em",
              maxWidth: "1000px",
            }}
          >
            I trust a bug after I can reproduce it{" "}
            <span style={{ color: "#b48ae0" }}>twice.</span>
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 28,
              color: "#b0b0b0",
            }}
          >
            Security Engineer — BeyondSoft Singapore
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            fontSize: 22,
            color: "#8a8a8a",
          }}
        >
          <span style={{ color: "#7fd6a8" }}>●</span>
          <span>github.com/wisnurafi</span>
        </div>
      </div>
    ),
    size,
  );
}
