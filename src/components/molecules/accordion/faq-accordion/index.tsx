import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_DATA } from "@/data/faq.data";

export function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {FAQ_DATA.map((faq) => (
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
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default FaqAccordion;
