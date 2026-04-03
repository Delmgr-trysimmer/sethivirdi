import React from "react";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";

const WelcomeSection = () => {
  return (
    <section className="w-full bg-white py-10 md:py-16 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1290px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14">
          {/* Left Content */}
          <div className="w-full flex flex-col items-start text-[#0d0d0d]">
            <h1 className="text-[28px] md:text-[32px] font-semibold leading-[1.2] mb-6 tracking-tight">
              Your Smile Our Priority Trusted
              <br /> Dentist Near Me in Milpitas
            </h1>

            <div className="mb-8">
              <h3 className="text-[16px] md:text-[18px] font-bold mb-1">
                Exceptional Dental Care for Families Across Milpitas
              </h3>
              <p className="text-[16px] md:text-[18px]">
                Same day-Appointments Available For Your Convenience
              </p>
            </div>

            <div className="flex justify-start w-full md:w-auto md:ml-16 mb-10">
              <button className="bg-[#213666] hover:bg-[#152e53] text-[15px] text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-md">
                <FaCalendarAlt size={16} className="mb-[2px]" />
                <span className="underline decoration-1 underline-offset-2">
                  Schedule an Appointment Today
                </span>
              </button>
            </div>

            <div className="text-[15px] md:text-[16px] leading-relaxed text-[#0d0d0d] space-y-6 max-w-[95%]">
              <p>
                Dr. Megna Sethi and Dr. Amandeep Virdi extend a warm welcome to
                new patients, and we would be delighted to include you in our
                dental family. We invite you to explore our website to discover
                more about our practice. Here, you can find details about our
                dedicated staff, our well-equipped office, as well as
                information about the comprehensive procedures and services we
                provide. If you have any questions, please call us. We take
                immense pleasure in connecting with our patients and anyone
                interested in joining our dental community.
              </p>
              <p>
                Our ultimate goal is to ensure you achieve and maintain healthy
                teeth and gums for life!
              </p>
            </div>
          </div>

          <div className="relative w-full max-w-[480px] h-[500px]  shrink-0 overflow-hidden">
              <Image
                src="/images/megna-319-scaled-1.jpg"
                alt="Dr. Megna Sethi and Dr. Amandeep Virdi"
                width={300} 
                height={500}
                className="rounded-[10px] block m-auto"
              />
            </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
