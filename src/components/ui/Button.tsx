"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "cyan" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export function Button({
  className,
  variant = "cyan",
  size = "md",
  children,
  icon,
  iconPosition = "right",
  ...props
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-bold transition-all duration-300 rounded-full cursor-pointer select-none active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-3.5 gap-2.5",
    xl: "text-lg px-10 py-4.5 gap-3",
  };

  const variantStyles = {
    cyan: "bg-cyan-600 text-white shadow-lg shadow-cyan-600/25 hover:bg-cyan-700 hover:shadow-cyan-600/40 hover:-translate-y-0.5",
    gold: "bg-amber-500 text-white shadow-lg shadow-amber-500/25 hover:bg-amber-600 hover:shadow-amber-500/40 hover:-translate-y-0.5",
    primary:
      "bg-slate-900 text-white shadow-md shadow-slate-900/15 hover:bg-slate-800 hover:-translate-y-0.5",
    secondary:
      "bg-white text-slate-800 border border-slate-200 shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 hover:-translate-y-0.5",
    outline:
      "border border-slate-300 text-slate-700 hover:border-cyan-600 hover:text-cyan-700 hover:bg-cyan-50/50 hover:-translate-y-0.5",
    ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
  };

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="inline-flex shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="inline-flex shrink-0 transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </button>
  );
}
