"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import colorsData from "@/data/colors.json";
import {
  ArrowLeft,
  Search,
  Check,
  PhoneCall,
} from "lucide-react";

export default function ColorsPage() {
  const { lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFamily, setSelectedFamily] = useState("all");
  const [selectedShades, setSelectedShades] = useState<string[]>([]);

  const families = [
    { id: "all", labelBn: "সকল রং", labelEn: "All Colors", count: colorsData.length },
    { id: "white", labelBn: "সাদা ও ক্রিম", labelEn: "Whites & Creams", count: colorsData.filter((c) => c.family === "white").length },
    { id: "dark", labelBn: "কালো ও স্লেট", labelEn: "Blacks & Grays", count: colorsData.filter((c) => c.family === "dark").length },
    { id: "blue", labelBn: "নীল ও নেভি", labelEn: "Blues & Navies", count: colorsData.filter((c) => c.family === "blue").length },
    { id: "red", labelBn: "লাল ও মেরুন", labelEn: "Reds & Maroons", count: colorsData.filter((c) => c.family === "red").length },
    { id: "pink", labelBn: "গোলাপী ও ফুসিয়া", labelEn: "Pinks & Corals", count: colorsData.filter((c) => c.family === "pink").length },
    { id: "yellow", labelBn: "গোল্ড ও হলুদ", labelEn: "Yellows & Gold", count: colorsData.filter((c) => c.family === "yellow").length },
    { id: "green", labelBn: "সবুজ ও অলিভ", labelEn: "Greens & Olives", count: colorsData.filter((c) => c.family === "green").length },
    { id: "purple", labelBn: "পার্পল ও ভায়োলেট", labelEn: "Purples & Violets", count: colorsData.filter((c) => c.family === "purple").length },
    { id: "brown", labelBn: "ব্রাউন ও আর্থ", labelEn: "Browns & Earth", count: colorsData.filter((c) => c.family === "brown").length },
  ];

  const filtered = useMemo(() => {
    return colorsData.filter((s) => {
      const matchFam = selectedFamily === "all" || s.family === selectedFamily;
      const q = searchQuery.trim().toLowerCase();
      const matchQ =
        q === "" ||
        s.code.toLowerCase().includes(q) ||
        s.nameEn.toLowerCase().includes(q) ||
        s.nameBn.toLowerCase().includes(q) ||
        s.pantone.toLowerCase().includes(q);
      return matchFam && matchQ;
    });
  }, [selectedFamily, searchQuery]);

  const toggleSelectShade = (code: string) => {
    if (selectedShades.includes(code)) {
      setSelectedShades(selectedShades.filter((c) => c !== code));
    } else {
      setSelectedShades([...selectedShades, code]);
    }
  };

  const getWhatsAppBatchUrl = () => {
    const phone = "8801819898611";
    const shadeList = selectedShades.join(", ");
    const text =
      lang === "bn"
        ? `আসসালামু আলাইকুম, ALMAS THREAD।\nআমি আপনাদের কালার ক্যাটালগ থেকে এই শেডগুলো অর্ডার / ল্যাব ডিপ রিকোয়েস্ট করতে চাচ্ছি:\n\n🎨 নির্বাচিত শেড কোড: ${shadeList || "N/A"}\n\nদয়া করে মূল্য ও প্রাপ্যতা জানাবেন। ধন্যবাদ!`
        : `Hello ALMAS THREAD,\nI would like to inquire about these specific thread shades from your catalog:\n\n🎨 Selected Shade Codes: ${shadeList || "N/A"}\n\nPlease share availability and lab dip quotation. Thank you!`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-100 via-slate-50 to-slate-100 pt-28 pb-20 font-bn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-cyan-700 clay-card-sm px-4 py-2 rounded-full transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-600" />
            <span>{lang === "bn" ? "হোম পেজে ফিরে যান" : "Back to Home"}</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="clay-card rounded-3xl p-6 sm:p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-extrabold text-cyan-800 clay-pill-blue px-4 py-1 rounded-full uppercase tracking-wider inline-block">
                {lang === "bn" ? "সম্পূর্ণ কালার লাইব্রেরি" : "Full Color Shade Library"}
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3 mb-2">
                {lang === "bn" ? "আলমাস থ্রেড — ৮০০+ শেড কালেকশন" : "Almas Thread — 800+ Shade Collection"}
              </h1>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl font-medium leading-relaxed">
                {lang === "bn"
                  ? "কম্পিউটারাইজড এমব্রয়ডারি মেশিনের জন্য প্রস্তুতকৃত সকল উজ্জ্বল রঙের তালিকা। যেকোনো শেড ক্লিক করে সিলেক্ট করুন এবং সরাসরি WhatsApp-এ কোটেশন চান।"
                  : "Explore our complete high-luster embroidery thread catalog. Click to select shades and request instant lab dip matching or physical color shade cards."}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="https://wa.me/8801819898611?text=Hello%20Almas%20Thread,%20I%20would%20like%20to%20request%20the%20physical%20Full%20Color%20Shade%20Book%20for%20our%20factory."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full clay-btn-primary font-bold text-sm text-center"
              >
                <span>{lang === "bn" ? "ফিজিক্যাল শেড বুক চান" : "Request Physical Shade Book"}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Selected Shades Floating Action Bar */}
        {selectedShades.length > 0 && (
          <div className="sticky top-24 z-30 mb-6 p-4.5 rounded-3xl bg-slate-900 text-white shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 animate-in slide-in-from-top-2 border border-slate-700">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-cyan-400 text-slate-950 font-black flex items-center justify-center text-xs shrink-0 shadow-sm">
                {selectedShades.length}
              </span>
              <div>
                <span className="text-xs font-bold text-slate-300 block">
                  {lang === "bn" ? "নির্বাচিত শেড কোড:" : "Selected Shade Codes:"}
                </span>
                <span className="text-xs font-black text-cyan-300 font-mono truncate max-w-md block">
                  {selectedShades.join(", ")}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={() => setSelectedShades([])}
                className="px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors cursor-pointer"
              >
                {lang === "bn" ? "ক্লিয়ার করুন" : "Clear All"}
              </button>

              <a
                href={getWhatsAppBatchUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full clay-btn-emerald text-white font-black text-xs"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{lang === "bn" ? "WhatsApp এ কোটেশন চান" : "Inquire Selected via WhatsApp"}</span>
              </a>
            </div>
          </div>
        )}

        {/* Filter and Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-6 p-3.5 rounded-3xl clay-inset-box">
          <div className="flex flex-wrap gap-1.5 w-full lg:w-auto">
            {families.map((fam) => (
              <button
                key={fam.id}
                onClick={() => setSelectedFamily(fam.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedFamily === fam.id
                    ? "clay-btn-secondary text-slate-900 scale-105"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>{lang === "bn" ? fam.labelBn : fam.labelEn}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    selectedFamily === fam.id ? "bg-slate-800 text-white" : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {fam.count}
                </span>
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === "bn" ? "কালার কোড / নাম / প্যান্টোন খুঁজুন..." : "Search code, name, or Pantone..."}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-full border border-slate-200 bg-white shadow-inner text-slate-800 focus:outline-none focus:border-cyan-600"
            />
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-4 px-1">
          <span>
            {lang === "bn"
              ? `প্রদর্শিত হচ্ছে: ${filtered.length} টি কালার শেড`
              : `Showing: ${filtered.length} Color Shades`}
          </span>
          <span className="text-cyan-700 font-mono">100% Export Grade Polyester 120/2</span>
        </div>

        {/* Full Swatch Matrix Grid with 3D Tactile Clay Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3.5">
          {filtered.map((s) => {
            const isSelected = selectedShades.includes(s.code);

            return (
              <div
                key={s.code}
                onClick={() => toggleSelectShade(s.code)}
                className={`p-3 rounded-2xl transition-all cursor-pointer group flex flex-col justify-between relative select-none ${
                  isSelected
                    ? "clay-inset-box ring-3 ring-cyan-500 scale-[1.03]"
                    : "clay-card hover:scale-[1.04]"
                }`}
              >
                {/* Selected Check Pill */}
                {isSelected && (
                  <div className="absolute top-2 right-2 z-20 w-5 h-5 rounded-full bg-cyan-600 text-white flex items-center justify-center shadow-xs">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                )}

                {/* Color Swatch Sheen */}
                <div
                  className="w-full h-16 rounded-xl mb-2.5 shadow-inner relative overflow-hidden flex items-center justify-center clay-inset-box"
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

                <div>
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[11px] font-black text-cyan-700 font-mono">
                      {s.code}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 truncate mb-0.5">
                    {lang === "bn" ? s.nameBn : s.nameEn}
                  </h4>
                  <span className="text-[9px] font-semibold text-slate-400 block truncate font-mono">
                    {s.pantone}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout & Custom Pantone Banner in Clay Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl clay-card-blue flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-emerald-800 clay-pill px-3.5 py-1 rounded-full uppercase inline-block">
              {lang === "bn" ? "ল্যাব ডিপ গ্যারান্টি" : "Lab Dip Guarantee"}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2.5 mb-1">
              {lang === "bn" ? "বায়ারের নির্দিষ্ট Pantone বা কাস্টম সোয়াচ ম্যাচিং চান?" : "Looking for Custom Pantone Match or Fabric Swatch Dip?"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              {lang === "bn"
                ? "আমাদের স্পেকট্রোফটোমিটার ল্যাবে যেকোনো কালার শেড নিখুঁতভাবে ম্যাচ করে ২৪-৪৮ ঘণ্টার মধ্যে ল্যাব ডিপ টেস্ট স্যাম্পল পাঠানো হয়।"
                : "Our computerized color spectrophotometer ensures zero shade variation (Delta E < 0.3) with 24-48h lab dip dispatch across Bangladesh."}
            </p>
          </div>

          <a
            href="https://wa.me/8801819898611?text=Hello%20Almas%20Thread,%20I%20need%20custom%20Pantone%20matching%20for%20our%20garment%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full clay-btn-primary font-black text-sm shrink-0"
          >
            {lang === "bn" ? "কাস্টম ল্যাব ডিপ চান" : "Request Custom Lab Dip"}
          </a>
        </div>
      </div>
    </div>
  );
}
