import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sportsligue",
    short_name: "Sportsligue",
    description:
      "Stay updated with the latest sports news, scores, and highlights on Sportsligue.com",
    start_url: "https://www.sportsligue.com",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      { src: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { src: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
  }
}
