import React from 'react';
import { Link } from 'react-router-dom';
import { getJwtRole } from '../../config/utilities.js';

import avatar from '../../assets/avatar.jpg';
import projectImg from '../../assets/projectplaceholder.jpg';
import highlighted from '../../assets/highlighted.png';

const Cards = ({ cards }) => {
	const map = arr => arr.map(skill => <li key={skill}>{skill}</li>);
	const role = getJwtRole();
	const toFilter = new Set(cards.top_skills);
	const skills = cards.skills.filter(skill => !toFilter.has(skill));
	return (
		<>
			<div className="cards">
				<Link to={`/student/profile/${cards.id}`}>
					<div className="cards-description">
						<div className="profile-pic-container">
							<div className="profile-pic">
								<img src={cards.profile_pic || avatar} alt="Profile" />
								{cards.highlighted && role === 'staff' && (
									<img
										src={highlighted}
										className="highlighted"
										alt="highlighted"
									/>
								)}
							</div>
						</div>
						<div className="details">
							<h2>{cards.name}</h2>

							<h3>{cards.desired_title}</h3>
							<h3> {cards.location}</h3>
						</div>
						<div className="details-skills">
							<h4>Skills</h4>
							<ul className="topSkills">{map(cards.top_skills)}</ul>
							<ul className="moreSkills">{map(skills)}</ul>
						</div>
					</div>
				</Link>

				<div className="projects-box">
					<h2>Top projects</h2>
					{cards.top_projects.map(proj => (
						<Link
							key={proj.project_id}
							to={`/student/project-view/${proj.project_id}`}
							className="display-box"
						>
							<div className="proj-box-container">
								<img src={proj.media || projectImg} alt="Project" />
								<h3>{proj.name}</h3>
							</div>
						</Link>
					))}
				</div>
			</div>
		</>
	);
};

export default Cards;
