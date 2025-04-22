import React from 'react';
import Link from 'next/link';
import './index.css';

interface MenuItem {
  key: string;
  label: string;
  path: string;
}

const menuItems: MenuItem[] = [
  { key: 'home', label: 'Home', path: '/' },
  { key: 'course', label: 'Course', path: '/course' },
  { key: 'wrap', label: 'Wrap', path: '/wrap' },
];

const Menu: React.FC = () => {
  return (
    <nav className="menu">
      {menuItems.map((item) => (
        <Link key={item.key} href={item.path} className="menu-item">
          <span className="menu-text">
            <span className="menu-text-inner">{item.label}</span>
            <span className="menu-text-inner">{item.label}</span>
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default Menu;