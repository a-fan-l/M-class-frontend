import React from "react";

import FAQItem from "./item";

interface FAQListProps {
  faqs: {
    id: number;
    question: string;
    answer: string;
  }[];
}
const FAQList = ({ faqs }: FAQListProps) => {
  return (
    <div className="pt-4">
      {faqs.map(({ id, question, answer }) => (
        <FAQItem key={id} id={id} question={question} answer={answer} />
      ))}
    </div>
  );
};

FAQList.displayName = 'FAQList';

export default FAQList;