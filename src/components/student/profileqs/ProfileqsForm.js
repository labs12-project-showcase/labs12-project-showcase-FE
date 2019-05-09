import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';

import { ProfileQsSchema, FormSchema } from './ProfileqsFormSchema';
import { updateProfile } from './profileqsActions';

const ProfileqsForm = ({ dispatch, ...props }) => {
  const [desiredLocations, setDesiredLocations] = useState([]);
  const [formSkillsList, setFormSkillsList] = useState([]);
  const [projects, setProjects] = useState([]);
  const [top_projects, setTopProjects] = useState([]);

  return (
    <Formik
      initialValues={props.initialFormValues}
      onSubmit={values =>
        dispatch(
          updateProfile({
            ...values,
            desired_locations: desiredLocations.map(location => ({
              lat: location.value.lat,
              location: location.value.locationName,
              lon: location.value.lon
            })),
            projects: projects.map(proj => ({
              project_id: proj.id,
              student_id: props.initialFormValues.id
            })),
            skills: formSkillsList.map(item => item.value),
            top_projects: top_projects.map(proj => ({
              project_id: proj.id,
              student_id: props.initialFormValues.id
            }))
          })
        )
      }
      validationSchema={ProfileQsSchema}
      enableReinitialize
      render={props => (
        <FormSchema
          desiredLocations={desiredLocations}
          projects={projects}
          skillsList={formSkillsList}
          setDesiredLocations={setDesiredLocations}
          setProjects={setProjects}
          setSkillsList={setFormSkillsList}
          setTopProjects={setTopProjects}
          top_projects={top_projects}
          {...props}
        />
      )}
    />
  );
};

export default connect()(ProfileqsForm);
