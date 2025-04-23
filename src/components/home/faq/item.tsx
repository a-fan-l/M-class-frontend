import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
  id: number;
}

const FAQItem: React.FC<FAQItemProps> = React.memo(({ question, answer, id }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={`item-${id}`} className="border-none">
        <AccordionTrigger className="hover:no-underline">
          <h1 className="text-[var(--section-title)] text-xl">
            {question}
          </h1>
        </AccordionTrigger>
        <AccordionContent>
          <p className="mb-4 text-lg text-[var(--section-desc)]">{answer}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
});

FAQItem.displayName = 'FAQItem';

export default FAQItem;