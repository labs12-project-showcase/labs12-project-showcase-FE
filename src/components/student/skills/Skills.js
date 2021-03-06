import React from 'react';

const Skills = ({ top_skills, skills }) => {
	const map = arr =>
		arr.map(skill => (
			<span key={skill} className="skill-chip">
				{skill}
			</span>
		));

	return (
		<div className="skills-container">
			<hr className="hrTop" />
			<h2>Skills</h2>
			<section className="top-skills">
				<h3>Top Skills:</h3>
				<ul>{map(top_skills)}</ul>
			</section>
			<section className="skills">
				<h3>All Skills:</h3>
				<ul>{map(skills)}</ul>
			</section>
		</div>
	);
};

export default Skills;
