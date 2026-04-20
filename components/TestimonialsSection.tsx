"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const sampleGoogleReviews = [
  {
    name: "Priya K.",
    rating: 5,
    timeAgo: "2 weeks ago",
    review:
      "The team made me feel comfortable from the moment I walked in. Everything was explained clearly, and the treatment was gentle and efficient.",
  },
  {
    name: "Daniel R.",
    rating: 5,
    timeAgo: "1 month ago",
    review:
      "Clean office, kind staff, and very professional dentists. I came in nervous about my procedure and left feeling genuinely cared for.",
  },
  {
    name: "Melissa T.",
    rating: 5,
    timeAgo: "3 weeks ago",
    review:
      "Scheduling was easy and the visit was right on time. The doctors were patient, informative, and made the whole experience stress-free.",
  },
  {
    name: "Aaron S.",
    rating: 5,
    timeAgo: "6 days ago",
    review:
      "One of the best dental visits I have had. The staff is welcoming, the office is spotless, and the care feels truly personalized.",
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
              {sampleGoogleReviews.map((review) => (
                <SwiperSlide key={`${review.name}-${review.timeAgo}`}>
                  <div className="mx-auto min-h-[240px] rounded-[22px] bg-white p-6 text-left">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[18px] font-semibold text-[#0d0d0d]">{review.name}</p>
                        <p className="mt-1 text-[14px] text-[#667788]">{review.timeAgo}</p>
                      </div>
                      <div className="rounded-full bg-[#f5f8fc] px-3 py-1 text-[13px] font-medium text-[#213666]">
                        Google
                      </div>
                    </div>

                    <div className="mt-4">
                      <StarRating rating={review.rating} />
                    </div>

                    <p className="mt-5 text-[17px] leading-[1.7] text-[#334155]">
                      {review.review}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
