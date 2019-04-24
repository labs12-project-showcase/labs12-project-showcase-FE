import React from 'react';
import { connect } from 'react-redux';

const Register = props => {
  return (
    <div className="register">
    
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state.register
  };
};

export default connect(mapStateToProps)(Register);