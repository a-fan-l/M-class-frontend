import React from "react";
import NumberAnimate from "./animate";

export interface MetricCardProps {
  label: string;
  value: number;
  symbol: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value, symbol }) => {
  return (
    <div className="flex flex-col items-start justify-center py-6">
      <h3 className="text-[var(--section-title)] font-bold text-2xl uppercase tracking-wider pb-4">
        {label}
      </h3>
      <NumberAnimate value={value} symbol={symbol} />
    </div>
  );
};

export default MetricCard;