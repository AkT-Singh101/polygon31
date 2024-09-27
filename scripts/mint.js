const hre = require("hardhat");
const tokenAbi = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
require("dotenv").config();

const tokenAddress = "0x4aD3463F8F55AfD8d8c3127d4b1B497F161674c3";
const abi = tokenAbi.abi;

async function main() {
  const token = await hre.ethers.getContractAt(abi, tokenAddress);
  for (let i = 1; i <= 5; i++) {
    try {
      const tx = await token.mintNFT();
      await tx.wait();
      console.log("Nft Minted: " + i);
    } catch (e) {
      console.log(e);
    }
  }
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});