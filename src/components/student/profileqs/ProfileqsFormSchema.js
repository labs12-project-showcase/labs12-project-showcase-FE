import React from 'react';
import { ErrorMessage, Field, Form } from 'formik';
import Select from 'react-select';
import * as Yup from 'yup';

// Formik form for rendering
export const formSchema = ({
  errors,
  isSubmitting,
  status,
  touched,
  values
}) => (
  <Form className="profile-quick-start-form">
    <label>
      <span className="input-label">Name</span>
      <br />
      <Field name="name" type="text" />
      <ErrorMessage
        name="name"
        render={msg => <div className="inline-error">{msg}</div>}
      />
    </label>

    <label>
      <span className="input-label">Profile Picture URL</span>
      <br />
      <Field name="profile_pic" type="text" />
      <ErrorMessage
        name="profile_pic"
        render={msg => <div className="inline-error">{msg}</div>}
      />
    </label>

    <label>
      <span className="input-label">Lambda Track</span>
      <br />
      <Field
        name="track"
        render={({ field, form: { touched, errors } }) => (
          <>
            <Select
              options={values.track_options.map(track => {
                console.log('track name: ', track.name);
                return {
                  label: track.name,
                  value: track.name
                };
              })}
            />
          </>
        )}
      />
      <ErrorMessage
        name="track"
        render={msg => <div className="inline-error">{msg}</div>}
      />
    </label>

    <label>
      <span className="input-label">Lambda Cohort</span>
      <br />
      <Field
        name="cohort"
        render={() => (
          <>
            <Select
              options={values.cohort_options.map(cohort => ({
                label: cohort.cohort_name,
                value: cohort.cohort_name
              }))}
            />
          </>
        )}
      />
      <ErrorMessage
        name="cohort"
        render={msg => <div className="inline-error">{msg}</div>}
      />
    </label>

    <label>
      <span className="input-label">Desired Title</span>
      <br />
      <Field name="desired_title" type="text" />
      <ErrorMessage
        name="desired_title"
        render={msg => <div className="inline-error">{msg}</div>}
      />
    </label>

    <label>
      <span className="input-label">Current Location</span>
      <br />
      <Field name="location" type="text" />
      <ErrorMessage
        name="location"
        render={msg => <div className="inline-error">{msg}</div>}
      />
    </label>

    {/* @TODO: Make this an array field */}
    <label>
      <span className="input-label">Desired Locations</span>
      <br />
      <Field name="desired_locations" type="text" />
      <ErrorMessage
        name="desired_locations"
        render={msg => <div className="inline-error">{msg}</div>}
      />
    </label>

    <label>
      <span className="input-label">Portfolio URL</span>
      <br />
      <Field name="website" type="text" />
      <ErrorMessage
        name="website"
        render={msg => <div className="inline-error">{msg}</div>}
      />
    </label>

    <label>
      <span className="input-label">GitHub Profile URL</span>
      <br />
      <Field name="github" type="text" />
      <ErrorMessage
        name="github"
        render={msg => <div className="inline-error">{msg}</div>}
      />
    </label>

    <label>
      <span className="input-label">LinkedIn Profile URL</span>
      <br />
      <Field name="linkedin" type="text" />
      <ErrorMessage
        name="linkedin"
        render={msg => <div className="inline-error">{msg}</div>}
      />
    </label>

    <label>
      <span className="input-label">Twitter Profile URL</span>
      <br />
      <Field type="text" name="twitter" />
      <ErrorMessage
        name="twitter"
        render={msg => <div className="inline-error">{msg}</div>}
      />
    </label>

    <label>
      <span className="input-label">Acclaim Badge URL</span>
      <br />
      <Field name="acclaim" type="text" />
      <ErrorMessage
        name="acclaim"
        render={msg => <div className="inline-error">{msg}</div>}
      />
    </label>

    {/* @TODO: Make this an array field */}
    <label>
      <span className="input-label">Skills</span>
      <br />
      <Field name="skills" type="text" />
      <ErrorMessage
        name="skills"
        render={msg => <div className="inline-error">{msg}</div>}
      />
    </label>

    <label className="stretch-input">
      Tell prospective employers about yourself (500 words)
      <br />
      <span className="input-label">About</span>
      <br />
      <Field name="about" component="textarea" />
      <ErrorMessage
        name="about"
        render={msg => <div className="inline-error">{msg}</div>}
      />
    </label>

    <button type="submit" disabled={isSubmitting}>
      Create Profile
    </button>
  </Form>
);

// Validation Schema, feels similar to React PropTypes
export const ProfileQsSchema = Yup.object().shape({
  about: Yup.string()
    .max(1000, `Maximum 1,000 characters`)
    .trim(),
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
  website: Yup.string()
    .trim()
    .url('Must be a valid URL'),
  twitter: Yup.string()
    .trim()
    .url('Must be a valid URL')
});

// const exampleProfileData = {
// 	about: '', //
// 	acclaim: '', //
// 	// account_id: null,
// 	// approved: false,
// 	// cohort_id: null,
// 	// cohort_name: '',
// 	desired_locations: [], //
// 	desired_title: '', //
// 	// endorsements: [],
// 	// exists: false,
// 	github: '', //
// 	// graduated: false,
// 	// hired: false,
// 	hobbies: [], //
// 	// id: null,
// 	// lat: null,
// 	linkedin: '', //
// 	location: '', //
// 	// lon: null,
// 	name: '', //
// 	profile_pic: '',
// 	// projects: [],
// 	skills: [], //
// 	// top_projects: [],
// 	// top_skills: [],
// 	// track: '',
// 	// track_id: null,
// 	twitter: '', //
// 	website: '' //
// }
