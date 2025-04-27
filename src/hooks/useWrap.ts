import { useAtom } from 'jotai';
import { useToggle } from 'ahooks';
import { ydBalanceState, usdtBalanceState } from '@/atoms/wrap';

export const useWrap = () => {
    const [isMax, { toggle: toggleIsMax, set: setIsMax }] = useToggle(false)
    const [ydBalance, setYdBalance] = useAtom(ydBalanceState)
    const [usdtBalance, setUsdtBalance] = useAtom(usdtBalanceState)

    return {
        isMax,
        toggleIsMax,
        ydBalance,
        usdtBalance,
        setYdBalance,
        setUsdtBalance
    }
}