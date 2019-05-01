import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Progress as ProgressCircle } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import { red } from "ansi-colors";

const Progress = ({ profileData }) => {
  const [percentage, updatePercent] = useState(0);
  const [full, updateFull] = useState([]);
  const [empty, updateEmpty] = useState([]);
  //Fake some profile data here
  useEffect(() => {
    //Should be props.profileData later
    checkFields(data);
  }, []);

  const checkFields = data => {
    //Check length
    const total = Object.keys(data).length;
    let actual = total;
    //Split full and empty to separate arrays
    let full = [];
    let empty = [];

    //Check truthy for every key in object
    for (let i in data) {
      if (!data[i]) {
        actual--;
        const field = i.charAt(0).toUpperCase() + i.slice(1);
        empty.push(field);
      } else {
        const field = i.charAt(0).toUpperCase() + i.slice(1);
        full.push(field);
      }
    }

    //Calculate percent and update all pieces of state
    const percent = Math.floor((actual / total) * 100);
    updatePercent(percent);
    updateEmpty(empty);
    updateFull(full);
  };

  const renderChecked = arr =>
    arr.map(key => (
      <div className="checkbox-wrapper" key={key}>
        <input type="checkbox" checked disabled className="checkbox" /> {key}
      </div>
    ));

  const renderEmpty = arr =>
    arr.map(key => (
      <div className="checkbox-wrapper" key={key}>
        <input type="checkbox" disabled className="checkbox" /> {key}
      </div>
    ));

  return (
    <div className="progress-container">
      <ProgressCircle
        type="circle"
        percent={percentage}
        status="default"
        theme={{
          default: {
            color: "#1e50ee",
            trailColor: "#bb1333"
          }
        }}
        strokeWidth={9}
      />
      <h2>Incomplete:</h2>
      {renderEmpty(empty)}
      <h2>Complete:</h2>
      {renderChecked(full)}
    </div>
  );
};

const mapStateToProps = state => ({
  profile: state.profile.profileData
});

export default connect(mapStateToProps)(Progress);

const data = {
  github: "git",
  twitter: null,
  acclaim: null,
  about: "hey there",
  skills: ["1", "2", "3"],
  top_skills: null,
  top_projects: ["1", "2", "3"],
  location: "texas",
  website: null,
  linkedin: null,
  desired_position: null,
  hobbies: [],
  profile_pic: "testing"
};
