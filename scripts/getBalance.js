const hre = require("hardhat");
const NFTJson = require("../artifacts/contracts/MyNFT.sol/MyNFT.json")

const NFtAddress ="0xC2906412120A60e16e70A82Ea6C2F7472B36Aa5d";
const ContractABI = NFTJson.abi
const walletAddress="0xb87803838e3e1827CB24773D2ECDD4b95BD112B8";

async function main(){
    const Contract = await hre.ethers.getContractAt(ContractABI,NFtAddress);
    console.log("You have "+await Contract.balanceOf(walletAddress)+" NFTs")
}
main((error)=>{
    console.log(error);
    process.exitCode=1;
})