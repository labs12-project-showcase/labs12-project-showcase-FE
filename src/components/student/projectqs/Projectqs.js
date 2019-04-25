// Project Quick Start

import React from 'react';
import { connect } from 'react-redux';

const Projectqs = props => {
	return <div className="projectqs" />;
};

const mapStateToProps = state => {
	return {
		...state.projectqs
	};
};

export default connect(mapStateToProps)(Projectqs);
