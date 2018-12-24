import web3 from "./web3";
import Message from "./build/Message.json";

const instance = new web3.eth.Contract(
  JSON.parse(Message.interface),
  "0x30AdBe77Fc97bCD03d8F97bAbFAB97057BbDD04c"
);

export default instance;
