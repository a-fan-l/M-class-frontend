import { CopyIcon } from 'lucide-react';
import React, { useCallback } from 'react';

import { Card } from "@/components/ui/card";

interface ExchangeInfoProps {
  exchangeRate: string;
  ydContract: string;
  showCopy?: boolean;
  onCopy?: () => void;
}

const ExchangeInfo: React.FC<ExchangeInfoProps> = ({ showCopy=true, onCopy, exchangeRate, ydContract }) => {
  const handleCopy = useCallback(() => {
    if (onCopy) {
      onCopy();
    }
  }, [onCopy]);

  return (
    <Card className="text-gray-400 text-sm p-6">
      <div className="flex justify-between mb-2">
        <span>Exchange Rate</span>
        <span>{exchangeRate}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>XZK Contract</span>
        <div className="flex items-center space-x-1">
          <span>{ydContract}</span>
          {showCopy && (
            <CopyIcon 
              onClick={handleCopy} 
              className="h-4 w-4 cursor-pointer hover:text-[#A3FF12]" 
            />
          )}
        </div>
      </div>
    </Card>
  );
};

export default ExchangeInfo;