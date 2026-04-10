"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type SiteChromeProps = {
  children: React.ReactNode;
};

export default function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname();
  const isStoryDetail =
    !!pathname &&
    pathname.startsWith("/web-stories/") &&
    pathname !== "/web-stories";

  return (
    <>
      {!isStoryDetail && <Navbar />}
      {children}
      {!isStoryDetail && <Footer />}
    </>
  );
}
