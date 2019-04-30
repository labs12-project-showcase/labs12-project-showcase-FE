import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';

import { ProjectQsSchema, formSchema } from './ProjectqsFormSchema';
import { updateProject } from './projectqsActions';

// function handleSubmitError(error) {
//   console.error(error);
//   const submitButtonError = document.createElement('div');
//   submitButtonError.classList.add('submission-error');
//   submitButtonError.textContent = 'There was a problem creating your profile';
//   const submitButtonDiv = document.getElementById('quick-start-create-profile');
//   submitButtonDiv.appendChild(submitButtonError);
// };

const ProjectqsForm = ({ dispatch, ...props}) => {
	console.log('initial form values: ', props.initialFormValues);
	return (
		<Formik
			initialValues={props.initialFormValues}
			onSubmit={(values) => dispatch(updateProject(values))}
			validationSchema={ProjectQsSchema}
			enableReinitialize
			render={formSchema}
		/>
	);
};

export default connect()(ProjectqsForm);
