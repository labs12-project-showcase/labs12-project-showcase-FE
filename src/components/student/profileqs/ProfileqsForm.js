import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';

import { ProfileQsSchema, FormSchema } from './ProfileqsFormSchema';
import { updateProfile } from './profileqsActions';

const ProfileqsForm = ({ dispatch, ...props }) => {
  const [formSkillsList, setFormSkillsList] = useState([]);

  return (
    <Formik
      initialValues={props.initialFormValues}
      onSubmit={values =>
        dispatch(
          updateProfile({
            ...values,
            skills: formSkillsList.map(item => item.value)
          })
        )
      }
      validationSchema={ProfileQsSchema}
      enableReinitialize
      render={props => (
        <FormSchema
          skillsList={formSkillsList}
          setSkillsList={setFormSkillsList}
          {...props}
        />
      )}
    />
  );
};

export default connect()(ProfileqsForm);
