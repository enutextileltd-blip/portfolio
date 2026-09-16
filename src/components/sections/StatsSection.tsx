import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Factory, Users, Award, Truck, CheckCircle2 } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      number: "50,000,000+",
      label: "Monthly Unit Capacity",
      detail: "Automated die-casting, weaving & electroplating lines",
      icon: <Factory className="w-5 h-5 text-amber-400" />,
    },
    {
      number: "120+",
      label: "Global Brand Partners",
      detail: "Supplying premier retail & luxury fashion houses worldwide",
      icon: <Users className="w-5 h-5 text-cyan-400" />,
    },
    {
      number: "48 Hours",
      label: "Prototype Turnaround",
      detail: "In-house CNC mold crafting & 3D sample modeling",
      icon: <Award className="w-5 h-5 text-emerald-400" />,
    },
    {
      number: "30+ Countries",
      label: "Direct Export Logistics",
      detail: "Just-in-time bonded shipment to global garment facilities",
      icon: <Truck className="w-5 h-5 text-purple-400" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/30 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-slate-950/60 border border-white/10 flex flex-col justify-between hover:border-amber-500/30 transition-all duration-300 group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-3xl font-extrabold text-white tracking-tight mb-1 group-hover:text-amber-300 transition-colors">
                  {item.number}
                </div>
                <div className="text-sm font-semibold text-slate-200 mb-2">
                  {item.label}
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed border-t border-white/5 pt-3">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
