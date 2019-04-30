// Project Quick Start Form

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ProjectqsForm from './ProjectqsForm';
import { getProjectData } from './projectqsActions';

const Projectqs = props => {
	useEffect(() => {
		props.getProjectData();
	  }, []);

	return (
		<div className="projectqs-container">
			<div className="projectqs">
				{/* @TODO: Make the `document.title` and <h3> dynamic */}
				<h3>Project Quick Start</h3>
				<p>Please submit the following details about your new project </p>
				<ProjectqsForm />
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		...state.projectqs,
		project: state.project
	};
};

export default connect(
	mapStateToProps,
	{ getProjectData }
)(Projectqs);
