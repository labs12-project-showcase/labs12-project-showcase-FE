import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';

import { ProjectQsSchema, formSchema } from './ProjectqsFormSchema';
import { createProject } from './projectqsActions';


const ProjectqsForm = ({ dispatch, ...props}) => {
	return (
		<Formik
			initialValues={props.initialFormValues}
			onSubmit={(values) => dispatch(createProject({...values, student_id: props.profile.id}))}
			validationSchema={ProjectQsSchema}
			enableReinitialize
			render={formSchema}
		/>
	);
};

const mapStateToProps = state => {
	return {
		profile: state.profile.profileData,
		initialFormValues: state.project.projectData
	};
};

export default connect(
	mapStateToProps
)(ProjectqsForm);
