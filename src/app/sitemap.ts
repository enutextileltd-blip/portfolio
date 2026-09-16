import { MetadataRoute } from "next";
import productsData from "@/data/products.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://almasaccessories.com";
  const lastModified = new Date();

  // 1. Static Core Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/colors`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
  ];

  // 2. Dynamic Product Detail Pages
  const productRoutes: MetadataRoute.Sitemap = productsData.map((prod) => ({
    url: `${baseUrl}/product/${prod.id}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // 3. Anchor Section Deep-Links (Helpful for quick SERP jumps)
  const sectionRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/#products`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/#why-us`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#colors`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/#quality`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#gallery`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  return [...staticRoutes, ...productRoutes, ...sectionRoutes];
}
