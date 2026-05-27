import svgPaths from "../assets/svg-paths";
import { LearnMoreLink, OutlinedButton } from "./shared/primitives";

function CoreBankingIcon() {
  return (
    <div className="h-[49px] relative shrink-0 w-[47px]">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 47 49"
      >
        <g>
          <path d={svgPaths.p5b71300} stroke="url(#core-banking-icon-grad)" />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="core-banking-icon-grad"
            x1="10.0491"
            x2="56.4399"
            y1="-37.7616"
            y2="-24.0174"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#8B8B8B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function DigitalBankingIcon() {
  return (
    <div className="h-[49px] relative shrink-0 w-[47px]">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 47 49"
      >
        <g>
          <path d={svgPaths.p3b3d7a80} stroke="url(#digital-banking-icon-grad)" />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="digital-banking-icon-grad"
            x1="9.0592"
            x2="50.868"
            y1="-29.6748"
            y2="-17.2656"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#8B8B8B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function OpenBankingIcon() {
  return (
    <div className="h-[49px] relative shrink-0 w-[47px]">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 47 49"
      >
        <g>
          <path
            d={svgPaths.p29dbb880}
            stroke="url(#open-banking-icon-grad)"
            strokeWidth="0.5"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="open-banking-icon-grad"
            x1="11.5396"
            x2="54.3415"
            y1="-30.6272"
            y2="-17.9249"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#8B8B8B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function LoanOriginationIcon() {
  return (
    <div className="h-[49px] relative shrink-0 w-[47px]">
      <div className="absolute inset-[20.9%_17.53%_0_0]">
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 38.7589 38.7571"
        >
          <g>
            <path d={svgPaths.p3aaf9f80} stroke="url(#loan-origination-grad-1)" />
            <path d={svgPaths.p35e24800} stroke="url(#loan-origination-grad-2)" />
            <path d={svgPaths.p1beea2b0} stroke="url(#loan-origination-grad-3)" />
            <path d={svgPaths.p126a980} stroke="url(#loan-origination-grad-4)" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="loan-origination-grad-1" x1="4.42716" x2="24.8519" y1="-19.5032" y2="-13.4418">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#8B8B8B" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="loan-origination-grad-2" x1="24.6875" x2="45.1106" y1="-19.5032" y2="-13.4429">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#8B8B8B" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="loan-origination-grad-3" x1="24.6891" x2="45.1123" y1="0.759029" y2="6.81938">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#8B8B8B" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="loan-origination-grad-4" x1="4.42558" x2="24.8503" y1="0.759029" y2="6.82043">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#8B8B8B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function LoanManagementIcon() {
  return (
    <div className="h-[49px] relative shrink-0 w-[47px]">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 47 49"
      >
        <g>
          <path d={svgPaths.p2f3b4400} stroke="url(#loan-mgmt-icon-grad)" />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="loan-mgmt-icon-grad"
            x1="9.27389"
            x2="52.0744"
            y1="-30.7795"
            y2="-18.0777"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#8B8B8B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

type SolutionCardProps = {
  icon: React.ReactNode;
  title: string;
  body: string;
  badge?: string;
  dimTitle?: boolean;
};

function SolutionCard({ icon, title, body, badge, dimTitle }: SolutionCardProps) {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start relative shrink-0">
      {badge ? (
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row items-end justify-center size-full">
            <div className="content-stretch flex items-end justify-between pr-[26px] relative size-full">
              {icon}
              <p className="[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic opacity-60 relative shrink-0 text-brand-fg text-[14px] uppercase whitespace-nowrap">
                {badge}
              </p>
            </div>
          </div>
        </div>
      ) : (
        icon
      )}
      <div className="[word-break:break-word] content-stretch flex flex-col font-['Archivo:Regular',sans-serif] font-normal gap-[32px] items-start relative shrink-0 text-brand-fg">
        <p
          className={`leading-[1.2] relative shrink-0 text-[22px] w-[263.718px] ${
            dimTitle ? "opacity-90" : ""
          }`}
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {title}
        </p>
        <p
          className="leading-[1.3] opacity-70 relative shrink-0 text-[16px] w-[268.506px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {body}
        </p>
      </div>
      <LearnMoreLink />
    </div>
  );
}

const CORE_BANKING_BODY =
  "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.";

const DIGITAL_BANKING_BODY = `N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients `;

const OPEN_BANKING_BODY =
  "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.";

function SolutionsCardsGrid() {
  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-x-[40px] gap-y-[40px] items-start w-full dt:w-[613.012px] dt:absolute dt:left-[calc(50%+10px)] dt:top-[47.09px] dt:flex dt:flex-wrap dt:content-start dt:gap-[52px_76px]">
      <SolutionCard icon={<CoreBankingIcon />} title="Core Banking CB7" body={CORE_BANKING_BODY} />
      <SolutionCard icon={<DigitalBankingIcon />} title="Digital Banking N7" body={DIGITAL_BANKING_BODY} dimTitle />
      <SolutionCard icon={<OpenBankingIcon />} title="Open Banking" body={OPEN_BANKING_BODY} />
      <SolutionCard icon={<LoanOriginationIcon />} title="Loan Origination System" body={DIGITAL_BANKING_BODY} badge="NBFC" dimTitle />
      <SolutionCard icon={<LoanManagementIcon />} title="Loan Management System" body={DIGITAL_BANKING_BODY} badge="NBFC" dimTitle />
    </div>
  );
}

function SolutionsHeadlineAndCta() {
  return (
    <div className="relative content-stretch flex flex-col gap-[28px] dt:gap-[48px] items-start w-full dt:w-auto dt:absolute dt:left-[80px] dt:top-[47.09px]">
      <p
        className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-brand-fg text-[clamp(1.75rem,6vw,2.3rem)] dt:text-[37px] tracking-[-0.37px] w-full dt:w-[433px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        All of our solutions are tailor-made to your needs
      </p>
      <OutlinedButton label="request demo" />
    </div>
  );
}

function SolutionsBackgroundBlob() {
  return (
    <div className="absolute left-[calc(66.67%+8.64px)] size-[556.772px] top-[447.5px]">
      <div className="absolute inset-[-35.92%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 956.772 956.772"
        >
          <g filter="url(#solutions-bg-blur)" opacity="0.1">
            <circle
              cx="478.386"
              cy="478.386"
              fill="url(#solutions-bg-grad)"
              r="278.386"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="956.772"
              id="solutions-bg-blur"
              width="956.772"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="bg" />
              <feBlend in="SourceGraphic" in2="bg" result="shape" />
              <feGaussianBlur result="blur" stdDeviation="100" />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="solutions-bg-grad"
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

export default function SolutionsSection() {
  return (
    <section
      className="bg-brand-bg relative w-full overflow-clip flex flex-col gap-12 px-5 py-16 dt:block dt:h-[1177px] dt:w-[1440px] dt:px-0 dt:py-0"
      aria-label="Solutions"
    >
      <SolutionsBackgroundBlob />
      <SolutionsHeadlineAndCta />
      <SolutionsCardsGrid />
    </section>
  );
}
