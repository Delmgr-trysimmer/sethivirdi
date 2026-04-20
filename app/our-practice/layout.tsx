import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Dental Our Practice Milpitas, - Sethi Virdi DDS",
    description: "Looking for top-notch dentistry for your family? Look no further than Sethi Virdi DDS. We make appointments fun & easy!",
    alternates: {
        canonical: "/our-practice/",
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
