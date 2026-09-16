import { Metadata } from "next";
import productsData from "@/data/products.json";

export const siteConfig = {
  name: "ALMAS THREAD | 100% Export Quality Embroidery Thread 120/2",
  shortName: "Almas Thread",
  companyName: "Almas Accessories Industries",
  taglineBn: "সুতোই বুনি আগামীর স্বপ্ন…",
  taglineEn: "Weaving Tomorrow's Dreams in Every Thread…",
  description:
    "Official manufacturer & supplier of 100% Export Quality 120/2 Computerized Embroidery Threads in Bangladesh. Offering 800+ Pantone ready color shades, micro-silicon zero breakage lubrication, Delta E < 0.3 lab-dip matching, and 24h sample dispatch for export garment factories and apparel brands.",
  descriptionBn:
    "কম্পিউটারাইজড মাল্টি-হেড মেশিনের জন্য ১০০% এক্সপোর্ট কোয়ালিটি ১২০/২ এমব্রয়ডারি সুতা প্রস্তুতকারক। ৮০০+ রেডি শেড, মাইক্রো সিলিকন লুব্রিকেশন (জিরো ব্রেক), এবং সারাদেশে ফ্রি স্যাম্পল ডেলিভারি।",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://almasaccessories.netlify.app",
  ogImage: "https://almasaccessories.netlify.app/images/products/almas_thread_120_2.jpg",
  keywords: [
    // Primary Brand & Product
    "Almas Thread",
    "আলমাস থ্রেড",
    "Almas Accessories Industries",
    "আলমাস এক্সেসরিজ ইন্ডাস্ট্রিজ",
    "100% Export Quality Embroidery Thread",
    "১০০% এক্সপোর্ট কোয়ালিটি এমব্রয়ডারি সুতা",
    "120/2 Embroidery Thread",
    "১২০/২ এমব্রয়ডারি সুতা",
    
    // Industrial & B2B Keywords
    "Embroidery Thread Manufacturer Bangladesh",
    "Computerized Embroidery Machine Thread",
    "Multi-Head Embroidery Thread Bangladesh",
    "Trilobal Polyester Embroidery Thread 120/2",
    "Metallic Embroidery Thread Gold Silver",
    "Rayon Embroidery Thread",
    "Eco-Friendly Recycled GRS Embroidery Thread",
    "King Cone 5000 Meter Embroidery Spool",
    
    // Color & Matching
    "800+ Pantone Embroidery Thread Shades",
    "Spectrophotometer Delta E Lab Dip Matching",
    "Embroidery Shade Card Bangladesh",
    "High Wash & Chlorine Bleach Fastness Thread",
    
    // Regional & Trade
    "Garment Accessories Manufacturer Gazipur Dhaka",
    "Embroidery Thread Factory Pahartali Chattogram",
    "RMG Garments Accessories Supplier Bangladesh",
    "পাইকারি এমব্রয়ডারি সুতা কারখানা"
  ],
  hotline: "01845-069803",
  internationalPhone: "+8801845069803",
  email: "info@almasaccessories.com",
  offices: {
    chattogram: {
      title: "Chittagong (Pahartali, Chattagram)",
      titleBn: "চট্টগ্রাম (পাহাড়তলী, চট্টগ্রাম)",
      street: "Pahartali, Chattagram",
      streetBn: "পাহাড়তলী, চট্টগ্রাম",
      city: "Chattogram",
      postalCode: "4202",
      country: "BD",
      latitude: "22.3584",
      longitude: "91.7780",
    },
    dhaka: {
      title: "Gazipur, Dhaka",
      titleBn: "গাজীপুর, ঢাকা",
      street: "Gazipur, Dhaka",
      streetBn: "গাজীপুর, ঢাকা",
      city: "Gazipur",
      postalCode: "1704",
      country: "BD",
      latitude: "23.9536",
      longitude: "90.3802",
    },
  },
};

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  canonical = "/",
  keywords = siteConfig.keywords,
}: {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  keywords?: string[];
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.shortName}`,
    },
    description,
    keywords,
    authors: [{ name: siteConfig.companyName, url: siteConfig.url }],
    creator: siteConfig.companyName,
    publisher: siteConfig.companyName,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
      languages: {
        "bn-BD": `${siteConfig.url}${canonical}`,
        "en-US": `${siteConfig.url}${canonical}`,
        "x-default": `${siteConfig.url}${canonical}`,
      },
    },
    openGraph: {
      type: "website",
      locale: "bn_BD",
      alternateLocale: ["en_US"],
      url: `${siteConfig.url}${canonical}`,
      title,
      description,
      siteName: siteConfig.shortName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@AlmasThread",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: "Industrial & Manufacturing Textiles",
    classification: "Embroidery Thread Manufacturing & Apparel Accessories",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
      apple: "/favicon.svg",
    },
  };
}

/**
 * 1. Schema: Manufacturing Plant & Organization (Google Knowledge Graph)
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ManufacturingPlant",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.companyName,
    alternateName: [siteConfig.shortName, "আলমাস থ্রেড", "Almas Thread Bangladesh"],
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/products/almas_thread_120_2.jpg`,
    image: `${siteConfig.url}/images/products/embroidery_machine_plant.jpg`,
    telephone: siteConfig.internationalPhone,
    email: siteConfig.email,
    description: siteConfig.description,
    slogan: siteConfig.taglineBn,
    foundingLocation: {
      "@type": "Place",
      name: "Chattogram, Bangladesh",
    },
    knowsAbout: [
      "120/2 Polyester Embroidery Thread",
      "Computerized Multi-Head Embroidery Machines",
      "Trilobal Embroidery Filament",
      "Spectrophotometer Lab Dip Matching",
    ],
    areaServed: [
      { "@type": "Country", name: "Bangladesh" },
      { "@type": "AdministrativeArea", name: "Global Garments Export Market" },
    ],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: siteConfig.offices.chattogram.street,
        addressLocality: "Chattogram",
        postalCode: siteConfig.offices.chattogram.postalCode,
        addressCountry: "BD",
      },
      {
        "@type": "PostalAddress",
        streetAddress: siteConfig.offices.dhaka.street,
        addressLocality: "Gazipur",
        addressRegion: "Dhaka",
        postalCode: siteConfig.offices.dhaka.postalCode,
        addressCountry: "BD",
      },
    ],
    geo: [
      {
        "@type": "GeoCoordinates",
        latitude: siteConfig.offices.chattogram.latitude,
        longitude: siteConfig.offices.chattogram.longitude,
      },
      {
        "@type": "GeoCoordinates",
        latitude: siteConfig.offices.dhaka.latitude,
        longitude: siteConfig.offices.dhaka.longitude,
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.internationalPhone,
        contactType: "sales & customer support",
        areaServed: "BD",
        availableLanguage: ["Bengali", "English"],
      },
    ],
  };
}

/**
 * 2. Schema: WebSite with Sitelinks Search Box
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.shortName,
    alternateName: siteConfig.companyName,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/colors?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: ["bn-BD", "en-US"],
  };
}

/**
 * 3. Schema: Product Catalog (ItemList & Product)
 */
export function generateProductCatalogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: productsData.map((prod, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        "@id": `${siteConfig.url}/product/${prod.id}`,
        name: prod.name_en,
        alternateName: prod.name_bn,
        description: prod.description_en,
        image: prod.images.map((img) => `${siteConfig.url}${img}`),
        brand: {
          "@type": "Brand",
          name: siteConfig.shortName,
        },
        manufacturer: {
          "@type": "Organization",
          name: siteConfig.companyName,
        },
        category: "Apparel & Textile Accessories > Embroidery Thread",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "BDT",
          price: "0",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          seller: {
            "@type": "Organization",
            name: siteConfig.companyName,
          },
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "128",
          bestRating: "5",
          worstRating: "1",
        },
      },
    })),
  };
}

/**
 * 4. Schema: FAQ Page for Merchandisers & Garment Buyers
 */
export function generateFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the standard count specification of Almas Thread?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Almas Thread produces 100% Export Quality 120/2 specification embroidery thread engineered specifically for high-speed computerized multi-head embroidery machines (up to 1,200+ RPM) with micro-silicone wax lubrication for zero thread breakage.",
        },
      },
      {
        "@type": "Question",
        name: "How many color shades are available in the Almas Thread library?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Almas Thread maintains over 800+ ready stock Pantone color shades and provides computerized spectrophotometer lab-dip color matching with Delta E < 0.3 precision within 24 to 48 hours.",
        },
      },
      {
        "@type": "Question",
        name: "Does Almas Accessories Industries provide free sample shade cards?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Almas Accessories Industries provides free sample cones and physical color shade books dispatched directly to garment factories and embroidery workshops across Bangladesh within 24 hours.",
        },
      },
      {
        "@type": "Question",
        name: "Where are Almas Thread factory and showroom located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our main manufacturing plant is located in Chittagong (Pahartali, Chattagram) and our commercial showroom is located in Gazipur, Dhaka.",
        },
      },
    ],
  };
}

/**
 * 5. Schema: Breadcrumb Navigation
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}

/**
 * 6. Schema: Single Product Detail Schema
 */
export function generateSingleProductSchema(prod: typeof productsData[0]) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${siteConfig.url}/product/${prod.id}`,
    name: prod.name_en,
    alternateName: prod.name_bn,
    description: prod.description_en,
    image: prod.images.map((img) => (img.startsWith("http") ? img : `${siteConfig.url}${img}`)),
    sku: prod.id,
    mpn: prod.id,
    brand: {
      "@type": "Brand",
      name: siteConfig.shortName,
    },
    manufacturer: {
      "@type": "Organization",
      name: siteConfig.companyName,
      url: siteConfig.url,
      telephone: siteConfig.internationalPhone,
    },
    category: "Apparel & Textile Accessories > Embroidery Thread",
    material: "100% High Tenacity Trilobal / Filament Polyester",
    offers: {
      "@type": "Offer",
      url: `${siteConfig.url}/product/${prod.id}`,
      priceCurrency: "BDT",
      price: "0",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: siteConfig.companyName,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "128",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

