import dotenv from "dotenv";
import { Hex } from "viem";
import { privateKeyToAccount } from "viem/accounts";
dotenv.config();

export const token_deployer = privateKeyToAccount(
  process.env.PrivateKey_Token_Depolyer as Hex
);

export const contract_deployer = privateKeyToAccount(
  process.env.PrivateKey_Contract_Depolyer as Hex
);
