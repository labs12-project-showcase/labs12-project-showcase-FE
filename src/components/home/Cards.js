import React from 'react';
import { Link } from 'react-router-dom';

export default function Cards(props) {
	const { id, name, track, top_skills } = props.cards;

	return (
		<>
			<div>
				{/* <img src={profile_pic} alt="Profile Pictuare" /> */}

				<h1>{name}</h1>
				<p>{track}</p>
				<hr />
				<p>Skills: {top_skills} </p>
				<Link to={`/cards/${id}`} className="btn-card">
					Learn More ..
				</Link>
			</div>
		</>
	);
}
