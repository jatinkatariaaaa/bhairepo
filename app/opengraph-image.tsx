import { ImageResponse } from "next/og";

import { site } from "@/lib/site";

// Edge runtime uses @vercel/og's edge build, which inlines its font/wasm assets
// instead of reading them from disk. This keeps OG generation portable and
// avoids a Windows path-resolution bug in the Node build when the project path
// contains a space. It's also the recommended runtime for ImageResponse.
export const runtime = "edge";

// Site-wide Open Graph / Twitter card image, generated at build time.
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FAFAF7",
          padding: "72px",
        }}
      >
        {/* Header row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "80px",
                height: "80px",
                borderRadius: "22px",
                backgroundColor: "#0E5C43",
                color: "#ffffff",
                fontSize: "46px",
                fontWeight: 700,
              }}
            >
              T
            </div>
            <div
              style={{
                display: "flex",
                marginLeft: "20px",
                fontSize: "40px",
                fontWeight: 700,
              }}
            >
              <div style={{ display: "flex", color: "#0B0F0E" }}>Trus</div>
              <div style={{ display: "flex", color: "#10B981" }}>Tax</div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 24px",
              borderRadius: "999px",
              border: "1px solid #E7E5E0",
              backgroundColor: "#ffffff",
              fontSize: "24px",
              color: "#0E5C43",
              fontWeight: 600,
            }}
          >
            Certified CAs
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: "66px",
              fontWeight: 700,
              color: "#0B0F0E",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              maxWidth: "880px",
            }}
          >
            Taxes, licenses and compliance, handled.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "28px",
              fontSize: "28px",
              color: "#5B6B66",
            }}
          >
            GST / ITR / TDS / MSME / FSSAI / Bookkeeping
          </div>
        </div>

        {/* Trust chips */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {["500+ clients", "100% online", "Transparent pricing"].map((chip) => (
            <div
              key={chip}
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "16px",
                padding: "10px 22px",
                borderRadius: "999px",
                backgroundColor: "#E7F5EF",
                color: "#0E5C43",
                fontSize: "22px",
                fontWeight: 600,
              }}
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
