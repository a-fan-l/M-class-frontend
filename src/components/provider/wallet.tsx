'use client'

import React, { ReactNode, memo, useMemo } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { State, WagmiProvider } from 'wagmi'
import {
  Locale,
  RainbowKitProvider,
  darkTheme,
  lightTheme,
} from '@rainbow-me/rainbowkit';
import { useTheme } from 'next-themes';
import { useAtomValue } from 'jotai';
import { currentLanguageAtom } from '@/atoms/system/language';
import { createWagmiConfig } from '@/config/wallet-connect';

interface IIndexProps {
  children: ReactNode
  initialState?: State
}

// 创建一个单例的 QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const WalletProvider: React.FC<IIndexProps> = ({ children }) => {
  const { theme } = useTheme();
  const currentLanguage = useAtomValue(currentLanguageAtom);

  // 创建 wagmi 配置
  const config = useMemo(() => createWagmiConfig(), []);

  // Map project language codes to RainbowKit locale strings
  const getRainbowKitLocale = (lang: string): Locale => {
    const localeMap: Record<string, Locale> = {
      'en': 'en-US',
      'ko': 'ko-KR',
      'uk': 'uk-UA',
      'ru': 'ru-RU'
    };
    return localeMap[lang] || 'en-US';
  };

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
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
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

// 使用 memo 避免不必要的重渲染
export default memo(WalletProvider)
