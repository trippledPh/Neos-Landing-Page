import PrimaryBadge from "@/components/molecules/badge/primary-badge";
import RoadMapCard from "@/components/molecules/card/road-map-card";
import CurveDownDottedLine from "@/components/molecules/lines/curve-down-dotted";
import StraightDownDottedLine from "@/components/molecules/lines/straight-down-dotted";
import Logo from "@/components/ui/logo";
import useScreenBreakpoint from "@/hook/use-screen-breakpoint";
import { cn } from "@/lib/utils";

const RoadMapSection = () => {
  const { isMobile, isDesktop, isLargeDesktop, isSmallMobile } =
    useScreenBreakpoint({
      desktop: 1024,
    });

  return (
    <section className="my-18 p-4 mb-[200px]" id="roadmap">
      <div className="flex justify-center items-center mb-12">
        <PrimaryBadge label="Coming soon" />
      </div>
      <div className="mb-12">
        <h3 className="mb-10 mt-8 text-center">
          <span className="text-5xl font-semibold text-center">
            Roadmap of Neos
          </span>
        </h3>
        <p className="text-muted-foreground text-lg text-center">
          AI-powered bot that analyzes tweets from top crypto influencers in
          real-time to identify emerging trends and narratives.
        </p>
      </div>

      <div className="flex flex-col items-center justify-between">
        <div className="relative">
          <Logo size={120} />
          {isDesktop ||
            (isLargeDesktop && (
              <div className="absolute -left-[110px] top-1/2 -translate-y-1/2 -translate-x-1/2 bottom-[40px]">
                <CurveDownDottedLine
                  direction="left"
                  horizontalLength={200}
                  verticalLength={200}
                />
              </div>
            ))}
        </div>

        {isMobile || isSmallMobile ? (
          <StraightDownDottedLine height={100} />
        ) : (
          <div className="mb-[120px]"></div>
        )}

        <div className="relative">
          <RoadMapCard
            indicatorLabel="Q1"
            title="Core Development and Telegram Bot Lauch"
            goal="Goal: Establish infrastructure, develop Telegram bot, and finalize app UI."
            deliverablesLabel="Deliverables for Q1:"
            deliverables={[
              "Infrastructure for data collection.",
              "Active Telegram bot with notifications.",
              "Finalized app UI design.",
            ]}
            redirectLink="www.google.com"
            className={cn(!isMobile && "lg:mr-64")}
          />

          {isDesktop ||
            (isLargeDesktop && (
              <CurveDownDottedLine
                direction="right"
                horizontalLength={150}
                verticalLength={500}
                verticalOffset={100}
                className="absolute right-[100px] top-1/4"
              />
            ))}
        </div>

        {isMobile || isSmallMobile ? (
          <StraightDownDottedLine height={100} />
        ) : (
          <div className="mb-[120px]"></div>
        )}

        <div className="relative">
          <RoadMapCard
            indicatorLabel="Q2"
            title="App Development Advance NLP, & Multi-Channel Notifications"
            goal="Goal: Develop mobile/web app, enchance notifications, and  improve NLP capabilities."
            deliverablesLabel="Deliverables for Q2:"
            deliverables={[
              "Mobile/Web apps in development.",
              "Advanced NLP features (sentiment analysis, NER).",
              "Multi-channel notification system (push, email, SMS).",
            ]}
            redirectLink="www.google.com"
            className={cn(!isMobile && "lg:ml-64")}
          />

          {isDesktop ||
            (isLargeDesktop && (
              <CurveDownDottedLine
                direction="left"
                horizontalLength={150}
                verticalLength={500}
                verticalOffset={100}
                className="absolute right-[610px] top-1/4"
              />
            ))}
        </div>

        {isMobile || isSmallMobile ? (
          <StraightDownDottedLine height={100} />
        ) : (
          <div className="mb-[120px]"></div>
        )}

        <div className="relative">
          <RoadMapCard
            indicatorLabel="Q3"
            title="App Launch, User Onboarding, & Marketing Ramp-up"
            goal="Goal: Launch the app, onboard users, and initiate aggressive marketing."
            deliverablesLabel="Deliverables for Q3:"
            deliverables={[
              "Successful app launch (mobile/web).",
              "Active user onboarding and referral program.",
              "CEX listings and exchange promotions.",
            ]}
            redirectLink="www.google.com"
            className={cn(!isMobile && "lg:mr-64")}
          />

          {isDesktop ||
            (isLargeDesktop && (
              <CurveDownDottedLine
                direction="right"
                horizontalLength={150}
                verticalLength={500}
                verticalOffset={100}
                className="absolute right-[100px] top-1/4"
              />
            ))}
        </div>

        {isMobile || isSmallMobile ? (
          <StraightDownDottedLine height={100} />
        ) : (
          <div className="mb-[120px]"></div>
        )}

        <div className="relative">
          <RoadMapCard
            indicatorLabel="Q4"
            title="Scaling, Advanced Features, & Global Growth"
            goal="Goal: Scale platform, expand globally, and refine features based on user feedback."
            deliverablesLabel="Deliverables for Q4:"
            deliverables={[
              "Scalable platform with global reach.",
              "Advanced AI features for trend prediction.",
              "International marketing push and global partnerships.",
            ]}
            redirectLink="www.google.com"
            className={cn(!isMobile && "lg:ml-64")}
          />
        </div>
      </div>
    </section>
  );
};

export default RoadMapSection;
