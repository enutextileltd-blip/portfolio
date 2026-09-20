"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Check, Send, PhoneCall } from "lucide-react";

export function CtaBanner() {
  const { lang, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    threadType: "Almas Thread 120/2",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "8801845069803";
    const text =
      lang === "bn"
        ? `আসসালামু আলাইকুম, ALMAS ACCESSORIES INDUSTRIES।\nআমি আপনাদের ওয়েবসাইটের মাধ্যমে ফ্রি স্যাম্পল বক্স ও শেড কার্ডের জন্য আবেদন করছি:\n\n👤 নাম: ${formData.name}\n🏢 ফ্যাক্টরি/প্রতিষ্ঠান: ${formData.company}\n📞 ফোন/হোয়াটসঅ্যাপ: ${formData.phone}\n🧵 সুতার ধরন: ${formData.threadType}\n📝 কালার/নোট: ${formData.notes || "N/A"}\n\nদয়া করে ডেলিভারির বিস্তারিত জানাবেন। ধন্যবাদ!`
        : `Hello ALMAS ACCESSORIES INDUSTRIES,\nI would like to request a Free Sample Box & Shade Card for our factory:\n\n👤 Name: ${formData.name}\n🏢 Factory/Brand: ${formData.company}\n📞 Phone/WhatsApp: ${formData.phone}\n🧵 Thread Type: ${formData.threadType}\n📝 Notes/Shades: ${formData.notes || "N/A"}\n\nPlease share dispatch details. Thank you!`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-24 bg-linear-to-b from-slate-50 via-slate-100 to-slate-50 font-bn relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6">
            <span className="text-xs font-extrabold text-cyan-800 clay-pill-blue px-4.5 py-1.5 rounded-full uppercase tracking-wider inline-block">
              {lang === "bn" ? "ফ্রি স্যাম্পল ও শেড কার্ড" : "Free Sample & Shade Card"}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-3 mb-4 leading-tight">
              {t("rfqTitle")}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mb-6 font-medium leading-relaxed">
              {t("rfqSubtitle")}
            </p>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-bold mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full clay-pill text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>{lang === "bn" ? "১২০/২ স্ট্যান্ডার্ড কোন ও স্পেকট্রো ল্যাব টেস্ট" : "120/2 Standard Cones & Spectro Lab Dips"}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full clay-pill text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>{lang === "bn" ? "৮০০+ কালারের সম্পূর্ণ ফিজিক্যাল শেড কার্ড" : "800+ Shades Physical Color Shade Card"}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full clay-pill text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>{lang === "bn" ? "সারাদেশে ফ্যাক্টরিতে ফ্রি স্যাম্পল ডেলিভারি" : "Doorstep Factory Dispatch Across Bangladesh"}</span>
              </div>
            </div>

            {/* Authentic Thread Basket Showcase */}
            <div className="relative w-full max-w-sm sm:max-w-md my-4">
              <div className="relative w-full h-44 sm:h-52 flex items-center justify-center">
                <Image
                  src="/images/thread_basket_cutout.png"
                  alt="Almas Authentic Thread Basket with Spools & Hibiscus"
                  fill
                  sizes="(max-width: 640px) 280px, 400px"
                  className="object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200/80 flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="inline-flex items-center gap-1.5 text-cyan-800 font-bold text-sm">
                <PhoneCall className="w-4 h-4 text-cyan-600" />
                <span>{lang === "bn" ? "সরাসরি হটলাইন:" : "Direct Hotline:"}</span>
              </span>
              <a
                href="tel:01819898611"
                className="text-cyan-800 hover:text-cyan-600 font-bold text-sm transition-colors underline underline-offset-2"
              >
                01819-898611
              </a>
              <span className="text-slate-400">,</span>
              <a
                href="tel:01845069803"
                className="text-cyan-800 hover:text-cyan-600 font-bold text-sm transition-colors underline underline-offset-2"
              >
                01845-069803
              </a>
            </div>
          </div>

          {/* Right Form with Clay 3D Card */}
          <div className="lg:col-span-6">
            <div className="clay-card p-6 sm:p-8 rounded-3xl">
              {submitted ? (
                <div className="py-8 text-center">
                  <div className="w-14 h-14 rounded-full clay-pill text-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-md">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-1">
                    {lang === "bn" ? "আবেদন সফলভাবে গৃহীত হয়েছে!" : "Request Submitted!"}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">
                    {t("formSuccess")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {t("formName")} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={lang === "bn" ? "আপনার নাম" : "Your Name"}
                        className="w-full px-3.5 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-inner text-slate-800 text-xs focus:outline-none focus:border-cyan-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {t("formPhone")} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="01XXXXXXXXX"
                        className="w-full px-3.5 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-inner text-slate-800 text-xs focus:outline-none focus:border-cyan-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t("formCompany")} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={lang === "bn" ? "গার্মেন্টস / এমব্রয়ডারি ইউনিটের নাম" : "Factory / Brand Name"}
                      className="w-full px-3.5 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-inner text-slate-800 text-xs focus:outline-none focus:border-cyan-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t("formThreadType")}
                    </label>
                    <select
                      value={formData.threadType}
                      onChange={(e) => setFormData({ ...formData, threadType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-inner text-slate-800 text-xs focus:outline-none focus:border-cyan-600"
                    >
                      <option value="Almas Thread 120/2">Almas Thread 120/2</option>
                      <option value="Trilobal Polyester 120/2">Trilobal Polyester 120/2</option>
                      <option value="Metallic Gold & Silver">Metallic Gold & Silver</option>
                      <option value="Silky Rayon Embroidery">Silky Rayon Embroidery</option>
                      <option value="100% Recycled Eco-Embroidery">100% Recycled Eco-Embroidery</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t("formColorNotes")}
                    </label>
                    <input
                      type="text"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder={lang === "bn" ? "প্রয়োজনীয় কালার বা বিশেষ কোনো তথ্য..." : "Color codes, specific requirements..."}
                      className="w-full px-3.5 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-inner text-slate-800 text-xs focus:outline-none focus:border-cyan-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full clay-btn-primary text-white font-black text-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{t("formSubmit")}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
