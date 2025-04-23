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
    <div className="text-[var(--section-desc)] text-md pb-2">
      <div className="flex justify-between pb-1">
        <span className='font-normal'>Exchange Rate</span>
        <span>{exchangeRate}</span>
      </div>
      <div className="flex justify-between pb-1">
        <span className='font-normal'>Contract Address</span>
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
    </div>
  );
};

export default ExchangeInfo;