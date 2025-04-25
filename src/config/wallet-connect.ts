import { cookieStorage, createStorage, createConfig, http, Transport } from 'wagmi'
import { mainnet, polygon, optimism, arbitrum, base, zora, sepolia } from 'wagmi/chains';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
    metaMaskWallet,
    coinbaseWallet,
    walletConnectWallet,
    trustWallet,
    injectedWallet,
    rainbowWallet,
    ledgerWallet,
    braveWallet,
    argentWallet,
    imTokenWallet,
} from '@rainbow-me/rainbowkit/wallets';

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'YOUR_PROJECT_ID';

// 钱包元数据
export const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
}

export const warpchains: Array<number> = [mainnet.id, sepolia.id] as const
export const owrapchains = [mainnet, sepolia] as const

// 钱包列表
const walletList = [
    {
      groupName: 'Installed',
      wallets: [
        metaMaskWallet,
      ]
    },
    {
      groupName: 'Popular',
      wallets: [
        coinbaseWallet,
        walletConnectWallet,
        trustWallet,
        injectedWallet,
      ]
    },
    {
      groupName: 'More',
      wallets: [
        rainbowWallet,
        ledgerWallet,
        braveWallet,
        argentWallet,
        imTokenWallet,
      ]
    }
];

// 钱包链
export const chains = [sepolia, mainnet, polygon, optimism, arbitrum, base, zora] as const;

// 创建配置的工厂函数
export function createWagmiConfig() {
  // 钱包连接器
  const connectors = connectorsForWallets(walletList, {
    appName: 'Web3 University',
    projectId,
  });

  return createConfig({
    chains,
    ssr: true,
    storage: createStorage({
      storage: cookieStorage,
    }),
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
      [polygon.id]: http(),
      [optimism.id]: http(),
      [arbitrum.id]: http(),
      [base.id]: http(),
      [zora.id]: http(),
    },
    connectors,
  });
}
