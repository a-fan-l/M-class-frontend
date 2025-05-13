import React from "react";
import FAQList from "./list";
import { useTranslations } from 'next-intl';

const FAQ = () => {
  const t = useTranslations('home');
  const faqs = [
    {
      id: 1,
      question: t("faq.question1"),
      answer: t("faq.answer1"),
    },
    {
      id: 2,
      question: t("faq.question2"),
      answer: t("faq.answer2"),
    },
    {
      id: 3,
      question: t("faq.question3"),
      answer: t("faq.answer3"),
    },
    {
      id: 4,
      question: t("faq.question4"),
      answer: t("faq.answer4"),
    },
    {
      id: 5,
      question: t("faq.question5"),
      answer: t("faq.answer5"),
    },
  ];
  
  return (
    <div className="w-full md:mb-30">
      <div className="container mx-auto bg-[var(--section-background)] rounded-lg">
        <div className="px-12 py-6">
          <h1 className='font-bold text-4xl text-[var(--section-title)] pt-6'>
            {t("faq.title")}
          </h1>
          <FAQList faqs={faqs}/>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
