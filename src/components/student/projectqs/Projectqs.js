// Project Quick Start

import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Projectqs = props => {
	return (
		<div className="projectqs">
			<div className="subNav">
				<nav>
					<NavLink exact to="#">
						Edit Profile
					</NavLink>
				</nav>
			</div>
			<main>
				<h2>Please Delete this when you are going to start</h2>
				<NavLink to="/student/project-edit">
					<button>Submit New Project</button>
				</NavLink>
			</main>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		...state.projectqs
	};
};

export default connect(mapStateToProps)(Projectqs);
