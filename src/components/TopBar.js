import React from 'react';
import { NavLink } from 'react-router-dom';
import loginIcon from '../assets/login.png';
import logoutIcon from '../assets/logout.png';

import whiteLambdaLogo from '../assets/Hire-lambda-logo-white.png';

const TopBar = props => {
	const { isAuthenticated, login, logout } = props.auth;
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
					{!isAuthenticated() && (
						<button className="TopBar-login-btn" onClick={login}>
							<img src={loginIcon} alt="Logout icon" />
						</button>
					)}
					{isAuthenticated() && (
						<button className="TopBar-logout-btn" onClick={logout}>
							<img src={logoutIcon} alt="Logout icon" />
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default TopBar;
