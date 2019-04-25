import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Callback from '../auth/Callback.js';
import Home from '../components/home/Home.js';

import Profileqs from '../components/student/profileqs/Profileqs';

const Routes = props => {
	let handleAuthentication = ({ location }) => {
		if (/access_token|id_token|error/.test(location.hash)) {
			props.auth.handleAuthentication();
		}
	};
	return (
		<>
			<Route path="/" render={props => <Home auth={props.auth} {...props} />} />
			<Route
				path="/callback"
				render={props => {
					handleAuthentication(props);
					return <Callback {...props} />;
				}}
			/>
			<Route path="/profile-quick-start" component={Profileqs} />
		</>
	);
};

export default withRouter(Routes);

// we can add or delete later
// import Register from '../components/register/Register.js';
// import Login from '../components/login/Login';
// import Profileqs from '../components/student/profileqs/Profileqs';
// import StudentDashboard from '../components/student/dashboard/StudentDashboard';
// import Projectqs from '../components/student/projectqs/Projectqs';
// import ProjectEdit from '../components/student/projects/ProjectEdit';
// import ProjectView from '../components/student/projects/ProjectView';

// 		<>
// 			<Switch>
// 				<Route path="/signup" component={Register} />
// 				<Route path="/login" compornet={Login} />
// 				<Route path="/profile-quick-start" compornet={Profileqs} />
// 				<Route path="/student/dashboard" component={StudentDashboard} />
// 				<Route path="/student/new-project" compornet={Projectqs} />
// 				<Route path="/student/project-admin" compornet={ProjectEdit} />
// 				<Route path="/studen/project-preview" compornet={ProjectView} />
// 			</Switch>
// 		</>
