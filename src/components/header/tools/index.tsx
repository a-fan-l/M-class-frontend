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
    <div className="tools-root flex min-h-8 items-center max-md:flex-1">
      {isMode && (
        <div className="tools-items">
          <Mode {...modeProps} />
        </div>
      )}
      {isLang && langProps && (
        <div className="tools-items flex items-center">
          <Language {...langProps} />
        </div>
      )}
      {children}
    </div>
  );
};

export default Index;
