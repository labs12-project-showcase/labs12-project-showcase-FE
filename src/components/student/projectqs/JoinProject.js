import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";

import axiosAuth from "../../../auth/axiosAuth";
import { getProject } from "./projectqsActions";

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
    <Link to="#" onClick={join}>
      <i className="fas fa-arrow-right" />
      Join Project
    </Link>
  );
};

export default withRouter(connect()(JoinProject));
