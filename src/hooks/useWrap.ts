import { useAtom } from 'jotai';
import { useToggle } from 'ahooks';
import { ydBalanceState } from '@/atoms/wrap';
import { useState, useEffect, useCallback } from 'react';
import { useAccount } from 'wagmi';
import { ethers } from 'ethers';
import { ydContractAtom, contractSignerAtom } from '@/atoms/contract';

import { useContract } from './useContract';

const YIDENG_TOKEN_ADDRESS = '0xb26BA51DAcc2F8e59CB87ECCD2eC73a2C3540d6f';
const ETHERSCAN_URL = 'https://etherscan.io';

export const useWrap = () => {
    const [isMax, { toggle: toggleIsMax, set: setIsMax }] = useToggle(false)
    const [ydContract] = useAtom(ydContractAtom);
    const [signer] = useAtom(contractSignerAtom);
    const [ydBalance, setYdBalance] = useAtom(ydBalanceState)
    const { state: { ydContract: contract } } = useContract();
    const [exchangeRate, setExchangeRate] = useState<number>(0);
    const { address } = useAccount();
    const [ethBalance, setEthBalance] = useState<string>('0');

    const getExchangeRate = useCallback(async () => {
        if (!ydContract) return;
        try {
            const rate = await ydContract.TOKENS_PER_ETH();
            setExchangeRate(Number(rate));
        } catch (error) {
            console.error('Error fetching exchange rate:', error);
        }
    }, [ydContract]);

    const getYdBalance = useCallback(async () => {
        if (!ydContract || !address) return;
        try {
            const balance = await ydContract.balanceOf(address);
            setYdBalance(Number(ethers.utils.formatEther(balance)));
        } catch (error) {
            console.error('Error fetching YD balance:', error);
        }
    }, [ydContract, address]);

    const getEthBalance = useCallback(async () => {
        if (!signer || !address) return;
        try {
            const balance = await signer.getBalance();
            setEthBalance(ethers.utils.formatEther(balance));
        } catch (error) {
            console.error('Error fetching ETH balance:', error);
        }
    }, [signer, address]);

    const getBalance = useCallback(async (isYd: boolean) => {
        if (isYd) {
            await getYdBalance();
            return ydBalance;
        } else {
            await getEthBalance();
            return ethBalance;
        }
    }, [getYdBalance, getEthBalance, ydBalance, ethBalance]);

    useEffect(() => {
        getExchangeRate();
        getYdBalance();
        getEthBalance();
    }, [getExchangeRate, getYdBalance, getEthBalance]);
    
    return {
        state: { 
            isMax, 
            ydContract: contract, 
            exchangeRate, 
            ydBalance,
            ethBalance,
            ydTokenAddress: YIDENG_TOKEN_ADDRESS,
            ydTokenLink: `${ETHERSCAN_URL}/address/${YIDENG_TOKEN_ADDRESS}`,
        },
        actions: {
            setExchangeRate,
            toggleIsMax,
            getExchangeRate,
            getYdBalance,
            getEthBalance,
            getBalance
        }
    }
}