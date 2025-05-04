const SponsorSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <span className="text-muted-foreground textl-xl">
        with technical support from:
      </span>
      <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:mt-4 lg:gap-12">
        <span>
          <img
            src="/image/icons/mongodb.logo.svg"
            alt="mongodb"
            className="object-contain"
          />
        </span>
        <div className="grid grid-cols-2 gap-4 lg:gap-8">
          <span>
            <img src="/image/icons/heroku.logo.svg" alt="heroku" />
          </span>
          <span>
            <img src="/image/icons/nodejs.logo.svg" alt="heroku" />
          </span>
        </div>
        <span>
          <img src="/image/icons/x.logo.svg" alt="x" />
        </span>
        <span>
          <img src="/image/icons/gemini.logo.svg" alt="x" />
        </span>
      </div>
    </section>
  );
};

export default SponsorSection;
