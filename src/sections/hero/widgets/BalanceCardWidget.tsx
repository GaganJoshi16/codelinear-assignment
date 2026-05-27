import svgPaths from "../../../assets/svg-paths";
import { AppImage } from "../../../components/ui";

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

export function BalanceCardWidget() {
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
              <div style={{ backdropFilter: "blur(27.44px)", height: "100%", width: "100%" }} />
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
          <AppImage
            alt="User avatar for Toni Kross"
            className="absolute max-w-none object-cover rounded-[10.975px] size-full"
            src="/user-avatar.png"
          />
        </div>
      </div>
      <BalanceFromGoogleEntryRow />
    </div>
  );
}