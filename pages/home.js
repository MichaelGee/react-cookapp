import React, { Component } from "react";
import Jumbo from "../components/jumbo";
import Layout from "../components/layout";
import Login from "../components/login";
class Home extends Component {
  render() {
    return (
      <Layout>
        <div>
          <Jumbo />
          <Login />
        </div>
      </Layout>
    );
  }
}

export default Home;
