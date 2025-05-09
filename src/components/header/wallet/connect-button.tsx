'use client';

import { ConnectButton as RainbowConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useBalance, useChainId } from 'wagmi';
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import useWalletAuth from '@hooks/useWalletAuth';
import { Spinner } from '@/components/ui/spinner';
import Logined from '@/components/header/login/logined';
import Login from '@/components/header/login/index';

export interface ConnectButtonProps {}
const ConnectButton: React.FC<ConnectButtonProps> = ({ }) => {
  const { address, isConnected, connector, isConnecting, isReconnecting } = useAccount();
  const chainId = useChainId();
  const {
    actions: { 
      setIsConnected, 
      setAddress, 
      setChainId, 
      setBalance, 
      onLogin
    }, 
    state: { 
      isAuthenticated 
    }
  } = useWalletAuth({});
  const t = useTranslations('globals');
  
  useEffect(() => {
    setIsConnected(isConnected);
    setAddress(address);
    setChainId(chainId);
    // setBalance(balanceData?.value ?? BigInt(0));
  }, [isConnected, address, chainId]);
  
  const onClick = () => {
    onLogin({ address: address as string })
  }

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
                      {isConnecting || isReconnecting ? (
                        <Spinner size="sm" color="info" className="mr-1" />
                      ) : null}
                      {connector?.icon && (
                        <img
                          src={connector.icon}
                          alt={connector.name ?? 'Wallet'}
                          className="w-5 h-5"
                        />
                      )}
                      <span className="text-sm text-white font-normal">{account.displayName}</span>
                      {isConnected && isAuthenticated && <Logined />}
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
                  <Login />
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

