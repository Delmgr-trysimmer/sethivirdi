import React from 'react'

const GoogleMap = () => {
    return (
        <div className='max-w-[1536px] mx-auto py-10'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6336.43613041946!2d-121.898229!3d37.431953!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fced591636377%3A0x4a1abfba28106a86!2s452%20E%20Calaveras%20Blvd%2C%20Milpitas%2C%20CA%2095035%2C%20USA!5e0!3m2!1sen!2sin!4v1775033734721!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className='w-full max-h-[320px] md:max-h-[500px]'
            />
        </div>
    )
}

export default GoogleMap