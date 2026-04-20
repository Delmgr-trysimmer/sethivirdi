import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { formatServiceSlug, services } from '@/lib/services'

const featuredServices = [
    {
        title: 'General Dentistry',
        description:
            'Routine exams, professional cleanings, and preventive care to help keep your smile healthy and strong.',
        image: '/images/Teeth-Cleanings.jpg',
        slug: 'dental-services',
    },
    {
        title: 'Dental Implants',
        description:
            'Restore missing teeth with durable, natural-looking implant solutions designed for comfort and confidence.',
        image: '/images/Dental-Implants-1.jpg',
        slug: 'dental-implants',
    },
    {
        title: 'Teeth Whitening',
        description:
            'Brighten your smile with cosmetic whitening treatments that deliver a cleaner, more refreshed appearance.',
        image: '/images/Teeth-Whitening.jpg',
        slug: 'teeth-whitening',
        },
]


type OurServicesProps = {
    showAll?: boolean;
};

const OurServices = ({ showAll = false }: OurServicesProps) => {
    const serviceItems = showAll
        ? services.map((service) => ({
            title: formatServiceSlug(service.slug),
            description: service.meta.description,
            image: service.coverImage,
            slug: service.slug,
        }))
        : featuredServices;

    return (
        <section className="w-full bg-[#e9f7ff] pb-10 mt-12">
            <div className="px-4 sm:px-6  text-center py-12">
                <h2 className="text-[32px] font-semibold text-[#213666] leading-[1.2em]">
                    Our Services:
                </h2>
                <p className="text-[16px] md:text-[18px] text-black mt-4 max-w-6xl mx-auto">We offer a wide range of services to address your unique needs and to give you a beautiful, healthy smile. Here are some of the services we offer</p>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1290px] mt-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {serviceItems.map((service) => (
                        <Link
                            href={`/${service.slug}`}
                            key={service.title}
                            className="overflow-hidden rounded-2xl border border-[#d9ecf7] bg-white shadow-[0_10px_30px_rgba(18,145,218,0.08)] transition-transform duration-300 hover:-translate-y-1"
                        >
                            <div className="relative h-56 w-full">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-[24px] font-semibold text-[#213666]">
                                    {service.title}
                                </h3>
                                <p className="mt-3 text-[16px] leading-[1.6] text-[#4a4a4a]">
                                    {service.description}
                                </p>
                                <button className="mt-5 inline-flex rounded-full bg-[#1291da] px-5 py-3 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-[#0f7dbd]">
                                    Learn More
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurServices