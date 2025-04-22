import React from "react";
import { RefreshCw } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import './style.css';

export interface TokenInputProps {
  tokenSymbol: string;
  balance: string;
  value: string;
  onChange: (value: string) => void;
  onMaxClick: () => void;
  disabled?: boolean;
  showSplit?: boolean;
}

const TokenInput: React.FC<TokenInputProps> = ({
  tokenSymbol,
  balance,
  value,
  onChange,
  onMaxClick,
  disabled = false,
  showSplit = true,
}) => {
  return (
    <Card className="flex flex-col p-4">
      {/* Input and Token Symbol */}
      <div className="flex items-center justify-between">
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={`h-16 pr-2 text-4xl placeholder:text-white placeholder:text-5xl bg-transparent w-full border-none focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-none ${
            disabled ? "text-gray-400" : "text-white"
          }`}
          placeholder="0.0"
        />
        <div className="flex flex-row items-center justify-end min-w-[75px]">
          {!disabled && (
            <Button
              variant="outline"
              onClick={onMaxClick}
              className="h-10 text-[#A3FF12] text-xs bg-gray-700 rounded-lg mr-1"
            >
              Max
            </Button>
          )}
          {showSplit && <div className="w-[0.5px] h-5 bg-gray-500"></div>}
          <h6 className="text-white text-md ml-1">
            {tokenSymbol}
          </h6>
        </div>
      </div>

      {/* Balance and Max Button */}
      <div className="flex flex-row justify-end">
        <p className="text-white mr-2 balance-text">
          Balance: {balance}
        </p>
        <RefreshCw className="h-4 w-4 text-[#A3FF12] cursor-pointer" />
      </div>
    </Card>
  );
};

export default TokenInput;