import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { desktopRouter } from '@config/router';

import './index.css';

interface MenuProps {}
const Menu: React.FC<MenuProps> = () => {
  const pathname = usePathname();
  const t = useTranslations('globals');

  return (
    <nav className="menu">
      {desktopRouter.map((item) => (
        <Link 
          key={item.id} 
          href={item.href ?? '/'} 
          className={`menu-item ${pathname === item.href ? 'active' : ''}`}
        >
          <span className="menu-text">
            <span className="menu-text-inner">{t(item.title)}</span>
            <span className="menu-text-inner">{t(item.title)}</span>
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default Menu;