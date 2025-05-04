import PrimaryBadge from "@/components/molecules/badge/primary-badge";
import PrimaryButton from "@/components/molecules/button/primary-button";
import LaunchPadCard from "@/components/molecules/card/launchpad-card";

const LaunchpadSection = () => {
  return (
    <section className="p-4 mb-20 lg:mb-40" id="roadmap">
      <div className="flex justify-center items-center mb-12">
        <PrimaryBadge label="Neos Launchpad" className="mb-12" />
      </div>
      <div className="mb-14 flex flex-col gap-8 justify-center items-center">
        <div>
          <h3 className="mb-6 text-center">
            <span className="text-[40px] leading-[48px] font-maxima-nouva font-bold">
              Launch a narrative with Neos Launchpad
            </span>
          </h3>

          <p className="text-muted-foreground text-base text-center max-w-[600px]">
            Stay ahead of the trend, keep up with the narratives, and launch
            your own token after a narrative with easy-to-use Neos Launchpad
            token creator.
          </p>
        </div>

        <PrimaryButton>Coming Soon</PrimaryButton>
      </div>

      <div className="flex flex-col gap-8 justify-center items-center lg:grid lg:grid-cols-2 lg:gap-4 lg:w-[800px] lg:mx-auto">
        <LaunchPadCard
          title="Integration with the Neos Bot"
          thumbnail="/image/launchpad/launchpad-1.svg"
          description="Connected to real-time narrative notifications for instant action."
        />

        <LaunchPadCard
          title="Real-Time Insights"
          thumbnail="/image/launchpad/launchpad-2.svg"
          description="Live feed of what’s trending in crypto space and from crypto influencers."
        />

        <LaunchPadCard
          title="Auto-Launch Feature"
          thumbnail="/image/launchpad/launchpad-3.svg"
          description="One-click token launches based on detected narratives with no delays."
        />

        <LaunchPadCard
          title="First Mover Advantage"
          thumbnail="/image/launchpad/launchpad-4.svg"
          description="Inspired by pump.fun, but built for Ethereum and enhanced with AI."
        />
      </div>
    </section>
  );
};

export default LaunchpadSection;
