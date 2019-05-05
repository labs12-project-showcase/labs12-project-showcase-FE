import React from "react";

const Status = ({ cohort, desired_locations, desired_title }) => {
  desired_locations = ["Houston, TX", "San Diego, CA", "Charlotte, NC"];

  return (
    <div className="status-container">
      <h2>Status</h2>
      <section className="status-section">
        <div>
          <p>Graduate of:</p>
        </div>
        <div>
          <p>{cohort}</p>
        </div>
      </section>
      <section className="status-section">
        <div>
          <p>Looking for Work in:</p>
        </div>
        <ul>
          {desired_locations.map(loc => (
            <li key={loc}>{loc}</li>
          ))}
        </ul>
      </section>
      <section className="status-section">
        <div>
          <p>Looking for:</p>
        </div>
        <div>
          <p>{desired_title}</p>
        </div>
      </section>
    </div>
  );
};

export default Status;
