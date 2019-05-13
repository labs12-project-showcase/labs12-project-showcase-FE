import React from "react";

const ProjectPitches = ({ customer_pitch, tech_pitch }) => {
  if (!customer_pitch && !tech_pitch) {
    return null;
  }
  return (
    <React.Fragment>
      <div className="sales-pitch">
        <h2>Customer Sales Pitch</h2>
        <p>{customer_pitch || "Please add customer pitch"}</p>
      </div>
      <div className="sales-pitch">
        <h2>Technical Sales Pitch</h2>
        <p>{tech_pitch || "Please add tech pitch"}</p>
      </div>
    </React.Fragment>
  );
};

export default ProjectPitches;
