// Project Quick Start Form

import React from "react";
import { connect } from "react-redux";
import ProjectqsForm from "./ProjectqsForm";
import { createProject } from "./projectqsActions";

const Projectqs = props => {
  return (
    <div className="projectqs-container">
      <div className="projectqs">
        {/* @TODO: Make the `document.title` and <h3> dynamic */}
        <h3>Project Quick Start</h3>
        <p>Please submit the following details about your project </p>
        <ProjectqsForm />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    profile: state.profile
  };
};

export default connect(
  mapStateToProps,
  { createProject }
)(Projectqs);
