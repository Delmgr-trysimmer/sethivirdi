import AppointmentSection from '@/components/AppointmentSection'
import GoogleMap from '@/components/GoogleMap'
import PageBanner from '@/components/PageBanner'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata = {
    title: "Meet The Doctors | Sethi Virdi DDS",
    description: "Meet the doctors at Sethi Virdi DDS. Trusted experts dedicated to your dental well-being. Experience personalized care for a healthier, happier smile!",
}

const page = () => {
    return (
        <div className="bg-white">
            <PageBanner title="Meet The Doctors" breadcrumbItems={["Home", "Meet The Doctors"]} />

            <section className="w-full bg-[#dff2fd] py-12 ">
                <div className="container mx-auto max-w-[1290px] px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto rounded-[16px] px-6 py-10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] md:px-12 md:py-12 lg:px-20 lg:py-14">
                        <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-14">
                            <div className="mx-auto w-full max-w-[320px]">
                                <div className="relative overflow-hidden rounded-[14px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
                                    <Image
                                        src="/images/Sethivirdi-doctor-image-scaled.jpg"
                                        alt="Dr. Amandeep Virdi"
                                        width={640}
                                        height={900}
                                        className="h-auto w-full object-cover"
                                    />
                                </div>
                            </div>

                            <div>
                                <h2 className="text-center text-[28px] md:text-[32px] font-semibold leading-tight text-[#0d0d0d] lg:text-left">
                                    Dr. Amandeep Virdi
                                </h2>

                                <div className="mt-8 space-y-10 text-[18px] leading-[1.7] text-black">
                                    <p>
                                        Dr. Virdi graduated with a DDS from the prestigious New York University College of Dentistry. He practices general dentistry and strives to ensure his patients receive the most comprehensive care. Dr. Virdi is extremely passionate about his work and has received advanced training in all aspects of general and pediatric dentistry. He is vastly experienced in performing oral surgery and root canals. Dr. Virdi has spent numerous hours in continuing education, allowing him to keep current with the modern technology and advances in dentistry. He is also a certified platinum provider of INVISALIGN and an active member of the Santa Clara Dental Society, American Dental Association, and California Dental Association.
                                    </p>

                                    <p>
                                        Dr. Virdi is married to his beautiful wife, Megna, and is a proud father to his two sons, Armaan and Veer. In his spare time, Dr. Virdi enjoys watching sports, traveling, and spending time with his family.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 ">
                <div className="container mx-auto max-w-[1290px] px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto rounded-[16px] px-6 py-10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] md:px-12 md:py-12 lg:px-20 lg:py-14">
                        <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-14">
                            <div className="mx-auto w-full max-w-[320px]">
                                <div className="relative overflow-hidden rounded-[14px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
                                    <Image
                                        src="/images/Sethivirdi-doctor-image-scaled.jpg"
                                        alt="Dr. Amandeep Virdi"
                                        width={640}
                                        height={900}
                                        className="h-auto w-full object-cover"
                                    />
                                </div>
                            </div>

                            <div>
                                <h2 className="text-center text-[28px] md:text-[32px] font-semibold leading-tight text-[#0d0d0d] lg:text-left">
                                    Dr. Megna Sethi
                                </h2>

                                <div className="mt-8 space-y-10 text-[18px] leading-[1.7] text-black">
                                    <p>
                                        Dr. Sethi earned her Doctorate of Dental Surgery degree from the prestigious NYU College of Dentistry. She displayed tremendous dedication to the university&apos;s dental program and her peers, serving as the social chair and vice president of the Advanced Placement Student Dental Association at NYU. She was also a member of the yearbook committee during her years there.
                                    </p>

                                    <p>
                                        Dr. Sethi&apos;s top priority as a dental professional is to ensure that she provides a very pleasant dental experience for her patients while in her care. She is extremely compassionate to her patients&apos; needs and provides quality dentistry for all her patients. She constantly seeks out new techniques, technology, and materials in the dental industry and incorporates them into the practice to provide the best services to her patients. She is currently an active member of the California Dental Association (CDA) and the American Dental Association (ADA).
                                    </p>

                                    <p>Dr. Sethi was born in California, and after studying abroad and on the East Coast, she claims she is a true Cali girl at heart. While pursuing her BDS degree in India, she met her husband, Dr. Aman Virdi, a fellow dentist. She enjoys practicing alongside her husband while raising their children, Armaan and Veer, together as a tandem. In her free time, she enjoys spending time with her family, traveling, dancing, and shopping.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <AppointmentSection />
            <GoogleMap />
        </div>
    )
}

export default page
