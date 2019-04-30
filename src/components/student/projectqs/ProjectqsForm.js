import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

// Render the Formik form
const renderForm = ({ errors, status, touched, isSubmitting }) => (
	<Form className="project-quick-start-form">
		<label>
			<span className="input-label">Project Title</span>
			<br />
			<Field name="project_title" type="text" className="project-title-text-area" />
			<ErrorMessage name="project_title" component="div" />
		</label>
		<label>
			<span className="input-label">Project Type</span>
			<br />
			<Field name="project_type" type="text" className="project-type-text-area"/>
			<ErrorMessage name="project_type" component="div" />
		</label>

		<label>
			<span className="input-label">Live Demo URL</span>
			<br />
			<Field name="live_demo_url" type="text" className="live-demo-text-area" />
			<ErrorMessage name="live_demo_url" component="div" />
		</label>

        <label>
			<span className="input-label">Medium Article URL</span>
			<br />
			<Field name="medium_article_url" type="text" className="medium-article-text-area" />
			<ErrorMessage name="medium_article_url" component="div" />
		</label>

		<label>
			<span className="input-label">Customer Sales Pitch</span>
			<br />
			<Field name="customer_sales_pitch" type="text" className="pitch-text-area" />
			<ErrorMessage name="customer_sales_pitch" component="div" />
		</label>

		<label>
			<span className="input-label">Technical Sales Pitch</span>
			<br />
			<Field name="technical_sales_pitch" type="text" className="pitch-text-area" />
			<ErrorMessage name="technical_sales_pitch" component="div" />
		</label>

		<button type="submit" disabled={isSubmitting}>
			Create Project
		</button>
	</Form>
);

// Validation Schema, feels similar to React PropTypes
const ProjectQsSchema = Yup.object().shape({
	project_title: Yup.string().trim(),
	project_type: Yup.string()
		.max(100, `Maximum 100 characters`),
	live_demo_url: Yup.string()
		.trim()
		.url('Must be a valid URL'),
	medium_article_url: Yup.string()
		.trim()
		.url('Must be a valid URL'),
	customer_sales_pitch: Yup.string().trim(),
	technical_sales_pitch: Yup.string().trim()
});

const ProjectqsForm = props => {
	// May not need all of the `|| ''` in these depending on `props`
	const [initialFormValues, updateValues] = useState({
		project_title: '',
		project_type: '',
		live_demo_url: '',
		medium_article_url: '',
		customer_sales_pitch: '',
		technical_sales_pitch: ''
	});

	useEffect(() => {
		const headers = {
			authorization: localStorage.getItem('backendToken')
		};
		axios
			.get('https://halg-backend.herokuapp.com/api/auth/login/initial', {
				headers
			})
			.then(({ data }) => {
				console.log(data);
				updateValues({
					...initialFormValues,
					...data
				});
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<Formik
			initialValues={initialFormValues}
			onSubmit={
				// replace testing function with data submit function
				(values, actions) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						actions.setSubmitting(false);
					}, 1000);
				}
			}
			validationSchema={ProjectQsSchema}
			enableReinitialize
			render={renderForm}
		/>
	);
};

export default ProjectqsForm;
