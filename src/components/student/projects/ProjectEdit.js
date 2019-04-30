import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const ProjectEdit = props => {
	return (
		<div className="project-edit">
			<h1>PROJECT EDIT PAGE</h1>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		...state.project
	};
};

export default withRouter(connect(mapStateToProps)(ProjectEdit));
