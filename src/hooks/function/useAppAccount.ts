import { GetAccountReturnType } from 'wagmi/actions'
import useWalletInfo from './useWalletInfo'

const useAppAccount = ({}) => {
    const {
        address,
        addresses,
        setAddress,
        setAddresses,
        wagmiChain,
        chainId,
        setChainId,
        setWagmiChain,
        formatedAddress,
    } = useWalletInfo({})
      
    const onSigned = async (params: Pick<GetAccountReturnType, 'address'>) => {
        // todo sign
    }

    return {
        onSigned,
        state: {
            address,
            addresses,
            chainId,
            formatedAddress
        }
    }
}

export default useAppAccount