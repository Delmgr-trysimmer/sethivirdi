import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { blogPages } from "@/lib/contentPages";
import { stripInlineMarkdown } from "@/lib/parseInlineText";

const EXCLUDED_PREVIEW_TEXT =
  "Missing multiple teeth can affect your smile, confidence, and ability to eat. Fortunately, [All-on-4 dental implants](/all-on-4/) offer a permanent solution for restoring your";

export const metadata: Metadata = {
  title: "Dental Blog | Milpitas, CA Dentist | Sethi Virdi DDS",
  description:
    "Discover expert insights at Sethi Virdi DDS Dental Blog, your go-to source for oral health in Milpitas, CA. Elevate your smile with our trusted dentistry.",
  alternates: {
    canonical: "/blog/",
  },
};

export default function BlogListingPage() {
  return (
    <div>
      <PageBanner title="Blog" breadcrumbItems={["Home", "Blog"]} />

      <section className="w-full bg-white py-10 md:py-16">
        <div className="container mx-auto max-w-[1290px] px-4 sm:px-6 lg:px-8">
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPages.map((post) => (
              <Link
                key={post.slug}
                href={`/${post.slug}/`}
                className="overflow-hidden rounded-xl border border-[#e6e6e6] bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative h-52 w-full">
                  <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  {post.publishedAt && (
                    <p className="text-sm font-medium text-[#1291da]">{post.publishedAt}</p>
                  )}
                  <p className="mt-3 text-[16px] leading-[1.6] text-[#5a5a5a] line-clamp-4">
                    {stripInlineMarkdown(
                      (post.description || post.excerpt)
                        .replace(EXCLUDED_PREVIEW_TEXT, "")
                        .trim(),
                    )}
                  </p>
                  <span
                    // href={`/${post.slug}/`}
                    className="mt-8 inline-block font-semibold text-[#213666] transition-colors hover:text-[#1291da]"
                  >
                    Read More -&gt;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
