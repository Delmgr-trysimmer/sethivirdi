import { contentPages } from "@/lib/contentPages";

const SITE = "https://sethivirdidds.com";

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

const WEB_STORY_SLUGS = ["dental-care-service-milpitas-ca"] as const;

type SitemapEntry = {
    loc: string;
    lastmod: string;
    changefreq: "weekly" | "monthly";
    priority: "1.00" | "0.80";
};

function escapeXml(value: string) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&apos;");
}

function toUrlXml(entry: SitemapEntry) {
    return [
        "<url>",
        `<loc>${escapeXml(entry.loc)}</loc>`,
        `<lastmod>${entry.lastmod}</lastmod>`,
        `<changefreq>${entry.changefreq}</changefreq>`,
        `<priority>${entry.priority}</priority>`,
        "</url>",
    ].join("");
}

export function GET() {
    const now = new Date().toISOString();

    const entries: SitemapEntry[] = [
        {
            loc: `${SITE}/`,
            lastmod: now,
            changefreq: "weekly",
            priority: "1.00",
        },
        ...STATIC_PATHS.map((path) => ({
            loc: `${SITE}/${path}/`,
            lastmod: now,
            changefreq: "monthly" as const,
            priority: "0.80" as const,
        })),
        ...contentPages.map((page) => ({
            loc: `${SITE}/${page.slug}/`,
            lastmod: now,
            changefreq: "monthly" as const,
            priority: "0.80" as const,
        })),
        ...WEB_STORY_SLUGS.map((slug) => ({
            loc: `${SITE}/web-stories/${slug}/`,
            lastmod: now,
            changefreq: "monthly" as const,
            priority: "0.80" as const,
        })),
    ];

    const xml = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...entries.map(toUrlXml),
        "</urlset>",
    ].join("");

    return new Response(xml, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
    });
}
