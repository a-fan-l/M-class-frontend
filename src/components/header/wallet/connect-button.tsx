'use client';

import { ConnectButton as RainbowConnectButton } from '@rainbow-me/rainbowkit';
import { useSetAtom } from 'jotai';
import { useAccount, useBalance, useChainId,  } from 'wagmi';
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

import { walletAtom } from '@atoms/_wallet';

export interface ConnectButtonProps {}
const ConnectButton: React.FC<ConnectButtonProps> = ({ }) => {
  const { address, isConnected, connector } = useAccount();
  const { data: balanceData } = useBalance({ address });
  const chainId = useChainId();
  const setWalletState = useSetAtom(walletAtom);
  const t = useTranslations('globals');

  // 监听钱包状态更改，更新到 Jotai store
  useEffect(() => {
    setWalletState({
      isConnected,
      address: address?.toString(),
      balance: balanceData?.formatted,
      chainId,
    });
  }, [isConnected, address, balanceData, chainId, setWalletState]);

  return (
    <RainbowConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const ready = mounted;
        const connected = ready && account && chain;
        console.log(account, 'account', chain, 'chain');
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
            className="flex flex-row items-center gap-4 justify-between"
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="px-3 font-normal rounded-3xl md:min-w-[150px] border-1 cursor-pointer hover:bg-primary/10 border-primary text-white font-md py-2 px-4 transition-colors"
                  >
                    {t('btn.connect')}
                  </button>
                );
              }

              return (
                <div className="flex items-center gap-3 justify-between flex-row">
                  <button
                    onClick={openAccountModal}
                    type="button"
                    className="cursor-pointer bg-transparent border-1 border-primary/40 text-white font-sm py-2 px-4 rounded-full transition-colors"
                  >
                    <div className="flex flex-row items-center gap-3 justify-between">
                      {connector?.icon && (
                        <img
                          src={connector.icon}
                          alt={connector.name ?? 'Wallet'}
                          className="w-5 h-5"
                        />
                      )}
                      <span className="text-sm text-white font-normal">{account.displayName}</span>
                    </div>
                  </button>

                  <button
                    onClick={openChainModal}
                    type="button"
                    className="rounded-3xl flex items-center border-1 border-primary/40 text-white font-sm py-2 px-4 transition-colors bg-transparent font-normal cursor-pointer"
                  >
                    {chain.hasIcon ? (
                      <div className="mr-3 h-5 w-5 overflow-hidden rounded-full">
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            className="h-5 w-5 bg-white rounded-full"
                          />
                        )}
                      </div>
                    ) : null}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white"
                    >
                      <path
                        d="M7 10L12 15L17 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </RainbowConnectButton.Custom>
  );
}

export default ConnectButton;