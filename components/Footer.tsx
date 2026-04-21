import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaFacebookF,
  FaPlay,
  FaYelp,
  FaChevronRight,
  FaGoogle,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#dfeef6] pt-14 pb-8 text-[#0d0d0d] mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1290px]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-8">
          <div>
            <Link href="/" className="inline-flex">
              <Image
                src="/images/new-logo.webp"
                alt="Sethi Virdi DDS"
                width={130}
                height={60}
                className="object-contain"
              />
            </Link>

            <p className="mt-3 text-[18px] leading-[1.3] max-w-[410px]">
              Our ultimate goal is to ensure you achieve and maintain healthy
              teeth and gums for life!
            </p>

            <div className="mt-6 space-y-4 text-[18px]">
              <p className="flex items-start gap-3 leading-[1.35]">
                <FaMapMarkerAlt className="mt-2 shrink-0 text-[#213666]" />
                <span>452 E Calaveras Blvd,Milpitas,CA,95035,US</span>
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope className="shrink-0 text-[#213666]" />
                <a href="mailto:sethivirdidds@gmail.com">sethivirdidds@gmail.com</a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-[18px] font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-[18px]">
              {[
                {
                  label: "Home",
                  href: "/",
                },
                {
                  label: "Meet the doctors",
                  href: "/meet-the-doctors",
                },
                // {
                //   label: "Meet the staff",
                //   href: "/meet-the-staff",
                // },
                {
                  label: "Services",
                  href: "/dental-services",
                },
                {
                  label: "Appointment",
                  href: "/appointment",
                },
                {
                  label: "Contact",
                  href: "/contact",
                },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="inline-flex items-center gap-3 hover:text-[#213666] transition-colors">
                    <FaChevronRight size={14} className="text-[#213666]" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[18px] font-semibold">Useful Links</h3>
            <ul className="mt-4 space-y-3 text-[18px]">
              {[
                { label: "Blog", href: "/author/user" },
                // { label: "Emergency Dentist", href: "/emergency-dentist-milpitas/" },
                // { label: "Educational Videos", href: "/educational-videos" },
                // { label: "Dental Specials Success", href: "/dental-specials-success" },
                // { label: "New Patient Special", href: "/new-patient-special" },
                { label: "Testimonials", href: "/testimonials" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="inline-flex items-center gap-3 hover:text-[#213666] transition-colors">
                    <FaChevronRight size={14} className="text-[#213666]" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[18px] font-semibold leading-tight">
              Make an Appointment
            </h3>
            <p className="mt-4 text-[18px] leading-[1.35] max-w-[440px]">
              Contact Sethi Virdi DDS today to experience top-quality dental
              care in a welcoming and caring environment. Your smile and oral
              health are our top priorities, and we can&apos;t wait to meet you!
            </p>

            <a
              href="tel:+14082631255"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#213666] text-white px-6 py-3 text-[18px] font-semibold hover:bg-[#1a2d55] transition-colors"
            >
              <FaPhoneAlt size={18} />
              <span>(408) 263-1255</span>
            </a>

            <div className="mt-5 flex items-center gap-3">
              <Link href="https://www.instagram.com/sethivirdidds/" className="w-10 h-10 rounded-full bg-[#213666] text-white flex items-center justify-center">
                <FaInstagram size={16} />
              </Link>
              <Link href="https://www.facebook.com/sethivirdidds" className="w-10 h-10 rounded-full bg-[#213666] text-white flex items-center justify-center">
                <FaFacebookF size={16} />
              </Link>
              <Link href="https://share.google/AJRJmm543egArcrnw" className="w-10 h-10 rounded-full bg-[#213666] text-white flex items-center justify-center">
                <FaGoogle size={14} className="ml-0.5" />
              </Link>
              {/* <Link href="#" className="w-10 h-10 rounded-full bg-[#213666] text-white flex items-center justify-center">
                <FaYelp size={16} />
              </Link> */}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#c5d8e4] pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[18px]">
          <p>Best Dental Service by sethivirdidds</p>
          <p>Copyright &copy;2026 sethivirdidds.com All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
