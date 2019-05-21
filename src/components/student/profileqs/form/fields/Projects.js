import React, { useEffect } from 'react';

import EditCards from '../../../projectcards/EditCards';

const Projects = ({
  initialProjects,
  initialTopProjects,
  projectsList,
  setProjectsList,
  topProjectsList,
  setTopProjectsList
}) => {
  useEffect(() => {
    setProjectsList(initialProjects);
    setTopProjectsList(initialTopProjects);
  }, [
    initialProjects,
    initialTopProjects,
    setProjectsList,
    setTopProjectsList
  ]);

  return (
    <>
      {projectsList && projectsList.length ? (
        <EditCards
          projects={projectsList}
          top_projects={topProjectsList}
          setProjects={setProjectsList}
          setTopProjects={setTopProjectsList}
        />
      ) : null}
    </>
  );
};

export default Projects;
