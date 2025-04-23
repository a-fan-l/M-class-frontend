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
    <Card className="flex flex-col p-4 border-white/40 border-1">
      <div className="flex items-center justify-between">
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={`h-16 pr-2 text-5xl placeholder:text-white placeholder:text-5xl bg-transparent w-full border-none focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-none ${
            disabled ? "text-gray-400" : "text-[var(--section-title)]"
          }`}
          placeholder="0.0"
        />
        <div className="flex flex-row items-center justify-end min-w-[75px]">
          {!disabled && (
            <Button
              variant="link"
              onClick={onMaxClick}
              className="h-10 text-primary text-md rounded-lg pr-2 pl-1"
            >
              Max
            </Button>
          )}
          {showSplit && <div className="w-[1px] h-5 bg-white"></div>}
          <h6 className="text-[var(--section-desc)] text-xl ml-1">
            {tokenSymbol}
          </h6>
        </div>
      </div>

      {/* Balance and Max Button */}
      <div className="flex flex-row justify-end items-center">
        <p className="text-[var(--section-desc)] pr-2 text-md font-normal">
          Balance: {balance}
        </p>
        <RefreshCw className="h-4 w-4 text-primary cursor-pointer" />
      </div>
    </Card>
  );
};

export default TokenInput;