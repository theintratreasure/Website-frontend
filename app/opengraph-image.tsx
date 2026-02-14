import { ImageResponse } from "next/og";
import { SITE_NAME } from "./lib/seo";

export const runtime = "edge";

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
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "84px",
          background:
            "radial-gradient(circle at 18% 28%, rgba(30, 99, 181, 0.35), transparent 55%), radial-gradient(circle at 76% 28%, rgba(13, 148, 136, 0.28), transparent 54%), linear-gradient(135deg, #07121b 0%, #0b1d20 48%, #07121b 100%)",
          color: "white",
          fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        }}
      >
        <div style={{ fontSize: 66, fontWeight: 900, letterSpacing: -1.6 }}>{SITE_NAME}</div>
        <div style={{ marginTop: 20, fontSize: 34, fontWeight: 700, opacity: 0.92 }}>
          Trade Forex, Crypto, Indexes & Metals
        </div>
        <div style={{ marginTop: 18, fontSize: 22, opacity: 0.82, maxWidth: 900 }}>
          Professional multi-asset access with transparent pricing and reliable execution.
        </div>
        <div
          style={{
            marginTop: 34,
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            opacity: 0.92,
          }}
        >
          {["Institutional Precision", "Execution Discipline", "Market Confidence"].map((label) => (
            <div
              key={label}
              style={{
                padding: "10px 14px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.22)",
                background: "rgba(255,255,255,0.06)",
                fontSize: 18,
                fontWeight: 650,
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}

