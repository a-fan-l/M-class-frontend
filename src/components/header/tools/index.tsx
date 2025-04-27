'use client';

import * as React from 'react';

import Language, { LanguageProps } from '../language';
import Mode, { IIndexProps as ModeProps } from '../mode';
import ConnectButton, { ConnectButtonProps } from '../wallet/connect-button';
import Sign, { IIndexProps as SignProps } from '../sign';
export interface HeaderToolsProps {
  children?: React.ReactNode;
  isMode?: boolean;
  isLang?: boolean;
  langProps?: LanguageProps;
  modeProps?: ModeProps;
  isWallet?: boolean;
  isSign?: boolean;
  walletProps?: ConnectButtonProps;
  signProps?: SignProps;
}

const Index: React.FC<HeaderToolsProps> = ({
  children,
  isMode = true,
  isLang = true,
  isSign = true,
  langProps,
  modeProps,
  isWallet,
  walletProps,
  signProps,
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

      {/* {isSign && <div className="tools-items z-[9]">
          <Sign />
        </div>
        } */}
      {children}
    </div>
  );
};

export default Index;
