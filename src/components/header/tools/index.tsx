'use client';

import * as React from 'react';

import Language, { LanguageProps } from '../language';
import Mode, { IIndexProps as ModeProps } from '../mode';
import { walletAtom } from '@/atoms/_wallet';
import { useAtom } from 'jotai';
import ChainSelector from '../wallet/chain-selector';
import ConnectButton, { ConnectButtonProps } from '../wallet/connect-button';

export interface HeaderToolsProps {
  children?: React.ReactNode;
  isMode?: boolean;
  isLang?: boolean;
  langProps?: LanguageProps;
  modeProps?: ModeProps;
  isWallet?: boolean;
  walletProps?: ConnectButtonProps;
}

const Index: React.FC<HeaderToolsProps> = ({
  children,
  isMode = true,
  isLang = true,
  langProps,
  modeProps,
  isWallet,
  walletProps
}) => {
  return (
    <div className="tools-root flex items-center max-md:flex-1 relative z-[9]">
      {
        isWallet && (
          <div className='tools-items z-[9]'>
            <ConnectButton {...walletProps} />
          </div>
        )
      }
      {isMode && (
        <div className="tools-items z-[9]">
          <Mode {...modeProps} />
        </div>
      )}
      {isLang && langProps && (
        <div className="tools-items z-[9] flex">
          <Language {...langProps} />
        </div>
      )}
      {children}
    </div>
  );
};

export default Index;
