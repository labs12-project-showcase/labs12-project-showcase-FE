import React from "react";
import { withRouter } from "react-router-dom";

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
    <button className="nav-button" type="button" onClick={leave}>
      Leave Project
    </button>
  );
};

export default withRouter(LeaveProject);
