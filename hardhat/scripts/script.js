require("dotenv").config();
const { ethers, Wallet } = require("ethers");
const hh = require("hardhat");
const RandomContract = require("../artifacts/contracts/RandomNumberConsumer.sol/RandomNumberConsumer.json");

async function main() {
  // const RandomNumberConsumer = await hh.ethers.getContractFactory(
  //   "RandomNumberConsumer"
  // );

  // const randomNumberConsumer = await RandomNumberConsumer.deploy();
  // await randomNumberConsumer.deployed();
  // console.log("random number deployed to:", randomNumberConsumer.address);

  const provider = new ethers.providers.getDefaultProvider(process.env.mumbai);
  const signer = new ethers.Wallet(process.env.account, provider);

  // const value = Number(await randomNumberConsumer.getRandomNumber());

  // const wallet = new Wallet(process.env.account);
  // const signer = wallet.connect(provider);

  const randomContract = new ethers.Contract(
    "0xe73AA15C1117733eA0Dd7867E2a9aa0bcDE53b35",
    RandomContract.abi,
    signer
  );

  console.log(Number(await randomContract.randomResult()));

  // const gasPrice = await provider.getGasPrice();
  // const gas = ethers.utils.formatUnits(gasPrice, "wei");

  // console.log(gas);
  //FULFILL WITH LINK BEFORE
  // const tx = await randomContract.getRandomNumber({ gasPrice: "31217536349" });
  // console.log(tx);
  // console.log(Number(await randomContract.getRandomResult()));

  // console.log(value);

  // ...often this gas price is easier to understand or
  // display to the user in gwei
  // '180.336311245'

  // console.log(gas);

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
