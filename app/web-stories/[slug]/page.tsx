import { Metadata } from "next";
import { notFound } from "next/navigation";
import WebStoryViewer from "@/components/WebStoryViewer";

export const metadata: Metadata = {
  title: "Dental Care Service Milpitas CA | Sethi Virdi DDS",
  description: "Dental Care Service in Milpitas, CA Sethi Virdi DDS offers top-quality dental care. Experience excellence in oral health with our dedicated team."
}

type StoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const storyContent = {
  "dental-care-service-milpitas-ca": {
    title: "Dental Care Service Milpitas CA",
    slides: [
      {
        image: "/images/Web-stories1.jpg",
        alt: "Dental care story slide 1",
      },
      {
        image: "/images/Web-stories2.jpg",
        alt: "Dental care story slide 2",
      },
      {
        image: "/images/Web-stories3.jpg",
        alt: "Dental care story slide 3",
      },
      {
        image: "/images/Web-stories4.jpg",
        alt: "Dental care story slide 4",
      },
      {
        image: "/images/Web-stories5.jpg",
        alt: "Dental care story slide 5",
      },
      {
        image: "/images/Web-stories6.jpg",
        alt: "Dental care story slide 6",
      },
      {
        image: "/images/Web-stories7.jpg",
        alt: "Dental care story slide 7",
      },
      {
        image: "/images/Web-stories8.jpg",
        alt: "Dental care story slide 8",
      },
    ],
  },
} as const;

// export async function generateMetadata({
//   params,
// }: StoryPageProps): Promise<Metadata> {
//   const { slug } = await params;
//   const story = storyContent[slug as keyof typeof storyContent];

//   if (!story) {
//     return {
//       title: "Web Story Not Found - Sethi Virdi DDS",
//     };
//   }

//   return {
//     title: `${story.title} | Web Story | Sethi Virdi DDS`,
//     description: `View the ${story.title} web story from Sethi Virdi DDS.`,
//   };
// }

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = storyContent[slug as keyof typeof storyContent];

  if (!story) {
    notFound();
  }

  return <WebStoryViewer title={story.title} slides={story.slides} />;
}
