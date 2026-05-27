import svgPaths from "../../assets/svg-paths";

function CyanArrowGlyph() {
  return (
    <div className="h-[8.422px] relative w-[7.954px]">
      <div className="absolute inset-[-4.16%_-7.35%_0_-1.47%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 8.65572 8.77279"
          aria-hidden="true"
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

export function CyanArrowIcon() {
  return (
    <span className="flex items-center justify-center relative shrink-0" aria-hidden="true">
      <span className="flex-none rotate-180">
        <span className="h-[14.505px] overflow-clip relative w-[13.569px]">
          <span className="absolute flex items-center justify-center left-[0.53px] size-[11.58px] top-[1.23px]">
            <span className="flex-none rotate-45">
              <CyanArrowGlyph />
            </span>
          </span>
        </span>
      </span>
    </span>
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
        aria-hidden="true"
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
