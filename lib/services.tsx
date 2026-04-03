export type ServiceContentBlock =
    | {
        type: "heading";
        level: 2 | 3;
        text: string;
    }
    | {
        type: "paragraph";
        text: string;
    }
    | {
        type: "list";
        items: string[];
    };

export type Service = {
    slug: string;
    meta: {
        title: string;
        description: string;
    };
    title: string;
    description: string;
    coverImage: string;
    content: ServiceContentBlock[];
};

export const services: Service[] = [
    {
        slug: "all-on-4",
        meta: {
            title: "All-on-4 Implant Dentist Milpitas, CA | Sethi Virdi DDS",
            description:
                "Learn about All-on-4 dental implants in Milpitas, CA with Sethi Virdi DDS and discover a stable, confident solution for full-arch smile restoration.",
        },
        title: "Meet Sethi Virdi DDS, your trusted All-on-4 dental implants expert.",
        description:
            "Are you searching for a reputable dental professional to restore your smile and confidence? Look no further than Sethi Virdi DDS, a leading expert in All-on-4 dental implants in Milpitas. With over a decade of experience, Sethi Virdi DDS is committed to providing patients with top-quality, personalized dental care.",
        coverImage: "/images/All-on-4.jpg",
        content: [
            {
                type: "heading",
                level: 2,
                text: "What are All-on-4 dental implants?",
            },
            {
                type: "paragraph",
                text: "All-on-4 dental implants offer a revolutionary solution for individuals who have lost multiple teeth or are dealing with uncomfortable dentures. This innovative procedure allows for the replacement of a full arch of teeth with four to six strategically placed dental implants and a fixed denture that is screwed onto the implants.",
            },
            {
                type: "heading",
                level: 2,
                text: "Advantages of All-on-4 dental implants",
            },
            {
                type: "list",
                items: [
                    "**Natural look and feel:** All-on-4 dental implants mimic the appearance and function of natural teeth, providing a seamless and confident smile.",
                    "**Improved comfort:** Say goodbye to the discomfort and inconvenience of traditional dentures.",
                    "**Enhanced speech:** Restore clear speech and communication without worrying about loose dentures.",
                    "**Increased confidence:** Regain the self-assurance that comes with a beautiful and functional smile.",
                ],
            },
            {
                type: "heading",
                level: 2,
                text: "The All-on-4 dental implants procedure",
            },
            {
                type: "paragraph",
                text: "Sethi Virdi's state-of-the-art dental practice in Milpitas offers a streamlined and efficient process for All-on-4 dental implants. The treatment involves a comprehensive evaluation, precise implant placement, and the attachment of a custom-made fixed prosthesis.",
            },
            {
                type: "heading",
                level: 2,
                text: "Personalized care for every patient",
            },
            {
                type: "paragraph",
                text: "At Sethi Virdi DDS, we believe in tailoring every treatment plan to meet the unique needs and goals of our patients. Sethi Virdi DDS and our dedicated team take the time to understand your concerns, answer your questions, and develop a treatment strategy that's right for you.",
            },
            {
                type: "heading",
                level: 2,
                text: "Restoring smiles and changing lives",
            },
            {
                type: "paragraph",
                text: "Our patients' testimonials speak volumes about the life-changing impact of All-on-4 dental implants. From enjoying favorite foods to smiling without reservation, the transformation is remarkable.",
            },
            {
                type: "heading",
                level: 2,
                text: "Financing options and insurance",
            },
            {
                type: "paragraph",
                text: "We understand that dental implant treatment is an investment in your oral health and well-being. We work with various insurance plans and offer flexible financing options to make the process accessible and affordable for you.",
            },
            {
                type: "heading",
                level: 2,
                text: "Your journey to a new smile starts today",
            },
            {
                type: "paragraph",
                text: "Are you ready to take the first step towards a confident, functional smile with All-on-4 dental implants in Milpitas? Contact us at [(408) 263-1255](tel:+14082631255) to schedule a consultation with Sethi Virdi DDS.",
            },
            {
                type: "heading",
                level: 2,
                text: "A convenient location in Milpitas",
            },
            {
                type: "paragraph",
                text: "Our dental practice is conveniently located in Milpitas, making it easy for residents in the surrounding areas to access world-class dental care.",
            },
            {
                type: "heading",
                level: 2,
                text: "Your smile, our passion",
            },
            {
                type: "paragraph",
                text: "Sethi Virdi DDS and our team are dedicated to restoring your smile and your quality of life. With All-on-4 dental implants in Milpitas, you can enjoy the confidence and comfort you deserve. Contact us today to schedule your consultation and begin your journey to a revitalized smile.",
            },
        ],
    },
];
