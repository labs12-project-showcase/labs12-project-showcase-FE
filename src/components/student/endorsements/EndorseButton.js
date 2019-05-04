import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import axiosAuth from "../../../auth/axiosAuth";

const EndorseButton = ({ profile_id, id }) => {
  const [hide, toggleHide] = useState(true);
  const [message, updateMessage] = useState("");
  const [alert, updateAlert] = useState("Say something nice..");

  const handleSubmit = () => {
    //Decided against actions/reducers because I don't think we need to track this in global state, unless we want to dispatch a new fetch profile maybe?
    if (message.length > 50) {
      axiosAuth()
        .post(
          `https://halg-backend.herokuapp.com/api/students/endorse/${profile_id}`,
          {
            message
          }
        )
        .then(res => {
          updateAlert("");
          toggleHide(true);
        })
        .catch(err => {
          updateAlert("Something went wrong...");
        });
    } else {
      updateAlert("Type more!");
    }
  };

  const closeForm = e => {
    toggleHide(true);
  };

  if (profile_id === id || !id) {
    return null;
  }
  return (
    <React.Fragment>
      <Link to="#" className="endorse-button" onClick={() => toggleHide(!hide)}>
        <i className="fas fa-edit" /> Endorse
      </Link>
      {!hide ? (
        <div className="modal-wrapper" onClick={closeForm}>
          <div className="endorse-modal" onClick={e => e.stopPropagation()}>
            <h2>{alert}</h2>
            <form className="endorse-form">
              <label htmlFor="endorsement" id="endorse-label">
                Endorsement
              </label>
              <textarea
                cols="30"
                rows="10"
                className="endorse-input"
                type="text"
                aria-labelledby="endorse-label"
                name="endorsement"
                value={message}
                onChange={e => updateMessage(e.target.value)}
              />
              <div className="endorse-form-buttons">
                <button type="button" onClick={handleSubmit}>
                  Submit
                </button>
                <button type="button" onClick={closeForm}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  id: state.profile.profileData.id
});

export default connect(mapStateToProps)(EndorseButton);
