import { BrowserRouter } from "react-router-dom";
import Header from "./components/layout/header";
import ArticleSection from "./components/section/article-section";
import CalloutSection from "./components/section/callout-section";
import FrequentlyAskSection from "./components/section/faq-section";
import FeatureSection from "./components/section/feature-section";
import FooterSection from "./components/section/footer";
import HeroSection from "./components/section/hero-section";
import RoadMapSection from "./components/section/roadmap-section";
import SponsorSection from "./components/section/sponsor-section";
import TokenomicsSection from "./components/section/tokenomics-section";

const App = () => {
  return (
    <BrowserRouter>
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
        <FrequentlyAskSection />
        <CalloutSection />
        <FooterSection />
      </div>
    </BrowserRouter>
  );
};

export default App;
