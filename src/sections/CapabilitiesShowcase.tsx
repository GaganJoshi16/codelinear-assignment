import { dashboardScreenMask } from "../assets/masks";
import { AppImage, CheckCircleIcon, DashboardScreenFrame } from "../components/ui";

const FEATURES_COLUMN_ONE = [
  "Customer-On Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
];

const FEATURES_COLUMN_TWO = [
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
];

function CkycDashboardMaskedImage() {
  return (
    <div className="absolute contents left-[10.22px] top-[7.57px]">
      <div
        className="absolute h-[480.829px] left-[10.33px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.114px_0.33px] mask-size-[631.152px_408.798px] opacity-80 top-[7.24px] w-[631.2px]"
        style={{ maskImage: `url('${dashboardScreenMask}')` }}
      >
        <AppImage
          alt="CKYC onboarding dashboard screenshot"
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src="/ckyc-dashboard.png"
        />
      </div>
    </div>
  );
}

function CkycDashboardFrame() {
  return (
    <div className="relative flex w-full justify-center overflow-hidden h-[260px] sm:h-[360px] dt:contents">
      <div className="origin-top scale-[0.52] sm:scale-[0.72] dt:contents">
        <DashboardScreenFrame className="relative h-[461.422px] w-[651.666px] dt:absolute dt:left-[-159px] dt:top-[110px]">
          <CkycDashboardMaskedImage />
        </DashboardScreenFrame>
      </div>
    </div>
  );
}

function FeatureCheckRow({
  label,
  itemsCenter,
  dtWidth,
}: {
  label: string;
  itemsCenter?: boolean;
  dtWidth: string;
}) {
  return (
    <div
      className={`content-stretch flex gap-[5px] relative shrink-0 w-full ${dtWidth} ${
        itemsCenter ? "items-center" : "items-start"
      }`}
    >
      <CheckCircleIcon />
      <p
        className="[word-break:break-word] flex-[1_0_0] font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] min-w-px opacity-80 relative text-brand-fg text-[16px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        {label}
      </p>
    </div>
  );
}

function FeaturesColumnLeft() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full dt:w-auto">
      {FEATURES_COLUMN_ONE.map((label, i) => (
        <FeatureCheckRow
          key={label}
          label={label}
          dtWidth={i === 4 ? "dt:w-[265px]" : "dt:w-[296px]"}
          itemsCenter={i < 3}
        />
      ))}
    </div>
  );
}

function FeaturesColumnRight() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full dt:w-auto">
      {FEATURES_COLUMN_TWO.map((label, i) => (
        <FeatureCheckRow
          key={label}
          label={label}
          dtWidth="dt:w-[265px]"
          itemsCenter={i === 0}
        />
      ))}
    </div>
  );
}

function CapabilitiesFeatureList() {
  return (
    <div className="content-stretch flex flex-col dt:flex-row gap-6 dt:gap-[29px] items-start justify-center relative shrink-0 w-full dt:w-auto">
      <FeaturesColumnLeft />
      <FeaturesColumnRight />
    </div>
  );
}

function CapabilitiesWhatYouGetBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0">
      <p
        className="[word-break:break-word] font-['Archivo:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-brand-fg text-[16px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        What you will get:
      </p>
      <CapabilitiesFeatureList />
    </div>
  );
}

function CapabilitiesPitch() {
  return (
    <div className="relative content-stretch flex flex-col gap-[24px] dt:gap-[34px] items-start w-full dt:w-auto dt:absolute dt:left-[calc(50%+50px)] dt:top-[168.68px]">
      <p
        className="[word-break:break-word] font-['Archivo:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-brand-fg text-[22px] dt:text-[27px] w-full dt:w-[495.303px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Run a more efficient, flexible,and digitally connected corebanking
        system
      </p>
      <CapabilitiesWhatYouGetBlock />
    </div>
  );
}

export default function CapabilitiesShowcase() {
  return (
    <section
      className="bg-brand-bg relative w-full overflow-clip flex flex-col gap-10 px-5 py-16 dt:block dt:h-[681px] dt:w-[1440px] dt:px-0 dt:py-0"
      aria-label="Capabilities"
    >
      <CapabilitiesPitch />
      <CkycDashboardFrame />
    </section>
  );
}
