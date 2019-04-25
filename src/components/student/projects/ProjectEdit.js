import React from 'react';
import { connect } from 'react-redux';

const ProjectEdit = props => {
	return <div className="project-edit" />;
};

const mapStateToProps = state => {
	return {
		...state.project
	};
};

export default connect(mapStateToProps)(ProjectEdit);
