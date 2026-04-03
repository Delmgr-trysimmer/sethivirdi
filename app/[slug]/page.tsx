import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import { parseInlineBlogText } from "@/lib/parseInlineText";
import { formatServiceSlug, getServiceBySlug, services } from "@/lib/services";

type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return {
            title: "Service | Sethi Virdi DDS",
            description: "Learn more about our dental services.",
        };
    }

    return service.meta;
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    const bannerTitle = formatServiceSlug(service.slug);

    return (
        <div>
            <PageBanner title={bannerTitle} breadcrumbItems={["Home", bannerTitle]} />

            <div className="mx-auto max-w-[1140px] px-4 py-10 text-base leading-[1.7em] md:py-16 md:text-lg">
                <h2 className="mb-4 text-[28px] font-semibold leading-[1.2em] text-[#0d0d0d] md:text-[32px]">
                    {service.title}
                </h2>
                {service?.heading && <h3
                    className="text-[22px] mb-4 font-bold leading-[1.2em] text-[#0d0d0d]"
                >
                    {service?.heading}
                </h3>}
                <p className="mb-8">{parseInlineBlogText(service.description)}</p>

                <figure>
                    <Image
                        src={service.coverImage}
                        alt={service.title}
                        width={525}
                        height={350}
                        className="mx-auto mb-6 block object-cover xl:float-right xl:ml-8 xl:mb-6"
                    />
                    <figcaption className="space-y-5">
                        {service.content.map((block, index) => {
                            if (block.type === "heading") {
                                if (block.level === 2) {
                                    return (
                                        <h2
                                            key={`${block.text}-${index}`}
                                            className="text-[26px] font-semibold leading-[1.2em] text-[#0d0d0d]"
                                        >
                                            {block.text}
                                        </h2>
                                    );
                                }

                                return (
                                    <h3
                                        key={`${block.text}-${index}`}
                                        className="text-[22px] font-bold leading-[1.2em] text-[#0d0d0d]"
                                    >
                                        {block.text}
                                    </h3>
                                );
                            }

                            if (block.type === "list") {
                                return (
                                    <ul
                                        key={`list-${index}`}
                                        className="list-disc space-y-3 pl-6 md:pl-12"
                                    >
                                        {block.items.map((item, itemIndex) => (
                                            <li key={`${service.slug}-item-${itemIndex}`}>
                                                {parseInlineBlogText(item)}
                                            </li>
                                        ))}
                                    </ul>
                                );
                            }

                            return (
                                <p key={`${block.text}-${index}`}>
                                    {parseInlineBlogText(block.text)}
                                </p>
                            );
                        })}
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}
