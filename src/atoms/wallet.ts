import { atom, Getter } from 'jotai'
import { formatCharToOmit } from '@utils/format'
import { GetAccountReturnType } from '@wagmi/core'

export type addressType = `0x${string}`

export const isConnectAtomState = atom<boolean>(false)

export const isSingedAtomState = atom<boolean>(false)

export const addressAtomState = atom<GetAccountReturnType['address']>(undefined)

export const addressesAtomState = atom<GetAccountReturnType['addresses']>([])

export const chainidAtomState = atom<GetAccountReturnType['chainId']>(0)

export const chainidsAtomState = atom<Array<GetAccountReturnType['chainId']>>([])

export const wagmiChainAtomState = atom<GetAccountReturnType['chain']>(undefined)

export const formatAddressAtom = atom((get: Getter) => {
  const address = get(addressAtomState)
  if (!address) return '....'
  return formatCharToOmit(address)
})

export const wagmiChainNameAtom = atom((get: Getter) => {
  const res = get(wagmiChainAtomState)
  if (!res) return '....'
  return res?.name
})

const atoms = {
  isConnectAtomState,
  isSingedAtomState,
  addressAtomState,
  addressesAtomState,
  chainidAtomState,
  chainidsAtomState,
  wagmiChainAtomState,
  formatAddressAtom,
  wagmiChainNameAtom,
}

export default atoms
