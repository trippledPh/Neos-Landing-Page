import Header from "../../templates/layout/header";
import ArticleSection from "../../organism/section/article-section";
import CalloutSection from "../../organism/section/callout-section";
import FrequentlyAskSection from "../../organism/section/faq-section";
import FeatureSection from "../../organism/section/feature-section";
import FooterSection from "../../organism/section/footer";
import HeroSection from "../../organism/section/hero-section";
import RoadMapSection from "../../organism/section/roadmap-section";
import SponsorSection from "../../organism/section/sponsor-section";
import TokenomicsSection from "../../organism/section/tokenomics-section";
import LaunchpadSection from "@/components/organism/section/launchpad-section";

const LandingPage = () => {
  return (
    <div className="overflow-x-hidden mx-auto max-w-[1440px]">
      <Header />
      <div
        className="relative min-h-[calc(100vh-82px)]  flex justify-center items-center flex-col gap-8 mb-[80px]"
        style={{
          background: "url('/image/background/beam-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <HeroSection />
        <SponsorSection />
      </div>
      <ArticleSection />
      <FeatureSection />
      <TokenomicsSection />
      <RoadMapSection />
      <LaunchpadSection />
      <FrequentlyAskSection />
      <CalloutSection />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
