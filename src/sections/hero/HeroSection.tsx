import { HeroBackgroundGlow } from "./HeroBackgroundGlow";
import { HeroIntro } from "./HeroIntro";
import { HeroPortraitWithWidgets } from "./HeroPortrait";
import { TrustedByBlock } from "./HeroTrustedBy";

export default function HeroSection() {
  return (
    <section
      className="bg-brand-bg relative w-full overflow-clip flex flex-col gap-12 px-5 pt-[120px] pb-14 dt:block dt:h-[811px] dt:w-[1440px] dt:px-0 dt:pt-0 dt:pb-0"
      data-name="Desktop - 1"
      aria-label="Hero"
    >
      <HeroBackgroundGlow />
      <HeroIntro />
      <HeroPortraitWithWidgets />
      <TrustedByBlock />
    </section>
  );
}
