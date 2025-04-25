import { cookieStorage, createStorage, createConfig, http } from 'wagmi'
import { mainnet, polygon, optimism, arbitrum, base, zora, sepolia } from 'wagmi/chains';
import { createWeb3Modal } from '@web3modal/wagmi/react'
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
  url: 'https://web3modal.com', // origin must match your domain & subdomain
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

// 钱包连接器
const connectors = connectorsForWallets(walletList, {
    appName: 'Web3 University',
    projectId,
});

// 钱包链
export const chains = [sepolia, mainnet, polygon, optimism, arbitrum, base, zora] as const;

// wagmiConfig
export const wagmiConfig = createConfig({
    chains,
    ssr: true,
    storage: createStorage({
        storage: cookieStorage,
    }),
    transports: {
        [sepolia.id]: http(),
        [mainnet.id]: http(),
        [polygon.id]: http(),
        [optimism.id]: http(),
        [arbitrum.id]: http(),
        [base.id]: http(),
        [zora.id]: http(),
    },
    connectors,
})

// 创建 Web3Modal
export const onCreateWeb3Modal = () =>
  createWeb3Modal({
    wagmiConfig: wagmiConfig,
    projectId,
    themeMode: 'dark',
    themeVariables: {
      '--w3m-z-index': 999000,
      // '--w3m-overlay-backdrop-filter': 'blur(5px)',
    },
    defaultChain: mainnet,
    featuredWalletIds: [
      'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96', // MetaMask
      '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0', // Coinbase
      '225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f', // Trust
      '1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369', // Rainbow
      '19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927', // Ledger
    ]
  })
// export const Web3Modal = onCreateWeb3Modal()
