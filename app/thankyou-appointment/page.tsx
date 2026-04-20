import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thankyou - Appointment - Sethi Virdi DDS",
  description: "Thanks for contacting us! We will be in touch with you shortly",
  alternates: {
    canonical: "/thankyou-appointment/",
  },
};

export default function ThankYouPage() {
  return (
    <main className="bg-white">
      <section className="grid min-h-[360px] grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[280px] overflow-hidden">
          <Image
            src="/images/Dental-Specials-Success.jpg"
            alt="Patient smiling during dental care"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#2578a8]/80" />
        </div>

        <div className="flex items-center bg-[#4b89b0] px-8 py-16 sm:px-12 lg:px-20">
          <div className="max-w-[620px] text-white text-center">
            <h1 className="text-[32px] font-semibold leading-[1.15]">
              Thanks for contacting us!
            </h1>
            <p className="mt-8 text-[18px] text-white/95">
              We will be in touch with you shortly
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
