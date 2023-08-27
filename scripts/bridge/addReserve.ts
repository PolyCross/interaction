import { parseEther } from "viem";
import { contract_deployer } from "../../config/account";
import {
  Bridge_Addr_Mumbai,
  Bridge_Addr_Sepolia,
  tokens,
} from "../../config/address";
import { Bridge_ABI } from "../../config/abi";
import { mumbai_client, sepolia_client } from "../../config/client";

const amounts: bigint[] = [
  parseEther("100000000"),
  parseEther("200000000"),
  parseEther("400000000"),
];

async function addReserve() {
  for (let index = 0; index < tokens.length; index++) {
    const element = tokens[index];
    const amount = amounts[index];

    try {
      const hash_sepolia = await sepolia_client.writeContract({
        account: contract_deployer,
        address: Bridge_Addr_Sepolia,
        abi: Bridge_ABI,
        functionName: "addReserve",
        args: [element, amount],
      });

      console.log(
        `sepolia add reserve tx: ${hash_sepolia} using token ${index}`
      );

      const hash_mumbai = await mumbai_client.writeContract({
        account: contract_deployer,
        address: Bridge_Addr_Mumbai,
        abi: Bridge_ABI,
        functionName: "addReserve",
        args: [element, amount],
      });

      console.log(
        `mumbai add reserve tx: ${hash_mumbai} using token ${index}\n`
      );
    } catch (error) {
      console.error(error);
    }
  }
}

addReserve().catch((e) => console.error(e));
