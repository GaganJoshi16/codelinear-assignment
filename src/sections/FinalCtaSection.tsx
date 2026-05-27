function PaperlessHeadlineBlock() {
  return (
    <div className="[word-break:break-word] relative content-stretch flex flex-col font-['Archivo:Regular',sans-serif] font-normal gap-[20px] dt:gap-[32px] items-start text-brand-fg dt:absolute dt:-translate-y-1/2 dt:left-[80px] dt:top-1/2">
      <p
        className="leading-[1.2] relative shrink-0 text-[clamp(2rem,7vw,2.6rem)] dt:text-[53px] tracking-[-0.53px] w-full dt:w-[607.835px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Take the full advantage of going paper-less now.
      </p>
      <p
        className="leading-[1.3] opacity-70 relative shrink-0 text-[15px] dt:text-[16px] w-full dt:w-[462.919px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >{`CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations `}</p>
    </div>
  );
}

function PaperlessActionButtons() {
  return (
    <div className="relative content-stretch flex flex-wrap gap-[16px] dt:gap-[40px] items-center justify-start dt:justify-end dt:absolute dt:-translate-y-1/2 dt:right-[80px] dt:top-1/2">
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

export default function FinalCtaSection() {
  return (
    <div className="bg-brand-bg relative w-full overflow-clip flex flex-col gap-[28px] px-5 py-[56px] dt:block dt:h-[316px] dt:w-[1440px] dt:px-0 dt:py-0">
      <PaperlessHeadlineBlock />
      <PaperlessActionButtons />
    </div>
  );
}
