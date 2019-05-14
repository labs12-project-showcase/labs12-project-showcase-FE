import React, { Component } from "react";
import { connect } from "react-redux";
import { adminLogin } from "./authActions.js";

class AdminLogin extends Component {
  render() {
    return (
      <div className="adminLogin">
        <p className="adminLogin-text">"You've found me lucky login button!"</p>
        <iframe
          src="https://giphy.com/embed/3orieXPC47dgvZKEXm"
          title="lucky charms"
          width="240"
          height="182"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        />
        <button className="adminLogin-btn" onClick={this.props.adminLogin}>
          Admin Login
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  { adminLogin }
)(AdminLogin);
