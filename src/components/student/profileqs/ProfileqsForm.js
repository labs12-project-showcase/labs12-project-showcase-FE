import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

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
      <Field name="about" type="text" />
      <ErrorMessage name="about" component="div" />
    </label>

    <button type="submit" disabled={isSubmitting}>
      Create Profile
    </button>
  </Form>
);

// Validation Schema, feels similar to React PropTypes
const ProfileQsSchema = Yup.object().shape({
  about: Yup.string()
    .max(500, `Maximum 500 characters`)
    .trim(),
  acclaimBadgeURL: Yup.string()
    .trim()
    .url(),
  desiredTitle: Yup.string()
    .max(100, `Maximum 100 characters`)
    .trim(),
  gitHubURL: Yup.string()
    .trim()
    .url(),
  linkedInURL: Yup.string()
    .trim()
    .url(),
  location: Yup.string().trim(),
  name: Yup.string()
    .max(100, `Maximum 100 characters`)
    .required()
    .trim(),
  portfolioURL: Yup.string()
    .trim()
    .url(),
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
        // replace testing function with data submit function
        (values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }
      }
      validationSchema={ProfileQsSchema}
      render={renderForm}
    />
  );
};

export default ProfileqsForm;
