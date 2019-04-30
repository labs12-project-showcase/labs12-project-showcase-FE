import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';

import { ProfileQsSchema, formSchema } from './ProfileqsFormSchema';
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
  // console.log(props.initialFormValues);
  return (
    <Formik
			initialValues={props.initialFormValues}
			// @TODO: hook up Redux to the function below
			// function is now named `updateProfile()
			// I think I need to get `dispatch()` in there
			// From Redux
      onSubmit={(values) => dispatch(updateProfile(values))}
      validationSchema={ProfileQsSchema}
      enableReinitialize
      render={formSchema}
    />
  );
};

export default connect()(ProfileqsForm);
