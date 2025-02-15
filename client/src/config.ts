import { createPublicClient, createWalletClient , http, custom } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import {   mantaSepoliaTestnet } from 'viem/chains'

// Custom Flow Testnet configuration
export const mantleSepoliaTestnetTry = {
  id: 5003,
  name: 'Mantle Sepolia',
  network: 'mantle-sepolia',
  nativeCurrency: {
    decimals: 18,
    name: 'Mantle',
    symbol: 'MNT',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.sepolia.mantle.xyz'],
      
    },
    public: {
      http: ['https://rpc.sepolia.mantle.xyz'],
    },
  },
  blockExplorers: {
    default: { name: 'MantleScan', url: 'https://testnet.mantle.xyz' },
  },
  testnet: true,
}

// Public client
export const publicClient = createPublicClient({
  chain: {
    id: 5003,
    name: 'Mantle Sepolia',
    network: 'mantle-sepolia',
    nativeCurrency: {
      decimals: 18,
      name: 'MNT',
      symbol: 'MNT',
    },
    rpcUrls: {
      default: { http: ['https://rpc.sepolia.mantle.xyz'] },
      public: { http: ['https://rpc.sepolia.mantle.xyz'] },
    },
  },
  transport: http()
})

// Wallet client
export const walletClient = createWalletClient({
  chain: mantaSepoliaTestnet,
  transport: custom(window.ethereum)
})

// Get Wallet Client function
export const getWalletClient = () => {
  if (typeof window !== 'undefined' && window.ethereum) {
    return createWalletClient({
      chain: mantaSepoliaTestnet,
      transport: custom(window.ethereum),
      account: window.ethereum.selectedAddress
    })
  }
  return null
}

// Chain configuration for wallet connection
export const chainConfig = {
  chainId: '0x138b', // 545 in hex
  chainName: 'Mantle Sepolia',
  nativeCurrency: {
    name: 'MNT',
    symbol: 'MNT',
    decimals: 18
  },
  rpcUrls: ['https://rpc.sepolia.mantle.xyz'],
  blockExplorerUrls: ['https://testnet.mantle.xyz']
}

// JSON-RPC Account
// export const [account] = await walletClient.getAddresses()

// Local Account
export const account = privateKeyToAccount('0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e')


