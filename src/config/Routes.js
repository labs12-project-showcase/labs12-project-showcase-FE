import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute.js";
import { handleAuth } from "../auth/authActions.js";
import StudentProfile from "../components/student/profile/StudentProfile";
import Callback from "../auth/Callback.js";
import Home from "../components/home/Home.js";
import Projectqs from "../components/student/projectqs/Projectqs";
import ProjectView from "../components/student/projects/ProjectView";
import Profileqs from "../components/student/profileqs/Profileqs";
import ContactForm from "../components/student/contactForm/ContactForm";
import StudentsTable from "../components/admin/studentsTable/StudentsTable";
import ProjectsTable from "../components/admin/projectsTable/ProjectsTable";
import CohortsTable from "../components/admin/cohortsTable/CohortsTable";
import AccountsTable from "../components/admin/accountsTable/AccountsTable";
import AdminLogin from "../auth/AdminLogin.js";
import TracksTable from "../components/admin/tracksTable/TracksTable";
import MapboxMapContainer from "../components/mapboxMap/MapboxMapContainer";

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
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route
            path="/callback"
            render={props => {
              this.handleAuth(props);
              return <Callback {...props} />;
            }}
          />

          <Route exact path="/student/profile/:id" component={StudentProfile} />
          <PrivateRoute path="/profile-quick-start" component={Profileqs} />
          <PrivateRoute
            exact
            path="/student/new-project"
            component={Projectqs}
          />
          <Route path="/student/project-view/:id" component={ProjectView} />
          <Route exact path="/map" component={MapboxMapContainer} />
          <Route
            path="/contact-me/:id"
            render={props => <ContactForm auth={props.auth} {...props} />}
          />
          <Route path="/admin/students-table" component={StudentsTable} />
          <Route path="/admin/projects-table" component={ProjectsTable} />
          <Route path="/admin/cohorts-table" component={CohortsTable} />
          <Route path="/admin/tracks-table" component={TracksTable} />
          <Route path="/admin/accounts-table" component={AccountsTable} />
          <Route path="/admin-login" component={AdminLogin} />
          <PrivateRoute
            exact
            path="/student/edit-project/:id"
            component={Projectqs}
          />
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
