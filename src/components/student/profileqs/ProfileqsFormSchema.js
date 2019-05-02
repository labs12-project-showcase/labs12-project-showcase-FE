import React, { useEffect, useState } from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import { ErrorMessage, Field, Form } from 'formik';
import Select from 'react-select';
import * as Yup from 'yup';

// Custom styling for react-select components
const reactSelectStyles = {
  container: (provided, state) => ({
    ...provided,
    width: 224
  }),
  control: provided => ({
    ...provided,
    paddingLeft: 10,
    paddingTop: 4,
    minHeight: 48
  }),
  menu: provided => ({
    ...provided,
    zIndex: 2
  })
};

export const FormSchema = ({ errors, isSubmitting, initialValues, values }) => {
  /* *** TRACKS SET-UP *** */

  // Tracks uses state to hold the current selection
  // as a workaround to not being able to use defaultValue
  const [trackSelection, setTrackSelection] = useState();

  // Create options list for track <Select>
  const [trackOptions, setTrackOptions] = useState();
  useEffect(() => {
    console.log('useEffect for setCohortOptions running!');
    setTrackOptions(
      initialValues.track_options.map(track => ({
        label: track.name,
        value: track.track_id
      }))
    );
  }, [initialValues]);

  // Populate Tracks <Select> with defaultValue
  useEffect(() => {
    console.log('useEffect running for default tracks!');
    if (trackOptions && initialValues.track_id) {
      for (let track in trackOptions) {
        if (trackOptions[track].value === initialValues.track_id) {
          setTrackSelection(trackOptions[track]);
          break;
        }
      }
    }
  }, [trackOptions, initialValues]);

  /* *** COHORTS SET-UP *** */

  // Cohorts uses state to hold the current selection
  // as a workaround to not being able to use defaultValue
  const [cohortSelection, setCohortSelection] = useState();

  // Create options list for cohort <Select>
  const [cohortOptions, setCohortOptions] = useState();
  useEffect(() => {
    console.log('useEffect for setCohortOptions running!');
    setCohortOptions(
      initialValues.cohort_options.map(cohort => ({
        label: cohort.cohort_name,
        value: cohort.cohort_id
      }))
    );
  }, [initialValues]);

  // Populate Cohorts <Select> with defaultValue
  useEffect(() => {
    console.log('useEffect for default cohort running');
    if (cohortOptions && initialValues.cohort_id) {
      for (let cohort in cohortOptions) {
        if (cohortOptions[cohort].value === initialValues.cohort_id) {
          setCohortSelection(cohortOptions[cohort]);
          break;
        }
      }
    }
  }, [cohortOptions, initialValues]);

  /* *** SKILLS *** */

  const [skillsInput, setSkillsInput] = useState();
  const [skillsList, setSkillsList] = useState();

  // Populate Skills <Select> with defaultValues
  useEffect(() => {
    console.log('useEffect for default skills running');
    setSkillsList(initialValues.skills);
  }, [initialValues]);

  /* *** THE FORM *** */
  return (
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
          render={({ field, form }) => (
            <>
              <Select
                name={field.name}
                onBlur={field.onBlur}
                onChange={option => {
                  setTrackSelection(option);
                  form.setFieldValue(field.name, option.value);
                }}
                options={trackOptions}
                styles={reactSelectStyles}
                value={trackSelection}
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
          render={({ field, form }) => (
            <>
              <Select
                name={field.name}
                onBlur={field.onBlur}
                onChange={option => {
                  setCohortSelection(option);
                  form.setFieldValue('cohort_id', option.value);
                }}
                options={cohortOptions}
                styles={reactSelectStyles}
                value={cohortSelection}
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
        <span className="input-label">Desired Title</span>
        <br />
        <Field name="desired_title" type="text" />
        <ErrorMessage
          name="desired_title"
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

      <label className="stretch-input">
        <span className="input-label">Skills</span>
        <br />
        <Field
          name="skills"
          multiple={true}
          render={({ field, form }) => (
            <>
              <CreatableSelect
                components={{ DropdownIndicator: null }}
                isClearable
                isMulti
                inputValue={skillsInput}
                menuIsOpen={false}
                name={field.name}
                onBlur={field.onBlur}
                onChange={(list, actionMeta) => {
                  console.group('Skills Value Changed');
                  console.log(list);
                  console.log(`action: ${actionMeta.action}`);
                  console.groupEnd();
                  setSkillsList(list);
                  // Pull the `value`s for each item in the `list`
                  const submitList = list.map(item => item.value);
                  console.log('formList', formList);
                  // The line below is what I'd LIKE to have happen
                  form.setFieldValue(field.name, submitList);

                  /*
                   * was testing with a random field to change – doesn't work
                   * but it DOES work when I bring the line below to the `cohort` <Select>
                   */
                  // form.setFieldValue('desired_title', 'hello!', false);

                  console.log('form: ', form);
                  console.log('form values – skills: ', values);
                }}
                onInputChange={inputValue => setSkillsInput(inputValue)}
                onKeyDown={event => {
                  if (!skillsInput) return;
                  switch (event.key) {
                    case 'Enter':
                    case 'Tab':
                      setSkillsList(previousState => [
                        ...previousState,
                        {
                          skillsInput,
                          value: skillsInput
                        }
                      ]);
                      console.group('Value Added – SkillKeyDown');
                      console.log(skillsList);
                      console.groupEnd();
                      setSkillsInput('');
                      event.preventDefault();
                  }
                }}
                placeholder="Type a skill and press enter..."
                styles={{
                  ...reactSelectStyles,
                  container: provided => ({
                    ...provided,
                    width: 560
                  })
                }}
                value={skillsList}
              />
            </>
          )}
        />
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

      <label>
        <Field name="id" type="hidden" />
      </label>

      <button type="submit" disabled={isSubmitting}>
        Create Profile
      </button>
    </Form>
  );
};

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
