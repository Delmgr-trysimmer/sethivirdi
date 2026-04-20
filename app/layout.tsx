import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://sethivirdidds.com/"),
  title: "Dentist in Milpitas, CA - Cosmetic Dentistry 95035",
  description: "Dentist in Milpitas offering expert cosmetic dentistry, dental implants, emergency dental care, and professional teeth whitening. Visit Sethi Virdi DDS today.",
  verification: {
    google: "r1RTcskMhk6dMX1RqgcV10AG29GO6g8OAZHKnAnI8LA",
  },
  robots: {
    index: true,
    follow: true,
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
      <head>
        <Script id="gtm-script" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5DGVSS4');`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5DGVSS4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
