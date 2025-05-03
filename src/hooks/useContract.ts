import { useAtom } from 'jotai';
import { useAccount } from 'wagmi';
import { 
  contractStateAtom, 
  initializeContractsAtom,
  ydContractAtom,
  courseContractAtom,
  providerAtom,
  contractSignerAtom
} from '@/atoms/contract';

export const useContract = () => {
  const { isConnected } = useAccount();
  const [, initializeContracts] = useAtom(initializeContractsAtom);
  const [ydContract] = useAtom(ydContractAtom);
  const [courseContract] = useAtom(courseContractAtom);
  const [provider] = useAtom(providerAtom);
  const [contractSigner] = useAtom(contractSignerAtom);

  // 获取合约实例
  const getContract = (type: 'yd' | 'course') => {
    return type === 'yd' ? ydContract : courseContract;
  };

  // 获取当前账户的余额
  const getBalance = async (address: string) => {
    if (!provider) return null;
    return await provider.getBalance(address);
  };

  // 获取当前账户的签名者
  const getSigner = () => {
    return contractSigner;
  };

  // 获取当前账户的提供者
  const getProvider = () => {
    return provider;
  };

  return {
    state: {
      ydContract,
      courseContract,
      provider,
      signer: contractSigner,
      isConnected,
    },
    actions: {
      getContract,
      getBalance,
      getSigner,
      getProvider,
    },
  };
}; 