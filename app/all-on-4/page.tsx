import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import { parseInlineBlogText } from "@/lib/parseInlineText";
import { services } from "@/lib/services";

const serviceSlug = "all-on-4";
const service = services.find((item) => item.slug === serviceSlug);

export const metadata: Metadata = service
  ? service.meta
  : {
      title: "Service | Sethi Virdi DDS",
      description: "Learn more about our dental services.",
    };

export default function Page() {
  if (!service) {
    notFound();
  }

  return (
    <div>
      <PageBanner title="ALL on 4" breadcrumbItems={["Home", "ALL on 4"]} />

      <div className="mx-auto max-w-[1140px] px-4 py-10 text-base leading-[1.7em] md:py-16 md:text-lg">
        <h2 className="mb-4 text-[28px] font-semibold leading-[1.2em] text-[#0d0d0d] md:text-[32px]">
          {service.title}
        </h2>
        <p className="mb-8">{service.description}</p>

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
                    {block.items.map((item, i) => (
                      <li key={i}>
                        {parseInlineBlogText(item)}
                      </li>
                    ))}
                  </ul>
                );
              }

              return <p key={`${block.text}-${index}`}>{parseInlineBlogText(block.text)}</p>;
            })}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
