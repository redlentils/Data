import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import message from "../ethereum/message";
import web3 from "../ethereum/web3";
import Layout from "../components/Layout";
import { Link } from "../routes";

class ConvosIndex extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      myConvosCreators: [],
      myConvosTime: [],
      convoCount: ""
    });
  }

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    const myConvos = await message.methods.returnMyConvos().call({
      from: accounts[0]
    });
    const convoCount = await message.methods.convo_count().call();
    console.log(convoCount);

    this.setState({
      myConvosCreators: myConvos[0],
      myConvosTime: myConvos[1]
    });
  }

  renderMyConvos() {
    const items = this.state.myConvosTime.map((time, index) => {
      return {
        header: "BLOCK #:" + time,
        description: (
          <Link route={`/convos/${time}`}>
            <a>View Convo</a>
          </Link>
        ),
        meta: this.state.myConvosCreators[index],
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>My Convos</h3>

          <Link route="/convos/new">
            <a>
              <Button
                floated="right"
                content="Create Convo"
                icon="add"
                primary
              />
            </a>
          </Link>

          {this.renderMyConvos()}
        </div>
      </Layout>
    );
  }
}

export default ConvosIndex;
