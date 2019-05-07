import React, { Component } from 'react';
import history from '../history.js';
import { connect } from 'react-redux';
import { login, logout, adminLogin } from '../auth/authActions.js';
import { NavLink } from 'react-router-dom';
import { validateJwt, getJwtRole } from '../config/utilities.js';

import whiteLambdaLogo from '../assets/Hire-lambda-logo-white.png';

class TopBar extends Component {
	state = {
		isLoggedIn: false
	};

	componentWillMount() {
		this.unlisten = history.listen((location, action) => {
			console.log('history from top bar', location, action);
			const update = validateJwt();
			this.setState({ isLoggedIn: update });
		});
	}

	componentWillUnmount() {
		this.unlisten();
	}

	render() {
		const renderLoggedIn = validateJwt();
		const loggedInRole = getJwtRole();
		const { login, logout, adminLogin } = this.props;
		return (
			<div className="TopBar">
				<div className="TopBar-container">
					<NavLink exact to="/">
						<img
							className="TopBar-hire-lambda-logo"
							src={whiteLambdaLogo}
							alt="white lambda logo"
						/>
					</NavLink>

					<div className="TopBar-btn-container">
						{!(this.state.isLoggedIn || renderLoggedIn) && (
							<>
								<button className="TopBar-login-btn" onClick={login}>
									<i className="fas fa-user" />
								</button>
								<button className="" onClick={adminLogin}>Admin Login</button>
							</>
						)}
						{(this.state.isLoggedIn || renderLoggedIn) && (
							<button className="TopBar-logout-btn" onClick={logout}>
								<i className="fas fa-sign-out-alt" />
							</button>
						)}
					</div>
				</div>
				{(this.state.isLoggedIn || renderLoggedIn) && loggedInRole === 'student' && (
					<div className="subNav">
						<nav>
							<NavLink exact to={`/student/profile/${this.props.id}`}>
								<i className="far fa-id-card" /> Your Profile
							</NavLink>
							<NavLink exact to="/student/new-project">
								<i className="fas fa-plus" /> Add New Project
							</NavLink>
							<NavLink exact to="/profile-quick-start">
								<i className="fas fa-user-edit" /> Edit Profile
							</NavLink>
						</nav>
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { id: state.profile.profileData.id };
};

export default connect(
	mapStateToProps,
	{ login, logout, adminLogin }
)(TopBar);
