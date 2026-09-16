import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { ThreadCatalog } from "@/components/sections/ThreadCatalog";
import { WhyAlmasSection } from "@/components/sections/WhyAlmasSection";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { ColorShadeShowcase } from "@/components/sections/ColorShadeShowcase";
import { QualityDyeingSection } from "@/components/sections/QualityDyeingSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { LocationDirectory } from "@/components/sections/LocationDirectory";
import { CtaBanner } from "@/components/sections/CtaBanner";
import {
  generateProductCatalogSchema,
  generateFaqSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";

export default function Home() {
  const catalogSchema = generateProductCatalogSchema();
  const faqSchema = generateFaqSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
  ]);

  return (
    <div className="relative overflow-hidden">
      {/* Search Engine Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 1. Home — Hero Section */}
      <HeroSection />

      {/* 2. Products — Almas Thread 120/2 Spotlight & Embroidery Lines */}
      <ThreadCatalog />

      {/* 3. Why Almas Thread — 8 Trust Reasons */}
      <WhyAlmasSection />

      {/* 4. About Us — Almas Accessories Industries Profile */}
      <AboutUsSection />

      {/* 5. Color Collection — 800+ Shades & Shade Cards */}
      <ColorShadeShowcase />

      {/* 6. Quality & Dyeing — Modern Dyeing Technology */}
      <QualityDyeingSection />

      {/* 7. Gallery — Computerized Embroidery & Factory Floor */}
      <GallerySection />

      {/* 8. Contact — Dhaka Office, Chattogram Factory & Hotline */}
      <LocationDirectory />

      {/* 9. Free Sample Box & Shade Card Request */}
      <CtaBanner />
    </div>
  );
}
