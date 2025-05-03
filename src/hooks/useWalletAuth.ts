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
        // const sig = await signMessageAsync({ message: signatureMessage });
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
    console.log(_isConnected, '_isConnected🐻')
    if (!_isConnected) {
      // debugger
      setIsAuthenticated(false);
      setSigner("");
    }
  }, [_isConnected, setSigner]);

  useEffect(() => {
    if (_chain || chainId) {
      setCurrentChain(_chain!);
      setChainId(chainId!);
    }
  }, [chainId, _chain]);


  // 登录逻辑
  const onLogin = async ({ address }: { address: string }) => {
    try {
      // 1. 获取 nonce
      const nonceResponse = await fetch('/api/proxy/user/nonce', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address })
      });
  
      if (!nonceResponse.ok) {
        throw new Error(`获取 nonce 失败: ${nonceResponse.status} ${nonceResponse.statusText}`);
      }
  
      console.log('nonceResponse🍎:', nonceResponse);
      const nonceData = await nonceResponse.json();
      const nonce = nonceData.nonce;
      if (!nonce) {
        throw new Error('无效的 nonce 响应');
      }
      console.log('获取到 nonce:', nonce);
  
      // 2. 钱包签名
      const signature = await signMessageAsync({ message: nonce });
      console.log('签名完成:', signature);
  
      // 3. 发送签名和地址到后端
      const loginResponse = await fetch('/api/proxy/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address, signature }),
      });
  
      if (!loginResponse.ok) {
        throw new Error(`登录失败: ${loginResponse.status} ${loginResponse.statusText}`);
      }
  
      const loginData: LoginResponseDto = await loginResponse.json();
      if (!loginData.token) {
        throw new Error('登录响应无效: 未返回 token');
      }
  
      // 4. 存储 token
      localStorage.setItem('access_token', loginData.token);
      setIsAuthenticated(true);
      setSigner(signature);
      console.log('登录成功, token 已存储:', loginData.token);
  
      return true;
    } catch (error) {
      console.error('登录错误:', error);
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