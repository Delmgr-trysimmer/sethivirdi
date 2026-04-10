import AppointmentSection from '@/components/AppointmentSection'
import GoogleMap from '@/components/GoogleMap'
import OurServices from '@/components/OurServices'
import PageBanner from '@/components/PageBanner'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata = {
    title: "Sethi Virdi DDS | Dental Services In Milpitas, CA",
    description: "Sethi Virdi DDS offers top-notch dental services in Milpitas, CA. Experience excellence in oral care with our skilled team. Your trusted smile partner."
}

const page = () => {
    return (
        <div>
            <PageBanner title='Dental Services' />

            <section className="w-full bg-white py-16">
                <div className="container mx-auto grid max-w-[1290px] grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
                    <div className="max-w-[720px]">
                        <h2 className="text-[28px] md:text-[32px] font-semibold leading-[1.1] text-black">
                            Comprehensive Dental Services at Sethi Virdi DDS
                        </h2>

                        <p className="mt-8 text-base md:text-[18px] leading-[1.75]">
                            At Sethi Virdi DDS, we are committed to ensuring your oral health remains our top priority. Regular dental visits are vital to detect and address oral health issues promptly, from tooth decay to oral cancer. Our dedicated team of dental professionals is here to ensure your teeth stay healthy, function well, and look their best. We offer a wide range of dental services to cater to all your routine and specialized dental needs under one roof.
                        </p>


                    </div>

                    <div className="relative min-h-[280px] overflow-hidden rounded-sm md:min-h-[380px]">
                        <Image
                            src="/images/dental-services.webp"
                            alt="Patient smiling during a dental consultation"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </section>


            <OurServices />

            <div className='text-base md:text-lg leading-[1.5em] space-y-4 max-w-[1290px] mx-auto pt-20 pb-10'>
                <p className='font-bold'>Emergency Dental Treatment:</p>
                <p>We understand that dental emergencies can occur at any time. Our team is ready to provide prompt and compassionate emergency dental treatment to alleviate your pain and address urgent dental issues.</p>
                <p className='font-bold'>
                    Contact Us Today:
                </p>
                <p>Experience comprehensive and exceptional dental care at Sethi Virdi DDS. Contact us at (408) 263-1255 to schedule your appointment and let our skilled team cater to all your dental needs. From routine dental visits to specialized treatments, we are here to help you achieve and maintain a healthy, beautiful smile.</p>
            </div>
            <AppointmentSection />
            <GoogleMap />
        </div>
    )
}

export default page
