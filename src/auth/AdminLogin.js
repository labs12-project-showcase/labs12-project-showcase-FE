import React, { Component } from 'react';
import { connect } from 'react-redux';
import { adminLogin } from './authActions.js';

class AdminLogin extends Component {
  render() {
    return ( 
      <div className="adminLogin">
        <button onClick={this.props.adminLogin}>Admin Login</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, { adminLogin })(AdminLogin);