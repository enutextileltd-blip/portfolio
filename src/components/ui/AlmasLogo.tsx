import React from "react";

interface AlmasLogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  theme?: "light" | "dark";
}

export function AlmasLogo({
  className = "",
  showText = true,
  size = "md",
  theme = "light",
}: AlmasLogoProps) {
  const sizeMap = {
    sm: { box: "w-9 h-9", text: "text-lg", sub: "text-[9px]" },
    md: { box: "w-11 h-11", text: "text-xl", sub: "text-[10px]" },
    lg: { box: "w-14 h-14", text: "text-2xl", sub: "text-xs" },
    xl: { box: "w-20 h-20", text: "text-3xl", sub: "text-sm" },
  };

  const { box, text, sub } = sizeMap[size];

  const mainTextColor =
    theme === "dark" ? "text-cyan-400" : "text-[#0284c7]";
  const subTextColor =
    theme === "dark" ? "text-slate-300" : "text-slate-900";

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Vector Emblem */}
      <div
        className={`relative ${box} rounded-xl bg-white p-1 shadow-sm border-2 border-cyan-500 flex items-center justify-center shrink-0 overflow-hidden`}
      >
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cyanSwoosh" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="50%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#bae6fd" />
            </linearGradient>
            <linearGradient id="darkLeg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
          </defs>

          {/* Left Dark Leg of 'A' */}
          <path
            d="M 60 12 L 20 95 L 38 95 L 60 40 L 70 65 L 82 65 Z"
            fill="url(#darkLeg)"
          />

          {/* Dynamic Cyan Blue Swoosh Leg */}
          <path
            d="M 60 12 Q 72 45 98 95 L 82 95 Q 68 55 60 38 Z"
            fill="url(#cyanSwoosh)"
          />

          {/* Inner Cyan Fluid Arc */}
          <path
            d="M 52 58 Q 65 72 74 95 L 62 95 Q 56 78 48 68 Z"
            fill="#0ea5e9"
          />

          {/* ALMAS Brand Word in Emblem */}
          <text
            x="60"
            y="108"
            textAnchor="middle"
            fill="#0284c7"
            fontWeight="900"
            fontSize="18"
            letterSpacing="1"
            fontFamily="Arial, sans-serif"
          >
            ALMAS
          </text>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-black tracking-tight ${mainTextColor} uppercase leading-none mb-0.5 ${text}`}
          >
            ALMAS
          </span>
          <span
            className={`font-black tracking-[0.14em] ${subTextColor} uppercase leading-none ${sub}`}
          >
            ACCESSORIES INDUSTRIES
          </span>
        </div>
      )}
    </div>
  );
}
