import { ImageResponse } from "next/og";
import { SITE_NAME } from "./lib/seo";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
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
          Multi-Asset Trading Platform
        </div>
        <div style={{ marginTop: 18, fontSize: 22, opacity: 0.82, maxWidth: 900 }}>
          Forex • Crypto • Indexes • Metals — built for confidence, control, and consistency.
        </div>
      </div>
    ),
    size,
  );
}

