import svgPaths from "../assets/svg-paths";

/**
 * Dark "Get yourself up-to-speed on all the things happening in fintech"
 * intro block — heading + Insights CTA on the left, a hero insight card
 * with an abstract chart on the right, and two smaller insight cards
 * stacked below it. Mapped to the file name CaseStudiesIntroSection
 * because it precedes the case-study grid in the page flow.
 */

function InsightsIntroHeading() {
  return (
    <div className="relative content-stretch flex flex-col gap-[48px] items-start w-full dt:w-auto dt:absolute dt:left-[80px] dt:top-[80.17px]">
      <p
        className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-brand-fg text-[clamp(1.75rem,6vw,2.3rem)] dt:text-[37px] tracking-[-0.37px] w-full dt:w-[463.264px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Get yourself up-to-speed on all the things happening in fintech
      </p>
      <div className="content-stretch flex items-center justify-center px-[59px] py-[15px] relative rounded-[10px] shrink-0">
        <div
          aria-hidden="true"
          className="absolute border border-brand-fg border-solid inset-0 pointer-events-none rounded-[10px]"
        />
        <p className="[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-brand-fg text-[15px] uppercase whitespace-nowrap">
          Insights
        </p>
      </div>
    </div>
  );
}

function FeaturedInsightChartArt() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[218.18px] left-1/2 top-1/2 w-[257.198px]">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 257.198 218.18"
      >
        <g>
          <path d={svgPaths.p24c12780} fill="#00B4FD" />
          <path d={svgPaths.p3f579070} fill="#00B4FD" />
          <path d={svgPaths.p6cf0600} fill="#00B4FD" />
          <path d={svgPaths.p28b12280} fill="#00B4FD" />
        </g>
      </svg>
    </div>
  );
}

function FeaturedInsightChartFrame() {
  return (
    <div className="dt:-translate-y-1/2 absolute bg-brand-surface-chart h-[267px] left-[24px] overflow-clip rounded-[8px] top-[24px] dt:top-1/2 w-[295px]">
      <FeaturedInsightChartArt />
    </div>
  );
}

function InsightAuthorByline() {
  return (
    <div className="content-stretch flex font-['Archivo:Regular',sans-serif] font-normal gap-[14px] items-start leading-[1.3] relative shrink-0 text-brand-accent-soft text-[14px] whitespace-nowrap">
      <p className="opacity-80 relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        David Grohl
      </p>
      <p className="opacity-80 relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        17/08/24
      </p>
    </div>
  );
}

function FeaturedInsightCopy() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[11px] items-start left-[351.88px] top-[39.91px]">
      <p className="font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic opacity-80 relative shrink-0 text-brand-eyebrow text-[12px] uppercase whitespace-nowrap">
        getting started
      </p>
      <p
        className="font-['Archivo:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-brand-fg text-[27px] w-[289.132px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        How to transition from a traditional to a digital bank
      </p>
      <InsightAuthorByline />
    </div>
  );
}

function FeaturedInsightCard() {
  return (
    <div className="relative flex w-full justify-center overflow-hidden h-[200px] sm:h-[280px] dt:h-auto dt:w-auto dt:overflow-visible dt:block">
      <div className="origin-top scale-[0.45] sm:scale-[0.62] dt:scale-100 dt:contents">
        <div className="relative bg-brand-surface-card h-[318px] overflow-clip rounded-[18px] w-[670px] dt:absolute dt:left-[calc(41.67%+90px)] dt:top-[80px]">
          <FeaturedInsightChartFrame />
      <div className="absolute content-stretch flex items-center justify-center left-[351.88px] px-[111px] py-[10px] rounded-[10px] top-[244px]">
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(233,244,249,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]"
        />
        <p className="[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[12px] text-[rgba(233,244,249,0.5)] uppercase whitespace-nowrap">
          read more
        </p>
      </div>
          <FeaturedInsightCopy />
        </div>
      </div>
    </div>
  );
}

function CompactInsightCopy() {
  return (
    <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[11px] items-start left-1/2 top-[38px]">
      <p className="font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic opacity-80 relative shrink-0 text-brand-eyebrow text-[12px] uppercase whitespace-nowrap">
        getting started
      </p>
      <p
        className="font-['Archivo:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-brand-fg text-[22px] dt:text-[27px] w-[259.065px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        How to transition from a traditional to a digital bank
      </p>
      <InsightAuthorByline />
    </div>
  );
}

function CompactInsightCard() {
  return (
    <div className="bg-brand-surface-card h-[318px] overflow-clip relative rounded-[18px] shrink-0 w-[320.5px]">
      <CompactInsightCopy />
      <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-1/2 px-[111px] py-[10px] rounded-[10px] top-[250px]">
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(233,244,249,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]"
        />
        <p className="[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[12px] text-[rgba(233,244,249,0.5)] uppercase whitespace-nowrap">
          read more
        </p>
      </div>
    </div>
  );
}

function CompactInsightCardsRow() {
  return (
    <div className="relative content-stretch flex flex-col items-center gap-8 w-full dt:flex-row dt:gap-[29px] dt:items-start dt:w-[670px] dt:absolute dt:left-[calc(41.67%+90px)] dt:top-[431px]">
      <CompactInsightCard />
      <CompactInsightCard />
    </div>
  );
}

function ReadAllInsightsArrowGlyph() {
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
              stroke="#00B4FD"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.935782"
            />
            <path
              d={svgPaths.p5869e80}
              stroke="#00B4FD"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.935782"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ReadAllInsightsArrowBox() {
  return (
    <div className="h-[14.505px] overflow-clip relative w-[13.569px]" data-name="3">
      <div className="absolute flex items-center justify-center left-[0.53px] size-[11.58px] top-[1.23px]">
        <div className="flex-none rotate-45">
          <ReadAllInsightsArrowGlyph />
        </div>
      </div>
    </div>
  );
}

function ReadAllInsightsLabel() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-brand-accent-cyan text-[14px] text-right uppercase whitespace-nowrap">
        read all insights
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <ReadAllInsightsArrowBox />
        </div>
      </div>
    </div>
  );
}

function ReadAllInsightsLink() {
  return (
    <div
      className="relative content-stretch flex flex-col gap-[3px] items-start dt:absolute dt:left-[calc(83.33%-1.57px)] dt:top-[767px]"
      data-name="Component 1"
    >
      <ReadAllInsightsLabel />
      <div className="h-0 relative shrink-0 w-[32.577px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 32.5773 1"
          >
            <line stroke="#00B4FD" x2="32.5773" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function InsightsBackgroundGlow() {
  return (
    <div className="hidden dt:block absolute left-[58.23px] size-[556.772px] top-[160.23px]">
      <div className="absolute inset-[-35.92%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 956.772 956.772"
        >
          <g filter="url(#insights-intro-glow-blur)" opacity="0.1">
            <circle
              cx="478.386"
              cy="478.386"
              fill="url(#insights-intro-glow-gradient)"
              r="278.386"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="956.772"
              id="insights-intro-glow-blur"
              width="956.772"
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
                stdDeviation="100"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="insights-intro-glow-gradient"
              x1="333.216"
              x2="884.931"
              y1="-387.128"
              y2="-255.355"
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

export default function CaseStudiesIntroSection() {
  return (
    <div className="bg-brand-bg relative w-full overflow-clip flex flex-col gap-10 px-5 py-16 dt:block dt:h-[853px] dt:w-[1440px] dt:px-0 dt:py-0">
      <InsightsBackgroundGlow />
      <InsightsIntroHeading />
      <FeaturedInsightCard />
      <CompactInsightCardsRow />
      <ReadAllInsightsLink />
    </div>
  );
}
