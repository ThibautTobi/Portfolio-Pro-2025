import type { MetadataRoute } from "next";

const siteUrl = "https://portfolio-pro-2025.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}