import { useEffect } from "react";
import {
  CapabilitiesShowcase,
  CaseStudiesGridSection,
  CaseStudiesIntroSection,
  CoreBankingShowcase,
  FinalCtaSection,
  FooterSection,
  HeaderNav,
  HeroSection,
  InsightsSection,
  PaperlessCalloutPrimary,
  SolutionsSection,
} from "../sections";

export default function RefactoredRoute() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-brand-bg">
      <HeaderNav />
      <main className="flex w-full flex-col items-center">
        <HeroSection />
        <SolutionsSection />
        <CoreBankingShowcase />
        <CapabilitiesShowcase />
        <PaperlessCalloutPrimary />
        <InsightsSection />
        <CaseStudiesIntroSection />
        <CaseStudiesGridSection />
        <FinalCtaSection />
        <FooterSection />
      </main>
    </div>
  );
}
