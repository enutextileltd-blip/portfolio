import React from "react";
import Image from "next/image";

interface AlmasLogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  theme?: "light" | "dark";
}

export function AlmasLogo({
  className = "",
  showText = false,
  size = "md",
  theme = "light",
}: AlmasLogoProps) {
  const sizeMap = {
    sm: { box: "w-11 h-11", text: "text-lg", sub: "text-[9px]" },
    md: { box: "w-14 h-14", text: "text-xl", sub: "text-[10px]" },
    lg: { box: "w-20 h-20", text: "text-2xl", sub: "text-xs" },
    xl: { box: "w-28 h-28", text: "text-3xl", sub: "text-sm" },
  };

  const { box, text, sub } = sizeMap[size];

  const mainTextColor =
    theme === "dark" ? "text-red-500" : "text-red-600";
  const subTextColor =
    theme === "dark" ? "text-cyan-400" : "text-[#0A2570]";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Brand Logo - Exact same-to-same image */}
      <div
        className={`relative ${box} rounded-lg overflow-hidden shadow-sm shrink-0 border border-slate-200/50 hover:scale-105 transition-transform duration-200`}
      >
        <Image
          src="/images/almas_official_logo.png"
          alt="Almas Accessories Industries Logo"
          fill
          sizes="(max-width: 768px) 56px, 112px"
          className="object-contain"
          priority
        />
      </div>

      {showText && (
        <div className="flex flex-col justify-center">
          <span
            className={`font-black font-brand tracking-tight ${mainTextColor} uppercase leading-none ${text}`}
          >
            ALMAS
          </span>
          <span
            className={`font-black font-brand tracking-[0.14em] ${subTextColor} uppercase leading-none mt-1 ${sub}`}
          >
            ACCESSORIES INDUSTRIES
          </span>
        </div>
      )}
    </div>
  );
}
