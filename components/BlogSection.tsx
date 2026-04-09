import Image from "next/image";
import Link from "next/link";
import { blogPages } from "@/lib/contentPages";

const BlogSection = () => {
  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="container mx-auto max-w-[1290px] px-4 sm:px-6 lg:px-8">
        <div className="text-center text-black">
          <h5 className="text-[18px] leading-[1.06] text-[#1291da]">Blog</h5>
          <h2 className="mt-2 text-[32px] font-semibold leading-[1.06] text-[#0d0d0d]">
            Latest Blog & Articles
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPages.map((post) => (
            <article
              key={post.slug}
              className="overflow-hidden rounded-xl border border-[#e6e6e6] bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                {post.publishedAt && (
                  <p className="text-sm font-medium text-[#1291da]">{post.publishedAt}</p>
                )}
                <h3 className="mt-2 text-[22px] font-semibold leading-[1.3] text-[#0d0d0d]">
                  {post.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.6] text-[#5a5a5a]">
                  {post.excerpt}
                </p>
                <Link
                  href={`/${post.slug}/`}
                  className="mt-4 inline-block font-semibold text-[#213666] transition-colors hover:text-[#1291da]"
                >
                  Read More -&gt;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
