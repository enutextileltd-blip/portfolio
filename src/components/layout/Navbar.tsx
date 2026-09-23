"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { AlmasLogo } from "@/components/ui/AlmasLogo";
import {
  Menu,
  X,
  PhoneCall,
  MapPin,
  Building2,
  ChevronRight,
} from "lucide-react";

export function Navbar() {
  const { lang, setLang } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: lang === "bn" ? "হোম" : "Home", href: "#hero" },
    { label: lang === "bn" ? "পণ্য" : "Products", href: "#products" },
    { label: lang === "bn" ? "কেন আলমাস?" : "Why Almas", href: "#why-almas" },
    { label: lang === "bn" ? "আমাদের সম্পর্কে" : "About Us", href: "#about" },
    { label: lang === "bn" ? "রঙের তালিকা" : "Color Shades", href: "/colors" },
    { label: lang === "bn" ? "গ্যালারি" : "Gallery", href: "#gallery" },
    { label: lang === "bn" ? "যোগাযোগ" : "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full font-bn pointer-events-none">
      {/* 1. Top Utility Info Bar */}
      <div className="w-full bg-slate-900/90 backdrop-blur-md text-slate-300 text-[11px] font-medium py-1.5 px-4 sm:px-8 border-b border-white/10 pointer-events-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{lang === "bn" ? "কারখানা: পাহাড়তলী, চট্টগ্রাম" : "Factory: Pahartali, Chattagram"}</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <div className="hidden sm:flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{lang === "bn" ? "শোরুম: গাজীপুর, ঢাকা" : "Showroom: Gazipur, Dhaka"}</span>
            </div>
            <span className="text-slate-600 hidden md:inline">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-amber-300 font-bold bg-amber-500/15 px-2 py-0.5 rounded-full border border-amber-400/30 text-[10px]">
              ✨ {lang === "bn" ? "৭ম বর্ষপূর্তি উদযাপন" : "7th Anniversary Celebration"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:01819898611"
              className="inline-flex items-center gap-1.5 text-cyan-300 hover:text-white font-bold transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
              <span>01819-898611</span>
            </a>
            <span className="text-slate-600 hidden xs:inline">|</span>
            <a
              href="tel:01845069803"
              className="hidden xs:inline-flex items-center gap-1.5 text-cyan-300 hover:text-white font-bold transition-colors"
            >
              <span>01845-069803</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Modern Claymorphism Floating Navbar */}
      <div className="w-full clay-nav pointer-events-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-4">
          {/* Clean Natural Logo without card container */}
          <Link href="/" className="shrink-0 flex items-center hover:opacity-90 transition-opacity">
            <AlmasLogo size="sm" />
          </Link>

          {/* Desktop Navigation Links with 3D Tactile Clay Pills */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-bold text-slate-700 hover:text-cyan-700 hover:clay-pill active:scale-95 transition-all whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-3 shrink-0">
            {/* 3D Recessed Clay Segmented Toggle (বাংলা | English) */}
            <div className="clay-inset inline-flex items-center p-1 rounded-full">
              <button
                onClick={() => setLang("bn")}
                className={`px-3 py-1 rounded-full text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                  lang === "bn"
                    ? "clay-btn-secondary text-slate-900 font-black scale-105 shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                বাংলা
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-full text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                  lang === "en"
                    ? "clay-btn-secondary text-cyan-800 font-black scale-105 shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                English
              </button>
            </div>

            {/* Exact 3D Inflated Clay WhatsApp Button */}
            <a
              href="https://wa.me/8801819898611?text=আসসালামু%20আলাইকুম,%20ALMAS%20THREAD।%20আমি%20ওয়েবসাইটের%20মাধ্যমে%20যোগাযোগ%20করছি।"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full clay-btn-whatsapp text-xs sm:text-sm font-extrabold whitespace-nowrap cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>{lang === "bn" ? "WhatsApp এ যোগাযোগ" : "WhatsApp Contact"}</span>
            </a>

            {/* Mobile Hamburger Button with 3D Clay Pill */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-2xl clay-btn-secondary text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Clay Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-xl px-4 py-4 flex flex-col gap-2 shadow-2xl animate-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-2xl text-sm font-bold text-slate-800 clay-card-sm flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}

            <div className="pt-2 mt-1">
              <a
                href="https://wa.me/8801819898611?text=আসসালামু%20আলাইকুম,%20ALMAS%20THREAD।%20আমি%20ওয়েবসাইটের%20মাধ্যমে%20যোগাযোগ%20করছি।"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-full clay-btn-whatsapp font-bold text-sm"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>{lang === "bn" ? "WhatsApp এ যোগাযোগ" : "WhatsApp Contact"}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
