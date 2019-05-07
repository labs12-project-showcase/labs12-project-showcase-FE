import React from "react";

const ProjectSkills = ({ projectSkills }) => {
  const map = arr => {
    arr.map(projectSkill => (
      <span key={projectSkill} className="projectSkill-chip">
        {projectSkill}
      </span>
    ));
  };

  return (
    <div className="projectSkills-container">
      <section className="projectSkills">
        <ul>
          {projectSkills.length ? (
            map(projectSkills)
          ) : (
            <p>Please add some technologies!</p>
          )}
        </ul>
      </section>
    </div>
  );
};

export default ProjectSkills;
