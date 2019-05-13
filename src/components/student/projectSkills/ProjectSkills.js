import React from "react";

const ProjectSkills = ({ projectSkills }) => {
  const map = arr =>
    arr.map(projectSkill => (
      <span key={projectSkill} className="projectSkill-chip">
        {projectSkill}
      </span>
    ));

  return (
    <div className="status-skills">
      <div className="projectSkills-container">
        <section className="projectSkills">
          <ul>
            {projectSkills && projectSkills.length ? (
              map(projectSkills)
            ) : (
              <p>Please add some technologies!</p>
            )}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ProjectSkills;
