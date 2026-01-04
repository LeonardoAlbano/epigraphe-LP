import { HeroSection } from "@/features/marketing/ui/components/sections/hero-section";
import { CompaniesSection } from "./components/sections/companies-section";
import { ProblemSection } from "./components/sections/problem-section";

export function LandingPage() {
  return (
    <section>
      <HeroSection />
      <CompaniesSection />
      <ProblemSection />
    </section>
  );
}
