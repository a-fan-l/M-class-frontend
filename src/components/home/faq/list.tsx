import React from "react";

import FAQItem from "./item";

const faqs = [
  {
    id: 1,
    question: "What TLDs do Namefi support and do they support all names?",
    answer:
      "Currently Namefi supports 329 TLDs. In rare cases, some domain names are marked special or premium by its TLD registries and Namefi can't support them yet. Namefi is working on expanding our TLD coverage.",
  },
  {
    id: 2,
    question:
      "Does Namefi support ENS, Handshake, Unstoppable Domain, and other web3 names?",
    answer: "This section is coming soon!", // 假设答案待补充
  },
  {
    id: 3,
    question: "How can I transfer my domain to Namefi?",
    answer: "This section is coming soon!",
  },
  {
    id: 4,
    question: "What payment methods does Namefi accept?",
    answer: "This section is coming soon!",
  },
  {
    id: 5,
    question: "How do I manage my domains on Namefi?",
    answer: "This section is coming soon!",
  },
];

const FAQList = () => {
  return (
    <div className="mt-4">
      {faqs.map(({ id, question, answer }) => (
        <FAQItem key={id} id={id} question={question} answer={answer} />
      ))}
    </div>
  );
};

FAQList.displayName = 'FAQList';

export default FAQList;