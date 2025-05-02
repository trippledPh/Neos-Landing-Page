import FaqAccordion from "@/components/molecules/accordion/faq-accordion";
import PrimaryBadge from "@/components/molecules/badge/primary-badge";
import { Button } from "@/components/ui/button";

const FrequentlyAskSection = () => {
  return (
    <section className="p-4  mb-[100px] lg:mb-[200px]" id="faq">
      <PrimaryBadge label="Frequently Asked Questions" />
      <div className="lg:grid lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-4">
          <h3 className="text-5xl flex flex-col gap-2 wrap-break-word">
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
