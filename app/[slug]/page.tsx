import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import BlogFaqAccordion from "@/components/BlogFaqAccordion";
import PageBanner from "@/components/PageBanner";
import {
    contentPages,
    getBannerTitle,
    getContentPageBySlug,
} from "@/lib/contentPages";
import { parseInlineBlogText } from "@/lib/parseInlineText";
import type { ServiceContentBlock } from "@/lib/services";

type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateStaticParams() {
    return contentPages.map((page) => ({
        slug: page.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const page = getContentPageBySlug(slug);

    if (!page) {
        return {
            title: "Page | Sethi Virdi DDS",
            description: "Learn more about our dental services and dental blog articles.",
        };
    }

    return page.meta;
}

function renderContentBlocks(slug: string, content: ServiceContentBlock[]) {
    const renderedBlocks = [];

    for (let index = 0; index < content.length; index += 1) {
        const block = content[index];

        if (block.type === "heading") {
            const isFaqHeading =
                block.level === 2 && block.text.toLowerCase().includes("frequently asked questions");

            if (isFaqHeading) {
                if (content[index + 1]?.type === "faq") {
                    renderedBlocks.push(
                        <h2
                            key={`${block.text}-${index}`}
                            className="text-[26px] font-semibold leading-[1.2em] text-[#0d0d0d]"
                        >
                            {parseInlineBlogText(block.text)}
                        </h2>,
                    );
                    continue;
                }

                const faqItems: { question: string; answer: string }[] = [];
                let cursor = index + 1;

                while (cursor + 1 < content.length) {
                    const questionBlock = content[cursor];
                    const answerBlock = content[cursor + 1];

                    if (
                        questionBlock?.type !== "paragraph" ||
                        answerBlock?.type !== "paragraph"
                    ) {
                        break;
                    }

                    faqItems.push({
                        question: questionBlock.text,
                        answer: answerBlock.text,
                    });
                    cursor += 2;
                }

                renderedBlocks.push(
                    <h2
                        key={`${block.text}-${index}`}
                        className="text-[26px] font-semibold leading-[1.2em] text-[#0d0d0d]"
                    >
                        {parseInlineBlogText(block.text)}
                    </h2>,
                );

                if (faqItems.length > 0) {
                    renderedBlocks.push(
                        <BlogFaqAccordion key={`faq-auto-${index}`} items={faqItems} />,
                    );
                    index = cursor - 1;
                    continue;
                }
            }

            if (block.level === 2) {
                renderedBlocks.push(
                    <h2
                        key={`${block.text}-${index}`}
                        className="text-[26px] font-semibold leading-[1.2em] text-[#0d0d0d]"
                    >
                        {parseInlineBlogText(block.text)}
                    </h2>,
                );
                continue;
            }

            if (block.level === 3) {
                renderedBlocks.push(
                    <h3
                        key={`${block.text}-${index}`}
                        className="text-[22px] font-bold leading-[1.2em] text-[#0d0d0d]"
                    >
                        {block.text}
                    </h3>,
                );
                continue;
            }

            if (block.level === 5) {
                renderedBlocks.push(
                    <h5
                        key={`${block.text}-${index}`}
                        className="text-[18px] font-semibold leading-[1.35em] text-[#0d0d0d]"
                    >
                        {block.text}
                    </h5>,
                );
                continue;
            }

            renderedBlocks.push(
                <h6
                    key={`${block.text}-${index}`}
                    className="text-base font-semibold leading-[1.4em] text-[#0d0d0d]"
                >
                    {block.text}
                </h6>,
            );
            continue;
        }

        if (block.type === "list") {
            const isOrderedList = block.items.every((item) => /^\d+\.\s/.test(item));
            const ListTag = isOrderedList ? "ol" : "ul";
            const listClassName = isOrderedList
                ? "list-decimal space-y-3 pl-6 md:pl-12"
                : "list-disc space-y-3 pl-6 md:pl-12";

            renderedBlocks.push(
                <ListTag
                    key={`list-${index}`}
                    className={listClassName}
                >
                    {block.items.map((item, itemIndex) => (
                        <li key={`${slug}-item-${itemIndex}`}>
                            {parseInlineBlogText(
                                isOrderedList ? item.replace(/^\d+\.\s+/, "") : item,
                            )}
                        </li>
                    ))}
                </ListTag>,
            );
            continue;
        }

        if (block.type === "faq") {
            renderedBlocks.push(<BlogFaqAccordion key={`faq-${index}`} items={block.items} />);
            continue;
        }

        if (block.type === "paragraph") {
            renderedBlocks.push(
                <p key={`${block.text}-${index}`}>{parseInlineBlogText(block.text)}</p>,
            );
        }
    }

    return renderedBlocks;
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params;
    const page = getContentPageBySlug(slug);

    if (!page) {
        notFound();
    }

    const bannerTitle = getBannerTitle(page);

    return (
        <div>
            <PageBanner title={bannerTitle} breadcrumbItems={["Home", bannerTitle]} />

            {page.layout === "service" ? (
                <div className="mx-auto max-w-[1140px] px-4 py-10 text-base leading-[1.7em] md:py-16 md:text-lg">
                    <h2 className="mb-4 text-[28px] font-semibold leading-[1.2em] text-[#0d0d0d] md:text-[32px]">
                        {page.title}
                    </h2>
                    {page.heading && (
                        <h3 className="mb-4 text-[22px] font-bold leading-[1.2em] text-[#0d0d0d]">
                            {page.heading}
                        </h3>
                    )}
                    <p className="mb-8">{parseInlineBlogText(page.description)}</p>

                    <figure>
                        <Image
                            src={page.coverImage}
                            alt={page.title}
                            width={525}
                            height={350}
                            className="mx-auto mb-6 block object-cover xl:float-right xl:ml-8 xl:mb-6"
                        />
                        <figcaption className="space-y-5">
                            {renderContentBlocks(page.slug, page.content)}
                        </figcaption>
                    </figure>
                </div>
            ) : (
                <article className="mx-auto max-w-[1140px] px-4 py-10 text-base leading-[1.7em] md:py-16 md:text-lg">
                    <div className="mx-auto my-8 max-w-[1020px]">
                        <Image
                            src={page.coverImage}
                            alt={page.title}
                            width={1020}
                            height={640}
                            className="h-auto w-full object-cover block mx-auto max-w-[720px]" 
                            priority
                        />
                    </div>
                    <div className="mx-auto max-w-[1020px]">
                        <h1 className="text-[28px] md:text-[32px] font-semibold leading-[1.15em] text-[#0d0d0d] ">
                            {page.title}
                        </h1>
                        {page.publishedAt && (
                            <p className="mt-3 text-[15px] font-medium text-[#1291da] md:text-base">
                                {page.publishedAt}
                            </p>
                        )}
                        {page.description && (
                            <p className="mt-4 text-[18px] ]">
                                {parseInlineBlogText(page.description)}
                            </p>
                        )}
                    </div>



                    <div className="mx-auto mt-8 max-w-[1020px] space-y-5">
                        {renderContentBlocks(page.slug, page.content)}
                    </div>
                </article>
            )}
        </div>
    );
}
