import svgPaths from "../assets/svg-paths";

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
      <div
        className="content-stretch flex items-center justify-center px-[36px] dt:px-[51px] py-[15px] relative rounded-[10px] shrink-0"
        style={{
          backgroundImage:
            "linear-gradient(141.821deg, rgb(0, 180, 253) 5.6799%, rgb(0, 58, 206) 86.975%)",
        }}
      >
        <p className="[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[15px] text-white uppercase whitespace-nowrap">
          REQUEST DEMO
        </p>
      </div>
      <div className="content-stretch flex items-center justify-center px-[40px] dt:px-[59px] py-[15px] relative rounded-[10px] shrink-0">
        <div
          aria-hidden="true"
          className="absolute border border-brand-fg border-solid inset-0 pointer-events-none rounded-[10px]"
        />
        <p className="[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-brand-fg text-[15px] uppercase whitespace-nowrap">
          Contact Us
        </p>
      </div>
    </div>
  );
}

function HeroLeftColumn() {
  return (
    <div className="relative content-stretch flex flex-col gap-[32px] dt:gap-[52px] items-start w-full dt:w-auto dt:absolute dt:left-[80px] dt:top-[211.96px]">
      <HeroHeadlineCopy />
      <HeroCtaButtons />
    </div>
  );
}

function ShellsLogoMark() {
  return (
    <div className="h-[18.398px] relative shrink-0 w-[17.478px]" data-name="Vector">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17.478 18.3979"
      >
        <path
          clipRule="evenodd"
          d={svgPaths.p1713f6f0}
          fill="#586E84"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}

function SmartFinderLogoMark() {
  return (
    <div className="h-[18.398px] relative shrink-0 w-[19.064px]">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 19.0639 18.3979"
      >
        <g>
          <path d={svgPaths.p1a05e700} fill="#586E84" />
          <path d={svgPaths.p34c66200} fill="#586E84" />
          <path d={svgPaths.p398afb00} fill="white" />
        </g>
      </svg>
    </div>
  );
}

function ZoomerrLogoMark() {
  return (
    <div className="relative shrink-0 size-[18.398px]" data-name="Vector">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18.3979 18.3979"
      >
        <path
          clipRule="evenodd"
          d={svgPaths.p1bfec400}
          fill="#586E84"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}

function ArtVenueLogoMark() {
  return (
    <div className="h-[18.398px] relative shrink-0 w-[32.087px]">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32.0868 18.3979"
      >
        <g>
          <path d={svgPaths.p27c1900} fill="#586E84" />
          <path d={svgPaths.p28b68c00} fill="#586E84" />
          <path d={svgPaths.p3eef0180} fill="#586E84" />
        </g>
      </svg>
    </div>
  );
}

function KontrastrLogoMark() {
  return (
    <div className="h-[16.788px] relative shrink-0 w-[13.655px]">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 13.6547 16.788"
      >
        <g>
          <path d={svgPaths.p1f3e6980} fill="#586E84" />
          <path d={svgPaths.p28c79ab1} fill="#586E84" />
        </g>
      </svg>
    </div>
  );
}

function WavesMarathonLogoMark() {
  return (
    <div className="h-[18.398px] relative shrink-0 w-[12.09px]" data-name="Vector">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12.0897 18.3979"
      >
        <path d={svgPaths.p3b72aa00} fill="#586E84" />
      </svg>
    </div>
  );
}

function PartnerLogosRow() {
  return (
    <div className="content-stretch flex flex-wrap gap-x-[18.398px] gap-y-[16px] items-center opacity-90 relative shrink-0" data-name="Row">
      <div className="relative shrink-0" data-name="logo">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4.599px] items-center justify-center relative size-full">
          <ShellsLogoMark />
          <div
            className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-brand-muted text-[13.8px] whitespace-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[1.1]">SHELLS</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="logo">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4.599px] items-center justify-center relative size-full">
          <SmartFinderLogoMark />
          <div
            className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-brand-muted text-[13.8px] whitespace-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[1.1]">SmartFinder</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="logo">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4.599px] items-center justify-center relative size-full">
          <ZoomerrLogoMark />
          <div
            className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-brand-muted text-[13.8px] whitespace-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[1.1]">Zoomerr</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="logo">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4.599px] items-center justify-center relative size-full">
          <ArtVenueLogoMark />
          <div
            className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-brand-muted text-[13.8px] whitespace-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p>
              <span className="leading-[1.1]">Art</span>
              <span className="leading-[1.1] text-brand-muted">Venue</span>
            </p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="logo">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4.599px] items-center justify-center relative size-full">
          <KontrastrLogoMark />
          <div
            className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-brand-muted text-[13.8px] whitespace-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[1.1]">kontrastr</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="logo">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4.599px] items-center justify-center relative size-full">
          <WavesMarathonLogoMark />
          <div
            className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-brand-muted text-[0px] tracking-[0.5px] whitespace-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="text-[18px]">
              <span
                className="font-['Roboto:Bold',sans-serif] font-bold leading-[1.1]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                WAVES
              </span>
              <span
                className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                MARATHON
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustedByBlock() {
  return (
    <div className="relative content-stretch flex flex-col gap-[16px] items-start w-full dt:w-auto dt:absolute dt:left-[80px] dt:top-[655.06px]">
      <p
        className="[word-break:break-word] capitalize font-['Archivo:Medium',sans-serif] font-medium leading-[1.3] opacity-70 relative shrink-0 text-brand-fg text-[16px] whitespace-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        trusted by:
      </p>
      <PartnerLogosRow />
    </div>
  );
}

/*  RecentActivityWidget — small floating glassmorphic widget                 */
/*  Contains: balance card (Toni Kross), quick actions, recent activity feed, */
/*  and bottom nav tabs.                                                      */
function HomeNavHomeIcon() {
  return (
    <div className="absolute inset-[4.52%_5.21%_5.21%_5.21%]" data-name="Layer 2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5675 11.6568">
        <g>
          <path d={svgPaths.p12b85380} fill="#1B1B1B" />
          <path d={svgPaths.p167b9400} fill="#1B1B1B" />
        </g>
      </svg>
    </div>
  );
}

function HomeNavHomeTab() {
  return (
    <div className="absolute contents inset-[16.25%_84.1%_16.25%_6.15%]">
      <div className="absolute inset-[16.25%_85.9%_53.75%_7.95%] overflow-clip" data-name="006-home-button 1">
        <HomeNavHomeIcon />
      </div>
      <p className="[word-break:break-word] absolute font-['Gilroy-Medium:☞',sans-serif] inset-[56.25%_83.84%_15.87%_6.15%] leading-[11.837px] not-italic text-screen-icon text-[7.53px] whitespace-nowrap">Home</p>
    </div>
  );
}

function HomeNavCardIcon() {
  return (
    <div className="absolute inset-[9.37%_5.21%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5681 10.492">
        <g>
          <path clipRule="evenodd" d={svgPaths.p60c9000} fill="#1B1B1B" fillRule="evenodd" />
          <path d={svgPaths.p16600e80} fill="#1B1B1B" />
          <g>
            <path clipRule="evenodd" d={svgPaths.p21f7e900} fill="#1B1B1B" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pf77ed80} fill="#1B1B1B" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function HomeNavCardTab() {
  return (
    <div className="absolute contents inset-[16.25%_62.31%_16.25%_29.23%]">
      <p className="[word-break:break-word] absolute font-['Gilroy-Medium:☞',sans-serif] inset-[56.25%_62.19%_15.87%_29.23%] leading-[11.837px] not-italic text-screen-icon text-[7.53px] whitespace-nowrap">Card</p>
      <div className="absolute inset-[16.25%_63.33%_53.75%_30.51%] overflow-clip" data-name="004-credit-card-1 1">
        <HomeNavCardIcon />
      </div>
    </div>
  );
}

function HomeNavProfileIcon() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9132 12.9132">
        <g>
          <path d={svgPaths.p33cbcb00} fill="#1B1B1B" />
        </g>
      </svg>
    </div>
  );
}

function HomeNavProfileTab() {
  return (
    <div className="absolute contents inset-[16.25%_6.15%_16.25%_83.59%]">
      <p className="[word-break:break-word] absolute font-['Gilroy-Medium:☞',sans-serif] inset-[56.25%_5.93%_15.87%_83.59%] leading-[11.837px] not-italic text-screen-icon text-[7.53px] whitespace-nowrap">Profile</p>
      <div className="absolute inset-[16.25%_8.21%_53.75%_85.64%] overflow-clip" data-name="008-user-1 1">
        <HomeNavProfileIcon />
      </div>
    </div>
  );
}

function HomeNavTransactionIcon() {
  return (
    <div className="absolute inset-[17.71%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.3398 8.33977">
        <g>
          <path clipRule="evenodd" d={svgPaths.p19bcf300} fill="#1B1B1B" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p1d7fee70} fill="#1B1B1B" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function HomeNavTransactionTab() {
  return (
    <div className="absolute contents inset-[16.25%_29.74%_16.25%_51.03%]">
      <p className="[word-break:break-word] absolute font-['Gilroy-Medium:☞',sans-serif] inset-[56.25%_29.44%_15.87%_51.03%] leading-[11.837px] not-italic text-screen-icon text-[7.53px] whitespace-nowrap">Transaction</p>
      <div className="absolute inset-[16.25%_36.41%_53.75%_57.44%] overflow-clip" data-name="002-swap 1">
        <HomeNavTransactionIcon />
      </div>
    </div>
  );
}

function HomeFromGoogleArrowGlyph() {
  return (
    <div className="absolute inset-[20.92%_20.93%_19.79%_19.79%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.65538 7.65535">
        <g>
          <path d={svgPaths.p689d480} fill="#FCFEF5" />
          <path d={svgPaths.p49e7ff0} fill="#FCFEF5" />
        </g>
      </svg>
    </div>
  );
}

function HomeFromGoogleArrowIcon() {
  return (
    <div className="absolute left-[18.85px] overflow-clip size-[12.913px] top-[373.51px]" data-name="down-left-arrow 1">
      <HomeFromGoogleArrowGlyph />
    </div>
  );
}

function HomeFromGoogleArrowBadge() {
  return (
    <div className="absolute contents left-[12.4px] top-[367.05px]">
      <div className="absolute backdrop-blur-[26.902px] bg-[#1738ad] left-[12.4px] rounded-[8.609px] size-[25.826px] top-[367.05px]" />
      <HomeFromGoogleArrowIcon />
    </div>
  );
}

function HomeFromGoogleTitleRow() {
  return (
    <div className="absolute contents left-[calc(16.67%+12.16px)] top-[367.05px]">
      <p className="[word-break:break-word] absolute font-['Gilroy-Bold:☞',sans-serif] leading-[12.913px] left-[calc(16.67%+12.16px)] not-italic text-screen-bg text-[8.609px] top-[367.05px] whitespace-nowrap">From Google</p>
      <div className="absolute left-[calc(50%-3.36px)] size-[2.152px] top-[372.43px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.1522 2.1522">
          <circle cx="1.0761" cy="1.0761" fill="#0D0D0C" opacity="0.6" r="1.0761" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Gilroy-Medium:☞',sans-serif] leading-[12.913px] left-[calc(50%+0.94px)] not-italic opacity-60 text-screen-bg text-[8.609px] top-[367.05px] whitespace-nowrap">Bonus</p>
    </div>
  );
}

function HomeFromGoogleEntryBody() {
  return (
    <div className="absolute contents left-[calc(16.67%+12.16px)] top-[367.05px]">
      <p className="[word-break:break-word] absolute font-['Gilroy-Regular:☞',sans-serif] leading-[10.761px] left-[calc(16.67%+12.16px)] not-italic opacity-80 text-screen-bg text-[6.457px] top-[382.12px] whitespace-nowrap">10 jun 2022</p>
      <HomeFromGoogleTitleRow />
    </div>
  );
}

function HomeFromGoogleEntryWithAmount() {
  return (
    <div className="absolute contents left-[12.4px] top-[367.05px]">
      <p className="-translate-x-full [word-break:break-word] absolute font-['Gilroy-Bold:☞',sans-serif] leading-[12.913px] left-[calc(83.33%+23.4px)] not-italic text-screen-bg text-[8.609px] text-right top-[373.51px] whitespace-nowrap">+$859</p>
      <HomeFromGoogleArrowBadge />
      <HomeFromGoogleEntryBody />
    </div>
  );
}

function HomeFromGoogleEntryRow() {
  return (
    <div className="absolute contents left-[12.4px] top-[367.05px]">
      <div className="absolute h-0 left-[12.4px] top-[401.49px] w-[184.013px]">
        <div className="absolute inset-[-0.54px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184.013 0.538049">
            <line opacity="0.24" stroke="#0D0D0C" strokeLinecap="round" strokeWidth="0.538049" x1="0.269025" x2="183.744" y1="0.269025" y2="0.269025" />
          </svg>
        </div>
      </div>
      <HomeFromGoogleEntryWithAmount />
    </div>
  );
}

function HomeFilterTabSixMonth() {
  return (
    <div className="absolute bg-screen-card content-stretch flex items-center justify-center left-[161.41px] px-[6.457px] py-[1.076px] rounded-[8.609px] top-[25.83px]">
      <p className="[word-break:break-word] font-['Gilroy-Medium:☞',sans-serif] leading-[10.761px] not-italic relative shrink-0 text-screen-text text-[6.457px] text-center whitespace-nowrap">6 Month</p>
    </div>
  );
}

function HomeFilterTabThisDay() {
  return (
    <div className="absolute bg-screen-card content-stretch flex items-center justify-center left-[2.69px] px-[6.457px] py-[1.076px] rounded-[8.609px] top-[25.83px]">
      <p className="[word-break:break-word] font-['Gilroy-Medium:☞',sans-serif] leading-[10.761px] not-italic relative shrink-0 text-screen-text text-[6.457px] text-center whitespace-nowrap">This Day</p>
    </div>
  );
}

function HomeFilterTabThisWeek() {
  return (
    <div className="absolute bg-screen-accent content-stretch flex items-center justify-center left-[51.65px] px-[6.457px] py-[1.076px] rounded-[8.609px] top-[25.83px]">
      <p className="[word-break:break-word] font-['Gilroy-Medium:☞',sans-serif] leading-[10.761px] not-italic relative shrink-0 text-[6.457px] text-center text-white whitespace-nowrap">This Week</p>
    </div>
  );
}

function HomeFilterTabThisMonth() {
  return (
    <div className="absolute bg-screen-card content-stretch flex items-center justify-center left-[105.46px] px-[6.457px] py-[1.076px] rounded-[8.609px] top-[25.83px]">
      <p className="[word-break:break-word] font-['Gilroy-Medium:☞',sans-serif] leading-[10.761px] not-italic relative shrink-0 text-screen-text text-[6.457px] text-center whitespace-nowrap">This Month</p>
    </div>
  );
}

function HomeToJinArrowGlyph() {
  return (
    <div className="absolute inset-[19.79%_19.79%_20.93%_20.92%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.65534 7.65544">
        <g>
          <path d={svgPaths.p2a054b80} fill="#FCFEF5" />
          <path d={svgPaths.p33e3c700} fill="#FCFEF5" />
        </g>
      </svg>
    </div>
  );
}

function HomeToJinArrowIcon() {
  return (
    <div className="absolute left-[9.15px] overflow-clip size-[12.913px] top-[55.96px]" data-name="up-right-arrow 1">
      <HomeToJinArrowGlyph />
    </div>
  );
}

function HomeToJinArrowBadge() {
  return (
    <div className="absolute contents left-[2.69px] top-[49.5px]">
      <div className="absolute backdrop-blur-[26.902px] bg-screen-purple left-[2.69px] rounded-[8.609px] size-[25.826px] top-[49.5px]" />
      <HomeToJinArrowIcon />
    </div>
  );
}

function HomeToJinTitleRow() {
  return (
    <div className="absolute contents left-[37.13px] top-[49.5px]">
      <p className="[word-break:break-word] absolute font-['Gilroy-Bold:☞',sans-serif] leading-[12.913px] left-[37.13px] not-italic text-screen-bg text-[8.609px] top-[49.5px] whitespace-nowrap">To Jin</p>
      <div className="absolute left-[62.41px] size-[1.614px] top-[55.42px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.61415 1.61415">
          <circle cx="0.807074" cy="0.807074" fill="#0D0D0C" opacity="0.6" r="0.807074" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Gilroy-Medium:☞',sans-serif] leading-[12.913px] left-[66.18px] not-italic opacity-60 text-screen-bg text-[8.609px] top-[49.5px] whitespace-nowrap">Work</p>
    </div>
  );
}

function HomeToJinEntryBody() {
  return (
    <div className="absolute contents left-[37.13px] top-[49.5px]">
      <p className="[word-break:break-word] absolute font-['Gilroy-Regular:☞',sans-serif] leading-[10.761px] left-[37.13px] not-italic opacity-80 text-screen-bg text-[6.457px] top-[64.57px] whitespace-nowrap">12 jun 2022</p>
      <HomeToJinTitleRow />
    </div>
  );
}

function HomeToJinEntryRow() {
  return (
    <div className="absolute contents left-[2.69px] top-[49.5px]">
      <div className="absolute h-0 left-[2.69px] top-[83.94px] w-[184.013px]">
        <div className="absolute inset-[-0.54px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184.013 0.538049">
            <line opacity="0.24" stroke="#0D0D0C" strokeLinecap="round" strokeWidth="0.538049" x1="0.269025" x2="183.744" y1="0.269025" y2="0.269025" />
          </svg>
        </div>
      </div>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Gilroy-Bold:☞',sans-serif] leading-[12.913px] left-[187.41px] not-italic text-screen-bg text-[8.609px] text-right top-[55.96px] whitespace-nowrap">-$59</p>
      <HomeToJinArrowBadge />
      <HomeToJinEntryBody />
    </div>
  );
}

function HomeFromGoogleSalaryArrowGlyph() {
  return (
    <div className="absolute inset-[20.92%_20.93%_19.79%_19.79%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.65538 7.65534">
        <g>
          <path d={svgPaths.p12899100} fill="#F5F5F5" />
          <path d={svgPaths.p49e7ff0} fill="#F5F5F5" />
        </g>
      </svg>
    </div>
  );
}

function HomeFromGoogleSalaryArrowIcon() {
  return (
    <div className="absolute left-[9.15px] overflow-clip size-[12.913px] top-[101.15px]" data-name="down-left-arrow 1">
      <HomeFromGoogleSalaryArrowGlyph />
    </div>
  );
}

function HomeFromGoogleSalaryArrowBadge() {
  return (
    <div className="absolute contents left-[2.69px] top-[94.7px]">
      <div className="absolute backdrop-blur-[26.902px] bg-[#1738ad] left-[2.69px] rounded-[8.609px] size-[25.826px] top-[94.7px]" />
      <HomeFromGoogleSalaryArrowIcon />
    </div>
  );
}

function HomeFromGoogleSalaryTitleRow() {
  return (
    <div className="absolute contents left-[37.13px] top-[94.7px]">
      <p className="[word-break:break-word] absolute font-['Gilroy-Bold:☞',sans-serif] leading-[12.913px] left-[37.13px] not-italic text-screen-bg text-[8.609px] top-[94.7px] whitespace-nowrap">From Google</p>
      <div className="absolute left-[90.93px] size-[2.152px] top-[100.08px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.1522 2.1522">
          <circle cx="1.0761" cy="1.0761" fill="#0D0D0C" opacity="0.6" r="1.0761" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Gilroy-Medium:☞',sans-serif] leading-[12.913px] left-[95.23px] not-italic opacity-60 text-screen-bg text-[8.609px] top-[94.7px] whitespace-nowrap">Salary</p>
    </div>
  );
}

function HomeFromGoogleSalaryEntryBody() {
  return (
    <div className="absolute contents left-[37.13px] top-[94.7px]">
      <p className="[word-break:break-word] absolute font-['Gilroy-Regular:☞',sans-serif] leading-[10.761px] left-[37.13px] not-italic opacity-80 text-screen-bg text-[6.457px] top-[109.76px] whitespace-nowrap">10 jun 2022</p>
      <HomeFromGoogleSalaryTitleRow />
    </div>
  );
}

function HomeFromGoogleSalaryEntryWithAmount() {
  return (
    <div className="absolute contents left-[2.69px] top-[94.7px]">
      <p className="-translate-x-full [word-break:break-word] absolute font-['Gilroy-Bold:☞',sans-serif] leading-[12.913px] left-[187.03px] not-italic text-screen-bg text-[8.609px] text-right top-[101.15px] whitespace-nowrap">+$859</p>
      <HomeFromGoogleSalaryArrowBadge />
      <HomeFromGoogleSalaryEntryBody />
    </div>
  );
}

function HomeFromGoogleSalaryEntryRow() {
  return (
    <div className="absolute contents left-[2.69px] top-[94.7px]">
      <div className="absolute h-0 left-[2.69px] top-[129.13px] w-[184.013px]">
        <div className="absolute inset-[-0.54px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184.013 0.538049">
            <line opacity="0.24" stroke="#0D0D0C" strokeLinecap="round" strokeWidth="0.538049" x1="0.269025" x2="183.744" y1="0.269025" y2="0.269025" />
          </svg>
        </div>
      </div>
      <HomeFromGoogleSalaryEntryWithAmount />
    </div>
  );
}

function HomeToDavidArrowGlyph() {
  return (
    <div className="absolute inset-[19.79%_19.79%_20.93%_20.92%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.65534 7.65543">
        <g>
          <path d={svgPaths.p2a054b80} fill="#FCFEF5" />
          <path d={svgPaths.pc9a8650} fill="#FCFEF5" />
        </g>
      </svg>
    </div>
  );
}

function HomeToDavidArrowIcon() {
  return (
    <div className="absolute left-[9.15px] overflow-clip size-[12.913px] top-[146.35px]" data-name="up-right-arrow 2">
      <HomeToDavidArrowGlyph />
    </div>
  );
}

function HomeToDavidArrowBadge() {
  return (
    <div className="absolute contents left-[2.69px] top-[139.89px]">
      <div className="absolute backdrop-blur-[26.902px] bg-screen-purple left-[2.69px] rounded-[8.609px] size-[25.826px] top-[139.89px]" />
      <HomeToDavidArrowIcon />
    </div>
  );
}

function HomeToDavidTitleRow() {
  return (
    <div className="absolute contents left-[37.13px] top-[139.89px]">
      <p className="[word-break:break-word] absolute font-['Gilroy-Bold:☞',sans-serif] leading-[12.913px] left-[37.13px] not-italic text-screen-bg text-[8.609px] top-[139.89px] whitespace-nowrap">To David</p>
      <div className="absolute left-[74.25px] size-[2.152px] top-[145.27px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.1522 2.1522">
          <circle cx="1.0761" cy="1.0761" fill="#0D0D0C" opacity="0.6" r="1.0761" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Gilroy-Medium:☞',sans-serif] leading-[12.913px] left-[78.56px] not-italic opacity-60 text-screen-bg text-[8.609px] top-[139.89px] whitespace-nowrap">Work</p>
    </div>
  );
}

function HomeToDavidEntryBody() {
  return (
    <div className="absolute contents left-[37.13px] top-[139.89px]">
      <p className="[word-break:break-word] absolute font-['Gilroy-Regular:☞',sans-serif] leading-[10.761px] left-[37.13px] not-italic opacity-80 text-screen-bg text-[6.457px] top-[154.96px] whitespace-nowrap">7 jun 2022</p>
      <HomeToDavidTitleRow />
    </div>
  );
}

function HomeToDavidEntryWithAmount() {
  return (
    <div className="absolute contents left-[2.69px] top-[139.89px]">
      <p className="-translate-x-full [word-break:break-word] absolute font-['Gilroy-Bold:☞',sans-serif] leading-[12.913px] left-[186.57px] not-italic text-screen-bg text-[8.609px] text-right top-[146.35px] whitespace-nowrap">-$479</p>
      <HomeToDavidArrowBadge />
      <HomeToDavidEntryBody />
    </div>
  );
}

function HomeToDavidEntryRow() {
  return (
    <div className="absolute contents left-[2.69px] top-[139.89px]">
      <div className="absolute h-0 left-[2.69px] top-[174.33px] w-[184.013px]">
        <div className="absolute inset-[-0.54px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184.013 0.538049">
            <line opacity="0.24" stroke="#0D0D0C" strokeLinecap="round" strokeWidth="0.538049" x1="0.269025" x2="183.744" y1="0.269025" y2="0.269025" />
          </svg>
        </div>
      </div>
      <HomeToDavidEntryWithAmount />
    </div>
  );
}

function HomeRecentActivityPanel() {
  return (
    <div className="absolute h-[174.328px] left-[9.71px] top-[181.96px] w-[198.54px]">
      <p className="[word-break:break-word] absolute font-['Gilroy-Bold:☞',sans-serif] leading-[15.065px] left-0 not-italic text-brand-fg-dark text-[10.761px] top-0 whitespace-nowrap">Recent activity</p>
      <HomeFilterTabSixMonth />
      <HomeFilterTabThisDay />
      <HomeFilterTabThisWeek />
      <HomeFilterTabThisMonth />
      <HomeToJinEntryRow />
      <HomeFromGoogleSalaryEntryRow />
      <HomeToDavidEntryRow />
    </div>
  );
}

function HomeTotalBalanceText() {
  return (
    <div className="[word-break:break-word] absolute contents left-[7.4px] not-italic top-[59.75px] whitespace-nowrap">
      <p className="absolute font-['Gilroy-Regular:☞',sans-serif] leading-[11.837px] left-[7.4px] opacity-60 text-[#1d1d1d] text-[7.533px] top-[59.75px]">Total balance</p>
      <p className="absolute font-['Gilroy-Bold:☞',sans-serif] leading-[19.37px] left-[7.4px] text-screen-accent text-[15.065px] top-[75.89px]">$42,295.00 USD</p>
    </div>
  );
}

function HomeUserGreetingText() {
  return (
    <div className="[word-break:break-word] absolute contents leading-[normal] left-[39.68px] not-italic text-screen-text top-[22.62px] whitespace-nowrap">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold left-[39.68px] text-[8.609px] top-[22.62px]">Toni Kross</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-[39.68px] opacity-60 text-[6.457px] top-[37.15px]">Good Morning</p>
    </div>
  );
}

function HomeNotificationBellGlyph() {
  return (
    <div className="absolute inset-[7.35%_16.14%_6.86%_16.1%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.75024 11.0778">
        <g>
          <path clipRule="evenodd" d={svgPaths.p1c768e00} fill="#0D0D0C" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p30528500} fill="#0D0D0C" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function HomeNotificationButton() {
  return (
    <div className="absolute contents left-[174.19px] top-[25.31px]">
      <div className="absolute backdrop-blur-[26.902px] bg-[rgba(255,250,250,0.2)] left-[174.19px] rounded-[4px] size-[17.218px] top-[25.31px]" />
      <div className="absolute left-[176.34px] overflow-clip size-[12.913px] top-[27.46px]" data-name="001-notification 1">
        <HomeNotificationBellGlyph />
      </div>
    </div>
  );
}

function HomeFundTransferGlyph() {
  return (
    <div className="absolute inset-[6.26%_6.14%_6.24%_6.14%]" data-name="Layer_24">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.1363 12.1067">
        <g>
          <path d={svgPaths.p3b5dce00} fill="#0D0D0C" />
        </g>
      </svg>
    </div>
  );
}

function HomeFundTransferIcon() {
  return (
    <div className="absolute contents left-[14.93px] top-[114.63px]">
      <div className="absolute backdrop-blur-[26.902px] bg-[rgba(255,250,250,0.2)] left-[14.93px] rounded-[9px] size-[32.283px] top-[114.63px]" />
      <div className="absolute left-[24.15px] overflow-clip size-[13.836px] top-[123.85px]" data-name="transfer-money 1">
        <HomeFundTransferGlyph />
      </div>
    </div>
  );
}

function HomeFundTransferAction() {
  return (
    <div className="absolute contents left-[7.4px] top-[114.63px]">
      <HomeFundTransferIcon />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Gilroy-Bold:☞',sans-serif] leading-[11.837px] left-[31.4px] not-italic text-screen-text text-[7.533px] text-center top-[151.21px] whitespace-nowrap">Fund Transfer</p>
    </div>
  );
}

function HomeMoreActionIcon() {
  return (
    <div className="absolute contents left-[159.13px] top-[114.63px]">
      <div className="absolute backdrop-blur-[26.902px] bg-[rgba(255,250,250,0.2)] left-[159.13px] rounded-[9px] size-[32.283px] top-[114.63px]" />
      <div className="absolute left-[168.35px] overflow-clip size-[13.836px] top-[123.85px]" data-name="012-application 1">
        <div className="absolute inset-[9.38%_53.13%_53.13%_9.38%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.18833 5.18833">
            <path d={svgPaths.p15511c00} fill="#0D0D0C" />
          </svg>
        </div>
        <div className="absolute inset-[9.38%_9.38%_53.13%_53.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.18833 5.18833">
            <path d={svgPaths.p24904d80} fill="#0D0D0C" />
          </svg>
        </div>
        <div className="absolute inset-[53.13%_53.13%_9.38%_9.38%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.18833 5.18833">
            <path d={svgPaths.p1efa1200} fill="#0D0D0C" />
          </svg>
        </div>
        <div className="absolute inset-[53.12%_9.38%_9.38%_53.12%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.18833 5.18833">
            <path d={svgPaths.p33b64400} fill="#0D0D0C" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function HomeMoreAction() {
  return (
    <div className="absolute contents left-[159.13px] top-[114.63px]">
      <HomeMoreActionIcon />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Gilroy-Bold:☞',sans-serif] leading-[11.837px] left-[175.12px] not-italic text-screen-text text-[7.533px] text-center top-[151.21px] whitespace-nowrap">More</p>
    </div>
  );
}

function HomeAddMoneyIcon() {
  return (
    <div className="absolute left-[100.02px] size-[13.836px] top-[123.85px]" data-name="dollar 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8356 13.8356">
        <g clipPath="url(#home-add-money-clip)">
          <path d={svgPaths.p2e968b00} fill="#0D0D0C" />
        </g>
        <defs>
          <clipPath id="home-add-money-clip">
            <rect fill="white" height="13.8356" width="13.8356" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HomeAddMoneyIconBadge() {
  return (
    <div className="absolute contents left-[90.79px] top-[114.63px]">
      <div className="absolute backdrop-blur-[26.902px] bg-[rgba(255,250,250,0.2)] left-[90.79px] rounded-[9px] size-[32.283px] top-[114.63px]" />
      <HomeAddMoneyIcon />
    </div>
  );
}

function HomeAddMoneyAction() {
  return (
    <div className="absolute contents left-[87.03px] top-[114.63px]">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Gilroy-Bold:☞',sans-serif] leading-[11.837px] left-[107.03px] not-italic text-screen-text text-[7.533px] text-center top-[151.21px] whitespace-nowrap">Add Money</p>
      <HomeAddMoneyIconBadge />
    </div>
  );
}

function HomeBalanceSummaryCard() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0.7)] h-[168px] left-[5px] overflow-clip rounded-[11px] top-1/2 w-[199px]">
      <HomeTotalBalanceText />
      <HomeUserGreetingText />
      <div className="absolute h-0 left-[7.4px] top-[101.71px] w-[184.013px]">
        <div className="absolute inset-[-0.54px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184.013 0.538049">
            <line opacity="0.24" stroke="white" strokeLinecap="round" strokeWidth="0.538049" x1="0.269025" x2="183.744" y1="0.269025" y2="0.269025" />
          </svg>
        </div>
      </div>
      <HomeNotificationButton />
      <HomeFundTransferAction />
      <HomeMoreAction />
      <HomeAddMoneyAction />
      <div className="absolute left-[7.4px] rounded-[8.609px] size-[25.826px] top-[21.01px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.609px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8.609px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[8.609px] size-full" src="/user-avatar.png" />
        </div>
      </div>
    </div>
  );
}

function RecentActivityWidget() {
  return (
    <div className="-translate-y-1/2 absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.4)] h-[177px] left-[353px] overflow-clip rounded-[12px] shadow-[0px_0px_27.571px_8.92px_rgba(0,0,0,0.25)] top-[calc(50%-39px)] w-[208px]" data-name="Home">
      <div className="absolute h-[43.044px] left-[-0.52px] top-[405.79px] w-[209.839px]" data-name="nav">
        <div className="absolute inset-[0_79.49%_0_0]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <foreignObject height="0" width="0" x="0" y="0">
              <div style={{ backdropFilter: "blur(21.52px)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <g data-figma-bg-blur-radius="43.044" />
          </svg>
        </div>
        <div className="absolute backdrop-blur-[21.522px] bg-[#e7e7e7] inset-0 opacity-80 rounded-tl-[16.141px] rounded-tr-[16.141px]" />
        <HomeNavHomeTab />
        <HomeNavCardTab />
        <HomeNavProfileTab />
        <HomeNavTransactionTab />
        <div className="absolute bg-screen-accent inset-[0_84.1%_98.13%_6.41%] rounded-[24px]" />
      </div>
      <HomeFromGoogleEntryRow />
      <HomeRecentActivityPanel />
      <HomeBalanceSummaryCard />
    </div>
  );
}

/*  BalanceCardWidget — larger floating glassmorphic widget                   */
/*  Mirrors RecentActivityWidget at a different scale: balance card + actions */
/*  + recent activity feed + bottom nav.                                      */
function BalanceFilterTabSixMonth() {
  return (
    <div className="absolute bg-screen-card content-stretch flex items-center justify-center left-[189.38px] px-[7.575px] py-[1.263px] rounded-[10.1px] top-[30.3px]">
      <p className="[word-break:break-word] font-['Gilroy-Medium:☞',sans-serif] leading-[12.625px] not-italic relative shrink-0 text-screen-text text-[7.575px] text-center whitespace-nowrap">6 Month</p>
    </div>
  );
}

function BalanceFilterTabThisDay() {
  return (
    <div className="absolute bg-screen-card content-stretch flex items-center justify-center left-[3.16px] px-[7.575px] py-[1.263px] rounded-[10.1px] top-[30.3px]">
      <p className="[word-break:break-word] font-['Gilroy-Medium:☞',sans-serif] leading-[12.625px] not-italic relative shrink-0 text-screen-text text-[7.575px] text-center whitespace-nowrap">This Day</p>
    </div>
  );
}

function BalanceFilterTabThisWeek() {
  return (
    <div className="absolute bg-screen-accent content-stretch flex items-center justify-center left-[60.6px] px-[7.575px] py-[1.263px] rounded-[10.1px] top-[30.3px]">
      <p className="[word-break:break-word] font-['Gilroy-Medium:☞',sans-serif] leading-[12.625px] not-italic relative shrink-0 text-[7.575px] text-center text-white whitespace-nowrap">This Week</p>
    </div>
  );
}

function BalanceFilterTabThisMonth() {
  return (
    <div className="absolute bg-screen-card content-stretch flex items-center justify-center left-[123.73px] px-[7.575px] py-[1.263px] rounded-[10.1px] top-[30.3px]">
      <p className="[word-break:break-word] font-['Gilroy-Medium:☞',sans-serif] leading-[12.625px] not-italic relative shrink-0 text-screen-text text-[7.575px] text-center whitespace-nowrap">This Month</p>
    </div>
  );
}

function BalanceToJinArrowGlyph() {
  return (
    <div className="absolute inset-[19.79%_19.79%_20.92%_20.92%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.98172 8.9818">
        <g>
          <path d={svgPaths.p15885600} fill="#FCFEF5" />
          <path d={svgPaths.p20468c00} fill="#FCFEF5" />
        </g>
      </svg>
    </div>
  );
}

function BalanceToJinArrowIcon() {
  return (
    <div className="absolute left-[10.73px] overflow-clip size-[15.151px] top-[65.65px]" data-name="up-right-arrow 1">
      <BalanceToJinArrowGlyph />
    </div>
  );
}

function BalanceToJinArrowBadge() {
  return (
    <div className="absolute contents left-[3.16px] top-[58.08px]">
      <div className="absolute backdrop-blur-[31.564px] bg-screen-purple left-[3.16px] rounded-[10.1px] size-[30.301px] top-[58.08px]" />
      <BalanceToJinArrowIcon />
    </div>
  );
}

function BalanceToJinTitleRow() {
  return (
    <div className="absolute contents left-[43.56px] top-[58.08px]">
      <p className="[word-break:break-word] absolute font-['Gilroy-Bold:☞',sans-serif] leading-[15.151px] left-[43.56px] not-italic text-screen-bg text-[10.1px] top-[58.08px] whitespace-nowrap">To Jin</p>
      <div className="absolute left-[73.23px] size-[1.894px] top-[65.02px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.89382 1.89382">
          <circle cx="0.94691" cy="0.94691" fill="#0D0D0C" opacity="0.6" r="0.94691" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Gilroy-Medium:☞',sans-serif] leading-[15.151px] left-[77.65px] not-italic opacity-60 text-screen-bg text-[10.1px] top-[58.08px] whitespace-nowrap">Work</p>
    </div>
  );
}

function BalanceToJinEntryBody() {
  return (
    <div className="absolute contents left-[43.56px] top-[58.08px]">
      <p className="[word-break:break-word] absolute font-['Gilroy-Regular:☞',sans-serif] leading-[12.625px] left-[43.56px] not-italic opacity-80 text-screen-bg text-[7.575px] top-[75.75px] whitespace-nowrap">12 jun 2022</p>
      <BalanceToJinTitleRow />
    </div>
  );
}

function BalanceToJinEntryRow() {
  return (
    <div className="absolute contents left-[3.16px] top-[58.08px]">
      <div className="absolute h-0 left-[3.16px] top-[98.48px] w-[215.896px]">
        <div className="absolute inset-[-0.63px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 215.896 0.631273">
            <line opacity="0.24" stroke="#0D0D0C" strokeLinecap="round" strokeWidth="0.631273" x1="0.315637" x2="215.58" y1="0.315637" y2="0.315637" />
          </svg>
        </div>
      </div>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Gilroy-Bold:☞',sans-serif] leading-[15.151px] left-[219.59px] not-italic text-screen-bg text-[10.1px] text-right top-[65.65px] whitespace-nowrap">-$59</p>
      <BalanceToJinArrowBadge />
      <BalanceToJinEntryBody />
    </div>
  );
}

function BalanceFromGoogleSalaryArrowGlyph() {
  return (
    <div className="absolute inset-[20.93%_20.92%_19.79%_19.79%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.98176 8.98209">
        <g>
          <path d={svgPaths.p286a5100} fill="#F5F5F5" />
          <path d={svgPaths.pd711300} fill="#F5F5F5" />
        </g>
      </svg>
    </div>
  );
}

function BalanceFromGoogleSalaryArrowIcon() {
  return (
    <div className="absolute left-[10.73px] overflow-clip size-[15.151px] top-[118.68px]" data-name="down-left-arrow 1">
      <BalanceFromGoogleSalaryArrowGlyph />
    </div>
  );
}

function BalanceFromGoogleSalaryArrowBadge() {
  return (
    <div className="absolute contents left-[3.16px] top-[111.1px]">
      <div className="absolute backdrop-blur-[31.564px] bg-[#1738ad] left-[3.16px] rounded-[10.1px] size-[30.301px] top-[111.1px]" />
      <BalanceFromGoogleSalaryArrowIcon />
    </div>
  );
}

function BalanceFromGoogleSalaryTitleRow() {
  return (
    <div className="absolute contents left-[43.56px] top-[111.1px]">
      <p className="[word-break:break-word] absolute font-['Gilroy-Bold:☞',sans-serif] leading-[15.151px] left-[43.56px] not-italic text-screen-bg text-[10.1px] top-[111.1px] whitespace-nowrap">From Google</p>
      <div className="absolute left-[106.69px] size-[2.525px] top-[117.42px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.52509 2.52509">
          <circle cx="1.26255" cy="1.26255" fill="#0D0D0C" opacity="0.6" r="1.26255" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Gilroy-Medium:☞',sans-serif] leading-[15.151px] left-[111.74px] not-italic opacity-60 text-screen-bg text-[10.1px] top-[111.1px] whitespace-nowrap">Salary</p>
    </div>
  );
}

function BalanceFromGoogleSalaryEntryBody() {
  return (
    <div className="absolute contents left-[43.56px] top-[111.1px]">
      <p className="[word-break:break-word] absolute font-['Gilroy-Regular:☞',sans-serif] leading-[12.625px] left-[43.56px] not-italic opacity-80 text-screen-bg text-[7.575px] top-[128.78px] whitespace-nowrap">10 jun 2022</p>
      <BalanceFromGoogleSalaryTitleRow />
    </div>
  );
}

function BalanceFromGoogleSalaryEntryWithAmount() {
  return (
    <div className="absolute contents left-[3.16px] top-[111.1px]">
      <p className="-translate-x-full [word-break:break-word] absolute font-['Gilroy-Bold:☞',sans-serif] leading-[15.151px] left-[219.28px] not-italic text-screen-bg text-[10.1px] text-right top-[118.68px] whitespace-nowrap">+$859</p>
      <BalanceFromGoogleSalaryArrowBadge />
      <BalanceFromGoogleSalaryEntryBody />
    </div>
  );
}

function BalanceFromGoogleSalaryEntryRow() {
  return (
    <div className="absolute contents left-[3.16px] top-[111.1px]">
      <div className="absolute h-0 left-[3.16px] top-[151.51px] w-[215.896px]">
        <div className="absolute inset-[-0.63px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 215.896 0.631273">
            <line opacity="0.24" stroke="#0D0D0C" strokeLinecap="round" strokeWidth="0.631273" x1="0.315637" x2="215.58" y1="0.315637" y2="0.315637" />
          </svg>
        </div>
      </div>
      <BalanceFromGoogleSalaryEntryWithAmount />
    </div>
  );
}

function BalanceToDavidArrowGlyph() {
  return (
    <div className="absolute inset-[19.79%_19.79%_20.93%_20.92%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.98172 8.9818">
        <g>
          <path d={svgPaths.p3bf7fe00} fill="#FCFEF5" />
          <path d={svgPaths.p20468c00} fill="#FCFEF5" />
        </g>
      </svg>
    </div>
  );
}

function BalanceToDavidArrowIcon() {
  return (
    <div className="absolute left-[10.73px] overflow-clip size-[15.151px] top-[171.71px]" data-name="up-right-arrow 2">
      <BalanceToDavidArrowGlyph />
    </div>
  );
}

function BalanceToDavidArrowBadge() {
  return (
    <div className="absolute contents left-[3.16px] top-[164.13px]">
      <div className="absolute backdrop-blur-[31.564px] bg-screen-purple left-[3.16px] rounded-[10.1px] size-[30.301px] top-[164.13px]" />
      <BalanceToDavidArrowIcon />
    </div>
  );
}

function BalanceToDavidTitleRow() {
  return (
    <div className="absolute contents left-[43.56px] top-[164.13px]">
      <p className="[word-break:break-word] absolute font-['Gilroy-Bold:☞',sans-serif] leading-[15.151px] left-[43.56px] not-italic text-screen-bg text-[10.1px] top-[164.13px] whitespace-nowrap">To David</p>
      <div className="absolute left-[87.12px] size-[2.525px] top-[170.44px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.52509 2.52509">
          <circle cx="1.26255" cy="1.26255" fill="#0D0D0C" opacity="0.6" r="1.26255" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Gilroy-Medium:☞',sans-serif] leading-[15.151px] left-[92.17px] not-italic opacity-60 text-screen-bg text-[10.1px] top-[164.13px] whitespace-nowrap">Work</p>
    </div>
  );
}

function BalanceToDavidEntryBody() {
  return (
    <div className="absolute contents left-[43.56px] top-[164.13px]">
      <p className="[word-break:break-word] absolute font-['Gilroy-Regular:☞',sans-serif] leading-[12.625px] left-[43.56px] not-italic opacity-80 text-screen-bg text-[7.575px] top-[181.81px] whitespace-nowrap">7 jun 2022</p>
      <BalanceToDavidTitleRow />
    </div>
  );
}

function BalanceToDavidEntryWithAmount() {
  return (
    <div className="absolute contents left-[3.16px] top-[164.13px]">
      <p className="-translate-x-full [word-break:break-word] absolute font-['Gilroy-Bold:☞',sans-serif] leading-[15.151px] left-[218.91px] not-italic text-screen-bg text-[10.1px] text-right top-[171.71px] whitespace-nowrap">-$479</p>
      <BalanceToDavidArrowBadge />
      <BalanceToDavidEntryBody />
    </div>
  );
}

function BalanceToDavidEntryRow() {
  return (
    <div className="absolute contents left-[3.16px] top-[164.13px]">
      <div className="absolute h-0 left-[3.16px] top-[204.53px] w-[215.896px]">
        <div className="absolute inset-[-0.63px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 215.896 0.631273">
            <line opacity="0.24" stroke="#0D0D0C" strokeLinecap="round" strokeWidth="0.631273" x1="0.315637" x2="215.58" y1="0.315637" y2="0.315637" />
          </svg>
        </div>
      </div>
      <BalanceToDavidEntryWithAmount />
    </div>
  );
}

function BalanceRecentActivityPanel() {
  return (
    <div className="-translate-x-1/2 absolute h-[204.533px] left-1/2 top-[10px] w-[232.94px]">
      <p className="[word-break:break-word] absolute font-['Gilroy-Bold:☞',sans-serif] leading-[17.676px] left-0 not-italic text-brand-fg-dark text-[12.625px] top-0 whitespace-nowrap">Recent activity</p>
      <BalanceFilterTabSixMonth />
      <BalanceFilterTabThisDay />
      <BalanceFilterTabThisWeek />
      <BalanceFilterTabThisMonth />
      <BalanceToJinEntryRow />
      <BalanceFromGoogleSalaryEntryRow />
      <BalanceToDavidEntryRow />
    </div>
  );
}

function BalanceRecentActivityCard() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0.7)] h-[109px] left-[4px] overflow-clip rounded-[11px] top-1/2 w-[246px]">
      <BalanceRecentActivityPanel />
    </div>
  );
}

function BalanceTotalText() {
  return (
    <div className="[word-break:break-word] absolute contents left-[9.49px] not-italic top-[-134.72px] whitespace-nowrap">
      <p className="absolute font-['Gilroy-Regular:☞',sans-serif] leading-[15.09px] left-[9.49px] opacity-60 text-[9.603px] text-white top-[-134.72px]">Total balance</p>
      <p className="absolute font-['Gilroy-Bold:☞',sans-serif] leading-[24.693px] left-[9.49px] text-screen-accent text-[19.206px] top-[-114.14px]">$42,295.00 USD</p>
    </div>
  );
}

function BalanceUserGreetingText() {
  return (
    <div className="[word-break:break-word] absolute contents leading-[normal] left-[calc(16.67%+8.31px)] not-italic text-screen-text top-[-182.05px] whitespace-nowrap">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold left-[calc(16.67%+8.31px)] text-[10.975px] top-[-182.05px]">Toni Kross</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-[calc(16.67%+8.31px)] opacity-60 text-[8.231px] top-[-163.53px]">Good Morning</p>
    </div>
  );
}

function BalanceNotificationBellGlyph() {
  return (
    <div className="absolute inset-[7.35%_16.14%_6.86%_16.1%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.155 14.1222">
        <g>
          <path clipRule="evenodd" d={svgPaths.p37c3400} fill="#0D0D0C" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p1316dd80} fill="#0D0D0C" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function BalanceNotificationButton() {
  return (
    <div className="absolute contents left-[calc(83.33%+10.46px)] top-[-178.62px]">
      <div className="absolute backdrop-blur-[34.296px] bg-screen-card left-[calc(83.33%+10.46px)] rounded-[8.231px] size-[21.949px] top-[-178.62px]" />
      <div className="absolute left-[calc(83.33%+13.2px)] overflow-clip size-[16.462px] top-[-175.88px]" data-name="001-notification 1">
        <BalanceNotificationBellGlyph />
      </div>
    </div>
  );
}

function BalanceFundTransferGlyph() {
  return (
    <div className="absolute inset-[6.26%_6.14%_6.24%_6.14%]" data-name="Layer_24">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4717 15.4339">
        <g>
          <path d={svgPaths.pcbf4480} fill="#0D0D0C" />
        </g>
      </svg>
    </div>
  );
}

function BalanceFundTransferIcon() {
  return (
    <div className="absolute contents left-[19.09px] top-[-64.76px]">
      <div className="absolute backdrop-blur-[34.296px] bg-screen-card left-[19.09px] rounded-[16.462px] size-[41.155px] top-[-64.76px]" />
      <div className="absolute left-[30.85px] overflow-clip size-[17.638px] top-[-53px]" data-name="transfer-money 1">
        <BalanceFundTransferGlyph />
      </div>
    </div>
  );
}

function BalanceFundTransferAction() {
  return (
    <div className="absolute contents left-[9.49px] top-[-64.76px]">
      <BalanceFundTransferIcon />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Gilroy-Bold:☞',sans-serif] leading-[15.09px] left-[39.99px] not-italic text-screen-text text-[9.603px] text-center top-[-18.12px] whitespace-nowrap">Fund Transfer</p>
    </div>
  );
}

function BalanceMoreActionIcon() {
  return (
    <div className="absolute contents left-[calc(83.33%-8.75px)] top-[-64.76px]">
      <div className="absolute backdrop-blur-[34.296px] bg-screen-card left-[calc(83.33%-8.75px)] rounded-[16.462px] size-[41.155px] top-[-64.76px]" />
      <div className="absolute left-[calc(83.33%+3.01px)] overflow-clip size-[17.638px] top-[-53px]" data-name="012-application 1">
        <div className="absolute inset-[9.38%_53.13%_53.13%_9.38%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.61423 6.61423">
            <path d={svgPaths.p3bb05900} fill="#0D0D0C" />
          </svg>
        </div>
        <div className="absolute inset-[9.38%_9.38%_53.13%_53.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.61423 6.61423">
            <path d={svgPaths.p18651a40} fill="#0D0D0C" />
          </svg>
        </div>
        <div className="absolute inset-[53.13%_53.13%_9.38%_9.38%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.61423 6.61423">
            <path d={svgPaths.p16b8a380} fill="#0D0D0C" />
          </svg>
        </div>
        <div className="absolute inset-[53.12%_9.38%_9.38%_53.12%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.61423 6.61423">
            <path d={svgPaths.p10ae1ef0} fill="#0D0D0C" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BalanceMoreAction() {
  return (
    <div className="absolute contents left-[calc(83.33%-8.75px)] top-[-64.76px]">
      <BalanceMoreActionIcon />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Gilroy-Bold:☞',sans-serif] leading-[15.09px] left-[calc(83.33%+11.67px)] not-italic text-screen-text text-[9.603px] text-center top-[-18.12px] whitespace-nowrap">More</p>
    </div>
  );
}

function BalanceNavHomeIcon() {
  return (
    <div className="absolute inset-[4.52%_5.21%_5.21%_5.21%]" data-name="Layer 2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.7466 14.8604">
        <g>
          <path d={svgPaths.p2bc08e00} fill="#1B1B1B" />
          <path d={svgPaths.p3559c100} fill="#1B1B1B" />
        </g>
      </svg>
    </div>
  );
}

function BalanceNavHomeTab() {
  return (
    <div className="absolute contents inset-[16.25%_84.1%_16.25%_6.15%]">
      <div className="absolute inset-[16.25%_85.9%_53.75%_7.95%] overflow-clip" data-name="006-home-button 1">
        <BalanceNavHomeIcon />
      </div>
      <p className="[word-break:break-word] absolute font-['Gilroy-Medium:☞',sans-serif] inset-[56.25%_83.75%_14.59%_6.15%] leading-[15.09px] not-italic text-screen-icon text-[9.6px] whitespace-nowrap">Home</p>
    </div>
  );
}

function BalanceNavCardIcon() {
  return (
    <div className="absolute inset-[9.37%_5.21%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.7473 13.3755">
        <g>
          <path clipRule="evenodd" d={svgPaths.p317e1b90} fill="#1B1B1B" fillRule="evenodd" />
          <path d={svgPaths.p25495300} fill="#1B1B1B" />
          <g>
            <path clipRule="evenodd" d={svgPaths.p2da3da00} fill="#1B1B1B" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3fe37800} fill="#1B1B1B" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function BalanceNavCardTab() {
  return (
    <div className="absolute contents inset-[16.25%_62.31%_16.25%_29.23%]">
      <p className="[word-break:break-word] absolute font-['Gilroy-Medium:☞',sans-serif] inset-[56.25%_62.17%_14.59%_29.23%] leading-[15.09px] not-italic text-screen-icon text-[9.6px] whitespace-nowrap">Card</p>
      <div className="absolute inset-[16.25%_63.33%_53.75%_30.51%] overflow-clip" data-name="004-credit-card-1 1">
        <BalanceNavCardIcon />
      </div>
    </div>
  );
}

function BalanceNavProfileIcon() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4621 16.4621">
        <g>
          <path d={svgPaths.p23b40980} fill="#1B1B1B" />
        </g>
      </svg>
    </div>
  );
}

function BalanceNavProfileTab() {
  return (
    <div className="absolute contents inset-[16.25%_6.15%_16.25%_83.59%]">
      <p className="[word-break:break-word] absolute font-['Gilroy-Medium:☞',sans-serif] inset-[56.25%_6.32%_14.59%_83.59%] leading-[15.09px] not-italic text-screen-icon text-[9.6px] whitespace-nowrap">Profile</p>
      <div className="absolute inset-[16.25%_8.21%_53.75%_85.64%] overflow-clip" data-name="008-user-1 1">
        <BalanceNavProfileIcon />
      </div>
    </div>
  );
}

function BalanceNavTransactionIcon() {
  return (
    <div className="absolute inset-[17.71%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6318 10.6318">
        <g>
          <path clipRule="evenodd" d={svgPaths.p3bb94000} fill="#1B1B1B" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p35b7e300} fill="#1B1B1B" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function BalanceNavTransactionTab() {
  return (
    <div className="absolute contents inset-[16.25%_29.74%_16.25%_51.03%]">
      <p className="[word-break:break-word] absolute font-['Gilroy-Medium:☞',sans-serif] inset-[56.25%_29.54%_14.59%_51.03%] leading-[15.09px] not-italic text-screen-icon text-[9.6px] whitespace-nowrap">Transaction</p>
      <div className="absolute inset-[16.25%_36.41%_53.75%_57.44%] overflow-clip" data-name="002-swap 1">
        <BalanceNavTransactionIcon />
      </div>
    </div>
  );
}

function BalanceAddMoneyIcon() {
  return (
    <div className="absolute left-[calc(50%+0.57px)] size-[17.638px] top-[-53px]" data-name="dollar 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6379 17.6379">
        <g>
          <path d={svgPaths.p5717500} fill="#0D0D0C" />
        </g>
      </svg>
    </div>
  );
}

function BalanceAddMoneyIconBadge() {
  return (
    <div className="absolute contents left-[calc(33.33%+31.14px)] top-[-64.76px]">
      <div className="absolute backdrop-blur-[34.296px] bg-screen-card left-[calc(33.33%+31.14px)] rounded-[16.462px] size-[41.155px] top-[-64.76px]" />
      <BalanceAddMoneyIcon />
    </div>
  );
}

function BalanceAddMoneyAction() {
  return (
    <div className="absolute contents left-[calc(33.33%+26.34px)] top-[-64.76px]">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Gilroy-Bold:☞',sans-serif] leading-[15.09px] left-[calc(33.33%+51.84px)] not-italic text-screen-text text-[9.603px] text-center top-[-18.12px] whitespace-nowrap">Add Money</p>
      <BalanceAddMoneyIconBadge />
    </div>
  );
}

function BalanceFromGoogleArrowGlyph() {
  return (
    <div className="absolute inset-[20.93%_20.93%_19.79%_19.79%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.75927 9.75922">
        <g>
          <path d={svgPaths.p1950e800} fill="#FCFEF5" />
          <path d={svgPaths.p19b8b400} fill="#FCFEF5" />
        </g>
      </svg>
    </div>
  );
}

function BalanceFromGoogleArrowIcon() {
  return (
    <div className="absolute left-[17.72px] overflow-clip size-[16.462px] top-[257.62px]" data-name="down-left-arrow 1">
      <BalanceFromGoogleArrowGlyph />
    </div>
  );
}

function BalanceFromGoogleArrowBadge() {
  return (
    <div className="absolute contents left-[9.49px] top-[249.39px]">
      <div className="absolute backdrop-blur-[34.296px] bg-[#1738ad] left-[9.49px] rounded-[10.975px] size-[32.924px] top-[249.39px]" />
      <BalanceFromGoogleArrowIcon />
    </div>
  );
}

function BalanceFromGoogleTitleRow() {
  return (
    <div className="absolute contents left-[calc(16.67%+11.06px)] top-[249.39px]">
      <p className="[word-break:break-word] absolute font-['Gilroy-Bold:☞',sans-serif] leading-[16.462px] left-[calc(16.67%+11.06px)] not-italic text-screen-bg text-[10.975px] top-[249.39px] whitespace-nowrap">From Google</p>
      <div className="absolute left-[calc(50%-5.02px)] size-[2.744px] top-[256.25px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.74368 2.74368">
          <circle cx="1.37184" cy="1.37184" fill="#0D0D0C" opacity="0.6" r="1.37184" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Gilroy-Medium:☞',sans-serif] leading-[16.462px] left-[calc(50%+0.47px)] not-italic opacity-60 text-screen-bg text-[10.975px] top-[249.39px] whitespace-nowrap">Bonus</p>
    </div>
  );
}

function BalanceFromGoogleEntryBody() {
  return (
    <div className="absolute contents left-[calc(16.67%+11.06px)] top-[249.39px]">
      <p className="[word-break:break-word] absolute font-['Gilroy-Regular:☞',sans-serif] leading-[13.718px] left-[calc(16.67%+11.06px)] not-italic opacity-80 text-screen-bg text-[8.231px] top-[268.6px] whitespace-nowrap">10 jun 2022</p>
      <BalanceFromGoogleTitleRow />
    </div>
  );
}

function BalanceFromGoogleEntryWithAmount() {
  return (
    <div className="absolute contents left-[9.49px] top-[249.39px]">
      <p className="-translate-x-full [word-break:break-word] absolute font-['Gilroy-Bold:☞',sans-serif] leading-[16.462px] left-[calc(83.33%+32.23px)] not-italic text-screen-bg text-[10.975px] text-right top-[257.62px] whitespace-nowrap">+$859</p>
      <BalanceFromGoogleArrowBadge />
      <BalanceFromGoogleEntryBody />
    </div>
  );
}

function BalanceFromGoogleEntryRow() {
  return (
    <div className="absolute contents left-[9.49px] top-[249.39px]">
      <div className="absolute h-0 left-[9.49px] top-[293.29px] w-[234.585px]">
        <div className="absolute inset-[-0.69px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 234.585 0.68592">
            <line opacity="0.24" stroke="#0D0D0C" strokeLinecap="round" strokeWidth="0.68592" x1="0.34296" x2="234.242" y1="0.34296" y2="0.34296" />
          </svg>
        </div>
      </div>
      <BalanceFromGoogleEntryWithAmount />
    </div>
  );
}

function BalanceCardWidget() {
  return (
    <div className="absolute backdrop-blur-[8.096px] bg-[rgba(255,255,255,0.4)] h-[117px] left-[-28px] overflow-clip rounded-[12px] top-[150px] w-[254px]" data-name="Home">
      <BalanceRecentActivityCard />
      <BalanceTotalText />
      <BalanceUserGreetingText />
      <div className="absolute h-0 left-[9.49px] top-[-81.22px] w-[234.585px]">
        <div className="absolute inset-[-0.69px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 234.585 0.68592">
            <line opacity="0.24" stroke="white" strokeLinecap="round" strokeWidth="0.68592" x1="0.34296" x2="234.242" y1="0.34296" y2="0.34296" />
          </svg>
        </div>
      </div>
      <BalanceNotificationButton />
      <BalanceFundTransferAction />
      <BalanceMoreAction />
      <div className="absolute h-[54.874px] left-[-6.97px] top-[298.78px] w-[267.509px]" data-name="nav">
        <div className="absolute inset-[0_79.49%_0_0]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <foreignObject height="0" width="0" x="0" y="0">
              <div style={{ backdropFilter: "blur(27.44px)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <g data-figma-bg-blur-radius="54.8736" />
          </svg>
        </div>
        <div className="absolute backdrop-blur-[27.437px] bg-[#e7e7e7] inset-0 opacity-80 rounded-tl-[20.578px] rounded-tr-[20.578px]" />
        <BalanceNavHomeTab />
        <BalanceNavCardTab />
        <BalanceNavProfileTab />
        <BalanceNavTransactionTab />
        <div className="absolute bg-screen-accent inset-[0_84.1%_98.13%_6.41%] rounded-[24px]" />
      </div>
      <BalanceAddMoneyAction />
      <div className="absolute left-[9.49px] rounded-[10.975px] size-[32.924px] top-[-184.11px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10.975px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[10.975px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[10.975px] size-full" src="/user-avatar.png" />
        </div>
      </div>
      <BalanceFromGoogleEntryRow />
    </div>
  );
}

function HeroPortraitWithWidgets() {
  return (
    <div className="relative flex w-full justify-center h-[230px] sm:h-[300px] dt:contents">
      <div className="origin-top scale-[0.62] sm:scale-[0.9] dt:scale-100 dt:absolute dt:left-[calc(58.33%-22px)] dt:top-[230px]">
        <div className="relative h-[301px] w-[562px]">
          <div
            className="absolute h-[300.706px] left-[87.13px] rounded-[31px] top-[0.25px] w-[362.638px]"
            data-name="Pexels Photo by Andrea Piacquadio"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[31px]">
              <img
                alt=""
                className="absolute h-[100.04%] left-[-24.37%] max-w-none top-[-0.02%] w-[124.37%]"
                src="/hero-customer-portrait.png"
              />
            </div>
          </div>
          <RecentActivityWidget />
          <BalanceCardWidget />
        </div>
      </div>
    </div>
  );
}

function HeroBackgroundGlow() {
  return (
    <div className="absolute left-[calc(58.33%+33.13px)] size-[398.873px] top-[204.52px]">
      <div className="absolute inset-[-25.07%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 598.873 598.873"
        >
          <g filter="url(#hero-glow-blur)" opacity="0.5">
            <circle
              cx="299.437"
              cy="299.437"
              fill="url(#hero-glow-gradient)"
              r="199.437"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="598.873"
              id="hero-glow-blur"
              width="598.873"
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
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="hero-glow-gradient"
              x1="195.436"
              x2="590.687"
              y1="-320.62"
              y2="-226.218"
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

export default function HeroSection() {
  return (
    <div
      className="bg-brand-bg relative w-full overflow-clip flex flex-col gap-12 px-5 pt-[120px] pb-14 dt:block dt:h-[811px] dt:w-[1440px] dt:px-0 dt:pt-0 dt:pb-0"
      data-name="Desktop - 1"
    >
      <HeroBackgroundGlow />
      <HeroLeftColumn />
      <HeroPortraitWithWidgets />
      <TrustedByBlock />
    </div>
  );
}
