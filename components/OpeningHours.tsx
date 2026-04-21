import React from 'react'
import { FaRegClock } from "react-icons/fa";

const openingHours = [
    { day: "Monday", time: "9.00 AM - 5.00 PM" },
    { day: "Tuesday", time: "9.00 AM - 6.00 PM" },
    { day: "Wednesday", time: "9.00 AM - 6.00 PM" },
    { day: "Thursday", time: "8.00 AM - 5.00 PM" },
    { day: "Friday", time: "9.00 AM - 2.00 PM" },
    { day: "Saturday", time: "8.00 AM - 2.00 PM" },
    { day: "Sunday", time: "Closed" },
];


const OpeningHours = () => {
    return (
        <div><div className="text-[#111111]">
            {/* <h5 className="text-[18px] text-[#213666]">Book Now</h5> */}
            <h2 className="mt-2 text-[32px] text-[#0d0d0d] font-semibold leading-tight">
                Make An Appointment
            </h2>

            <p className="mt-6 text-[18px] text-[#888888] leading-[1.45]">
                Contact Sethi Virdi DDS today to experience top-quality dental care in a welcoming and caring environment. Your smile and oral health are our top priorities, and we can’t wait to meet you!
            </p>

            <h3 className="mt-7 text-[18px] font-semibold">
                Opening Hours
            </h3>

            <ul className="mt-5 divide-y divide-[#dddddd] max-w-[680px]">
                {openingHours.map((item) => (
                    <li
                        key={item.day}
                        className="py-4 flex items-center justify-between gap-4 text-[18px] leading-tight"
                    >
                        <span>{item.day}</span>
                        <span className="flex items-center gap-3 whitespace-nowrap">
                            <FaRegClock size={20} className="text-[#3f3f3f]" />
                            {item.time}
                        </span>
                    </li>
                ))}
            </ul>
        </div></div>
    )
}

export default OpeningHours