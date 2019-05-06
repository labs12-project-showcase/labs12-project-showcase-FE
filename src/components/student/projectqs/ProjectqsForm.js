import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Formik } from "formik";

import { ProjectQsSchema, FormSchema } from "./ProjectqsFormSchema";
import {
  createProject,
  getProject,
  clearProjectData
} from "./projectqsActions";

const ProjectqsForm = ({ dispatch, ...props }) => {
  const [formSkillsList, setFormSkillsList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (props.match.params.id) {
      dispatch(getProject(props.match.params.id));
    } else {
      dispatch(clearProjectData());
    }
  }, [dispatch, props.match.params.id]);

  const submit = values => {
    if (!props.id) {
      dispatch(
        createProject({
          ...values,
          student_id: props.profile.id,
          skills: formSkillsList.map(skill => skill.value)
        })
      )
        .then(res => {
          props.history.push(`/student/profile/${props.profile.id}`);
        })
        .catch(err => {
          setError(true);
        });
    } else {
      //dispatch update project stuff here
    }
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={props.initialFormValues}
        onSubmit={submit}
        validationSchema={ProjectQsSchema}
        enableReinitialize
        render={props => (
          <FormSchema
            project_id={props.id}
            skillsList={formSkillsList}
            setSkillsList={setFormSkillsList}
            {...props}
          />
        )}
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

export default withRouter(connect(mapStateToProps)(ProjectqsForm));
