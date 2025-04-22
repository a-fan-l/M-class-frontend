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
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className="text-white hover:no-underline">
          <p className="text-white font-semibold text-lg">
            {question}
          </p>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-300 mb-4 text-md">{answer}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQItem;