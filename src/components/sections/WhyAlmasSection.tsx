"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Check } from "lucide-react";

export function WhyAlmasSection() {
  const { lang, t } = useLanguage();

  const points = [
    { title: t("why1"), desc: t("why1Desc") },
    { title: t("why2"), desc: t("why2Desc") },
    { title: t("why3"), desc: t("why3Desc") },
    { title: t("why4"), desc: t("why4Desc") },
    { title: t("why5"), desc: t("why5Desc") },
    { title: t("why6"), desc: t("why6Desc") },
    { title: t("why7"), desc: t("why7Desc") },
    { title: t("why8"), desc: t("why8Desc") },
  ];

  return (
    <section id="why-almas" className="py-16 sm:py-24 bg-linear-to-b from-slate-50 via-slate-100 to-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-bn">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold text-cyan-800 clay-pill-blue px-4.5 py-1.5 rounded-full uppercase tracking-wider inline-block">
            {t("whyBadge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-3 mb-2">
            {t("whyTitle")}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            {t("whySubtitle")}
          </p>
        </div>

        {/* 8 Clean Clay 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl clay-card flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full clay-pill text-emerald-600 flex items-center justify-center font-black text-sm mb-4">
                  <Check className="w-5 h-5" />
                </div>

                <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 leading-snug">
                  {point.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {point.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-bold text-slate-400">
                <span>0{idx + 1} / 08</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
