import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ALMAS THREAD | 100% Export Quality Embroidery Thread 120/2",
    short_name: "Almas Thread",
    description:
      "Official manufacturer & supplier of 100% Export Quality 120/2 Computerized Embroidery Threads in Bangladesh.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#0891b2",
    icons: [
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
