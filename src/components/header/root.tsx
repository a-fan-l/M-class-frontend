import * as React from 'react';

export interface IIndexProps {
  children: React.ReactNode;
  name?: string | 'primary' | 'secondary' | 'tertiary';
}

const Index: React.FC<IIndexProps> = ({ children, name = 'primary' }) => (
  <header className={`header-root flex min-h-12 w-full items-center ${name}`}>{children}</header>
);
export default Index;
