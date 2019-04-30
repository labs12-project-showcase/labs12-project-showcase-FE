//Profile Quick Start

import React from 'react';
import { connect } from 'react-redux';
import ProfileqsForm from './ProfileqsForm';

const Profileqs = props => {
	return (
		<div className="profileqs-container">
			<div className="profileqs">
				{/* @TODO: Make the `document.title` and <h3> dynamic */}
				<h3>Profile Quick Start</h3>
				<p>Please complete the following basic information</p>
				<ProfileqsForm />
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		...state.profileqs,
		profile: state.profile
	};
};

export default connect(mapStateToProps)(Profileqs);
