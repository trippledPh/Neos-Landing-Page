import PrimaryButton from "@/components/molecules/button/primary-button";

const CalloutSection = () => {
  return (
    <section
      className="p-4 "
      id="callout"
      style={{
        background: "url('/image/background/beam-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col gap-8 mb-14">
        <h3 className="text-[40px] leading-[48px] text-center space-x-4 font-maxima-nouva font-bold">
          Join Neos today!
        </h3>
        <p className="text-lg text-muted-foreground text-center">
          Stay ahead of the trend with AI-powered bot that analyzes tweets from
          top crypto influencers in real-time.
        </p>
      </div>
      <div className="flex justify-center items-center mb-24">
        <PrimaryButton>Coming Soon</PrimaryButton>
      </div>
    </section>
  );
};

export default CalloutSection;
