import React, { Component } from 'react';
import history from '../history.js';
import { connect } from 'react-redux';
import { login, logout } from '../auth/authActions.js';
import { NavLink } from 'react-router-dom';
import { validateJwt } from '../config/utilities.js';
import loginIcon from '../assets/login.png';
import logoutIcon from '../assets/logout.png';

import whiteLambdaLogo from '../assets/Hire-lambda-logo-white.png';

class TopBar extends Component {
	state = {
		id: 1,
		isLoggedIn: false
	}

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
		const { login, logout } = this.props;
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
						{!this.state.isLoggedIn && (
							<button className="TopBar-login-btn" onClick={login}>
								<img src={loginIcon} alt="Logout icon" />
							</button>
						)}
						{this.state.isLoggedIn && (
							<button className="TopBar-logout-btn" onClick={logout}>
								<img src={logoutIcon} alt="Logout icon" />
							</button>
						)}
					</div>
				</div>
				{this.state.isLoggedIn && (
					<div className="subNav">
						<nav>
							<NavLink exact to={`/student/dashboard/${this.state.id}`}>

							</NavLink>
							<NavLink exact to="/student/new-project">
								Add New Project
							</NavLink>
							<NavLink exact to="#">
								Edit Profile
							</NavLink>
						</nav>
					</div>
				)}
			</div>
		);
	}
};

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps, { login, logout })(TopBar);
