import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const CtaSection = () => {
  return (
    <section className="w-full bg-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1290px]">
        <div className="rounded-[10px] bg-[#e9f7ff] px-6 py-7 md:px-10 md:py-9 text-center">
          <p className="text-[18px] font-bold text-black leading-[1.5em]">
            Contact us now to schedule an appointment or for any dental
            emergencies. We look forward to serving your dental needs!
          </p>
          <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#213666] px-7 py-3 text-white text-[18px] font-medium hover:bg-[#1a2d55] transition-colors">
            <FaCalendarAlt size={18} />
            <span>Book Appointment</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
