import AppointmentSection from "@/components/AppointmentSection";
import GoogleMap from "@/components/GoogleMap";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
    title: "New Patient Special - Sethi Virdi DDS",
    description: "",
    alternates: {
        canonical: "/new-patient-special/",
    },
}

const page = () => {
    return (
        <div className="w-full bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1290px] py-10 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    <div className="text-black">
                        <h1 className="text-[32px] text-[#0d0d0d] font-semibold leading-[1.06]">
                            Friendly staff! Excellent service! Beautiful smiles!
                            Welcoming environment!
                        </h1>

                        <p className="mt-7 text-[18px] leading-[1.35] max-w-[920px]">
                            Dr. Megna Sethi and Dr. Amandeep Virdi extend a warm welcome to new patients, and we would be delighted to include you in our dental family. We invite you to explore our website to discover more about our practice. Here, you can find details about our dedicated staff, our well-equipped office, as well as information about the comprehensive procedures and services we provide. If you have any questions, please call us at [US phone number]. We take immense pleasure in connecting with our patients and anyone interested in joining our dental community.
                            <br />
                            <br />
                            Our ultimate goal is to ensure you achieve and maintain healthy teeth and gums for life!
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-full max-w-[330px] h-[460px] rounded-lg overflow-hidden">
                            <Image
                                src="/images/megna-313-scaled.jpg"
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

            <div className="mt-12">
                <TestimonialsSection />
                <AppointmentSection />
                <GoogleMap />
            </div>
        </div>
    );
};

export default page;