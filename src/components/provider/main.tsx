'use client';

import * as React from 'react';
import IntlProvider, { IIndexProps as IntlProviderProps } from './intl';
import StoreProvider from './store';
import ThemeProvider, { IIndexProps as ThemeProviderProps } from './theme';

export interface ProviderProps extends Omit<IntlProviderProps, 'children'> {
  children: React.ReactNode;
  theme?: string;
}

const Index: React.FC<ProviderProps> = ({ children, locale, messages }) => {
  return (
    <IntlProvider locale={locale} messages={messages}>
        <StoreProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </StoreProvider>
    </IntlProvider>
  );
};

export type { IntlProviderProps, ThemeProviderProps };

export type ProviderType = typeof Index & {
  intl: typeof IntlProvider;
  store: typeof StoreProvider;
  theme: typeof ThemeProvider;
}

export const Provider = Index as ProviderType;
Provider.intl = IntlProvider;
Provider.store = StoreProvider;
Provider.theme = ThemeProvider;

export default Provider;
