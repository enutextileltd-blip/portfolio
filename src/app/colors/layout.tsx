import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "800+ Embroidery Thread Color Shades & Pantone Matching Library",
  description:
    "Explore Almas Thread's 800+ Pantone-matched computerized embroidery thread shade collection. Select shades and order custom lab-dips or free physical shade books across Bangladesh.",
  canonical: "/colors",
  keywords: [
    "800+ Embroidery Thread Shades",
    "Pantone Embroidery Thread Bangladesh",
    "120/2 Thread Color Card",
    "Almas Thread Shade Book",
    "Computerized Embroidery Color Matching",
    "Spectrophotometer Lab Dip Delta E 0.3",
    "প্যান্টোন এমব্রয়ডারি সুতার কালার শেড",
    "কালার শেড বুক বাংলাদেশ",
  ],
});

export default function ColorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Color Shade Library (800+ Shades)", url: "/colors" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
