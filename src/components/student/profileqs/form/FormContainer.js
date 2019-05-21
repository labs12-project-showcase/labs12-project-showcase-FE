import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';

import { FormSchema } from './FormSchema';
import { updateProfile } from '../profileqsActions';
import { ProfileQsSchema } from './ValidationSchema';

const FormContainer = ({ dispatch, ...props }) => {
  const [desiredLocations, setDesiredLocations] = useState([]);
  const [formSkillsList, setFormSkillsList] = useState([]);
  const [projectsList, setProjectsList] = useState([]);
  const [topProjectsList, setTopProjectsList] = useState([]);

  return (
    <Formik
      initialValues={props.initialFormValues}
      onSubmit={values =>
        dispatch(
          updateProfile({
            ...values,
            desired_locations: desiredLocations.length
              ? desiredLocations.map(location => ({
                  lat: location.value.lat,
                  location: location.value.locationName,
                  lon: location.value.lon
                }))
              : [null], // `[null]` tells backend to clear data
            projects: projectsList.map(proj => ({
              project_id: proj.id,
              student_id: props.initialFormValues.id
            })),
            skills: formSkillsList.map(item => item.value),
            top_projects: topProjectsList.map(proj => ({
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
          setDesiredLocations={setDesiredLocations}
          projectsList={projectsList}
          setProjectsList={setProjectsList}
          setSkillsList={setFormSkillsList}
          skillsList={formSkillsList}
          topProjectsList={topProjectsList}
          setTopProjectsList={setTopProjectsList}
          {...props}
        />
      )}
    />
  );
};

export default connect()(FormContainer);
