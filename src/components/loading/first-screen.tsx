'use client';
import React, { useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { finishedStateAtom } from '@/atoms/global';

import './style.css';

interface LoadingMaskProps {
  children?: React.ReactNode;
}

const Index: React.FC<LoadingMaskProps> = ({ children }) => {
  const setFinished = useSetAtom(finishedStateAtom);

  useEffect(() => {
    const _ready = () => {
      if (
        document.readyState === 'interactive' ||
        document.readyState === 'complete'
      ) {
        setFinished(true);
      } else {
        requestAnimationFrame(_ready);
      }
    };
    _ready();
  }, [setFinished]);

  return (
    <div className="first-screen-img isfirst flex">
      <div className='circular-spinner'></div>
    </div>
  );
};

export default Index;
