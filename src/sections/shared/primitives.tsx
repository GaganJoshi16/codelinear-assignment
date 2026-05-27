import svgPaths from "../../assets/svg-paths";
export function PrimaryGradientButton({ label }: { label: string }) {
  return (
    <div
      className="content-stretch flex items-center justify-center px-[51px] py-[15px] relative rounded-[10px] shrink-0"
      style={{
        backgroundImage:
          "linear-gradient(141.821deg, rgb(0, 180, 253) 5.6799%, rgb(0, 58, 206) 86.975%)",
      }}
    >
      <p className="[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[15px] text-white uppercase whitespace-nowrap">
        {label}
      </p>
    </div>
  );
}

export function OutlinedButton({ label }: { label: string }) {
  return (
    <div className="content-stretch flex items-center justify-center px-[59px] py-[15px] relative rounded-[10px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-brand-fg border-solid inset-0 pointer-events-none rounded-[10px]"
      />
      <p className="[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-brand-fg text-[15px] uppercase whitespace-nowrap">
        {label}
      </p>
    </div>
  );
}

function CyanArrowGlyph() {
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

function RotatedCyanArrow() {
  return (
    <div className="h-[14.505px] overflow-clip relative w-[13.569px]">
      <div className="absolute flex items-center justify-center left-[0.53px] size-[11.58px] top-[1.23px]">
        <div className="flex-none rotate-45">
          <CyanArrowGlyph />
        </div>
      </div>
    </div>
  );
}

export function LearnMoreLink() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0">
      <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
        <p className="[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-brand-accent-cyan text-[14px] text-right uppercase whitespace-nowrap">
          learn more
        </p>
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-180">
            <RotatedCyanArrow />
          </div>
        </div>
      </div>
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

export function CheckCircleIcon() {
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
            fill="url(#check-circle-gradient)"
            r="9.26182"
          />
          <g>
            <path d={svgPaths.p287f1d00} fill="#E9F4F9" />
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="check-circle-gradient"
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

export function DashboardScreenFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="absolute border-brand-accent-cyan border-[1.051px] border-solid h-[431.992px] left-0 rounded-tl-[15.766px] rounded-tr-[15.766px] top-0 w-[651.666px]" />
      <div className="-translate-x-1/2 absolute border-brand-accent-cyan border-[1.051px] border-solid h-[30.305px] left-1/2 rounded-bl-[14.715px] rounded-br-[14.715px] rounded-tl-[5.255px] rounded-tr-[5.255px] top-[431.12px] w-[765.944px]" />
      {children}
    </div>
  );
}
