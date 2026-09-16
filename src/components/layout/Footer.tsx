"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { AlmasLogo } from "@/components/ui/AlmasLogo";
import {
  Phone,
  ArrowUp,
  Building2,
  Factory,
} from "lucide-react";

export function Footer() {
  const { lang, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: t("navHome"), href: "#hero" },
    { label: t("navProducts"), href: "#products" },
    { label: t("navWhyAlmas"), href: "#why-almas" },
    { label: t("navAboutUs"), href: "#about" },
    { label: t("navColors"), href: "#colors" },
    { label: t("navQualityDyeing"), href: "#dyeing" },
    { label: t("navGallery"), href: "#gallery" },
    { label: t("navContact"), href: "#contact" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 font-bn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-3">
            <Link href="/" className="inline-block">
              <AlmasLogo size="md" theme="dark" />
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {t("footerDesc")}
            </p>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
              <span className="text-base">🧵</span>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">
                  Official Slogan
                </span>
                <span className="text-xs font-bold text-cyan-200">
                  {t("brandTagline")}
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs sm:text-sm font-black text-white uppercase tracking-wider">
              {lang === "bn" ? "ওয়েবসাইট লিঙ্ক" : "Quick Navigation"}
            </h4>
            <ul className="space-y-1.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Showroom & Factory */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs sm:text-sm font-black text-white uppercase tracking-wider">
              {lang === "bn" ? "শোরুম ও কারখানা" : "Showroom & Factory"}
            </h4>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">
                    {lang === "bn" ? "ঢাকা শোরুম:" : "Dhaka Showroom:"}
                  </span>
                  <span className="text-slate-400 leading-relaxed font-medium">
                    {lang === "bn" ? "গাজীপুর, ঢাকা" : "Gazipur, Dhaka"}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Factory className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">
                    {lang === "bn" ? "চট্টগ্রাম কারখানা:" : "Chittagong Factory:"}
                  </span>
                  <span className="text-slate-400 leading-relaxed font-medium">
                    {lang === "bn" ? "পাহাড়তলী, চট্টগ্রাম" : "Pahartali, Chattagram"}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href="tel:01845069803"
                  className="font-black text-cyan-300 hover:text-white transition-colors"
                >
                  01845-069803
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <span>© {new Date().getFullYear()} {t("copyright")}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-cyan-400 font-bold">{t("madeIn")}</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-cyan-600 hover:text-white border border-slate-800 text-slate-400 transition-colors cursor-pointer"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
