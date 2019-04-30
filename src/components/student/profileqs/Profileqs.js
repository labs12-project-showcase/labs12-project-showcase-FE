//Profile Quick Start

import React from 'react';
import { connect } from 'react-redux';
import ProfileqsForm from './ProfileqsForm';
import { getProfileData } from './profileqsActions';

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
          {/* @TODO: Make the `document.title` and <h3> dynamic */}
          <h3>Profile Quick Start</h3>
          <p>Please complete the following basic information</p>
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
  { getProfileData }
)(Profileqs);
