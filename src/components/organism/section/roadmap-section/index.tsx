import PrimaryBadge from "@/components/molecules/badge/primary-badge";
import RoadMapCard from "@/components/molecules/card/road-map-card";
import CurveDownDottedLine from "@/components/molecules/lines/curve-down-dotted";
import StraightDownDottedLine from "@/components/molecules/lines/straight-down-dotted";
import Logo from "@/components/ui/logo";
import { ROADMAP_DATA } from "@/data/roadmap.data";
import useScreenBreakpoint from "@/hook/use-screen-breakpoint";
import { cn } from "@/lib/utils";

const RoadMapSection = () => {
  const { isMobile, isDesktop, isLargeDesktop, isSmallMobile } =
    useScreenBreakpoint({
      desktop: 1024,
    });

  return (
    <section className="p-4 mb-20" id="roadmap">
      <div className="flex justify-center items-center mb-12">
        <PrimaryBadge label="Coming soon" className="mb-12" />
      </div>
      <div className="mb-14">
        <h3 className="mb-6 text-center">
          <span className="text-[40px] leading-[48px] font-maxima-nouva font-bold">
            Roadmap of Neos
          </span>
        </h3>
        <p className="text-muted-foreground text-base text-center">
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

        <div>
          {ROADMAP_DATA.map((roadmap, index) => {
            const isLast = index === ROADMAP_DATA.length - 1;
            const isFirst = index === 0;
            const isEven = index % 2 === 0;
            const isOdd = index % 2 !== 0;

            const isEvenCardMargin = isEven && !isLast ? "mr-64" : "";
            const isOddCardMargin = isOdd && !isFirst ? "ml-64" : "";

            const isEvenCurveMargin = isEven && !isLast ? "right-[100px]" : "";
            const isOddCurveMargin = isOdd && !isFirst ? "left-[100px]" : "";

            return (
              <div key={roadmap.id}>
                {isMobile || isSmallMobile ? (
                  <StraightDownDottedLine height={100} />
                ) : (
                  <div className="mb-[120px]"></div>
                )}

                <div className="relative">
                  <RoadMapCard
                    {...roadmap}
                    className={cn(
                      (isDesktop || isLargeDesktop) && isEvenCardMargin,
                      (isDesktop || isLargeDesktop) && isOddCardMargin
                    )}
                  />

                  {isDesktop ||
                    (isLargeDesktop && !isLast && (
                      <CurveDownDottedLine
                        direction={isEven ? "right" : "left"}
                        horizontalLength={150}
                        verticalLength={500}
                        verticalOffset={100}
                        className={cn(
                          "absolute right-[100px] top-1/2",
                          isEvenCurveMargin,
                          isOddCurveMargin
                        )}
                      />
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoadMapSection;
