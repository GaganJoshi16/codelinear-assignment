import svgPaths from "../assets/svg-paths";
import { phoneShellMask } from "../assets/masks";
import { AppImage } from "../components/ui";

const MOBILE_SCREENSHOT_ALTS: Record<string, string> = {
  "/mobile-banking-home.png": "Mobile banking home screen",
  "/mobile-banking-stats.png": "Mobile banking statistics screen",
  "/mobile-banking-profile.png": "Mobile banking profile screen",
};

/**
 * Large light-blue insights / feature-highlight section. Layout:
 *
 *   1. A white 116px-tall banner band that scrolls the marquee phrase
 *      "N7 / CB7 Say wave to the new way of banking" twice.
 *   2. A 2647px-tall #e9f4f9 panel containing:
 *        - A giant ghosted "N7" backdrop wordmark plus several
 *          decorative gradient blobs and an outlined vector line.
 *        - Three feature highlight rows, each pairing an iPhone mockup
 *          with a heading + body + bullet list of selling points.
 *        - A dark "paper-less" callout card embedded near the bottom.
 *        - A "Digital banking out-of-the-box" pitch with REQUEST DEMO
 *          button + gradient "learn more" link.
 */

function MarqueeDecorativeStarGlyph() {
  return (
    <div className="h-[58px] relative shrink-0 w-[58.002px]" data-name="Vector">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 58.0023 58"
      >
        <path d={svgPaths.p332f8b00} fill="#000D12" opacity="0.3" />
      </svg>
    </div>
  );
}

function MarqueeHandWaveIcon() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none rotate-180">
        <div
          className="h-[66px] relative w-[93.065px]"
          data-name="https://lottiefiles.com/animations/hand-wave-animation-Y3i4NmO8TS"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <AppImage
              alt="Animated hand wave illustration"
              className="absolute h-full left-[0.67%] max-w-none top-0 w-[99.33%]"
              src="/hand-wave.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function MarqueeBrandPhrase({
  brand,
  gradientDirectionDeg,
}: {
  brand: string;
  gradientDirectionDeg: number;
}) {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <MarqueeDecorativeStarGlyph />
      <p
        className="[word-break:break-word] bg-clip-text font-['Archivo:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[47px] text-[transparent] whitespace-nowrap"
        style={{
          fontVariationSettings: "'wdth' 100",
          backgroundImage: `linear-gradient(${gradientDirectionDeg}deg, rgb(0, 180, 253) 5.6799%, rgb(0, 58, 206) 86.975%)`,
        }}
      >
        {brand}
      </p>
      <MarqueeDecorativeStarGlyph />
      <p
        className="[word-break:break-word] font-['Archivo:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-brand-bg text-[47px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Say
      </p>
      <MarqueeHandWaveIcon />
      <p
        className="[word-break:break-word] font-['Archivo:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-brand-bg text-[47px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        to the new way of banking
      </p>
    </div>
  );
}

function TopBrandMarquee() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-start left-[-14px] top-[24.83px]">
      <MarqueeBrandPhrase brand="N7" gradientDirectionDeg={108.187} />
      <MarqueeBrandPhrase brand="CB7" gradientDirectionDeg={116.478} />
    </div>
  );
}

function TopMarqueeBanner() {
  return (
    <div className="bg-white h-[116px] overflow-clip relative shrink-0 w-full dt:w-[1440px]">
      <TopBrandMarquee />
    </div>
  );
}

function CheckCircleIcon() {
  return (
    <div className="h-[31.408px] relative shrink-0 w-[29.98px]">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 29.9801 31.4077"
      >
        <g>
          <circle
            cx="14.8862"
            cy="16.0496"
            fill="url(#insights-check-gradient)"
            r="9.26182"
          />
          <g>
            <path d={svgPaths.p287f1d00} fill="#E9F4F9" />
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="insights-check-gradient"
            x1="-9.11865"
            x2="25.1246"
            y1="-15.9254"
            y2="-17.5505"
          >
            <stop stopColor="#00B4FD" />
            <stop offset="0.815786" stopColor="#003ACE" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function IPhoneMockup({ screenshotSrc }: { screenshotSrc: string }) {
  return (
    <div className="relative flex w-full justify-center overflow-hidden h-[380px] sm:h-[480px] dt:h-auto dt:w-auto dt:overflow-visible dt:contents">
      <div className="origin-top scale-[0.7] sm:scale-[0.88] dt:scale-100 dt:contents">
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="iPhone 13 Pro"
    >
      <div
        className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1"
        data-name="iPhone-13-Pro-Front"
      >
        <div
          className="col-1 h-[542.9px] ml-0 mt-0 relative row-1 w-[268.312px]"
          data-name="Blue"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <AppImage
              alt="iPhone device frame"
              className="absolute left-0 max-w-none size-full top-0"
              src="/iphone-shell.png"
            />
          </div>
        </div>
        <div
          className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[14.93px] mt-[12.41px] place-items-start relative row-1"
          data-name="Mockup"
        >
          <div
            className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1"
            data-name="Mask group"
          >
            <div
              className="col-1 h-[520.462px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.789px_1.118px] mask-size-[239.258px_517.755px] ml-[-0.79px] mt-[-1.12px] relative row-1 w-[240.539px]"
              style={{ maskImage: `url('${phoneShellMask}')` }}
              data-name="Design"
            >
              <AppImage
                alt={MOBILE_SCREENSHOT_ALTS[screenshotSrc] ?? "Mobile banking app screenshot"}
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                src={screenshotSrc}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}

function ComplianceHighlightHeadline() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0 w-[269px]">
      <p
        className="[word-break:break-word] flex-[1_0_0] font-['Archivo:Medium',sans-serif] font-medium leading-[1.3] min-w-px relative text-brand-bg text-[16px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Fully compliant with regulatory requirement
      </p>
    </div>
  );
}

function ComplianceHighlightCopy() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <ComplianceHighlightHeadline />
      <p
        className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] opacity-70 relative shrink-0 text-brand-bg text-[16px] w-[268.506px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank’s operational-risk protocols and procedures.
      </p>
    </div>
  );
}

function ComplianceBulletPreIntegratedSecurity() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0 w-[302px]">
      <CheckCircleIcon />
      <p
        className="[word-break:break-word] flex-[1_0_0] font-['Archivo:Medium',sans-serif] font-medium leading-[1.3] min-w-px opacity-70 relative text-brand-bg text-[16px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Pre-integrated Security System
      </p>
    </div>
  );
}

function ComplianceBulletFullyCompliant() {
  return (
    <div className="content-stretch flex gap-[5px] items-start relative shrink-0 w-[302px]">
      <CheckCircleIcon />
      <p
        className="[word-break:break-word] flex-[1_0_0] font-['Archivo:Medium',sans-serif] font-medium leading-[1.3] min-w-px opacity-70 relative text-brand-bg text-[16px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Fully Compliant With Regulatory Requirement
      </p>
    </div>
  );
}

function ComplianceBulletDigitallyConnectedCore() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0 w-[302px]">
      <CheckCircleIcon />
      <p
        className="[word-break:break-word] flex-[1_0_0] font-['Archivo:Medium',sans-serif] font-medium leading-[1.3] min-w-px opacity-70 relative text-brand-bg text-[16px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Digitally Connected Core
      </p>
    </div>
  );
}

function ComplianceBulletList() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <ComplianceBulletPreIntegratedSecurity />
      <ComplianceBulletFullyCompliant />
      <ComplianceBulletDigitallyConnectedCore />
    </div>
  );
}

function ComplianceHighlightContent() {
  return (
    <div className="content-stretch flex flex-col gap-[43px] items-start relative shrink-0">
      <ComplianceHighlightCopy />
      <ComplianceBulletList />
    </div>
  );
}

function ComplianceFeatureHighlight() {
  return (
    <div className="content-stretch flex flex-col gap-10 dt:flex-row dt:gap-[80px] items-center relative shrink-0 w-full dt:w-auto">
      <IPhoneMockup screenshotSrc="/mobile-banking-home.png" />
      <ComplianceHighlightContent />
    </div>
  );
}

function NoLegacyHighlightHeadline() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0 w-[269px]">
      <p
        className="[word-break:break-word] flex-[1_0_0] font-['Archivo:Medium',sans-serif] font-medium leading-[1.3] min-w-px relative text-brand-bg text-[16px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        No legacy IT systems
      </p>
    </div>
  );
}

function NoLegacyHighlightCopy() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <NoLegacyHighlightHeadline />
      <p
        className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] opacity-70 relative shrink-0 text-brand-bg text-[16px] w-[268.506px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.
      </p>
    </div>
  );
}

function NoLegacyBulletAdaptiveApi() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0 w-full">
      <CheckCircleIcon />
      <p
        className="[word-break:break-word] flex-[1_0_0] font-['Archivo:Medium',sans-serif] font-medium leading-[1.3] min-w-px opacity-70 relative text-brand-bg text-[16px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >{`Adaptive & Intelligent API monetization`}</p>
    </div>
  );
}

function NoLegacyBulletAmbientUx() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0 w-full">
      <CheckCircleIcon />
      <p
        className="[word-break:break-word] flex-[1_0_0] font-['Archivo:Medium',sans-serif] font-medium leading-[1.3] min-w-px opacity-70 relative text-brand-bg text-[16px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Ambient User Experience
      </p>
    </div>
  );
}

function NoLegacyBulletCloudNative() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0 w-full">
      <CheckCircleIcon />
      <p
        className="[word-break:break-word] flex-[1_0_0] font-['Archivo:Medium',sans-serif] font-medium leading-[1.3] min-w-px opacity-70 relative text-brand-bg text-[16px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Cloud-native With lower TCO
      </p>
    </div>
  );
}

function NoLegacyBulletList() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[269px]">
      <NoLegacyBulletAdaptiveApi />
      <NoLegacyBulletAmbientUx />
      <NoLegacyBulletCloudNative />
    </div>
  );
}

function NoLegacyHighlightContent() {
  return (
    <div className="content-stretch flex flex-col gap-[43px] items-start relative shrink-0">
      <NoLegacyHighlightCopy />
      <NoLegacyBulletList />
    </div>
  );
}

function NoLegacyFeatureHighlight() {
  return (
    <div className="content-stretch flex flex-col-reverse gap-10 dt:flex-row dt:gap-[76px] items-center relative shrink-0 w-full dt:w-auto">
      <NoLegacyHighlightContent />
      <IPhoneMockup screenshotSrc="/mobile-banking-stats.png" />
    </div>
  );
}

function NoBranchesHighlightHeadline() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0 w-[269px]">
      <p
        className="[word-break:break-word] flex-[1_0_0] font-['Archivo:Medium',sans-serif] font-medium leading-[1.3] min-w-px relative text-brand-bg text-[16px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        No traditional branches
      </p>
    </div>
  );
}

function NoBranchesHighlightCopy() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <NoBranchesHighlightHeadline />
      <p
        className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] opacity-70 relative shrink-0 text-brand-bg text-[16px] w-[268.506px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.’
      </p>
    </div>
  );
}

function NoBranchesBulletBranchlessPaperless() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <CheckCircleIcon />
      <p
        className="[word-break:break-word] font-['Archivo:Medium',sans-serif] font-medium leading-[1.3] opacity-70 relative shrink-0 text-brand-bg text-[16px] w-[268.414px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >{`Branchless & Paperless Banking`}</p>
    </div>
  );
}

function NoBranchesBulletDigitalTransformation() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <CheckCircleIcon />
      <p
        className="[word-break:break-word] font-['Archivo:Medium',sans-serif] font-medium leading-[1.3] opacity-70 relative shrink-0 text-brand-bg text-[16px] w-[268.414px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Digital Transformation Capability
      </p>
    </div>
  );
}

function NoBranchesBulletOptimizedScalable() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <CheckCircleIcon />
      <p
        className="[word-break:break-word] font-['Archivo:Medium',sans-serif] font-medium leading-[1.3] opacity-70 relative shrink-0 text-brand-bg text-[16px] w-[268.414px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Optimized, Adoptable and Scalable
      </p>
    </div>
  );
}

function NoBranchesBulletList() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <NoBranchesBulletBranchlessPaperless />
      <NoBranchesBulletDigitalTransformation />
      <NoBranchesBulletOptimizedScalable />
    </div>
  );
}

function NoBranchesHighlightContent() {
  return (
    <div className="content-stretch flex flex-col gap-[43px] items-start relative shrink-0">
      <NoBranchesHighlightCopy />
      <NoBranchesBulletList />
    </div>
  );
}

function NoBranchesFeatureHighlight() {
  return (
    <div className="content-stretch flex flex-col gap-10 dt:flex-row dt:gap-[80px] items-center relative shrink-0 w-full dt:w-auto">
      <IPhoneMockup screenshotSrc="/mobile-banking-profile.png" />
      <NoBranchesHighlightContent />
    </div>
  );
}

function FeatureHighlightsStack() {
  return (
    <div className="order-2 relative content-stretch flex flex-col gap-16 dt:gap-[110px] items-center w-full dt:w-auto dt:absolute dt:left-[calc(41.67%+22px)] dt:top-[100px]">
      <ComplianceFeatureHighlight />
      <NoLegacyFeatureHighlight />
      <NoBranchesFeatureHighlight />
    </div>
  );
}

function PaperlessCalloutCopy() {
  return (
    <div className="dt:-translate-y-1/2 [word-break:break-word] relative content-stretch flex flex-col font-['Archivo:Regular',sans-serif] font-normal gap-[32px] items-start text-brand-fg w-full dt:w-auto dt:absolute dt:left-[65px] dt:top-[calc(50%-0.22px)]">
      <p
        className="leading-[1.2] relative shrink-0 text-[clamp(2rem,7vw,2.6rem)] dt:text-[53px] tracking-[-0.53px] w-full dt:w-[607.835px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Take the full advantage of going paper-less now.
      </p>
      <p
        className="leading-[1.3] opacity-70 relative shrink-0 text-[16px] w-full dt:w-[462.919px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >{`N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations `}</p>
    </div>
  );
}

function PaperlessCalloutButtons() {
  return (
    <div className="dt:-translate-y-1/2 relative content-stretch flex flex-col sm:flex-row gap-6 dt:gap-[40px] items-start w-full dt:w-auto dt:absolute dt:left-[757px] dt:top-1/2">
      <div className="content-stretch flex items-center justify-center px-[59px] py-[15px] relative rounded-[10px] shrink-0">
        <div
          aria-hidden="true"
          className="absolute border border-brand-fg border-solid inset-0 pointer-events-none rounded-[10px]"
        />
        <p className="[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-brand-fg text-[15px] uppercase whitespace-nowrap">
          Contact Us
        </p>
      </div>
      <div
        className="content-stretch flex items-center justify-center px-[51px] py-[15px] relative rounded-[10px] shrink-0"
        style={{
          backgroundImage:
            "linear-gradient(141.821deg, rgb(0, 180, 253) 5.6799%, rgb(0, 58, 206) 86.975%)",
        }}
      >
        <p className="[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[15px] text-white uppercase whitespace-nowrap">
          REQUEST DEMO
        </p>
      </div>
    </div>
  );
}

function PaperlessCalloutCard() {
  return (
    <div
      className="order-3 relative w-full overflow-clip rounded-[27px] flex flex-col gap-8 p-8 dt:block dt:p-0 dt:gap-0 dt:h-[427px] dt:w-[1279px] dt:absolute dt:left-[81px] dt:top-[2104.43px]"
      style={{
        backgroundImage:
          "linear-gradient(115.899deg, rgb(3, 30, 42) 12.22%, rgb(0, 13, 18) 59.256%)",
      }}
    >
      <p
        className="hidden dt:block [word-break:break-word] absolute font-['Archivo:Medium',sans-serif] font-medium leading-[1.2] left-[620.56px] opacity-50 text-[572.632px] text-[transparent] top-[-160.72px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        N7
      </p>
      <PaperlessCalloutCopy />
      <PaperlessCalloutButtons />
    </div>
  );
}

function PitchCopy() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Archivo:Regular',sans-serif] font-normal gap-[16px] items-start justify-center relative shrink-0 text-brand-bg">
      <p
        className="leading-[1.2] opacity-95 relative shrink-0 text-[clamp(2rem,7vw,2.6rem)] dt:text-[53px] tracking-[-0.53px] w-full dt:w-[438.987px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Digital banking out-of-the-box
      </p>
      <p
        className="leading-[1.3] opacity-70 relative shrink-0 text-[16px] w-full dt:w-[379.032px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        N7 helps your financial institution improve the client experience, automate and optimize procedures
      </p>
    </div>
  );
}

function PitchRequestDemoButton() {
  return (
    <div
      className="content-stretch flex items-center justify-center px-[51px] py-[15px] relative rounded-[10px] shrink-0"
      style={{
        backgroundImage:
          "linear-gradient(141.821deg, rgb(0, 180, 253) 5.6799%, rgb(0, 58, 206) 86.975%)",
      }}
    >
      <p className="[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[15px] text-white uppercase whitespace-nowrap">
        REQUEST DEMO
      </p>
    </div>
  );
}

function GradientLearnMoreArrowGlyph() {
  return (
    <div className="h-[8.422px] relative w-[7.954px]">
      <div className="absolute inset-[-4.16%_-7.35%_0_-1.47%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 8.65572 8.77279"
        >
          <g>
            <path
              d={svgPaths.p2fcc2700}
              stroke="url(#pitch-arrow-gradient-a)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.935782"
            />
            <path
              d={svgPaths.p5869e80}
              stroke="url(#pitch-arrow-gradient-b)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.935782"
            />
          </g>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="pitch-arrow-gradient-a"
              x1="-9.20758"
              x2="3.71251"
              y1="14.3206"
              y2="17.3481"
            >
              <stop stopColor="#00B4FD" />
              <stop offset="1" stopColor="#003ACE" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="pitch-arrow-gradient-b"
              x1="-10.6092"
              x2="-6.14394"
              y1="-4.73644"
              y2="-6.84557"
            >
              <stop stopColor="#00B4FD" />
              <stop offset="1" stopColor="#003ACE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function GradientLearnMoreArrowBox() {
  return (
    <div className="h-[14.505px] overflow-clip relative w-[13.569px]" data-name="3">
      <div className="absolute flex items-center justify-center left-[0.53px] size-[11.58px] top-[1.23px]">
        <div className="flex-none rotate-45">
          <GradientLearnMoreArrowGlyph />
        </div>
      </div>
    </div>
  );
}

function GradientLearnMoreLabel() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <p
        className="[word-break:break-word] bg-clip-text font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[14px] text-[transparent] text-right uppercase whitespace-nowrap"
        style={{
          backgroundImage:
            "linear-gradient(114.117deg, rgb(0, 180, 253) 79.763%, rgb(0, 58, 206) 91.369%)",
        }}
      >
        learn more
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <GradientLearnMoreArrowBox />
        </div>
      </div>
    </div>
  );
}

function GradientLearnMoreLink() {
  return (
    <div
      className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0"
      data-name="Component 4"
    >
      <GradientLearnMoreLabel />
      <div className="h-0 relative shrink-0 w-[32.577px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 32.5773 1"
          >
            <line
              stroke="url(#pitch-underline-gradient)"
              x2="32.5773"
              y1="0.5"
              y2="0.5"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="pitch-underline-gradient"
                x1="-15.8787"
                x2="-14.6796"
                y1="-5.72311"
                y2="7.297"
              >
                <stop stopColor="#00B4FD" />
                <stop offset="1" stopColor="#003ACE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function PitchHeadline() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0">
      <PitchCopy />
      <PitchRequestDemoButton />
    </div>
  );
}

function DigitalBankingPitchBlock() {
  return (
    <div className="order-1 relative content-stretch flex flex-col gap-[16px] items-start w-full dt:w-auto dt:absolute dt:left-[81px] dt:top-[100px]">
      <PitchHeadline />
      <GradientLearnMoreLink />
    </div>
  );
}

function GhostN7Wordmark() {
  return (
    <p
      className="hidden dt:block [word-break:break-word] absolute font-['Archivo:Medium',sans-serif] font-medium leading-[1.2] left-[calc(16.67%+37px)] opacity-50 text-[572.632px] text-[transparent] top-[-66.74px] whitespace-nowrap"
      style={{ fontVariationSettings: "'wdth' 100" }}
    >
      N7
    </p>
  );
}

function GhostSevenWordmark() {
  return (
    <p
      className="hidden dt:block [word-break:break-word] absolute font-['Archivo:Medium',sans-serif] font-medium leading-[1.2] left-[calc(58.33%+46.92px)] opacity-20 text-[1524.104px] text-[transparent] top-[957.28px] whitespace-nowrap"
      style={{ fontVariationSettings: "'wdth' 100" }}
    >
      7
    </p>
  );
}

function BottomBlueGlowBlob() {
  return (
    <div className="hidden dt:block absolute left-[-364.23px] size-[778.743px] top-[1928.56px]">
      <div className="absolute inset-[-12.84%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 978.743 978.743"
        >
          <g filter="url(#insights-bottom-blob-blur)" opacity="0.1">
            <circle
              cx="489.371"
              cy="489.371"
              fill="url(#insights-bottom-blob-gradient)"
              r="389.371"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="978.743"
              id="insights-bottom-blob-blur"
              width="978.743"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur"
                stdDeviation="50"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="insights-bottom-blob-gradient"
              x1="434.557"
              x2="854.582"
              y1="74.5053"
              y2="155.505"
            >
              <stop stopColor="#00CFFD" />
              <stop offset="1" stopColor="#0015CE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function OutlinedArcVector() {
  return (
    <div className="hidden dt:block absolute inset-[15.8%_66.67%_37.16%_-53%]" data-name="Vector">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1243.25 1245.21"
      >
        <path
          d={svgPaths.pe4fa380}
          opacity="0.2"
          stroke="url(#insights-arc-gradient)"
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="insights-arc-gradient"
            x1="297.465"
            x2="1670.69"
            y1="-1313.1"
            y2="-906.258"
          >
            <stop stopColor="#00B4FD" />
            <stop offset="1" stopColor="#003ACE" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function TopLeftAmberGlowBlob() {
  return (
    <div className="hidden dt:block absolute left-[-85.85px] size-[585.85px] top-[-260.85px]">
      <div className="absolute inset-[-17.07%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 785.85 785.85"
        >
          <g filter="url(#insights-amber-tl-blur)" opacity="0.02">
            <circle
              cx="392.925"
              cy="392.925"
              fill="url(#insights-amber-tl-gradient)"
              r="292.925"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="785.85"
              id="insights-amber-tl-blur"
              width="785.85"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur"
                stdDeviation="50"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="insights-amber-tl-gradient"
              x1="240.173"
              x2="820.703"
              y1="-517.791"
              y2="-379.137"
            >
              <stop stopColor="#FDA700" />
              <stop offset="1" stopColor="#CE5700" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function CenterAmberGlowBlob() {
  return (
    <div className="hidden dt:block absolute left-[calc(41.67%+61.26px)] size-[778.743px] top-[-91.57px]">
      <div className="absolute inset-[-12.84%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 978.743 978.743"
        >
          <g filter="url(#insights-amber-center-blur)" opacity="0.05">
            <circle
              cx="489.371"
              cy="489.371"
              fill="url(#insights-amber-center-gradient)"
              r="389.371"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="978.743"
              id="insights-amber-center-blur"
              width="978.743"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur"
                stdDeviation="50"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="insights-amber-center-gradient"
              x1="286.325"
              x2="1058"
              y1="-721.2"
              y2="-536.894"
            >
              <stop stopColor="#FDA700" />
              <stop offset="1" stopColor="#CE5700" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function InsightsLightPanel() {
  return (
    <section
      className="bg-brand-fg relative w-full overflow-clip flex flex-col gap-16 px-5 py-16 dt:block dt:h-[2647px] dt:w-[1440px] dt:px-0 dt:py-0"
      aria-label="Insights"
    >
      <GhostN7Wordmark />
      <BottomBlueGlowBlob />
      <GhostSevenWordmark />
      <OutlinedArcVector />
      <TopLeftAmberGlowBlob />
      <CenterAmberGlowBlob />
      <FeatureHighlightsStack />
      <PaperlessCalloutCard />
      <DigitalBankingPitchBlock />
    </section>
  );
}

export default function InsightsSection() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TopMarqueeBanner />
      <InsightsLightPanel />
    </div>
  );
}
