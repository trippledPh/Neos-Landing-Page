import PrimaryBadge from "@/components/molecules/badge/primary-badge";
import FeatureCard from "@/components/molecules/card/feature-card";
const FeatureSection = () => {
  return (
    <section className="p-4 mb-20 lg:mb-40" id="features">
      <div className="flex justify-center items-center mb-12">
        <PrimaryBadge label="Key Features" />
      </div>
      <div className="flex flex-col gap-8 mb-20  lg:justify-center lg:items-center">
        <h3 className="text-[40px] leading-[48px] text-center space-x-4 lg:text-6xl lg:leading-tight lg:flex lg:flex-row lg:gap-0 lg:w-[800px] lg:text-wrap lg:flex-wrap lg:justify-center lg:items-center font-maxima-nouva font-thin">
          <span>Stay</span>
          <span className="font-bold">ahead of the trend</span>
          <span>with Neos</span>
        </h3>
        <p className="text-base text-muted-foreground text-center lg:w-[600px]">
          Monitor top crypto influencers in real time and discover emerging
          trends and market narratives before they take off.
        </p>
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-4 lg:justify-center lg:items-center lg:max-w-[850px] lg:mx-auto">
        <FeatureCard
          title="Make Impact Insight"
          description="Gauge the potential for profits or risks with Neos market insights"
          thumbnail="/image/feature/feature-1.svg"
        />

        <FeatureCard
          title="Cross-Platform Notifications "
          description="Ensure you’re on top of the narrative with mobile or web notifications"
          thumbnail="/image/feature/feature-2.svg"
        />

        <FeatureCard
          title="Real-Time Sentiment Alerts"
          description="Stay up-to-date with what’s happening in volatile crypto markets"
          thumbnail="/image/feature/feature-3.svg"
        />

        <FeatureCard
          title="Integrated Buy Buttons"
          description="Get notified with integrated buy buttons and direct trading links"
          thumbnail="/image/feature/feature-4.svg"
        />

        <FeatureCard
          title="Live Market Data on Tokens"
          description="Track the coin’s current market situation without leaving the app"
          thumbnail="/image/feature/feature-5.svg"
        />

        <FeatureCard
          title="Token Watchlist Integration"
          description="Track the narrative and get updated on any market changes"
          thumbnail="/image/feature/feature-6.svg"
        />
      </div>
    </section>
  );
};

export default FeatureSection;
