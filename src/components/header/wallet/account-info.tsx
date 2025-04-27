'use client';

import { FC, useCallback } from 'react';
import useWalletAuth from '@hooks/useWalletAuth';

export interface AccountInfoProps {}
const AccountInfo:FC<AccountInfoProps> = () => {
  const { state: {
    isConnected,
    address,
    balance,
    tokenSymbol
  }, actions: {
    disconnect
  } } = useWalletAuth();


  if (!isConnected || !address) {
    return null;
  }

  const formatAddress = useCallback((address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }, []);

  return (
    <div className="flex items-center gap-2">
      <div className="bg-gray-800 rounded-lg p-2 text-white">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center">
            <span className="text-xs">{formatAddress(address).slice(0, 2)}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{formatAddress(address)}</span>
            <span className="text-xs text-gray-400">
              {balance ? `${balance} ${tokenSymbol}` : 'Loading...'}
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={() => disconnect()}
        className="bg-red-600 hover:bg-red-700 text-white text-sm py-1 px-2 rounded-md transition-colors"
      >
        Disconnect
      </button>
    </div>
  );
};

export default AccountInfo;