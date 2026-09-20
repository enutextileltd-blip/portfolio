"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  MapPin,
  Phone,
  Building2,
  Navigation,
  PhoneCall,
  Clock,
  Factory,
} from "lucide-react";

export function LocationDirectory() {
  const { lang, t } = useLanguage();

  return (
    <section id="contact" className="py-16 sm:py-24 bg-linear-to-b from-slate-100 via-slate-50 to-slate-100 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-bn">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold text-cyan-800 clay-pill-blue px-4.5 py-1.5 rounded-full uppercase tracking-wider inline-block">
            {t("contactBadge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-3 mb-2">
            {t("contactTitle")}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            {t("contactDesc")}
          </p>
        </div>

        {/* Dual Location Cards in Clay 3D Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 1. Dhaka Commercial Office */}
          <div className="clay-card rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black px-3.5 py-1 rounded-full clay-pill-blue text-cyan-800">
                  {t("dhakaOfficeTag")}
                </span>
                <span className="text-xs font-bold text-amber-700 clay-pill px-3 py-1 rounded-full">
                  Sample & Merchandising
                </span>
              </div>

              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl clay-card-sm flex items-center justify-center text-cyan-700 shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">
                    {lang === "bn" ? "গাজীপুর, ঢাকা" : "Gazipur, Dhaka"}
                  </h3>
                  <span className="text-xs font-bold text-slate-500">
                    {lang === "bn" ? "বাণিজ্যিক শোরুম ও স্যাম্পল ডিসপ্লে" : "Commercial Showroom & Sample Display"}
                  </span>
                </div>
              </div>

              {/* Exact Address in Recessed Clay Box */}
              <div className="p-4.5 rounded-2xl clay-inset-box mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-black">
                    {lang === "bn" ? "গাজীপুর, ঢাকা" : "Gazipur, Dhaka"}
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-6 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>{lang === "bn" ? "শনিবার – বৃহস্পতিবার: সকাল ৯:০০ – সন্ধ্যা ৭:০০" : "Saturday – Thursday: 9:00 AM – 7:00 PM"}</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <Phone className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span className="text-slate-900 font-bold">
                    {lang === "bn" ? "হটলাইন:" : "Hotline:"}
                  </span>
                  <a href="tel:01819898611" className="text-slate-900 hover:text-cyan-700 font-bold">01819-898611</a>
                  <span className="text-slate-400">,</span>
                  <a href="tel:01845069803" className="text-slate-900 hover:text-cyan-700 font-bold">01845-069803</a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row gap-2.5">
              <a
                href="tel:01819898611"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-full clay-btn-primary font-black text-xs"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{t("directCall")} (01819-898611)</span>
              </a>
              <a
                href="tel:01845069803"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-full clay-btn-secondary text-slate-800 font-bold text-xs"
              >
                <PhoneCall className="w-3.5 h-3.5 text-cyan-700" />
                <span>01845-069803</span>
              </a>
              <a
                href="https://maps.google.com/?q=Gazipur+Dhaka+Bangladesh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full clay-btn-secondary text-slate-800 font-bold text-xs"
              >
                <Navigation className="w-3.5 h-3.5 text-cyan-600" />
                <span>{t("viewMap")}</span>
              </a>
            </div>
          </div>

          {/* 2. Chattogram Factory */}
          <div className="clay-card rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black px-3.5 py-1 rounded-full clay-pill-blue text-cyan-800">
                  {t("ctgFactoryTag")}
                </span>
                <span className="text-xs font-bold text-emerald-700 clay-pill px-3 py-1 rounded-full">
                  Heavy Production & Dyeing
                </span>
              </div>

              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl clay-card-sm flex items-center justify-center text-cyan-700 shrink-0">
                  <Factory className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">
                    {lang === "bn" ? "চট্টগ্রাম (পাহাড়তলী, চট্টগ্রাম)" : "Chittagong (Pahartali, Chattagram)"}
                  </h3>
                  <span className="text-xs font-bold text-slate-500">
                    {lang === "bn" ? "প্রধান কারখানা ও ডাইং প্ল্যান্ট" : "Main Factory & Dyeing Plant"}
                  </span>
                </div>
              </div>

              {/* Exact Address in Recessed Clay Box */}
              <div className="p-4.5 rounded-2xl clay-inset-box mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-black">
                    {lang === "bn" ? "পাহাড়তলী, চট্টগ্রাম" : "Pahartali, Chattagram"}
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-6 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>{lang === "bn" ? "প্রোডাকশন শিফট: ২৪ ঘণ্টা চালু" : "Production Shift: 24/7 Operations"}</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <Phone className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span className="text-slate-900 font-bold">
                    {lang === "bn" ? "যোগাযোগ:" : "Contact:"}
                  </span>
                  <a href="tel:01819898611" className="text-slate-900 hover:text-cyan-700 font-bold">01819-898611</a>
                  <span className="text-slate-400">,</span>
                  <a href="tel:01845069803" className="text-slate-900 hover:text-cyan-700 font-bold">01845-069803</a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row gap-2.5">
              <a
                href="tel:01819898611"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-full clay-btn-primary font-black text-xs"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{t("directCall")} (01819-898611)</span>
              </a>
              <a
                href="tel:01845069803"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-full clay-btn-secondary text-slate-800 font-bold text-xs"
              >
                <PhoneCall className="w-3.5 h-3.5 text-cyan-700" />
                <span>01845-069803</span>
              </a>
              <a
                href="https://maps.google.com/?q=Pahartali+Chattogram+Bangladesh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full clay-btn-secondary text-slate-800 font-bold text-xs"
              >
                <Navigation className="w-4 h-4 text-cyan-600" />
                <span>{t("viewMap")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
