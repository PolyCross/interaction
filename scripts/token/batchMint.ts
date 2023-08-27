import { parseEther } from "viem";
import { ERC20_ABI } from "../../config/abi";
import { contract_deployer } from "../../config/account";
import { tokens } from "../../config/address";
import { mumbai_client, sepolia_client } from "../../config/client";

const amount = parseEther("1000000000"); // 1000_000_000

async function batchMint() {
  for (let index = 0; index < tokens.length; index++) {
    const element = tokens[index];

    const hash_sepolia = await sepolia_client.writeContract({
      account: contract_deployer,
      address: element,
      abi: ERC20_ABI,
      functionName: "mint",
      args: [contract_deployer.address, amount],
    });
    console.log(`Sepolia Token ${index} Minted, tx: ${hash_sepolia}`);

    const hash_mumbai = await mumbai_client.writeContract({
      account: contract_deployer,
      address: element,
      abi: ERC20_ABI,
      functionName: "mint",
      args: [contract_deployer.address, amount],
    });
    console.log(`Mumbai Token ${index} Minted, tx: ${hash_mumbai}\n`);
  }
}

batchMint().catch((e) => console.error(e));
