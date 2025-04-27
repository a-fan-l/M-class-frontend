'use client';

import React, { useState } from 'react';
import { useMode } from '@/hooks/system/useMode';
import { Popover, PopoverContent, PopoverTrigger } from '@components/ui/popover';
// import { useToast } from '@components/ui/toast';
import { useDisconnect } from 'wagmi';

import './style.css';

export interface UserProps {
  open?: boolean;
  toggle?: (params?: boolean) => void;
  userInfo?: {
    name: string;
    email: string;
    avatar?: string;
  };
}

const Index: React.FC<UserProps> = ({ open, toggle, userInfo }) => {
  const { mode } = useMode();
  const [isOpen, setIsOpen] = useState(open);
  // const { toast } = useToast();
  const { disconnect } = useDisconnect();

  const ontoggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggle && toggle(!isOpen);
  };

  const close = () => {
    toggle && toggle(false);
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();

    } catch (error) {
      console.error('Disconnect error:', error);

    }
  };

  return (
    <Popover open={isOpen}>
      <PopoverTrigger asChild onClick={ontoggle} className="cursor-pointer p-0">
        <button className="tools-btn h-full w-full">
          <img
            src="/static/common/logined.svg"
            alt="logined"
            className="h-full w-full object-contain"
          />
        </button>
      </PopoverTrigger>
      <PopoverContent onPointerDownOutside={close} className="tools-items-popover popover-user z-[9999]">
        <div className="p-4">
          <div className="flex items-center gap-3 mb-4">
            <img 
              src={userInfo?.avatar || '/static/default-avatar.png'} 
              alt="User Avatar" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-lg">{userInfo?.name}</h3>
              <p className="text-sm text-gray-500">{userInfo?.email}</p>
            </div>
          </div>
          <div className="space-y-2">
            <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-md">
              Profile Settings
            </button>
            <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-md">
              Account Settings
            </button>
            <button 
              onClick={handleDisconnect}
              className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-md text-red-500"
            >
              Disconnect
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Index; 