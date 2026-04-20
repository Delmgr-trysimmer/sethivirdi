import AppointmentSection from '@/components/AppointmentSection'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Meet Your Friendly Dental Team – Sethi Virdi DDS",
    description: "Meet the Dental Team in Milpitas, CA, at Sethi Virdi DDS. Our trusted team and experienced dentists provide exceptional dentistry services.",
    alternates: {
        canonical: "/meet-the-staff/",
    },
}

const page = () => {
    return (
        <div>

            <AppointmentSection />
        </div>
    )
}

export default page