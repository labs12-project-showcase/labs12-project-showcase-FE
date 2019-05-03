import React, { useState } from "react";
import { connect } from "react-redux";
import { Formik } from "formik";

import { ProfileQsSchema, FormSchema } from "./ProfileqsFormSchema";
import { updateProfile } from "./profileqsActions";

const ProfileqsForm = ({ dispatch, ...props }) => {
  const [formSkillsList, setFormSkillsList] = useState([]);
  const [top_projects, setTopProjects] = useState([]);
  const [projects, setProjects] = useState([]);

  return (
    <Formik
      initialValues={props.initialFormValues}
      onSubmit={values =>
        dispatch(
          updateProfile({
            ...values,
            skills: formSkillsList.map(item => item.value),
            top_projects: top_projects.map(proj => ({
              project_id: proj.id,
              student_id: props.initialFormValues.id
            })),
            projects: projects.map(proj => ({
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
          skillsList={formSkillsList}
          setSkillsList={setFormSkillsList}
          top_projects={top_projects}
          setTopProjects={setTopProjects}
          projects={projects}
          setProjects={setProjects}
          {...props}
        />
      )}
    />
  );
};

export default connect()(ProfileqsForm);
