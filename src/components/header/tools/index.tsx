'use client';

import * as React from 'react';

import Language, { LanguageProps } from '../language';
import Mode, { IIndexProps as ModeProps } from '../mode';

export interface HeaderToolsProps {
  children?: React.ReactNode;
  isMode?: boolean;
  isLang?: boolean;
  langProps?: LanguageProps;
  modeProps?: ModeProps;
}

const Index: React.FC<HeaderToolsProps> = ({
  children,
  isMode = true,
  isLang = true,
  langProps,
  modeProps,
}) => {
  return (
    <div className="tools-root flex items-center max-md:flex-1 relative z-[9999]">
      {isMode && (
        <div className="tools-items z-[9999]">
          <Mode {...modeProps} />
        </div>
      )}
      {isLang && langProps && (
        <div className="tools-items z-[9999] flex items-center">
          <Language {...langProps} />
        </div>
      )}
      {children}
    </div>
  );
};

export default Index;
