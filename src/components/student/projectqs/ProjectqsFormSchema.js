import React from "react";
import { ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";

// Formik form for rendering
export const formSchema = ({ errors, status, touched, isSubmitting }) => (
  <Form className="project-quick-start-form">
    <label>
      <span className="input-label">Project Title</span>
      <br />
      <Field name="name" type="text" className="project-title-field" />
      <ErrorMessage name="name" component="div" />
    </label>

    <label>
      <span className="input-label">Website URL</span>
      <br />
      <Field name="website" type="text" className="live-demo-url-field" />
      <ErrorMessage name="website" component="div" />
    </label>

    <label>
      <span className="input-label">GitHub URL</span>
      <br />
      <Field name="github" type="text" className="github-link-field" />
      <ErrorMessage name="github" component="div" />
    </label>

    <label>
      <span className="input-label">Front-End Repo URL</span>
      <br />
      <Field name="fe_link" type="text" className="fe-link-field" />
      <ErrorMessage name="fe_link" component="div" />
    </label>

    <label>
      <span className="input-label">Back-End Repo URL</span>
      <br />
      <Field name="be_link" type="text" className="be-link-field" />
      <ErrorMessage name="be_link" component="div" />
    </label>

    <label>
      <span className="input-label">Mobile Repo URL</span>
      <br />
      <Field name="mobile_link" type="text" className="mobile-link-field" />
      <ErrorMessage name="mobile_link" component="div" />
    </label>

    <label>
      <span className="input-label">Marketing Site Repo URL</span>
      <br />
      <Field name="market_link" type="text" className="market-link-field" />
      <ErrorMessage name="market_link" component="div" />
    </label>

    <label>
      <span className="input-label">Design Document URL</span>
      <br />
      <Field name="design_link" type="text" className="design-link-field" />
      <ErrorMessage name="design_link" component="div" />
    </label>

    <label>
      <span className="input-label">YouTube Video URL</span>
      <br />
      <Field name="youtube_url" type="text" className="youtube-url-field" />
      <ErrorMessage name="youtube_url" component="div" />
    </label>

    <label>
      <span className="input-label">Medium Article URL</span>
      <br />
      <Field name="medium" type="text" className="medium-article-url-field" />
      <ErrorMessage name="medium" component="div" />
    </label>

    <label>
      <span className="input-label">Project Description</span>
      <br />
      <Field
        name="short_description"
        component="textarea"
        className="project-description-text-area"
      />
      <ErrorMessage name="short_description" component="div" />
    </label>

    <label>
      <span className="input-label">Customer Sales Pitch</span>
      <br />
      <Field
        name="customer_pitch"
        component="textarea"
        className="pitch-text-area"
      />
      <ErrorMessage name="customer_pitch" component="div" />
    </label>

    <label>
      <span className="input-label">Technical Sales Pitch</span>
      <br />
      <Field
        name="tech_pitch"
        component="textarea"
        className="pitch-text-area"
      />
      <ErrorMessage name="tech_pitch" component="div" />
    </label>

    <button type="submit" disabled={isSubmitting}>
      Update Project
    </button>
  </Form>
);

// Validation Schema, feels similar to React PropTypes
export const ProjectQsSchema = Yup.object().shape({
  name: Yup.string().trim(),
  github: Yup.string()
    .trim()
    .url("Must be a valid URL"),
  fe_link: Yup.string()
    .trim()
    .url("Must be a valid URL"),
  be_link: Yup.string()
    .trim()
    .url("Must be a valid URL"),
  mobile_link: Yup.string()
    .trim()
    .url("Must be a valid URL"),
  market_link: Yup.string()
    .trim()
    .url("Must be a valid URL"),
  design_link: Yup.string()
    .trim()
    .url("Must be a valid URL"),
  youtube_link: Yup.string()
    .trim()
    .url("Must be a valid URL"),
  website: Yup.string()
    .trim()
    .url("Must be a valid URL"),
  medium: Yup.string()
    .trim()
    .url("Must be a valid URL"),
  short_description: Yup.string().trim(),
  customer_pitch: Yup.string().trim(),
  tech_pitch: Yup.string().trim()
});
