import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";

import axiosAuth from "../../../auth/axiosAuth";
import { getProject } from "./projectqsActions";

const LeaveProject = ({
  dispatch,
  students,
  match: {
    params: { id }
  }
}) => {
  const leave = () => {
    axiosAuth
      .put(`https://halg-backend.herokuapp.com/api/projects/leave/${id}`)
      .then(() => {
        dispatch(getProject(id));
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <Link to="#" onClick={leave}>
      <i className="fas fa-arrow-left" />
      Leave Project
    </Link>
  );
};

const mapStateToProps = state => ({
  students: state.project.projectData.students
});

export default withRouter(connect(mapStateToProps)(LeaveProject));
