//Profile Quick Start

import React from 'react';
import { connect } from 'react-redux';

const Profileqs = props => {
	return <div className="profileqs" />;
};

const mapStateToProps = state => {
	return {
		...state.profileqs
	};
};

export default connect(mapStateToProps)(Profileqs);
