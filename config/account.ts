import dotenv from "dotenv";
import { privateKeyToAccount } from "viem/accounts";
dotenv.config();

export const token_deployer = privateKeyToAccount(
  `0x${process.env.PrivateKey_Token_Depolyer}`
);

export const contract_deployer = privateKeyToAccount(
  `0x${process.env.PrivateKey_Contract_Depolyer}`
);

export const dev_account = privateKeyToAccount(
  `0x${process.env.PrivateKey_Dev_Account}`
);
