import React from 'react';
import { Link } from "react-router-dom";

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
				{/* <img src={profile_pic} alt="Profile Picture" /> */}
				<div className="profile-pic">
					<img src={profile_pic} alt="Profile" />
				</div>
				<div className="details">
					<h2>{name}</h2>
					<h3>
						{desired_title}
						<br />
						{track}
					</h3>

					<p>
						Skills:
						<br /> {top_skills}{' '}
					</p>
					<Link to={`/student/profile/${id}`}>
					<button className="prof-link">Profile &amp; Projects</button>
					</Link>
					<br />
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
		</>
	);
}
