import React from 'react';
import { Link } from 'react-router-dom';
import one from '../../assets/one.jpg';
import two from '../../assets/two.jpg';
import three from '../../assets/three.jpg';

export default function Cards(props) {
	const {
		id,
		name,
		track,
		top_skills,
		linkedin,
		twitter,
		github,
		desired_title,
		profile_pic
	} = props.cards;

	return (
		<>
			<div className="cards">
				<div className="profile-pic">
					<img src={profile_pic} alt="Profile" />
				</div>
				<div className="details">
					<h2>{name}</h2>
					<h3>
						Full-Stack Web Development &amp; Computer Science
						{desired_title}
						<br />
						{track}
					</h3>
					<p>Skills:</p>
					<br /> {top_skills}
					<ul>
						<li>React</li>
						<li>Redux</li>
						<li>Node Js</li>
					</ul>
					<br />
					<br />
					<div className="contact-links">
						<a href={github} target="_blank" rel="noopener noreferrer">
							<i className="fab fa-github" />
						</a>
						<a href={linkedin} target="_blank" rel="noopener noreferrer">
							<i className="fab fa-linkedin-in" />
						</a>
						<a href={twitter} target="_blank" rel="noopener noreferrer">
							<i className="fab fa-twitter" />
						</a>
					</div>
				</div>
				<div className="projects-box">
					<h2>My top 3 projects</h2>
					<div className="display-box">
						<img src={one} alt="Project display" />
						<h3>Project Title</h3>
					</div>
					<div className="display-box">
						<img src={two} alt="Project display" />
						<h3>Project Title</h3>
					</div>
					<div className="display-box">
						<img src={three} alt="Project display" />
						<h3>Project Title</h3>
					</div>
					<Link to={`/student/profile/${id}`}>
						<button className="prof-link">Profile &amp; Projects</button>
					</Link>
				</div>
			</div>
		</>
	);
}
