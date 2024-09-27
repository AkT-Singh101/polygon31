const hre = require("hardhat");
require("dotenv").config();
const fxRootContractABI = require("../fxRootContractABI.json");
const NFTContractABI = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

const FxERC721RootAddress = "0x9E688939Cb5d484e401933D850207D6750852053";
const NFTAddress = "0x9ACD19f3D896ff8377D795A9e571dCBb87f1b6B6";

const NFTABI = NFTContractABI.abi;
const walletAddress = "0xb87803838e3e1827CB24773D2ECDD4b95BD112B8";

async function main() {
  const contract = await hre.ethers.getContractAt(NFTABI, NFTAddress);
  const fxContract = await hre.ethers.getContractAt(
    fxRootContractABI,
    FxERC721RootAddress
  );

  for (let i = 1; i <= 5; i++) {
    try {
      //approve transaction
      const approveTx = await contract.approve(FxERC721RootAddress, i);
      await approveTx.wait();
      console.log(`Approved NFT ${i} for the transfer.`);

      //deposit transaction
      const depositTx = await fxContract.deposit(
        NFTAddress,
        walletAddress,
        i,
        "0x6556"
      );
      await depositTx.wait();
      console.log(`Deposited token ${i} to fxProtal Bridge`);
    } catch (e) {
      console.log(e.message);
    }
  }
}
main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});