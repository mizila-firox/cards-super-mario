import { ethers } from "ethers";
import RandomNumberConsumer from "../hardhat/artifacts/contracts/RandomNumberConsumer.sol/RandomNumberConsumer.json";

export const connectEthereum = async () => {
  const [account] = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  if (!account) {
    return {
      provider: undefined,
      balance: undefined,
      account: undefined,
      randomNumberConsumer: undefined,
    };
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  // const priceConsumerV3 = new ethers.Contract(
  // 	"0x0745C904A08d3280944EB0Ce36d3CEd3cEb67E03",
  // 	PriceConsumerV3.abi,
  // 	signer
  // );

  const randomNumberConsumer = new ethers.Contract(
    "0xAE3DF72Bc800Ba37c4EB0CC99c8090e69A395bcc",
    RandomNumberConsumer.abi,
    signer
  );

  const balance = await provider.getBalance(account);
  // console.log(Number(balance));

  // const priceEther = await priceConsumerV3.priceFeed;
  // console.log(Number(await priceConsumerV3.ethUSDprice()));

  return { provider, balance, account, randomNumberConsumer };
};
