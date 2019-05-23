import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
//import Loadable from "react-loadable";
//import LoadingComponent from '../components/loading/LoadingComponent';

import { handleAuth } from "../auth/authActions.js";
// Admin Routes
import AdminLogin from "../auth/AdminLogin.js";
import AccountsTable from "../components/admin/accountsTable/AccountsTable";
import CohortsTable from "../components/admin/cohortsTable/CohortsTable";
import ProjectsTable from "../components/admin/projectsTable/ProjectsTable";
import StudentsTable from "../components/admin/studentsTable/StudentsTable";
import TracksTable from "../components/admin/tracksTable/TracksTable";
// Auth Routes
import Callback from "../auth/Callback.js";
import PrivateRoute from "./PrivateRoute.js";
// Public Routes
import ContactForm from '../components/student/contactForm/ContactForm';
import FilterSearch from '../components/FilterSearch/FilterSearch';
import Home from '../components/home/Home.js';
import NoMatch from '../components/404/NoMatch';
import PrivacyPolicy from '../components/legal/PrivacyPolicy';
import StudentProfile from "../components/student/profile/StudentProfile";
import TermsOfUse from '../components/legal/TermsOfUse';
import Loading from '../components/utils/Loading.js';
// Student Routes
import Projectqs from "../components/student/projectqs/Projectqs";
import ProjectView from "../components/student/projects/ProjectView";
import Profileqs from "../components/student/profileqs/Profileqs";

// const StudentProfile = Loadable({
//   loader: () => import("../components/student/profile/StudentProfile"),
//   loading: LoadingComponent
// })

// const ProjectView = Loadable({
//   loader: () => import("../components/student/projects/ProjectView"),
//   loading: LoadingComponent
// })

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
          {/* Public Routes */}
					<Route exact path="/" render={props => <Home {...props} />} />
					<Route
						path="/contact-me/:id"
						render={props => <ContactForm auth={props.auth} {...props} />}
					/>
          <Route path="/discover/:search?" component={FilterSearch} />
										
					{/* Admin Routes */}
          <Route path="/admin-login" component={AdminLogin} />
          <PrivateRoute userRole="staff" path="/admin/accounts-table" component={AccountsTable} />
          <PrivateRoute userRole="staff" path="/admin/cohorts-table" component={CohortsTable} />
          <PrivateRoute userRole="staff" path="/admin/projects-table" component={ProjectsTable} />
          <PrivateRoute userRole="staff" path="/admin/students-table" component={StudentsTable} />
          <PrivateRoute userRole="staff" path="/admin/tracks-table" component={TracksTable} />

          {/* Auth Routes */}
          <Route
            path="/callback"
            render={props => {
              this.handleAuth(props);
              return <Callback {...props} />;
            }}
          />

          {/* Student Routes */}
          <PrivateRoute userRole="student" path="/profile-quick-start" component={Profileqs} />
          <Route exact path="/student/profile/:id" component={StudentProfile} />
          <PrivateRoute
            userRole="student"
            exact
            path="/student/edit-project/:id"
            component={Projectqs}
          />
          <PrivateRoute
          userRole="student"
            exact
            path="/student/new-project"
            component={Projectqs}
          />
          <Route path="/student/project-view/:id" component={ProjectView} />
          <Route path="/404" component={NoMatch} />
          
          {/* Misc */}
          <Route path="/privacy" component={PrivacyPolicy} />
          <Route path="/terms" component={TermsOfUse} />
          <Route path="/loading" component={Loading} />
          <Route component={NoMatch} />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.auth
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { handleAuth }
  )(Routes)
);
