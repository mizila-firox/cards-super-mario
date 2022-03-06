const hh = require("hardhat");
require("dotenv").config();

async function main() {
  const Card2 = await hh.ethers.getContractFactory("Card2");
  const card2 = await Card2.deploy();
  await card2.deployed();
  console.log("Card2 deployed to:", card2.address);

  for (let i = 1; i <= 8; i++) {
    const minted = await card2.mint(
      `https://ipfs.io/ipfs/Qmb6tWBDLd9j2oSnvSNhE314WFL7SRpQNtfwjFWsStXp5A/${i}.json`
    );
    console.log(minted);
  }

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
