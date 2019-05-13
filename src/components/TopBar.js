import React, { Component } from 'react';
import history from '../history.js';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, logout, adminLogin } from '../auth/authActions.js';
import { NavLink } from 'react-router-dom';
import { validateJwt, getJwtRole } from '../config/utilities.js';
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

					<div className="TopBar-btn-container">
						{!(this.state.isLoggedIn || renderLoggedIn) && (
							<>
								<button className="TopBar-login-btn" onClick={login}>
									<i className="fas fa-user" />
								</button>
								{/* <button className="" onClick={adminLogin}>
                  Admin Login
                </button> */}
							</>
						)}
						{(this.state.isLoggedIn || renderLoggedIn) && (
							<button className="TopBar-logout-btn" onClick={logout}>
								<i className="fas fa-sign-out-alt" />
							</button>
						)}
					</div>
				</div>
				{(this.state.isLoggedIn || renderLoggedIn) &&
					loggedInRole === 'student' && (
						<div className="subNav">
							<nav>
								<NavLink exact to="/student/new-project">
									<i className="fas fa-plus" /> Add New Project
								</NavLink>
								{this.props.location.pathname.match(
									/\/student\/project-view\/\d+/g
								) ? (
									this.checkOwner(this.props.project_students) ? (
										<React.Fragment>
											<NavLink
												exact
												to={`/student/edit-project/${this.props.project_id}`}
											>
												<i className="fas fa-edit" /> Edit Project
											</NavLink>
											<LeaveProject project_id={this.props.project_id} />
										</React.Fragment>
									) : (
										<JoinProject project_id={this.props.project_id} />
									)
								) : null}
								<NavLink exact to={`/student/profile/${this.props.id}`}>
									<i className="far fa-id-card" /> Your Profile
								</NavLink>
								<NavLink exact to="/profile-quick-start">
									<i className="fas fa-user-edit" /> Edit Profile
								</NavLink>
							</nav>
						</div>
					)}
				{(this.state.isLoggedIn || renderLoggedIn) &&
					loggedInRole === 'staff' && (
						<div className="subNav">
							<nav>
								<NavLink to="/admin/student-table">
									Students
								</NavLink>
								<NavLink to="/admin/project-table">
									Projects
								</NavLink>
								<NavLink to="/admin/account-table">
									Accounts
								</NavLink>
								<NavLink to="/admin/track-table">
									Tracks
								</NavLink>
								<NavLink to="/admin/cohort-table">
									Cohorts
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
		{ login, logout, adminLogin }
	)(TopBar)
);
