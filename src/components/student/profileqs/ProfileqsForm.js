import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

// faked import of axiosAuth()
import axios from 'axios';
function axiosAuth() {
  const token = localStorage.getItem('backendToken');

  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`
    }
  });
}

// Handle Form Submit, `PUT` request
const handleSubmit = values => {
  const backEndURL = 'https://halg-backend.herokuapp.com/api/students/update';
  
  // match Object keys to what back end expects
  const formattedObj = {
    student: {
      about: values.summary,
      acclaim: values.acclaimBadgeURL,
      // desired_title: values.desiredTitle,
      github: values.gitHubURL,
      linkedin: values.linkedInURL,
      location: values.location,
      twitter: values.twitterURL,
      website: values.portfolioURL
    }
  };

  // Remove empty strings from Object
  const removeEmpty = obj =>
    Object.keys(obj)
      .filter(f => Boolean(obj[f]) !== false)
      .reduce(
        (r, i) =>
          typeof obj[i] === 'object'
            ? { ...r, [i]: removeEmpty(obj[i]) } // recurse if nested Object
            : { ...r, [i]: obj[i] },
        {}
      );

  console.log('format strip obj: ', removeEmpty(formattedObj));

  axiosAuth()
    .put(backEndURL, removeEmpty(formattedObj))
    .then(result => console.log('successful POST request – result: ', result))
    .catch(error => console.error(error));
};

// Render the Formik form
const renderForm = ({ errors, status, touched, isSubmitting }) => (
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
      <Field name="desiredTitle" type="text" />
      <ErrorMessage name="desiredTitle" component="div" />
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
      <Field name="portfolioURL" type="text" />
      <ErrorMessage name="portfolioURL" component="div" />
    </label>

    <label>
      <span className="input-label">GitHub Profile URL</span>
      <br />
      <Field name="gitHubURL" type="text" />
      <ErrorMessage name="gitHubURL" component="div" />
    </label>

    <label>
      <span className="input-label">LinkedIn Profile URL</span>
      <br />
      <Field name="linkedInURL" type="text" />
      <ErrorMessage name="linkedInURL" component="div" />
    </label>

    <label>
      <span className="input-label">Twitter Profile URL</span>
      <br />
      <Field type="text" name="twitterURL" />
      <ErrorMessage name="twitterURL" component="div" />
    </label>

    <label>
      <span className="input-label">Acclaim Badge URL</span>
      <br />
      <Field name="acclaimBadgeURL" type="text" />
      <ErrorMessage name="acclaimBadgeURL" component="div" />
    </label>

    <label className="stretch-input">
      Tell prospective employers about yourself (500 words)
      <br />
      <span className="input-label">Summary</span>
      <br />
      <Field name="summary" component="textarea" />
      <ErrorMessage name="summary" component="div" />
    </label>

    <button type="submit" disabled={isSubmitting}>
      Create Profile
    </button>
  </Form>
);

// Validation Schema, feels similar to React PropTypes
const ProfileQsSchema = Yup.object().shape({
  acclaimBadgeURL: Yup.string()
    .trim()
    .url('Must be a valid URL'),
  desiredTitle: Yup.string()
    .max(100, `Maximum 100 characters`)
    .trim('Must be a valid URL'),
  gitHubURL: Yup.string()
    .trim()
    .url('Must be a valid URL'),
  linkedInURL: Yup.string()
    .trim()
    .url('Must be a valid URL'),
  location: Yup.string().trim(),
  name: Yup.string()
    .max(100, `Maximum 100 characters`)
    .required('Name is required')
    .trim('Must be a valid URL'),
  portfolioURL: Yup.string()
    .trim()
    .url('Must be a valid URL'),
  summary: Yup.string()
    .max(1000, `Maximum 1,000 characters`)
    .trim(),
  twitterURL: Yup.string()
    .trim()
    .url('Must be a valid URL')
});

const ProfileqsForm = props => {
  // May not need all of the `|| ''` in these depending on `props`
  const initialFormValues = {
    acclaimBadgeURL: props.initialData.acclaimBadgeURL || '',
    desiredTitle: props.initialData.desiredTitle || '',
    gitHubURL: props.initialData.gitHubURL || '',
    linkedInURL: props.initialData.linkedInURL || '',
    location: props.initialData.location || '',
    name: props.initialData.name || '',
    portfolioURL: props.initialData.portfolioURL || '',
    summary: props.initialData.summary || '',
    twitterURL: props.initialData.twitterURL || ''
  };

  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={
        handleSubmit
        // replace testing function with data submit function
        // (values, actions) => {
        //   setTimeout(() => {
        //     alert(JSON.stringify(values, null, 2));
        //     actions.setSubmitting(false);
        //   }, 1000);
        // }
      }
      validationSchema={ProfileQsSchema}
      render={renderForm}
    />
  );
};

export default ProfileqsForm;
