'use client';
import React, { useMemo } from 'react';

import { useMode } from '@/hooks/system/useMode';
import Dlanguage from '@public/static/language/language.svg';
import { Popover, PopoverContent, PopoverTrigger } from '@components/ui/popover';

import Nav, { IIndexProps as NavProps } from './nav';
import './style.css';

export interface LanguageProps extends NavProps {
  open?: boolean;
  toggle?: (params?: boolean) => void;
}

const Index: React.FC<LanguageProps> = ({ open, toggle, ...props }) => {
  const { mode } = useMode();

  const ontoggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggle && toggle(!open);
  };

  const close = () => {
    toggle && toggle(false);
  };

  const Logo = useMemo(() => {
    if (props.current?.icons?.[mode as 'light' | 'dark']) {
      return props.current.icons?.[mode as 'light' | 'dark'];
    }
    return Dlanguage;
  }, [props, mode]);

  return (
    <Popover open={open}>
      <PopoverTrigger asChild onClick={ontoggle} className="cursor-pointer p-0">
        <button className="tools-btn h-full w-full">
          {Logo && <Logo />}
        </button>
      </PopoverTrigger>
      <PopoverContent onPointerDownOutside={close} className="tools-items-popover popover-language z-[9999]">
        <Nav {...props} />
      </PopoverContent>
    </Popover>
  );
};

export type { NavProps as LanguageNavProps };

export type LanguageType = typeof Index & {
  nav: typeof Nav;
};

export const Language = Index as LanguageType;
Language.nav = Nav;

export default Language;
