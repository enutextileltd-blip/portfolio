"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Calculator, CheckCircle2, ArrowRight } from "lucide-react";

interface OptionConfig {
  id: string;
  nameEn: string;
  nameBn: string;
  recommendedTicket: string;
  texCount: string;
  needleSize: string;
  minStrength: string;
  adviceEn: string;
  adviceBn: string;
  threadTypeEn: string;
  threadTypeBn: string;
}

const fabrics: OptionConfig[] = [
  {
    id: "fine-silk",
    nameEn: "Fine Silk, Chiffon & Underwear (< 120 GSM)",
    nameBn: "সূক্ষ্ম সিল্ক, শিফন ও আন্ডারগার্মেন্টস (< ১২০ GSM)",
    recommendedTicket: "Ticket 120 / 140",
    texCount: "Tex 21 - 24",
    needleSize: "Nm 65 - 75 / Size 9 - 11 (Ball Point)",
    minStrength: "1,100 cN",
    adviceEn: "Use Poly-Poly Core Spun to eliminate puckering and maintain soft seam touch.",
    adviceBn: "কাপড়ে কুঞ্চন রোধ করতে পলি-পলি কোর স্পান সুতা ও বল পয়েন্ট সুই ব্যবহার করুন।",
    threadTypeEn: "Almas Epic Poly-Poly Core Spun",
    threadTypeBn: "আলমাস পলি-পলি কোর স্পান",
  },
  {
    id: "tshirt-knits",
    nameEn: "T-Shirts, Polos & Single Jersey (140 - 220 GSM)",
    nameBn: "টি-শার্ট, পোলো ও নিটওয়্যার (১৪০ - ২২০ GSM)",
    recommendedTicket: "Ticket 120 (Needle) + Tex 18 (Looper)",
    texCount: "Tex 27 (Needle) / Tex 18 (Looper)",
    needleSize: "Nm 70 - 80 / Size 10 - 12 (SES Light Ball)",
    minStrength: "1,050 cN",
    adviceEn: "Use Spun Poly for needles and Textured Microfilament in overlock loopers for soft stretch seams.",
    adviceBn: "সুইতে স্পান পলিয়েস্টার এবং ওভারলক লুপারে টেক্সচার্ড সুতা ব্যবহার করুন যাতে আরামদায়ক স্ট্রেচ পাওয়া যায়।",
    threadTypeEn: "Almas Spun Poly + Textured Overlock",
    threadTypeBn: "আলমাস স্পান পলি + টেক্সচার্ড ওভারলক",
  },
  {
    id: "woven-shirts",
    nameEn: "Woven Shirts, Trousers & Chinos (180 - 300 GSM)",
    nameBn: "ওভেন শার্ট, ফরমাল প্যান্ট ও চিনোস (১৮০ - ৩০০ GSM)",
    recommendedTicket: "Ticket 80 / 100",
    texCount: "Tex 35 - 40",
    needleSize: "Nm 80 - 90 / Size 12 - 14 (Regular)",
    minStrength: "1,600 cN",
    adviceEn: "Ensures crisp topstitching and strong tensile retention through multiple industrial wash cycles.",
    adviceBn: "নিখুঁত টপস্টিচিং এবং ইন্ডাস্ট্রিয়াল ওয়াশের পর সেলাইয়ের সর্বোচ্চ স্থায়িত্ব নিশ্চিত করে।",
    threadTypeEn: "Almas High-Tenacity Spun Polyester",
    threadTypeBn: "আলমাস হাই-টেনাসিটি স্পান পলিয়েস্টার",
  },
  {
    id: "heavy-denim",
    nameEn: "Heavy Denim & Workwear (10oz - 14oz / 350+ GSM)",
    nameBn: "ভারী ডেনিম ও ওয়ার্কওয়্যার (১০oz - ১৪oz / ৩৫০+ GSM)",
    recommendedTicket: "Ticket 30 / 50 (Topstitch) + Ticket 80 (Seam)",
    texCount: "Tex 60 - 105",
    needleSize: "Nm 110 - 130 / Size 18 - 21",
    minStrength: "3,800 cN+",
    adviceEn: "Resistant to aggressive enzyme, stone, and ozone bleaching without seam blowouts.",
    adviceBn: "স্টোন ওয়াশ, এনজাইম এবং ওজোন ওয়াশেও সুতার রং এবং টান অক্ষুণ্ণ থাকে।",
    threadTypeEn: "Almas Core Spun Heavy Denim Grade",
    threadTypeBn: "আলমাস কোর স্পান হেভি ডেনিম গ্রেড",
  },
  {
    id: "leather-shoes",
    nameEn: "Leather Footwear, Bags & Upholstery",
    nameBn: "চামড়ার জুতো, ট্রাভেল ব্যাগ ও সোফা সিট",
    recommendedTicket: "Ticket 20 / 40",
    texCount: "Tex 70 - 135",
    needleSize: "Nm 120 - 160 / Size 19 - 23 (Leather Point)",
    minStrength: "6,500 cN+",
    adviceEn: "Continuous filament bonded thread prevents ply un-twisting in tough multi-layer leather.",
    adviceBn: "বন্ডেড ফিলামেন্ট সুতা যা শক্ত চামড়ায় সেলাইয়ের সময় সুতার মুখ খোলা সম্পূর্ণ বন্ধ করে।",
    threadTypeEn: "Almas Bonded Continuous Filament",
    threadTypeBn: "আলমাস বন্ডেড কন্টিনিউয়াস ফিলামেন্ট",
  },
];

export function ThreadCalculator() {
  const { lang, t } = useLanguage();
  const [selectedId, setSelectedId] = useState<string>("tshirt-knits");

  const activeConfig = fabrics.find((f) => f.id === selectedId) || fabrics[0];

  return (
    <section id="calculator" className="py-24 relative bg-slate-50 bg-textile-pattern border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" icon={<Calculator className="w-3.5 h-3.5 text-cyan-700" />} className="mb-3 font-bn">
            {t("calcBadge")}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-bn">
            {t("calcTitle")}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            {t("calcDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Fabric Selection */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2 font-bn">
              {t("selectFabric")}
            </span>
            {fabrics.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between font-bn ${
                  selectedId === item.id
                    ? "bg-white border-cyan-500 shadow-md shadow-cyan-900/5 ring-1 ring-cyan-500"
                    : "bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      selectedId === item.id ? "bg-cyan-600" : "bg-slate-300"
                    }`}
                  />
                  <span
                    className={`text-sm font-bold ${
                      selectedId === item.id ? "text-cyan-800" : "text-slate-700"
                    }`}
                  >
                    {lang === "bn" ? item.nameBn : item.nameEn}
                  </span>
                </div>
                <ArrowRight
                  className={`w-4 h-4 transition-transform ${
                    selectedId === item.id
                      ? "text-cyan-600 translate-x-1"
                      : "text-slate-400"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right Column: Recommendation Card (Styled like a premium tailoring pattern sheet) */}
          <div className="lg:col-span-7">
            <Card className="bg-cloth-texture border-slate-200/90 p-8 shadow-xl shadow-slate-200/40 relative overflow-hidden stitch-border">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-6">
                <div>
                  <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest block">
                    {t("recommendationTitle")}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mt-1 font-bn">
                    {lang === "bn" ? activeConfig.threadTypeBn : activeConfig.threadTypeEn}
                  </h3>
                </div>
                <Badge variant="emerald" className="hidden sm:inline-flex">
                  Zero Breakage
                </Badge>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-xs text-slate-500 font-medium block mb-1">
                    {t("recTicket")}
                  </span>
                  <span className="text-xl font-black text-amber-800 font-bn">
                    {activeConfig.recommendedTicket}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-xs text-slate-500 font-medium block mb-1">
                    {t("recTex")}
                  </span>
                  <span className="text-xl font-black text-cyan-700 font-bn">
                    {activeConfig.texCount}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-xs text-slate-500 font-medium block mb-1">
                    {t("recNeedle")}
                  </span>
                  <span className="text-base font-bold text-slate-800">
                    {activeConfig.needleSize}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-xs text-slate-500 font-medium block mb-1">
                    {t("recStrength")}
                  </span>
                  <span className="text-base font-bold text-emerald-700">
                    {activeConfig.minStrength}
                  </span>
                </div>
              </div>

              {/* Advice Box */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 mb-0">
                <span className="text-xs font-bold text-amber-900 uppercase block mb-1 font-bn">
                  💡 {t("recSeamAdvise")}
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium font-bn">
                  {lang === "bn" ? activeConfig.adviceBn : activeConfig.adviceEn}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
