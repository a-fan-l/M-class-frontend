import React, { useState } from "react";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import TokenInput from "./input";

const TokenSwap: React.FC = () => {
  const [amount, setAmount] = useState("0.111");
  const [isSwapped, setIsSwapped] = useState(false);

  // Token balances (mock data)
  const xzkBalance = "15.6675311530998988";
  const vxzkBalance = "4.332419825800102";

  // Handle input change
  const handleAmountChange = (value: string) => {
    setAmount(value);
  };

  // Handle Max button click
  const handleMaxClick = () => {
    setAmount(isSwapped ? vxzkBalance : xzkBalance);
  };

  // Handle swap button click
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
          tokenSymbol={isSwapped ? "USDT" : "YD"}
          balance={isSwapped ? vxzkBalance : xzkBalance}
          value={amount}
          onChange={handleAmountChange}
          onMaxClick={handleMaxClick}
          showSplit={true}
        />

        <div className="bg-[#A3FF12] rounded-full w-8 h-8 flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Button
            variant="ghost"
            onClick={handleSwap}
            className="rounded-full cursor-pointer"
          >
            <ArrowUpDown className="h-4 w-4 text-black" />
          </Button>
        </div>

        <TokenInput
          tokenSymbol={isSwapped ? "YD" : "USDT"}
          balance={isSwapped ? xzkBalance : vxzkBalance}
          value={amount}
          onChange={() => {}}
          disabled
          onMaxClick={() => {}}
          showSplit={false}
        />
      </div>
      <Button
        // onClick={handleWrap}
        className="w-full h-13 rounded-lg py-3 bg-[#A3FF12] hover:bg-[#A3FF12]/90"
      >
        <span className='font-bold text-black text-lg'>Wrap</span>
      </Button>
    </Card>
  );
};

export default TokenSwap;