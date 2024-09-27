require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks:{
    hardhat: {},
    sepolia:{
      url:"https://eth-sepolia.g.alchemy.com/v2/K6SycLg403bqGvTfRLOyHD6kaXlsF3qH",
      accounts:["4d24f1044bfb7afc0070ba71ce17f7bc9a9413165e657c4819fb79954a7c875b"]
    },
    amoy:{
      url:"https://polygon-amoy.g.alchemy.com/v2/K6SycLg403bqGvTfRLOyHD6kaXlsF3qH",
      accounts:["4d24f1044bfb7afc0070ba71ce17f7bc9a9413165e657c4819fb79954a7c875b"]
    }
  }
};
