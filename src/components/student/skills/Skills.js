import React from "react";

const Skills = ({ top_skills, skills }) => {
  top_skills = ["React", "Redux", "Node.js"];
  skills = [
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
    arr.map(skill => (
      <span key={skill} className="skill-chip">
        {skill}
      </span>
    ));

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <section className="top-skills">
        <h3>Top Three:</h3>
        <ul>{map(top_skills)}</ul>
      </section>
      <section className="skills">
        <h3>Additional:</h3>
        <ul>{map(skills)}</ul>
      </section>
    </div>
  );
};

export default Skills;
