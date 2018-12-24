import Web3 from "web3";

let web3;

if (typeof window != "undefined" && typeof window.web3 !== "undefined") {
  // We are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
  console.log("using metamask");
} else {
  // We are on the server OR the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/1d5e3588363b4f5a91ca15573760408c"
  );
  web3 = new Web3(provider);
  console.log("using infura");
}

//console.log(web3);

export default web3;
