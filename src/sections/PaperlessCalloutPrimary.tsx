function CalloutHeadlineBlock() {
  return (
    <div className="[word-break:break-word] relative content-stretch flex flex-col font-['Archivo:Regular',sans-serif] font-normal gap-[20px] dt:gap-[32px] items-start text-brand-fg dt:absolute dt:-translate-y-1/2 dt:left-[65px] dt:top-[calc(50%-0.22px)]">
      <p
        className="leading-[1.2] relative shrink-0 text-[clamp(2rem,7vw,2.6rem)] dt:text-[53px] tracking-[-0.53px] w-full dt:w-[607.835px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Take the full advantage of going paper-less now.
      </p>
      <p
        className="leading-[1.3] opacity-80 relative shrink-0 text-[15px] dt:text-[16px] w-full dt:w-[462.919px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >{`CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations `}</p>
    </div>
  );
}

function CalloutActionButtons() {
  return (
    <div className="relative content-stretch flex flex-wrap gap-[16px] dt:gap-[40px] items-start dt:absolute dt:-translate-y-1/2 dt:left-[757px] dt:top-1/2">
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

function CalloutCard() {
  return (
    <div
      className="relative content-stretch flex flex-col gap-[28px] overflow-clip rounded-[20px] dt:rounded-[27px] px-6 py-10 dt:p-0 w-full dt:absolute dt:-translate-y-1/2 dt:h-[427px] dt:left-[81px] dt:top-1/2 dt:w-[1279px] dt:block"
      style={{
        backgroundImage:
          "linear-gradient(115.899deg, rgb(3, 30, 42) 12.22%, rgb(0, 13, 18) 59.256%)",
      }}
    >
      <p
        className="hidden dt:block dt:-translate-x-full [word-break:break-word] absolute font-['Archivo:Medium',sans-serif] font-medium leading-[1.2] left-[1364.56px] opacity-50 text-[572.632px] text-[transparent] text-right top-[-160.72px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        CB7
      </p>
      <CalloutHeadlineBlock />
      <CalloutActionButtons />
    </div>
  );
}

export default function PaperlessCalloutPrimary() {
  return (
    <section
      className="bg-brand-bg relative w-full overflow-clip px-5 py-12 dt:block dt:h-[681px] dt:w-[1440px] dt:px-0 dt:py-0"
      aria-label="Paperless banking"
    >
      <CalloutCard />
    </section>
  );
}
