import React from 'react';
import { connect } from 'react-redux';

const AdminDashboard = props => {
  return (
    <div className="adminDashboard">
    
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state.adminDashboard
  };
};

export default connect(mapStateToProps)(AdminDashboard);