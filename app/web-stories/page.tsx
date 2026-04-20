import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Milpitas Dentist Web Stories - Sethi Virdi DDS",
    description: "Explore Milpitas dentist Sethi Virdi DDS's web stories. Discover patient smiles, dental care tips, and real transformations in our inspiring story highlights.",
    alternates: {
        canonical: "/web-stories/",
    },
};

const stories = [
    {
        id: 1,
        image: "/images/Web-stories1.jpg",
        title: "Dental Care Service Milpitas CA | Sethi Virdi DDS",
        excerpt:
            "....",
        href: "/web-stories/dental-care-service-milpitas-ca/"
    },
];

export default function WebStoriesPage() {
    return (
        <main className="min-h-screen bg-white px-6 py-16 sm:px-10 lg:px-16">
            <section className="mx-auto flex max-w-7xl flex-col items-center gap-12">
                <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2f457e]">
                        Sethi Virdi DDS
                    </p>
                    <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#111111] sm:text-5xl">
                        Web Stories
                    </h1>
                </div>

                <div className="grid w-full place-items-center">
                    {stories.map((story) => (
                        <Link
                            href={story.href}
                            key={story.id}
                            className="group flex w-full max-w-[370px] flex-col overflow-hidden border border-black/5 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.14)] transition-transform duration-300 hover:-translate-y-1"
                        >
                            <div className="relative max-h-[300px] aspect-5/7 w-full overflow-hidden bg-[#dfe5f1]">
                                <Image
                                    src={story.image}
                                    alt={story.title}
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                                    sizes="(max-width: 640px) 90vw, 370px"
                                    priority
                                />
                            </div>

                            <div className="flex flex-1 flex-col gap-4 px-6 py-6">
                                <h2 className="text-[1.7rem] font-semibold leading-tight text-[#0f172a]">
                                    {story.title}
                                </h2>
                                <p className="text-base leading-7 text-[#475569]">
                                    {story.excerpt}
                                </p>

                                <button
                                    type="button"
                                    className="mt-2 inline-flex w-fit items-center justify-center rounded-full border-2 border-[#111827] bg-[#2c4278] px-8 py-3 text-lg font-semibold text-white transition-colors duration-300 hover:bg-[#243867]"
                                >
                                    Read More
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
