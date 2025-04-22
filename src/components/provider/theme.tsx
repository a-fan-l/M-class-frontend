'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from 'next-themes';

import { MODE_STORAGE_KEY } from '@constants/system';

export interface IIndexProps extends ThemeProviderProps {
  initialTheme?: string;
}

const Index: React.FunctionComponent<IIndexProps> = ({ children, ...props }) => {
  return (
    <NextThemesProvider
      enableSystem
      attribute="class"
      disableTransitionOnChange
      storageKey={MODE_STORAGE_KEY}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
};

export default Index;
