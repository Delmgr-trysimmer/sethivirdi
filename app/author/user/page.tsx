import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { blogPages } from "@/lib/contentPages";

export const metadata: Metadata = {
  title: "Author: user - Sethi Virdi DDS",
  description: "Browse all blog posts published by user at Sethi Virdi DDS.",
};

const POSTS_PER_PAGE = 6;

type AuthorUserPageProps = {
  searchParams?: Promise<{
    page?: string | string[];
  }>;
};

function getPostTitle(post: (typeof blogPages)[number]) {
  return post.bannerTitle || post.title || post.meta.title.replace(/\s*\|.*$/, "");
}

function getPostExcerpt(post: (typeof blogPages)[number]) {
  if (post.excerpt?.trim()) {
    return post.excerpt.trim();
  }

  if (post.description?.trim()) {
    return post.description.trim();
  }

  const firstParagraph = post.content.find((block) => block.type === "paragraph");

  if (firstParagraph && "text" in firstParagraph) {
    return firstParagraph.text.replace(/\[(.*?)\]\(.*?\)/g, "$1").trim();
  }

  return "Read more from Sethi Virdi DDS.";
}

function stripInlineMarkdown(text: string) {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .trim();
}

function getPageNumber(pageParam?: string | string[]) {
  const rawValue = Array.isArray(pageParam) ? pageParam[0] : pageParam;
  const parsedPage = Number.parseInt(rawValue ?? "1", 10);

  if (!Number.isFinite(parsedPage) || parsedPage < 1) {
    return 1;
  }

  return parsedPage;
}

function getPageHref(pageNumber: number) {
  return pageNumber <= 1 ? "/author/user" : `/author/user?page=${pageNumber}`;
}

export default async function AuthorUserPage({ searchParams }: AuthorUserPageProps) {
  const resolvedSearchParams = await searchParams;
  const totalPages = Math.max(1, Math.ceil(blogPages.length / POSTS_PER_PAGE));
  const currentPage = Math.min(getPageNumber(resolvedSearchParams?.page), totalPages);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = blogPages.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <main className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <h1 className="text-[42px] font-semibold leading-tight text-[#111111] sm:text-[54px]">
          Author: user
        </h1>

        <div className="mt-10 space-y-10">
          {paginatedPosts.map((post) => {
            const postTitle = getPostTitle(post);
            const excerpt = stripInlineMarkdown(getPostExcerpt(post));
            const description = post.description
              ? stripInlineMarkdown(post.description)
              : "";

            return (
              <article key={post.slug} className="border-b border-[#e8e8e8] pb-10 last:border-b-0">
                <Link
                  href={`/${post.slug}/`}
                  className="text-[28px] font-semibold leading-[1.2] text-[#1f8dd6] transition-colors hover:text-[#213666] sm:text-[34px]"
                >
                  {postTitle}
                </Link>

                <Link href={`/${post.slug}/`} className="mt-5 block overflow-hidden bg-[#eef3fb]">
                  <div className="relative aspect-16/7 w-full">
                    <Image
                      src={post.coverImage}
                      alt={postTitle}
                      fill
                      sizes="(max-width: 1200px) 100vw, 1140px"
                      className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                    />
                  </div>
                </Link>

                <p className="mt-4 max-w-[1080px] text-[18px] leading-[1.55] text-[#111111] line-clamp-4">
                  {description || excerpt}
                </p>
              </article>
            );
          })}
        </div>

        {totalPages > 1 && (
          <nav
            aria-label="Blog pagination"
            className="mt-12 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href={getPageHref(currentPage - 1)}
              aria-disabled={currentPage === 1}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
                currentPage === 1
                  ? "pointer-events-none border-[#d7d7d7] text-[#a0a0a0]"
                  : "border-[#1f8dd6] text-[#1f8dd6] hover:bg-[#1f8dd6] hover:text-white"
              }`}
            >
              Previous
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;
                const isActive = pageNumber === currentPage;

                return (
                  <Link
                    key={pageNumber}
                    href={getPageHref(pageNumber)}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex h-11 w-11 items-center justify-center rounded-full border text-sm font-semibold transition-colors ${
                      isActive
                        ? "border-[#111111] bg-[#111111] text-white"
                        : "border-[#d7d7d7] text-[#111111] hover:border-[#1f8dd6] hover:text-[#1f8dd6]"
                    }`}
                  >
                    {pageNumber}
                  </Link>
                );
              })}
            </div>

            <Link
              href={getPageHref(currentPage + 1)}
              aria-disabled={currentPage === totalPages}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
                currentPage === totalPages
                  ? "pointer-events-none border-[#d7d7d7] text-[#a0a0a0]"
                  : "border-[#1f8dd6] text-[#1f8dd6] hover:bg-[#1f8dd6] hover:text-white"
              }`}
            >
              Next
            </Link>
          </nav>
        )}
      </div>
    </main>
  );
}
