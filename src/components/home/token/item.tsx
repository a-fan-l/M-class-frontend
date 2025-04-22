import React from "react";

export interface MetricCardProps {
  label: string;
  value: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col items-start justify-center py-6">
      <h3 className="text-gray-400 font-bold uppercase tracking-wider mb-1 pb-2">
        {label}
      </h3>
      <h4 className="text-[#A3FF12] font-bold text-xl">
        {value}
      </h4>
    </div>
  );
};

export default MetricCard;