'use client';

import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';

import {useMode} from '@/hooks/system/useMode';
import { ThemeMode } from '@atoms/base-mode';
import Moon from '@public/static/mode/moon.svg';
import Sun from '@public/static/mode/sun.svg';

export interface IIndexProps {
  onChange?: (params: ThemeMode) => void;
  className?: string;
}

const Index: React.FC<IIndexProps> = ({ onChange, className }) => {
  const { mode, change, setup } = useMode();
  const { setTheme } = useTheme();

  const click = async () => {
    const res = mode === 'dark' ? 'light' : 'dark';
    change(res);
    setTheme(res);
    onChange && onChange(res);
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <div className={`tools-btn mode h-full w-full cursor-pointer ${className}`} onClick={click}>
      {mode === 'dark' ? <Sun /> : <Moon />}
    </div>
  );
};

export default Index;
