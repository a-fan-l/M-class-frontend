import React from "react";

import { useTranslations } from "next-intl";

import Item from "./item";

export interface MetricsGridProps {
  courseCount: number;
  typeCount: number;
  userCount: number;
  createTime: number;
}

const MetricsGrid: React.FC<MetricsGridProps> = ({ 
  courseCount,
  typeCount,
  userCount,
  createTime,
 }) => {
  const t = useTranslations('home');
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-4 gap-2">
        <Item
          label={t('info.course')}
          value={courseCount}
          symbol=''
        />
        <Item
          label={t('info.type')}
          value={typeCount}
          symbol=''
        />
        <Item
          label={t('info.users')}
          value={userCount}
          symbol=''
        />
        <Item
          label={t('info.createTime')}
          value={createTime}
          symbol=''
        />
      </div>
    </div>
  );
};

export default MetricsGrid;