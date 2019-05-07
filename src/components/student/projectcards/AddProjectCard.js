import React from "react";
import { Link } from "react-router-dom";

const AddProjectCard = props => {
  return (
    <Link to="/student/new-project" className="project-card add-project-card">
      <h2>Whoops...</h2>
      <p>It looks like you don't have any projects currently.</p>
      <p>Please click on this card to add your first one!</p>
    </Link>
  );
};

export default AddProjectCard;
