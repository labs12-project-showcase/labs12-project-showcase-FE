import React from "react";
import { connect } from "react-redux";
import ProjectqsForm from "./ProjectqsForm";
import {
  createProject,
  uploadProjectPicture,
  updateProject
} from "./projectqsActions";

import EditImage from "../../EditImage/EditImage";
import avatar from "../../../assets/avatar.jpg";

const Projectqs = ({ dispatch, ...props }) => {
  if (props.project.project_media) {
    console.log(props.project.project_media);
  }
  return (
    <div className="projectqs-container">
      <div className="projectqs">
        <h3>Project Quick Start</h3>
        <p>Please submit the following details about your project </p>
        <div className="project-pictures">
          <span className="input-label">Project Pictures</span>
          <EditImage
            initialImageList={
              props.project.project_media ? null : [props.project.project_media]
            }
            maxFileCount={3}
            onImageUpload={() => dispatch(uploadProjectPicture)}
            onUrlAdd={url =>
              dispatch(updateProject({ profile_pic: url }, false))
            }
            placeholder={avatar}
            uploadButtonText="Upload file"
          />
        </div>
        <ProjectqsForm />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    profile: state.profile,
    project: state.project.projectData
  };
};

export default connect(
  mapStateToProps,
  { createProject }
)(Projectqs);
