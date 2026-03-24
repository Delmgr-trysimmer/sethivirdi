import Hero from "@/components/Hero";
import WelcomeSection from "@/components/WelcomeSection";
import InsuranceSection from "@/components/InsuranceSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WelcomeSection />
      <InsuranceSection />
    </main>
  );
}

