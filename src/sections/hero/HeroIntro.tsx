import { OutlinedButton, PrimaryGradientButton } from "../../components/ui";

function HeroHeadlineCopy() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-brand-fg">
      <p
        className="font-['Archivo:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[clamp(2.5rem,9vw,3.25rem)] dt:text-[67px] tracking-[-0.67px] w-full dt:w-[607.835px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        The new foundation of modern banking
      </p>
      <p
        className="font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] opacity-80 relative shrink-0 text-[16px] w-full dt:w-[356.169px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        We drive innovation and growth, provide seamless customer experience and operational excellence
      </p>
    </div>
  );
}

function HeroCtaButtons() {
  return (
    <div className="content-stretch flex flex-wrap gap-[16px] dt:gap-[20px] items-start relative shrink-0">
      <PrimaryGradientButton
        label="REQUEST DEMO"
        paddingClassName="px-[36px] dt:px-[51px] py-[15px]"
      />
      <OutlinedButton
        label="Contact Us"
        paddingClassName="px-[40px] dt:px-[59px] py-[15px]"
      />
    </div>
  );
}

export function HeroIntro() {
  return (
    <div className="relative content-stretch flex flex-col gap-[32px] dt:gap-[52px] items-start w-full dt:w-auto dt:absolute dt:left-[80px] dt:top-[211.96px]">
      <HeroHeadlineCopy />
      <HeroCtaButtons />
    </div>
  );
}