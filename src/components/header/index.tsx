'use client';

import React, { useEffect } from 'react';

import Header, { HeaderProps } from './main';
import useLang, { LanguageData } from '@/hooks/system/useLanguage';
import { useRouter } from '@i18n/navigation';
import '@styles/base.css';

interface IIndexProps
  extends Partial<Pick<HeaderProps, 'isLogo' | 'isMode' | 'isLang' | 'name'>> {}

const Index: React.FC<IIndexProps> = ({ name, isLogo }) => {
  const { init, data, olanguage, open, toggle, change } = useLang();
  const router = useRouter();

  useEffect(() => {
    init();
  }, []);

  const onChange = (params: LanguageData) => {
    change(params);
    router.replace('/', { locale: params.value });
  };

  return (
    <Header
      name='M Class'
      // isLogo={isLogo}
      isMode
      isMenu
      langProps={{
        data,
        current: olanguage,
        onChange,
      }}
    />
  );
};

export default Index;
