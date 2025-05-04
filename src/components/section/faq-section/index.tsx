import FaqAccordion from "@/components/molecules/accordion/faq-accordion";
import PrimaryBadge from "@/components/molecules/badge/primary-badge";
import { Button } from "@/components/ui/button";

const FrequentlyAskSection = () => {
  return (
    <section className="p-4 mb-20" id="faq">
      <PrimaryBadge label="Frequently Asked Questions" className="mb-12" />
      <div className="lg:grid lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-4 mb-16">
          <h3 className="text-[40px] leading-[38px] flex flex-col gap-2 wrap-break-word font-maxima-nouva font-bold">
            Your questions, our <span className="font-bold">answers</span>
          </h3>
          <p className="text-lg text-muted-foreground mb-4">
            Can't find what you're looking for?
          </p>
          <Button size="lg" className="w-fit bg-[#1f1f1f]  py-6 px-4">
            <span className="text-xl text-white">Contact us</span>
          </Button>
        </div>

        <div>
          <FaqAccordion />
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskSection;
