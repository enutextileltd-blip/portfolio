"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import confetti from "canvas-confetti";
import { useLanguage } from "@/context/LanguageContext";
import { CelebrationFireworks } from "@/components/ui/CelebrationFireworks";
import {
  PhoneCall,
  ArrowRight,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Award,
  Factory,
  PartyPopper,
  Flame,
} from "lucide-react";

export function HeroSection() {
  const { lang, t } = useLanguage();
  const [bajiCount, setBajiCount] = useState(0);

  // Trigger manual celebratory fireworks explosion & confetti burst
  const handleLaunchFireworks = () => {
    setBajiCount((prev) => prev + 1);

    // Confetti explosion from sides and center
    confetti({
      particleCount: 75,
      spread: 85,
      origin: { y: 0.65, x: 0.5 },
      colors: ["#FFD700", "#FF4500", "#00F0FF", "#10B981", "#FF1493"],
    });

    setTimeout(() => {
      confetti({
        particleCount: 55,
        angle: 60,
        spread: 60,
        origin: { x: 0.1, y: 0.7 },
        colors: ["#FFD700", "#F59E0B", "#EF4444"],
      });
      confetti({
        particleCount: 55,
        angle: 120,
        spread: 60,
        origin: { x: 0.9, y: 0.7 },
        colors: ["#00F0FF", "#10B981", "#FFD700"],
      });
    }, 200);
  };

  return (
    <section
      id="hero"
      className="relative pt-[96px] sm:pt-28 lg:pt-30 pb-0 bg-white overflow-hidden text-slate-900 font-bn select-none border-b border-slate-200"
    >
      {/* Live "Baji Putano" (Fireworks & Sparklers Animation) Layer */}
      <CelebrationFireworks className="z-10 opacity-85 pointer-events-auto" intensity="festive" />

      {/* Top-Left Diagonal Angular Corner Edge (Opening Ceremony Curtain effect - starts flush below navbar) */}
      <svg
        className="absolute top-[94px] sm:top-0 left-0 w-20 sm:w-48 lg:w-64 h-20 sm:h-48 lg:h-64 pointer-events-none z-10"
        viewBox="0 0 400 400"
        fill="none"
        preserveAspectRatio="xMinYMin slice"
      >
        {/* Dark navy base triangle */}
        <path d="M 0 0 L 320 0 L 0 320 Z" fill="#011e2d" />
        {/* Teal mid-layer */}
        <path d="M 0 0 L 240 0 L 0 240 Z" fill="#023a55" />
        {/* Cyan accent stripe 1 */}
        <path d="M 60 0 L 120 0 L 0 120 L 0 60 Z" fill="#0284c7" />
        {/* Lighter cyan accent stripe 2 */}
        <path d="M 130 0 L 180 0 L 0 180 L 0 130 Z" fill="#38bdf8" opacity="0.7" />
        {/* White highlight thin line */}
        <path d="M 185 0 L 200 0 L 0 200 L 0 185 Z" fill="#ffffff" opacity="0.5" />
      </svg>

      {/* Top-Right Diagonal Angular Corner Edge (mirrored Curtain - starts flush below navbar) */}
      <svg
        className="absolute top-[94px] sm:top-0 right-0 w-16 sm:w-36 lg:w-48 h-16 sm:h-36 lg:h-48 pointer-events-none z-10"
        viewBox="0 0 300 300"
        fill="none"
        preserveAspectRatio="xMaxYMin slice"
      >
        {/* Dark navy base triangle */}
        <path d="M 300 0 L 300 220 L 80 0 Z" fill="#011e2d" />
        {/* Teal mid-layer */}
        <path d="M 300 0 L 300 160 L 140 0 Z" fill="#023a55" />
        {/* Cyan accent stripe */}
        <path d="M 300 0 L 300 80 L 220 0 Z" fill="#0284c7" />
        {/* Light highlight */}
        <path d="M 300 85 L 300 100 L 200 0 L 215 0 Z" fill="#38bdf8" opacity="0.6" />
      </svg>

      {/* Ambient Shadowed Background Layer: Thread Spools Lineup (Positioned near top & shifted right on Mobile, bottom span on Desktop) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-start sm:items-end justify-end sm:justify-center pt-24 xs:pt-28 sm:pt-0 pr-2 xs:pr-6 sm:pr-0">
        <div className="relative w-[82%] sm:w-full h-28 xs:h-32 sm:h-[88%] max-w-sm sm:max-w-none opacity-35 sm:opacity-25 mix-blend-multiply translate-x-3 sm:translate-x-0">
          <Image
            src="/images/almas_thread_spools_lineup.png"
            alt="Almas Thread Spools Background Accent"
            fill
            sizes="(max-width: 640px) 82vw, 100vw"
            className="object-contain object-top-right sm:object-bottom"
            priority
          />
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-1 sm:pt-2 pb-2 sm:pb-6 pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 lg:gap-8 items-center pointer-events-auto">
          
          {/* LEFT COLUMN: Brand, 7th Anniversary Milestone, Headlines, Slogan & Buttons */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10 pl-2 sm:pl-0">
            
            {/* 7th Anniversary Celebration Announcement Ribbon Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full clay-anniversary-badge mb-2 sm:mb-2.5 shadow-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-700 animate-sparkle shrink-0" />
              <span className="text-[11px] sm:text-xs font-black anniversary-gold-text tracking-tight uppercase">
                {t("anniversaryBadge")} • {t("anniversaryTag")}
              </span>
              <PartyPopper className="w-3.5 h-3.5 text-amber-700 shrink-0 hidden xs:inline-block" />
            </div>

            {/* Brand Header with Official Logo + 3D Golden 7th Milestone Crest */}
            <div className="flex items-center gap-2.5 sm:gap-3.5 mb-1.5">
              {/* Official Logo */}
              <div className="relative hidden sm:block w-12 h-12 lg:w-16 lg:h-16 rounded-xl overflow-hidden shadow-md shrink-0 border-2 border-yellow-400 bg-white p-0.5 hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/almas_official_logo.png"
                  alt="Almas Accessories Industries Logo"
                  fill
                  sizes="64px"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col justify-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none almas-text-animated">
                  ALMAS
                </h1>
                <h2 className="text-[10px] sm:text-xs lg:text-sm font-black text-[#0A2570] almas-subtitle-brand tracking-[0.16em] uppercase leading-none mt-1">
                  ACCESSORIES INDUSTRIES
                </h2>
              </div>

              {/* 3D Golden 7th Anniversary Milestone Crest */}
              <div
                className="relative group shrink-0 ml-1 cursor-pointer"
                onClick={handleLaunchFireworks}
                title={t("anniversaryTitle")}
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 lg:w-15 lg:h-15 rounded-full clay-anniversary-crest flex flex-col items-center justify-center text-amber-950 p-1 relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  {/* Rotating Sunburst Rays */}
                  <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(255,255,255,0.45)_0deg,transparent_60deg,rgba(255,255,255,0.45)_120deg,transparent_180deg,rgba(255,255,255,0.45)_240deg,transparent_300deg,rgba(255,255,255,0.45)_360deg)] animate-sunburst-slow opacity-70 pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col items-center leading-none">
                    <span className="text-lg sm:text-2xl font-black text-amber-950 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
                      {lang === "bn" ? "৭ম" : "7th"}
                    </span>
                    <span className="text-[7px] sm:text-[8px] font-black uppercase text-amber-900 tracking-tighter mt-0.5">
                      {lang === "bn" ? "বর্ষপূর্তি" : "YEARS"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-Headline & 7th Anniversary Congratulatory Slogan */}
            <p className="text-xs sm:text-base lg:text-lg font-bold text-slate-800 mt-1 mb-0.5 tracking-tight">
              {t("posterSubHeader")}
            </p>
            <p className="text-[11px] sm:text-xs font-semibold text-amber-800/90 tracking-tight flex items-center gap-1 mb-1">
              <Sparkles className="w-3 h-3 text-amber-600 shrink-0" />
              <span>{t("anniversarySub")}</span>
            </p>

            {/* Elegant Accent Line */}
            <div className="w-full max-w-xs sm:max-w-sm h-[2px] bg-linear-to-r from-amber-500 via-sky-500 to-emerald-500 my-1 sm:my-1.5 rounded-full" />

            {/* Signature Slogan */}
            <div className="relative my-1 sm:my-2">
              {/* Winding Thread Line */}
              <svg
                className="absolute left-24 top-6 w-48 sm:w-64 h-16 pointer-events-none text-sky-500/70 hidden sm:block z-0"
                viewBox="0 0 240 90"
                fill="none"
              >
                <path
                  d="M 10 20 Q 80 -15 130 45 T 230 40"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                />
              </svg>

              <div className="flex flex-col relative z-10">
                <span className="text-3xl sm:text-5xl lg:text-6xl font-black text-sky-600 tracking-tight leading-none drop-shadow-xs">
                  {lang === "bn" ? "সুতোই" : "Weaving"}
                </span>
                <div className="flex items-baseline gap-1.5 sm:gap-2 mt-0.5 pl-2 sm:pl-3">
                  <span className="text-2xl sm:text-4xl lg:text-5xl font-black text-emerald-600 tracking-tight leading-none">
                    {lang === "bn" ? "বুনি" : "Tomorrow's"}
                  </span>
                  <span className="text-2xl sm:text-4xl lg:text-5xl font-black text-emerald-600 tracking-tight leading-none">
                    {lang === "bn" ? "আগামীর" : "Dreams"}
                  </span>
                </div>
                <div className="flex items-baseline gap-1 sm:gap-2 pl-4 sm:pl-10 mt-0.5">
                  <span className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0f2942] tracking-tight leading-none inline-flex items-center">
                    <span>{lang === "bn" ? "স্বপ্ন" : "in Every Thread"}</span>
                    <span className="inline-flex items-center gap-1.5 sm:gap-2 ml-2 sm:ml-3 select-none translate-y-1 sm:translate-y-1.5">
                      <span className="animate-dot-1 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-sky-500 shadow-sm border border-white/70" />
                      <span className="animate-dot-2 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-emerald-500 shadow-sm border border-white/70" />
                      <span className="animate-dot-3 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-red-500 shadow-sm border border-white/70" />
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Buttons & Hotline & Interactive Fireworks Trigger */}
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2 sm:gap-2.5 mt-2 sm:mt-3 w-full sm:w-auto">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Link
                  href="#products"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-black text-xs sm:text-sm shadow-md hover:shadow-red-600/30 active:scale-95 transition-all"
                >
                  <span>{t("viewProducts")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href="https://wa.me/8801819898611"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow-emerald-600/30 active:scale-95 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{t("orderNow")}</span>
                </a>
              </div>

              {/* Interactive "🎉 বাজি ফুটান" (Launch Fireworks) Button */}
              <button
                onClick={handleLaunchFireworks}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full clay-anniversary-badge text-amber-950 font-black text-xs sm:text-sm shadow-sm hover:shadow-amber-500/30 active:scale-95 transition-all cursor-pointer group"
              >
                <Flame className="w-3.5 h-3.5 text-amber-600 group-hover:scale-125 transition-transform animate-pulse" />
                <span>{t("fireworkTrigger")}</span>
                {bajiCount > 0 && (
                  <span className="ml-1 px-1.5 py-0.2 rounded-full bg-amber-600 text-white text-[10px] font-bold">
                    +{bajiCount}
                  </span>
                )}
              </button>

              {/* Call Button for 01845-069803 */}
              <a
                href="tel:01845069803"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm border border-slate-300 shadow-xs active:scale-95 transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
                <span className="tracking-tight">01845-069803</span>
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Official Almas 3-Tier Wooden Thread Shelf Display (Centered on Mobile) */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end relative mt-3 sm:mt-0 w-full">
            <div className="relative w-full max-w-[290px] xs:max-w-[330px] sm:max-w-md lg:max-w-lg mx-auto lg:mr-0 group">
              
              {/* Subtle Ambient Radial Glow Behind Shelf */}
              <div className="absolute inset-0 bg-radial from-amber-500/20 via-cyan-400/10 to-transparent blur-2xl rounded-full pointer-events-none transform scale-110" />

              {/* Celebratory Floating Pill on Top of Display */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full clay-anniversary-badge text-[10px] sm:text-xs font-black text-amber-900 shadow-lg whitespace-nowrap flex items-center gap-1.5 pointer-events-none">
                <Sparkles className="w-3 h-3 text-amber-600 animate-sparkle" />
                <span>{lang === "bn" ? "✨ ৭ম বর্ষপূর্তি বিশেষ কোয়ালিটি শোকেস" : "✨ 7th Anniversary Quality Showcase"}</span>
              </div>

              {/* 3-Tier Wooden Thread Shelf Display Cutout */}
              <div className="relative w-full aspect-4/3 flex items-center justify-center">
                <Image
                  src="/images/almas_thread_shelf_display.png"
                  alt="Almas Premium 3-Tier Thread Display Rack"
                  fill
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 450px, 520px"
                  className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.22)] group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM OCEAN BLUE STRIP */}
      <div className="relative w-full bg-linear-to-r from-[#012536] via-[#033a55] to-[#012536] text-white pt-3 sm:pt-4 pb-4 sm:pb-5 border-t-2 sm:border-t-3 border-yellow-400">
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-400/15 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
            
            {/* LEFT: Office Directory */}
            <div className="lg:col-span-7 space-y-2 sm:space-y-2.5">
              
              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-cyan-400/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 border border-cyan-400/40">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-black text-cyan-300 block leading-tight">
                    {lang === "bn" ? "আমাদের চট্টগ্রাম অফিস (কারখানা):-" : "Our Chattogram Factory & Office:-"}
                  </span>
                  <p className="text-[11px] sm:text-xs text-slate-200 leading-relaxed font-normal mt-0.5">
                    604/750, Najir Ahamed Mistiri Sodok, West Jhrnapara, Baro Quarter, Double Mooring, Chattogram, 4202 Bangladesh.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-cyan-400/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 border border-cyan-400/40">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-black text-cyan-300 block leading-tight">
                    {lang === "bn" ? "আমাদের ঢাকা অফিস:-" : "Our Dhaka Office:-"}
                  </span>
                  <p className="text-[11px] sm:text-xs text-slate-200 leading-relaxed font-normal mt-0.5">
                    {lang === "bn"
                      ? "আই ইউ টি গেটের বিপরীত পাশে, বোর্ড বাজার, গাজীপুর।"
                      : "Opposite IUT Gate, Board Bazar, Gazipur, Dhaka."}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-0.5">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-400/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-400/40">
                  <PhoneCall className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                  <span className="text-xs sm:text-sm font-black text-white">
                    {lang === "bn" ? "যোগাযোগ:-" : "Contact:-"}
                  </span>
                  <a
                    href="tel:01819898611"
                    className="text-sm sm:text-base font-black text-cyan-300 hover:text-yellow-300 transition-colors tracking-wide underline underline-offset-4"
                  >
                    01819-898611
                  </a>
                  <span className="text-cyan-400/60 font-bold">,</span>
                  <a
                    href="tel:01845069803"
                    className="text-sm sm:text-base font-black text-cyan-300 hover:text-yellow-300 transition-colors tracking-wide underline underline-offset-4"
                  >
                    01845-069803
                  </a>
                </div>
              </div>

            </div>

            {/* RIGHT: 4 Circular Badges & Commitment */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
              
              <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full">
                
                <div className="flex flex-col items-center text-center group">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/80 flex items-center justify-center bg-white/5 hover:bg-cyan-500/20 hover:border-cyan-300 transition-all shadow-sm group-hover:scale-105">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-cyan-300 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="6" y="2" width="12" height="3" rx="1" />
                      <rect x="6" y="19" width="12" height="3" rx="1" />
                      <path d="M8 5v14M16 5v14M10 8h4M10 12h4M10 16h4" />
                    </svg>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-white mt-1 leading-tight">
                    {lang === "bn" ? "উন্নত মানের সুতা" : "Premium Thread"}
                  </span>
                </div>

                <div className="flex flex-col items-center text-center group">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/80 flex items-center justify-center bg-white/5 hover:bg-cyan-500/20 hover:border-cyan-300 transition-all shadow-sm group-hover:scale-105">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-cyan-300 transition-colors" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-white mt-1 leading-tight">
                    {lang === "bn" ? "আন্তর্জাতিক মান" : "Intl. Standard"}
                  </span>
                </div>

                <div className="flex flex-col items-center text-center group">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/80 flex items-center justify-center bg-white/5 hover:bg-cyan-500/20 hover:border-cyan-300 transition-all shadow-sm group-hover:scale-105">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-cyan-300 transition-colors" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-white mt-1 leading-tight">
                    {lang === "bn" ? "টেকসই ও নির্ভরযোগ্য" : "Reliable"}
                  </span>
                </div>

                <div className="flex flex-col items-center text-center group">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/80 flex items-center justify-center bg-white/5 hover:bg-cyan-500/20 hover:border-cyan-300 transition-all shadow-sm group-hover:scale-105">
                    <Factory className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-cyan-300 transition-colors" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-white mt-1 leading-tight">
                    {lang === "bn" ? "রপ্তানীমুখী" : "Export Ready"}
                  </span>
                </div>

              </div>

              <div className="mt-2.5 text-center lg:text-right w-full">
                <span className="text-xs sm:text-base font-black text-cyan-200 italic tracking-wide">
                  {lang === "bn" ? "মানই আমাদের প্রতিশ্রুতি" : "Quality is Our Commitment"}
                </span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
