import React, { Component } from "react";
import { Form, Button, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import message from "../../ethereum/message";
import web3 from "../../ethereum//web3";
import { Router } from "../../routes";

class ConvoNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "",
      subject: "",
      message: "",
      viewers: "",
      errorMessage: "",
      loading: false
    };
  }

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();

    this.setState({
      address: accounts[0]
    });
  }

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: "" });

    try {
      await message.methods
        .createConvo(this.state.viewers.split(","), this.state.subject, this.state.message)
        .send({
          from: this.state.address,
          gas: "3000000"
      });

      Router.pushRoute("/");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Create a Convo</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Viewers</label>
            <input
              value={this.state.viewers}
              onChange={event => this.setState({ viewers: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Subject</label>
            <input
              value={this.state.subject}
              onChange={event => this.setState({ subject: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Message</label>
            <input
              value={this.state.message}
              onChange={event => this.setState({ message: event.target.value })}
            />
          </Form.Field>

          <Message error header="Error" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>Store</Button>
        </Form>

      </Layout>
    );
  }
}

export default ConvoNew;
