import React, { Component } from 'react';
import { connect } from 'react-redux';
import { adminLogin } from './authActions.js';

class AdminLogin extends Component {
	render() {
		return (
			<div className="adminLogin">
				<h2 className="adminLogin-text">Only an administrator account!</h2>
				<button className="adminLogin-btn" onClick={this.props.adminLogin}>
					Log In
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
