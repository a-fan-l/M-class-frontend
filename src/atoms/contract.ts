import { atom } from 'jotai';
import { ethers } from 'ethers';
import { YiDengToken__factory } from '@/typechain-types';
import { CourseMarket__factory } from '@/typechain-types';

const YIDENG_TOKEN_ADDRESS = '0xb26BA51DAcc2F8e59CB87ECCD2eC73a2C3540d6f';
const COURSE_MARKET_ADDRESS = '0x5DA45119233433327cD77D66EfCdA92edE57Ce78';

export const ydContractAtom = atom<ethers.Contract | null>(null);
export const courseContractAtom = atom<ethers.Contract | null>(null);
export const providerAtom = atom<ethers.providers.Web3Provider | null>(null);
export const contractSignerAtom = atom<ethers.Signer | null>(null);

// Combined contract state atom
export const contractStateAtom = atom(
  (get) => ({
    ydContract: get(ydContractAtom),
    courseContract: get(courseContractAtom),
    provider: get(providerAtom),
    signer: get(contractSignerAtom),
  }),
  (get, set, newState: {
    ydContract: ethers.Contract | null;
    courseContract: ethers.Contract | null;
    provider: ethers.providers.Web3Provider | null;
    signer: ethers.Signer | null;
  }) => {
    set(ydContractAtom, newState.ydContract);
    set(courseContractAtom, newState.courseContract);
    set(providerAtom, newState.provider);
    set(contractSignerAtom, newState.signer);
  }
);

// Contract initialization atom
export const initializeContractsAtom = atom(
  null,
  (get, set, isConnected: boolean) => {
    if (window.ethereum && isConnected) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const ydContract = YiDengToken__factory.connect(YIDENG_TOKEN_ADDRESS, signer);
      const courseContract = CourseMarket__factory.connect(COURSE_MARKET_ADDRESS, signer);

      set(contractStateAtom, {
        ydContract,
        courseContract,
        provider,
        signer,
      });
    }
  }
); 