import svgPaths from "../../../assets/svg-paths";
import { AppImage } from "../../../components/ui";

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
          <AppImage
            alt="User avatar for Toni Kross"
            className="absolute max-w-none object-cover rounded-[8.609px] size-full"
            src="/user-avatar.png"
          />
        </div>
      </div>
    </div>
  );
}

export function RecentActivityWidget() {
  return (
    <div className="-translate-y-1/2 absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.4)] h-[177px] left-[353px] overflow-clip rounded-[12px] shadow-[0px_0px_27.571px_8.92px_rgba(0,0,0,0.25)] top-[calc(50%-39px)] w-[208px]" data-name="Home">
      <div className="absolute h-[43.044px] left-[-0.52px] top-[405.79px] w-[209.839px]" data-name="nav">
        <div className="absolute inset-[0_79.49%_0_0]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <foreignObject height="0" width="0" x="0" y="0">
              <div style={{ backdropFilter: "blur(21.52px)", height: "100%", width: "100%" }} />
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
