import React from "react";
import { useTranslations } from 'next-intl';

import List from "./list";

const Team = () => {
  const t = useTranslations('home');

  return (
    <div className="w-full md:mb-30 mb-20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="pb-10 md:pb-16">
          <h1 className='mb-2 font-bold text-4xl text-[var(--section-title)] text-center'>
            {t('team.title')}
          </h1>
          <h2 className='text-[var(--section-desc)] text-xl text-center'>
            {t('team.description')}
          </h2>
        </div>
        <List />
      </div>
    </div>
  );
};

export default Team;