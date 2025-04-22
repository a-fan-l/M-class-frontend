'use client';

import * as React from 'react';

import { LanguageData } from '@atoms/language';
import { useMode } from '@hooks/useMode';

export interface IIndexProps {
  data: LanguageData[];
  current?: LanguageData;
  onChange?: (params: LanguageData) => void;
}

const Index: React.FC<IIndexProps> = ({ data, current, onChange }) => {
  const { mode } = useMode();

  const click = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLElement;
    const li = target.closest('li');
    if (!li) return;

    const value = li.getAttribute('data-value');
    if (!value) return;

    const res = data.find(item => item.value === value);
    // 设置 Cookie
    document.cookie = `NEXT_LOCALE=${res?.value}; path=/; max-age=31536000`;

    if (typeof onChange === 'function' && res) {
      onChange(res);
    }
  };

  return (
    <ul className="languages-ul w-40 py-3" onClick={click}>
      {data.map(item => {
        const Logo = item.icons?.[mode as 'light' | 'dark'];
        return (
          <li
            key={item.id}
            className={`languages-li flex h-10 w-full cursor-pointer items-center px-2 ${
              current?.value === item?.value ? 'active' : 'init'
            }`}
            data-value={item.value}
          >
            {item.icons && Logo && (
              <div className="mr-2">
                <Logo viewBox="0 0 30 30" />
              </div>
            )}
            <p className={`li-text flex flex-1`}>{item.text}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Index;
