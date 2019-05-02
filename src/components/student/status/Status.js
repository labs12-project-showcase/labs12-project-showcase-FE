import React from "react";

const Status = ({ cohort, desired_locations, desired_position }) => {

  return (
    <div className="status-container">
      <h2>Status</h2>
      <section className="status-section">
        <p>Graduate of:</p>
        <p>{cohort}</p>
      </section>
      <section className="status-section">
        <p>Looking for Work in:</p>
        <ul>
          {desired_locations.map(loc => (
            <li key={loc}>{loc}</li>
          ))}
        </ul>
      </section>
      <section className="status-section">
        <p>Looking for:</p>
        <p>{desired_position}</p>
      </section>
    </div>
  );
};

export default Status;
