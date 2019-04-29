import { ErrorMessage, Field, Form } from 'formik';
import * as Yup from 'yup';

// Formik form for rendering
export const formSchema = ({ errors, status, touched, isSubmitting }) => (
	<Form className="profile-quick-start-form">
		<label>
			<span className="input-label">Name</span>
			<br />
			<Field name="name" type="text" />
			<ErrorMessage name="name" component="div" />
		</label>

		<label>
			<span className="input-label">Desired Title</span>
			<br />
			<Field name="desired_title" type="text" />
			<ErrorMessage name="desired_title" component="div" />
		</label>

		<label>
			<span className="input-label">Location</span>
			<br />
			<Field name="location" type="text" />
			<ErrorMessage name="location" component="div" />
		</label>

		<label>
			<span className="input-label">Portfolio URL</span>
			<br />
			<Field name="website" type="text" />
			<ErrorMessage name="website" component="div" />
		</label>

		<label>
			<span className="input-label">GitHub Profile URL</span>
			<br />
			<Field name="github" type="text" />
			<ErrorMessage name="github" component="div" />
		</label>

		<label>
			<span className="input-label">LinkedIn Profile URL</span>
			<br />
			<Field name="linkedin" type="text" />
			<ErrorMessage name="linkedin" component="div" />
		</label>

		<label>
			<span className="input-label">Twitter Profile URL</span>
			<br />
			<Field type="text" name="twitter" />
			<ErrorMessage name="twitter" component="div" />
		</label>

		<label>
			<span className="input-label">Acclaim Badge URL</span>
			<br />
			<Field name="acclaim" type="text" />
			<ErrorMessage name="acclaim" component="div" />
		</label>

		<label className="stretch-input">
			Tell prospective employers about yourself (500 words)
			<br />
			<span className="input-label">About</span>
			<br />
			<Field name="about" component="textarea" />
			<ErrorMessage name="about" component="div" />
		</label>

		<button type="submit" disabled={isSubmitting}>
			Create Profile
		</button>
	</Form>
);

// Validation Schema, feels similar to React PropTypes
export const ProfileQsSchema = Yup.object().shape({
	acclaim: Yup.string()
		.trim()
		.url('Must be a valid URL'),
	desired_title: Yup.string()
		.max(100, `Maximum 100 characters`)
		.trim('Must be a valid URL'),
	github: Yup.string()
		.trim()
		.url('Must be a valid URL'),
	linkedin: Yup.string()
		.trim()
		.url('Must be a valid URL'),
	location: Yup.string().trim(),
	name: Yup.string()
		.max(100, `Maximum 100 characters`)
		.required('Name is required')
		.trim('Must be a valid URL'),
	portfolio: Yup.string()
		.trim()
		.url('Must be a valid URL'),
	about: Yup.string()
		.max(1000, `Maximum 1,000 characters`)
		.trim(),
	twitter: Yup.string()
		.trim()
		.url('Must be a valid URL')
});
