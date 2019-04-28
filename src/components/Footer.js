import React from 'react';
import { NavLink } from 'react-router-dom';
import whiteLambdaLogo from '../assets/Hire-lambda-logo-white.png';

export default function Footer() {
	return (
		<>
			<footer>
				<nav>
					<NavLink to="/">
						COURSES
					</NavLink>
					<NavLink to="/">
						ABOUT
					</NavLink>
					<NavLink to="/">
						BLOG
					</NavLink>
					<NavLink to="/">
						APPLY
					</NavLink>
					<NavLink to="/">
						CAREERS
					</NavLink>
					<NavLink to="/">
						LEGAL
					</NavLink>
					<NavLink to="/">
						CONTACT
					</NavLink>
					<NavLink to="/">
						FREE CODE BOOTCAMP 
					</NavLink>
					<NavLink to="/">
						REFERRAL
					</NavLink>
					<NavLink to="/">
						<i className="fab fa-twitter"></i>
					</NavLink>
					<NavLink to="/">
						<i className="fab fa-facebook"></i>
					</NavLink>
					<NavLink to="/">
						<i className="fab fa-github"></i>
					</NavLink>
				</nav>
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
