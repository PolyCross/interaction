import { contract_deployer } from "../../config/account";
import {
  Bridge_Addr_Mumbai,
  Bridge_Addr_Sepolia,
  tokens,
} from "../../config/address";
import { Bridge_ABI } from "../../config/abi";
import { mumbai_client, sepolia_client } from "../../config/client";

async function supportNewToken() {
  for (let index = 0; index < tokens.length; index++) {
    const element = tokens[index];

    const hash_sepolia = await sepolia_client.writeContract({
      account: contract_deployer,
      address: Bridge_Addr_Sepolia,
      abi: Bridge_ABI,
      functionName: "supportNewToken",
      args: [element],
    });
    console.log(`Sepolia Bridge supported token ${index}, tx: ${hash_sepolia}`);

    const hash_mumbai = await mumbai_client.writeContract({
      account: contract_deployer,
      address: Bridge_Addr_Mumbai,
      abi: Bridge_ABI,
      functionName: "supportNewToken",
      args: [element],
    });
    console.log(`Mumbai Bridge supported token ${index}, tx: ${hash_mumbai}\n`);
  }
}

supportNewToken().catch((e) => console.error(e));
