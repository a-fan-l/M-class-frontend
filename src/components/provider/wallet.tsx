'use client';

import React, { ReactNode, memo } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { State, WagmiProvider } from 'wagmi';
import { RainbowKitProvider, darkTheme, lightTheme, Locale } from '@rainbow-me/rainbowkit';
import { useTheme } from 'next-themes';
import { useAtomValue } from 'jotai';
import { currentLanguageAtom } from '@/atoms/system/language';
import { wagmiConfig } from '@/config/wallet-connect';

interface IIndexProps {
  children: ReactNode;
  initialState?: State;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const WalletProvider: React.FC<IIndexProps> = ({ children, initialState }) => {
  const { theme } = useTheme();
  const currentLanguage = useAtomValue(currentLanguageAtom);

  const getRainbowKitLocale = (lang: string): Locale => {
    const localeMap: Record<string, Locale> = {
      en: 'en-US',
      ko: 'ko-KR',
      uk: 'uk-UA',
      ru: 'ru-RU',
    };
    return localeMap[lang] || 'en-US';
  };

  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          modalSize="compact"
          theme={theme === 'dark' ? darkTheme({ overlayBlur: 'small', borderRadius: 'medium' }) : lightTheme({ overlayBlur: 'small', borderRadius: 'medium' })}
          locale={getRainbowKitLocale(currentLanguage)}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default memo(WalletProvider);