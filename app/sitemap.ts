import type { MetadataRoute } from "next";
import { contentPages } from "@/lib/contentPages";

/** Matches `metadataBase` in `app/layout.tsx` */
const SITE = "https://sethivirdidds.com";

/** Top-level app routes (excluding `/` and dynamic segments). */
const STATIC_PATHS = [
    "appointment",
    "blog",
    "blue-header",
    "book-appointment",
    "contact",
    "dental-services",
    "dental-specials-success",
    "educational-videos",
    "invisalign-consultations",
    "meet-the-doctors",
    "meet-the-staff",
    "new-patient-special",
    "our-practice",
    "testimonials",
    "thankyou",
    "thankyou-appointment",
    "web-stories",
] as const;

/** Keys of `storyContent` in `app/web-stories/[slug]/page.tsx`. */
const WEB_STORY_SLUGS = ["dental-care-service-milpitas-ca"] as const;

const defaultRest: Pick<
    MetadataRoute.Sitemap[number],
    "lastModified" | "changeFrequency" | "priority"
> = {
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
};

export default function sitemap(): MetadataRoute.Sitemap {
    const home: MetadataRoute.Sitemap[number] = {
        url: `${SITE}/`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1,
    };

    const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
        url: `${SITE}/${path}/`,
        ...defaultRest,
    }));

    const contentEntries: MetadataRoute.Sitemap = contentPages.map((page) => ({
        url: `${SITE}/${page.slug}/`,
        ...defaultRest,
    }));

    const webStoryEntries: MetadataRoute.Sitemap = WEB_STORY_SLUGS.map(
        (slug) => ({
            url: `${SITE}/web-stories/${slug}/`,
            ...defaultRest,
        }),
    );

    return [home, ...staticEntries, ...contentEntries, ...webStoryEntries];
}
