import React, { useState, useEffect } from "react";
import { ArrowUpDown } from "lucide-react";
import { useAccount } from "wagmi";
import { ethers } from "ethers";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useWrap } from "@/hooks/useWrap";
import TokenInput from "./input";

interface TokenSwapProps {}

const TokenSwap: React.FC<TokenSwapProps> = () => {
  const [amount, setAmount] = useState<string>('0');
  const [isSwapped, setIsSwapped] = useState(false);
  const { address } = useAccount();
  const { state: { ydBalance, ydContract }, actions: { getYdBalance, getBalance } } = useWrap();
  const [ethBalance, setEthBalance] = useState<string>("0");

  const handleAmountChange = (value: string) => {
    setAmount(value);
  };

  const handleMaxClick = async () => {
    if (!address) return;
    const balance = await getBalance(isSwapped);
    setAmount(balance.toString());
  };

  const handleSwap = () => {
    setIsSwapped(!isSwapped);
    setAmount(""); // Clear amount when swapping
  };

  const handleWrap = async () => {
    if (!amount || !ydContract || !address) return;

    try {
      if (isSwapped) {
        // YD to ETH
        const amountWei = ethers.utils.parseEther(amount);
        const tx = await ydContract.sellTokens(amountWei);
        await tx.wait();
      } else {
        // ETH to YD
        const amountWei = ethers.utils.parseEther(amount);
        const tx = await ydContract.buyWithETH({
          value: amountWei
        });
        await tx.wait();
      }
      
      // Refresh balances after successful transaction
      getYdBalance();
      // TODO: Refresh ETH balance
    } catch (error) {
      console.error('Wrap transaction failed:', error);
    }
  };

  // Fetch ETH balance
  useEffect(() => {
    const fetchEthBalance = async () => {
      if (address && window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(address);
        setEthBalance(ethers.utils.formatEther(balance));
      }
    };

    fetchEthBalance();
  }, [address]);

  return (
    <Card className="flex flex-col gap-8 border-none bg-transparent">
      <div className="flex flex-col gap-5 relative">
        <TokenInput
          tokenSymbol={isSwapped ? "YD" : "ETH"}
          balance={isSwapped ? ydBalance.toString() : ethBalance}
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
          tokenSymbol={isSwapped ? "ETH" : "YD"}
          balance={isSwapped ? ethBalance : ydBalance.toString()}
          value={amount}
          onChange={handleAmountChange}
          onMaxClick={handleMaxClick}
          showSplit={true}
          disabled
        />
      </div>

      <Button 
        onClick={handleWrap}
        disabled={!amount || !address}
        className="w-full bg-primary hover:bg-primary/90 text-black py-5"
      >
        {isSwapped ? "Sell YD" : "Buy YD"}
      </Button>
    </Card>
  );
};

export default TokenSwap;