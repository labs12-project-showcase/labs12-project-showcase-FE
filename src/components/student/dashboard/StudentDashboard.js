import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import badge from '../../../assets/lambda-badge.png';
import tony from '../../../assets/tony.jpg';
import AboutMe from '../aboutMe/AboutMe';
import Endorsements from '../endorsements/Endorsements';

class StudentDashboard extends React.Component {
	// componentWillMount() {

	// }

	render() {
		return (
			<div className="student-dashboard">
				<div className="subNav">
					<nav>
						<NavLink exact to="#">
							Link-one
						</NavLink>
						<NavLink exact to="#">
							Link-two
						</NavLink>
						<NavLink exact to="#">
							Link-three
						</NavLink>
						<NavLink exact to="#">
							Link-four
						</NavLink>
					</nav>
				</div>
				<header>
					<div className="profile-container">
						<div className="picture">
							<img src={tony} alt="Tony Stark" />
						</div>
						<div className="name-cont">
							<h1>Tony Stark</h1>
							<h2>Full Stack Web Developer</h2>
							<h3>Malibu, CA</h3>
						</div>
						<div className="badge">
							<img src={badge} alt="Lambda Badge" />
							<div className="contact-btn">
								<Link to="/">Contact Me</Link>
								<Link path="/">
									<i className="fas fa-share-alt" />
								</Link>
							</div>
						</div>
						<div className="social-links">
							<i class="fab fa-linkedin-in" />
							<i class="fab fa-github" />
							<i class="fab fa-twitter" />
						</div>
					</div>
				</header>
				<main>
					<AboutMe />
					<Endorsements />
					<hr />
				</main>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		...state.studentDashboard
	};
};

export default withRouter(connect(mapStateToProps)(StudentDashboard));
