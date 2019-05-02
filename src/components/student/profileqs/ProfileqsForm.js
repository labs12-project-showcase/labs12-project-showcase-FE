import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';

import { ProfileQsSchema, FormSchema } from './ProfileqsFormSchema';
import { updateProfile } from './profileqsActions';

// function handleSubmitError(error) {
//   console.error(error);
//   const submitButtonError = document.createElement('div');
//   submitButtonError.classList.add('submission-error');
//   submitButtonError.textContent = 'There was a problem creating your profile';
//   const submitButtonDiv = document.getElementById('quick-start-create-profile');
//   submitButtonDiv.appendChild(submitButtonError);
// };

const ProfileqsForm = ({ dispatch, ...props}) => {
  return (
    <Formik
			initialValues={props.initialFormValues}
      onSubmit={(values) => dispatch(updateProfile(values))}
      validationSchema={ProfileQsSchema}
      enableReinitialize
      render={props => <FormSchema {...props} />}
    />
  );
};

export default connect()(ProfileqsForm);
