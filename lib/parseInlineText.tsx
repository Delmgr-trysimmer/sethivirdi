import Link from "next/link";
import type { ReactNode } from "react";

const linkClassName = "text-[#1155cc] font-bold hover:underline";
const phoneLinkClassName = "text-[#1155cc] font-bold hover:underline";
const inlinePattern = /(\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\))/g;

function isInternalLink(href: string) {
    return href.startsWith("/") || href.startsWith("#");
}

/** Plain text for previews (e.g. blog listing); use `parseInlineBlogText` on full article pages. */
export function stripInlineMarkdown(text: string): string {
    return text
        .replace(/\*\*([^*]+)\*\*/g, "$1")
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

export function parseInlineBlogText(text: string): ReactNode[] {
    const nodes: ReactNode[] = [];
    let cursor = 0;
    let tokenIndex = 0;

    for (const match of text.matchAll(inlinePattern)) {
        const fullMatch = match[0];
        const matchIndex = match.index ?? 0;

        if (matchIndex > cursor) {
            nodes.push(text.slice(cursor, matchIndex));
        }

        const boldText = match[2];
        const linkText = match[3];
        const href = match[4];

        if (boldText) {
            nodes.push(
                <strong key={`bold-${tokenIndex}`}>{boldText}</strong>,
            );
        } else if (linkText && href) {
            const className = href.startsWith("tel:") ? phoneLinkClassName : linkClassName;

            nodes.push(
                isInternalLink(href) ? (
                    <Link key={`link-${tokenIndex}`} href={href} className={className}>
                        {linkText}
                    </Link>
                ) : (
                    <a
                        key={`link-${tokenIndex}`}
                        href={href}
                        className={className}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {linkText}
                    </a>
                ),
            );
        }

        cursor = matchIndex + fullMatch.length;
        tokenIndex += 1;
    }

    if (cursor < text.length) {
        nodes.push(text.slice(cursor));
    }

    return nodes;
}
