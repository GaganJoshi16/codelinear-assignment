import { dashboardScreenMask } from "../assets/masks";
import {
  DashboardScreenFrame,
  LearnMoreLink,
  PrimaryGradientButton,
} from "./shared/primitives";

function DashboardMaskedImage() {
  return (
    <div className="absolute contents left-[10.22px] top-[7.57px]">
      <div
        className="absolute h-[483.136px] left-[10.22px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[631.152px_408.798px] opacity-80 top-[7.57px] w-[631.152px]"
        style={{ maskImage: `url('${dashboardScreenMask}')` }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-full left-[-0.34%] max-w-none top-0 w-[100.46%]"
            src="/aml-dashboard.png"
          />
        </div>
      </div>
    </div>
  );
}

function CoreBankingDashboardFrame() {
  return (
    <div className="relative flex w-full justify-center overflow-hidden h-[260px] sm:h-[360px] dt:contents">
      <div className="origin-top scale-[0.52] sm:scale-[0.72] dt:contents">
        <DashboardScreenFrame className="relative h-[461.422px] w-[651.666px] dt:absolute dt:left-[calc(66.67%-33px)] dt:top-[80.17px]">
          <DashboardMaskedImage />
        </DashboardScreenFrame>
      </div>
    </div>
  );
}

function CoreBankingHeadline() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Archivo:Regular',sans-serif] font-normal gap-[16px] items-start relative shrink-0 text-brand-fg">
      <p
        className="leading-[1.2] relative shrink-0 text-[clamp(2rem,7vw,2.6rem)] dt:text-[53px] tracking-[-0.53px] w-full dt:w-[607.835px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        A complete cloud-based core banking.
      </p>
      <p
        className="leading-[1.3] opacity-80 relative shrink-0 text-[16px] w-full dt:w-[327.188px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Faster time to market with our cloud-based core banking services
      </p>
    </div>
  );
}

function CoreBankingPitch() {
  return (
    <div className="relative content-stretch flex flex-col gap-[16px] items-start dt:absolute dt:left-[80px] dt:top-[156.88px]">
      <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0">
        <CoreBankingHeadline />
        <PrimaryGradientButton label="REQUEST DEMO" />
      </div>
      <LearnMoreLink />
    </div>
  );
}

function Cb7BackdropWordmark() {
  return (
    <p
      className="hidden dt:block [word-break:break-word] absolute font-['Archivo:Medium',sans-serif] font-medium leading-[1.2] left-[-163.31px] opacity-50 text-[572.632px] text-[transparent] top-[-2.25px] whitespace-nowrap"
      style={{ fontVariationSettings: "'wdth' 100" }}
    >
      CB7
    </p>
  );
}

export default function CoreBankingShowcase() {
  return (
    <div className="bg-brand-bg relative w-full overflow-clip flex flex-col-reverse gap-8 px-5 py-16 dt:block dt:h-[619px] dt:w-[1440px] dt:px-0 dt:py-0">
      <Cb7BackdropWordmark />
      <CoreBankingDashboardFrame />
      <CoreBankingPitch />
    </div>
  );
}
