import { atom, Getter } from 'jotai'
import { formatCharToOmit } from '@utils/format'
import { GetAccountReturnType } from '@wagmi/core'
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
