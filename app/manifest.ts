import type { MetadataRoute } from "next";
import { SITE_NAME } from "./lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: "Multi-asset trading access across forex, crypto, indexes, and metals.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1623",
    theme_color: "#1e63b5",
    icons: [
      {
        src: "/icon.png",
        sizes: "1024x1024",
        type: "image/png",
      },
    ],
  };
}

