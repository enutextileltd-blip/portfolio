"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Check } from "lucide-react";

export function QualityDyeingSection() {
  const { lang, t } = useLanguage();

  return (
    <section id="dyeing" className="py-16 sm:py-24 bg-linear-to-b from-slate-50 via-slate-100 to-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-bn">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold text-cyan-800 clay-pill-blue px-4.5 py-1.5 rounded-full uppercase tracking-wider inline-block">
            {t("dyeingBadge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-3 mb-4">
            {t("dyeingTitle")}
          </h2>

          <div className="p-5.5 rounded-3xl clay-inset-box max-w-2xl mx-auto text-slate-800 font-bold text-base sm:text-lg leading-relaxed italic border-l-4 border-l-cyan-600">
            &ldquo;{t("dyeingStatement")}&rdquo;
          </div>
        </div>

        {/* 3 Clay 3D Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-7 rounded-3xl clay-card hover:scale-105 transition-transform flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full clay-pill text-cyan-700 flex items-center justify-center font-black text-sm mb-4">
                01
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2.5">
                {t("dyeingFeat1Title")}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {t("dyeingFeat1Desc")}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-bold text-cyan-700">
              Delta E &lt; 0.3 Precision
            </div>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl clay-card hover:scale-105 transition-transform flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full clay-pill text-cyan-700 flex items-center justify-center font-black text-sm mb-4">
                02
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2.5">
                {t("dyeingFeat2Title")}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {t("dyeingFeat2Desc")}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-bold text-cyan-700">
              Grade 4.5+ Wash Resistance
            </div>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl clay-card hover:scale-105 transition-transform flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full clay-pill text-cyan-700 flex items-center justify-center font-black text-sm mb-4">
                03
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2.5">
                {t("dyeingFeat3Title")}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {t("dyeingFeat3Desc")}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-bold text-emerald-700">
              Baby Clothing Certified Safe
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
