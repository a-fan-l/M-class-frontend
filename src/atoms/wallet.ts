import { atom } from 'jotai'
import { Chain } from 'wagmi/chains'
import { Address } from 'viem'

// Core wallet state atoms
export const isConnectedAtom = atom<boolean>(false)
export const addressAtom = atom<Address | undefined>(undefined)
export const balanceAtom = atom<bigint>(BigInt(0))
export const chainIdAtom = atom<number>(0)
export const currentChainAtom = atom<Chain | null>(null)
export const isAuthenticatedAtom = atom<boolean>(false)
export const signerAtom = atom<string>("")
export const tokenSymbolAtom = atom<string>("")