//Profile Quick Start

import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import ProfileqsForm from "./ProfileqsForm";

const Profileqs = props => {
  const [data, updateData] = useState({});

  useEffect(() => {
    const headers = {
      authorization: localStorage.getItem("backendToken")
    };
    axios
      .get("https://halg-backend.herokuapp.com/api/auth/login/initial", {
        headers
      })
      .then(({ data }) => {
        console.log(data);
        updateData(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const fakedInitialData = {
    acclaimBadgeURL: "",
    desiredTitle: "Super Duper Developer",
    gitHubURL: "https://github.com",
    linkedInURL: "https://linkedin.com",
    location: "Ohio",
    name: "Bartholemew",
    portfolioURL: "",
    summary: "hello, this is about",
    twitterURL: ""
  };
  return (
    <div className="profileqs-container">
      <div className="profileqs">
        <h3>Profile Quick Start</h3>
        <p>Please complete the following basic information</p>
        <ProfileqsForm initialData={data} />
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
