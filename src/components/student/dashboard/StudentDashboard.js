import React from 'react';
import { connect } from 'react-redux';

const StudentDashboard = props => {
  return (
    <div className="studentDashboard">
    
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state.studentDashboard
  };
};

export default connect(mapStateToProps)(StudentDashboard);