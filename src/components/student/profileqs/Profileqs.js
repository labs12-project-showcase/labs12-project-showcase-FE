import React from 'react';
import { connect } from 'react-redux';

import avatar from '../../../assets/avatar.jpg';
import DeleteModal from '../profile/DeleteModal.js';
import EditImage from '../../EditImage/EditImage';
import {
  deleteProfilePicture,
  getProfileData,
  updateProfile,
  uploadProfilePicture
} from './profileqsActions';
import FormContainer from './form/FormContainer';

class Profileqs extends React.Component {
  componentDidMount() {
    if (
      // check for `name`, which is a required field and
      // therefore indicates if we have the User info
      !this.props.profile.profileData.name ||
      // check for `cohort_options`, which we need to show on this page
      !this.props.profile.profileData.cohort_options.length
    ) {
      // the `true` argument pulls `cohort` and `track` info
      this.props.getProfileData(true);
    }
  }

  render() {
    return (
      <div className="profileqs-container">
        <div className="profileqs">
          {this.props.profile.profileData.exists ? (
            <>
              <header>
                <h3>Edit Profile</h3>
                <DeleteModal />
              </header>
              <p>Make your changes below.</p>
              {this.props.profile.profileData.profile_pic &&
              this.props.profile.profileData.github ? null : (
                <p>
                  To use your GitHub profile picture, click the "Add URL"
                  button. Otherwise, upload another image or replace the URL
                  with your own.
                </p>
              )}
            </>
          ) : (
            <>
              <header>
                <h3>Profile Quick Start</h3>
                <DeleteModal />
              </header>
              <p>Use the fields below to build your profile.</p>
              {this.props.profile.profileData.github ? (
                <>
                  <p>
                    We have prepopulated some of the fields with information
                    from GitHub. That information will only be saved after you
                    submit the form.
                  </p>
                  {this.props.profile.profileData.profile_pic ? null : (
                    <p>
                      To use your GitHub profile picture, click the "Add URL"
                      button. Otherwise, upload another image or replace the URL
                      with your own.
                    </p>
                  )}
                </>
              ) : null}
            </>
          )}
          <div className="profile-picture">
            <span className="input-label">Profile Picture</span>
            <EditImage
              initialImageList={[this.props.profile.profileData.profile_pic]}
              maxFileCount={1}
              onImageUpload={this.props.uploadProfilePicture}
              onRemove={url => this.props.deleteProfilePicture(url)}
              onUrlAdd={url =>
                this.props.updateProfile({ profile_pic: url }, false)
              }
              placeholder={avatar}
              suggestedUrl={
                this.props.profile.profileData.github
                  ? `${this.props.profile.profileData.github}.png`
                  : ''
              }
              uploadButtonText="Upload file"
            />
          </div>
          <FormContainer initialFormValues={this.props.profile.profileData} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.profileqs,
    profile: state.profile
  };
};

export default connect(
  mapStateToProps,
  { deleteProfilePicture, getProfileData, updateProfile, uploadProfilePicture }
)(Profileqs);
