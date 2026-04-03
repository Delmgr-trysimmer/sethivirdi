import React from 'react'
import { FaRegClock } from "react-icons/fa";

const openingHours = [
    { day: "Monday - Thursday", time: "08.00 AM - 20.00 PM" },
    { day: "Friday", time: "08.00 AM - 17.00 PM" },
    { day: "Saturday", time: "09.00 AM - 17.00 PM" },
    { day: "Sunday", time: "09.00 AM - 18.00 PM" },
];


const OpeningHours = () => {
    return (
        <div><div className="text-[#111111]">
            <h5 className="text-[18px] text-[#213666]">Book Now</h5>
            <h2 className="mt-2 text-[32px] text-[#0d0d0d] font-semibold leading-tight">
                Make An Appointment
            </h2>

            <p className="mt-6 text-[18px] text-[#888888] leading-[1.45]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
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