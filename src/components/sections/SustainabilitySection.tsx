import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Leaf, Recycle, Droplets, Sun, CheckCircle2 } from "lucide-react";

export function SustainabilitySection() {
  const pillars = [
    {
      icon: <Recycle className="w-6 h-6 text-emerald-400" />,
      title: "Circular Alloy & GRS Polymers",
      description:
        "100% of our zinc and brass scrap is reclaimed and remelted internally. Our polyester threads and zipper tapes utilize certified post-consumer recycled plastic bottles.",
    },
    {
      icon: <Droplets className="w-6 h-6 text-cyan-400" />,
      title: "Zero Liquid Discharge (ZLD) ETP",
      description:
        "Our advanced effluent treatment plant recycles over 92% of water utilized in electroplating and wash processes, drastically reducing environmental impact.",
    },
    {
      icon: <Sun className="w-6 h-6 text-amber-400" />,
      title: "Clean Solar-Powered Manufacturing",
      description:
        "Integrated rooftop solar photovoltaic arrays power a significant portion of our daytime casting and automated assembly machinery.",
    },
  ];

  return (
    <section id="sustainability" className="py-24 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="emerald" className="mb-3">
            Eco-Conscious Manufacturing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Sustainable Hardware for a <br />
            <span className="text-gradient-gold">Cleaner Future</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Meeting the most stringent global environmental protocols with zero toxic emissions and 100% recyclable trims.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <Card
              key={idx}
              className="bg-slate-900/40 border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>GRS &amp; OEKO-TEX Standard Audited</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
