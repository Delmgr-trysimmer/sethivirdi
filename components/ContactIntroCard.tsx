import React from 'react'

type ContactIntroCardProps = {
    title: string
    description: string
}

const ContactIntroCard = ({ title, description }: ContactIntroCardProps) => {
    return (
        <div className=" bg-[#e9f7ff] px-6 py-8 text-center md:px-10 md:py-14">
            <div className='max-w-5xl mx-auto'>
                <h2 className="mb-4 text-[28px] font-semibold tracking-tight text-[#0d0d0d] md:text-[32px]">
                {title}
            </h2>
                <p className="text-[18px] leading-[1.5em] text-black">
                    {description}
                </p></div>
        </div>
    )
}

export default ContactIntroCard
