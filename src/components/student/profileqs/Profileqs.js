//Profile Quick Start

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ProfileqsForm from './ProfileqsForm';
import { getProfileData } from './profileqsActions';

const Profileqs = props => {
  useEffect(() => {
    props.getProfileData();
  }, []);

  return (
    <div className="profileqs-container">
      <div className="profileqs">
        {/* @TODO: Make the `document.title` and <h3> dynamic */}
        <h3>Profile Quick Start</h3>
        <p>Please complete the following basic information</p>
        <ProfileqsForm initialFormValues={props.profile.profileData} />
      </div>
    </div>
  );
};

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
