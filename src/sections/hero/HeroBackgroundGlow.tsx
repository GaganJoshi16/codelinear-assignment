export function HeroBackgroundGlow() {
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
