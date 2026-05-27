import { lazy, Suspense, useEffect } from "react";
import { HeaderNav, HeroSection } from "../sections";

const SolutionsSection = lazy(() => import("../sections/SolutionsSection"));
const CoreBankingShowcase = lazy(() => import("../sections/CoreBankingShowcase"));
const CapabilitiesShowcase = lazy(() => import("../sections/CapabilitiesShowcase"));
const PaperlessCalloutPrimary = lazy(() => import("../sections/PaperlessCalloutPrimary"));
const InsightsSection = lazy(() => import("../sections/InsightsSection"));
const CaseStudiesIntroSection = lazy(() => import("../sections/CaseStudiesIntroSection"));
const CaseStudiesGridSection = lazy(() => import("../sections/CaseStudiesGridSection"));
const FinalCtaSection = lazy(() => import("../sections/FinalCtaSection"));
const FooterSection = lazy(() => import("../sections/FooterSection"));

function SectionFallback() {
  return null;
}

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
        <Suspense fallback={<SectionFallback />}>
          <SolutionsSection />
          <CoreBankingShowcase />
          <CapabilitiesShowcase />
          <PaperlessCalloutPrimary />
          <InsightsSection />
          <CaseStudiesIntroSection />
          <CaseStudiesGridSection />
          <FinalCtaSection />
          <FooterSection />
        </Suspense>
      </main>
    </div>
  );
}
