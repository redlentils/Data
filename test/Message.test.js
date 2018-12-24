const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

const compiledMessage = require("../ethereum/build/Message.json");

let accounts;
let message;
let messageAddress;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  message = await new web3.eth.Contract(JSON.parse(compiledMessage.interface))
    .deploy({ data: compiledMessage.bytecode })
    .send({ from: accounts[0], gas: "3000000" })
});

describe("Message", () => {
  it("deployes the message contract", () => {
    assert.ok(message.options.address);
    console.log(message.options.address);
  });

  it("checks to see initial message is created", async () => {
    const convos = await message.methods.convos(0).call();
    assert.equal(convos.creator, accounts[0]);
    assert.equal(convos.subject, "Greetings");
    assert.equal(convos.message, "Hello World!");
    // Not sure what viewers actually is?
    assert.equal(convos.viewerCount, 0);
    // How do you access block stamp from JS?
  });

  it("creates a convo and checks if viewership is assigned correctly", async () => {
    await message.methods
      .createConvo([accounts[1], accounts[2]], "A", "1")
      .send({
        from: accounts[0],
        gas: "3000000"
      });

    const convos = await message.methods.convos(1).call();
    assert.equal(convos.creator, accounts[0]);
    assert.equal(convos.subject, "A");
    assert.equal(convos.message, "1");
    //assert.equal(convos.viewers[0], accounts[1]);
    assert.equal(convos.viewerCount, "2");

    //const isViewer = await convos.viewer(accounts[0]);
    //assert(isViewer);

    var viewableConvos = await message.methods.getViewable_Convos().call({
      from: accounts[0]
    });
    assert.equal(viewableConvos, 1);

    var viewableConvos = await message.methods.getViewable_Convos().call({
      from: accounts[1]
    });
    assert.equal(viewableConvos, 1);

    var viewableConvos = await message.methods.getViewable_Convos().call({
      from: accounts[2]
    });
    assert.equal(viewableConvos, 1);

    try {
      var viewableConvos = await message.methods.getViewable_Convos().call({
        from: accounts[3]
      });
      assert.equal(viewableConvos, 1);
    } catch(err) {
      assert(err);
    }
  });

  it("calls returnMyConvos to see if the correct convos are returned", async () => {
    await message.methods
      .createConvo([accounts[2]], "A", "1")
      .send({
        from: accounts[0],
        gas: "3000000"
      });

    var myConvos = await message.methods.returnMyConvos().call({
      from: accounts[0]
    });

    console.log("break");
    console.log(myConvos);
    console.log("break");
    console.log(myConvos[0]);
    console.log("break");
    console.log(myConvos[0][0]);

    assert.equal(myConvos[0][0], accounts[0]);

    var myConvos = await message.methods.returnMyConvos().call({
      from: accounts[2]
    });

    assert.equal(myConvos[0][0], accounts[0]);

    try {
      var myConvos = await message.methods.returnMyConvos().call({
        from: accounts[3]
      });
      assert.equal(myConvos[0][0], accounts[0]);
    } catch(err) {
      assert(err);
    }

  });
});
