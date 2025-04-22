import React from "react";
import { Card } from "@/components/ui/card";

import Item from "./item";

interface Metric {
  label: string;
  value: string;
}

interface MetricsGridProps {
  metrics: Metric[];
}

const MetricsGrid: React.FC<MetricsGridProps> = ({ metrics }) => {
  return (
    <Card className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6 rounded-lg shadow-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <Item
              key={index}
              label={metric.label}
              value={metric.value}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default MetricsGrid;