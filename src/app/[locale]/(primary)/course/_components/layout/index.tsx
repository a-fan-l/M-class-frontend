'use client';

import React from "react";

interface IIndexProps {
  children: React.ReactNode;
}

const Index: React.FC<IIndexProps> = ({ children }) => {
  return (
    <div className='full-w flex flex-col items-center justify-center'>
        {children}
    </div>
  );
};

export default Index;
