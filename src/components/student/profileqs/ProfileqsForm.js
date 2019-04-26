import React, { useEffect, useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

// import axiosAuth from '../../../auth/axiosAuth'

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

const handleSubmitError = error => {
  console.error(error);
  const submitButtonError = document.createElement('div');
  submitButtonError.classList.add('submission-error');
  submitButtonError.textContent = 'There was a problem creating your profile';
  const submitButtonDiv = document.getElementById('quick-start-create-profile');
  submitButtonDiv.appendChild(submitButtonError);
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

    <div id="quick-start-create-profile">
      <button type="submit" disabled={isSubmitting}>
        Create Profile
      </button>
    </div>
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
  let initialFormValues;

  // const pullInitialData =
  setTimeout(
    axiosAuth()
      .get('https://halg-backend.herokuapp.com/api/auth/login/initial')
      .then(result => {
        initialFormValues = {
          acclaimBadgeURL: result.acclaimBadgeURL || '',
          desiredTitle: result.desiredTitle || '',
          gitHubURL: result.gitHubURL || '',
          linkedInURL: result.linkedInURL || '',
          location: result.location || '',
          name: result.name || '',
          portfolioURL: result.portfolioURL || '',
          summary: result.summary || '',
          twitterURL: result.twitterURL || ''
        };
      })
      .catch(error => console.error(error)),
    1000
  );

  // initialFormValues = {
  //   acclaimBadgeURL: pullInitialData.acclaimBadgeURL || '',
  //   desiredTitle: pullInitialData.desiredTitle || '',
  //   gitHubURL: pullInitialData.gitHubURL || '',
  //   linkedInURL: pullInitialData.linkedInURL || '',
  //   location: pullInitialData.location || '',
  //   name: pullInitialData.name || '',
  //   portfolioURL: pullInitialData.portfolioURL || '',
  //   summary: pullInitialData.summary || '',
  //   twitterURL: pullInitialData.twitterURL || ''
  // };

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={ProfileQsSchema}
      render={renderForm}
      onSubmit={
        // handleSubmit
        // replace testing function with data submit function
        // (values, actions) => {
        //   setTimeout(() => {
        //     alert(JSON.stringify(values, null, 2));
        //     actions.setSubmitting(false);
        //   }, 1000);
        // }
        // Handle Form Submit, `PUT` request
        // const handleSubmit =
        values => {
          const backEndURL =
            'https://halg-backend.herokuapp.com/api/students/update';

          // match Object keys to what back end expects
          const formattedObj = {
            student: {
              about: values.summary,
              acclaim: values.acclaimBadgeURL,
              // desired_title: values.desiredTitle,
              github: values.gitHubURL,
              linkedin: values.linkedInURL,
              location: values.location,
              // name: values.name,
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

          // Make `PUT` request
          axiosAuth()
            .put(backEndURL, removeEmpty(formattedObj))
            .then(result => {
              if (result.status == '200') {
                console.log('successful POST request – result: ', result);
                props.history.push('/student/dashboard');
              } else {
                // handleSubmitError(result);
                console.log(props.history);
              }
            })
            .catch(error => {
              console.error(error);
              // handleSubmitError(error);
            });
        }
      }
    />
  );
};

export default ProfileqsForm;
