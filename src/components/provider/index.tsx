'use client';

import * as React from 'react';

import { Provider, IntlProviderProps } from './main';

interface IIndexProps extends Omit<IntlProviderProps, 'children'> {
  children: React.ReactNode;
  theme?: string;
}

const Index: React.FC<IIndexProps> = ({ children, locale, messages }) => {
  return (
    <Provider locale={locale} messages={messages}>
      {children}
    </Provider>
  );
};

export default Index;
