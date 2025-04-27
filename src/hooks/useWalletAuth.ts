"use client"

import { useState, useEffect } from 'react';
import { 
  useAccount, 
  useSignMessage, 
  useDisconnect, 
  useBalance, 
} from 'wagmi';
import { 
  isConnectedAtom, 
  addressAtom, 
  isAuthenticatedAtom, 
  signerAtom,
  currentChainAtom,
  chainIdAtom,
  balanceAtom,
  tokenSymbolAtom
} from '@/atoms/wallet';
import { useAtom } from 'jotai';
import { userApi } from '@/apis/user';
import { GetAccountReturnType } from 'wagmi/actions'
import { LoginRequest } from '@/types/user';

interface UseWalletAuthProps {
  signatureMessage?: string;
}

const useWalletAuth = ({ 
  signatureMessage = 'Have you confirmed your authorization to log in to your web3 wallet?',
}: UseWalletAuthProps = {}) => {
  const { isConnected: _isConnected, address: _address, chainId: _chainId, chain: _chain } = useAccount();
  const { disconnect } = useDisconnect();
  const [isSigningMessage, setIsSigningMessage] = useState(false);
  const { signMessageAsync } = useSignMessage();
  const { data: balanceData } = useBalance({ address: _address });

  // Get atoms
  const [tokenSymbol, setTokenSymbol] = useAtom(tokenSymbolAtom);
  const [isConnected, setIsConnected] = useAtom(isConnectedAtom);
  const [address, setAddress] = useAtom(addressAtom);
  const [currentChain, setCurrentChain] = useAtom(currentChainAtom);
  const [chainId, setChainId] = useAtom(chainIdAtom);
  const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom);
  const [signer, setSigner] = useAtom(signerAtom);
  const [balance, setBalance] = useAtom(balanceAtom);

  // Handle signature
  // const handleSignature = async () => {
  //   if (_isConnected) {
  //     if (isAuthenticated || isSigningMessage) return;
  //     setIsConnected(_isConnected);
  //     setIsSigningMessage(true);
  //     try {
  //       const sig = await signMessageAsync({ message: signatureMessage });
  //       setSigner(sig);
  //       setIsAuthenticated(true);
  //     } catch (error) {
  //       console.error('sign error:', error);
  //       disconnect();
  //       setIsAuthenticated(false);
  //     } finally {
  //       setIsSigningMessage(false);
  //     }
  //   } else {
  //     alert('Please connect your wallet first');
  //   }
  // };

  useEffect(() => {
    setIsConnected(_isConnected);
  }, [_isConnected]);

  useEffect(() => {
    setAddress(_address);
  }, [ _address]);

  useEffect(() => {
    if (!_isConnected) {
      setIsAuthenticated(false);
      setSigner("");
    }
  }, [_isConnected, setIsAuthenticated, setSigner]);

  useEffect(() => {
    if (_chain || chainId) {
      setCurrentChain(_chain!);
      setChainId(chainId!);
    }
  }, [chainId, _chain]);

  // 登录
  const onLogin = async ({address, signature}: LoginRequest) => {
    try {
      const nonce = await userApi.getNonce({address});
      console.log('nonce', nonce);
      const login_res = await userApi.login({address, signature});
      console.log(`login_res token: ${login_res.data?.token}`);

      // if(login_res.success && login_res.data?.token){
      //   localStorage.setItem('token', login_res.data.token);
      //   setIsAuthenticated(true);
      //   return true;
      // }
      // return false;
    } catch (error) {
      console.error('Login error:', error);
      setIsAuthenticated(false);
      return false;
    }
  };

  useEffect(() => {
    if(balanceData?.value) {
        setBalance(balanceData?.value);
    }
    if (balanceData?.symbol ) {
        setTokenSymbol(balanceData.symbol);
    }
  }, [balanceData?.symbol, balanceData?.value]);

  return {
    state: {
      isConnected,
      isAuthenticated,
      isSigningMessage,
      signer,
      address,
      currentChain,
      chainId,
      balance,
      tokenSymbol
    },
    actions: {
      onLogin,
      disconnect,
      setIsSigningMessage,
      setAddress,
      setIsConnected,
      setIsAuthenticated,
      setSigner,
      setCurrentChain,
      setChainId,
      setBalance,
    },
  };
};

export default useWalletAuth;