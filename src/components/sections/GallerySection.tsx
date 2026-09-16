"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function GallerySection() {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState("all");

  const items = [
    {
      id: 1,
      title: lang === "bn" ? "মাল্টি-হেড কম্পিউটারাইজড এমব্রয়ডারি মেশিন" : "Multi-Head Computerized Embroidery Machine",
      cat: "machines",
      image: "/images/products/embroidery_machine_plant.jpg",
    },
    {
      id: 2,
      title: lang === "bn" ? "আলমাস থ্রেড ১২০/২ কিং কোন" : "Almas Thread 120/2 King Spool",
      cat: "products",
      image: "/images/products/almas_thread_120_2.jpg",
    },
    {
      id: 3,
      title: lang === "bn" ? "এক্সপোর্ট প্যাকেজিং ও কালার কালেকশন" : "Export Packaging & Color Collection",
      cat: "products",
      image: "/images/products/thread_cones_display.jpg",
    },
    {
      id: 4,
      title: lang === "bn" ? "হাই-স্পিড এমব্রয়ডারি প্রোডাকশন লাইন" : "High-Speed Embroidery Production Line",
      cat: "machines",
      image: "/images/products/embroidery-2.jpg",
    },
    {
      id: 5,
      title: lang === "bn" ? "আধুনিক ডাইং ল্যাব ও শেড কার্ড" : "Modern Dyeing Lab & Shade Card",
      cat: "dyeing",
      image: "/images/products/color-card.jpg",
    },
    {
      id: 6,
      title: lang === "bn" ? "মাল্টি-কালার ল্যাব ডিপ শেড সম্ভার" : "Multi-Color Lab Dip Shade Assortment",
      cat: "dyeing",
      image: "/images/products/multi-shade.jpg",
    },
  ];

  const tabs = [
    { id: "all", label: t("filterAll") },
    { id: "machines", label: t("filterMachines") },
    { id: "products", label: t("filterProducts") },
    { id: "dyeing", label: t("filterDyeing") },
  ];

  const filtered = activeTab === "all" ? items : items.filter((i) => i.cat === activeTab);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-linear-to-b from-slate-100 via-slate-50 to-slate-100 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-bn">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-extrabold text-cyan-800 clay-pill-blue px-4.5 py-1.5 rounded-full uppercase tracking-wider inline-block">
              {t("galleryBadge")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-3 mb-2">
              {t("galleryTitle")}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl font-medium">
              {t("galleryDesc")}
            </p>
          </div>

          {/* 3D Inset Filter Switcher */}
          <div className="flex flex-wrap gap-1.5 p-2 rounded-full clay-inset-box">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "clay-btn-secondary text-slate-900 scale-105"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Real Image Grid in Clay 3D Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="clay-card rounded-3xl p-3.5 flex flex-col justify-between group"
            >
              <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-white clay-inset-box p-1">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="pt-3.5 pb-1 px-2">
                <h4 className="text-sm sm:text-base font-black text-slate-900 leading-snug">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
