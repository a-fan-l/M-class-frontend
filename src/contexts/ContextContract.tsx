'use client';

import { createContext, useContext } from 'react';
import { ethers } from 'ethers';

export interface ContractContextType {
    ydContract: ethers.Contract | null;
    courseContract: ethers.Contract | null;
    provider: ethers.providers.Web3Provider | null;
    signer: ethers.Signer | null;
}

export const ContractContext = createContext<ContractContextType>({
    ydContract: null,
    courseContract: null,
    provider: null,
    signer: null,
});

export const useContracts = () => {
    const context = useContext(ContractContext);
    if (!context) {
      throw new Error('useContracts must be used within a ContractProvider');
    }
    return context;
};
