# Minting and Bridging ERC721 NFTs via FXPortal Bridge

This project demonstrates how to mint ERC721 NFTs on the Ethereum Sepolia testnet and transfer them seamlessly to the Polygon Amoy testnet using the FXPortal bridge.

## Overview

The project is centered around creating an ERC721 NFT collection on the Ethereum Sepolia testnet. Once the NFTs are minted, they are transferred to the Polygon Amoy testnet through the FXPortal bridge, ensuring interoperability between Ethereum and Polygon. The NFTs are associated with image files hosted on IPFS, with metadata uploaded to Pinata, and the respective IPFS hashes are used during minting.

### Features
- **Minting NFTs**: Deploy and mint five NFTs with associated metadata.
- **Cross-chain Transfer**: Move minted NFTs from Sepolia to Polygon Amoy using FXPortal.
- **Verification**: Verify NFT balances on the destination network (Polygon Amoy).

## Getting Started

### Prerequisites
- **Node.js**: Ensure you have Node.js installed on your machine.
- **Metamask**: Set up MetaMask for Ethereum Sepolia and Polygon Amoy testnets.
- **Alchemy or Infura**: Create API keys for interacting with both Ethereum and Polygon networks.

### Usage
1. Fork this repository and clone it to your local machine.
2. Run `npm install` to install all dependencies.
3. Deploy the smart contract on the Sepolia testnet using the `deploy.js` script.
4. Mint five ERC721 NFTs using the `mint.js` script.
5. Transfer the NFTs to the Polygon Amoy testnet using the FXPortal bridge using the `approveDeposit.js` script.
6. You can then check the balance of the polygon contract to verify the transfer using the `getBalance.js` script.

## Author
Ankit Singh (Email:`superakt2003@gmail.com`)
