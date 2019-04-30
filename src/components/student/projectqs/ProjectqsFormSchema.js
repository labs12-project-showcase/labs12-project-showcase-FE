import React from 'react';
import { ErrorMessage, Field, Form } from 'formik';
import * as Yup from 'yup';

const exampleProjectData = {
	name: '',
	website: '',
	medium: '',
    customer_pitch: '',
    tech_pitch: ''
}

// Formik form for rendering
export const formSchema = ({ errors, status, touched, isSubmitting }) => (
	<Form className="project-quick-start-form">
		<label>
			<span className="input-label">Project Title</span>
			<br />
			<Field name="name" type="text" className="project-title-text-area" />
			<ErrorMessage name="name" component="div" />
		</label>
		{/* <label>
			<span className="input-label">Project Type</span>
			<br />
			<Field name="project_type" type="text" className="project-type-text-area"/>
			<ErrorMessage name="project_type" component="div" />
		</label> */}

		<label>
			<span className="input-label">Live Demo URL</span>
			<br />
			<Field name="website" type="text" className="live-demo-text-area" />
			<ErrorMessage name="website" component="div" />
		</label>

        <label>
			<span className="input-label">Medium Article URL</span>
			<br />
			<Field name="medium" type="text" className="medium-article-text-area" />
			<ErrorMessage name="medium" component="div" />
		</label>

		<label>
			<span className="input-label">Customer Sales Pitch</span>
			<br />
			<Field name="customer_pitch" type="text" className="pitch-text-area" />
			<ErrorMessage name="customer_pitch" component="div" />
		</label>

		<label>
			<span className="input-label">Technical Sales Pitch</span>
			<br />
			<Field name="tech_pitch" type="text" className="pitch-text-area" />
			<ErrorMessage name="tech_pitch" component="div" />
		</label>

		<button type="submit" disabled={isSubmitting}>
			Create Project
		</button>
	</Form>
);

// Validation Schema, feels similar to React PropTypes
export const ProjectQsSchema = Yup.object().shape({
	name: Yup.string().trim(),
	website: Yup.string()
		.trim()
		.url('Must be a valid URL'),
	medium: Yup.string()
		.trim()
		.url('Must be a valid URL'),
	customer_pitch: Yup.string().trim(),
	tech_pitch: Yup.string().trim()
});
