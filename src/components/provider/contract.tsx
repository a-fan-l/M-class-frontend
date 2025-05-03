'use client';

import { useEffect } from 'react';
import { ContractContext } from '@/contexts/ContextContract';
import { useContract } from '@/hooks/useContract';

const ContractProvider = ({ children }: { children: React.ReactNode }) => {
    const { state: contractState, actions: { initContracts } } = useContract();
  
    useEffect(() => {
        initContracts();
    }, [initContracts]);
  
    return (
      <ContractContext.Provider value={contractState}>
        {children}
      </ContractContext.Provider>
    );
};

export default ContractProvider;
  