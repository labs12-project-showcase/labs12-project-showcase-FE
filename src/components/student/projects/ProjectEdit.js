import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';

const ProjectEdit = props => {
	// change /watch/ by /embed/ Questions PM "Julian"
	//  const url = {project_video}
	const url = 'https://www.youtube.com/watch?v=TcMBFSGVi1c&t=2s';
	const videoid = url.match(
		/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
	);
	if (videoid != null) {
		console.log('video id = ', videoid[1]);
	} else {
		console.log('The youtube url is not valid.');
	}

	return (
		<div className="project-edit">
			<div className="subNav">
				<nav>
					<NavLink exact to="/student/new-project">
						Add New Project
					</NavLink>
					<NavLink exact to="#">
						Edit Profile
					</NavLink>
				</nav>
			</div>
			<iframe
				width="420"
				height="315"
				src={`https://www.youtube.com/embed/${
					videoid[1]
				}?autoplay=0&showinfo=0&controls=0`}
				frameborder="0"
				allowfullscreen
			/>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		...state.project
	};
};

export default connect(mapStateToProps)(ProjectEdit);
