import { parseEther } from "viem";
import { ERC20_ABI } from "../../config/abi";
import { dev_account } from "../../config/account";
import {
    BridgeSwap_Addr_Mumbai,
    BridgeSwap_Addr_Sepolia,
    tokens
} from "../../config/address";
import { mumbai_client, sepolia_client } from "../../config/client";

const amount = parseEther("1000000000000"); // 1000_000_000_000

async function batchApproveBridge() {
  for (let index = 0; index < tokens.length; index++) {
    const hash = await sepolia_client.writeContract({
      account: dev_account,
      address: tokens[index],
      abi: ERC20_ABI,
      functionName: "approve",
      args: [BridgeSwap_Addr_Sepolia, amount],
    });
    console.log(`Token ${index} has approved, hash: ${hash}`);
  }

  console.log("\nSepolia Approve Finish\n");

  for (let index = 0; index < tokens.length; index++) {
    const hash = await mumbai_client.writeContract({
      account: dev_account,
      address: tokens[index],
      abi: ERC20_ABI,
      functionName: "approve",
      args: [BridgeSwap_Addr_Mumbai, amount],
    });
    console.log(`Token ${index} has approved, hash: ${hash}`);
  }
}

batchApproveBridge().catch((e) => console.error(e));
