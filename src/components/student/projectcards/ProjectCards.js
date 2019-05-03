<<<<<<< HEAD
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
=======
import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
>>>>>>> f8be7e038400ce8d3d30823facb470dd7ce52e9e

const ProjectCards = ({ top_projects, projects }) => {
	const [hide, toggleHide] = useState(true);

	top_projects = [
		{
			name: 'Brandons project',
			project_id: 1,
			type: 'React Application with cool stuff',
			media: [
				'https://morenowtech.com/wp-content/uploads/2019/05/tabless-thursday.jpg'
			]
		},
		{
			name: 'Brandons project',
			project_id: 2,
			type: 'React Application with cool stuff',
			media: ['https://morenowtech.com/wp-content/uploads/2019/05/fit-me.jpg']
		},
		{
			name: 'Brandons project',
			project_id: 3,
			type: 'React Application with cool stuff',
			media: ['https://morenowtech.com/wp-content/uploads/2019/05/tico.jpg']
		}
	];
	projects = [
		{
			name: 'Brandons project',
			project_id: 4,
			type: 'React Application with cool stuff',
			media: ['https://morenowtech.com/wp-content/uploads/2019/05/guidr.jpg']
		},
		{
			name: 'Brandons project',
			project_id: 5,
			type: 'React Application with cool stuff',
			media: [
				'https://morenowtech.com/wp-content/uploads/2015/01/soy-el-guia.jpg'
			]
		},
		{
			name: 'Brandons project',
			project_id: 6,
			type: 'React Application with cool stuff',
			media: ['https://morenowtech.com/wp-content/uploads/2015/01/Marvic.jpg']
		},
		{
			name: 'Brandons project',
			project_id: 7,
			type: 'React Application with cool stuff',
			media: [
				'https://morenowtech.com/wp-content/uploads/2015/01/thedroptv.jpg'
			]
		},
		{
			name: 'Brandons project',
			project_id: 8,
			type: 'React Application with cool stuff',
			media: [
				'https://morenowtech.com/wp-content/uploads/2015/01/TheAptusGroup.jpg'
			]
		},
		{
			name: 'Brandons project',
			project_id: 9,
			type: 'React Application with cool stuff',
			media: [
				'https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg?width=700&crop=2:1'
			]
		}
	];

  const map = arr =>
    arr.map(proj => (
      <Link
        key={proj.project_id}
        className="project-card"
        to={`/student/project-view/${proj.project_id}`}
      >
        <img src={proj.media[0]} alt="Project media" />
        <h3>{proj.name}</h3>
        <p>{proj.type}</p>
      </Link>
    ));
  return (
    <div className="projects-wrapper">
      <h2>Projects</h2>
      <div className="projects-inner-wrapper">
        {map(top_projects)}
        <Fade collapse when={!hide}>
          <div>{map(projects)}</div>
        </Fade>
      </div>
      <div className="projects-buttons-container">
        <button type="button" onClick={() => toggleHide(!hide)}>
          {hide ? "Show More" : "Show Less"}
        </button>
      </div>
    </div>
  );
};

export default ProjectCards;
