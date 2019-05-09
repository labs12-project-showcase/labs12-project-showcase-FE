import React from 'react';

const AboutMe = ({ about }) => {
	return (
		<div className="aboutMe">
			<hr className="hrTop" />
			<h2>About Me</h2>
			<p>{about}</p>
		</div>
	);
};

export default AboutMe;
