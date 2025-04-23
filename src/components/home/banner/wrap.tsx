"use client"

import React from 'react';

import TokenSwap from '@/components/wrap/content';
import SwapInfo from '@/components/wrap/info';

const Index: React.FC = () => {
  return (
    <div className='wrap-area p-10 relative rounded-lg md:w-[486px] gap-6 flex flex-col justify-between'>
      <TokenSwap/>
      <SwapInfo exchangeRate="1:1" ydContract="0x1234567890abcdef"/>
    </div>
  )
};

export default Index;