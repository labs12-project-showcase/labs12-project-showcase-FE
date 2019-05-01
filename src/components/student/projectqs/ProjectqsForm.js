import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';

import { ProjectQsSchema, formSchema } from './ProjectqsFormSchema';
import { createProject } from './projectqsActions';


const ProjectqsForm = ({ dispatch, ...props}) => {
	console.log(props.profile);
	return (
		<Formik
			onSubmit={(values) => dispatch(createProject({...values, student_id: props.profile.id}))}
			validationSchema={ProjectQsSchema}
			enableReinitialize
			render={formSchema}
		/>
	);
};

const mapStateToProps = state => {
	console.log('map state to props', state);
	return {
		profile: state.profile.profileData
	};
};

export default connect(
	mapStateToProps
)(ProjectqsForm);
