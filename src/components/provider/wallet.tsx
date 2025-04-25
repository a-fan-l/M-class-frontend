'use client'

import React, { ReactNode, useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { State, WagmiProvider, cookieToInitialState } from 'wagmi'
import {
  Locale,
  RainbowKitProvider,
  darkTheme,
  lightTheme,
  getDefaultWallets
} from '@rainbow-me/rainbowkit';
import { useTheme } from 'next-themes';
import { useAtomValue } from 'jotai';
import { currentLanguageAtom } from '@/atoms/system/language';
import { wagmiConfig } from '@/config/wallet-connect';

interface IIndexProps {
  children: ReactNode
  initialState?: State
}

const queryClient = new QueryClient()

const Index: React.FunctionComponent<IIndexProps> = ({ children }) => {
  const { theme } = useTheme();
  const currentLanguage = useAtomValue(currentLanguageAtom);

  // Map project language codes to RainbowKit locale strings
  const getRainbowKitLocale = (lang: string): Locale => {
    const localeMap: Record<string, Locale> = {
      'en': 'en-US',
      'ko': 'ko-KR',
      'uk': 'uk-UA',
      'ru': 'ru-RU'
    };
    return localeMap[lang];
  };
 
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={wagmiConfig}>
        <RainbowKitProvider
          modalSize="compact"
          theme={theme === 'dark' ? darkTheme({
            overlayBlur: 'small',
            borderRadius: 'medium'
          }) : lightTheme({
            overlayBlur: 'small',
            borderRadius: 'medium'
          })}
          locale={getRainbowKitLocale(currentLanguage)}
          showRecentTransactions={true}
          coolMode
        >
          {children}
        </RainbowKitProvider>
      </WagmiProvider>
    </QueryClientProvider>
  )
}

export default Index
