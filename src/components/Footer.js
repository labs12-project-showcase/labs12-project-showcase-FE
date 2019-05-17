import React from 'react';
import { NavLink } from 'react-router-dom';
import whiteLambdaLogo from '../assets/Hire-lambda-logo-white.png';

export default function Footer() {
	return (
		<>
			<footer>
				<nav>
					<a href="https://lambdaschool.com/courses/cs/web/">COURSES</a>
					<a href="https://lambdaschool.com/about/">ABOUT</a>
					<a href="https://lambdaschool.com/blog/">BLOG</a>
					<a href="https://lambdaschool.com/apply/">APPLY</a>
					<a href="https://lambdaschool.com/careers/">CAREERS</a>
					<a href="https://lambdaschool.com/privacy/">LEGAL</a>
					<a href="https://lambdaschool.com/contact/">CONTACT</a>
					<a href="https://lambdaschool.com/courses/cs/web/bootcamp/">
						FREE CODE BOOTCAMP
					</a>
					<a href="https://lambdaschool.com/referral/">REFERRAL</a>
					<div>
						<a href="https://twitter.com/lambdaschool">
							<i className="fab fa-twitter" />
						</a>
						<a href="https://www.facebook.com/LambdaSchoolOnline/">
							<i className="fab fa-facebook" />
						</a>
						<a href="https://github.com/LambdaSchool">
							<i className="fab fa-github" />
						</a>
					</div>
				</nav>
				<NavLink exact to="/">
					<img
						className="Footer-hire-lambda-logo"
						src={whiteLambdaLogo}
						alt="white lambda logo"
					/>
				</NavLink>
			</footer>
		</>
	);
}
