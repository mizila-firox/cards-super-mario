import { ethers } from "ethers";
// import PriceConsumerV3 from "./artifacts/contracts/PriceConsumerV3.sol/PriceConsumerV3.json";

export const connectEthereum = async () => {
  const [account] = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  console.log(account);
  if (!account) {
    return {
      provider: undefined,
      balance: undefined,
      account: undefined,
    };
  }

  // window.location.reload();

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  // const priceConsumerV3 = new ethers.Contract(
  // 	"0x0745C904A08d3280944EB0Ce36d3CEd3cEb67E03",
  // 	PriceConsumerV3.abi,
  // 	signer
  // );

  const balance = await provider.getBalance(account);
  // console.log(Number(balance));

  // const priceEther = await priceConsumerV3.priceFeed;
  // console.log(Number(await priceConsumerV3.ethUSDprice()));

  return { provider, balance, account };
};
