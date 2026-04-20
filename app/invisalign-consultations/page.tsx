import AppointmentSection from '@/components/AppointmentSection'
import GoogleMap from '@/components/GoogleMap'
import PageBanner from '@/components/PageBanner'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
    title: "Educational Videos - Sethi Virdi DDS",
    description: "",
    alternates: {
        canonical: "/invisalign-consultations/",
    },
}

const page = () => {
    return (
        <div>
            <PageBanner title='Invisalign Consultations' />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1290px] mt-16 mb-16 lg:mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                    <div className="relative pt-10 pl-8 md:pl-12">
                        <div className="absolute left-[-20px] top-28 h-[420px] md:h-[720px] w-[90%] bg-[#e5f6f7] rounded-2xl" />
                        <div className="relative h-[420px] md:h-[720px] w-full rounded-xl overflow-hidden shadow-sm">
                            <Image
                                src="/images/professional-female-dentist-at-work-9SDJLQ4-e1616852692593.jpg"
                                alt="Dentist examining a patient in Milpitas"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="mt-20 lg:mt-0 text-[#888888] text-[18px] flex flex-col gap-4">
                        <p className="text-[18px] text-[#1291da]">Best Of The Best</p>
                        <h2 className="text-[32px] text-black font-semibold leading-[1.2em]">
                            High End Equipments
                        </h2>
                        <p className='leading-[1.5em]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className='leading-[1.5em]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                        <Link href="#" className="text-white bg-[#1291da] px-8 py-4 rounded-full text-base mt-6 lg:mt-12 w-fit">Learn More</Link>

                    </div>
                </div>
            </div>

            <section className="w-full bg-[#e8f4fd] py-12">
                <div className="mx-auto flex max-w-[900px] flex-col items-center px-4 text-center sm:px-6 lg:px-8">
                    <p className="text-[18px] font-medium text-[#213666]">
                        Testimonial
                    </p>
                    <h2 className="mt-4 text-[32px] font-semibold leading-[1.15] text-[#111111]">
                        What Customer Says
                    </h2>
                    <p className="mt-4 max-w-[760px] text-[18px] leading-[1.7] text-[#111111] sm:text-[19px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua
                    </p>
                </div>
            </section>

            <AppointmentSection />
            <GoogleMap />
        </div>
    )
}

export default page
