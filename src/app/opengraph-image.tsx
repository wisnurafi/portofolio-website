import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Wisnu Rafi - Security Engineer at BeyondSoft Singapore";
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
          background: "#232323",
          color: "#f2f2f2",
          padding: "56px 64px",
          fontFamily: "monospace",
          position: "relative",
          border: "2px solid #3a3a3a",
        }}
      >
        {/* watermark */}
        <div
          style={{
            position: "absolute",
            right: "40px",
            top: "60px",
            fontSize: "300px",
            lineHeight: 1,
            color: "#ffffff",
            opacity: 0.04,
            fontWeight: "bold",
            letterSpacing: "-0.05em",
          }}
        >
          wr
        </div>

        {/* top bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
          }}
        >
          <span style={{ letterSpacing: "0.1em" }}>
            wisnu<span style={{ color: "#b48ae0" }}>.</span>rafi
          </span>
          <span style={{ color: "#6a6a6a", fontSize: 20, letterSpacing: "0.2em" }}>
            security engineer
          </span>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <p
            style={{
              margin: 0,
              fontSize: 62,
              lineHeight: 1.18,
              letterSpacing: "-0.02em",
              maxWidth: "880px",
            }}
          >
            I trust a bug after I can reproduce it{" "}
            <span style={{ color: "#b48ae0" }}>twice.</span>
          </p>
          <div style={{ display: "flex", gap: "28px", fontSize: 24, color: "#a8a8a8" }}>
            <span>
              <span style={{ color: "#7fd6a8" }}>●</span> BeyondSoft Singapore
            </span>
            <span style={{ color: "#4a4a4a" }}>|</span>
            <span>6 projects shipped</span>
          </div>
        </div>

        {/* bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #3a3a3a",
            paddingTop: "28px",
            fontSize: 22,
            color: "#8a8a8a",
          }}
        >
          <span>reverse engineering · red team</span>
          <span>github.com/wisnurafi</span>
        </div>
      </div>
    ),
    size,
  );
}
