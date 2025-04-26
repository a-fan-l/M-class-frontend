'use client';

import * as React from 'react';
import {default as Providers, IntlProviderProps } from './main';

interface IIndexProps extends Omit<IntlProviderProps, 'children'> {
  children: React.ReactNode;
  theme?: string;
}

const Index: React.FC<IIndexProps> = ({ children, locale, messages }) => {
  return (
    <Providers locale={locale} messages={messages}>
      {children}
    </Providers>
  );
};

export type { IIndexProps };
export default Index;
