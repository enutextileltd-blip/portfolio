"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import productsData from "@/data/products.json";
import { Check } from "lucide-react";

export function ThreadCatalog() {
  const { lang, t } = useLanguage();
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);

  const featured = productsData[0];
  const others = productsData.slice(1);
  const featuredImages = featured.images || [];

  const getWhatsAppUrl = (name: string, spec: string) => {
    const phone = "8801819898611";
    const text =
      lang === "bn"
        ? `আসসালামু আলাইকুম, ALMAS ACCESSORIES INDUSTRIES।\nআমি আপনাদের ওয়েবসাইটের মাধ্যমে এই এমব্রয়ডারি সুতাটি অর্ডার / দরদাম জানতে চাচ্ছি:\n\n🧵 সুতার নাম: ${name}\n📌 স্পেসিফিকেশন: ${spec}\n\nদয়া করে মূল্য ও ডেলিভারির বিস্তারিত জানাবেন। ধন্যবাদ!`
        : `Hello ALMAS ACCESSORIES INDUSTRIES,\nI would like to inquire about ordering this embroidery thread:\n\n🧵 Product: ${name}\n📌 Specification: ${spec}\n\nPlease share quotation and delivery details. Thank you!`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="products" className="py-16 sm:py-24 bg-linear-to-b from-slate-100 via-slate-50 to-slate-100 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-bn">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold text-cyan-800 clay-pill-blue px-4.5 py-1.5 rounded-full uppercase tracking-wider inline-block">
            {lang === "bn" ? "আমাদের পণ্য" : "Our Products"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-3 mb-2">
            {lang === "bn" ? "প্রিমিয়াম এমব্রয়ডারি সুতা" : "Premium Embroidery Thread Collection"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            {lang === "bn"
              ? "কম্পিউটারাইজড হাই-স্পিড এমব্রয়ডারি মেশিনের জন্য শতভাগ এক্সপোর্ট কোয়ালিটি সুতা।"
              : "100% export quality threads engineered for computerized high-speed embroidery machines."}
          </p>
        </div>

        {/* 1. Featured Spotlight Card with Modern Clay 3D Lift */}
        <div className="clay-card rounded-3xl p-6 sm:p-8 lg:p-10 mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image Box */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-white/95 clay-inset-box p-3">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={featuredImages[selectedImgIdx] || featuredImages[0]}
                    alt="Almas Thread 120/2"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-contain p-2 hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {featuredImages.length > 1 && (
                <div className="flex items-center gap-2.5">
                  {featuredImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImgIdx(idx)}
                      className={`relative w-16 h-16 rounded-2xl overflow-hidden cursor-pointer bg-white transition-all ${
                        selectedImgIdx === idx ? "ring-3 ring-cyan-500 scale-105 shadow-md" : "clay-card-sm opacity-80 hover:opacity-100"
                      }`}
                    >
                      <Image src={img} alt={`Preview ${idx + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Spec Details */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-cyan-800 clay-pill-blue px-3.5 py-1 rounded-full uppercase inline-block">
                  ⭐ {t("prodBadge")}
                </span>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mt-2.5 mb-1">
                  {t("prodTitle")}
                </h3>
                <div className="text-sm sm:text-base font-bold text-cyan-700 mb-4">
                  {t("prodSub")}
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-medium">
                  {t("prodDesc")}
                </p>

                {/* Key Specifications Grid in Clay Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                  <div className="p-3.5 rounded-2xl clay-card-sm">
                    <span className="text-xs text-slate-500 font-bold block">{t("threadCount")}</span>
                    <span className="text-sm font-black text-slate-900">120/2 Specification</span>
                  </div>
                  <div className="p-3.5 rounded-2xl clay-card-sm">
                    <span className="text-xs text-slate-500 font-bold block">{t("application")}</span>
                    <span className="text-sm font-black text-slate-900">Computerized Multi-Head Machines</span>
                  </div>
                  <div className="p-3.5 rounded-2xl clay-card-sm">
                    <span className="text-xs text-slate-500 font-bold block">{t("availableColors")}</span>
                    <span className="text-sm font-black text-slate-900">800+ Ready Color Shades</span>
                  </div>
                  <div className="p-3.5 rounded-2xl clay-card-sm">
                    <span className="text-xs text-slate-500 font-bold block">{t("pkgInfo")}</span>
                    <span className="text-sm font-black text-slate-900">5000m & 4000m King Cones</span>
                  </div>
                </div>

                {/* Bullets */}
                <div className="space-y-1.5 pb-6 border-b border-slate-300/80 mb-6 text-xs sm:text-sm text-slate-700 font-bold">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{lang === "bn" ? "মাইক্রো সিলিকন লুব্রিকেশন (জিরো ব্রেক)" : "Micro Silicon Lubrication (Zero Break)"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{lang === "bn" ? "উন্নত উজ্জ্বলতা ও নিখুঁত ফিনিশিং" : "High Luster & Premium Finish"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{lang === "bn" ? "ওয়াশ ও ক্লোরিন ব্লিচ ফাস্টনেস ৪.৫+" : "Wash & Bleach Fastness Grade 4.5+"}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5">
                <a
                  href={getWhatsAppUrl("Almas Thread 120/2", "120/2 Count")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full clay-btn-emerald font-black text-sm text-white"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>{t("orderNow")}</span>
                </a>

                <Link
                  href={`/product/${featured.id}`}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-full clay-btn-secondary text-slate-800 font-bold text-sm"
                >
                  {lang === "bn" ? "বিস্তারিত স্পেসিফিকেশন" : "View Full Specs"}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Other Embroidery Lines in Clay Cards */}
        <div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-6">
            {lang === "bn" ? "অন্যান্য বিশেষ এমব্রয়ডারি সুতা" : "Other Specialized Embroidery Lines"}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {others.map((item) => {
              const name = lang === "bn" ? item.name_bn : item.name_en;
              const tag = lang === "bn" ? item.tag_bn : item.tag_en;
              const desc = lang === "bn" ? item.description_bn : item.description_en;

              return (
                <div
                  key={item.id}
                  className="clay-card rounded-3xl p-4.5 flex flex-col justify-between"
                >
                  <Link href={`/product/${item.id}`} className="block">
                    <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-white mb-3 clay-inset-box p-1">
                      <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <Image
                          src={item.images[0]}
                          alt={name}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <span className="text-[11px] font-extrabold text-cyan-800 clay-pill-blue px-2.5 py-0.5 rounded-full block w-fit mb-1.5">
                      {tag}
                    </span>
                    <h4 className="text-base font-black text-slate-900 leading-snug mb-1">
                      {name}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-3">
                      {desc}
                    </p>
                  </Link>

                  <a
                    href={getWhatsAppUrl(name, tag)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-full clay-btn-emerald text-white font-bold text-xs text-center block"
                  >
                    {lang === "bn" ? "WhatsApp অর্ডার" : "WhatsApp Order"}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
