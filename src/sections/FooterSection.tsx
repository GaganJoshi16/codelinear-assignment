import svgPaths from "../assets/svg-paths";
import { n7WordmarkMask } from "../assets/masks";

/**
 * Page footer — three address blocks (London / Dubai / Pune) paired with
 * navigation columns (Solutions / N7 Banking / Our Socials), a large
 * masked decorative N7 wordmark behind it, and the copyright line.
 */

function FooterLinkArrowGlyph() {
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

function FooterLinkArrowBox() {
  return (
    <div className="h-[14.505px] overflow-clip relative w-[13.569px]" data-name="3">
      <div className="absolute flex items-center justify-center left-[0.53px] size-[11.58px] top-[1.23px]">
        <div className="flex-none rotate-45">
          <FooterLinkArrowGlyph />
        </div>
      </div>
    </div>
  );
}

function FooterNavLink({
  label,
  alignTop,
}: {
  label: string;
  alignTop?: boolean;
}) {
  return (
    <div
      className={`content-stretch flex gap-[14px] ${alignTop ? "items-start" : "items-center justify-center"} relative shrink-0`}
    >
      <p
        className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] opacity-70 relative shrink-0 text-brand-fg text-[16px] w-[136.45px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {label}
      </p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <FooterLinkArrowBox />
        </div>
      </div>
    </div>
  );
}

function LondonHqAddress() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-brand-fg text-[16px]">
      <p
        className="font-['Archivo:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        London
      </p>
      <div
        className="font-['Archivo:Regular',sans-serif] font-normal leading-[0] opacity-70 relative shrink-0 w-[268.506px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[1.3] mb-0">Linktia Infosystems Ltd – CB7,</p>
        <p className="leading-[1.3]">26 Main Road Sundridge,TN14 6EP, England, United Kingdom.</p>
      </div>
    </div>
  );
}

function DubaiOfficeAddress() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[1.3] relative shrink-0 text-brand-fg text-[16px]">
      <p
        className="font-['Archivo:Medium',sans-serif] font-medium relative shrink-0 whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Dubai
      </p>
      <p
        className="font-['Archivo:Regular',sans-serif] font-normal opacity-70 relative shrink-0 w-[268.506px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Linktia Infosystems Ltd – CB7,Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates
      </p>
    </div>
  );
}

function PuneOfficeAddress() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[1.3] relative shrink-0 text-brand-fg text-[16px]">
      <p
        className="font-['Archivo:Medium',sans-serif] font-medium relative shrink-0 whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        London
      </p>
      <p
        className="font-['Archivo:Regular',sans-serif] font-normal opacity-70 relative shrink-0 w-[211.305px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Linktia Infosystems Ltd – CB7,Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India
      </p>
    </div>
  );
}

function SolutionsLinkList() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <FooterNavLink label="Core Banking CB7" />
      <FooterNavLink label="Digital Banking N7" />
      <FooterNavLink label="Open Banking" />
      <FooterNavLink label="Loan Origination System" alignTop />
      <FooterNavLink label="Loan Management System" alignTop />
      <FooterNavLink label="Digital Transformation" alignTop />
    </div>
  );
}

function SolutionsNavColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <p
        className="[word-break:break-word] font-['Archivo:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-brand-fg text-[16px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Solutions
      </p>
      <SolutionsLinkList />
    </div>
  );
}

function LondonAddressWithSolutions() {
  return (
    <div className="content-stretch flex flex-col gap-12 dt:gap-[128px] items-start relative shrink-0">
      <LondonHqAddress />
      <SolutionsNavColumn />
    </div>
  );
}

function N7BankingLinkList() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <FooterNavLink label="About Us" />
      <FooterNavLink label="Solutions" />
      <FooterNavLink label="Contact" />
      <FooterNavLink label="Company" />
      <FooterNavLink label="Careers" />
      <FooterNavLink label="Insights" />
      <FooterNavLink label="Core Team" />
    </div>
  );
}

function N7BankingNavColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <p
        className="[word-break:break-word] font-['Archivo:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-brand-fg text-[16px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        N7 Banking
      </p>
      <N7BankingLinkList />
      <FooterNavLink label="Brand Center" />
    </div>
  );
}

function DubaiAddressWithN7Banking() {
  return (
    <div className="content-stretch flex flex-col gap-12 dt:gap-[107px] items-start relative shrink-0">
      <DubaiOfficeAddress />
      <N7BankingNavColumn />
    </div>
  );
}

function SocialsLinkList() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <FooterNavLink label="LinkedIn" />
      <FooterNavLink label="X" />
    </div>
  );
}

function OurSocialsNavColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <p
        className="[word-break:break-word] font-['Archivo:Medium',sans-serif] font-medium leading-[1.3] relative shrink-0 text-brand-fg text-[16px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Our Socials
      </p>
      <SocialsLinkList />
    </div>
  );
}

function PuneAddressWithSocials() {
  return (
    <div className="content-stretch flex flex-col gap-12 dt:gap-[107px] items-start relative shrink-0">
      <PuneOfficeAddress />
      <OurSocialsNavColumn />
    </div>
  );
}

function FooterColumns() {
  return (
    <div className="relative content-stretch flex flex-col gap-12 items-start w-full dt:flex-row dt:gap-[34px] dt:w-auto dt:absolute dt:left-[calc(33.33%+63.68px)] dt:top-[130px]">
      <LondonAddressWithSolutions />
      <DubaiAddressWithN7Banking />
      <PuneAddressWithSocials />
    </div>
  );
}

function FooterBottomGlow() {
  return (
    <div className="hidden dt:block -translate-x-1/2 absolute h-[556.772px] left-1/2 top-[547.54px] w-[1440px]">
      <div className="absolute inset-[-35.92%_-13.89%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1840 956.772"
        >
          <g filter="url(#footer-bottom-glow-blur)" opacity="0.05">
            <ellipse
              cx="920"
              cy="478.386"
              fill="url(#footer-bottom-glow-gradient)"
              rx="720"
              ry="278.386"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="956.772"
              id="footer-bottom-glow-blur"
              width="1840"
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
              id="footer-bottom-glow-gradient"
              x1="544.541"
              x2="1636.28"
              y1="-387.128"
              y2="287.262"
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

function MaskedN7Wordmark() {
  return (
    <div className="hidden dt:block absolute h-[232px] left-[53px] top-[130.17px] w-[440px]" data-name="Mask group">
      <div
        className="absolute bg-[#01b4fd] inset-[-4.33%_-32.1%_-25.78%_-22.61%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[126.872px_9.983px] mask-size-[399.658px_232.073px]"
        style={{ maskImage: `url('${n7WordmarkMask}')` }}
      />
      <div
        className="absolute inset-[23.15%_2.91%_-31.53%_39.94%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-148.343px_-53.787px] mask-size-[399.658px_232.073px]"
        style={{ maskImage: `url('${n7WordmarkMask}')` }}
      >
        <div className="absolute inset-[-39.77%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 451.44 451.44"
          >
            <g filter="url(#wordmark-blue-glow-blur)">
              <circle cx="225.72" cy="225.72" fill="#013ACF" r="125.72" />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="451.44"
                id="wordmark-blue-glow-blur"
                width="451.44"
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
            </defs>
          </svg>
        </div>
      </div>
      <div
        className="absolute inset-[47.05%_55.72%_-2.03%_15.29%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-39.895px_-109.24px] mask-size-[399.658px_232.073px] mix-blend-color-dodge"
        style={{ maskImage: `url('${n7WordmarkMask}')` }}
      >
        <div className="absolute inset-[-78.4%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 327.553 327.553"
          >
            <g
              filter="url(#wordmark-green-glow-blur)"
              style={{ mixBlendMode: "color-dodge" }}
            >
              <circle cx="163.776" cy="163.776" fill="#74F1AE" r="63.7764" />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="327.553"
                id="wordmark-green-glow-blur"
                width="327.553"
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
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function CopyrightLine() {
  return (
    <p
      className="[word-break:break-word] relative w-full font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] opacity-30 text-brand-fg text-[14px] dt:absolute dt:left-[calc(33.33%+63.68px)] dt:top-[718.96px] dt:w-[779.431px]"
      style={{ fontVariationSettings: "'wdth' 100" }}
    >
      Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
    </p>
  );
}

export default function FooterSection() {
  return (
    <footer className="bg-brand-bg relative w-full overflow-clip flex flex-col gap-12 px-5 py-16 dt:block dt:h-[787px] dt:w-[1440px] dt:px-0 dt:py-0">
      <FooterBottomGlow />
      <MaskedN7Wordmark />
      <FooterColumns />
      <CopyrightLine />
    </footer>
  );
}
