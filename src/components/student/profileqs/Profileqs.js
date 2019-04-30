//Profile Quick Start

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ProfileqsForm from './ProfileqsForm';
import { getProfileData } from './profileqsActions';

const Profileqs = props => {
  useEffect(() => {
    props.getProfileData();
  }, []);

  // const [initialData, setInitialData] = useState(
	// 	props.profile.data
	// // 	{
  // //   about: props.profile.profileData.about || '',
  // //   acclaim: props.profile.profileData.acclaim || '',
  // //   desired_locations: props.profile.profileData.desired_locations || [],
  // //   desired_title: props.profile.profileData.desired_title || '',
  // //   github: props.profile.profileData.github || '',
  // //   hobbies: props.profile.profileData.hobbies || [],
  // //   linkedin: props.profile.profileData.linkedin || '',
  // //   location: props.profile.profileData.location || '',
  // //   name: props.profile.profileData.name || '',
  // //   profile_pic: props.profile.profileData.profile_pic || '',
  // //   skills: props.profile.profileData.skills || [],
  // //   twitter: props.profile.profileData.twitter || '',
  // //   website: props.profile.profileData.website || ''
	// // }
	// );

  return (
    <div className="profileqs-container">
      <div className="profileqs">
        {/* @TODO: Make the `document.title` and <h3> dynamic */}
        <h3>Profile Quick Start</h3>
        <p>Please complete the following basic information</p>
        <ProfileqsForm initialFormValues={props.profile.data} />
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
