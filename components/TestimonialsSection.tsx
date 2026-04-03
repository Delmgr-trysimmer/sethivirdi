import Image from "next/image";
import React from "react";

const TestimonialsSection = () => {
  return (
    <section className="w-full bg-[#e6f2f9]">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[420px]">
        <div className="p-8 md:p-12 flex items-center justify-center">
          <div className="w-full max-w-[520px] h-[280px] md:h-[320px] rounded-sm bg-[linear-gradient(135deg,#eaf2f8,#c6d9e8)] border border-[#bfd1df] flex items-center justify-center">
            <Image src="/images/Testimonials.jpg" alt="Testimonials" width={520} height={320} />
          </div>
        </div>

        <div className="flex items-center justify-center px-6 py-12 md:py-16">
          <div className="text-center">
            <p className="text-[#213666] text-[28px] sm:text-[32px] font-semibold leading-[1.2em]">
              Testimonials
            </p>
            <h2 className="mt-3 text-[#0d0d0d] text-[27px] sm:text-[31px]  font-semibold leading-[1.2em]">
              What Our Clients Say About Us
            </h2>
            <div className="mx-auto mt-8 h-14 w-14 rounded-full border border-[#8aa5bb]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
