'use client';

import { useAtom } from 'jotai';
import { walletAtom } from '@atoms/_wallet';
import { formatCharToOmit } from '@utils/format';
import { useAccount, useDisconnect } from 'wagmi';

const AccountInfo = () => {
  const [walletState] = useAtom(walletAtom);
  const { disconnect } = useDisconnect();
  const { address } = useAccount();

  // 如果没有连接钱包，不显示任何内容
  if (!walletState.isConnected || !address) {
    return null;
  }

  // 格式化钱包地址的辅助函数
  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

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
              {walletState.balance ? `${walletState.balance} ETH` : 'Loading...'}
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