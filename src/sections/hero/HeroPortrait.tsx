import { AppImage } from "../../components/ui";
import { BalanceCardWidget } from "./widgets/BalanceCardWidget";
import { RecentActivityWidget } from "./widgets/RecentActivityWidget";

export function HeroPortraitWithWidgets() {
  return (
    <div className="relative flex w-full justify-center h-[230px] sm:h-[300px] dt:contents">
      <div className="origin-top scale-[0.62] sm:scale-[0.9] dt:scale-100 dt:absolute dt:left-[calc(58.33%-22px)] dt:top-[230px]">
        <div className="relative h-[301px] w-[562px]">
          <div
            className="absolute h-[300.706px] left-[87.13px] rounded-[31px] top-[0.25px] w-[362.638px]"
            data-name="Pexels Photo by Andrea Piacquadio"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[31px]">
              <AppImage
                alt="Banking customer portrait"
                className="absolute h-[100.04%] left-[-24.37%] max-w-none top-[-0.02%] w-[124.37%]"
                src="/hero-customer-portrait.png"
                eager
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
