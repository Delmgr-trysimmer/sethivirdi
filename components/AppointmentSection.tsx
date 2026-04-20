import React from 'react'
import OpeningHours from './OpeningHours'
import ContactForm from './ContactForm'

const AppointmentSection = () => {
    return (
        <div className='w-full px-4 sm:px-6 lg:px-8 py-6 md:py-20'>
            <div className='container mx-auto max-w-[1290px] grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-28 items-start'>
                <OpeningHours />
                <ContactForm formType="appointment" />
            </div>
        </div>
    )
}

export default AppointmentSection