import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          borderRadius: "14px",
          border: "3px solid #0284c7",
          boxShadow: "0 4px 12px rgba(2, 132, 199, 0.3)",
          padding: "4px 0",
        }}
      >
        <svg
          viewBox="0 0 100 80"
          width="40"
          height="32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 50 10 L 16 82 L 32 82 L 50 35 L 58 55 L 68 55 Z"
            fill="#0f172a"
          />
          <path
            d="M 50 10 Q 60 40 84 82 L 70 82 Q 58 48 50 33 Z"
            fill="#0284c7"
          />
          <path
            d="M 43 50 Q 54 62 62 82 L 52 82 Q 47 68 40 58 Z"
            fill="#38bdf8"
          />
        </svg>
        <div
          style={{
            fontSize: "10px",
            fontWeight: 900,
            color: "#dc2626",
            fontFamily: "Arial, sans-serif",
            marginTop: "1px",
          }}
        >
          ALMAS
        </div>
      </div>
    ),
    { ...size }
  );
}
