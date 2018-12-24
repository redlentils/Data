import React, { Component } from "react";
import { Grid, Card } from "semantic-ui-react";
import Layout from "../../components/Layout";
import message from "../../ethereum/message";
import web3 from "../../ethereum//web3";

class ConvoShow extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      convo: {}
    });
  }

  static getInitialProps(props) {
    return {
      id: props.query.vconvo
    };
  }

  async componentDidMount() {
    const convo = await message.methods.convos(this.props.id).call();

    this.setState({
      convo: convo
    });
  }

  renderMyConvo() {
    const items = [{
      header: "SUBJECT:    " + this.state.convo.subject,
      description: "MESSAGE:    " + this.state.convo.message,
      meta: "TIME:    " + this.state.convo.time,
      extra: "VIEWERS:    " + this.state.convo.viewers,
      fluid: true
    }]

    return <Card.Group items={items} />;
  }

  render () {
    return (
      <Layout>
        <h3>Convo Show</h3>
        {this.renderMyConvo()}
      </Layout>
    );
  }
}

export default ConvoShow;
