'use client';

import { useState } from 'react';
import { useAtom } from 'jotai';
import { walletAtom } from '@atoms/_wallet';
import { useSwitchChain } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';
import type { Chain } from 'wagmi/chains';

const ChainSelector = () => {
  const [walletState] = useAtom(walletAtom);
  const { switchChain } = useSwitchChain();
  const [isOpen, setIsOpen] = useState(false);

  // 如果没有连接钱包，不显示任何内容
  if (!walletState.isConnected) {
    return null;
  }

  const supportedChains: (Chain & { iconUrl?: string })[] = [
    { ...mainnet, iconUrl: '/images/chains/ethereum.png' },
    { ...polygon, iconUrl: '/images/chains/polygon.png' },
    { ...optimism, iconUrl: '/images/chains/optimism.png' },
    { ...arbitrum, iconUrl: '/images/chains/arbitrum.png' },
    { ...base, iconUrl: '/images/chains/base.png' }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center gap-2"
      >
        {walletState.chainId && (
          <img
            src={supportedChains.find(chain => chain.id === walletState.chainId)?.iconUrl}
            alt={supportedChains.find(chain => chain.id === walletState.chainId)?.name}
            className="w-5 h-5 rounded-full"
          />
        )}
        <span>{supportedChains.find(chain => chain.id === walletState.chainId)?.name || 'Unknown Chain'}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute top-full mt-2 w-48 bg-gray-800 rounded-lg shadow-lg overflow-hidden z-10">
          <div className="py-1">
            {supportedChains.map((chain) => (
              <button
                key={chain.id}
                onClick={async () => {
                  try {
                    await switchChain({ chainId: chain.id });
                    setIsOpen(false);
                  } catch (error) {
                    console.error('Failed to switch network:', error);
                  }
                }}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  walletState.chainId === chain.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  {chain.iconUrl && (
                    <img
                      src={chain.iconUrl}
                      alt={chain.name}
                      className="w-4 h-4 rounded-full"
                    />
                  )}
                  <span>{chain.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ChainSelector;