import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Layout from "../../components/Layout";
import message from "../../ethereum/message";
import web3 from "../../ethereum//web3";

class ConvoShow extends Component {

  /*
  constructor(props) {
    super(props);

    this.state = ({
      creator: "",
      time: "",
      subject: "",
      message: "",
      viewers: ""
    });
  }
  */

  static async getInitialProps(props) {
    console.log(props.query.time);

    return {};
  }

  render () {
    return (
      <Layout>
        <h3>Convo Show</h3>
      </Layout>
    );
  }
}

export default ConvoShow;
