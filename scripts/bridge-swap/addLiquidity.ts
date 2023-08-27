import { parseEther } from "viem";
import { BridgeSwap_ABI } from "../../config/abi";
import { dev_account } from "../../config/account";
import { BridgeSwap_Addr_Sepolia, tokens } from "../../config/address";
import { mumbai_client, sepolia_client } from "../../config/client";

const amount1 = parseEther("2000000000"); // 200_000_000
const amount2 = parseEther("4000000000"); // 400_000_000

const receiver = dev_account.address;

async function addLiquidity() {
  for (let index = 0; index < tokens.length - 1; index++) {
    const tokenA = tokens[index];
    const tokenB = tokens[index + 1];

    const hash_sepolia = await sepolia_client.writeContract({
      account: dev_account,
      address: BridgeSwap_Addr_Sepolia,
      abi: BridgeSwap_ABI,
      functionName: "addLiquidity",
      args: [tokenA, tokenB, amount1, amount2, receiver],
    });
    console.log(
      `Sepolia Add Liqudity with token ${index} and ${
        index + 1
      }, tx: ${hash_sepolia}`
    );

    const hash_mumbai = await mumbai_client.writeContract({
      account: dev_account,
      address: BridgeSwap_Addr_Sepolia,
      abi: BridgeSwap_ABI,
      functionName: "addLiquidity",
      args: [tokenA, tokenB, amount1, amount2, receiver],
    });
    console.log(
      `Mumbai Add Liqudity with token ${index} and ${
        index + 1
      }, tx: ${hash_mumbai}\n`
    );
  }
}

addLiquidity().catch((e) => console.error(e));
