import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import whiteLambdaLogo from '../assets/Hire-lambda-logo-white.png';

export default function Footer() {
	return (
		<>
			<footer>
				<nav>
					<a href="https://lambdaschool.com/courses/cs/web/">
						COURSES
					</a>
					<a href="https://lambdaschool.com/about/">
						ABOUT
					</a>
					<a href="https://lambdaschool.com/blog/">
						BLOG
					</a>
					<a href="https://lambdaschool.com/apply/">
						APPLY
					</a>
					<a href="https://lambdaschool.com/careers/">
						CAREERS
					</a>
					<Link to="/privacy">
						PRIVACY
					</Link>
					<Link to="/terms">
						TERMS
					</Link>
					<a href="https://lambdaschool.com/contact/">
						CONTACT
					</a>
					<a href="https://lambdaschool.com/courses/cs/web/bootcamp/">
						FREE CODE BOOTCAMP 
					</a>
					<a href="https://lambdaschool.com/referral/">
						REFERRAL
					</a>
					<a href="https://twitter.com/lambdaschool">
						<i className="fab fa-twitter"></i>
					</a>
					<a href="https://www.facebook.com/LambdaSchoolOnline/">
						<i className="fab fa-facebook"></i>
					</a>
					<a href="https://github.com/LambdaSchool">
						<i className="fab fa-github"></i>
					</a>
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
