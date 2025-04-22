'use client';

import * as React from 'react';

import Header, { IIndexProps as HeaderRootProps } from './root';
// import Logo, { IIndexProps as LogoProps } from './logo';
import Tools, { HeaderToolsProps } from './tools';
import Menu from './menu';

// 方式1: 使用Omit排除不需要的属性
export interface HeaderProps extends Omit<HeaderRootProps, 'children'>, HeaderToolsProps {
  isLogo?: boolean;
//   logo?: LogoProps;
  isMenu?: boolean;
  name?: string;
}

const Index: React.FC<HeaderProps> = ({
  isLang,
  isMode,
  isMenu,
  modeProps,
  langProps,
  name,
  children,
}) => {
  return (
    <Header name={name}>
      <section className="header flex flex-1 items-center justify-center">
        <div className="content flex items-center">
          {/* {islogo ? <Logo {...logo} /> : null} */}
          <div className="right flex h-full flex-1 items-center">
            <div className="menu-root flex h-full items-center max-md:hidden min-md:flex-1">
              {/* {ismenu && menups && <Navigation {...menups} />} */}
              {isMenu &&  <Menu />}
            </div>
            <Tools isLang={isLang} isMode={isMode} modeProps={modeProps} langProps={langProps}>
              {children}
            </Tools>
          </div>
        </div>
      </section>
    </Header>
  );
};

export default Index;
