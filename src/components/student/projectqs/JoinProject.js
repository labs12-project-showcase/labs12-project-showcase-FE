import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import axiosAuth from "../../../auth/axiosAuth";
import { getProject } from "./projectqsActions";

const JoinProject = ({ dispatch, student_id, project_id }) => {
  const join = () => {
    axiosAuth()
      .put(`https://halg-backend.herokuapp.com/api/projects/join`, {
        student_id,
        project_id
      })
      .then(() => {
        dispatch(getProject(project_id));
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <Link to="#" onClick={join}>
      <i className="fas fa-arrow-right" />
      Join Project
    </Link>
  );
};

const mapStateToProps = state => ({
  student_id: state.profile.profileData.id
});

export default connect(mapStateToProps)(JoinProject);
