import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';

import { ProjectQsSchema, formSchema } from './ProjectQsFormSchema';
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

	// const [initialFormValues] = useState({
	// 	project_title: props.projects.name || '',
	// 	project_type: 'Web App',
	// 	live_demo_url: props.projects.website || '',
	// 	medium_article_url: props.project.medium || '',
	// 	customer_sales_pitch: props.projects.customer_pitch || '',
	// 	technical_sales_pitch: props.projects.tech_pitch || '',
	// });

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
