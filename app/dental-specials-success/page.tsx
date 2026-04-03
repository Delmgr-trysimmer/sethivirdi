import AppointmentSection from "@/components/AppointmentSection";
import GoogleMap from "@/components/GoogleMap";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
    title: "Dental Specials Success - Sethi Virdi DDS",
    description: "",
}

const page = () => {
    return (
        <div className="w-full bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1290px] py-10 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    <div className="text-black">
                        <h1 className="text-[32px] text-[#0d0d0d] font-semibold leading-[1.06]">
                            Friendly staff, excellent service, beautiful smiles.
                            Welcoming environment.
                        </h1>

                        <p className="mt-7 text-[18px] leading-[1.35] max-w-[920px]">
                            Dr. Megna Sethi and Dr. Amandeep Virdi are always welcoming new patients, and we would love to have you as part of our dental family. Please explore our website to learn more about us. You can find information about our staff, our office, and the procedures and services that we offer. If you have any questions, please call us. We love hearing from our patients and anyone who may be interested in becoming one. Healthy teeth and gums for life!
                            <br />
                            <br />
                            To serve our patients with care and commitment, the same care and commitment we would desire for ourselves.
                            <br />
                            <br />
                            To treat every patient as if they were our own family.
                            <br />
                            <br />
                            To do our best to perform quality dental care, keeping the well-being of the patient first and utmost in mind.
                            <br />
                            <br />
                            To do unto others as we would have them do unto us.
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

            <div className="mt-12">
                {/* <TestimonialsSection /> */}
                <AppointmentSection />
                <GoogleMap />
            </div>
        </div>
    );
};

export default page;