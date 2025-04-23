import React from "react";
import { Card } from "@/components/ui/card";
import FAQList from "./list";

const FAQ = () => {
  return (
    <div className="w-full md:mb-30">
      <div className="container mx-auto bg-[var(--section-background)] rounded-lg">
        <div className="px-12 py-6">
          <h1 className='font-bold text-4xl text-[var(--section-title)] pt-6'>
            FAQs
          </h1>
          <FAQList />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
