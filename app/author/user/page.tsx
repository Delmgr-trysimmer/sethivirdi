import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { blogPages } from "@/lib/contentPages";

export const metadata: Metadata = {
  title: "Author: user - Sethi Virdi DDS",
  description: "Browse all blog posts published by user at Sethi Virdi DDS.",
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

export default function AuthorUserPage() {
  return (
    <main className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <h1 className="text-[42px] font-semibold leading-tight text-[#111111] sm:text-[54px]">
          Author: user
        </h1>

        <div className="mt-10 space-y-10">
          {blogPages.map((post) => {
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
      </div>
    </main>
  );
}
