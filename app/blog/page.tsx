import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { blogPages } from "@/lib/contentPages";

const POSTS_PER_PAGE = 6;

type BlogListingPageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export const metadata: Metadata = {
  title: "Dental Blog | Milpitas, CA Dentist | Sethi Virdi DDS",
  description:
    "Discover expert insights at Sethi Virdi DDS Dental Blog, your go-to source for oral health in Milpitas, CA. Elevate your smile with our trusted dentistry.",
  alternates: {
    canonical: "/blog/",
  },
};

function getPageHref(page: number) {
  return page <= 1 ? "/blog/" : `/blog/?page=${page}`;
}

export default async function BlogListingPage({ searchParams }: BlogListingPageProps) {
  const { page } = await searchParams;
  const parsedPage = Number(page);
  const currentPage = Number.isFinite(parsedPage) && parsedPage > 0 ? Math.floor(parsedPage) : 1;

  const totalPosts = blogPages.length;
  const totalPages = Math.max(1, Math.ceil(totalPosts / POSTS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const startIndex = (safeCurrentPage - 1) * POSTS_PER_PAGE;
  const postsForCurrentPage = blogPages.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div>
      <PageBanner title="Blog" breadcrumbItems={["Home", "Blog"]} />

      <section className="w-full bg-white py-10 md:py-16">
        <div className="container mx-auto max-w-[1290px] px-4 sm:px-6 lg:px-8">
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {postsForCurrentPage.map((post) => (
              <article
                key={post.slug}
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
                    {post.description || post.excerpt}
                  </p>
                  <Link
                    href={`/${post.slug}/`}
                    className="mt-8 inline-block font-semibold text-[#213666] transition-colors hover:text-[#1291da]"
                  >
                    Read More -&gt;
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
              <Link
                href={getPageHref(safeCurrentPage - 1)}
                aria-disabled={safeCurrentPage === 1}
                className={`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
                  safeCurrentPage === 1
                    ? "pointer-events-none border-[#d8dee5] text-[#9aa8b6]"
                    : "border-[#c8d4df] text-[#213666] hover:border-[#1291da] hover:text-[#1291da]"
                }`}
              >
                Prev
              </Link>

              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;
                const isActive = pageNumber === safeCurrentPage;
                return (
                  <Link
                    key={pageNumber}
                    href={getPageHref(pageNumber)}
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded-md border px-3 py-2 text-sm font-semibold transition-colors ${
                      isActive
                        ? "border-[#1291da] bg-[#1291da] text-white"
                        : "border-[#c8d4df] text-[#213666] hover:border-[#1291da] hover:text-[#1291da]"
                    }`}
                  >
                    {pageNumber}
                  </Link>
                );
              })}

              <Link
                href={getPageHref(safeCurrentPage + 1)}
                aria-disabled={safeCurrentPage === totalPages}
                className={`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
                  safeCurrentPage === totalPages
                    ? "pointer-events-none border-[#d8dee5] text-[#9aa8b6]"
                    : "border-[#c8d4df] text-[#213666] hover:border-[#1291da] hover:text-[#1291da]"
                }`}
              >
                Next
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
