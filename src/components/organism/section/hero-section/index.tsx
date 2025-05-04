import PrimaryButton from "@/components/molecules/button/primary-button";

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
      <PrimaryButton>Coming Soon</PrimaryButton>
    </section>
  );
};

export default HeroSection;
