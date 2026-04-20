import AppointmentSection from '@/components/AppointmentSection'
import ContactIntroCard from '@/components/ContactIntroCard'
import GoogleMap from '@/components/GoogleMap'
import PageBanner from '@/components/PageBanner'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Book Appointment for Dental Care Milpitas, CA, Sethi Virdi DDS",
    description: "Book Appointment for premier dental care in Milpitas, CA. Trust Sethi Virdi DDS for comprehensive and reliable dental services. Get in touch today!",
    alternates: {
        canonical: "/book-appointment/",
    },
}

const page = () => {
    return (
        <div>
            <PageBanner title="Book Appointment" breadcrumbItems={["Home", "Book Appointment"]} />
            <ContactIntroCard
                title="Reach out to Sethi Virdi DDS for top-quality dental care."
                description="Thank you for considering Sethi Virdi DDS for your dental needs. We are delighted to provide exceptional dental care and a warm, welcoming environment for our patients in Milpitas and the surrounding areas. If you have any questions, need more information, or wish to schedule an appointment, we are here to assist you."
            />

            <AppointmentSection />
            <GoogleMap />
        </div>
    )
}

export default page
