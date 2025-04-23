import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const Info: React.FC = () => {
  const t = useTranslations('home')
  return (
    <div className="flex flex-col justify-center h-full space-y-6">
      {/* <LoadingThreeDotsJumping text="BOOST YOUR CRYPTO PROJECTS" /> */}
      <h2 className="text-white font-bold text-center leading-tight md:text-5xl xs:text-3xl">
        {t('banner.title')}  
      </h2>
      <p className="text-gray-400 text-center md:text-xl xs:text-sm items-center">
        {t('banner.description')}  
      </p>
      <div className="flex justify-center space-x-4 pt-10">
        <Button
          variant="default"
          className="bg-primary/80 text-black/80 hover:bg-primary px-10 py-6 h-12 text-xl cursor-pointer border-1"
        >
          Course
        </Button>
        <Button
          variant="outline"
          className="border-white text-white hover:bg-white/10 px-10 py-6 h-12 text-xl cursor-pointer"
        >
          APPLY PROJECT
        </Button>
      </div>
    </div>
  );
};

export default Info;