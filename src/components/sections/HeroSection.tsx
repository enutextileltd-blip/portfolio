"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, PhoneCall, Check } from "lucide-react";

export function HeroSection() {
  const { lang, t } = useLanguage();

  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 bg-linear-to-b from-slate-100 via-slate-50 to-slate-100 overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Text & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left font-bn">
            {/* 3D Puffy Clay Tag Badge */}
            <div className="mb-4 inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full clay-pill-blue text-cyan-900 text-xs sm:text-sm font-extrabold">
              <span>🧵</span>
              <span>{t("bannerSlogan1")}</span>
            </div>

            {/* Brand Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-2">
              {lang === "bn" ? "আলমাস থ্রেড" : "ALMAS THREAD"}
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl sm:text-2xl font-extrabold text-cyan-700 mb-4">
              {t("brandSubtitle")}
            </h2>

            {/* 3D Recessed Slogan Box */}
            <div className="mb-6 p-4.5 rounded-3xl clay-inset-box max-w-xl">
              <p className="text-base sm:text-lg font-bold text-slate-800 italic">
                &ldquo;{t("bannerSlogan2")}&rdquo;
              </p>
            </div>

            {/* Core Value Statement */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8 font-medium">
              {t("heroStatement")}
            </p>

            {/* 3D Inflated Clay Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-9">
              <Link
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full clay-btn-primary font-black text-base text-center"
              >
                <span>{t("viewProducts")}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full clay-btn-secondary font-bold text-base text-center"
              >
                <PhoneCall className="w-4 h-4 text-cyan-700" />
                <span>{t("contactUs")}</span>
              </Link>
            </div>

            {/* 3D Puffy Clay Spec Metric Cards */}
            <div className="grid grid-cols-3 gap-3.5 w-full max-w-lg pt-4 border-t border-slate-300/60 text-xs sm:text-sm text-slate-700 font-bold">
              <div className="p-4 rounded-3xl clay-card text-center hover:scale-105 transition-transform">
                <span className="text-lg sm:text-xl font-black text-cyan-800 block">120/2</span>
                <span className="text-[11px] text-slate-500 font-medium block mt-0.5">Standard Spec</span>
              </div>
              <div className="p-4 rounded-3xl clay-card text-center hover:scale-105 transition-transform">
                <span className="text-lg sm:text-xl font-black text-cyan-800 block">800+</span>
                <span className="text-[11px] text-slate-500 font-medium block mt-0.5">Ready Shades</span>
              </div>
              <div className="p-4 rounded-3xl clay-card text-center hover:scale-105 transition-transform">
                <span className="text-lg sm:text-xl font-black text-emerald-700 block">Zero Break</span>
                <span className="text-[11px] text-slate-500 font-medium block mt-0.5">Silicone Wax</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real Product Photo with Puffy 3D Clay Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl clay-card p-4 sm:p-5 group">
              <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-white/95 clay-inset-box p-3">
                <Image
                  src="/images/products/almas_thread_120_2.jpg"
                  alt="Almas Thread 120/2 100% Export Quality Embroidery Thread"
                  fill
                  priority
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="pt-4 px-2 flex items-center justify-between font-bn text-xs sm:text-sm">
                <div>
                  <span className="font-black text-slate-900 block text-sm sm:text-base">Almas Thread 120/2</span>
                  <span className="text-slate-500 font-medium text-xs">5,000 Meter King Cone</span>
                </div>
                <span className="px-3.5 py-1.5 rounded-full clay-btn-primary text-white font-black text-xs">
                  100% Export
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
