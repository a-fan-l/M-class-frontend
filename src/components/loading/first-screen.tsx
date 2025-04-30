'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { useSetAtom } from 'jotai';
import { finishedStateAtom } from '@/atoms/global';

import logoGif from './logo.gif';
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
      <Image src={logoGif} alt="loading" width={100} height={100} unoptimized />
    </div>
  );
};

export default Index;
