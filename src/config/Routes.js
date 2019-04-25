import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Home from '../components/home/Home.js';
import Register from '../components/register/Register.js';
import Login from '../components/login/Login';
import Profileqs from '../components/student/profileqs/Profileqs';
import StudentDashboard from '../components/student/dashboard/StudentDashboard';
import Projectqs from '../components/student/projectqs/Projectqs';
import ProjectEdit from '../components/student/projects/ProjectEdit';
import ProjectView from '../components/student/projects/ProjectView';

const Routes = () => {
	return (
		<>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/signup" component={Register} />
				<Route path="/login" compornet={Login} />
				<Route path="/profile-quick-start" compornet={Profileqs} />
				<Route path="/student/dashboard" component={StudentDashboard} />
				<Route path="/student/new-project" compornet={Projectqs} />
				<Route path="/student/project-admin" compornet={ProjectEdit} />
				<Route path="/studen/project-preview" compornet={ProjectView} />
			</Switch>
		</>
	);
};

export default withRouter(Routes);
