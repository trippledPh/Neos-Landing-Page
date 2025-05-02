import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center p-4 gap-8"
      id="hero"
    >
      <div className="text-5xl text-wrap text-center max-w-[600px] w-fit">
        Real-time <span className="font-bold">Crypto Narrative</span>{" "}
        <span className="font-bold">Detection</span> Bot
      </div>
      <p className="text-center text-lg lg:w-[600px]">
        AI-powered bot that analyzes tweets from top crypto influencers in
        real-time to identify emerging trends and narratives.
      </p>
      <Button variant="default" className="w-fit text-xl py-6 px-6">
        Coming Soon
      </Button>
    </section>
  );
};

export default HeroSection;
