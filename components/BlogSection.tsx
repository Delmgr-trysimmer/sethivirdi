import React from "react";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "How to Keep Your Teeth Healthy Between Visits",
    date: "March 10, 2026",
    excerpt:
      "Simple daily habits like proper brushing, flossing, and hydration can significantly improve oral health between dental appointments.",
    image: "/images/Service.jpg",
    href: "/blog/how-to-keep-your-teeth-healthy",
  },
  {
    id: 2,
    title: "What to Expect During a Same-Day Crown Procedure",
    date: "March 05, 2026",
    excerpt:
      "Learn how same-day crowns work, how long they take, and why many patients choose this fast and convenient restorative option.",
    image: "/images/Service.jpg",
    href: "/blog/same-day-crown-procedure",
  },
  {
    id: 3,
    title: "5 Signs It Is Time to Schedule a Dental Checkup",
    date: "February 26, 2026",
    excerpt:
      "Persistent sensitivity, bleeding gums, and lingering discomfort are common warning signs that should not be ignored.",
    image: "/images/Service.jpg",
    href: "/blog/signs-you-need-a-dental-checkup",
  },
];

const BlogSection = () => {
  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1290px]">
        <div className="text-black text-center">
          <h5 className="text-[18px] text-[#1291da] leading-[1.06]">Blog</h5>
          <h2 className="text-[32px] text-[#0d0d0d] font-semibold leading-[1.06] mt-2">
            Latest Blog & Articles
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="rounded-xl border border-[#e6e6e6] bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-sm text-[#1291da] font-medium">{post.date}</p>
                <h3 className="mt-2 text-[22px] font-semibold leading-[1.3] text-[#0d0d0d]">
                  {post.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.6] text-[#5a5a5a]">
                  {post.excerpt}
                </p>
                <Link
                  href="#"
                  className="inline-block mt-4 text-[#213666] font-semibold hover:text-[#1291da] transition-colors"
                >
                  Read More →
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