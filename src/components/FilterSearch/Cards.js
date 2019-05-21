import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ cards }) => {
	const map = arr => arr.map(skill => <li key={skill}>{skill}</li>);

	return (
		<>
			<Link to={`/student/profile/${cards.id}`}>
				<div className="cards">
					<div className="profile-pic">
						<img src={cards.profile_pic} alt="Profile" />
					</div>
					<div className="details">
						<h2>{cards.name}</h2>

						<h3>
							{cards.track}
							<br />
							{cards.location}
						</h3>

						<h4>Skills:</h4>
						<ul>{map(cards.top_skills)}</ul>
					</div>
					<div className="projects-box">
						<h2>Top projects</h2>
						{cards.top_projects.map(proj => (
							<Link
								key={proj.project_id}
								to={`/student/project-view/${proj.project_id}`}
								className="display-box"
							>
								<div className="proj-box-container">
									<img src={proj.media} alt="Project" />
									<h3>{proj.name}</h3>
								</div>
							</Link>
						))}
					</div>
				</div>
			</Link>
		</>
	);
};

export default Cards;
