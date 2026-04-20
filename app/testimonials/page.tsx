import AppointmentSection from '@/components/AppointmentSection'
import GoogleMap from '@/components/GoogleMap'
import PageBanner from '@/components/PageBanner'
import TestimonialsSection from '@/components/TestimonialsSection'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'

export const metadata: Metadata = {
    title: "Dental patient testimonials In Milpitas, CA Sethi Virdi DDS",
    description: "Explore Sethi Virdi DDS patient testimonials in Milpitas, CA. Real stories of satisfied smiles. Choose trusted dental care, Sethi Virdi DDS.",
    alternates: {
        canonical: "/testimonials/",
    },
}

const page = () => {
    return (
        <div>
            <PageBanner title="Testimonials" breadcrumbItems={["Home", "Testimonials"]} />
            <TestimonialsSection />

            <div className="rounded-[10px] bg-[#e9f7ff] px-6 py-7 md:px-10 md:py-9 text-center  max-w-[1290px] mx-auto mt-10">
                <h2 className='text-[28px] md:text-[32px] font-semibold mb-4 tracking-tight text-[#0d0d0d]'>Contact Us Today</h2>
                <p className="text-[18px] text-black leading-[1.5em]">
                    We are honored to receive such positive feedback from our valued patients. At Sethi Virdi DDS, we are committed to providing compassionate, top-quality dental care in a warm and welcoming environment. If you would like to experience the exceptional care and service that our patients have described in these testimonials, schedule your appointment today by calling (408) 263-1255. Our dedicated dental team looks forward to welcoming you to our practice and helping you achieve a healthy, beautiful smile.
                </p>
                <Link href={"/book-appointment"} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#213666] px-7 py-3 text-white text-[18px] font-medium hover:bg-[#1a2d55] transition-colors">
                    <FaCalendarAlt size={18} />
                    <span>Book Appointment</span>
                </Link>
            </div>

            <AppointmentSection />
            <GoogleMap />
        </div>
    )
}

export default page