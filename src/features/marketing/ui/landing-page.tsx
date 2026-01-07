import { HeroSection } from "@/features/marketing/ui/components/sections/hero-section";
import { CompaniesSection } from "./components/sections/companies-section";
import { ProblemSection } from "./components/sections/problem-section";
import { SolutionSection } from "./components/sections/solution-section";
import { BenefitsSection } from "./components/sections/benefits-section";
import { HowItWorksSection } from "./components/sections/how-it-works-section";
import { FaqSection } from "./components/sections/faq-section";
import { FinalCtaSection } from "./components/sections/final-cta-section";
import { TestimonialsSection } from "./components/sections/testimonials-section";
import { ProjectsSection } from "./components/projects/projects-section";
import { MarketsSection } from "./components/sections/markets-section";

export function LandingPage() {
  return (
    <section>
      <HeroSection />
      <CompaniesSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <FaqSection />
      <MarketsSection />
      <FinalCtaSection />
    </section>
  );
}
