import React from "react";

const Status = ({ cohort, desired_locations, desired_position }) => {
  //TEST DATA
  cohort = "Full Stack Web17";
  desired_locations = ["Houston, Tx", "San Diego, Ca", "NYC, NY"];
  desired_position = "Software Engineer";

  return (
    <div className="status">
      <h1>Status</h1>
      <div className="status-section">
        <p>Graduate of:</p>
        <p>{cohort}</p>
      </div>
      <div className="status-section">
        <p>Looking for Work in:</p>
        <ul>
          {desired_locations.map(loc => (
            <li>{loc}</li>
          ))}
        </ul>
      </div>
      <div className="status-section">
        <p>Looking for:</p>
        <p>{desired_position}</p>
      </div>
    </div>
  );
};

export default Status;
