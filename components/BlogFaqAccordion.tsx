"use client";

import { useEffect, useRef, useState } from "react";
import { parseInlineBlogText } from "@/lib/parseInlineText";

type FaqItem = {
    question: string;
    answer: string;
};

type BlogFaqAccordionProps = {
    items: FaqItem[];
};

function FaqRow({ item, index }: { item: FaqItem; index: number }) {
    const [isOpen, setIsOpen] = useState(index === 0);
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        if (!contentRef.current) {
            return;
        }

        setContentHeight(contentRef.current.scrollHeight);
    }, [item.answer, isOpen]);

    return (
        <div className="overflow-hidden rounded-xl border border-[#dbe5ef] bg-white ">
            <button
                type="button"
                onClick={() => setIsOpen((open) => !open)}
                className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-[#0d0d0d] transition-colors duration-300 hover:bg-[#f5fbff] md:px-6"
                aria-expanded={isOpen}
            >
                <span className="text-[17px] font-semibold leading-[1.5] md:text-[18px]">
                    {parseInlineBlogText(item.question)}
                </span>
                <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef7fd] text-[#1291da] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 9L12 15L18 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </button>

            <div
                className="transition-[max-height,opacity] duration-300 ease-out"
                style={{
                    maxHeight: isOpen ? `${contentHeight}px` : "0px",
                    opacity: isOpen ? 1 : 0,
                }}
            >
                <div ref={contentRef} className="px-5 pb-5 text-[#4a4a4a] md:px-6 md:pb-6">
                    <p>{parseInlineBlogText(item.answer)}</p>
                </div>
            </div>
        </div>
    );
}

export default function BlogFaqAccordion({ items }: BlogFaqAccordionProps) {
    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <FaqRow key={`${item.question}-${index}`} item={item} index={index} />
            ))}
        </div>
    );
}
