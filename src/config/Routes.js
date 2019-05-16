import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { handleAuth } from "../auth/authActions.js";
// Admin Routes
import AdminLogin from "../auth/AdminLogin.js";
import AccountsTable from "../components/admin/accountsTable/AccountsTable";
import CohortsTable from "../components/admin/cohortsTable/CohortsTable";
import ProjectsTable from "../components/admin/projectsTable/ProjectsTable";
import StudentProfile from "../components/student/profile/StudentProfile";
import StudentsTable from "../components/admin/studentsTable/StudentsTable";
import TracksTable from "../components/admin/tracksTable/TracksTable";
// Auth Routes
import Callback from "../auth/Callback.js";
import PrivateRoute from "./PrivateRoute.js";
// Public Routes
import ContactForm from "../components/student/contactForm/ContactForm";
import Home from "../components/home/Home.js";
import NoMatch from "../components/404/NoMatch";
// Student Routes
import Projectqs from "../components/student/projectqs/Projectqs";
import ProjectView from "../components/student/projects/ProjectView";
import Profileqs from "../components/student/profileqs/Profileqs";

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

          {/* Admin Routes */}
          <Route path="/admin-login" component={AdminLogin} />
          <Route path="/admin/accounts-table" component={AccountsTable} />
          <Route path="/admin/cohorts-table" component={CohortsTable} />
          <Route path="/admin/projects-table" component={ProjectsTable} />
          <Route path="/admin/students-table" component={StudentsTable} />
          <Route path="/admin/tracks-table" component={TracksTable} />

          {/* Auth Routes */}
          <Route
            path="/callback"
            render={props => {
              this.handleAuth(props);
              return <Callback {...props} />;
            }}
          />

          {/* Student Routes */}
          <PrivateRoute path="/profile-quick-start" component={Profileqs} />
          <Route exact path="/student/profile/:id" component={StudentProfile} />
          <PrivateRoute
            exact
            path="/student/edit-project/:id"
            component={Projectqs}
          />
          <PrivateRoute
            exact
            path="/student/new-project"
            component={Projectqs}
          />
          <Route path="/student/project-view/:id" component={ProjectView} />
          <Route path="/404" component={NoMatch} />
          {/* No Match */}
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
