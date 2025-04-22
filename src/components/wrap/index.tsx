"use client"

import React from 'react';
import { Card } from "@/components/ui/card";

import TokenSwap from './content';
import SwapInfo from './info';
import './style.css';

const Index: React.FC = () => {
  return (
    <Card className='wrap-area p-10 relative rounded-lg md:w-[486px] gap-6 flex flex-col justify-between'>
      <TokenSwap/>
      <SwapInfo exchangeRate="1:1" ydContract="0x1234567890abcdef"/>
    </Card>
  )
};

export default Index;