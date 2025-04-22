import React from "react";
import { Card } from "@/components/ui/card";

import FAQList from "./list";

const FAQ: React.FC = () => {
  return (
    <div className="w-full md:mb-30 md:mt-20">
      <div className="container mx-auto px-4">
        <Card className="text-white p-6 rounded-lg bg-black">
            <h1 className='font-bold text-4xl text-[#A3FF12] mb-10'>
              FAQs
            </h1>
            <FAQList />
        </Card>
      </div>
    </div>
  );
};

export default FAQ;
