import { useState } from "react";
import svgPaths from "../assets/svg-paths";

function DropdownChevron() {
  return (
    <div className="relative size-[13.728px]">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 13.728 13.728"
      >
        <g clipPath="url(#nav-chevron-clip)">
          <path
            d={svgPaths.p15eda9a6}
            stroke="#E9F4F9"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.144"
          />
        </g>
        <defs>
          <clipPath id="nav-chevron-clip">
            <rect fill="white" height="13.728" width="13.728" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavLinkWithMenu({ label }: { label: string }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-brand-fg text-[12px] uppercase whitespace-nowrap">
        {label}
      </p>
      <div className="flex items-center justify-center relative shrink-0 size-[13.728px]">
        <div className="-rotate-90 flex-none">
          <DropdownChevron />
        </div>
      </div>
    </div>
  );
}

function NavLink({ label }: { label: string }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-brand-fg text-[12px] uppercase whitespace-nowrap">
        {label}
      </p>
    </div>
  );
}

function PrimaryNavLinks() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0">
      <NavLinkWithMenu label="solutions" />
      <NavLinkWithMenu label="resources" />
      <NavLink label="About us" />
    </div>
  );
}

function RequestDemoButton() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <div className="content-stretch flex items-center justify-center px-[37px] py-[5px] relative rounded-[6px] shrink-0">
        <div
          aria-hidden="true"
          className="absolute border border-brand-fg border-solid inset-0 pointer-events-none rounded-[6px]"
        />
        <p className="[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-brand-fg text-[12px] uppercase whitespace-nowrap">
          request demo
        </p>
      </div>
    </div>
  );
}

function NavRightCluster() {
  return (
    <div className="content-stretch flex gap-[80px] items-center relative shrink-0">
      <PrimaryNavLinks />
      <RequestDemoButton />
    </div>
  );
}

function MenuToggleIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path
        d={open ? "M5 5l12 12M17 5L5 17" : "M3 7h16M3 11h16M3 15h16"}
        stroke="#E9F4F9"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function HeaderNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute z-50 left-4 right-4 top-4 dt:left-1/2 dt:right-auto dt:-translate-x-1/2 dt:top-[31px] backdrop-blur-[7.5px] bg-[rgba(47,47,47,0.7)] rounded-[12px] px-[16px] dt:px-[10px] py-[10px] dt:py-[9px]">
      <div className="flex items-center justify-between dt:justify-start dt:gap-[160px]">
        <p
          className="[word-break:break-word] font-['Archivo:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-brand-fg text-[20px] dt:text-[24px] whitespace-nowrap"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          N7
        </p>

        <div className="hidden dt:block">
          <NavRightCluster />
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="dt:hidden flex items-center justify-center size-9 -mr-1 text-brand-fg"
        >
          <MenuToggleIcon open={open} />
        </button>
      </div>

      {open && (
        <div className="dt:hidden flex flex-col gap-5 pt-5 pb-2">
          <NavLinkWithMenu label="solutions" />
          <NavLinkWithMenu label="resources" />
          <NavLink label="About us" />
          <div className="pt-1">
            <RequestDemoButton />
          </div>
        </div>
      )}
    </div>
  );
}
