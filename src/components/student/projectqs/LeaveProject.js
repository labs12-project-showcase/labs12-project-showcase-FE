import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";

import axiosAuth from "../../../auth/axiosAuth";
import { getProject } from "./projectqsActions";

const LeaveProject = ({
  dispatch,
  students,
  history,
  student_id,
  project_id
}) => {
  const [modal, setModal] = useState(false);

  const leave = () => {
    if (checkMembers) {
      openModal();
    } else {
      dispatchLeave()
        .then(() => {
          dispatch(getProject(project_id));
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  const cancelLeave = () => {
    closeModal();
  };

  const confirmLeave = () => {
    dispatchLeave()
      .then(() => {
        history.push(`/student/profile/${student_id}`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const dispatchLeave = () => {
    return axiosAuth().put(
      `https://halg-backend.herokuapp.com/api/projects/leave`,
      {
        student_id,
        project_id
      }
    );
  };

  const checkMembers = () => {
    if (students.length === 1) {
      return true;
    } else {
      return false;
    }
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };
  return (
    <React.Fragment>
      <Link to="#" onClick={leave}>
        <i className="fas fa-arrow-left" />
        Leave Project
      </Link>
      {modal ? (
        <div className="modal-wrapper">
          <div className="error-modal">
            <h2>Alert</h2>
            <p>
              You are the last member on this project. If you leave, the project
              will be deleted. This cannot be reversed. Are you sure?
            </p>
            <div className="modal-buttons">
              <button
                type="button"
                className="modal-button"
                onClick={confirmLeave}
              >
                I'm Sure
              </button>
              <button
                type="button"
                className="modal-button"
                onClick={cancelLeave}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  students: state.project.projectData.students,
  student_id: state.profile.profileData.id
});

export default withRouter(connect(mapStateToProps)(LeaveProject));
