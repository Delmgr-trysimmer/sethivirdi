"use client";

import React from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import GoogleMap from "@/components/GoogleMap";
import AppointmentSection from "@/components/AppointmentSection";
import PageBanner from "@/components/PageBanner";



const page = () => {
    const style = "text-[18px] text-black leading-[1.5em]";
    const galleryImages = [
        "/images/megna-319-scaled-1.jpg",
        "/images/professional-female-dentist-at-work-9SDJLQ4-e1616852692593.jpg",
        "/images/Service.jpg",
        "/images/megna-319-scaled-1.jpg",
        "/images/professional-female-dentist-at-work-9SDJLQ4-e1616852692593.jpg",
    ];

    return (
        <section className="w-full bg-white">
            <PageBanner title="Our Practice" breadcrumbItems={["Home", "Our Practice"]} />
            <div className="rounded-[10px] bg-[#e9f7ff] px-6 py-16 text-center">
                <p className="text-[18px] font-bold text-black leading-[1.5em]">
                    We asked our staff what made us different from other dental offices, and this is what they had to say.
                </p>
            </div>

            <div className="container mx-auto px-4 sm:px-6 py-10 md:py-16 max-w-[1290px] space-y-6">
                <p className={style}><b>Our Mission Statement:</b> To serve our patients with care and commitment, the same care and commitment we would desire for ourselves. To treat every patient as if they were our own family. To do our best to perform quality dental care, keeping the well-being of the patient first and utmost in mind. To do unto others as we would have them do unto us.</p>

                <p className={style}><b>High Standards:</b> A standard of excellence in personalized dental care enables us to provide the quality dental services our patients deserve. We provide comprehensive treatment planning and use restorative and cosmetic dentistry to achieve your optimal dental health. Should a dental emergency occur, we make every effort to see and care for you as soon as possible.</p>

                <p className={style}><b>Education & Prevention:</b> As a practice, we are true believers that preventative care and education are the keys to optimal dental health. We strive to provide &quot;dental health care&quot; vs. &quot;disease care&quot;. That’s why we focus on thorough exams – checking the overall health of your teeth and gums, performing oral cancer exams, and taking x-rays when necessary. We also know that routine cleanings, flossing, sealants, and fluoride are all helpful in preventing dental disease. Not only are we focused on the beauty of your smile, we’re also concerned about your health. A review of your medical history can help us stay informed of your overall health, any new medications, and any illnesses that may impact your dental health.</p>

                <p className={style}><b>Uncompromising Safety:</b> Infection control in our office is also very important to us. To protect our patients and ourselves, we strictly maintain sterilization and cross-contamination processes using standards recommended by the American Dental Association (ADA), the Occupational Safety and Health Administration (OSHA), and the Center for Disease Control (CDC).</p>

                <p className={style}><b>Training & Expertise:</b> As your dental health professionals, we want you to be confident knowing that we are a team of highly trained and skilled clinicians. We pride ourselves in providing the care you need to keep your smile healthy. To give you the best possible service and results, we are committed to continuing education and learning. We attend dental lectures, meetings, and dental conventions to keep up with new techniques, the latest products, and the newest equipment that a modern dental office can utilize to provide state-of-the-art dental care. Also, being members of various professional dental associations helps us to stay abreast of the changes and recommendations for our profession.</p>

                <p className={style}><b>A Positive Experience:</b> Building a foundation of trust by treating our patients as special individuals is vital to our success. We understand how uneasy some patients may feel about their dental visits and how we can make a difference in providing a relaxing and positive experience. Our entire team is dedicated to providing you with excellent, personalized care and service to make your visits as comfortable and pleasant as possible. We thank you for allowing us to take care of your dental needs and look forward to serving you. Join our family!</p>
            </div>


            <div className="relative mt-10 bg-[#dbeaf3] py-6">
                <div className="container mx-auto px-8 sm:px-10 lg:px-12 max-w-[1290px]">
                    <button
                        className="our-practice-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 text-[#24384f] hover:text-[#1291da] transition-colors"
                        aria-label="Previous slide"
                    >
                        <FaChevronLeft size={18} />
                    </button>
                    <button
                        className="our-practice-next absolute right-4 top-1/2 -translate-y-1/2 z-10 text-[#24384f] hover:text-[#1291da] transition-colors"
                        aria-label="Next slide"
                    >
                        <FaChevronRight size={18} />
                    </button>

                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation={{
                            prevEl: ".our-practice-prev",
                            nextEl: ".our-practice-next",
                        }}
                        pagination={{ clickable: true }}
                        spaceBetween={18}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="our-practice-swiper"
                    >
                        {galleryImages.map((src, index) => (
                            <SwiperSlide key={`${src}-${index}`} className="py-10">
                                <div className="relative h-[250px] w-full bg-white">
                                    <Image
                                        src={src}
                                        alt={`Our practice gallery ${index + 1}`}
                                        fill
                                        className="object-contain p-2"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <AppointmentSection />
            <GoogleMap />
        </section>
    );
};

export default page;