import CalloutSection from "@/components/organism/section/callout-section";
import FrequentlyAskSection from "@/components/organism/section/faq-section";
import FooterSection from "@/components/organism/section/footer";

import LaunchPadHeroSection from "@/components/organism/section/launchpad-hero-section";
import Header from "@/components/templates/layout/header";
import { LAUNCHPAD_FAQ_DATA } from "@/data/launchpad/launchpad-faq.data";
import LAUNCHPAD_NAVIGATION_DATA from "@/data/launchpad/launchpad.navigation.data";

const LaunchPadScreen = () => {
  return (
    <div className="overflow-visible mx-auto max-w-[1440px]">
      <div>
        <Header routes={LAUNCHPAD_NAVIGATION_DATA} />
        <div
          className="relative min-h-[calc(100vh-82px)]  flex justify-center items-center flex-col gap-8 mb-[80px] pb-[80px]"
          style={{
            background: "url('/image/background/beam-background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <LaunchPadHeroSection />
        </div>
        <FrequentlyAskSection faqData={LAUNCHPAD_FAQ_DATA} />
        <CalloutSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default LaunchPadScreen;
