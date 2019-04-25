//Profile Quick Start

import React from 'react';
import { connect } from 'react-redux';
import ProfileqsForm from './ProfileqsForm';

const Profileqs = props => {
  const fakedInitialData = {
    acclaimBadgeURL: '',
    desiredTitle: 'Super Duper Developer',
    gitHubURL: 'https://github.com',
    linkedInURL: 'https://linkedin.com',
    location: 'Ohio',
    name: 'Bartholemew',
    portfolioURL: '',
    summary: 'hello, this is about',
    twitterURL: ''
  };
  return (
    <div className="profileqs-container">
      <div className="profileqs">
        <h3>Profile Quick Start</h3>
        <p>Please complete the following basic information</p>
        <ProfileqsForm initialData={fakedInitialData} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state.profileqs
  };
};

export default connect(mapStateToProps)(Profileqs);
