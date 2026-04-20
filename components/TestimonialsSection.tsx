"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const sampleGoogleReviews = [
  {
    name: "Sonia Pantoja",
    rating: 5,
    timeAgo: "Google Review",
    review:
      "Nice and clean 👌 the personal bilingual the more important Dr's very professional for guaranty work ai lovet I recommend 100%100",
  },
  {
    name: "Donna L",
    rating: 5,
    timeAgo: "Google Review",
    review:
      "Great experience with this office, all doctors and personnel are knowledgeable and concerned with your well being, comfort and complete care. The added information about care in the next visit was a bonus.",
  },
  {
    name: "Cynthia Cunningham",
    rating: 5,
    timeAgo: "Google Review",
    review:
      "Love this place. They are so kind and patient. They always make me feel so comfortable. I would highly recommend them.",
  },
  {
    name: "Debbie H",
    rating: 5,
    timeAgo: "Google Review",
    review:
      "I had a very positive experience. They were very pleasant to work with and answered all of my questions that I had.",
  },
  {
    name: "Rob Mieso",
    rating: 5,
    timeAgo: "Google Review",
    review:
      "Great service! Dr. Sethi & Dr. Virdi and their staff provide a friendly, welcoming environment and high quality, professional dental care. We are very pleased to have them as our dentists and would gladly recommend them to anyone.",
  },
  {
    name: "Mariamne Borden",
    rating: 5,
    timeAgo: "Google Review",
    review:
      "Dr. Sethi & Dr. Virdi are honestly the best dentists I've ever encountered! I've been going to this practice since I was 8 years old and I'm 39 years old now! And I've never had a dental issue not cared for. They've gone above and beyond to handle everything from cavities to fillings to crowns to implants to even helping me with my mom's dental work! They really care. I cannot emphasize that enough! And I really trust them with my teeth which we all know is super important when it comes to dental work. I highly recommend this dental practice to anybody who needs any dental work done or even just a dental cleaning! And there's staff is always so friendly and understanding! I really love Edith as well their office manager! She's been there since I was eight and always very attentive!",
  },
  {
    name: "DARRYL PAYTON",
    rating: 5,
    timeAgo: "Google Review",
    review:
      "excellent and courteous staff, both doctors are very knowledgeable and extremely professional. Staff is very professional and provide timely service. Great Dentist",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-[#fbbc04]" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className="text-[20px] leading-none">
          {index < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

const TestimonialsSection = () => {
  const [expandedReviews, setExpandedReviews] = useState<Record<string, boolean>>({});
  const previewLength = 260;

  const toggleReviewExpansion = (reviewKey: string) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [reviewKey]: !prev[reviewKey],
    }));
  };

  return (
    <section className="w-full bg-[#e6f2f9]">
      <div className="grid min-h-[420px] grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center p-8 md:p-12">
          <div className="flex h-[280px] w-full max-w-[520px] items-center justify-center rounded-sm border border-[#bfd1df] bg-[linear-gradient(135deg,#eaf2f8,#c6d9e8)] md:h-[320px]">
            <Image src="/images/Testimonials.jpg" alt="Testimonials" width={520} height={320} />
          </div>
        </div>

        <div className="flex items-center justify-center px-6 py-12 md:py-16">
          <div className="w-full max-w-[560px] text-center">
            <p className="text-[28px] font-semibold leading-[1.2em] text-[#213666] sm:text-[32px]">
              Google Reviews
            </p>
            <h2 className="mt-3 text-[27px] font-semibold leading-[1.2em] text-[#0d0d0d] sm:text-[31px]">
              What Our Patients Say About Us
            </h2>

            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[22px] font-bold text-[#4285f4] shadow-sm">
                <Image src={"/images/google.png"} width={30} height={30} alt="" />
              </div>
              <div className="text-left">
                <p className="text-[18px] font-semibold text-[#0d0d0d]">4.9 Google Rating</p>
                <p className="text-[14px] text-[#516170]">Based on sample patient feedback</p>
              </div>
            </div>

            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop
              spaceBetween={20}
              slidesPerView={1}
              className="mt-8 w-full pb-12"
            >
              {sampleGoogleReviews.map((review) => {
                const reviewKey = `${review.name}-${review.timeAgo}`;
                const isExpanded = expandedReviews[reviewKey];
                const shouldTruncate = review.review.length > previewLength;
                const reviewText =
                  shouldTruncate && !isExpanded
                    ? `${review.review.slice(0, previewLength).trimEnd()}...`
                    : review.review;

                return (
                <SwiperSlide key={reviewKey}>
                  <div className="mx-auto min-h-[240px] rounded-[22px] bg-white p-6 text-left">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[18px] font-semibold text-[#0d0d0d]">{review.name}</p>
                        {/* <p className="mt-1 text-[14px] text-[#667788]">{review.timeAgo}</p> */}
                      </div>
                      <div className="rounded-full bg-[#f5f8fc] px-3 py-1 text-[13px] font-medium text-[#213666]">
                        Google
                      </div>
                    </div>

                    <div className="mt-4">
                      <StarRating rating={review.rating} />
                    </div>

                    <p className="mt-5 text-[17px] leading-[1.7] text-[#334155]">
                      {reviewText}
                    </p>
                    {shouldTruncate && (
                      <button
                        type="button"
                        onClick={() => toggleReviewExpansion(reviewKey)}
                        className="mt-2 text-[14px] font-semibold text-[#213666] underline underline-offset-2"
                      >
                        {isExpanded ? "Read less" : "Read more"}
                      </button>
                    )}
                  </div>
                </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
