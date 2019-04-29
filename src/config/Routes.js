import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import StudentDashboard from '../components/student/dashboard/StudentDashboard';
import Callback from '../auth/Callback.js';
import Home from '../components/home/Home.js';
import Projectqs from '../components/student/projectqs/Projectqs';
import ProjectView from '../components/student/projects/ProjectView';
import ProjectEdit from '../components/student/projects/ProjectEdit';
import Profileqs from '../components/student/profileqs/Profileqs';

const Routes = props => {
	let handleAuthentication = ({ location }) => {
		if (/access_token|id_token|error/.test(location.hash)) {
			props.auth.handleAuthentication();
		}
	};
	return (
		<>
			<Switch>
				<Route
					exact
					path="/"
					render={props => <Home auth={props.auth} {...props} />}
				/>
				<Route
					path="/callback"
					render={props => {
						handleAuthentication(props);
						return <Callback {...props} />;
					}}
				/>
				<Route
					exact
					path="/student/dashboard"
					render={props => <StudentDashboard auth={props.auth} {...props} />}
				/>
				<Route path="/profile-quick-start" component={Profileqs} />
				<Route
					exact
					path="/student/new-project"
					render={props => <Projectqs auth={props.auth} {...props} />}
				/>
				<Route
					path="/student/project-view"
					render={props => <ProjectView auth={props.auth} {...props} />}
				/>
				<Route
					exact
					path="/student/project-edit"
					render={props => <ProjectEdit auth={props.auth} {...props} />}
				/>
			</Switch>
		</>
	);
};

export default withRouter(Routes);

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
