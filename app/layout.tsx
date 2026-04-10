import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import SiteChrome from "@/components/SiteChrome";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-geist-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dentist in Milpitas, CA - Cosmetic Dentistry 95035",
  description: "Dentist in Milpitas offering expert cosmetic dentistry, dental implants, emergency dental care, and professional teeth whitening. Visit Sethi Virdi DDS today.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
