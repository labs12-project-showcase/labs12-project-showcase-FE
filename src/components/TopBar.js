import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../auth/authActions.js';
import { NavLink } from 'react-router-dom';
import { validateJwt } from '../config/utilities.js';
import loginIcon from '../assets/login.png';
import logoutIcon from '../assets/logout.png';

import whiteLambdaLogo from '../assets/Hire-lambda-logo-white.png';

class TopBar extends Component {
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
						{!validateJwt() && (
							<button className="TopBar-login-btn" onClick={login}>
								<img src={loginIcon} alt="Logout icon" />
							</button>
						)}
						{validateJwt() && (
							<button className="TopBar-logout-btn" onClick={logout}>
								<img src={logoutIcon} alt="Logout icon" />
							</button>
						)}
					</div>
				</div>
			</div>
		);
	}
};

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps, { login, logout })(TopBar);
