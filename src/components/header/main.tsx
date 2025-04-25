'use client';

import * as React from 'react';

// import Logo, { IIndexProps as LogoProps } from './logo';
import Tools, { HeaderToolsProps } from './tools';
import Menu from './menu';
import Sign from './sign';

export interface HeaderProps extends HeaderToolsProps {
  isLogo?: boolean;
  //   logo?: LogoProps;
  isMenu?: boolean;
  name?: string;
  isSign?: boolean;
  isWallet?: boolean;
}

const Index: React.FC<HeaderProps> = ({
  isLang,
  isMode,
  isMenu = true,
  modeProps,
  langProps,
  name,
  children,
  isSign,
  isWallet,
  walletProps
}) => {
  return (
    <header className={`bg-[rgba(11,11,13,0.7)] backdrop-blur-sm header-root fixed top-0 left-0 flex min-h-10 w-full items-center z-[9999] ${name}`}>
      <div className="container mx-auto px-4 flex items-center justify-between py-3">
        <div className="flex items-center justify-between md:gap-15 gap-6">
          <div className="text-white text-2xl font-bold w-50">M class</div>
          {isMenu && (
            <div className='flex-1'>
              <Menu />
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          <Tools 
            isLang={isLang} 
            isMode={isMode} 
            modeProps={modeProps} 
            langProps={langProps} 
            // isWallet={isWallet} 
            // walletProps={walletProps}
          >
            {children}
          </Tools>
        </div>
      </div>
    </header>
  );
};

export default Index;
