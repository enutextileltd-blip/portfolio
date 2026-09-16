"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  spotlight?: boolean;
  borderGlow?: boolean;
}

export function Card({
  className,
  children,
  spotlight = true,
  borderGlow = false,
  ...props
}: CardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || !spotlight) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative rounded-2xl border border-slate-200/90 bg-white p-6 md:p-8 shadow-sm transition-all duration-300 overflow-hidden group hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-900/5",
        borderGlow && "border-amber-300 hover:border-amber-400 shadow-md shadow-amber-500/5",
        className
      )}
      {...props}
    >
      {spotlight && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(2, 132, 199, 0.05), transparent 60%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
