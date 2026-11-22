import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Beaver & Weaver",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#0C2A5B",
    icons: [{ src: "/icon.png", sizes: "256x256", type: "image/png" }],
  };
}
