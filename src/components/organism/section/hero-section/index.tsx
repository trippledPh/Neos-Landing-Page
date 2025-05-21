import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center p-4 gap-6"
      id="hero"
    >
      <div className="text-[40px] leading-[48px] md:text-5xl md:leading-[56px] text-wrap text-center max-w-[600px] w-fit font-maxima-nouva font-thin">
        Real-time <span className="font-bold">Crypto Narrative</span>{" "}
        <span className="font-bold">Detection</span> Bot
      </div>
      <p className="text-center text-base md:text-lg lg:w-[600px] mb-12">
        AI-powered bot that analyzes tweets from top crypto influencers in
        real-time to identify emerging trends and narratives.
      </p>
      <div
        className={cn(
          buttonVariants({ variant: "outline" }),
          "text-white text-xl",
          "border-primary-500 border-[#fc7200]"
        )}
      >
        <h3 className="text-white text-xl">
          0xfDaBB49f5e2F686cb5B623859E92C72a11aF5f94
        </h3>
      </div>
      {/* <PrimaryButton>Coming Soon</PrimaryButton> */}
    </section>
  );
};

export default HeroSection;
