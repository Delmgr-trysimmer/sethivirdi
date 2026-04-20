import AppointmentSection from '@/components/AppointmentSection'
import ContactIntroCard from '@/components/ContactIntroCard'
import GoogleMap from '@/components/GoogleMap'
import PageBanner from '@/components/PageBanner'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Appointment - Sethi Virdi DDS',
    description: 'Book your dental appointment with Sethi Virdi DDS for expert care, flexible scheduling, and a comfortable experience for all your oral health needs.',
    alternates: {
        canonical: "/appointment/",
    },
}

const page = () => {
    return (
        <div>
            <PageBanner title="Appointment" breadcrumbItems={["Home", "Appointment"]} />
            <ContactIntroCard
                title="Schedule your dental appointment at Sethi Virdi DDS."
                description="We are delighted that you have chosen Sethi Virdi DDS for your dental care. Scheduling your appointment with us is quick and easy. We look forward to providing you with exceptional dental services in a warm and welcoming environment."
            />

            <AppointmentSection />
            <GoogleMap />
        </div>
    )
}

export default page
