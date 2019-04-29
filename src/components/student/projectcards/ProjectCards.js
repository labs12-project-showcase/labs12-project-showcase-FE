import React, { useState } from "react";
import Fade from "react-reveal/Fade";

const ProjectCards = ({ top_projects, projects }) => {
  const [hide, toggleHide] = useState(true);

  top_projects = [
    {
      name: "Brandons project",
      project_id: 1,
      type: "React Application with cool stuff",
      media: [
        "https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg?width=700&crop=2:1"
      ]
    },
    {
      name: "Brandons project",
      project_id: 2,
      type: "React Application with cool stuff",
      media: [
        "https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg?width=700&crop=2:1"
      ]
    },
    {
      name: "Brandons project",
      project_id: 3,
      type: "React Application with cool stuff",
      media: [
        "https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg?width=700&crop=2:1"
      ]
    }
  ];
  projects = [
    {
      name: "Brandons project",
      project_id: 4,
      type: "React Application with cool stuff",
      media: [
        "https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg?width=700&crop=2:1"
      ]
    },
    {
      name: "Brandons project",
      project_id: 5,
      type: "React Application with cool stuff",
      media: [
        "https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg?width=700&crop=2:1"
      ]
    },
    {
      name: "Brandons project",
      project_id: 6,
      type: "React Application with cool stuff",
      media: [
        "https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg?width=700&crop=2:1"
      ]
    },
    {
      name: "Brandons project",
      project_id: 7,
      type: "React Application with cool stuff",
      media: [
        "https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg?width=700&crop=2:1"
      ]
    },
    {
      name: "Brandons project",
      project_id: 8,
      type: "React Application with cool stuff",
      media: [
        "https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg?width=700&crop=2:1"
      ]
    },
    {
      name: "Brandons project",
      project_id: 9,
      type: "React Application with cool stuff",
      media: [
        "https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg?width=700&crop=2:1"
      ]
    }
  ];

  const map = arr =>
    arr.map(proj => (
      <a
        key={proj.project_id}
        className="project-card"
        href={`/student/project-view/${proj.project_id}`}
      >
        <img src={proj.media[0]} alt="Project media" />
        <h3>{proj.name}</h3>
        <p>{proj.type}</p>
      </a>
    ));
  return (
    <div className="projects-wrapper">
      <h2>Projects</h2>
      <div className="projects-inner-wrapper">
        {map(top_projects)}
        <Fade collapse when={!hide}>
          {map(projects)}
        </Fade>
      </div>
      <button type="button" onClick={() => toggleHide(!hide)}>
        {hide ? "Show More" : "Show Less"}
      </button>
    </div>
  );
};

export default ProjectCards;
