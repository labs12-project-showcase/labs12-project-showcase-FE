import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Home = props => {
	return <div className="home">{props.welcome}</div>;
};

const mapStateToProps = state => {
	return {
		...state.home
	};
};

export default withRouter(connect(mapStateToProps)(Home));
