import React, { useState, useEffect } from "react";
import CreatableSelect from "react-select/lib/Creatable";
import { ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";

const reactSelectStyles = {
  container: (provided, state) => ({
    ...provided,
    width: 224
  }),
  control: provided => ({
    ...provided,
    cursor: "text",
    paddingLeft: 10,
    paddingTop: 4,
    minHeight: 48
  }),
  menu: provided => ({
    ...provided,
    zIndex: 2
  })
};

const reactSelectStylesStretch = {
  ...reactSelectStyles,
  container: provided => ({
    ...provided,
    width: 660
  })
};

// Formik form for rendering
export const FormSchema = ({
  errors,
  status,
  touched,
  isSubmitting,
  initialValues,
  setSkillsList,
  skillsList,
  values
}) => {
  const [skillsInput, setSkillsInput] = useState();

  const createSkillsOption = label => ({
    label,
    topSkill: false,
    value: label
  });

  useEffect(() => {
    // console.log('useEffect for default skills running');
    setSkillsList(
      // take the plain array from initialValues
      // and make it into the array of objects React Select expects
      initialValues.project_skills.map(skill => {
        const option = createSkillsOption(skill);
        // set `topSkill: true` if it's in `top_skills` array
        if (initialValues.top_skills.includes(skill)) {
          option.topSkill = true;
        }
        return option;
      })
    );
  }, [initialValues, setSkillsList]);

  return (
    <Form className="project-quick-start-form">
      <label>
        <span className="input-label">Project Title</span>
        <br />
        <Field
          name="name"
          type="text"
          className="project-title-field"
          required
        />
        <ErrorMessage
          name="name"
          render={msg => <div className="inline-error">{msg}</div>}
        />
      </label>

      <label>
        <span className="input-label">Website URL</span>
        <br />
        <Field name="website" type="text" className="live-demo-url-field" />
        <ErrorMessage
          name="website"
          render={msg => <div className="inline-error">{msg}</div>}
        />
      </label>

      <label>
        <span className="input-label">GitHub URL</span>
        <br />
        <Field
          name="github"
          type="text"
          className="github-link-field"
          required
        />
        <ErrorMessage
          name="github"
          render={msg => <div className="inline-error">{msg}</div>}
        />
      </label>

      <label>
        <span className="input-label">Front-End Repo URL</span>
        <br />
        <Field name="fe_link" type="text" className="fe-link-field" />
        <ErrorMessage
          name="fe_link"
          render={msg => <div className="inline-error">{msg}</div>}
        />
      </label>

      <label>
        <span className="input-label">Back-End Repo URL</span>
        <br />
        <Field name="be_link" type="text" className="be-link-field" />
        <ErrorMessage
          name="be_link"
          render={msg => <div className="inline-error">{msg}</div>}
        />
      </label>

      <label>
        <span className="input-label">Mobile Repo URL</span>
        <br />
        <Field name="mobile_link" type="text" className="mobile-link-field" />
        <ErrorMessage
          name="mobile_link"
          render={msg => <div className="inline-error">{msg}</div>}
        />
      </label>

      <label>
        <span className="input-label">Marketing Site Repo URL</span>
        <br />
        <Field name="market_link" type="text" className="market-link-field" />
        <ErrorMessage
          name="market_link"
          render={msg => <div className="inline-error">{msg}</div>}
        />
      </label>

      <label>
        <span className="input-label">Design Document URL</span>
        <br />
        <Field name="design_link" type="text" className="design-link-field" />
        <ErrorMessage
          name="design_link"
          render={msg => <div className="inline-error">{msg}</div>}
        />
      </label>

      <label>
        <span className="input-label">YouTube Video URL</span>
        <br />
        <Field name="youtube_url" type="text" className="youtube-url-field" />
        <ErrorMessage
          name="youtube_url"
          render={msg => <div className="inline-error">{msg}</div>}
        />
      </label>

      <label>
        <span className="input-label">Medium Article URL</span>
        <br />
        <Field name="medium" type="text" className="medium-article-url-field" />
        <ErrorMessage
          name="medium"
          render={msg => <div className="inline-error">{msg}</div>}
        />
      </label>

      <label className="stretch-input">
        <span className="input-label">Technological Architecture</span>
        <br />
        <Field
          name="skills"
          multiple
          render={({ field, form }) => (
            <React.Fragment>
              <CreatableSelect
                components={{ DropdownIndicator: null }}
                isClearable
                isMulti
                inputValue={skillsInput}
                menuIsOpen={false}
                name={field.name}
                onBlur={field.onBlur}
                onChange={list => {
                  setSkillsList(list);
                }}
                // track the input in state
                onInputChange={inputValue => setSkillsInput(inputValue)}
                // add the skill if `Enter` or `Tab` is pressed
                onKeyDown={event => {
                  if (!skillsInput) return;
                  switch (event.key) {
                    case "Enter":
                    case "Tab":
                      setSkillsList(previousState => [
                        ...previousState,
                        createSkillsOption(skillsInput)
                      ]);
                      setSkillsInput("");
                      event.preventDefault();
                      break;
                    default:
                      return;
                  }
                }}
                placeholder="Type a technology and press enter..."
                styles={reactSelectStylesStretch}
                value={skillsList}
              />
            </React.Fragment>
          )}
        />
        <ErrorMessage
          name="skills"
          render={msg => <div className="inline-error">{msg}</div>}
        />
      </label>

      <label>
        <span className="input-label">Project Description</span>
        <br />
        <Field
          name="short_description"
          component="textarea"
          className="project-description-text-area"
          required
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
};

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
