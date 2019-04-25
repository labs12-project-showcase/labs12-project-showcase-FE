import React from 'react';
import { connect } from 'react-redux';

const Login = props => {
	return <div className="login" />;
};

const mapStateToProps = state => {
	return {
		...state.login
	};
};

export default connect(mapStateToProps)(Login);
