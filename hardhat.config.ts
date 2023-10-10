import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";


const accounts = {
  // derive accounts from mnemonic, see tasks/create-key
  mnemonic: `test test test test test test test test test test test junk`,
};

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 10000,
          },
        },
      },
      {
        version: "0.8.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 10000,
          },
        },
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 10000,
          },
        },
      },
      {
        version: "0.5.16",
      },
    ],
  },
  networks: {
    ctf: { 
      url: "http://127.0.0.1:8545/f40e290c-6545-40e1-bddc-3f5aa4c03b4c",
      accounts,
    }
  }
};

export default config;
