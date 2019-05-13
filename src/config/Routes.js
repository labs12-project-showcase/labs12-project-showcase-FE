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
import StudentTable from "../components/admin/studentTable/StudentTable.js";
import ProjectTable from "../components/admin/projectTable/ProjectTable";
import CohortsTable from "../components/admin/cohortsTable/CohortsTable";
import AdminLogin from "../auth/AdminLogin.js";

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
          <Route
            path="/contact-me/:id"
            render={props => <ContactForm auth={props.auth} {...props} />}
          />
          <Route path="/admin/student-table" component={StudentTable} />
					<Route path="/admin/project-table" component={ProjectTable} />
          <Route path="/admin/cohorts-table" component={CohortsTable} />
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
