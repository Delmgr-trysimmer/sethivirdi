import Hero from "@/components/Hero";
import WelcomeSection from "@/components/WelcomeSection";
import InsuranceSection from "@/components/InsuranceSection";
import CtaSection from "@/components/CtaSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OurServcies from "@/components/OurServcies";
import BlogSection from "@/components/BlogSection";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WelcomeSection />
      <InsuranceSection />
      <OurServcies />
      <WhyChoose />
      <CtaSection />
      <TestimonialsSection />
      <BlogSection />
    </main>
  );
}

