import React from "react";
import { withRouter } from "react-router-dom";

import axiosAuth from "../../../auth/axiosAuth";
import { getProject } from "../projectqs/projectqsActions";

const JoinProject = ({
  dispatch,
  match: {
    params: { id }
  }
}) => {
  const join = () => {
    axiosAuth
      .put(`https://halg-backend.herokuapp.com/api/projects/join/${id}`)
      .then(() => {
        dispatch(getProject(id));
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <button className="nav-button" type="button" onClick={join}>
      Join Project
    </button>
  );
};

export default withRouter(JoinProject);
