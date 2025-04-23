import React from "react";
import { Card } from "@/components/ui/card";
import FAQList from "./list";

const FAQ = () => {
  return (
    <div className="container mx-auto md:mb-30 md:mt-20 bg-[var(--section-background)] rounded-lg p-6">
      <Card className="text-white p-6 border-none">
        <h1 className='font-bold text-4xl text-[var(--section-title)]'>
          FAQs
        </h1>
        <FAQList />
      </Card>
    </div>
  );
};

export default FAQ;
