import { CopyIcon } from 'lucide-react';
import React, { useCallback } from 'react';

import { Card } from "@/components/ui/card";
import { formatCharToOmit } from '@/utils/format';
import { useTranslations } from 'next-intl';
interface ExchangeInfoProps {
  exchangeRate: string;
  ydContract: string;
  ydTokenLink: string;
  showCopy?: boolean;
  onCopy?: () => void;
}

const ExchangeInfo: React.FC<ExchangeInfoProps> = ({ showCopy=true, onCopy, exchangeRate, ydContract, ydTokenLink }) => {
  const t = useTranslations('home')
  const handleCopy = useCallback(() => {
    if (onCopy) {
      onCopy();
    }
  }, [onCopy]);

  return (
    <Card className="p-4 border-white-900">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-md text-gray-500">
            {t('wrap.rate')}
          </span>
          <span className='text-md text-gray-500'>{exchangeRate}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-md text-gray-500">
            {t('wrap.contract')}
          </span>
          <div className="flex items-center gap-2">
            <a href={ydTokenLink} target="_blank" rel="noopener noreferrer" className="text-md hover:underline text-gray-500">
              {formatCharToOmit(ydContract)}
            </a>
            {showCopy && (
              <button onClick={handleCopy} className="text-gray-500 hover:text-gray-400 cursor-pointer">
                <CopyIcon size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ExchangeInfo;