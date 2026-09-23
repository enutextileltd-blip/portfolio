"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "bn";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Brand & Slogans
    brandName: "ALMAS THREAD",
    companyName: "Almas Accessories Industries",
    brandSubtitle: "100% Export Quality Embroidery Thread",
    bannerSlogan1: "100% Export Quality Embroidery Thread",
    bannerSlogan2: "Weaving Tomorrow's Dreams in Every Thread…",
    bannerSlogan3: "Quality is Our Uncompromising Commitment",
    
    // 7th Anniversary Celebration Announcement
    anniversaryBadge: "🎉 7th Anniversary Celebration",
    anniversaryTag: "7 Years of Success (2019 - 2026)",
    anniversaryTitle: "Celebrating 7 Years of Excellence & Trust",
    anniversarySub: "Honoring 7 glorious years of uncompromising quality & innovation in garment embroidery thread.",
    anniversaryMilestone: "7th Year",
    anniversaryYearsLabel: "Years of Success",
    fireworkTrigger: "🎉 Launch Fireworks",
    fireworkStop: "✨ Sparkling",

    posterSubHeader: "High-Quality Embroidery Thread Now Within Your Reach",
    posterSlogan1: "Weaving",
    posterSlogan2: "Tomorrow's",
    posterSlogan3: "Dreams…",
    posterBadge1: "Premium Quality Thread",
    posterBadge2: "International Standard",
    posterBadge3: "Durable & Reliable",
    posterBadge4: "Imported & Export Ready",
    posterCommitment: "Quality is Our Commitment",
    posterCtgOfficeTitle: "Chattogram Factory & Office:-",
    posterCtgOfficeAddress: "604/750, Najir Ahamed Mistiri Sodok, West Jhrnapara, Baro Quarter, Double Mooring, Chattogram, 4202 Bangladesh.",
    posterDhakaOfficeTitle: "Dhaka Regional Office:-",
    posterDhakaOfficeAddress: "Opposite IUT Main Gate, Board Bazar, Gazipur, Dhaka.",
    posterContactLabel: "Contact:- 01819-898611, 01845-069803",

    // Navigation Menu (HOME | PRODUCTS | WHY ALMAS | ABOUT US | GALLERY | CONTACT)
    navHome: "Home",
    navProducts: "Products",
    navWhyAlmas: "Why Almas",
    navAboutUs: "About Us",
    navColors: "Color Collection",
    navQualityDyeing: "Quality & Dyeing",
    navGallery: "Gallery",
    navContact: "Contact",

    // Action buttons
    viewProducts: "View Products",
    contactUs: "Contact Us",
    orderNow: "Order via WhatsApp",
    callNow: "Call Now",
    sendInquiry: "Send Inquiry",
    requestSample: "Request Shade Card",
    hotlineLabel: "Hotline: 01819-898611, 01845-069803",
    hotlineNum: "01819-898611",
    exploreColors: "Explore Thread Colors",

    // Hero Section
    heroTitle: "ALMAS THREAD",
    heroSubtitle: "100% Export Quality Embroidery Thread",
    heroStatement: "High-quality 120/2 embroidery thread designed for smooth performance, excellent finishing and reliable production on high-speed embroidery machines.",
    heroSpec1Val: "120/2",
    heroSpec1Label: "Standard Count Spec",
    heroSpec2Val: "1,200+ RPM",
    heroSpec2Label: "Machine Speed Tested",
    heroSpec3Val: "800+ Shades",
    heroSpec3Label: "Vibrant Color Palette",
    heroSpec4Val: "0.01%",
    heroSpec4Label: "Zero Breakage Guarantee",

    // Products Section
    prodBadge: "Featured Product",
    prodTitle: "Almas Thread 120/2",
    prodSub: "100% Export Quality Embroidery Thread",
    prodDesc: "Engineered specifically for computerized multi-head embroidery machines, delivering superior tensile tenacity, low lint, and ultra-vibrant luster for high-end export apparel.",
    threadCount: "Thread Count",
    application: "Application",
    appValue: "Computerized Multi-Head Embroidery Machines",
    availableColors: "Available Colors",
    colorsValue: "800+ Ready Shades & Custom Pantone Matching",
    qualityFeatures: "Quality Features",
    pkgInfo: "Packaging Info",
    pkgValue: "5,000m & 4,000m King Cones / Sturdy Export Cartons",
    otherEmbroideryLines: "Explore Specialized Embroidery Lines",

    // Why Almas Section
    whyBadge: "Trust & Performance",
    whyTitle: "Why Choose Almas Thread?",
    whySubtitle: "Built for seamless continuous production in commercial embroidery facilities.",
    why1: "Premium Quality Embroidery Thread",
    why1Desc: "Imported high-grade raw filaments offering exceptional tensile strength and knot-free smoothness.",
    why2: "120/2 Thread Specification",
    why2Desc: "Standardized 120/2 ticket size engineered for high-density stitching without puckering.",
    why3: "Optimized for High-Speed Embroidery Machines",
    why3Desc: "Tested for continuous flawless stitching up to 1,200+ RPM without overheating the needle.",
    why4: "Smooth Machine Performance",
    why4Desc: "Precision micro-silicone wax lubrication ensures smooth tension release and zero loop skipping.",
    why5: "Superior Embroidery Finishing & Sheen",
    why5Desc: "High reflective luster and vivid clarity that elevates garment branding and intricate embroidery artwork.",
    why6: "Modern Dyeing Technology",
    why6Desc: "High-temperature computerized dyeing with spectrophotometer matching for Delta E < 0.3 precision.",
    why7: "Consistent & Reliable Quality",
    why7Desc: "Zero-breakage assurance and uniform twist guarantee batch-to-batch production reliability.",
    why8: "Ideal for Garments & Commercial Embroidery",
    why8Desc: "Trusted by export garment factories, buying houses, and computerized embroidery workshops nationwide.",

    // About Us Section
    aboutBadge: "Company Profile",
    aboutTitle: "About Almas Accessories Industries",
    aboutStatement: "Almas Accessories Industries is dedicated to manufacturing and supplying world-class embroidery threads for the apparel and embroidery sector. We operate our business prioritizing uncompromising quality, reliability, and utmost customer satisfaction.",
    aboutP2: "Our state-of-the-art winding facility in Chattogram and our dedicated showroom in Gazipur, Dhaka ensure seamless supply chain logistics, instant lab-dip development, and rapid doorstep delivery across Bangladesh.",
    aboutStat1Val: "1.5 Lakh+",
    aboutStat1Label: "Cones Monthly Capacity",
    aboutStat2Val: "800+",
    aboutStat2Label: "Pantone Color Shades",
    aboutStat3Val: "100%",
    aboutStat3Label: "Export Audited Quality",

    // Color Collection Section
    colorsBadge: "Color Palette & Lab Dips",
    colorsTitle: "Explore Our Thread Colors",
    colorsDesc: "Choose from over 800+ ready vibrant shades or request custom spectrophotometer color matching for your garment export orders.",
    sampleCardCta: "Request Physical Shade Card",

    // Quality & Dyeing Section
    dyeingBadge: "Advanced Processing",
    dyeingTitle: "Modern Dyeing Technology",
    dyeingStatement: "“To ensure accurate color shades, consistent quality, and superior finishing, our embroidery threads are processed through modern computerized dyeing technology.”",
    dyeingFeat1Title: "Spectrophotometer Color Matching",
    dyeingFeat1Desc: "Computerized lab dips ensure precise color reproduction and zero shade variation across different production lots.",
    dyeingFeat2Title: "High Wash & Bleach Fastness (Grade 4.5+)",
    dyeingFeat2Desc: "Resistant to commercial laundering, chlorine bleaching, stone washing, and high ironing temperatures.",
    dyeingFeat3Title: "Eco-Safe & Azo-Free Dyes",
    dyeingFeat3Desc: "Formulated with eco-friendly dyestuffs free from harmful amines and heavy metals, safe for infant wear and sensitive garments.",

    // Gallery Section
    galleryBadge: "Production & Visuals",
    galleryTitle: "Factory & Embroidery Gallery",
    galleryDesc: "Glimpse into our modern production facility, automated winding, multi-head embroidery performance, and finished apparel art.",
    filterAll: "All",
    filterMachines: "Embroidery Machines",
    filterProducts: "Thread Packaging",
    filterDyeing: "Dyeing & Lab",
    filterArt: "Finished Embroidery",

    // Locations & Contact Section
    contactBadge: "Get In Touch",
    contactTitle: "Factory & Showroom",
    contactDesc: "Visit our manufacturing facility in Chattogram or explore our Gazipur, Dhaka showroom for bulk orders & sample cards.",
    dhakaOfficeTitle: "Gazipur, Dhaka",
    dhakaOfficeAddress: "Gazipur, Dhaka",
    dhakaOfficeTag: "Showroom & Sample Desk",
    ctgOfficeTitle: "Chittagong (Pahartali, Chattagram)",
    ctgOfficeAddress: "Pahartali, Chattagram",
    ctgOfficeTag: "Manufacturing Plant",
    ctgFactoryTitle: "Chittagong (Pahartali, Chattagram)",
    ctgFactoryAddress: "Pahartali, Chattagram",
    ctgFactoryTag: "Manufacturing Plant",
    getDirections: "View Location Map",
    viewMap: "View Map",
    directCall: "Direct Call",

    // RFQ Form
    rfqTitle: "Request Free Sample Box & Shade Card",
    rfqSubtitle: "Dispatched to your embroidery factory within 24 hours with complete technical test reports.",
    formName: "Full Name",
    formEmail: "Work Email",
    formPhone: "Phone / WhatsApp Number",
    formCompany: "Factory / Embroidery Unit Name",
    formThreadType: "Thread Requirement (120/2 / Trilobal / Metallic)",
    formColorNotes: "Color Shades / Requirement Details",
    formSubmit: "Submit Sample Request",
    formSuccess: "Inquiry Submitted! Our technical representative will contact you shortly.",

    // Footer
    footerDesc: "Almas Accessories Industries is a premier manufacturer and supplier of 100% export quality embroidery threads for computerized multi-head machines and garment exporters.",
    copyright: "All Rights Reserved. ALMAS THREAD — Almas Accessories Industries.",
    madeIn: "Quality is Our Commitment"
  },
  bn: {
    // Brand & Slogans
    brandName: "আলমাস থ্রেড",
    companyName: "আলমাস এক্সেসরিজ ইন্ডাস্ট্রিজ",
    brandSubtitle: "১০০% এক্সপোর্ট কোয়ালিটি এমব্রয়ডারি সুতা",
    brandTagline: "“সুতোই বুনি আগামীর স্বপ্ন…”",
    bannerSlogan1: "১০০% এক্সপোর্ট কোয়ালিটি এমব্রয়ডারি সুতা",
    bannerSlogan2: "সুতোই বুনি আগামীর স্বপ্ন…",
    bannerSlogan3: "মানই আমাদের প্রতিশ্রুতি",

    // 7th Anniversary Celebration Announcement
    anniversaryBadge: "🎉 সপ্তম বর্ষপূর্তি উদযাপন",
    anniversaryTag: "৭ বছরের গৌরবময় সাফল্য (২০১৯ - ২০২৬)",
    anniversaryTitle: "৭ বছরের গৌরবময় সাফল্য ও বিশ্বস্ততা",
    anniversarySub: "সপ্তম বর্ষপূর্তিতে সকল সম্মানিত গ্রাহক, গার্মেন্টস মার্চেন্ডাইজার ও শুভানুধ্যায়ীদের আন্তরিক শুভেচ্ছা!",
    anniversaryMilestone: "৭ম বর্ষ",
    anniversaryYearsLabel: "সাফল্যের ৭ বছর",
    fireworkTrigger: "🎉 বাজি ফুটান",
    fireworkStop: "✨ বাজি চলছে",

    posterSubHeader: "উন্নতমানের এমব্রয়ডারি সুতা এখন আপনার হাতের নাগালে",
    posterSlogan1: "সুতোই",
    posterSlogan2: "বুনি আগামীর",
    posterSlogan3: "স্বপ্ন…",
    posterBadge1: "উন্নত মানের সুতা",
    posterBadge2: "আন্তর্জাতিক মান সম্পন্ন",
    posterBadge3: "টেকসই ও নির্ভরযোগ্য",
    posterBadge4: "আমদানিকৃত ও রপ্তানীমুখী",
    posterCommitment: "মানই আমাদের প্রতিশ্রুতি",
    posterCtgOfficeTitle: "আমাদের চট্টগ্রাম অফিস (কারখানা):-",
    posterCtgOfficeAddress: "604/750, Najir Ahamed Mistiri Sodok, West Jhrnapara, Baro Quarter, Double Mooring, Chattogram, 4202 Bangladesh.",
    posterDhakaOfficeTitle: "আমাদের ঢাকা অফিস:-",
    posterDhakaOfficeAddress: "আই ইউ টি গেটের বিপরীত পাশে, বোর্ড বাজার, গাজীপুর।",
    posterContactLabel: "যোগাযোগ:- ০১৮৪৫-০৬৯৮০৩",

    // Navigation Menu (HOME | PRODUCTS | WHY ALMAS | ABOUT US | GALLERY | CONTACT)
    navHome: "হোম",
    navProducts: "আমাদের পণ্য",
    navWhyAlmas: "কেন আলমাস থ্রেড?",
    navAboutUs: "আমাদের সম্পর্কে",
    navColors: "রঙের সংগ্রহ",
    navQualityDyeing: "মান ও ডাইং প্রযুক্তি",
    navGallery: "গ্যালারি",
    navContact: "যোগাযোগ",

    // Action buttons
    viewProducts: "পণ্য দেখুন",
    contactUs: "যোগাযোগ করুন",
    orderNow: "যোগাযোগ",
    callNow: "সরাসরি কল করুন",
    sendInquiry: "অনুসন্ধান পাঠান",
    requestSample: "শেড কার্ড রিকোয়েস্ট",
    hotlineLabel: "হটলাইন: ০১৮১৯-৮৯৮৬১১, ০১৮৪৫-০৬৯৮০৩",
    hotlineNum: "০১৮১৯-৮৯৮৬১১",
    exploreColors: "আমাদের থ্রেডের রঙ দেখুন",

    // Hero Section
    heroTitle: "ALMAS THREAD",
    heroSubtitle: "১০০% এক্সপোর্ট কোয়ালিটি এমব্রয়ডারি সুতা",
    heroStatement: "উন্নতমানের 120/2 এমব্রয়ডারি সুতা, যা হাই-স্পিড এমব্রয়ডারি মেশিনে স্মুথ পারফরম্যান্স, উন্নত ফিনিশিং এবং নির্ভরযোগ্য উৎপাদনে সহায়তা করে।",
    heroSpec1Val: "১২০/২",
    heroSpec1Label: "স্ট্যান্ডার্ড থ্রেড কাউন্ট",
    heroSpec2Val: "১,২০০+ RPM",
    heroSpec2Label: "হাই-স্পিড মেশিনে পরীক্ষিত",
    heroSpec3Val: "৮০০+ শেড",
    heroSpec3Label: "উজ্জ্বল রঙের সমাহার",
    heroSpec4Val: "০.০১%",
    heroSpec4Label: "জিরো ব্রেক গ্যারান্টি",

    // Products Section
    prodBadge: "Featured Product",
    prodTitle: "Almas Thread 120/2",
    prodSub: "১০০% এক্সপোর্ট কোয়ালিটি এমব্রয়ডারি সুতা",
    prodDesc: "কম্পিউটারাইজড হাই-স্পিড এমব্রয়ডারি মেশিনের জন্য বিশেষভাবে প্রস্তুতকৃত ১২০/২ সুতা, যা দেয় সর্বোচ্চ টান ক্ষমতা, নিখুঁত লাস্টার এবং টানা উৎপাদনে জিরো-ব্রেক পারফরম্যান্স।",
    threadCount: "সুতার কাউন্ট (Thread Count)",
    application: "ব্যবহারের ক্ষেত্র (Application)",
    appValue: "কম্পিউটারাইজড মাল্টি-হেড এমব্রয়ডারি মেশিন",
    availableColors: "উপলব্ধ রং (Available Colors)",
    colorsValue: "৮০০+ রেডি শেড ও কাস্টম প্যান্টোন ম্যাচিং",
    qualityFeatures: "গুণগত বৈশিষ্ট্য (Quality Features)",
    pkgInfo: "প্যাকেজিং বিবরণ (Packaging Info)",
    pkgValue: "৫০০০ ও ৪০০০ মিটার কিং কোন / রপ্তানিমানের কার্টন",
    otherEmbroideryLines: "অন্যান্য বিশেষ এমব্রয়ডারি সুতার লাইন",

    // Why Almas Section
    whyBadge: "বিশ্বাস ও সক্ষমতা",
    whyTitle: "কেন আলমাস থ্রেড?",
    whySubtitle: "গার্মেন্টস ও এমব্রয়ডারি শিল্পের নিরবচ্ছিন্ন উৎপাদনের একমাত্র নির্ভরযোগ্য পছন্দ।",
    why1: "উন্নতমানের এমব্রয়ডারি সুতা",
    why1Desc: "আমদানিকৃত উন্নত ভার্জিন কাঁচামাল যা দেয় সর্বোচ্চ টান শক্তি ও গিঁটমুক্ত মসৃণতা।",
    why2: "120/2 Thread Specification",
    why2Desc: "স্ট্যান্ডার্ড ১২০/২ স্পেসিফিকেশন যা কাপড়ে অতিরিক্ত টান বা কুঞ্চন তৈরি করে না।",
    why3: "হাই-স্পিড এমব্রয়ডারি মেশিনের জন্য উপযোগী",
    why3Desc: "১২০০+ RPM গতির হাই-স্পিড আধুনিক এমব্রয়ডারি মেশিনে টানা ব্যবহারের উপযোগী।",
    why4: "স্মুথ মেশিন পারফরম্যান্স",
    why4Desc: "বিশেষ মাইক্রো-সিলিকন লুব্রিকেশন সুতা ছেঁড়া রোধ করে এবং সূঁচের ঘর্ষণ কমায়।",
    why5: "উন্নত এমব্রয়ডারি ফিনিশিং",
    why5Desc: "চমৎকার উজ্জ্বলতা ও নিখুঁত ফিনিশিং যা পোশাকের ডিজাইনকে আকর্ষণীয় ও প্রিমিয়াম করে।",
    why6: "আধুনিক ডাইং প্রযুক্তি",
    why6Desc: "কম্পিউটারাইজড ডাইং ও স্পেকট্রোফটোমিটার ম্যাচিং প্রতিটি লটে হুবহু রঙের মিল নিশ্চিত করে।",
    why7: "ধারাবাহিক ও নির্ভরযোগ্য মান",
    why7Desc: "জিরো-ব্রেক মানদণ্ড এবং প্রতিটি কোনে সমান উইন্ডিং যা কারখানার উৎপাদন বৃদ্ধি করে।",
    why8: "গার্মেন্টস ও এমব্রয়ডারি শিল্পের জন্য উপযোগী",
    why8Desc: "দেশের শীর্ষস্থানীয় এক্সপোর্ট গার্মেন্টস, বায়িং হাউস ও এমব্রয়ডারি কারখানার প্রথম পছন্দ।",

    // About Us Section
    aboutBadge: "কোম্পানি পরিচিতি",
    aboutTitle: "আলমাস এক্সেসরিজ ইন্ডাস্ট্রিজ সম্পর্কে",
    aboutStatement: "আলমাস এক্সেসরিজ ইন্ডাস্ট্রিজ এমব্রয়ডারি শিল্পের জন্য উন্নতমানের এমব্রয়ডারি সুতা সরবরাহে কাজ করছে। গুণগত মান, নির্ভরযোগ্যতা এবং গ্রাহকের সন্তুষ্টিকে সর্বোচ্চ গুরুত্ব দিয়ে আমরা আমাদের পণ্য ও সেবা পরিচালনা করি।",
    aboutP2: "চট্টগ্রামে অবস্থিত আমাদের আধুনিক কারখানা এবং ঢাকার গাজীপুরে আমাদের শোরুম ও ল্যাব সাপোর্ট সেন্টার থেকে আমরা সারা দেশে দ্রুত ও নির্ভরযোগ্য সেবা দিয়ে আসছি।",
    aboutStat1Val: "১.৫ লাখ+",
    aboutStat1Label: "মাসিক কোন উৎপাদন সক্ষমতা",
    aboutStat2Val: "৮০০+",
    aboutStat2Label: "প্যান্টোন রেডি কালার শেড",
    aboutStat3Val: "১০০%",
    aboutStat3Label: "রপ্তানিমানের গুণমান নিশ্চিত",

    // Color Collection Section
    colorsBadge: "কালার কালেকশন",
    colorsTitle: "আমাদের থ্রেডের রঙ দেখুন",
    colorsDesc: "৮০০টিরও বেশি উজ্জ্বল শেড থেকে আপনার পছন্দের রঙ বেছে নিন অথবা আপনার স্পেসিফিক প্যান্টোন কোডের সাথে হুবহু ম্যাচ করিয়ে নিন।",
    sampleCardCta: "ফ্রি শেড কার্ড সংগ্রহ করুন",

    // Quality & Dyeing Section
    dyeingBadge: "আধুনিক প্রযুক্তি",
    dyeingTitle: "আধুনিক ডাইং প্রযুক্তি",
    dyeingStatement: "“সঠিক রঙ, ধারাবাহিক মান এবং উন্নত ফিনিশিং নিশ্চিত করতে আমাদের এমব্রয়ডারি সুতা আধুনিক ডাইং প্রক্রিয়ার মাধ্যমে প্রস্তুত করা হয়।”",
    dyeingFeat1Title: "স্পেকট্রোফটোমিটার কালার ম্যাচিং",
    dyeingFeat1Desc: "কম্পিউটার নিয়ন্ত্রিত ল্যাব টেস্টের মাধ্যমে বিভিন্ন লটের মাঝেও শতভাগ একই রঙ নিশ্চিত করা হয়।",
    dyeingFeat2Title: "ওয়াশ ও ব্লিচ প্রতিরোধী (গ্রেড ৪.৫+)",
    dyeingFeat2Desc: "কঠোর ওয়াশিং, ক্লোরিন ব্লিচ এবং রোদে শুকালেও সুতার আকর্ষণীয় রঙ কখনোই ম্লান হয় না।",
    dyeingFeat3Title: "পরিবেশবান্ধব ও এজো-ফ্রি ডাই",
    dyeingFeat3Desc: "ক্ষতিকারক রাসায়নিক ও ক্ষতিকর উপাদান মুক্ত যা শিশু ও স্পর্শকাতর ত্বকের পোশাকের জন্য শতভাগ নিরাপদ।",

    // Gallery Section
    galleryBadge: "উৎপাদন ও দৃশ্যপট",
    galleryTitle: "কারখানা ও এমব্রয়ডারি গ্যালারি",
    galleryDesc: "আমাদের আধুনিক কারখানা, অটোমেটিক উইন্ডিং, হাই-স্পিড এমব্রয়ডারি মেশিন ও চমৎকার নকশার ঝলক।",
    filterAll: "সবগুলো",
    filterMachines: "এমব্রয়ডারি মেশিন",
    filterProducts: "সুতার প্যাকেজিং",
    filterDyeing: "ডাইং ও ল্যাব",
    filterArt: "এমব্রয়ডারি ডিজাইন",

    // Locations & Contact Section
    contactBadge: "যোগাযোগ",
    contactTitle: "আমাদের কারখানা ও শোরুম",
    contactDesc: "আমাদের চট্টগ্রামে অবস্থিত আধুনিক কারখানা পরিদর্শন করুন অথবা ঢাকার গাজীপুর শোরুমে সরাসরি যোগাযোগ করুন।",
    dhakaOfficeTitle: "গাজীপুর, ঢাকা",
    dhakaOfficeAddress: "গাজীপুর, ঢাকা",
    dhakaOfficeTag: "শোরুম ও স্যাম্পল ডেস্ক",
    ctgOfficeTitle: "চট্টগ্রাম (পাহাড়তলী, চট্টগ্রাম)",
    ctgOfficeAddress: "পাহাড়তলী, চট্টগ্রাম",
    ctgOfficeTag: "কারখানা ও প্রধান সরবরাহ কেন্দ্র",
    ctgFactoryTitle: "চট্টগ্রাম (পাহাড়তলী, চট্টগ্রাম)",
    ctgFactoryAddress: "পাহাড়তলী, চট্টগ্রাম",
    ctgFactoryTag: "হেভি প্রোডাকশন ও ডাইং প্ল্যান্ট",
    getDirections: "ম্যাপে লোকেশন দেখুন",
    viewMap: "ম্যাপে দেখুন",
    directCall: "সরাসরি কল করুন",

    // RFQ Form
    rfqTitle: "ফ্রি স্যাম্পল কোন ও শেড কার্ডের জন্য আবেদন",
    rfqSubtitle: "আপনার কারখানায় ২৪ ঘণ্টার মধ্যে ল্যাব টেস্ট রিপোর্টসহ স্যাম্পল পৌঁছে দেওয়া হবে।",
    formName: "আপনার নাম",
    formEmail: "কর্পোরেট ইমেইল",
    formPhone: "ফোন / হোয়াটসঅ্যাপ নম্বর",
    formCompany: "ফ্যাক্টরি / এমব্রয়ডারি ইউনিটের নাম",
    formThreadType: "প্রয়োজনীয় সুতা (120/2 / ট্রাইলোবাল / মেটালিক)",
    formColorNotes: "কালার কোড বা বিশেষ কোনো চাহিদা",
    formSubmit: "স্যাম্পল পাঠাতে অনুরোধ করুন",
    formSuccess: "আপনার তথ্য গৃহীত হয়েছে! আমাদের প্রতিনিধি খুব শীঘ্রই আপনার সাথে যোগাযোগ করবেন।",

    // Footer
    footerDesc: "আলমাস এক্সেসরিজ ইন্ডাস্ট্রিজ — কম্পিউটারাইজড মাল্টি-হেড মেশিনের জন্য ১০০% এক্সপোর্ট কোয়ালিটি এমব্রয়ডারি সুতা প্রস্তুতকারক ও সরবরাহকারী।",
    copyright: "সর্বস্বত্ব সংরক্ষিত। আলমাস থ্রেড — আলমাস এক্সেসরিজ ইন্ডাস্ট্রিজ।",
    madeIn: "মানই আমাদের প্রতিশ্রুতি"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("bn"); // Default to Bengali as requested

  useEffect(() => {
    const saved = localStorage.getItem("almas_lang") as Language;
    if (saved === "en" || saved === "bn") {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("almas_lang", newLang);
  };

  const toggleLang = () => {
    const nextLang = lang === "en" ? "bn" : "en";
    setLang(nextLang);
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations["en"]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
