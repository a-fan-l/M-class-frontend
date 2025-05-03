import { cookieStorage, createStorage, createConfig, http } from 'wagmi';
import { mainnet, optimism, sepolia, polygon, arbitrum, base, zora } from 'wagmi/chains';
import { connectorsForWallets, WalletList } from '@rainbow-me/rainbowkit';
import { 
  metaMaskWallet,
  coinbaseWallet,
  imTokenWallet,
  walletConnectWallet
} from '@rainbow-me/rainbowkit/wallets';

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '';

export const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

export const chains = [sepolia, mainnet] as const;

const walletList = [
  {
    groupName: 'Installed',
    wallets: [
      metaMaskWallet({ projectId })
    ]
  },
  {
    groupName: 'Popular',
    wallets: [
      coinbaseWallet({ appName: 'Web3 University' }),
      imTokenWallet({ projectId }),
      walletConnectWallet({ projectId })
    ]
  }
] as unknown as WalletList;

const connectors = connectorsForWallets(walletList, {
  appName: 'Web3 University',
  projectId,
});

const transportConfig = {
  [sepolia.id]: http(''),
  [mainnet.id]: http(''),
};

export const wagmiConfig = createConfig({
  chains,
  transports: transportConfig,
  connectors,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});