import { HardhatUserConfig } from "hardhat/config";
import dotenv from "dotenv";
import "@nomicfoundation/hardhat-toolbox";


const accounts = {
  // derive accounts from mnemonic, see tasks/create-key
  mnemonic: `test test test test test test test test test test test junk`,
};

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    ctf: { 
      url: "http://127.0.0.1:8545/f40e290c-6545-40e1-bddc-3f5aa4c03b4c",
      accounts,
    }
  }
};

export default config;
