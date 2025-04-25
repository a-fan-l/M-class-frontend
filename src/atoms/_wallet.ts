import { atom } from 'jotai'
import { Chain } from 'wagmi/chains'

export type addressType = `0x${string}`

export interface WalletState {
  isConnected: boolean;
  address?: string;
  balance?: string;
  chainId?: number;
  currentChain?: Chain;
}

export const walletAtom = atom<WalletState>({
  isConnected: false,
  address: undefined,
  balance: undefined,
  chainId: undefined,
  currentChain: undefined,
})
