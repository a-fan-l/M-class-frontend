import React from "react";
import { useTranslations } from 'next-intl';

import List from "./list";

const Team: React.FC = () => {
  const t = useTranslations('home');

  return (
    <div className="w-full md:mb-30 md:mt-30">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-lg p-8">
          <div className="mb-10">
            <h1 className='mb-2 font-bold text-4xl text-[#A3FF12] text-center'>
              {t('team.title')}
            </h1>

            <h2 className='text-muted-foreground mb-10 text-xl text-center'>
              {t('team.description')}
            </h2>
          </div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Team;