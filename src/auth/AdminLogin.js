import React, { Component } from "react";
import { connect } from "react-redux";
import { adminLogin } from "./authActions.js";
import Loading from "../components/utils/Loading.js";

class AdminLogin extends Component {
  componentDidMount() {
    this.props.adminLogin();
  }

  render() {
    return <Loading />;
  }
}

export default connect(
  null,
  { adminLogin }
)(AdminLogin);
