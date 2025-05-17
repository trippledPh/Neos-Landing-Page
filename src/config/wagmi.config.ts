import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

declare module "wagmi" {
  interface Register {
    config: typeof WagmiConfig;
  }
}

export const WagmiConfig = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
