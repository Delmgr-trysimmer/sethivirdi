import CtaSection from "@/components/CtaSection";
import BlogSection from "@/components/BlogSection";
import Hero from "@/components/Hero";
import InsuranceSection from "@/components/InsuranceSection";
import OurServices from "@/components/OurServices";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
    title: "Blue header - Sethi Virdi DDS",
    description: "",
}

const page = () => {
    return (
        <div className="w-full bg-white">
            <Hero />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1290px] py-10 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    <div className="text-black">
                        <h1 className="text-[32px] text-[#0d0d0d] font-semibold leading-[1.06]">
                            Friendly Staff! Excellent Service! Beautiful Smiles! Welcoming
                            Environment!
                        </h1>

                        <p className="mt-7 text-[18px] leading-[1.35] max-w-[920px]">
                            Dr. Megna Sethi and Dr. Amandeep Virdi extend a warm welcome to
                            new patients, and we would be delighted to include you in our
                            dental family. We invite you to explore our website to discover
                            more about our practice. Here, you can find details about our
                            dedicated staff, our well-equipped office, as well as information
                            about the comprehensive procedures and services we provide. If you
                            have any questions please call us. We take immense pleasure in
                            connecting with our patients and anyone interested in joining our
                            dental community.
                            <br />
                            <br />
                            Our ultimate goal is to ensure you achieve and maintain healthy
                            teeth and gums for life!
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-full max-w-[330px] h-[460px] rounded-lg overflow-hidden">
                            <Image
                                src="/images/doctor_image-scaled.webp"
                                alt="Dr. Megna Sethi and Dr. Amandeep Virdi"
                                width={330}
                                height={460}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <Link
                            href="/about"
                            className="mt-7 inline-flex items-center justify-center rounded-full bg-[#1f9de0] px-10 py-3 text-white text-[18px] font-medium hover:bg-[#1889c4] transition-colors"
                        >
                            Learn About Us
                        </Link>
                    </div>
                </div>
            </div>
            <InsuranceSection />

            <OurServices />

            <section className="w-full bg-white pb-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1290px] mt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                        <div className="relative md:pt-10 pl-8 md:pl-12">
                            <div className="absolute left-[-20px] top-28 h-[420px] md:h-[720px] w-[90%] bg-[#e5f6f7] rounded-2xl" />
                            <div className="relative h-[420px] md:h-[720px] w-full rounded-xl overflow-hidden shadow-sm">
                                <Image
                                    src="/images/Your-Trusted-Dentist-in-Milpitas.jpg"
                                    alt="Dentist examining a patient in Milpitas"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="text-[#888888] mt-20 lg:mt-0">
                            <h5 className="text-[18px] text-[#213666]">Welcome to Sethi Virdi DDS</h5>
                            <h2 className="text-[32px] text-[#0d0d0d]  font-semibold  leading-[1.2em] mt-4">
                                Your Trusted Dentist in Milpitas
                            </h2>

                            <div className="mt-6 space-y-5 text-[18px] leading-[1.55]">
                                <p>
                                    Looking for a reliable dentist near you in Milpitas? Look no further! At Sethi Virdi DDS, we are committed to providing top-notch dental care to our valued patients. Whether you need routine dental check-ups, cosmetic dentistry, or emergency dental services, our experienced team is here to help.
                                </p>


                                <h3 className="mt-7 text-[20px] font-bold text-[#0d0d0d] leading-tight">
                                    Why Choose Us?
                                </h3>

                                <p>
                                    When it comes to your oral health, having a trusted dentist in Milpitas is essential. Dr. Sethi Virdi and our dental team take pride in offering personalized care, addressing your unique dental needs, and ensuring your comfort throughout your visit. From routine cleanings to complex procedures, we’re here to deliver outstanding dental services tailored to you and your family.
                                </p>
                                <h3 className="mt-7 text-[20px] font-bold text-[#0d0d0d] leading-tight">
                                    Visit Sethi Virdi DDS Today
                                </h3>

                                <p>
                                    Your oral health is our priority, and we strive to build lasting relationships with our patients based on trust and exceptional care. Experience the difference with Sethi Virdi DDS - your reliable dentist in Milpitas offering top-tier dental services and emergency dentistry near you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="mt-12">
                <CtaSection />
                <TestimonialsSection />
                <BlogSection />
            </div>
        </div>
    );
};

export default page;