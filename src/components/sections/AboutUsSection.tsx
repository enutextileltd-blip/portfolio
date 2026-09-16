"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Check } from "lucide-react";

export function AboutUsSection() {
  const { lang, t } = useLanguage();

  return (
    <section id="about" className="py-16 sm:py-24 bg-linear-to-b from-slate-100 via-slate-50 to-slate-100 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-bn">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Real Factory Image in Clay Card */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-80 sm:h-[420px] rounded-3xl overflow-hidden clay-card p-3">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900 clay-inset-box">
                <Image
                  src="/images/products/embroidery_machine_plant.jpg"
                  alt="Almas Accessories Industries Factory & Multi-Head Embroidery Machines"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold clay-pill-blue px-3.5 py-1 rounded-full inline-block mb-1.5">
                    {lang === "bn" ? "ফ্যাক্টরি ও প্রোডাকশন প্ল্যান্ট" : "Factory & Production Plant"}
                  </span>
                  <p className="text-sm sm:text-base font-black">
                    {lang === "bn" ? "আধুনিক কম্পিউটারাইজড এমব্রয়ডারি প্রোডাকশন" : "Modern Computerized Embroidery Production"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text Overview */}
          <div className="lg:col-span-7">
            <span className="text-xs font-extrabold text-cyan-800 clay-pill-blue px-4.5 py-1.5 rounded-full uppercase tracking-wider inline-block">
              {t("aboutBadge")}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-3 mb-4 leading-tight">
              {t("aboutTitle")}
            </h2>

            {/* Statement in Clay Card */}
            <div className="p-6 rounded-3xl clay-inset-box mb-6 border-l-4 border-l-cyan-600">
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-bold italic">
                &ldquo;{t("aboutStatement")}&rdquo;
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium mb-6">
              {t("aboutP2")}
            </p>

            {/* Clay Stat Cards */}
            <div className="grid grid-cols-3 gap-3.5 mb-6">
              <div className="p-4 rounded-3xl clay-card text-center hover:scale-105 transition-transform">
                <span className="text-xl sm:text-2xl font-black text-cyan-800 block">{t("aboutStat1Val")}</span>
                <span className="text-xs text-slate-500 font-bold block mt-0.5">{t("aboutStat1Label")}</span>
              </div>
              <div className="p-4 rounded-3xl clay-card text-center hover:scale-105 transition-transform">
                <span className="text-xl sm:text-2xl font-black text-cyan-800 block">{t("aboutStat2Val")}</span>
                <span className="text-xs text-slate-500 font-bold block mt-0.5">{t("aboutStat2Label")}</span>
              </div>
              <div className="p-4 rounded-3xl clay-card text-center hover:scale-105 transition-transform">
                <span className="text-xl sm:text-2xl font-black text-emerald-700 block">{t("aboutStat3Val")}</span>
                <span className="text-xs text-slate-500 font-bold block mt-0.5">{t("aboutStat3Label")}</span>
              </div>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-slate-700 font-bold">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{lang === "bn" ? "সরাসরি প্রস্তুতকারক ও পাইকারি সরবরাহকারী" : "Direct Manufacturer & Wholesale Supplier"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{lang === "bn" ? "২৪ ঘণ্টার মধ্যে ফ্যাক্টরিতে স্যাম্পল ডেলিভারি" : "24-Hour Doorstep Factory Sample Dispatch"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
