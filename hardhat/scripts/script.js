require("dotenv").config();
const { ethers } = require("ethers");
const hh = require("hardhat");
const RandomContract = require("../artifacts/contracts/RandomNumberConsumer.sol/RandomNumberConsumer.json");

async function main() {
  //

  const LINK_ABI = [
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "_spender", type: "address" },
        { name: "_value", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "_from", type: "address" },
        { name: "_to", type: "address" },
        { name: "_value", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [{ name: "", type: "uint8" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "_to", type: "address" },
        { name: "_value", type: "uint256" },
        { name: "_data", type: "bytes" },
      ],
      name: "transferAndCall",
      outputs: [{ name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "_spender", type: "address" },
        { name: "_subtractedValue", type: "uint256" },
      ],
      name: "decreaseApproval",
      outputs: [{ name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ name: "_owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "balance", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "_to", type: "address" },
        { name: "_value", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "_spender", type: "address" },
        { name: "_addedValue", type: "uint256" },
      ],
      name: "increaseApproval",
      outputs: [{ name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { name: "_owner", type: "address" },
        { name: "_spender", type: "address" },
      ],
      name: "allowance",
      outputs: [{ name: "remaining", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "from", type: "address" },
        { indexed: true, name: "to", type: "address" },
        { indexed: false, name: "value", type: "uint256" },
        { indexed: false, name: "data", type: "bytes" },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "owner", type: "address" },
        { indexed: true, name: "spender", type: "address" },
        { indexed: false, name: "value", type: "uint256" },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "from", type: "address" },
        { indexed: true, name: "to", type: "address" },
        { indexed: false, name: "value", type: "uint256" },
      ],
      name: "Transfer",
      type: "event",
    },
  ];

  // const RandomNumberConsumer = await hh.ethers.getContractFactory(
  //   "RandomNumberConsumer"
  // );

  // const randomNumberConsumer = await RandomNumberConsumer.deploy();
  // await randomNumberConsumer.deployed();
  // console.log("random number deployed to:", randomNumberConsumer.address);

  const provider = new ethers.providers.getDefaultProvider(process.env.mumbai);
  const signer = new ethers.Wallet(process.env.account, provider);

  const linkToken = new ethers.Contract(
    "0x326C977E6efc84E512bB9C30f76E30c160eD06FB",
    LINK_ABI,
    signer
  );

  const randomContract = new ethers.Contract(
    "0xAE3DF72Bc800Ba37c4EB0CC99c8090e69A395bcc",
    RandomContract.abi,
    signer
  );

  const linkContractBalance = Number(
    await linkToken.balanceOf(randomContract.address)
  );

  // console.log(linkContractBalance);
  // const tx = await randomContract.getRandomNumber({ gasPrice: "80000000000" });
  // console.log(tx);

  const randomResult = Number(await randomContract.randomResult());
  const formatedResult = Number(String(randomResult).slice(0, 1));

  // const Card = await ethers.getContractFactory("Card");
  // const card = await Card.deploy();

  // await card.deployed();

  // console.log("Card deployed to:", card.address);

  // const minted = await superMarioWorld.mint(
  //   "https://ipfs.io/ipfs/Qmch3m7DEFYRaZiFG6gc8qgkBMS3nrTvM5h5v9xZK6rGEz"
  // );

  // console.log(minted);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
