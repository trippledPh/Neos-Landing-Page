const PartnerSection = () => {
  return (
    <section className="flex flex-col items-center justify-center mb-4 gap-4">
      <div
        className="flex items-center gap-4 h-[350px] w-full justify-center"
        style={{
          background: "url('/image/background/beam-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center justify-center gap-8">
          <h2 className="mb-4 text-md text-muted-foreground font-maxima-nouva">
            Trusted by our partners
          </h2>

          <div className="flex items-center gap-4 mb-8">
            <img src="/image/icons/aventa.logo.png" alt="aventa" />
            <img src="/image/icons/qlix.logo.png" alt="qlix" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
