import React, { useState } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

import AddProjectCard from "./AddProjectCard";

const ProjectCards = ({ top_projects, projects }) => {
  const [hide, toggleHide] = useState(true);

  const map = arr =>
    arr.map(proj => (
      <Link
        key={proj.id}
        className="project-card"
        to={`/student/project-view/${proj.id}`}
      >
        <img
          src={"https://morenowtech.com/wp-content/uploads/2015/01/Marvic.jpg"}
          alt="Project media"
        />
        <h3>{proj.name}</h3>
        <p>{proj.type}</p>
      </Link>
    ));
  return (
    <div className="projects-wrapper">
      <h2>
        <i className="fas fa-project-diagram" /> Projects
      </h2>
      <div className="projects-inner-wrapper">
        {top_projects.length ? map(top_projects) : <AddProjectCard />}
        {projects.length ? (
          <Fade bottom collapse when={!hide}>
            <div style={hide ? { display: "none" } : { display: "flex" }}>
              {map(projects)}
            </div>
          </Fade>
        ) : null}
      </div>
      {projects.length ? (
        <div className="projects-buttons-container">
          <button type="button" onClick={() => toggleHide(!hide)}>
            {hide ? "Show More" : "Show Less "}
            <i className={hide ? "fas fa-chevron-down" : "fas fa-chevron-up"} />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ProjectCards;

//'https://morenowtech.com/wp-content/uploads/2015/01/Marvic.jpg'
