"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import productsData from "@/data/products.json";
import {
  ArrowLeft,
  Check,
} from "lucide-react";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = use(params);
  const { lang, t } = useLanguage();
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);

  const colorOptions = [
    { hex: "#ffffff", nameEn: "Optical White", nameBn: "অপটিক্যাল হোয়াইট", code: "ENU-001", border: true },
    { hex: "#0f172a", nameEn: "Pitch Jet Black", nameBn: "পিচ জেট ব্ল্যাক", code: "ENU-999" },
    { hex: "#dc2626", nameEn: "Crimson Red", nameBn: "ক্রিমসন রেড", code: "ENU-102" },
    { hex: "#eab308", nameEn: "Optic Canary Yellow", nameBn: "অপটিক ক্যানারি ইয়োলো", code: "ENU-312" },
    { hex: "#16a34a", nameEn: "Classic Emerald Green", nameBn: "ক্লাসিক এমারেল্ড গ্রিন", code: "ENU-412" },
    { hex: "#2563eb", nameEn: "Royal Cobalt Blue", nameBn: "রয়্যাল কোবাল্ট ব্লু", code: "ENU-628" },
  ];

  const [selectedColor, setSelectedColor] = useState({
    name: lang === "bn" ? colorOptions[0].nameBn : colorOptions[0].nameEn,
    code: colorOptions[0].code,
    hex: colorOptions[0].hex
  });

  const product = productsData.find((p) => p.id === id) || productsData[0];

  const name = lang === "bn" ? product.name_bn : product.name_en;
  const description = lang === "bn" ? product.description_bn : product.description_en;
  const tag = lang === "bn" ? product.tag_bn : product.tag_en;
  const features = product.features_bn && lang === "bn" ? product.features_bn : (product.features_en || []);
  const images = product.images || [];

  const getWhatsAppUrl = () => {
    const phone = "8801819898611";
    const text =
      lang === "bn"
        ? `আসসালামু আলাইকুম, ALMAS ACCESSORIES INDUSTRIES।\nআমি আপনাদের ওয়েবসাইটের প্রোডাক্ট পেজের মাধ্যমে এই এমব্রয়ডারি সুতাটি অর্ডার / দরদাম জানতে চাচ্ছি:\n\n🧵 সুতার নাম: ${name}\n📌 স্পেসিফিকেশন: ${tag}\n🎨 নির্বাচিত সুতার রঙ: ${selectedColor.name} (${selectedColor.code})\n\nদয়া করে এটার দরদাম এবং ডেলিভারির বিস্তারিত জানাবেন। ধন্যবাদ!`
        : `Hello ALMAS ACCESSORIES INDUSTRIES,\nI would like to inquire about ordering this embroidery thread from your product detail page:\n\n🧵 Product: ${name}\n📌 Specification: ${tag}\n🎨 Selected Shade: ${selectedColor.name} (${selectedColor.code})\n\nPlease share price quotation and delivery details. Thank you!`;

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Image Showcase Grid */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative w-full h-80 sm:h-96 rounded-3xl clay-card overflow-hidden p-4">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white clay-inset-box p-2">
                <Image
                  src={images[selectedImgIdx] || images[0]}
                  alt={name}
                  fill
                  priority
                  className="object-contain p-2 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Thumbnail switcher buttons */}
            {images.length > 1 && (
              <div className="flex flex-wrap items-center gap-2.5">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImgIdx(idx)}
                    className={`relative w-16 h-16 rounded-2xl overflow-hidden cursor-pointer bg-white transition-all ${
                      selectedImgIdx === idx
                        ? "ring-3 ring-cyan-500 scale-105 shadow-md"
                        : "clay-card-sm opacity-80 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${name} preview ${idx + 1}`}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Spec Sheets & Details */}
          <div className="lg:col-span-7">
            <div className="clay-card p-6 sm:p-8 rounded-3xl">
              <div className="pb-4 border-b border-slate-200/80 mb-6">
                <span className="text-xs font-extrabold text-cyan-800 clay-pill-blue px-3.5 py-1 rounded-full uppercase inline-block mb-2">
                  {tag}
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  {name}
                </h1>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium mb-6">
                {description}
              </p>

              {/* Technical Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                <div className="p-4 rounded-2xl clay-card-sm">
                  <span className="text-xs text-slate-500 font-bold block mb-0.5">
                    Application
                  </span>
                  <span className="text-sm font-black text-slate-900">
                    {lang === "bn" ? "কম্পিউটারাইজড এমব্রয়ডারি মেশিন" : "Computerized Embroidery Machines"}
                  </span>
                </div>
                <div className="p-4 rounded-2xl clay-card-sm">
                  <span className="text-xs text-slate-500 font-bold block mb-0.5">
                    Lubrication
                  </span>
                  <span className="text-sm font-black text-slate-900">
                    {lang === "bn" ? "সিলিকন ফিনিশ (জিরো ব্রেক)" : "Micro Silicon Wax (Zero Break)"}
                  </span>
                </div>
              </div>

              {/* Color Shade Selector */}
              <div className="p-4.5 rounded-3xl clay-inset-box mb-6">
                <span className="text-xs text-slate-600 font-bold uppercase tracking-wider block mb-2.5">
                  {lang === "bn" ? "সুতার রং নির্বাচন করুন" : "Select Thread Color"}
                </span>
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  {colorOptions.map((opt) => (
                    <button
                      key={opt.code}
                      onClick={() => setSelectedColor({ name: lang === "bn" ? opt.nameBn : opt.nameEn, code: opt.code, hex: opt.hex })}
                      className={`relative w-8 h-8 rounded-full cursor-pointer transition-all ${
                        selectedColor.code === opt.code
                          ? "ring-3 ring-cyan-600 ring-offset-2 scale-110 shadow-sm"
                          : "hover:scale-105"
                      }`}
                      style={{
                        backgroundColor: opt.hex,
                        border: opt.border ? "1px solid #cbd5e1" : "none",
                      }}
                      title={lang === "bn" ? opt.nameBn : opt.nameEn}
                    />
                  ))}
                </div>
                <div className="text-xs font-bold text-slate-700 font-mono">
                  {lang === "bn" ? "নির্বাচিত শেড: " : "Selected Shade: "}
                  <span className="text-cyan-700 font-black">{selectedColor.name}</span>
                  <span className="text-slate-500 ml-2">({selectedColor.code})</span>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-2 pt-4 border-t border-slate-200/80 mb-6">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Highlights
                </span>
                {features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* WhatsApp Order Action */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full clay-btn-emerald font-black text-sm text-white"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>{lang === "bn" ? "হোয়াটসঅ্যাপে অর্ডার / দরদাম জানুন" : "WhatsApp Order Inquiry"}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
