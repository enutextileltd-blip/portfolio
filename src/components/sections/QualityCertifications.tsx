"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, Check } from "lucide-react";

export function QualityCertifications() {
  const { lang } = useLanguage();

  const certs = [
    {
      title: "OEKO-TEX® Standard 100",
      category: "Class I (Baby & Sensitive Wear)",
      description:
        lang === "bn"
          ? "ক্ষতিকারক রাসায়নিক, অ্যালার্জেন এবং বিষাক্ত উপাদান মুক্ত যা শিশু পোশাকের জন্য আন্তর্জাতিকভাবে অনুমোদিত।"
          : "Certified free from harmful chemicals, allergens, toxic heavy metals, and forbidden azo colorants.",
      status: "Verified Active",
    },
    {
      title: "ISO 9001:2015",
      category: "Quality Management System",
      description:
        lang === "bn"
          ? "সুতা প্রস্তুত, অটোমেটিক উইন্ডিং এবং চূড়ান্ত ল্যাব টেস্টের প্রতিটি ধাপে স্ট্যান্ডার্ড মান নিয়ন্ত্রণ।"
          : "Standardized total quality control protocols covering yarn twisting, winding, and lab tensile testing.",
      status: "Certified",
    },
    {
      title: "GRS (Global Recycled Standard)",
      category: "Circular Sustainability",
      description:
        lang === "bn"
          ? "রিসাইকেল্ড প্লাস্টিক ফ্লেক থেকে তৈরি ইকো-ফ্রেন্ডলি সুতার জন্য ভেরিফাইড আন্তর্জাতিক স্বীকৃতি।"
          : "Chain of custody verification for post-consumer recycled polyester sewing threads.",
      status: "Certified",
    },
    {
      title: "SEDEX / SMETA 4-Pillar",
      category: "Ethical & Labor Compliance",
      description:
        lang === "bn"
          ? "কারখানার সুষ্ঠু কর্মপরিবেশ, শ্রমিকের স্বাস্থ্য ও নিরাপত্তা এবং দায়িত্বশীল নৈতিক ব্যবসার প্রমাণপত্র।"
          : "Rigorous adherence to ethical labor standards, workplace health & safety, and business ethics.",
      status: "Audited",
    },
  ];

  return (
    <section id="certifications" className="py-24 relative bg-slate-50 bg-textile-pattern border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="emerald" icon={<ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />} className="mb-3 font-bn">
            {lang === "bn" ? "আন্তর্জাতিক স্বীকৃতি ও মানদণ্ড" : "Global Compliance Standards"}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-bn">
            {lang === "bn"
              ? "শীর্ষস্থানীয় পোশাক ব্র্যান্ডের আস্থা"
              : "Trusted by Global Apparel Exporters"}
          </h2>
          <p className="mt-4 text-base text-slate-600 font-medium">
            {lang === "bn"
              ? "আমাদের সুতা আন্তর্জাতিক বায়ারদের মানদণ্ড পূরণ করে যা ইউরোপ ও আমেরিকার বাজারে শতভাগ নিরাপদ।"
              : "Our international accreditations ensure frictionless compliance with EU, US, and Japanese consumer safety standards."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((c, i) => (
            <Card
              key={i}
              className="bg-white border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between stitch-border p-6"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-dashed border-emerald-300 flex items-center justify-center text-emerald-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {c.status}
                  </span>
                </div>

                <h3 className="text-base font-black text-slate-900 mb-1">
                  {c.title}
                </h3>
                <p className="text-[11px] font-bold text-emerald-700 mb-3">
                  {c.category}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed font-medium font-bn">
                  {c.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-dashed border-slate-200 flex items-center gap-2 text-xs font-bold text-slate-500 font-bn">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>{lang === "bn" ? "অডিট রিপোর্ট সংরক্ষিত" : "Audit Report Filed"}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
