import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Formik } from "formik";

import { ProjectQsSchema, formSchema } from "./ProjectqsFormSchema";
import {
  createProject,
  getProject,
  clearProjectData
} from "./projectqsActions";

const ProjectqsForm = ({ dispatch, ...props }) => {
  const [error, setError] = useState(false);
  useEffect(() => {
    if (props.id) {
      dispatch(getProject(props.id))
        .then(res => {
          console.log("Fetched project");
        })
        .catch(err => {
          console.log("Error", err);
        });
    } else {
      dispatch(clearProjectData);
    }
  }, [dispatch, props.id]);

  const submit = values => {
    dispatch(createProject({ ...values, student_id: props.profile.id }))
      .then(res => {
        console.log("success");
      })
      .catch(err => {
        console.log("failure", err);
        setError(true);
      });
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={props.initialFormValues}
        onSubmit={submit}
        validationSchema={ProjectQsSchema}
        enableReinitialize
        render={formSchema}
      />
      {error ? (
        <div className="modal-wrapper">
          <div className="error-modal">
            <h2>Whoops!...</h2>
            <p>
              This project already exists, please add it to your profile by
              searching or upload a new project.
            </p>
            <button type="button" onClick={() => setError(false)}>
              Okay
            </button>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    profile: state.profile.profileData,
    initialFormValues: state.project.projectData
  };
};

export default connect(mapStateToProps)(ProjectqsForm);
