import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';

import { ProfileQsSchema, formSchema } from './ProfileqsFormSchema';
import { updateProfile } from './profileqsActions';


const ProfileqsForm = ({ dispatch, ...props}) => {
  return (
    <Formik
			initialValues={props.initialFormValues}
      onSubmit={(values) => dispatch(updateProfile(values))}
      validationSchema={ProfileQsSchema}
      enableReinitialize
      render={formSchema}
    />
  );
};

export default connect()(ProfileqsForm);
