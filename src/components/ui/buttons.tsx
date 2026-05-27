import type { ButtonHTMLAttributes } from "react";
import { CyanArrowIcon } from "./icons";

const monoLabelClass =
  "[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[15px] uppercase whitespace-nowrap";

type ButtonBaseProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  paddingClassName?: string;
  className?: string;
};

export function PrimaryGradientButton({
  label,
  paddingClassName = "px-[51px] py-[15px]",
  className = "",
  type = "button",
  ...props
}: ButtonBaseProps) {
  return (
    <button
      type={type}
      className={`content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 border-0 cursor-pointer ${paddingClassName} ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(141.821deg, rgb(0, 180, 253) 5.6799%, rgb(0, 58, 206) 86.975%)",
      }}
      {...props}
    >
      <span className={`${monoLabelClass} text-white`}>{label}</span>
    </button>
  );
}

export function OutlinedButton({
  label,
  paddingClassName = "px-[59px] py-[15px]",
  className = "",
  type = "button",
  ...props
}: ButtonBaseProps) {
  return (
    <button
      type={type}
      className={`content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 border-0 bg-transparent cursor-pointer ${paddingClassName} ${className}`}
      {...props}
    >
      <span
        aria-hidden="true"
        className="absolute border border-brand-fg border-solid inset-0 pointer-events-none rounded-[10px]"
      />
      <span className={`${monoLabelClass} text-brand-fg`}>{label}</span>
    </button>
  );
}

export function NavOutlineButton({
  label,
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { label: string }) {
  return (
    <button
      type="button"
      className={`content-stretch flex items-center justify-center px-[37px] py-[5px] relative rounded-[6px] shrink-0 border-0 bg-transparent cursor-pointer ${className}`}
      {...props}
    >
      <span
        aria-hidden="true"
        className="absolute border border-brand-fg border-solid inset-0 pointer-events-none rounded-[6px]"
      />
      <span className="[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-brand-fg text-[12px] uppercase whitespace-nowrap">
        {label}
      </span>
    </button>
  );
}

type LearnMoreLinkProps = {
  label?: string;
  underlineStroke?: string;
  labelClassName?: string;
  showArrow?: boolean;
};

export function LearnMoreLink({
  label = "learn more",
  underlineStroke = "#00B4FD",
  labelClassName = "text-brand-accent-cyan",
  showArrow = true,
}: LearnMoreLinkProps) {
  return (
    <a
      href="#"
      className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 no-underline"
      onClick={(e) => e.preventDefault()}
    >
      <span className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
        <span
          className={`[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[14px] text-right uppercase whitespace-nowrap ${labelClassName}`}
        >
          {label}
        </span>
        {showArrow ? <CyanArrowIcon /> : null}
      </span>
      <span className="h-0 relative shrink-0 w-[32.577px]">
        <span className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 32.5773 1"
            aria-hidden="true"
          >
            <line stroke={underlineStroke} x2="32.5773" y1="0.5" y2="0.5" />
          </svg>
        </span>
      </span>
    </a>
  );
}
