//Project Quick Start Form

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ProjectqsForm from './ProjectqsForm';

const Projectqs = props => {
	return (
		<div className="projectqs-container">
			<div className="projectqs">
				<h3>Project Quick Start</h3>
				<p>Please submit the following details about your new project </p>
				<ProjectqsForm />
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		...state.profileqs
	};
};

export default connect(mapStateToProps)(Projectqs);
