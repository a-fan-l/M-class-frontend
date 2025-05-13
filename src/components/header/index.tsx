'use client';

import React, { useEffect, useCallback } from 'react';

import Header, { HeaderProps } from './main';
import useLang, { LanguageData } from '@/hooks/system/useLanguage';
import { useRouter } from '@i18n/navigation';
import '@styles/base.css';
import useWalletAuth from '@/hooks/useWalletAuth';

interface IIndexProps
  extends Partial<Pick<HeaderProps, 'isLogo' | 'isMode' | 'isLang' | 'name'>> {}

const Index: React.FC<IIndexProps> = ({}) => {
  const { init, data, olanguage, open, toggle, change, isInitialized } = useLang();
  const router = useRouter();
  const { state: { isConnected } } = useWalletAuth({})
  
  useEffect(() => {
    init();
  }, []);

  const onChange = (params: LanguageData) => {
    change(params);
    router.replace('/', { locale: params.value });
  };

  if (!isInitialized) {
    return null; // 或者返回一个加载状态
  }

  console.log('isConnected', isConnected)

  return (
    <Header
      name='M Class'
      // isLogo={isLogo}
      isMenu
      langProps={{
        data,
        current: olanguage,
        onChange,
      }}
      isWallet
      // isSign={isConnected}
    />
  );
};

export default Index;
