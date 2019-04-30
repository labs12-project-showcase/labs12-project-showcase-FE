import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAuth } from '../auth/authActions.js';
import StudentDashboard from '../components/student/dashboard/StudentDashboard';
import Callback from '../auth/Callback.js';
import Home from '../components/home/Home.js';
import Projectqs from '../components/student/projectqs/Projectqs';
import ProjectView from '../components/student/projects/ProjectView';
import ProjectEdit from '../components/student/projects/ProjectEdit';
import Profileqs from '../components/student/profileqs/Profileqs';
import ContactForm from '../components/student/contactForm/ContactForm';

class Routes extends Component {
	
	handleAuth = ({ location }) => {
		if (/access_token|id_token|error/.test(location.hash)) {
			this.props.handleAuth();
		}
	};

	render() {
	return (
		<>
			<Switch>
				<Route
					exact
					path="/"
					render={props => <Home {...props} />}
				/>
				<Route
					path="/callback"
					render={props => {
						this.handleAuth(props);
						return <Callback {...props} />;
					}}
				/>
				<Route
					exact
					path="/student/dashboard"
					render={props => <StudentDashboard {...props} />}
				/>
				<Route path="/profile-quick-start" component={Profileqs} />
				<Route
					exact
					path="/student/new-project"
					render={props => <Projectqs {...props} />}
				/>
				<Route
					path="/student/project-view"
					render={props => <ProjectView auth={props.auth} {...props} />}
				/>
				<Route
					path="/contact-me"
					render={props => <ContactForm auth={props.auth} {...props} />}
				/>
				<Route
					exact
					path="/student/project-edit"
					render={props => <ProjectEdit {...props} />}
				/>
			</Switch>
		</>
	);
	}
};

const mapStateToProps = state => {
	return {
		...state.auth
	};
};

export default withRouter(connect(mapStateToProps, { handleAuth })(Routes));

// we can add or delete later
//

// import ProjectView from '../components/student/projects/ProjectView';

// 		<>
// 			<Switch>
// 				<Route path="/student/new-project" compornet={Projectqs} />
// 				<Route path="/student/project-admin" compornet={ProjectEdit} />
// 				<Route path="/studen/project-preview" compornet={ProjectView} />
// 			</Switch>
// 		</>
