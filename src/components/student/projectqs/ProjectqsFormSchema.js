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
export const ProjectQsSchema = Yup.object().shape({
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
