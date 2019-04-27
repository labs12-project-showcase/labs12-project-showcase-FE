//Profile Quick Start

import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import ProfileqsForm from "./ProfileqsForm";

const Profileqs = props => {
  return (
    <div className="profileqs-container">
      <div className="profileqs">
        <h3>Profile Quick Start</h3>
        <p>Please complete the following basic information</p>
        <ProfileqsForm />
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
