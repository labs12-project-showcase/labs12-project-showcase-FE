import React from "react";

const ProjectSkills = ({ top_projectSkills, projectSkills }) => {
  top_projectSkills = ["React", "Redux", "Node.js"];
  projectSkills = [
    "MongoDB",
    "SQL",
    "OOP",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Python",
    "C++",
    "SASS",
    "LESS"
  ];
  const map = arr =>
    arr.map(projectSkill => (
      <span key={projectSkill} className="projectSkill-chip">
        {projectSkill}
      </span>
    ));

  return (
    <div className="projectSkills-container">
      <section className="projectSkills">
        <ul>{map(projectSkills)}</ul>
      </section>
    </div>
  );
};

export default ProjectSkills;
