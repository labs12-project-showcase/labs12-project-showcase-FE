import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ cards }) => {
	const map = arr => arr.map(skill => <li key={skill}>{skill}</li>);
	return (
		<>
			<div className="cards">
				<div className="profile-pic">
					<Link to={`/student/profile/${cards.id}`}>
						<img src={cards.profile_pic} alt="Profile" />
					</Link>
				</div>
				<div className="details">
					<h2>{cards.name}</h2>
					<h3>{cards.track}</h3>

					<br />

					<h4>Skills:</h4>
					<ul>{map(cards.top_skills)}</ul>
					<div className="contact-links">
						<a href={cards.github} target="_blank" rel="noopener noreferrer">
							<i className="fab fa-github" />
						</a>
						<a href={cards.linkedin} target="_blank" rel="noopener noreferrer">
							<i className="fab fa-linkedin-in" />
						</a>
						<a href={cards.twitter} target="_blank" rel="noopener noreferrer">
							<i className="fab fa-twitter" />
						</a>
						<Link to={`/student/profile/${cards.id}`}>
							<button className="prof-link">Profile &amp; Projects</button>
						</Link>
					</div>
				</div>
				<div className="projects-box">
					<h2>My top 3 projects</h2>
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
		</>
	);
};

export default Cards;
