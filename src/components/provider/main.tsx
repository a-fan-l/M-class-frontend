'use client';

import * as React from 'react';
import { Provider as JotaiProvider } from 'jotai';
import IntlProvider, { IIndexProps as IntlProviderProps } from '@/components/provider/intl';
import StoreProvider from '@/components/provider/store';
import ThemeProvider, { IIndexProps as ThemeProviderProps } from '@/components/provider/theme';
import WalletProvider from '@/components/provider/wallet';

import '@rainbow-me/rainbowkit/styles.css';

export interface ProviderProps extends Omit<IntlProviderProps, 'children'> {
  children: React.ReactNode;
  theme?: string;
}

const Index: React.FC<ProviderProps> = ({ children, locale, messages }) => {
  return (
    <WalletProvider>
      <JotaiProvider>
        <IntlProvider locale={locale} messages={messages}>
          <StoreProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </StoreProvider>
        </IntlProvider>
      </JotaiProvider>
    </WalletProvider>
  );
};

export type { IntlProviderProps, ThemeProviderProps };

export type ProviderType = typeof Index & {
  intl: typeof IntlProvider;
  store: typeof StoreProvider;
  theme: typeof ThemeProvider;
  wallet: typeof WalletProvider;
}

export const Provider = Index as ProviderType;
Provider.intl = IntlProvider;
Provider.store = StoreProvider;
Provider.theme = ThemeProvider;
Provider.wallet = WalletProvider;

export default Provider;
