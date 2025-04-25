// import { useAtom } from 'jotai'

// import {
//   addressAtomState,
//   addressesAtomState,
//   chainidAtomState,
//   chainidsAtomState,
//   isConnectAtomState,
//   wagmiChainAtomState,
//   isSingedAtomState,
//   formatAddressAtom,
// } from '@atoms/wallet'

// export interface useWalletInfoProps {
//   cdnhost?: string
//   cdnpath?: string
// }

// const useWalletInfo = ({}: useWalletInfoProps) => {
//   const [address, setAddress] = useAtom(addressAtomState)
//   const [addresses, setAddresses] = useAtom(addressesAtomState)
//   const [chainId, setChainId] = useAtom(chainidAtomState)
//   const [chainIds, setChainIds] = useAtom(chainidsAtomState)
//   const [wagmiChain, setWagmiChain] = useAtom(wagmiChainAtomState)
//   const [isConnected, setIsConnected] = useAtom(isConnectAtomState)
//   const [isSigned, setIsSigned] = useAtom(isSingedAtomState)
//   const [formatedAddress] = useAtom(formatAddressAtom)

//   return {
//     address,
//     addresses,
//     formatedAddress,
//     chainId,
//     chainIds,
//     wagmiChain,
//     isConnected,
//     setAddress,
//     setAddresses,
//     setChainId,
//     setChainIds,
//     setWagmiChain,
//     setIsConnected,
//     isSigned,
//     setIsSigned,
//   }
// }

// export default useWalletInfo 