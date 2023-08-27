import dotenv from "dotenv";
import { createWalletClient, http } from "viem";
import { polygonMumbai, sepolia } from "viem/chains";
dotenv.config();

export const sepolia_client = createWalletClient({
  chain: sepolia,
  transport: http(process.env.RPC_Http_Sepolia),
});

export const mumbai_client = createWalletClient({
  chain: polygonMumbai,
  transport: http(process.env.RPC_Http_Mumbai),
});
