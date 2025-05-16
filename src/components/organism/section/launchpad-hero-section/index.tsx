import GlowingPrimaryButton from "@/components/molecules/button/glowing-primary-button";
import LaunchPadGlowingCard from "@/components/molecules/card/gloawing-card";
import { LaunchPadArticleData } from "@/data/launchpad-article.data";

const LaunchPadHeroSection = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center p-4 gap-6 mt-[100px] p-4  xl:flex-row xl:gap-8 xl:items-start lg:justify-start">
      <div className="flex flex-col justify-center items-center  gap-[48px] mb-[48px] md:items-center xl:items-start md:justify-center ">
        <div className="flex flex-col items-start gap-6 md:text-center md:justify-center md:items-center">
          <h3 className="text-[52px] leading-[48px] text-left md:text-5xl md:leading-[56px] text-wrap text-center max-w-[600px] w-fit font-maxima-nouva font-thin md:text-center md:text-[80px] ">
            <span className="font-bold">Neos</span> Launchpad
          </h3>
          <p className="text-muted-foreground text-base text-left md:text-center  max-w-[600px] md:max-w-[450px] ">
            Your one-stop platform for discovering, tracking, and acting on the
            hottest crypto narratives—instantly.
          </p>
        </div>

        <GlowingPrimaryButton>Launch Start</GlowingPrimaryButton>
      </div>

      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-8  ">
        <div className="flex flex-col gap-4">
          <LaunchPadGlowingCard
            {...LaunchPadArticleData[0]}
            className=" lg:h-[320px]"
          />
          <LaunchPadGlowingCard
            {...LaunchPadArticleData[2]}
            className="lg:h-[320px]"
          />
        </div>
        <LaunchPadGlowingCard {...LaunchPadArticleData[1]} />
      </div>
    </section>
  );
};

export default LaunchPadHeroSection;
