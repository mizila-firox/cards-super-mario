const hh = require("hardhat");
require("dotenv").config();
const Card2 = require("../artifacts/contracts/Card2.sol/Card2.json");

async function main() {
  // const Card2 = await hh.ethers.getContractFactory("Card2");
  // const card2 = await Card2.deploy();
  // await card2.deployed();
  // console.log("Card2 deployed to:", card2.address);

  const provider = new hh.ethers.providers.getDefaultProvider(
    process.env.mumbai
  );

  const signer = new hh.ethers.Wallet(process.env.account, provider);

  const contract = new hh.ethers.Contract(
    "0xFF8E19BE33A5B8A68bdf20a36005bF9643B5563a",
    Card2.abi,
    signer
  );

  const tx = await contract.transferFrom(
    "0xfE770DEE89Ce3b79ec9Be61468755DD7b542f5f5",
    contract.address,
    1,
    { gasPrice: "90000000000" }
  );
  console.log(tx);

  // console.log(await contract.name());
  // console.log(`total supply: ${Number(await contract.totalSupply())}`);

  // const arr = [2, 4, 6, 8];

  // for (let i = 0; i < 4; i++) {
  //   let minted = await contract.mint(
  //     `https://ipfs.io/ipfs/Qmb6tWBDLd9j2oSnvSNhE314WFL7SRpQNtfwjFWsStXp5A/${arr[i]}.json`,
  //     { gasPrice: "90000000000" }
  //   );
  //   console.log(minted);
  // }

  // console.log(`done minting!`);

  // for (let i = 1; i <= 8; i++) {
  //   const minted = await card2.mint(
  //     `https://ipfs.io/ipfs/Qmb6tWBDLd9j2oSnvSNhE314WFL7SRpQNtfwjFWsStXp5A/${i}.json`
  //   );
  //   console.log(minted);
  // }

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
