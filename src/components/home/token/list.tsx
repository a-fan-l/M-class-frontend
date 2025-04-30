import React from "react";

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
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-4 gap-2">
        <Item
          label="Course"
          value={courseCount}
          symbol=''
        />
        <Item
          label="Type"
          value={typeCount}
          symbol=''
        />
        <Item
          label="Users"
          value={userCount}
          symbol=''
        />
        <Item
          label="CreateTime"
          value={createTime}
          symbol=''
        />
      </div>
    </div>
  );
};

export default MetricsGrid;