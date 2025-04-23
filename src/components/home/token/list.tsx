import React from "react";
import { Card } from "@/components/ui/card";

import Item from "./item";

export interface MetricItem {
  label: string;
  value: number;
  symbol: string;
}
export interface MetricsGridProps {
  metrics: MetricItem[];
}

const MetricsGrid: React.FC<MetricsGridProps> = ({ metrics }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-4 md:grid-cols-4 gap-2">
        {metrics.map((metric, index) => (
          <Item
            key={index}
            label={metric.label}
            value={metric.value}
            symbol={metric.symbol}
          />
        ))}
      </div>
    </div>
  );
};

export default MetricsGrid;