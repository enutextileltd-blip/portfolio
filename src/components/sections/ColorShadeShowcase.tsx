"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import colorsData from "@/data/colors.json";
import { Search, ArrowRight } from "lucide-react";

export function ColorShadeShowcase() {
  const { lang, t } = useLanguage();
  const [selectedFamily, setSelectedFamily] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const families = [
    { id: "all", label: lang === "bn" ? "সকল রং" : "All Colors" },
    { id: "white", label: lang === "bn" ? "সাদা/ক্রিম" : "Whites" },
    { id: "dark", label: lang === "bn" ? "কালো/স্লেট" : "Dark/Grays" },
    { id: "blue", label: lang === "bn" ? "নীল/নেভি" : "Blues" },
    { id: "red", label: lang === "bn" ? "লাল/মেরুন" : "Reds" },
    { id: "pink", label: lang === "bn" ? "গোলাপী" : "Pinks" },
    { id: "yellow", label: lang === "bn" ? "গোল্ডেন" : "Golds" },
    { id: "green", label: lang === "bn" ? "সবুজ" : "Greens" },
    { id: "purple", label: lang === "bn" ? "পার্পল" : "Purples" },
  ];

  const filtered = colorsData
    .filter((s) => {
      const matchFam = selectedFamily === "all" || s.family === selectedFamily;
      const q = searchQuery.trim().toLowerCase();
      const matchQ =
        q === "" ||
        s.code.toLowerCase().includes(q) ||
        s.nameEn.toLowerCase().includes(q) ||
        s.nameBn.toLowerCase().includes(q);
      return matchFam && matchQ;
    })
    .slice(0, 18);

  return (
    <section id="colors" className="py-16 sm:py-24 bg-linear-to-b from-slate-50 via-slate-100 to-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-bn">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-extrabold text-cyan-800 clay-pill-blue px-4.5 py-1.5 rounded-full uppercase tracking-wider inline-block">
              {t("colorsBadge")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-3 mb-2">
              {t("colorsTitle")}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl font-medium">
              {lang === "bn"
                ? "আমাদের স্ট্যান্ডার্ড ৮০০+ শেড থেকে কিছু জনপ্রিয় কালার সোয়াচ নিচে প্রদর্শিত হলো।"
                : "Explore our popular color swatches from our 800+ ready-stock shade spectrum."}
            </p>
          </div>

          <Link
            href="/colors"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full clay-btn-primary font-bold text-sm shrink-0"
          >
            <span>{lang === "bn" ? "সম্পূর্ণ কালার লাইব্রেরি দেখুন (৮০০+)" : "Explore Full 800+ Color Library"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter and Search Bar in Clay Container */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 p-3.5 rounded-3xl clay-inset-box">
          <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
            {families.map((fam) => (
              <button
                key={fam.id}
                onClick={() => setSelectedFamily(fam.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedFamily === fam.id
                    ? "clay-btn-secondary text-slate-900 scale-105"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {fam.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === "bn" ? "কোড খুঁজুন (যেমন: AL-520)..." : "Search code (e.g. AL-520)..."}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-full bg-white border border-slate-200 text-slate-800 shadow-inner focus:outline-none focus:border-cyan-600"
            />
          </div>
        </div>

        {/* Swatches Grid in Clay 3D Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-10">
          {filtered.map((s) => (
            <div
              key={s.code}
              className="p-3.5 rounded-3xl clay-card text-left hover:scale-105 transition-transform"
            >
              <div
                className="w-full h-16 rounded-2xl mb-2.5 shadow-inner relative overflow-hidden flex items-center justify-center clay-inset-box"
                style={{
                  backgroundColor: s.hex,
                  border: s.border ? "1px solid #cbd5e1" : "none",
                }}
              >
                <div className="absolute inset-0 bg-linear-to-r from-black/15 via-white/20 to-black/15 opacity-60" />
                <span className="text-[9px] font-black uppercase text-white drop-shadow-md tracking-wider opacity-75 font-mono z-10">
                  120/2
                </span>
              </div>
              <span className="text-[11px] font-black text-cyan-700 block font-mono">{s.code}</span>
              <h4 className="text-xs font-bold text-slate-800 truncate">{lang === "bn" ? s.nameBn : s.nameEn}</h4>
              <span className="text-[10px] text-slate-400 block font-mono">{s.pantone}</span>
            </div>
          ))}
        </div>

        {/* Home Page Link to Full Page in Clay Panel */}
        <div className="p-6 sm:p-8 rounded-3xl clay-card-blue flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-black text-slate-900">
              {lang === "bn" ? "সকল ৮০০+ শেড একসাথে দেখতে চান?" : "Want to view all 800+ shades in one place?"}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              {lang === "bn"
                ? "আমাদের ডেডিকেটেড কালার পেজে সকল শেড ফিল্টার করুন, শেড সিলেক্ট করুন এবং সরাসরি WhatsApp-এ কোটেশন চান।"
                : "Explore our dedicated shade page to filter, select multiple shades, and request instant WhatsApp quotes."}
            </p>
          </div>

          <Link
            href="/colors"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full clay-btn-primary font-bold text-xs sm:text-sm shrink-0"
          >
            <span>{lang === "bn" ? "সকল কালার দেখুন" : "View All Colors"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
