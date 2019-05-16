import React, { Component } from 'react';
import history from '../history.js';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, logout, adminLogin } from '../auth/authActions.js';
import { NavLink } from 'react-router-dom';
import { validateJwt, getJwtRole } from '../config/utilities.js';
import { deleteStudent } from './student/profile/studentProfileActions.js';
import JoinProject from './student/projectqs/JoinProject';
import LeaveProject from './student/projectqs/LeaveProject';
import whiteLambdaLogo from '../assets/Hire-lambda-logo-white.png';

class TopBar extends Component {
	state = {
		isLoggedIn: false
	};

	componentWillMount() {
		this.unlisten = history.listen((location, action) => {
			const update = validateJwt();
			this.setState({ isLoggedIn: update });
		});
	}

	componentWillUnmount() {
		this.unlisten();
	}

	checkOwner = arr => {
		if (arr) {
			const owner = arr.filter(member => {
				return member.student_id === this.props.id;
			});
			if (owner && owner.length) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	};

	render() {
		const renderLoggedIn = validateJwt();
		const loggedInRole = getJwtRole();
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
					<NavLink exact to="/search" className="search-link">
						<h6>The best asset for your business</h6>
						<h4>
							<i className="fas fa-search" /> Start your search here!
						</h4>
					</NavLink>

					<div className="TopBar-btn-container">
						{!(this.state.isLoggedIn || renderLoggedIn) && (
							<>
								<button className="TopBar-login-btn" onClick={login}>
									Create an account / Sign in <i className="fas fa-user" />
								</button>
							</>
						)}
						{(this.state.isLoggedIn || renderLoggedIn) && (
							<button className="TopBar-logout-btn" onClick={logout}>
								Sign Out <i className="fas fa-sign-out-alt" />
							</button>
						)}
					</div>
				</div>
				{(this.state.isLoggedIn || renderLoggedIn) &&
					loggedInRole === 'student' && (
						<div className="subNav">
							<nav>
								<NavLink exact to={`/student/profile/${this.props.id}`}>
									<i className="far fa-id-card" /> Your Profile
								</NavLink>
								<NavLink exact to="/profile-quick-start">
									<i className="fas fa-user-edit" /> Edit Profile
								</NavLink>
								<NavLink exact to="/student/new-project">
									<i className="fas fa-plus" /> Add New Project
								</NavLink>
								{this.props.location.pathname.match(
									/\/student\/project-view\/\d+/g
								) ? (
									this.checkOwner(this.props.project_students) ? (
										<React.Fragment>
											<LeaveProject project_id={this.props.project_id} />
											<NavLink
												exact
												to={`/student/edit-project/${this.props.project_id}`}
											>
												<i className="fas fa-edit" /> Edit Project
											</NavLink>
										</React.Fragment>
									) : (
										<JoinProject project_id={this.props.project_id} />
									)
								) : null}
							</nav>
						</div>
					)}
				{(this.state.isLoggedIn || renderLoggedIn) && loggedInRole === 'staff' && (
					<div className="subNav">
						<nav>
							<NavLink to="/admin/students-table">
								<i className="fas fa-graduation-cap" /> Students
							</NavLink>
							<NavLink to="/admin/projects-table">
								<i className="fas fa-project-diagram" /> Projects
							</NavLink>
							<NavLink to="/admin/accounts-table">
								<i className="fas fa-align-left" /> Accounts
							</NavLink>
							<NavLink to="/admin/tracks-table">
								<i className="fas fa-code" /> Tracks
							</NavLink>
							<NavLink to="/admin/cohorts-table">
								<i className="fas fa-users" /> Cohorts
							</NavLink>
						</nav>
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		id: state.profile.profileData.id,
		project_students: state.project.projectData.students,
		project_id: state.project.projectData.id
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		{ login, logout, adminLogin, deleteStudent }
	)(TopBar)
);
