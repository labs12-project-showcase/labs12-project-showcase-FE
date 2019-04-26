import React from 'react';
import { NavLink } from 'react-router-dom';
import whiteLambdaLogo from '../assets/Hire-lambda-logo-white.png';

export default function Footer() {
	return (
		<>
			<footer>
				<NavLink exact to="/">
					<img
						className="TopBar-hire-lambda-logo"
						src={whiteLambdaLogo}
						alt="white lambda logo"
					/>
				</NavLink>
			</footer>
		</>
	);
}
