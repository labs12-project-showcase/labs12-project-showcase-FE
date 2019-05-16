import React from "react";
import { connect } from "react-redux";
import DeleteModal from "../profile/DeleteModal.js";
import EditImage from "../../EditImage/EditImage";
import {
  deleteProfilePicture,
  getProfileData,
  updateProfile,
  uploadProfilePicture
} from "./profileqsActions";
import avatar from "../../../assets/avatar.jpg";
import ProfileqsForm from "./ProfileqsForm";

class Profileqs extends React.Component {
  userExists = this.props.profile.profileData.exists || false;

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
          {this.userExists ? (
            <>
              <h3>Edit Profile</h3>
              <p>Make your changes below.</p>
            </>
          ) : (
            <>
              <h3>Profile Quick Start</h3>
              <p>Use the fields below to build your profile.</p>
              {this.props.profile.profileData.github ? (
                <>
                  <p>
                    We have prepopulated some of the fields with information
                    from GitHub. That information will only be saved after you
                    submit the form.
                  </p>
                </>
              ) : null}
            </>
          )}
          <div className="profile-picture">
            <DeleteModal />
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
                  : ""
              }
              uploadButtonText="Upload file"
            />
          </div>
          <ProfileqsForm initialFormValues={this.props.profile.profileData} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log('map state to props', state);
  return {
    ...state.profileqs,
    profile: state.profile
  };
};

export default connect(
  mapStateToProps,
  { deleteProfilePicture, getProfileData, updateProfile, uploadProfilePicture }
)(Profileqs);
