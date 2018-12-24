const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledMessage = require("./build/Message.json");

const provider = new HDWalletProvider(
  "robust fan load undo cash start direct seed artefact bundle public page",
  "https://rinkeby.infura.io/v3/1d5e3588363b4f5a91ca15573760408c"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledMessage.interface)
  )
    .deploy({ data: compiledMessage.bytecode })
    .send({ gas: "3000000", from: accounts[0] }
  );

  console.log("Contract deployed to", result.options.address);
};

deploy();
