'use client';

import * as React from 'react';

interface IIndexProps {
  children: React.ReactNode;
}

const Index: React.FC<IIndexProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="bg-content-background flex-grow pt-16 md:pt-25">
        {children}
      </main>
    </div>
  );
};

export default Index;
