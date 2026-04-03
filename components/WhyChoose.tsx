import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WhyChoose = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1290px] mt-6 md:mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                <div className="relative pt-10 pl-8 md:pl-12">
                    <div className="absolute left-[-20px] top-28 h-[420px] md:h-[720px] w-[90%] bg-[#e5f6f7] rounded-2xl" />
                    <div className="relative h-[420px] md:h-[720px] w-full rounded-xl overflow-hidden shadow-sm">
                        <Image
                            src="/images/Your-Trusted-Dentist-in-Milpitas.jpg"
                            alt="Dentist examining a patient in Milpitas"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="text-[#0d0d0d] mt-20 lg:mt-0">
                    <h2 className="text-[32px]  font-semibold text-[#213666] leading-[1.2em]">
                        Welcome to Sethi Virdi DDS
                        Your Dentist in Milpitas, CA
                    </h2>

                    <div className="mt-6 space-y-5 text-[18px] leading-[1.55]">
                        <p>
                            At <b>Sethi Virdi DDS</b>, <Link href={'/meet-the-doctors'} className="text-[#1291da] font-semibold">Dr. Megna Sethi</Link> and <Link href={'/meet-the-doctors'} className="text-[#1291da] font-semibold">Dr. Amandeep Virdi</Link> proudly provide modern, compassionate dental care for families throughout Milpitas, CA, and nearby San Jose - perfect for anyone searching for a dentist near me.
                        </p>

                        <p>
                            As your trusted <Link href={'/best-dentist-milpitas-ca/'} className="text-[#1291da] ">dentist in Milpitas</Link>, we combine advanced dental technology with personalized patient care recommended by the American Dental Association (ADA). Whether you&apos;re looking for routine checkups or advanced cosmetic solutions, our goal is to make your dental experience comfortable, transparent, and stress-free.
                        </p>

                        <p>
                            We understand that visiting a dentist can feel intimidating that’s why we’ve created a welcoming, gentle, and family-friendly environment.
                        </p>
                    </div>

                    <h3 className="mt-7 text-[20px] font-bold text-[#0d0d0d] leading-tight">
                        Why Choose a Local Dentist in Milpitas?
                    </h3>

                    <p className="mt-5 text-[18px] leading-[1.55]">
                        When people search for a dentist near me in Milpitas, our clinic stands out for convenient location, quality care, and trusted local service. Our Milpitas dental office is easily accessible from all major areas, offering same day visits and affordable payment options.
                    </p>
                    <p className="mt-5 text-[18px] leading-[1.55]">
                        We’re proud to be <b>serving patients in Milpitas, CA</b>, and nearby communities like <b>San Jose, Fremont, and Santa Clara</b>
                    </p>
                    <h3 className="mt-7 text-[20px] font-bold text-[#0d0d0d] leading-tight">Schedule an Appointment With Our Milpitas Dentists  </h3>
                    <p className="mt-5 text-[18px] leading-[1.55]">Schedule an Appointment With Our Milpitas Dentists If you’re searching for a dentist near me in Milpitas, look no further than Sethi Virdi DDS. From preventive care to cosmetic and <Link href={'/dental-implants/'} className="text-[#1291da] ">implant dentistry</Link>, our dedicated dental is her is here to help you smile with confidence.</p>
                    <p className="mt-5 text-[18px] leading-[1.55]"> 📞 Call us today a <a href="tel:+14082631255" className="text-[#1291da]">(408) 263-1255</a> or book your appointment online to get started.

                    </p>
                </div>

            </div>
        </div>
    )
}

export default WhyChoose
