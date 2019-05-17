import React from "react";
import { connect } from "react-redux";
import ProjectqsForm from "./ProjectqsForm";
import {
  uploadProjectPicture,
  updateProject,
  deleteProjectPicture
} from "./projectqsActions";

import EditImage from "../../EditImage/EditImage";
import projectPlaceholder from "../../../assets/projectplaceholder.jpg";

const Projectqs = props => {
  return (
    <div className="projectqs-container">
      <div className="projectqs">
        <h3>Project Quick Start</h3>
        <p>Please submit the following details about your project </p>
        {props.project.id ? (
          <div className="project-pictures">
            <span className="input-label">Project Pictures</span>
            <EditImage
              initialImageList={
                props.project.project_media
                  ? props.project.project_media.slice(0, 3)
                  : []
              }
              maxFileCount={3}
              onImageUpload={(file, setImageList) =>
                props.uploadProjectPicture(file, setImageList, props.project.id)
              }
              onRemove={url =>
                props
                  .deleteProjectPicture(url, props.project.id)
                  .catch(err => console.log(err))
              }
              onUrlAdd={url => props.updateProject({ profile_pic: url }, false)}
              placeholder={projectPlaceholder}
              uploadButtonText="Upload file"
            />
          </div>
        ) : null}
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
  { uploadProjectPicture, updateProject, deleteProjectPicture }
)(Projectqs);
