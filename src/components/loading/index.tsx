'use client';

import React from 'react';
import { useAtomValue } from 'jotai';
import { globalStateAtom } from '@/atoms/global';

import FirstScreen from './first-screen';
import './style.css';

interface LoadingMaskProps {
  children?: React.ReactNode;
}

const Index: React.FC<LoadingMaskProps> = ({ children }) => {
  const { loading, finished } = useAtomValue(globalStateAtom);

  return (
    <>
      <div className={`page-loading-wrapper ${!loading.state ? '' : ''}`}>
        {!finished && <FirstScreen />}
      </div>
    </>
  );
};

export default Index;
