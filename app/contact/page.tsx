import ContactForm from '@/components/ContactForm'
import ContactIntroCard from '@/components/ContactIntroCard'
import GoogleMap from '@/components/GoogleMap'
import PageBanner from '@/components/PageBanner'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export const metadata: Metadata = {
    title: "Contact Us for Dental Care Milpitas, CA, Sethi Virdi DDS",
    description: "Contact us for premier dental care in Milpitas, CA. Trust Sethi Virdi DDS for comprehensive and reliable dental services. Get in touch today!"
}

const page = () => {
    return (
        <div>
            <PageBanner title="Contact" breadcrumbItems={["Home", "Contact"]} />
            <ContactIntroCard
                title="Reach out to Sethi Virdi DDS for top-quality dental care."
                description="Thank you for considering Sethi Virdi DDS for your dental needs. We are delighted to provide exceptional dental care and a warm, welcoming environment for our patients in Milpitas and the surrounding areas. If you have any questions, need more information, or wish to schedule an appointment, we are here to assist you."
            />


            <div className='w-full px-4 sm:px-6 lg:px-8 py-6 md:py-20'>
                <div className='container mx-auto max-w-[1290px] grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-28 items-center'>
                    <div>
                        <h2 className='mb-4 text-[28px] font-semibold tracking-tight text-[#0d0d0d] md:text-[32px]'>Get In Touch</h2>
                        <p className='text-[18px] leading-[1.5em] text-black'>Contact Sethi Virdi DDS today to experience top-quality dental care in a welcoming and caring environment. Your smile and oral health are our top priorities, and we can’t wait to meet you!</p>
                    </div>
                    <ContactForm />
                </div>
            </div>

            <div className="w-full px-4 py-12 sm:px-6 md:py-20 lg:px-8">
                <div className="container mx-auto grid max-w-[1290px] grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24 items-center">
                    <div className="text-black">
                        <div>
                            <h2 className="text-[28px] font-semibold tracking-tight text-[#0d0d0d] md:text-[32px]">
                                How to Find Us:
                            </h2>
                            <p className="mt-4 text-[18px] leading-[1.5em]">
                                Our dental practice is conveniently located in Milpitas, making it easily accessible for patients from nearby communities. Use the map on this page to find our exact location and get directions to our office. If you need further assistance, feel free to contact our friendly staff, and they will be happy to guide you.
                            </p>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-[28px] font-semibold tracking-tight text-[#0d0d0d] md:text-[32px]">
                                Schedule an Appointment:
                            </h2>
                            <p className="mt-4 text-[18px] leading-[1.5em]">
                                We look forward to meeting you and providing you with top-quality dental care tailored to your unique needs. To schedule an appointment with one of our experienced dentists, give us a call at{" "}
                                <Link href="tel:4082631255" className="text-[#1291da] transition-colors hover:text-[#0f7ebf]">
                                    (408) 263-1255
                                </Link>
                                . Our staff will be glad to assist you in finding a suitable date and time for your visit.
                            </p>
                        </div>
                    </div>

                    <div className="mx-auto w-full max-w-[690px]">
                        <div className="overflow-hidden bg-[#f3f7fb] shadow-sm">
                            <Image
                                src="/images/Contact.jpg"
                                alt="Dental team with patient smiling in the clinic"
                                width={920}
                                height={640}
                                className="h-auto w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <GoogleMap />

        </div>
    )
}

export default page
