import React, { Component } from 'react';
import { connect } from 'react-redux';
import { adminLogin } from './authActions.js';
import Loading from '../components/utils/Loading.js';

class AdminLogin extends Component {
	render() {
		this.props.adminLogin();
		return (
			<Loading />
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
