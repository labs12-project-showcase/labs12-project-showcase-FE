import React from 'react';

const Skills = ({ top_skills, skills }) => {
	// top_skills = ["React", "Redux", "Node.js"];
	// skills = [
	//   "MongoDB",
	//   "SQL",
	//   "OOP",
	//   "HTML5",
	//   "CSS3",
	//   "JavaScript",
	//   "Python",
	//   "C++",
	//   "SASS",
	//   "LESS"
	// ];

	return (
		<div className="skills-container">
			<h2>Skills</h2>
			<section className="top-skills">
				<h3>Top Three:</h3>
				<ul>{top_skills}</ul>
			</section>
			<section className="skills">
				<h3>Additional:</h3>
				<ul>{skills}</ul>
			</section>
		</div>
	);
};

export default Skills;
