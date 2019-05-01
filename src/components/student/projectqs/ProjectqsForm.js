import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Formik } from "formik";

import { ProjectQsSchema, formSchema } from "./ProjectqsFormSchema";
import { createProject, getProject } from "./projectqsActions";

const ProjectqsForm = ({ dispatch, ...props }) => {
  useEffect(() => {
    if (props.id) {
      dispatch(getProject(props.id))
        .then(res => {
          console.log("Fetched project");
        })
        .catch(err => {
          console.log("Failed to fetch.");
        });
    }
  }, [dispatch, props.id]);
  return (
    <Formik
      initialValues={props.initialFormValues}
      onSubmit={values =>
        dispatch(createProject({ ...values, student_id: props.profile.id }))
      }
      validationSchema={ProjectQsSchema}
      enableReinitialize
      render={formSchema}
    />
  );
};

const mapStateToProps = state => {
  return {
    profile: state.profile.profileData,
    initialFormValues: state.project.projectData
  };
};

export default connect(mapStateToProps)(ProjectqsForm);
