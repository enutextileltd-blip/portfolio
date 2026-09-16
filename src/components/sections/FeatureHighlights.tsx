"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Zap,
  Droplets,
  ShieldCheck,
  Globe2,
  Leaf,
  Layers,
} from "lucide-react";

export function FeatureHighlights() {
  const { lang, t } = useLanguage();

  const capabilities = [
    {
      icon: <Zap className="w-6 h-6 text-amber-600" />,
      title: t("feat1Title"),
      description: t("feat1Desc"),
    },
    {
      icon: <Droplets className="w-6 h-6 text-cyan-600" />,
      title: t("feat2Title"),
      description: t("feat2Desc"),
    },
    {
      icon: <Layers className="w-6 h-6 text-emerald-600" />,
      title: t("feat3Title"),
      description: t("feat3Desc"),
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: t("feat4Title"),
      description: t("feat4Desc"),
    },
    {
      icon: <Globe2 className="w-6 h-6 text-indigo-600" />,
      title: lang === "bn" ? "আমদানিকৃত ও রপ্তানিমুখী সুতা" : "Imported & Export-Grade Filaments",
      description:
        lang === "bn"
          ? "ইউরোপ ও এশিয়ার শীর্ষস্থানীয় পলিয়েস্টার পলিমার থেকে সংগৃহীত কাঁচামাল যা বৈশ্বিক রপ্তানি মান নিশ্চিত করে।"
          : "Sourced from top-tier virgin polymer producers ensuring compliance with demanding US & EU garment buyer audits.",
    },
    {
      icon: <Leaf className="w-6 h-6 text-teal-600" />,
      title: lang === "bn" ? "পরিবেশবান্ধব ও শিশু পোশাক উপযোগী" : "OEKO-TEX Class I Baby-Safe",
      description:
        lang === "bn"
          ? "ক্ষতিকারক রাসায়নিক এবং হেভি মেটাল মুক্ত যা শিশু ও সংবেদনশীল ত্বকের পোশাকে শতভাগ নিরাপদ।"
          : "Free from harmful aromatic amines, heavy metals, and forbidden chemicals. Safe for infant and intimate wear.",
    },
  ];

  return (
    <section id="engineering" className="py-24 relative bg-white bg-textile-pattern border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" className="mb-3 font-bn">
            {t("featBadge")}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-bn">
            {t("featTitle")}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium font-bn">
            {t("featDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => (
            <Card
              key={idx}
              className="bg-white border-slate-200 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 group stitch-border p-7 relative overflow-hidden"
            >
              {/* Subtle Decorative Sewing Stitch Lines crossing the top right of each card */}
              <div className="absolute -top-6 -right-6 w-16 h-16 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <svg className="w-full h-full" viewBox="0 0 64 64">
                  <path d="M 0 32 C 16 16, 48 48, 64 32" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
                  <path d="M 0 42 C 16 26, 48 58, 64 42" stroke="#d97706" strokeWidth="1" strokeDasharray="3 2" fill="none" />
                </svg>
              </div>

              {/* Icon Container with stitch boundary */}
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-dashed border-slate-300 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-cyan-50 group-hover:border-cyan-400 transition-all duration-300">
                {cap.icon}
              </div>

              <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors font-bn">
                {cap.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium font-bn">
                {cap.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
