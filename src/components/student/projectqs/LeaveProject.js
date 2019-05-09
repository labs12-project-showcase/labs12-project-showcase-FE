import React from "react";
import { withRouter, Link } from "react-router-dom";

import axiosAuth from "../../../auth/axiosAuth";
import { getProject } from "./projectqsActions";

const LeaveProject = ({
  dispatch,
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

export default withRouter(LeaveProject);
