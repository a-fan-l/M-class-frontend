'use client';

import * as React from 'react';
import { Provider as JotaiProvider } from 'jotai';
import IntlProvider, { IIndexProps as IntlProviderProps } from '@/components/provider/intl';
import StoreProvider from '@/components/provider/store';
import ThemeProvider, { IIndexProps as ThemeProviderProps } from '@/components/provider/theme';
import WalletProvider from '@/components/provider/wallet';
import '@rainbow-me/rainbowkit/styles.css';
import { MessageProvider } from '@/hooks/useMessage';
import ContractProvider from './contract';

export interface ProviderProps extends Omit<IntlProviderProps, 'children'> {
  children: React.ReactNode;
  theme?: string;
}

const Index: React.FC<ProviderProps> = ({ children, locale, messages }) => {
  return (
    <JotaiProvider>
      <IntlProvider locale={locale} messages={messages}>
        <StoreProvider>
          <ThemeProvider>
            <WalletProvider>
              <ContractProvider>
                <MessageProvider>
                  {children}
                </MessageProvider>
              </ContractProvider>
            </WalletProvider>
          </ThemeProvider>
        </StoreProvider>
      </IntlProvider>
    </JotaiProvider>
  );
};

export type { IntlProviderProps, ThemeProviderProps };

export type ProviderType = typeof Index & {
  intl: typeof IntlProvider;
  store: typeof StoreProvider;
  theme: typeof ThemeProvider;
  wallet: typeof WalletProvider;
  jotai: typeof JotaiProvider;
}

const Provider = Index as ProviderType;
Provider.wallet = WalletProvider;
Provider.intl = IntlProvider;
Provider.store = StoreProvider;
Provider.theme = ThemeProvider;
Provider.jotai = JotaiProvider;

export default Provider;
