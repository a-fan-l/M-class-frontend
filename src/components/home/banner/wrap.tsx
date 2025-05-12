"use client"

import React, { FC } from 'react';
import { useWrap } from '@/hooks/useWrap';

import TokenSwap from '@/components/wrap/content';
import SwapInfo from '@/components/wrap/info';

interface WrapIndexProps {}
const WrapIndex: FC<WrapIndexProps> = () => {
  const { state: { exchangeRate, ydTokenAddress, ydTokenLink } } = useWrap();

  return (
    <div className='wrap-area p-10 relative rounded-lg md:w-[486px] gap-6 flex flex-col justify-between'>
      <TokenSwap/>
      <SwapInfo exchangeRate={exchangeRate.toString()} ydContract={ydTokenAddress} ydTokenLink={ydTokenLink}/>
    </div>
  )
};

export default WrapIndex;