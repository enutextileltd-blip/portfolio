import { Metadata } from "next";
import productsData from "@/data/products.json";
import {
  constructMetadata,
  generateSingleProductSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";

interface Props {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
}

export function generateStaticParams() {
  return productsData.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = productsData.find((p) => p.id === id) || productsData[0];

  return constructMetadata({
    title: `${product.name_en} (${product.name_bn}) | 100% Export Quality`,
    description: `${product.description_en} Manufactured by Almas Accessories Industries. Available in 800+ Pantone color shades for multi-head computerized embroidery machines.`,
    image: product.images[0] || "/images/products/almas_thread_120_2.jpg",
    canonical: `/product/${product.id}`,
    keywords: [
      product.name_en,
      product.name_bn,
      product.tag_en,
      product.tag_bn,
      "120/2 Embroidery Thread Bangladesh",
      "Computerized Multi-Head Embroidery Thread",
      "Almas Thread Manufacturer",
      "Almas Accessories Industries",
    ],
  });
}

export default async function ProductLayout({
  children,
  params,
}: Props) {
  const { id } = await params;
  const product = productsData.find((p) => p.id === id) || productsData[0];

  const productSchema = generateSingleProductSchema(product);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Products", url: "/#products" },
    { name: product.name_en, url: `/product/${product.id}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
