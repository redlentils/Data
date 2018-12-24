import web3 from "./web3";
import Message from "./build/Message.json";

const instance = new web3.eth.Contract(
  JSON.parse(Message.interface),
  "0x2305Edf3086c292b80De7b1EfE4c912576a1E63B"
);

export default instance;
