import React from 'react';
import { ErrorMessage, Field, Form } from 'formik';
import * as Yup from 'yup';

// Formik form for rendering
export const formSchema = ({ errors, status, touched, isSubmitting }) => (
	<Form className="project-quick-start-form">
		<label>
			<span className="input-label">Project Title</span>
			<br />
			<Field name="name" type="text" className="project-title-text-area" />
			<ErrorMessage name="name" component="div" />
		</label>

		<label>
			<span className="input-label">GitHub URL</span>
			<br />
			<Field name="github" type="text" className="github-text-area"/>
			<ErrorMessage name="github" component="div" />
		</label>

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
			<span className="input-label">Project Description</span>
			<br />
			<Field name="short_description" component="textarea" className="project-description-text-area" />
			<ErrorMessage name="short_description" component="div" />
		</label>

		<label>
			<span className="input-label">Customer Sales Pitch</span>
			<br />
			<Field name="customer_pitch" component="textarea" className="pitch-text-area" />
			<ErrorMessage name="customer_pitch" component="div" />
		</label>

		<label>
			<span className="input-label">Technical Sales Pitch</span>
			<br />
			<Field name="tech_pitch" component="textarea" className="pitch-text-area" />
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
    github: Yup.string()
		.trim()
		.url('Must be a valid URL'),
	website: Yup.string()
		.trim()
		.url('Must be a valid URL'),
	medium: Yup.string()
		.trim()
		.url('Must be a valid URL'),
	customer_pitch: Yup.string().trim(),
	tech_pitch: Yup.string().trim()
});
