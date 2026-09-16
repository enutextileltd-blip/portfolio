import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "cyan" | "gold" | "emerald" | "slate" | "outline" | "blue";
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function Badge({
  className,
  variant = "cyan",
  icon,
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide transition-all duration-200";

  const variantStyles = {
    cyan: "bg-cyan-50 text-cyan-800 border border-cyan-200/90 shadow-xs",
    blue: "bg-blue-50 text-blue-800 border border-blue-200/90 shadow-xs",
    gold: "bg-amber-50 text-amber-900 border border-amber-200/90 shadow-xs",
    emerald: "bg-emerald-50 text-emerald-800 border border-emerald-200/90 shadow-xs",
    slate: "bg-slate-100 text-slate-800 border border-slate-200",
    outline: "border border-slate-300 text-slate-700 bg-white shadow-xs",
  };

  return (
    <div
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </div>
  );
}
