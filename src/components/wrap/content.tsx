import React, { useState } from "react";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import TokenInput from "./input";

interface TokenSwapProps {
}
const TokenSwap: React.FC<TokenSwapProps> = ({ }) => {
  const [amount, setAmount] = useState("0.111");
  const [isSwapped, setIsSwapped] = useState(false);

  const ydBalance = "15.6675311530998988";
  const usdtBalance = "4.332419825800102";

  const handleAmountChange = (value: string) => {
    setAmount(value);
  };

  const handleMaxClick = () => {
    setAmount(isSwapped ? ydBalance : usdtBalance);
  };

  const handleSwap = () => {
    setIsSwapped(!isSwapped);
  };

  // Handle wrap action (mock function)
  // const handleWrap = () => {
  //   console.log(`Wrapping ${amount} ${isSwapped ? "vXZK" : "XZK"} to ${isSwapped ? "XZK" : "vXZK"}`);
  // };

  return (
    <Card className="flex flex-col gap-8 border-none">
      <div className="flex flex-col gap-5 relative">
        <TokenInput
          tokenSymbol={isSwapped ? "YD" : "USDT"}
          balance={isSwapped ? ydBalance : usdtBalance}
          value={amount}
          onChange={handleAmountChange}
          onMaxClick={handleMaxClick}
          showSplit={true}
        />

        <div className="bg-primary rounded-full w-8 h-8 flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Button
            variant="ghost"
            onClick={handleSwap}
            className="rounded-full cursor-pointer"
          >
            <ArrowUpDown className="h-4 w-4 text-black" />
          </Button>
        </div>

        <TokenInput
          tokenSymbol={isSwapped ? "USDT" : "YD"}
          balance={isSwapped ? usdtBalance : ydBalance}
          value={amount}
          onChange={() => {}}
          disabled
          onMaxClick={() => {}}
          showSplit={false}
        />
      </div>
      <Button
        className="w-full h-13 rounded-lg py-3 bg-primary/80 hover:bg-primary"
      >
        <span className='text-black/80 text-lg cursor-pointer '>Wrap</span>
      </Button>
    </Card>
  );
};

export default TokenSwap;