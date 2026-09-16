import { ImageResponse } from "next/og";

export const alt = "ALMAS THREAD | 100% Export Quality Embroidery Thread 120/2";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          background: "linear-gradient(135deg, #091224 0%, #0f223d 50%, #083344 100%)",
          padding: "60px 70px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle Decorative Background Glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, rgba(6, 182, 212, 0) 70%)",
          }}
        />

        {/* Top Header: Brand Identity & Tagline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Logo Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 24px rgba(6, 182, 212, 0.4)",
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 3h12l4 6-10 12L2 9z" />
                <path d="M11 3v6l-4 3" />
                <path d="M13 3v6l4 3" />
              </svg>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "30px",
                  fontWeight: 900,
                  letterSpacing: "1.5px",
                  color: "#ffffff",
                }}
              >
                ALMAS THREAD
              </span>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#38bdf8",
                  letterSpacing: "0.5px",
                }}
              >
                ALMAS ACCESSORIES INDUSTRIES
              </span>
            </div>
          </div>

          {/* Export Quality Pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 22px",
              borderRadius: "50px",
              background: "rgba(6, 182, 212, 0.15)",
              border: "1.5px solid rgba(6, 182, 212, 0.4)",
              color: "#67e8f9",
              fontSize: "15px",
              fontWeight: 800,
              letterSpacing: "0.5px",
            }}
          >
            <span>100% EXPORT QUALITY 120/2</span>
          </div>
        </div>

        {/* Middle Main Content: Headline & Bio */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "980px",
          }}
        >
          <div
            style={{
              fontSize: "44px",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.18,
              letterSpacing: "-0.5px",
            }}
          >
            Computerized Multi-Head Embroidery Thread Manufacturer
          </div>

          <div
            style={{
              fontSize: "20px",
              fontWeight: 500,
              color: "#cbd5e1",
              lineHeight: 1.45,
            }}
          >
            Official supplier for RMG & apparel exporters in Bangladesh. Offering 800+ Pantone ready shades, micro-silicon zero-breakage lubrication, spectrophotometer lab-dip matching, and 24h sample dispatch.
          </div>
        </div>

        {/* Bottom Footer: Locations & Contacts */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "15px",
                fontWeight: 700,
                color: "#94a3b8",
              }}
            >
              <span style={{ color: "#38bdf8" }}>🏭 Factory:</span> Pahartali, Chattogram
            </div>
            <span style={{ color: "#475569" }}>•</span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "15px",
                fontWeight: 700,
                color: "#94a3b8",
              }}
            >
              <span style={{ color: "#38bdf8" }}>🏢 Showroom:</span> Gazipur, Dhaka
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              padding: "10px 24px",
              borderRadius: "50px",
              color: "#ffffff",
              fontSize: "16px",
              fontWeight: 900,
              boxShadow: "0 4px 14px rgba(16, 185, 129, 0.35)",
            }}
          >
            <span>📞 01845-069803</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
