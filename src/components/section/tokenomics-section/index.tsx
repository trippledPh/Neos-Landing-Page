import PrimaryBadge from "@/components/molecules/badge/primary-badge";
import { TokenomicsChart } from "@/components/molecules/chart/radial-chart";
import TokenDetails from "@/components/molecules/token/token-details";
import TokenSubDetails from "@/components/molecules/token/token-sub-details";
import useScreenBreakpoint from "@/hook/use-screen-breakpoint";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const TokenomicsSection = () => {
  const [endAngle, setEndAngle] = useState(180);
  const [innerRadius, setInnerRadius] = useState(140);
  const [outerRadius, setOuterRadius] = useState(240);

  const { isMobile, isDesktop, isTablet, isSmallMobile, isLargeDesktop } =
    useScreenBreakpoint({
      smallMobile: 320,
      mobile: 480,
      tablet: 768,
      desktop: 1024,
      largeDesktop: 1440,
    });

  useEffect(() => {
    if (isSmallMobile) {
      setEndAngle(180);
      setInnerRadius(120);
      setOuterRadius(220);
    }
  }, [isSmallMobile]);

  useEffect(() => {
    if (isMobile) {
      setEndAngle(180);
      setInnerRadius(140);
      setOuterRadius(240);
    }
  }, [isMobile]);

  useEffect(() => {
    if (isTablet) {
      setEndAngle(180);
      setInnerRadius(240);
      setOuterRadius(400);
    }
  }, [isTablet]);

  useEffect(() => {
    if (isDesktop) {
      setEndAngle(180);
      setInnerRadius(300);
      setOuterRadius(440);
    }
  }, [isDesktop]);

  useEffect(() => {
    if (isLargeDesktop) {
      setEndAngle(180);
      setInnerRadius(300);
      setOuterRadius(440);
    }
  }, [isLargeDesktop]);

  return (
    <section className="my-18 mb-[100px] lg:mb-[200px] p-4" id="tokenomics">
      <div>
        <PrimaryBadge label="Tokenomics" />
        <div className="mb-12 lg:flex lg:justify-between lg:items-center lg:mb-0">
          <div>
            <h3 className="mb-10 mt-8">
              <span className="text-5xl font-semibold">1,000,000 Supply</span>
            </h3>
            {!isLargeDesktop && (
              <p className="text-muted-foreground text-lg md:w-[400px]">
                A transparent and sustainable tokenomics model designed to drive
                long-term growth and ecosystem stability.
              </p>
            )}
          </div>

          {isLargeDesktop && (
            <p className="text-muted-foreground text-lg md:w-[600px] text-end">
              A transparent and sustainable tokenomics model designed to drive
              long-term growth and ecosystem stability.
            </p>
          )}
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-4 overflow-hidden md:mb-8">
          <button className="flex items-center gap-4 text-2xl bg-gradient-to-r from-primary-foreground to-primary bg-clip-text text-transparent mb-12">
            See roadmap
            <ArrowDown className="text-primary" />
          </button>
          <div className="flex flex-col mb-12 md:flex-row md:grid md:grid-cols-[auto_20%] md:gap-8 md:mb-0 xl:justify-center xl:items-center">
            <div className="h-[240px] md:h-[290px] lg:h-[400px] xl:h-[450px] xl:w-[800px] overflow-hidden ">
              <TokenomicsChart
                endAngle={endAngle}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
              />
            </div>
            <div className="flex flex-row gap-4 justify-between items-center md:flex-col md:gap-4 md:justify-start md:items-start">
              <TokenDetails
                label="Liquidity Pool"
                value="84.8%"
                color="#FF0000"
              />
              <TokenDetails
                label="Private Sale"
                value="10.2%"
                color="#FF7400"
              />
              <TokenDetails label="Treasury" value="5%" color="#FFAB82" />
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] mb-12 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

        <div className="flex flex-col gap-4 items-center justify-center md:flex-row md:gap-18 lg:gap-32">
          <TokenSubDetails label="Tax" value="4/4" />
          <TokenSubDetails label="Development" value="2%" />
          <TokenSubDetails label="Marketing" value="1%" />
          <TokenSubDetails label="Team" value="1%" />
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
