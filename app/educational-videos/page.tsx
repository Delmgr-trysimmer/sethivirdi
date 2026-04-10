import AppointmentSection from '@/components/AppointmentSection'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Educational Videos - Sethi Virdi DDS",
    description: ""
}

const page = () => {
    return (
        <div>
            <AppointmentSection />
        </div>
    )
}

export default page