import React from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

type PageBannerProps = {
  title: string;
  backgroundImage?: string;
  breadcrumbItems?: string[];
};

const PageBanner = ({
  title,
  backgroundImage = "/images/Service.jpg",
  breadcrumbItems = [],
}: PageBannerProps) => {
  return (
    <section className="relative w-full h-[160px] md:h-[210px] overflow-hidden">
      <Image
        src={backgroundImage}
        alt={`${title} banner`}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-[#213666]/90" />

      <div className="relative z-10 h-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1290px] h-full">
          <div className="h-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
            <h1 className="text-white text-[28px] md:text-[32px] font-semibold leading-tight">
              {title}
            </h1>

            {breadcrumbItems && breadcrumbItems.length > 0 && <div className="text-white text-[16px] md:text-[18px] flex items-center gap-2">
              <span>{breadcrumbItems[0]}</span>
              <FaChevronRight size={12} />
              <span>{breadcrumbItems[1]}</span>
            </div>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
