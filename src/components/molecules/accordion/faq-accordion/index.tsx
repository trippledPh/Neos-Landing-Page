import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FAQ_DATA,
  IFrequentlyAskData,
} from "@/data/landingpage/landingpage-faq.data";

interface Props {
  faqData: IFrequentlyAskData[];
}

const FaqAccordion = ({ faqData }: Props) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqData.map((faq) => (
        <AccordionItem
          key={faq.question}
          value={faq.question}
          className="p-4"
          id={faq.question}
        >
          <AccordionTrigger
            className="text-xl font-semibold font-inter text-white"
            id={faq.question}
          >
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            {faq.answer}
            {faq.bulletPoints && (
              <ul className="list-disc pl-5">
                {faq.bulletPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
