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
    heading?: string;
    description: string;
    coverImage: string;
    content: ServiceContentBlock[];
};

export function getServiceBySlug(slug: string) {
    return services.find((service) => service.slug === slug);
}

export function formatServiceSlug(slug: string) {
    return slug
        .split("-")
        .map((part) => {
            if (/^\d+$/.test(part)) {
                return part;
            }

            return part.charAt(0).toUpperCase() + part.slice(1);
        })
        .join(" ");
}

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
    {
        slug: "bonding",
        meta: {
            title: "Affordable Dental Bonding In Milpitas, | Sethi Virdi D",
            description:
                "Budget-Friendly Dental Bonding in Milpitas | Sethi Virdi DDS – Achieve a Radiant Smile with Affordable and Expert Bonding Services!",
        },
        title: "Discover the benefits of dental bonding in Milpitas.",
        description:
            "Are you looking to enhance the beauty of your smile without extensive treatments? Dental bonding could be the perfect solution for you. At Sethi Virdi DDS, we offer dental bonding, a conservative and effective cosmetic treatment that can improve the appearance of your teeth in just one visit.",
        coverImage: "/images/dental-bonding-1.webp",
        content: [
            {
                type: "heading",
                level: 2,
                text: "What is Dental Bonding?",
            },
            {
                type: "paragraph",
                text: "Dental bonding involves the use of composite resin to repair and restore the tooth surface, providing a natural and seamless result. This procedure is commonly utilized for various cosmetic purposes, including:",
            },
            {
                type: "list",
                items: [
                    "Repairing chips and minor cracks in teeth.",
                    "Covering stained or discolored enamel gives you a brighter smile.",
                    "Closing small gaps between teeth for a more even and uniform look.",
                    "Remodeling the contours of teeth that are undersized, crooked, or misshapen.",
                    "Rebuilding areas where enamel erosion has occurred, restoring the tooth's structure.",
                    "Creating tooth-colored fillings that are virtually indistinguishable from your natural teeth.",
                ],
            },
            {
                type: "heading",
                level: 2,
                text: "The Dental Bonding Process",
            },
            {
                type: "paragraph",
                text: "When you choose dental bonding at our Milpitas office, our skilled dentist will first conduct a thorough examination to ensure that your tooth is healthy and suitable for the bonding procedure. The tooth surface is then prepared to facilitate the bonding process. A specially formulated dental adhesive is applied to help the composite resin bond securely to the tooth structure.",
            },
            {
                type: "paragraph",
                text: "Next, the composite resin is carefully placed and shaped to achieve the desired look, matching the color of your natural enamel for a seamless result. To harden the resin and secure the bonding in place, a curing light is used. Once the bonding is checked for fit, shape, and aesthetics, it is skillfully smoothed and polished, leaving you with a flawless smile.",
            },
            {
                type: "heading",
                level: 2,
                text: "Benefits of Dental Bonding",
            },
            {
                type: "paragraph",
                text: "Opting for dental bonding at Sethi Virdi DDS offers several advantages, including:",
            },
            {
                type: "list",
                items: [
                    "**Convenience:** Dental bonding is a time-efficient procedure that can often be completed in just one visit, saving you valuable time.",
                    "**Cost-effectiveness:** Compared to alternatives like veneers or crowns, dental bonding is a more budget-friendly option for enhancing your smile.",
                    "**Minimally invasive:** Unlike veneers and crowns that require more extensive tooth structure removal, bonding preserves more of your natural tooth.",
                    "**Anesthesia-free:** In many cases, dental bonding can be done without the need for anesthesia, making the experience more comfortable for you.",
                ],
            },
            {
                type: "heading",
                level: 2,
                text: "Is Dental Bonding Right for You?",
            },
            {
                type: "paragraph",
                text: "While dental bonding is a fantastic option for many individuals seeking cosmetic improvements, it may not be suitable for every dental concern. For major chips, deep decay, or severe misalignment, alternative treatments may be necessary. To determine if dental bonding is the right choice for enhancing the natural beauty of your smile, we encourage you to schedule a consultation with our experienced dentist.",
            },
            {
                type: "heading",
                level: 2,
                text: "Transform Your Smile Today!",
            },
            {
                type: "paragraph",
                text: "If you're ready to revitalize your smile and boost your confidence, consider the convenience and effectiveness of dental bonding. Reach out to Sethi Virdi DDS in Milpitas today to schedule a consultation and take the first step towards achieving your dream smile. Our friendly team is eager to assist you in achieving the smile you deserve!",
            },
        ],
    },
    {
        slug: "dentures",
        meta: {
            title: "Traditional Dentures Dentist In Milpitas, | Sethi Virdi DDS",
            description:
                "Enhance your smile with Traditional Dentures at Sethi Virdi DDS in Milpitas. Expert dental care for a confident, natural-looking result.",
        },
        title: "Welcome to the dental practice of Sethi Virdi DDS, in Milpitas!",
        heading: "Discover the freedom of Snap-On-Overdentures.",
        description:
            " Are you tired of dealing with loose or uncomfortable dentures? At Sethi Virdi DDS, we understand the challenges that traditional dentures can pose. That’s why we offer a modern solution: Snap-On-Overdentures.",
        coverImage: "/images/Dentures1.jpg",
        content: [
            {
                type: "heading",
                level: 2,
                text: "What are Snap-On-Overdentures?",
            },
            {
                type: "paragraph",
                text: "Snap-On-Overdentures are a removable dental appliance designed to provide exceptional stability and comfort. They are an excellent choice for individuals who have lost some or all of their teeth and are seeking an alternative to conventional dentures.",
            },
            {
                type: "paragraph",
                text: "These overdentures are securely anchored in place using dental implants, ensuring they won't slip, shift, or cause discomfort. Sethi Virdi DDS specializes in the placement of these implants and will work with you to customize your overdentures for a natural look and a confident smile.",
            },
            {
                type: "heading",
                level: 2,
                text: "Benefits of Snap-On-Overdentures:",
            },
            {
                type: "list",
                items: [
                    "**Enhanced stability:** Unlike traditional dentures, Snap-On-Overdentures remain firmly in place while you eat, speak, and laugh. No more worrying about embarrassing slips.",
                    "**Improved comfort:** Say goodbye to sore spots and gum irritation. Snap-On-Overdentures are designed for optimal comfort and fit.",
                    "**Better chewing power:** Enjoy a wider range of food options with the increased chewing power provided by overdentures.",
                    "**Confidence boost:** With overdentures, you can regain your confidence, speaking and smiling with ease.",
                    "**Easy maintenance:** Cleaning and maintaining overdentures is a breeze. Simply snap them on and off for cleaning.",
                ],
            },
            {
                type: "heading",
                level: 2,
                text: "Why choose Sethi Virdi DDS?",
            },
            {
                type: "paragraph",
                text: "Sethi Virdi DDS is a highly skilled dentist with a passion for improving patients' oral health and quality of life.",
            },
            {
                type: "paragraph",
                text: "Sethi Virdi DDS has extensive experience in implant dentistry and overdentures. You can trust them to provide the personalized care and attention you deserve.",
            },
            {
                type: "heading",
                level: 2,
                text: "Schedule your consultation today",
            },
            {
                type: "paragraph",
                text: "Don't let loose dentures hold you back any longer. Experience the benefits of Snap-On-Overdentures under the expert care of Sethi Virdi DDS, in Milpitas.",
            },
            {
                type: "paragraph",
                text: "Contact us at [(408) 263-1255](tel:+14082631255) to schedule your consultation. We look forward to helping you achieve a more confident and comfortable smile.",
            },
            {
                type: "paragraph",
                text: "Rediscover the joy of eating, speaking, and smiling with Snap-On-Overdentures. Your path to a brighter, more comfortable smile begins here!",
            },
        ],
    },
    {
        slug: "oral-cancer-screenings",
        meta: {
            title: "Oral Cancer Screenings In Milpitas, CA - Sethi Virdi DDS",
            description:
                "Comprehensive Oral Cancer Screenings in Milpitas, CA | Sethi Virdi DDS – Prioritize Your Oral Health with Expert Screening Services for Peace of Mind.",
        },
        title: "Comprehensive oral cancer screenings in Milpitas, CA - Sethi Virdi DDS",
        description:
            "Are you concerned about oral cancer and the importance of early detection? At Sethi Virdi DDS, we offer thorough and life-saving oral cancer screenings in Milpitas, CA. Our experienced dentists are committed to your well-being and use advanced screening techniques to identify potential signs of oral cancer, ensuring your oral health remains a top priority.",
        coverImage: "/images/Oral-Cancer-Screenings.jpg",
        content: [
            {
                type: "heading",
                level: 2,
                text: "The significance of oral cancer screenings:",
            },
            {
                type: "paragraph",
                text: "Oral cancer screenings are a crucial aspect of preventive dental care, providing an opportunity to detect oral cancer in its early stages. Early detection is vital in combating this potentially destructive disease as it increases the chances of successful treatment and improved outcomes. Our dentists are trained to perform visual oral cancer screenings, and, based on lifestyle choices or family history, they may recommend more frequent screenings.",
            },
            {
                type: "heading",
                level: 2,
                text: "What to expect during an oral cancer screening:",
            },
            {
                type: "paragraph",
                text: "Our comprehensive oral cancer screenings consist of two main parts: a visual examination and a physical examination of various areas, including:",
            },
            {
                type: "list",
                items: [
                    "**Visual examination:** Our dentists will carefully inspect your face, neck, lips, gums, palate, tongue, and other soft tissues for any asymmetries, swelling, lumps, white patches, sores, or abnormalities. Using a small light and mirror, they will examine the inside of your nose and mouth, ensuring a thorough assessment.",
                    "**Physical examination:** The physical exam involves gently touching areas around your head, cheeks, jaw, under the chin, and inside the oral cavity. The dentist will be looking for any unusual nodules or masses that may require further investigation.",
                ],
            },
            {
                type: "heading",
                level: 2,
                text: "Technological tools for enhanced screening:",
            },
            {
                type: "paragraph",
                text: "To enhance the screening process, we may use advanced oral cancer screening devices, such as the VELscope. This device emits a safe blue light into the oral cavity, making it easier to identify precancerous cells that may not be visible to the naked eye. Normal tissues will illuminate, while suspicious or cancerous spots will remain dark, enabling early detection.",
            },
            {
                type: "heading",
                level: 2,
                text: "Biopsy and further examination:",
            },
            {
                type: "paragraph",
                text: "If an abnormality is detected during the screening, a sample of the suspicious cells may be taken and sent to the lab for a biopsy. Although oral cancer screenings can alert us to potential problem areas, a confirmed diagnosis of oral cancer requires a more comprehensive evaluation.",
            },
            {
                type: "heading",
                level: 2,
                text: "The importance of regular screenings:",
            },
            {
                type: "paragraph",
                text: "Regular oral cancer screenings, even if no apparent signs of the disease are present, are vital in maintaining optimal oral health. For individuals with a family history of oral cancer or engaging in certain habits like tobacco use or excessive alcohol intake, we recommend requesting screenings every four months to minimize risk.",
            },
            {
                type: "heading",
                level: 2,
                text: "Prioritize your oral health with oral cancer screenings:",
            },
            {
                type: "paragraph",
                text: "At Sethi Virdi DDS, your well-being is our top priority. Our skilled dentists are dedicated to providing comprehensive oral cancer screenings to protect your health and potentially save lives.",
            },
            {
                type: "paragraph",
                text: "Don't hesitate to schedule your oral cancer screening today by calling [(408) 263-1255](tel:+14082631255). Be proactive in safeguarding your oral health and maintaining a brighter future with our professional oral cancer screenings.",
            },
        ],
    },
    {
        slug: "porcelain-veneers",
        meta: {
            title: "Porcelain Veneers Dentist In Milpitas | Sethi Virdi DDS",
            description:
                "Enhance Your Smile with Porcelain Veneers in Milpitas | Sethi Virdi DDS – Expert Veneer Dentistry for a Stunning, Natural-Looking Transformation!",
        },
        title: "Enhance your smile with Porcelain Veneers in Milpitas, CA - Sethi Virdi DDS.",
        description:
            "If you're looking for a natural and durable solution to restore your smile and achieve a brighter, more uniform look, porcelain veneers may be the ideal choice for you. At Sethi Virdi DDS, we offer top-quality dental veneers in Milpitas, CA to address various dental concerns and enhance the overall aesthetics of your teeth.",
        coverImage: "/images/Porcelain-Veneers.jpg",
        content: [
            {
                type: "heading",
                level: 2,
                text: "What are Porcelain Veneers?",
            },
            {
                type: "paragraph",
                text: "Porcelain veneers are thin, custom-fabricated shells made of durable porcelain material. They are designed to cover the front surface of your teeth, effectively concealing imperfections such as chips, cracks, stains, and slight misalignments. Dental veneers offer a popular cosmetic enhancement option due to their natural appearance and ability to create a seamless, radiant smile.",
            },
            {
                type: "heading",
                level: 2,
                text: "The Veneer Process:",
            },
            {
                type: "paragraph",
                text: "Our dental veneer process is completed over several appointments, ensuring precision and a perfect fit for your unique smile.",
            },

            {
                type: "list",
                items: [
                    "**Consultation:** During your initial consultation, we discuss your smile goals and determine if dental veneers are the right solution for you.",
                    "**Examination:** Your teeth and gums are thoroughly examined, and measurements, photographs, X-rays, and impressions are taken as needed to plan your veneer treatment.",
                    "**Preparation:** A small amount of enamel is delicately removed from the front of the tooth to ensure the veneer fits snugly and flush with the tooth surface. Impressions are taken for precise fabrication.",
                    "**Fabrication:** The veneers are custom-crafted in a dental laboratory, using your dental impressions and our dentist's detailed instructions for the perfect shape, size, and color match.",
                    "**Application:** Once your veneers are ready, we conduct a final appointment for placement. Your dentist checks for shape, color, and fit, making any necessary adjustments. The veneers are then bonded in place using dental cement.",
                ],
            },
            {
                type: "heading",
                level: 2,
                text: "Are Porcelain Veneers Right for You?",
            },
            {
                type: "paragraph",
                text: "Before opting for dental veneers, it's important to discuss with your dentist whether they are suitable for your specific dental needs and goals.",
            },
            {
                type: "list",
                items: [
                    "**Permanent Solution:** As veneers require the removal of a small amount of enamel, they are a permanent treatment. However, with proper care, they can last from ten to 15 years.",
                    "**Healthy Teeth and Gums:** For the veneer process to be successful, your teeth and gums must be healthy. Severe orthodontic misalignments or habitual teeth grinding may affect their suitability.",
                ],
            },
            {
                type: "heading",
                level: 2,
                text: "The Advantages of Porcelain Veneers:",
            },
            {
                type: "paragraph",
                text: "Choosing porcelain veneers offers numerous benefits over other cosmetic restorations.",
            },
            {
                type: "list",
                items: [
                    "**Stain Resistance:** Veneers cover staining that whitening treatments alone may not eliminate. The semi-translucent porcelain resembles natural enamel, creating a more natural appearance.",
                    "**Durability:** Porcelain veneers are less vulnerable to chipping or damage compared to bonding, ensuring a longer lifespan.",
                    "**Preservation of Tooth Structure:** Veneers preserve more of the tooth's underlying structure compared to crowns, making them a conservative option.",
                ],
            },
            {
                type: "heading",
                level: 2,
                text: "Restore your smile with Porcelain Veneers.",
            },
            {
                type: "paragraph",
                text: "If chips, gaps, stains, cracks, or misshapen teeth are affecting your confidence, consider porcelain veneers as an effective solution.",
            },
            {
                type: "paragraph",
                text: "Schedule a consultation at Sethi Virdi DDS by calling [(408) 263-1255](tel:+14082631255) to explore how veneers can restore and enhance your smile, giving you the confidence to showcase your best self. Let us help you achieve a flawless and radiant smile with our premium dental veneers.",
            },
        ],
    },
    {
        slug: "professional-teeth-cleanings",
        meta: {
            title: "Professional Teeth Cleaning Services In Milpitas, CA",
            description:
                "Enhance your smile with professional teeth cleaning in Milpitas, CA. Trust expert care for a brighter, healthier mouth. Call Us Now at (408) 263-1255.",
        },
        title: "Affordable Dental Cleaning Services in Milpitas, CA - Sethi Virdi DDS",
        description:
            "Maintaining a healthy smile starts with regular dental cleanings. If you're looking for professional and affordable teeth cleaning services in Milpitas, look no further than Sethi Virdi DDS. Our experienced dental team is committed to providing top-quality dental care, ensuring your oral health remains at its best.",
        coverImage: "/images/Teeth-Cleanings.jpg",
        content: [
            {
                type: "heading",
                level: 2,
                text: "The Importance of Professional Teeth Cleaning:",
            },
            {
                type: "paragraph",
                text: "Regular dental cleanings are an essential part of preventive oral care. Even with regular brushing and flossing at home, plaque and tartar can accumulate on your teeth over time, leading to various oral health issues. Professional teeth cleaning by our skilled dental hygienists can offer the following benefits:",
            },
            {
                type: "list",
                items: [
                    "**Plaque and Tartar Removal:** Dental cleanings effectively remove plaque and tartar buildup, which are major contributors to tooth decay and gum disease.",
                    "**Prevention of Gum Disease:** Regular cleanings help prevent gum disease, which can lead to serious dental problems if left untreated.",
                    "**Brighter Smile:** Dental cleanings can remove surface stains and discoloration, leaving you with a brighter and more attractive smile.",
                    "**Fresh Breath:** Removing bacteria and plaque can significantly improve your breath and overall oral hygiene.",
                    "**Early Detection:** During cleanings, our dental professionals can identify any potential dental issues early on, allowing for timely intervention and treatment.",
                ],
            },
            {
                type: "heading",
                level: 2,
                text: "Expert Teeth Cleaning in Milpitas - Sethi Virdi DDS:",
            },
            {
                type: "paragraph",
                text: "At Sethi Virdi DDS, we take pride in delivering exceptional teeth cleaning services to our patients. Our dental hygienists are highly skilled and gentle, ensuring a comfortable and positive dental experience. Here's what you can expect during your teeth cleaning appointment:",
            },
            {
                type: "list",
                items: [
                    "**Thorough Examination:** Our dental hygienist will begin with a comprehensive examination of your teeth and gums to assess your oral health.",
                    "**Plaque and Tartar Removal:** Using specialized dental tools, we will carefully remove plaque and tartar from your teeth, including those hard-to-reach areas.",
                    "**Professional Flossing:** Our dental team will perform professional flossing to clean between your teeth and along the gumline.",
                    "**Polishing:** After cleaning, we will polish your teeth to remove any surface stains and leave your smile looking bright and fresh.",
                    "**Personalized Advice:** We will provide personalized advice on maintaining excellent oral hygiene at home and address any specific concerns you may have.",
                ],
            },
            {
                type: "heading",
                level: 2,
                text: "Schedule Your Teeth Cleaning Today:",
            },
            {
                type: "paragraph",
                text: "Don't wait for dental issues to arise before taking action. Ensure a healthy and beautiful smile with affordable teeth cleaning services in Milpitas, CA, at Sethi Virdi DDS.",
            },
            {
                type: "paragraph",
                text: "Call us at [(408) 263-1255](tel:+14082631255) to schedule your appointment and take the first step toward optimal oral health. Our friendly team is here to support you in achieving a confident and healthy smile.",
            },
        ],
    },
    {
        slug: "sealants",
        meta: {
            title: "Dental Sealants in Milpitas - Sethi Virdi DDS",
            description:
                "Protect your smile with dental sealants from Sethi Virdi DDS in Milpitas. Our experienced dentists provide effective cavity prevention for children and adults.",
        },
        title: "Protect Your Smile with Dental Sealants in Milpitas - Sethi Virdi DDS",
        description:
            "Are you looking for a reliable way to safeguard your teeth from cavities and maintain a healthy smile? Dental sealants can be an excellent preventive option, and at Sethi Virdi DDS, we offer top-quality dental sealant services in Milpitas. Our experienced dental team is dedicated to providing exceptional care and ensuring your teeth stay protected against decay.",
        coverImage: "/images/Dental-Sealants.jpg",
        content: [
            {
                type: "heading",
                level: 2,
                text: "Understanding Dental Sealants:",
            },
            {
                type: "paragraph",
                text: "Dental sealants are thin, protective coatings applied to the chewing surfaces of the molars and premolars. These back teeth have natural pits and grooves that can trap food particles and bacteria, making them more susceptible to cavities. Dental sealants act as a shield, creating a smooth surface over these vulnerable areas, effectively preventing decay.",
            },
            {
                type: "heading",
                level: 2,
                text: "The Benefits of Dental Sealants:",
            },
            {
                type: "list",
                items: [
                    "**Cavity Prevention:** Dental sealants provide an added layer of protection, reducing the risk of cavities by up to 80% in the protected areas.",
                    "**Long-lasting:** With proper oral hygiene and regular dental check-ups, dental sealants can last for several years, effectively safeguarding your teeth.",
                    "**Painless Procedure:** The application of dental sealants is a quick and painless process, with no need for anesthesia.",
                    "**Cost-effective:** Preventing cavities through dental sealants can save you money on potential future dental treatments.",
                ],
            },
            {
                type: "heading",
                level: 2,
                text: "Expert Dental Sealants in Milpitas:",
            },
            {
                type: "paragraph",
                text: "At Sethi Virdi DDS, our dental professionals have extensive experience in providing dental sealant services. We prioritize your comfort and satisfaction, ensuring a pleasant and stress-free experience during the procedure. Here's what you can expect during your dental sealant appointment:",
            },
            {
                type: "list",
                items: [
                    "**Thorough Examination:** Our skilled dentists will examine your teeth to identify areas prone to decay and determine the suitability of dental sealants for your oral health needs.",
                    "**Gentle Application:** The process of applying dental sealants is simple and painless. The teeth are thoroughly cleaned, and the sealant material is painted onto the chewing surfaces. A special curing light may be used to harden the sealant.",
                    "**Personalized Care:** Our dental team will take the time to understand your specific requirements and provide personalized advice on maintaining optimal oral hygiene.",
                ],
            },
            {
                type: "heading",
                level: 2,
                text: "Why Choose Sethi Virdi DDS for Dental Sealants?",
            },
            {
                type: "list",
                items: [
                    "**Experienced Dentists:** Our dental professionals have a wealth of experience in providing effective dental sealant treatments.",
                    "**State-of-the-Art Facility:** We utilize the latest dental technology and equipment to deliver high-quality and precise dental care.",
                    "**Patient-Centered Approach:** Your comfort and well-being are our top priorities. We ensure a warm and welcoming environment for all our patients.",
                    "**Comprehensive Dental Services:** Beyond dental sealants, we offer a wide range of dental services to address all your oral health needs under one roof.",
                ],
            },
            {
                type: "paragraph",
                text: "Protect your smile from cavities and maintain excellent oral health with dental sealants from Sethi Virdi DDS.",
            },
            {
                type: "paragraph",
                text: "Schedule your appointment today by calling [(408) 263-1255](tel:+14082631255). Let us help you achieve a cavity-free and beautiful smile.",
            },
        ],
    },
];
