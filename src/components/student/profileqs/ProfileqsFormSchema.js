import React, { useEffect, useState } from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import { ErrorMessage, Field, Form } from 'formik';
import LocationSelect from '../../location/LocationSelect';
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

const reactSelectStylesStretch = {
  ...reactSelectStyles,
  container: provided => ({
    ...provided,
    width: 560
  })
};

export const FormSchema = ({
  isSubmitting,
  initialValues,
  setSkillsList,
  skillsList,
  values
}) => {
  /*
   *** TRACKS SET-UP ***
   */

  // Tracks uses state to hold the current selection
  // as a workaround to not being able to use defaultValue
  const [trackSelection, setTrackSelection] = useState();

  // Create options list for track <Select>
  const [trackOptions, setTrackOptions] = useState();
  useEffect(() => {
    // console.log('useEffect for setCohortOptions running!');
    setTrackOptions(
      initialValues.track_options.map(track => ({
        label: track.name,
        value: track.track_id
      }))
    );
  }, [initialValues]);

  // Populate Tracks <Select> with defaultValue
  useEffect(() => {
    // console.log('useEffect running for default tracks!');
    if (trackOptions && initialValues.track_id) {
      for (let track in trackOptions) {
        if (trackOptions[track].value === initialValues.track_id) {
          setTrackSelection(trackOptions[track]);
          break;
        }
      }
    }
  }, [trackOptions, initialValues]);

  /*
   *** COHORTS SET-UP ***
   */

  // Cohorts uses state to hold the current selection
  // as a workaround to not being able to use defaultValue
  const [cohortSelection, setCohortSelection] = useState();

  // Create options list for cohort <Select>
  const [cohortOptions, setCohortOptions] = useState();
  useEffect(() => {
    // console.log('useEffect for setCohortOptions running!');
    setCohortOptions(
      initialValues.cohort_options.map(cohort => ({
        label: cohort.cohort_name,
        value: cohort.cohort_id
      }))
    );
  }, [initialValues]);

  // Populate Cohorts <Select> with defaultValue
  useEffect(() => {
    // console.log('useEffect for default cohort running');
    if (cohortOptions && initialValues.cohort_id) {
      for (let cohort in cohortOptions) {
        if (cohortOptions[cohort].value === initialValues.cohort_id) {
          setCohortSelection(cohortOptions[cohort]);
          break;
        }
      }
    }
  }, [cohortOptions, initialValues]);

  /*
   *** SKILLS SET-UP ***
   */

  const [skillsInput, setSkillsInput] = useState();
  // const [skillsList, setSkillsList] = useState();

  const createSkillsOption = label => ({
    label,
    topSkill: false,
    value: label
  });

  // Populate Skills <Select> with defaultValues
  useEffect(() => {
    // console.log('useEffect for default skills running');
    setSkillsList(
      // take the plain array from initialValues
      // and make it into the array of objects React Select expects
      initialValues.skills.map(skill => {
        const option = createSkillsOption(skill);
        // set `topSkill: true` if it's in `top_skills` array
        if (initialValues.top_skills.includes(skill)) {
          option.topSkill = true;
        }
        return option;
      })
    );
  }, [initialValues, setSkillsList]);

  /*
   *** CURRENT_LOCATION SET-UP ***
   */
  const [currentLocation, setCurrentLocation] = useState('');

  useEffect(() => {
    if (initialValues.lat && initialValues.location && initialValues.lon) {
      setCurrentLocation({
        label: initialValues.location,
        value: {
          lat: initialValues.lat,
          locationName: initialValues.location,
          lon: initialValues.lon
        }
      });
    }
  }, [initialValues, setCurrentLocation]);

  /*
   *** THE FORM ***
   */
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
                  form.setFieldValue('track_id', option.value);
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
        <Field
          name="location"
          type="text"
          render={({ field, form }) => (
            <>
              <LocationSelect
                currentLocation={currentLocation}
                initialValues={initialValues}
                field={field}
                name={field.name}
                onBlur={field.onBlur}
                onChange={option => {
                  setCurrentLocation(option);
                  values.lat = option.value.lat;
                  values.location = option.value.locationName;
                  values.lon = option.value.lon;
                }}
                setCurrentLocation={setCurrentLocation}
                styles={reactSelectStyles}
              />
            </>
          )}
        />
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
          multiple
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
                onChange={(list) => {
                  setSkillsList(list);
                }}
                // track the input in state
                onInputChange={inputValue => setSkillsInput(inputValue)}
                // add the skill if `Enter` or `Tab` is pressed
                onKeyDown={event => {
                  if (!skillsInput) return;
                  switch (event.key) {
                    case 'Enter':
                    case 'Tab':
                      setSkillsList(previousState => [
                        ...previousState,
                        createSkillsOption(skillsInput)
                      ]);
                      console.group('Value Added – SkillKeyDown');
                      console.log(skillsList);
                      console.groupEnd();
                      setSkillsInput('');
                      event.preventDefault();
                      break;
                    default:
                      return;
                  }
                }}
                placeholder="Type a skill and press enter..."
                styles={reactSelectStylesStretch}
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
        <span className="input-label">Top Skills</span>
        <Field
          multiple
          name="top_skills"
          render={({ field, form }) => (
            <>
              <Select
                isClearable
                isMulti
                name={field.name}
                noOptionsMessage={() =>
                  'Add skills above, then select your top skills here'
                }
                onBlur={field.onBlur}
                onChange={option => {
                  /**
                   * Loop through the `previousState`.
                   * To begin, set all `skill.topSkill`s to `false`
                   * IF a `skill` matches a `skill` in the change `option`
                   * THEN set `skill.topSkill` to `true`
                   */
                  setSkillsList(previousState => {
                    return previousState.map(skill => {
                      skill.topSkill = false;
                      for (let topSkill of option) {
                        console.log('compare: ', skill.value, topSkill.value);
                        if (skill.value === topSkill.value) {
                          skill.topSkill = true;
                          return skill;
                        }
                      }
                      return skill;
                    });
                  });
                  form.setFieldValue(
                    field.name,
                    option.map(skill => skill.value)
                  );
                  // console.log(
                  //   `values.${field.name} change: `,
                  //   values.top_skills
                  // );
                }}
                options={skillsList}
                styles={reactSelectStylesStretch}
                value={skillsList.filter(skill => skill.topSkill)}
              />
            </>
          )}
        />
        <ErrorMessage
          name="top_skills"
          render={msg => <div className="inline-error">{msg}</div>}
        />
      </label>

      <label className="stretch-input">
        <p>
          Tell prospective employers about yourself (maximum 500 characters)
        </p>
        <span className="input-label about-label">About</span>
        <br />
        <Field name="about" component="textarea" />
        <ErrorMessage
          name="about"
          render={msg => <div className="inline-error">{msg}</div>}
        />
      </label>

      <button type="submit" disabled={isSubmitting}>
        {initialValues.exists ? 'Save Changes' : 'Create Profile'}
      </button>
    </Form>
  );
};

// Validation Schema, feels similar to React PropTypes
export const ProfileQsSchema = Yup.object().shape({
  about: Yup.string()
    .max(500, `Maximum 500 characters`)
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
