import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Formik } from "formik";

import { ProjectQsSchema, FormSchema } from "./ProjectqsFormSchema";
import {
  createProject,
  getProject,
  clearProjectData,
  updateProject
} from "./projectqsActions";

const ProjectqsForm = ({ dispatch, project_id, ...props }) => {
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
    if (!props.match.params.id) {
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
      dispatch(
        updateProject(
          {
            ...values,
            student_id: props.profile.id,
            skills: formSkillsList.map(skill => skill.value)
          },
          props.match.params.id
        )
      )
        .then(res => {
          props.history.push(`/student/project-view/${props.match.params.id}`);
        })
        .catch(err => {
          console.log("Error in form component .catch");
        });
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
            project_id={project_id}
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
    initialFormValues: state.project.projectData,
    project_id: state.project.projectData.id
  };
};

export default withRouter(connect(mapStateToProps)(ProjectqsForm));
