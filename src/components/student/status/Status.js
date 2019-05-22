import React from "react";

const Status = ({ cohort, desired_locations, desired_title }) => {
  return (
    <div className="status-container">
      <hr className="hrTop" />
      <h2>Status</h2>
      <section className="status-section">
        <div>
          <p>Lambda School Cohort:</p>
        </div>
        <div>
          <p>{cohort}</p>
        </div>
      </section>
      <section className="status-section">
        <div>
          <p>Willing to Move to:</p>
        </div>
        <ul>
          {desired_locations.map(obj => (
            <li key={obj.location}>
              {obj.location
                .split(",")
                .slice(0, 2)
                .join(`, `)}
            </li>
          ))}
        </ul>
      </section>
      <section className="status-section">
        <div>
          <p>Looking for:</p>
        </div>
        <div>
          <p className="colorGray">{desired_title}</p>
        </div>
      </section>
    </div>
  );
};

export default Status;
