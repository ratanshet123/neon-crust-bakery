import { MetadataRoute } from "next";
import { siteConfig } from "@/data/site"; // Assuming siteConfig has a 'url' or I'll use a placeholder

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://neoncrust.com"; // Placeholder URL as user didn't specify production domain

    const routes = [
        "",
        "/menu",
        "/gallery",
        "/about",
        "/contact",
        "/order",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "daily" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    return routes;
}
