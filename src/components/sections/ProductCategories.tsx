"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Layers,
  Sparkles,
  ShieldCheck,
  Flame,
  Cpu,
  ArrowRight,
  Check,
  SlidersHorizontal,
} from "lucide-react";

interface ProductItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  finishes: string[];
  specs: string[];
  badge: string;
}

const products: ProductItem[] = [
  {
    id: "metal-buttons",
    category: "Hardware",
    title: "Die-Cast Metal Buttons & Rivets",
    subtitle: "Precision Zinc Alloy & Brass Hardware",
    description:
      "Engineered for denim, luxury outerwear, and formalwear. Features high-tensile shank construction, corrosion resistance, and flawless laser-etched branding.",
    finishes: ["Antique Brass", "Gunmetal Black", "Rose Gold", "Brushed Silver", "Matte Black"],
    specs: ["Pull Force > 120N", "Lead-Free & Nickel-Free", "Salt Spray Test 48h+"],
    badge: "Bestseller",
  },
  {
    id: "metal-zippers",
    category: "Fasteners",
    title: "Luxury Precision Metal Zippers",
    subtitle: "Y-Teeth & Corn-Teeth High-Glide Zippers",
    description:
      "Swiss-grade tooth alignment with butter-smooth glide. Custom engraved pullers, waterproof tape options, and oxidation-resistant electroplating.",
    finishes: ["Mirror Polish Chrome", "Vintage Bronze", "24K Gold Plated", "Titanium Grey"],
    specs: ["Reciprocating Cycles > 10,000", "Custom Molded Pullers", "Oeko-Tex Tape"],
    badge: "High Precision",
  },
  {
    id: "silicone-badges",
    category: "Branding",
    title: "High-Frequency Silicone & TPU Badges",
    subtitle: "3D Micro-Injection Brand Emblems",
    description:
      "Ultra-crisp 3D relief emblems with micro-injection precision. Flexible, washable up to 60°C, with heat-transfer or sew-on backing.",
    finishes: ["Matte Velvet", "Gloss High-Definition", "Luminescent Glow", "Metallic Fleck"],
    specs: ["60°C Wash Fastness", "OEKO-TEX Class I", "Zero Color Bleed"],
    badge: "Modern Apparel",
  },
  {
    id: "woven-labels",
    category: "Branding",
    title: "Damask High-Density Woven Labels",
    subtitle: "Ultra-Fine 50D Thread Weaving",
    description:
      "Ultra-soft ultrasonic edge sealing prevents skin irritation. Micro-thread weaving reproduces intricate typography down to 0.5mm heights.",
    finishes: ["Ultrasonic Soft Edge", "Lurex Metallic Gold", "Recycled Polyester GRS", "Satin Weft"],
    specs: ["50D Micro-Filament", "GRS Global Recycled", "Zero Fraying"],
    badge: "Eco-Friendly",
  },
  {
    id: "leather-patches",
    category: "Hardware",
    title: "Genuine & Vegan Leather Patches",
    subtitle: "Debossed, Foil Stamped & Metal Plate Fusion",
    description:
      "Hand-finished genuine leather and sustainable cactus/apple vegan alternatives with deep debossing, hot foil stamping, and rivet attachment.",
    finishes: ["Raw Tan Burnished", "Charcoal Vintage", "Gold Hot Stamped", "Distressed Antique"],
    specs: ["Dry-Clean Resistant", "Eco-Tanned Certified", "Custom Thickness 1.2-2.5mm"],
    badge: "Luxury Touch",
  },
  {
    id: "hangtags-packaging",
    category: "Packaging",
    title: "Luxury Hangtags & Rigid Packaging",
    subtitle: "FSC-Certified Textured Board & Seal Tags",
    description:
      "Multi-layered 800GSM cotton board, soft-touch velvet lamination, metallic hot stamping, and custom wax cord seal tags.",
    finishes: ["Soft-Touch Velvet", "Gold Holographic Foil", "Embossed / Debossed", "Cotton Wax Cord"],
    specs: ["100% FSC Certified", "Heavyweight 600-1200 GSM", "Biodegradable Seal"],
    badge: "Sustainable",
  },
];

export function ProductCategories() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Hardware", "Fasteners", "Branding", "Packaging"];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-24 relative bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <Badge variant="gold" className="mb-3">
              Precision Product Lines
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Masterpieces in <span className="text-gradient-gold">Every Stitch</span> &amp; Trim
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400">
              Each accessory is manufactured in compliance with international testing standards, ensuring supreme durability, tactile luxury, and flawless aesthetics.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-amber-400 text-black shadow-lg shadow-amber-400/20"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="flex flex-col justify-between h-full bg-slate-900/40 border-white/10 hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <Badge variant="outline" className="text-[11px] font-medium text-slate-300">
                    {product.category}
                  </Badge>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    {product.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                  {product.title}
                </h3>
                <p className="text-xs font-medium text-amber-400/90 mb-4">
                  {product.subtitle}
                </p>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Specs List */}
                <div className="mb-6 space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                    Lab Standards &amp; QA
                  </span>
                  {product.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Available Finishes */}
                <div className="mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                    Finishing Options
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.finishes.map((finish) => (
                      <span
                        key={finish}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {finish}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">Custom Moulding Ready</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-amber-300 hover:text-amber-200 transition-colors group/link"
                >
                  <span>Request Samples</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
