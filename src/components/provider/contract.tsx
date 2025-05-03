'use client';

import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { useAccount } from 'wagmi';
import { ContractContext } from '@/contexts/ContextContract';
import { useContract } from '@/hooks/useContract';
import { initializeContractsAtom } from '@/atoms/contract';

const ContractProvider = ({ children }: { children: React.ReactNode }) => {
    const { isConnected } = useAccount();
    const [, initializeContracts] = useAtom(initializeContractsAtom);
    const { state: contractState } = useContract();
  
    useEffect(() => {
        if (isConnected) {
            initializeContracts(isConnected);
        }
    }, [isConnected, initializeContracts]);
  
    return (
      <ContractContext.Provider value={contractState}>
        {children}
      </ContractContext.Provider>
    );
};

export default ContractProvider;
  