import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, Anek_Bangla } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import {
  constructMetadata,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/lib/seo";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const anekBangla = Anek_Bangla({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["bengali", "latin"],
  variable: "--font-bengali",
  display: "swap",
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = generateOrganizationSchema();
  const webSiteSchema = generateWebSiteSchema();

  return (
    <html
      lang="bn"
      className={`${plusJakarta.variable} ${outfit.variable} ${anekBangla.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-red-500 selection:text-white antialiased">
        <LanguageProvider>
          <SmoothScrollProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingWhatsApp />
          </SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
