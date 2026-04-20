"use client";

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Link from 'next/link';

const slides = [
    {
        id: 1,
        bgImage: '/images/Service.jpg',
        title: (<>We Do Same-Day Crown <br /> Your Smile, Our Priority!</>),
        description: 'Talk to your dentist for tips to keep your teeth cavity-free.',
    },
    {
        id: 2,
        bgImage: '/images/service-2.webp',
        title: (<>Precision Dentistry for <br /> Lasting Smiles</>),
        description: 'Annual checkups keep teeth happy and healthy. Schedule yours today!',
    },
    {
        id: 3,
        bgImage: '/images/service-3.webp',
        title: (<>Smile Confidently with <br /> Our Dental Expertise</>),
        description: 'Make a brilliant first impression!',
    },
    
];

const Hero = () => {
    const swiperRef = useRef<SwiperType>(null);

    return (
        <section className="relative w-full h-[calc(100vh-125px)] max-h-[500px] md:max-h-[600px] lg:max-h-[756px] ">
            <Swiper
                modules={[Navigation, Autoplay]}

                speed={1000}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="w-full h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative w-full h-full overflow-hidden">
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={slide.bgImage}
                                alt="Background"
                                fill
                                className="object-cover object-center"
                                priority={slide.id === 1}
                            />
                            <div className="absolute inset-0 bg-[#213666] opacity-[0.67]"></div>
                        </div>

                        <div className="relative z-10 w-full h-full flex items-center">
                            <div className="container mx-auto px-4  lg:px-8 text-base md:text-lg">
                                <div className="max-w-3xl px-6 md:pl-12 lg:pl-40 text-white text-base md:text-lg"  >
                                    <h1 className="text-[24px] md:text-[41px] font-extrabold leading-tight mb-4">
                                        {slide.title}
                                    </h1>
                                    <p className=" mb-8">
                                        {slide.description}
                                    </p>
                                    <Link href={"/book-appointment"} className="bg-[#213666] hover:translate-y-[-10px] text-white font-semibold py-3 px-8 rounded-[30px] transition-all duration-300 underline cursor-pointer">
                                        Make an Appointment
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons matching the design */}
            <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute top-1/2 -translate-y-1/2 left-0 md:left-8 z-20 w-10 h-10 md:bg-[#213666]  text-white rounded-full flex items-center justify-center transition-all  disabled:opacity-50"
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} />
            </button>

            <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute top-1/2 -translate-y-1/2 right-0 md:right-8 z-20 w-10 h-10 md:bg-[#213666]  text-white rounded-full flex items-center justify-center transition-all  disabled:opacity-50"
                aria-label="Next slide"
            >
                <ChevronRight size={24} />
            </button>
        </section>
    );
};

export default Hero;
