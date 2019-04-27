import React, { useEffect, useState } from "react";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

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
const ProfileQsSchema = Yup.object().shape({
  acclaim: Yup.string()
    .trim()
    .url("Must be a valid URL"),
  desired_title: Yup.string()
    .max(100, `Maximum 100 characters`)
    .trim("Must be a valid URL"),
  github: Yup.string()
    .trim()
    .url("Must be a valid URL"),
  linkedin: Yup.string()
    .trim()
    .url("Must be a valid URL"),
  location: Yup.string().trim(),
  name: Yup.string()
    .max(100, `Maximum 100 characters`)
    .required("Name is required")
    .trim("Must be a valid URL"),
  portfolio: Yup.string()
    .trim()
    .url("Must be a valid URL"),
  about: Yup.string()
    .max(1000, `Maximum 1,000 characters`)
    .trim(),
  twitter: Yup.string()
    .trim()
    .url("Must be a valid URL")
});

const ProfileqsForm = props => {
  // May not need all of the `|| ''` in these depending on `props`
  const [initialFormValues, updateValues] = useState({
    acclaim: "",
    desired_title: "",
    github: "",
    linkedin: "",
    location: "",
    name: "",
    website: "",
    about: "",
    twitter: ""
  });

  useEffect(() => {
    const headers = {
      authorization: localStorage.getItem("backendToken")
    };
    axios
      .get("https://halg-backend.herokuapp.com/api/auth/login/initial", {
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
      validationSchema={ProfileQsSchema}
      enableReinitialize
      render={renderForm}
    />
  );
};

export default ProfileqsForm;
